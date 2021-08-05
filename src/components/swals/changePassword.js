import Swal from 'sweetalert2'
import { changePassword } from '../../helpers/data'
import { doStringsMatch, isNewPasswordValid, isPasswordCorrect, status } from '../../helpers/validators'
import { showRequestStatus } from './requestStatus'

const titles = {
  actualPassword: "Ingrese la contraseña actual",
  newPassword: "Ingrese la nueva contraseña",
  confirmPassword: "Ingrese de nuevo la contraseña",
}

const titleSequence = [
  titles.actualPassword,
  titles.newPassword,
  titles.confirmPassword,
]

const validationMessagesSequence = [
  {
    invalid: 'La contraseña no coincide con la de la cuenta',
    empty: 'Es necesario ingresar la contraseña actual',
  },
  {
    empty: 'Es necesario ingresar una contraseña nueva',
  },
  {
    empty: 'Es necesario volver a ingresar la contraseña nueva',
    invalid: 'Las contraseñas no coinciden',
  },
]

const requestStatusMessages = {
  loading: "Cambiando contraseña",
  success: "Contraseña cambiada",
  error: "Error al cambiar contraseña",
}

export const showChangePassword = async (user) => {
  const steps = ['1', '2', '3']
  const swalQueueStep = Swal.mixin({
    confirmButtonText: 'Siguiente',
    showCancelButton: true,
    progressSteps: steps,
    input: 'password',
    reverseButtons: true,
  })

  const values = []
  let step

  const preConfirmSequence = [
    (pwd) => isPasswordCorrect(pwd),
    (pwd) => isNewPasswordValid(pwd),
    (pwd) => doStringsMatch(pwd, values[1])
  ]

  const getPreConfirm = (step) => {
    return (value) => {
      const verficationStatus = preConfirmSequence[step](value)
      if (verficationStatus !== status.success) {
        Swal.showValidationMessage(
          `<i class="fa fa-info-circle"></i> ${validationMessagesSequence[step][verficationStatus]}`
        )
      }
    }
  }

  for (step = 0; step < steps.length;) {
    if (step < 0)
      break

    const result = await swalQueueStep.fire({
      title: titleSequence[step],
      inputValue: values[step],
      confirmButtonText: step < steps.length - 1 ? 'Siguiente' : 'Confirmar',
      cancelButtonText: step > 0 ? 'Atras' : 'Cancelar',
      currentProgressStep: step,
      preConfirm: getPreConfirm(step)
    })
    console.log(result)

    if (result.dismiss === Swal.DismissReason.backdrop)
      break
    if (result.dismiss === Swal.DismissReason.esc)
      break
    if (result.dismiss === Swal.DismissReason.cancel) {
      step--
    } else {
      values[step] = result.value
      step++
    }
  }

  if (step === steps.length) {
    const newPassword = values[2]
    console.log('----------------')
    console.log(newPassword)
    showRequestStatus(async () => await changePassword(newPassword), requestStatusMessages)
  }
}
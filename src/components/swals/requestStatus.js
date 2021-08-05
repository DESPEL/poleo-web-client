import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const RequestStatus = withReactContent(Swal)

export const showRequestStatus = async (requester, titles, ...props) => {
  const properties = {
    focusCancel: false,
    showConfirmButton: false,
    footer: "",
    allowOutsideClick: false,
    ...props
  }

  const { isConfirmed, isDenied } = await RequestStatus.fire({
    ...properties,
    title: titles.loading,
    willOpen: async () => {
      RequestStatus.showLoading()
      try {
        await requester()
        RequestStatus.clickConfirm()
      } catch {
        RequestStatus.clickDeny()
      }
    }
  })

  if (isDenied) {
    await RequestStatus.fire({
      ...properties,
      title: titles.error,
      icon: "error",
      showConfirmButton: true,
    })
  }
  if (isConfirmed) {
    await RequestStatus.fire({
      ...properties,
      title: titles.success,
      icon: "success",
      showConfirmButton: true,
    })
  }
}
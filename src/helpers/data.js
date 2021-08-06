import { apiCall } from './api'
import { buildReq, withCredentials, withDataToPost, withMethod } from './decorators'

const set = (key, value) => localStorage.setItem(key, value)

export const getDefaultUser = () => {
  return {
    isDefault: true,
    isMale: true,
    profilePhoto: "./images/adaptive-icon.png",
    email: "support@poleo.com",
    dateOfBirth: {
      month: 9,
      year: 2001,
      day: 27
    },
    "name": "Poleo App"

  }
}

export const getUserData = () => {
  return apiCall(
    buildReq(
      withMethod('getUserInfo'),
      withCredentials
    )
  )
  // let data = localStorage.getItem("user")
  // if (data === null)
  //   data = getDefaultUser()
  // // little hack for consistency
  // if (data.data['personal-info'] !== undefined)
  //   data.personalInfo = data.data['personal-info']
  // return data;
}

export const getSiteData = async () => {
  return apiCall(
    buildReq(
      withMethod('siteStats'),
      withCredentials
    )
  )
  // return {
  //   paid: "123,456.78",
  //   answered: "51,126",
  // }
}

export const getHistory = async () => {
  return apiCall(
    buildReq(
      withMethod('queryPollRecord'),
      withCredentials,
    )
  )
}

export const getMyPolls = async () => {
  // return apiCall(
  //   buildReq(
  //     withMethod('queryMyPolls'),
  //     withCredentials,
  //   )
  // )
  return [
    {
      "title": "Partidos politicos mexicanos",
      "start": "14 de marzo de 2021",
      "answered": 527,
      "required": 1500,
      "questions": [
        {
          "title": "1 Como haces esta cosa que no se como se hace",
          "answers": {
            "Si": 200,
            "No": 300,
          },
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est, rerum consequatur atque similique eum quam impedit possimus assumenda illum aut unde cum! Omnis cum molestias commodi quos ullam, animi ipsum qui sed, rem aliquam fugiat temporibus obcaecati nobis quae odio rerum deleniti reiciendis eaque ea accusantium pariatur neque natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, ab possimus sequi voluptatum adipisci autem esse modi nostrum pariatur sit rem. Dolore vitae harum nam modi doloribus, magnam temporibus. Culpa sequi officiis dicta nostrum sit vero, cum incidunt expedita ullam officia! Obcaecati itaque temporibus, neque eveniet ullam optio minima debitis, pariatur soluta et, nam praesentium consectetur id provident tenetur veritatis voluptates earum. Nulla deserunt culpa expedita, sapiente quod cupiditate aperiam illum veritatis ad quos, illo corporis! Quis vero optio earum eius veniam corrupti non! Mollitia inventore, ullam totam aliquid natus earum quisquam eius, aut officiis laborum ea! Rem, magni provident. nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "2 Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "3 Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "4 Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "5 Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "6 Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
      ]
    },
    {
      "title": "Nuevo restaurante de sushi",
      "start": "38 de abril de 2021",
      "answered": 1236,
      "required": 3500,
      "questions": [
        {
          "title": "12Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est, rerum consequatur atque similique eum quam impedit possimus assumenda illum aut unde cum! Omnis cum molestias commodi quos ullam, animi ipsum qui sed, rem aliquam fugiat temporibus obcaecati nobis quae odio rerum deleniti reiciendis eaque ea accusantium pariatur neque natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, ab possimus sequi voluptatum adipisci autem esse modi nostrum pariatur sit rem. Dolore vitae harum nam modi doloribus, magnam temporibus. Culpa sequi officiis dicta nostrum sit vero, cum incidunt expedita ullam officia! Obcaecati itaque temporibus, neque eveniet ullam optio minima debitis, pariatur soluta et, nam praesentium consectetur id provident tenetur veritatis voluptates earum. Nulla deserunt culpa expedita, sapiente quod cupiditate aperiam illum veritatis ad quos, illo corporis! Quis vero optio earum eius veniam corrupti non! Mollitia inventore, ullam totam aliquid natus earum quisquam eius, aut officiis laborum ea! Rem, magni provident. nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
      ]
    },
    {
      "title": "Educación pública",
      "start": "14 de marzo de 2021",
      "answered": 3251,
      "required": 50000,
      "questions": [
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est, rerum consequatur atque similique eum quam impedit possimus assumenda illum aut unde cum! Omnis cum molestias commodi quos ullam, animi ipsum qui sed, rem aliquam fugiat temporibus obcaecati nobis quae odio rerum deleniti reiciendis eaque ea accusantium pariatur neque natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, ab possimus sequi voluptatum adipisci autem esse modi nostrum pariatur sit rem. Dolore vitae harum nam modi doloribus, magnam temporibus. Culpa sequi officiis dicta nostrum sit vero, cum incidunt expedita ullam officia! Obcaecati itaque temporibus, neque eveniet ullam optio minima debitis, pariatur soluta et, nam praesentium consectetur id provident tenetur veritatis voluptates earum. Nulla deserunt culpa expedita, sapiente quod cupiditate aperiam illum veritatis ad quos, illo corporis! Quis vero optio earum eius veniam corrupti non! Mollitia inventore, ullam totam aliquid natus earum quisquam eius, aut officiis laborum ea! Rem, magni provident. nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",

        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
      ]
    },
    {
      "title": "Educación privada",
      "start": "52 de enero de 1999",
      "answered": 1030,
      "required": 1100,
      "questions": [
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
      ]
    },
  ]
}

export const getPolls = async () => {
  return [
    {
      "title": "Partidos politicos mexicanos",
      "start": "14 de marzo de 2021",
      "answered": 527,
      "required": 1500,
      "questions": [
        {
          "title": "1 Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est, rerum consequatur atque similique eum quam impedit possimus assumenda illum aut unde cum! Omnis cum molestias commodi quos ullam, animi ipsum qui sed, rem aliquam fugiat temporibus obcaecati nobis quae odio rerum deleniti reiciendis eaque ea accusantium pariatur neque natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, ab possimus sequi voluptatum adipisci autem esse modi nostrum pariatur sit rem. Dolore vitae harum nam modi doloribus, magnam temporibus. Culpa sequi officiis dicta nostrum sit vero, cum incidunt expedita ullam officia! Obcaecati itaque temporibus, neque eveniet ullam optio minima debitis, pariatur soluta et, nam praesentium consectetur id provident tenetur veritatis voluptates earum. Nulla deserunt culpa expedita, sapiente quod cupiditate aperiam illum veritatis ad quos, illo corporis! Quis vero optio earum eius veniam corrupti non! Mollitia inventore, ullam totam aliquid natus earum quisquam eius, aut officiis laborum ea! Rem, magni provident. nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "2 Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "3 Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "4 Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "5 Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "6 Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
      ]
    },
    {
      "title": "Nuevo restaurante de sushi",
      "start": "38 de abril de 2021",
      "answered": 1236,
      "required": 3500,
      "questions": [
        {
          "title": "12Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est, rerum consequatur atque similique eum quam impedit possimus assumenda illum aut unde cum! Omnis cum molestias commodi quos ullam, animi ipsum qui sed, rem aliquam fugiat temporibus obcaecati nobis quae odio rerum deleniti reiciendis eaque ea accusantium pariatur neque natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, ab possimus sequi voluptatum adipisci autem esse modi nostrum pariatur sit rem. Dolore vitae harum nam modi doloribus, magnam temporibus. Culpa sequi officiis dicta nostrum sit vero, cum incidunt expedita ullam officia! Obcaecati itaque temporibus, neque eveniet ullam optio minima debitis, pariatur soluta et, nam praesentium consectetur id provident tenetur veritatis voluptates earum. Nulla deserunt culpa expedita, sapiente quod cupiditate aperiam illum veritatis ad quos, illo corporis! Quis vero optio earum eius veniam corrupti non! Mollitia inventore, ullam totam aliquid natus earum quisquam eius, aut officiis laborum ea! Rem, magni provident. nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
      ]
    },
    {
      "title": "Educación pública",
      "start": "14 de marzo de 2021",
      "answered": 3251,
      "required": 50000,
      "questions": [
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est, rerum consequatur atque similique eum quam impedit possimus assumenda illum aut unde cum! Omnis cum molestias commodi quos ullam, animi ipsum qui sed, rem aliquam fugiat temporibus obcaecati nobis quae odio rerum deleniti reiciendis eaque ea accusantium pariatur neque natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, ab possimus sequi voluptatum adipisci autem esse modi nostrum pariatur sit rem. Dolore vitae harum nam modi doloribus, magnam temporibus. Culpa sequi officiis dicta nostrum sit vero, cum incidunt expedita ullam officia! Obcaecati itaque temporibus, neque eveniet ullam optio minima debitis, pariatur soluta et, nam praesentium consectetur id provident tenetur veritatis voluptates earum. Nulla deserunt culpa expedita, sapiente quod cupiditate aperiam illum veritatis ad quos, illo corporis! Quis vero optio earum eius veniam corrupti non! Mollitia inventore, ullam totam aliquid natus earum quisquam eius, aut officiis laborum ea! Rem, magni provident. nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",

        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
      ]
    },
    {
      "title": "Educación privada",
      "start": "52 de enero de 1999",
      "answered": 1030,
      "required": 1100,
      "questions": [
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
        {
          "title": "Como haces esta cosa que no se como se hace",
          "answers": {
            "cosa a": 200,
            "cosa b": 300,
            "cosa c": 250,
            "cosa d": 400,
          },
          "description": "nose algo que dice que esta escrito aqui que trata sobre la pregutna y como funcionan las cosas de la pregunta que es un texto de prueba",
        },
      ]
    },
  ]
}

export const getAvailablePolls = () => {
  return apiCall(
    buildReq(
      withMethod('queryAvailablePolls'),
      withCredentials
    )
  )
}

export const getFinancialRecord = () => {
  return apiCall(
    buildReq(
      withMethod('queryFinancialRecord'),
      withCredentials
    )
  )
}

export const updateUserInfo = (data) => {
  return apiCall(
    buildReq(
      withMethod('editProfileData'),
      withDataToPost(data),
      withCredentials,
    )
  )
}

export const changePassword = async (newPassword) => {
  const data = await getUserData()
  data.password = newPassword
  const response = await updateUserInfo(data)
  set('password', newPassword)
  return response
}


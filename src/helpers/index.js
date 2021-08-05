let idNumber = 0
export const uniqueId = (id) => {
  return `${id}-${idNumber++}`
}

export const formatCurrency = amount => amount.toLocaleString(undefined, {minimumFractionDigits: 2})

export const createStateChangerBuilder = (state, setState) => {
  const stateChanger = (propName) => {
    return (value) => {
      state[propName] = value
      setState({...state})
    }
  }
  return stateChanger
}

export const createInputHandler = (callback) => {
  return (event) => {
    return callback(event.target.value)
  }
}

export const removeEmpty = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] === Object(obj[key])) newObj[key] = removeEmpty(obj[key]);
    else if (obj[key] !== undefined) newObj[key] = obj[key];
  });
  return newObj;
};
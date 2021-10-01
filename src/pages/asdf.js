const arrayToCSVString = (objects, separator=',', defaultValue=undefined) => {
  const headers = Array.from(objects.reduce((list, object) => Object.keys(object).map(key => list.add(key)) && list , new Set()))
  const data = objects.map(object => headers.map(key => object[key] ? object[key] : defaultValue).join(separator) + '\r\n')
  return [headers, ...data].join('')
}
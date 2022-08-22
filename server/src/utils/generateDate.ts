const generateDate = () => {
  const timestamp = Date.now()
  const date = new Date(timestamp)

  const year = date.getFullYear().toString()
  let month: number | string = +date.getMonth().toString() + 1
  let day = date.getDate().toString()
  let hour = date.getHours().toString()
  let minutes = date.getMinutes().toString()

  if (+day < 10) day = `0${day}`
  if (month < 10) month = `0${month}`
  if (+hour < 10) hour = `0${hour}`
  if (+minutes < 10) minutes = `0${minutes}`

  return `${hour}:${minutes} ${day}.${month}.${year}`
}

export default generateDate

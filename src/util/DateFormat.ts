const DateFormat = (createdAt: string) => {
  const dateOrigin = new Date(createdAt)
  const year = dateOrigin.getFullYear()
  const month = dateOrigin.getMonth() + 1
  const date = dateOrigin.getDate()

  return `${year}/${month}/${date}`

}

export default DateFormat

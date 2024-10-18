const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const days = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
]

export function getDateString(date: Date) {
  const year = date.getFullYear()
  const dateNumber = date.getDate()
  
  const monthIndex = date.getMonth()
  const monthName = months[monthIndex]

  const dayIndex = date.getDay()
  const dayName = days[dayIndex]

  const formatted = `${dayName}, ${dateNumber} ${monthName} ${year}`
  return formatted
}

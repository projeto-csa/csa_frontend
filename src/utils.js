export const timeFormat = (_startTime, _endTime) => {
  var weekDays = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]
  var startTime = new Date(_startTime)
  var endTime = new Date(_endTime)

  var result = weekDays[startTime.getDay()-1] + ","
  result += startTime.getHours()+"h"+
            (startTime.getMinutes() !== 0 ? startTime.getMinutes() : '')
  result += "-"
  result += endTime.getHours()+"h"+
            (endTime.getMinutes() !== 0 ? endTime.getMinutes() : '')
  return result
}

export var weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

const roundValue = (toRound, truncation) => {
  return toRound !== 0 ?
                 (toRound % truncation === 0 ?
                    toRound
                    : toRound + (truncation - (toRound % truncation)) )
                 : 0
}
export const timeFormat = (_startTime, _endTime) => {
  var startTime = new Date(_startTime)
  var endTime = new Date(_endTime)

  var result = weekDays[startTime.getDay()] + ","

  var startMinutes = roundValue(startTime.getMinutes(), 10)
  result += (startTime.getHours() + (startMinutes === 60 ? 1 : 0)) + "h"
  result += (startMinutes === 0 || startMinutes === 60 ? '' : startMinutes)

  result += "-"
  var endMinutes = roundValue(endTime.getMinutes(), 10)
  result += (endTime.getHours() + (endMinutes === 60 ? 1 : 0)) + "h"
  result += (endMinutes === 0 || endMinutes === 60 ? '' : endMinutes)

  return result
}

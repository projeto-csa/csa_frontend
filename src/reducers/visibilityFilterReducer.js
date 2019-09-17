import { combineReducers } from 'redux'

import { weekDays } from '../utils'

const regionFilter = (state = {}, action) => {
  switch(action.type){
    case 'SET_REGIONS':
      return action.regions ? action.regions.reduce( (obj, item) => ({...obj, [item]: false}), {} ) : {}
    case 'TOGGLE_REGION':
      return {...state, [action.region]: !state[action.region]}
    default:
      return state
  }
}

const weekDaysInitialState = Object.values(weekDays).reduce( (obj, value) => ({...obj, [value]: false}), {})
const weekDayFilter = (state = weekDaysInitialState, action) => {
  switch(action.type){
    case 'TOGGLE_DAY':
      return {...state, [action.day]: !state[action.day]}
    default:
      return state
  }
}

const visibilityFilter = combineReducers({
  regionFilter,
  weekDayFilter
})




export default visibilityFilter

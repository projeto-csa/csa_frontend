import { combineReducers } from 'redux'

import location from './locationReducer'
import user from './userReducer'
import csas from './csasReducer'
import screenSize from './screenSizeReducer'
import visibilityFilter from './visibilityFilterReducer'

const reducer = combineReducers({
  screenSize,
  location,
  user,
  csas,
  visibilityFilter
})

export default reducer

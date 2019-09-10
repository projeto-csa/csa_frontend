import { combineReducers } from 'redux'

import user from './userReducer'
import csas from './csasReducer'
import screenSize from './screenSizeReducer'
import visibilityFilter from './visibilityFilterReducer'

const reducer = combineReducers({
  screenSize,
  user,
  csas,
  visibilityFilter
})

export default reducer

import { combineReducers } from 'redux'

import user from './userReducer'
import csas from './csasReducer'
import screenSize from './screenSizeReducer'
import filteredCSAs from './filteredCSAsReducer'
const reducer = combineReducers({
  screenSize,
  user,
  csas,
  filteredCSAs
})

export default reducer

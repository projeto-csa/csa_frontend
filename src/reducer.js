import { combineReducers } from 'redux'

import user from './userReducer'
import screenSize from './screenSizeReducer'

const reducer = combineReducers({
  screenSize,
  user
})

export default reducer

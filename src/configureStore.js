import { createStore } from 'redux'
//import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction'
import reducer from './reducers/reducer'

var store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

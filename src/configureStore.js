import { createStore, applyMiddleware } from 'redux'
//import thunk from 'redux-thunk'
//import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction'
import reducer from './reducers/reducer'

var store = createStore(
  reducer,
//  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

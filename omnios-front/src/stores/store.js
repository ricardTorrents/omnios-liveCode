

import reducers from '../reducers';
import {createStore} from "redux"

const packages = [];


// Push middleware that you need for both development and production


// if (process.env.NODE_ENV === 'development') {
//   // Push the middleware that are specific for development
//   packages.push(createLogger());
//   enhancers.push(DevTools.instrument());
// }




const store = createStore(
  reducers
  
);
export default store;
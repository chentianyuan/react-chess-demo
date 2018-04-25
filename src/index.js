import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './container/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducer.js'
import registerServiceWorker from './registerServiceWorker'


// const routes = require('./routes/index')
// 如果reducer中含有异步操作，在这里需要compose redux-thunk的内置thunk
// react-redux默认只支持同步操作
const store = createStore(reducers)
ReactDOM.render(
    (<Provider store={store}>
        <App />
    </Provider>),
    document.getElementById('root')
)
registerServiceWorker()

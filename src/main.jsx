import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux'
import ProductReducer from './reducers/ProductReducer.jsx'
import { Provider } from 'react-redux'


const store = createStore(ProductReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

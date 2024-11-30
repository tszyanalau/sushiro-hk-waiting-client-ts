import React from 'react'
import ReactDOM, { Container } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Provider } from 'react-redux'
import App from './App'
// import Disclaimer from './pages/Disclaimer'
// import ErrorBoundary from './pages/ErrorBoundary'
import reportWebVitals from './reportWebVitals'
import { handleDOMChange } from './service/lang'
import store from './store'
import i18n from './i18n'
import './assets/styles/index.scss'

const Root = () => (
  <Routes>
    <Route path="/" element={<App />} />
    {/* <Route path="/disclaimer" element={<Disclaimer />} /> */}
    {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
  </Routes>
)

const router = createBrowserRouter([
  {
    path: '*',
    element: <Root />,
    // errorElement: <ErrorBoundary />,
  },
])

// handle index.html translation
handleDOMChange(i18n.language)

const root = ReactDOM.createRoot(document.getElementById('root') as Container)
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

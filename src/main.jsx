import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Expenses from './routes/expenses'
import Invoices from './routes/invoices'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path="expenses" element={<Expenses/>}/>
        <Route path="invoices" element={<Invoices/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)

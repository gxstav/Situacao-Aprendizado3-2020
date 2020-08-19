import React from 'react'
import { BrowserRouter , Route } from 'react-router-dom'

import Home from './pages/Home'
//
// ADICIONAR MAIS PÁGINAS AQUI
//

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  )
}

export default Routes;
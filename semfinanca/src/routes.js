import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CadastroGasto from './pages/CadastroGasto'
import Financas from './pages/Financas'



function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={CadastroGasto}></Route>
            <Route path="/financas" exact component={Financas}></Route>
        </BrowserRouter>
    );
}

export default Routes;
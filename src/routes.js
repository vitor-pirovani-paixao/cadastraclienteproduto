import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom'; 
import Home from './pages/Home/index'; 
import CadastroProduct from './pages/CadastroProduct/index'; 
import CadastroUser from './pages/CadastroUser/index'; 
import FinalCadastro from './pages/FinalCadastro/index'; 

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/cadastrarproduto' component={CadastroProduct} /> 
                <Route path='/cadastrarusuario' component={CadastroUser} />
                <Route path='/cadastroefetuado' component={FinalCadastro} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;


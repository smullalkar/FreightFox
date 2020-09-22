import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Home from "../Components/Home/Home"
import EditPayment from "../Components/Editpayment/EditPayment"
import AddPayment from '../Components/Addpayment/AddPayment'

const Routes = () => {
    return (
        <div>
            <nav className="navbar bg-dark navbar-light justify-content-sm-center justify-content-center justify-content-md-between justify-content-lg-between">
                <img alt='...' src='/logo.jpeg' className="navbar-brand ml-0 ml-sm-0 ml-md-5 ml-lg-5" style={{ width: '140px', height: '70px' }} />
                <form className="form-inline">
                    <Link to='/'><img alt='...' className='mr-lg-3' src='/home.svg' style={{ width: '20px', height: '18px' }} /></Link>
                    <Link to='/add'><div className="btn my-2 text-light my-sm-0">ADD PAYMENT</div></Link>
                    <div className="btn my-2 text-light my-sm-0 mr-lg-5 mr-sm-0 mr-md-0 mr-0">CONTACT US</div>
                </form>
            </nav>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/edit/:id' component={EditPayment} />
                <Route path='/add' component={AddPayment} />
                <Route render={() => <div>Error: 404, Page not found</div>} />
            </Switch>
        </div>
    )
}

export default Routes
import React,{Fragment,useState} from 'react';
import {NavLink,Link} from 'react-router-dom';
import Signout from '../Signout';


const NavbarAuth = ({ session }) => (
  <Fragment>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <NavLink className="navbar-brand" href="/">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <NavLink  to="/">
        <a className="nav-link">Home <span className="sr-only">(current)</span></a>
        </NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/search">
        <a className="nav-link" >Buscar</a>
        </NavLink>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
    <NavLink to="/recipe/add">
        <a className="nav-link">Agregar/recetas</a>
        </NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/profile">
        <a className="nav-link" >Perfil</a>
        </NavLink>
      </li>
      <li className="nav-item">
      <Signout/>
      </li>
      </ul>
    </form>
  </div>
</nav>
<hr/><hr/><hr/> 
    <h4>
    Welcome, <strong>{session.getCurrentUser.username}</strong>
  </h4>
  </Fragment>

)
const NavbarUnAuth=()=>(
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <Link className="navbar-brand" to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <NavLink  to="/">
        <a className="nav-link">Home <span className="sr-only">(current)</span></a>
        </NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/search">
        <a className="nav-link" >Search</a>
        </NavLink>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
    <NavLink to="/Signin">
        <a className="nav-link">Signin</a>
        </NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/Signup">
        <a className="nav-link" >Signup</a>
        </NavLink>
      </li>
      </ul>
    </form>
  </div>
</nav>
)


const  Navbar =({session})=>(
 
      <Fragment> 
      {session && session.getCurrentUser ? (
      <NavbarAuth session={session} />
    ) : (
      <NavbarUnAuth />
    )}
    
        </Fragment>
 
) 

export default  Navbar 
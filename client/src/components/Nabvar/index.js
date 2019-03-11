

import React,{Fragment} from 'react';        

const NavbarUnAuth=()=>(
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/search">Search</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
        <a className="nav-link" href="/Signin">Signin</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Signup">Signup</a>
      </li>
      </ul>
    </form>
  </div>
</nav>
)

export default class Nabvar  extends React.Component	{
  render() {
    return (
      <Fragment> 
      <NavbarUnAuth/>
      </Fragment>
    );
}}


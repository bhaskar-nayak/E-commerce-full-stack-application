import React from'react';
import { Link,} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons';
function Navbar({cartSize}){
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand mb-2" to={"/"}> <img src={'images/brandimg.jpg'} alt='product image' width="50px"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/Products"}>Products</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            FootWear
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/Products"}>Nike Sneakers</Link></li>
            <li><Link className="dropdown-item" to={"/Products"}>Basket Ball</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to={"/Products"}>Skateboards</Link></li>
            <li><Link className="dropdown-item" to={"/Products"}>Classics</Link></li>
            <li><Link className="dropdown-item" to={"/Products"}>Slides and Sandals</Link></li>
           </ul>
         </li>
         <li className="cart">
           <Link className="nav-link" to={"/Cart"}><FontAwesomeIcon icon={faCartShopping}/><span className='bg-white text-danger'>{cartSize}</span></Link>
       </li>
       <li className="login">
           <Link className="nav-link" to={"/Login"}><span className='p-1 mb-1 bg-light text-dark'>Login</span><FontAwesomeIcon icon={faRightToBracket}/></Link>
       </li>
      </ul>     <form className="d-flex" role="search">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
     </form>
    </div>
   </div>
 </nav>
         </>
    )
}
export default Navbar;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";



const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  nav-yellow fixed-top mynav pb-2 pt-2 mb-10">
                <div className="container">
                    <div className="navbar-brand align-self-baseline">
                        <FontAwesomeIcon icon={faCartShopping} className="me-2" style={{color:'red'}} /> BigBasket
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <div className="navbar-nav ms-auto mb-2 mb-lg-0 text-dark">
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <strong>Categories</strong>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                                    {/* {categoryList.map(category => (
                                        <li key={category.categoryId}>
                                            <Link className="dropdown-item" to={`/product/${category.categoryId}`}>{category.categoryName}</Link>
                                        </li>
                                    ))} */}
                                </ul>
                            </div>
                            {/* {
                                isLoggedIn ? <div className="nav-item dropdown" >
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FontAwesomeIcon icon={faCartShopping} className="me-2" />{cartProducts.length}
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                                        {(cartProducts && cartProducts.length > 0) && cartProducts.map(cartItem => (
                                            <li key={cartItem.productId}>
                                                <Link className="dropdown-item" to={'/'} >
                                                    <div key={cartItem.productId} className="border-top d-flex mt-2 " style={{ width: "200px" }}>
                                                        <img className="img-fluid h-25 w-25 p-2" src={cartItem.productImageUrl} alt="" />
                                                        <div className="ps-3">
                                                            <p className="p-0 m-0 fw-semibold"><b>{cartItem.productName}</b></p>
                                                            <p className="p-0 m-0">Price: {cartItem.productPrice}</p>
                                                            <p className="text-start"><button className="btn">QTY : <b>{cartItem.quantity}</b> </button></p>
                                                            <Button onClick={() => { deleteCart(cartItem) }}> <FontAwesomeIcon icon={faTrash} className="sm-2" /></Button>

                                                        </div>
                                                    </div>

                                                </Link>
                                            </li>
                                        ))} 
                                        <Button className="btn btn-secondary form control" >View Cart</Button>
                                        <Button className="btn btn-success form control" onClick={() => { showCheckout() }}>Checkout</Button>

                                    </ul>*/}
                        </div> : <div className="nav-item">
                            <a className="nav-link " id="navbarDropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                            </a>

                        </div>




                        {/* {
                            isLoggedIn ? (<div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon={faUser} />  {loginIbj.name}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li >
                                        <Link className="dropdown-item" onClick={() => { handleLogout() }} to={'/'}>Logout</Link>
                                    </li>

                                </ul>
                            </div>) : (<div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon={faUser} />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li >
                                        <Link className="dropdown-item" onClick={() => { showLoginModal() }}>Login</Link>
                                    </li>
                                    <li >
                                        <Link className="dropdown-item" onClick={() => { setRegisteModal(true) }}>Register</Link>
                                    </li>
                                </ul>
                            </div>
                            )} */}

                    </div>
                </div>

            </nav >
        </div>

    );
};

export default Navbar;
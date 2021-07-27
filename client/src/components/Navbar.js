import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div class="row">
                        <div class="col-lg-12">
                            <nav class="navbar navbar-expand-lg navbar-light bg-light navigationbar">
                                <a class="navbar-brand">Navbar</a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    {/* <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <Link to="/products" class="nav-link bluee" >Products</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/likes" class="nav-link">Likes</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to='/checkout' class="nav-link">Checkout</Link>
                                    </li>
                                </ul> */}
                                    <ul class="navbar-nav">
                                        <li class="nav-item active">
                                            <a href="/products" class="nav-link">create product</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/published" class="nav-link">products</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/likes" class="nav-link">likes</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/checkout" class="nav-link">Checkout</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}
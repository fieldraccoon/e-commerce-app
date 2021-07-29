import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light navigationbar">
                                <a className="navbar-brand">Navbar</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    {/* <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link to="/products" className="nav-link bluee" >Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/likes" className="nav-link">Likes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/checkout' className="nav-link">Checkout</Link>
                                    </li>
                                </ul> */}
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <a href="/products" className="nav-link">create product</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/published" className="nav-link">products</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/likes" className="nav-link">likes</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/checkout" className="nav-link">Checkout</a>
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
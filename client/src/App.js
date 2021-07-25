import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"

import product_page from "./components/product_page.component.js"
import likes_page from "./components/likes_page.component.js"
import checkout_page from "./components/checkout_page.component.js"

function App() {

  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/products" exact component={product_page} />
        <Route path="/likes" component={likes_page} />
        <Route path="/checkout" component={checkout_page} />
      </div>
    </Router>

  );
}

export default App;

import React, { Component } from 'react';
import axios from "axios"

// const Product = props => (
//     <tr>
//         <td>{props.product.name}</td>
//         <td>{props.product.description}</td>
//         <td>{props.product.duration}</td>
//     </tr>
// );

export default class likes_page extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            product_name: '',
        }
    }

    componentDidMount() {

        axios.get("http://localhost:5000/products/")
            .then(response => {

                this.setState({
                    products: response.data,
                })
            })

    }
    
    deleteProduct() {
        console.log("hello")
    }

    render() {
        const { products, deleteProduct} = this.state;

        return (
            <div>
                <h2>Products Available</h2>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Item name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.product_name}</td>
                            <td>{product.product_description}</td>
                            <td>{"$" + product.product_price}</td>
                            <td>{product._id}</td>
                            <td><button class="btn" onClick={this.deleteProduct}>Delete</button></td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}
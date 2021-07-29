import React, { Component } from 'react';
import axios from "axios"

const Product = props => (
    <tr>
        <td>{props.product.name}</td>
        <td>{props.product.description}</td>
        <td>{props.product.duration}</td>
    </tr>
);

export default class likes_page extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        axios.get("http://localhost:5000/products/")
            .then(response => {
                // this.state = {
                //     products: []
                // }
                // const products =  response.data 
                this.setState({ products: response.data })
                // .catch(err => {
                //     console.log(err)
                // })
                
            })

    }

    // productList() {
    //     return this.state.products.map(currentproduct => {
    //       return <Product product={currentproduct} key={currentproduct._id}/>;
    //     })
    //   }

    render() {
        return (
            <div>
                <h2>Products Available</h2>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Item name</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <body>
                        {/* {products.map((product) => (
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))} */}
                    </body>
                </table>
            </div>
        )
    }
}
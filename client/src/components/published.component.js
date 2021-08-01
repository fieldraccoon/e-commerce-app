import React, { Component } from 'react';
import axios from "axios"

// const Product = props => (
//     <tr>
//         <td>{props.product.name}</td>
//         <td>{props.product.description}</td>
//         <td>{props.product.duration}</td>
//         {/* <td>
//             <Link to={"https://localhost:5000/products/"}
//         </td>
//     </tr> */}
// );

export default class likes_page extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            product_name: '',
        }
        this.deleteProduct = this.deleteProduct.bind(this)
        this.likeProduct = this.likeProduct.bind(this)

    }

    componentDidMount() {

        axios.get("http://localhost:5000/products/")
            .then(response => {

                this.setState({
                    products: response.data,
                })
            })

    }

    deleteProduct(id) {
        console.log("hello")
        console.log(id)
        var url = `http://localhost:5000/published/${id}`
        console.log(url)
        axios.delete(url)
        window.location.reload();

    }


    likeProduct(name) {
        console.log(name)
        axios.post(`http://localhost:5000/likes/add/`, name)
    }

    render() {
        const { products, deleteProduct, likeProduct } = this.state;


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
                            < tr >
                            <td>{product.product_name}</td>
                            <td>{product.product_description}</td>
                            <td>{"$" + product.product_price}</td>
                            <td><button class="btn" onClick={() => {this.deleteProduct(product._id)}} value={product._id}>Delete</button></td>
                            <td><button class="btn" onClick={() => {this.likeProduct(product.product_name)}} value={product._id}>Like</button></td>
                        </tr>
                    ))}
                </table>
            </div >
        )
    }
}
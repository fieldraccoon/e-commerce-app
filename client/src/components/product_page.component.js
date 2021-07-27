import React, { Component } from 'react';
import axios from 'axios';
export default class product_page extends Component {
    constructor(props) {
        super(props);
        this.set_name = this.set_name.bind(this);
        this.set_description = this.set_description.bind(this);
        this.set_price = this.set_price.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
                product_name: '', 
                product_description: '', 
                product_price: null,
        }
    }

    set_name(e) {
        this.setState({
            product_name: e.target.value, 
        })
    }   

    set_description(e) {
        this.setState({
            product_description: e.target.value, 
        })
    }   

    set_price(e) {
        this.setState({
            product_price: e.target.value, 
        })
    }   

    onSubmit(e) {
        e.preventDefault();

        const submitted_product = {
            product_name: this.state.product_name,
            product_description: this.state.product_description,
            product_price: this.state.product_price,
            }
        
        console.log(submitted_product);

        axios.post('http://localhost:5000/product/add', submitted_product)
        .then(res => console.log(res.data))

        this.setState({
            product_name: '', 
            product_description: '',
            product_price: '',
        })
    }


    render() {
        return (
            <div>
                <h1>products</h1>
                <h3>Create a new product</h3>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Item name: </label> <br></br>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.product_name}
                            onChange={this.set_name}
                        />
                        <label>Description: </label><br></br>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.product_description}
                            onChange={this.set_description}
                        /><label>Price: </label><br></br>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.product_price}
                            onChange={this.set_price}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Productr" className="btn btn-primary" />
                    </div>
                </form>


            </div>
        )
    }
}
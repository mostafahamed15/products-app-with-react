import React, { Component } from 'react';
import ProductRow from './ProductRow.js';
import ProductTableHeader from './ProductTableHeader.js';

class ProductTable extends Component {
    render() {
        let productAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
        let rows = [];
        
        productAsArray.forEach(product => {
            rows.push(
                <ProductRow product={product} key={product.id}></ProductRow>
            )
        })
        console.log(rows)
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                        <ProductTableHeader column="name"></ProductTableHeader>
                        <ProductTableHeader column="price"></ProductTableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default ProductTable;

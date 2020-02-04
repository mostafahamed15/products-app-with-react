import React, { Component } from 'react';
import './ProductTableHeader.css';

class ProductTableHeader extends Component {
    render() {
    
        return(
            <div className="container">
                {this.props.column}
                <button className="ProductTableHeader-current">&#x25B2;</button>
                <button>&#x25BC;</button>
            </div>
        )
    }
}

export default ProductTableHeader;
import React, { Component } from 'react';
import './ProductTableHeader.css';

class ProductTableHeader extends Component {
    render() {
        let currentSort = this.props.currentSort.column === this.props.column ? this.props.currentSort.direction : false;
        return(
            <div className="container">
                {this.props.column}
                <button 
                className={currentSort === "asc" ? "ProductTableHeader-current" : ''}
                >&#x25B2;</button>
                <button
                className={currentSort === "desc" ? "ProductTableHeader-current" : ''}
                >&#x25BC;</button>
            </div>
        )
    }
}

export default ProductTableHeader;
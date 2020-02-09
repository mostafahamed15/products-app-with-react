import React, { Component } from 'react';
import Search from './Search.js';
import AddProduct from './AddProduct.js';
import ProductTable from './ProductTable.js';

var PRODUCTS = {
    '1': {id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
    '2': {id: 2, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Cello'},
    '3': {id: 3, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
    '4': {id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
    '5': {id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
    '6': {id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'}
  };
  

class Products extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      filterText: '',
      inStockOnly: false,
      products: PRODUCTS
    }
  }
  //Search func
  handleSearch(searchInput) {
    this.setState(searchInput)
    
  }
  render() {
      return(
          <div>
              <Search
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                onSearch={this.handleSearch}
              ></Search>
              <ProductTable 
                products={this.state.products}
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}></ProductTable>
              <AddProduct></AddProduct>
          </div>
      )
  }
}

export default Products;
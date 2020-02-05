import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <form>
                <input 
                  type="text" 
                  placeholder="Product Search ..."
                  value={this.props.filterText} />
                <p>
                    <input 
                      type="checkbox"
                      checked={this.props.inStockOnly} /> Only show stocked products
                </p>
            </form>
        )
    }
}

export default Search;
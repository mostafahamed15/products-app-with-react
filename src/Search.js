import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Product Search ..." />
                <p>
                    <input type="checkbox" /> Only show stocked products
                </p>
            </form>
        )
    }
}

export default Search;
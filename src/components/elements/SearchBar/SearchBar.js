import React, { Component } from 'react'
import { Search } from 'react-feather'
import '../../../App.min.css'

class SearchBar extends Component {
    state = {
        value: '',
    }

    //declaring counter
    timeout = null

    doSearch = (event) => {
        this.setState({ value: event.target.value })
        clearTimeout(this.timeout)

        this.timeout = setTimeout(() => {
            this.props.callback(this.state.value)
        }, 1000)
    }

    render() {
        return (
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                    <Search
                        color="white"
                        className="rmdb-fa-search"
                        size={33}
                    />
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={this.doSearch}
                        value={this.state.value}
                        className="rmdb-searchbar-input"
                    />
                </div>
            </div>
        )
    }
}

export default SearchBar

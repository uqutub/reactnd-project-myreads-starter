import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class BookSearch extends Component {

    state = {
        searchText: ''
    }

    inputChangeHandler = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }

    render() {
        const { searchText } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" name="searchText" onChange={this.inputChangeHandler} value={searchText} placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        );
    }
}
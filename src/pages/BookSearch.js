import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../component/BookCard';

export class BookSearch extends Component {

    state = {
        searchText: ''
    }

    inputChangeHandler = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
        this.props.search(value);
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
                    <ol className="books-grid">
                        {this.state.searchText ? this.props.books.filter((book) => (book.hasOwnProperty('imageLinks'))).map((book) => (
                            <li key={book.id}>
                                <BookCard book={book} changeShelf={this.props.changeShelf} />
                            </li>
                        )) : null}
                    </ol>
                </div>
            </div>
        );
    }
}
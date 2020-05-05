import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover"
                                            style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select onChange={({ target: { value } }) => this.props.changeShelf(book, value)} defaultValue={book.shelf}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                        )) : null}
                    </ol>
                </div>
            </div>
        );
    }
}
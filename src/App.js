import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { BookSearch, BookList } from './pages';
import * as BooksAPI from './BooksAPI'
import './App.css';

class App extends React.Component {
  state = {
    searchedBooks: [],
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books });
      });
  }

  findBookShelf(id) {
    const shelve = this.state.books.filter((book) => book.id === id);
    return (shelve.length !== 0) ? shelve[0].shelf : 'none';
  }

  searchBookHandler = (query) => {
    if (!query) {
      this.updateSearchBooks();
      return;
    }
    BooksAPI.search(query)
      .then((books) => {
        if (books.error) {
          console.log(books.items)
          this.updateSearchBooks(books.items);
          return
        }
        let newBooks = books.map((book) => {
          book.shelf = this.findBookShelf(book.id)
          return book;
        })
        this.updateSearchBooks(newBooks);
      }).catch((e) => {
        console.log('error: ', e)
      });
  }

  updateSearchBooks = (books = []) => {
    this.setState({ searchedBooks: books });
  }

  shelfChangeHandler = (book, shelf) => {
    console.log(book, shelf);
  }

  render() {
    return (
      <Fragment>
        <Route exact path='/' render={() => (
          <BookList />
        )}
        />
        <Route exact path='/search' render={() => (
          <BookSearch
            books={this.state.searchedBooks}
            search={this.searchBookHandler}
            changeShelf={this.shelfChangeHandler} />
        )}
        />
      </Fragment>
    )
  }
}

export default App
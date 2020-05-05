import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { BookSearch, BookList } from './pages';
// import * as BooksAPI from './BooksAPI'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Fragment>
        <Route exact path='/' render={() => (
          <BookList />
        )}
        />
        <Route exact path='/search' render={() => (
          <BookSearch />
        )}
        />
      </Fragment>
    )
  }
}

export default App
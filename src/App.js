import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import Search from './Search';
import BookList from './BookList';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books:[],

  }

  getAllBooks = () => {
    BooksAPI.getAll()
            .then((books) => {
              this.setState({
                books: books});
            })
  }

  componentDidMount() {
    this.getAllBooks();
  }

  
  onChange = (book, newshelf) => {
    //console.log(book)
    console.log(newshelf)
     BooksAPI.update (book, newshelf).then(()=>{
      this.getAllBooks()
     
     })
   }
 

  render()
   {
    return (
      <div className="app">
        <Route exact path='/search'
       render={()=>(
    <Search onChange={this.onChange}/>
            )}
        />
        <Route exact path='/'
           render={()=>(
        <BookList books={this.state.books}
                onChange={this.onChange}
                />)}
        />
      </div>
    )
  }
}

export default BooksApp

import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from "./BooksAPI";
import { Link } from 'react-router-dom';


class Search extends Component {
    state= {
            books: [],
        }
    

    SearchChange = (e) => {
        
BooksAPI.search(e.target.value)
        .then((searchedBooks) => {
        this.setState({
                    books: searchedBooks
                        })
                    })
            
        } 

    render() {
        //console.log(this.searchedBooks);
        const searchedBookslist= this.state.books.map((book)=>(
            <li key={book.id}>
            <Book book={book}
         onChange={this.props.onChange}
                />
            </li>
        ))
        return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/'
                      className='close-search' >
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text"
                           placeholder="Search by title or author"
                           onChange={this.SearchChange}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                {searchedBookslist}
                </ol>
            </div>
        </div>
        )
    }
}

export default Search;
import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {

    render() {
        const books = this.props.books.map((book)=>(
          (book.shelf.toLowerCase() === this.props.title.replace(/\s/g,'').toLowerCase()) &&
            <li key={book.id}>
                <Book book={book} 
                title={book.title}
                 onChange={this.props.onChange}
                />
            </li>
        ));

        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books}
                            </ol>
                        </div>
                </div>
            </div>
        )
    }

}

export default Bookshelf;

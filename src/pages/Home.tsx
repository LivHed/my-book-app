import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import Book from './Book'
import { useNavigate } from 'react-router-dom';

interface Book {
    id: string,
    name: string,
    genre: string,
    coverUrl: string,
    description: string,
    averageRating: number,
    haveRead: number,
    currentlyReading: number,
    wantToRead: number,
    userRating: number
}

function Home() {
    const [books, setBooks] = useState<Book[]>([])
    const [error, setError] = useState({})
    const [sorting, setSorting] = useState("name")

    const navigate = useNavigate();

    const handleClick = (id: string) => {
        navigate('/book/' + id);
    };

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSorting(value);
    }

    useEffect(() => {
        fetch('https://devies-reads-be.onrender.com/books?' + new URLSearchParams(
            { sortBy: sorting }))
            .then(response => response.json())
            .then(res => setBooks(res))
            .catch(err => setError(err))
    }, [sorting])

    return (
        <>
            <h1>All books</h1>
            <label> Sort books
                <select onChange={onChange} className='Select'>
                    <option about='name' value='name'>Name</option>
                    <option value='haveRead'>Have read</option>
                    <option value='currentlyReading'>Currently reading</option>
                    <option value='wantToRead'>Want to read</option>
                </select>
            </label>

            {books.length > 0 ? books.map((book: Book, index: number) =>
                <div key={index} onClick={() => handleClick(book.id)} className='Books'>
                    <img src={book.coverUrl}></img>
                    <div className='BookInfo'>Name: {book.name}</div>
                    <div className='BookInfo'>Genre: {book.genre}</div>
                </div>
            )
                : <div>(<Loader />)</div>}
        </>
    );
}

export default Home;
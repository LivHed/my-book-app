import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import { useNavigate } from 'react-router-dom';

export interface IBook {
    id: number,
    title: string,
    author: string,
    publication_year: number,
    genre: [],
    description: string,
    cover_image: string,
}

function Home() {
    const [books, setBooks] = useState<IBook[]>([])
    const [error, setError] = useState({})
    const [sorting, setSorting] = useState("title")

    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate('/book/' + id);
    };

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSorting(value);
    }

    useEffect(() => {
        fetch('https://freetestapi.com/api/v1/books?' + new URLSearchParams(
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
                    <option about='title' value='title'>Title</option>
                    <option value='author'>Author</option>
                    <option value='publication_year'>Publication year</option>
                    <option value='genre'>Genre</option>
                </select>
            </label>

            {books.length > 0 ? books.map((book: IBook, index: number) =>
                <div key={index} onClick={() => handleClick(book.id)} className='Books'>
                    <img src={book.cover_image} alt="Book cover"></img>
                    <div className='BookInfo'>Name: {book.title}</div>
                    <div className='BookInfo'>Genre: {book.genre}</div>
                </div>
            )
                : <div>(<Loader />)</div>
            }
        </>
    )
}

export default Home;
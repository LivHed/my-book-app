import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader'
import { IBook } from './Home'

const Book = () => {
    const [oneBook, setOneBook] = useState<IBook>()
    const [error, setError] = useState({})
    // Get the id param from the URL
    let { id } = useParams();

    useEffect(() => {
        fetch('https://devies-reads-be.onrender.com/books/' + id)
            .then(response => response.json())
            .then(res => setOneBook(res))
            .catch(err => setError(err))
    }, [])

    return (
        <>
            <h1>More info about this book: </h1>
            {oneBook != null ?
                <div className='OneBook'>
                    <img src={oneBook.coverUrl}></img>
                    <div className='BookInfo'>Name: {oneBook.name}</div>
                    <div className='BookInfo'>Genre: {oneBook.genre}</div>
                    <div className='BookInfo'>Description: {oneBook.description}</div>
                    <div className='BookInfo'>Average rating: {oneBook.averageRating}</div>
                    <div className='BookInfo'>Have read: {oneBook.haveRead}</div>
                    <div className='BookInfo'>Currently reading: {oneBook.currentlyReading}</div>
                    <div className='BookInfo'>Want to read: {oneBook.wantToRead}</div>
                </div>
                : <div>(<Loader />)</div>}
        </>
    )
}

export default Book
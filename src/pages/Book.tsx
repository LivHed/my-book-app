import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader'
import { IBook } from './Home'

const Book = () => {
    const [oneBook, setOneBook] = useState<IBook>()
    const [error, setError] = useState({})
    // Get the id param from the URL
    let { id } = useParams();

    useEffect(() => {
        fetch('https://freetestapi.com/api/v1/books/1' + id)
            .then(response => response.json())
            .then(res => setOneBook(res))
            .catch(err => setError(err))
    }, [])

    //ändra till de filtreringarna som finns i dokumentationen
    return (
        <>
            <h1>More info about this book: </h1>
            {oneBook != null ?
                <div className='OneBook'>
                    <img src={oneBook.cover_image} alt="Book cover"></img>
                    <div className='BookInfo'>Title: {oneBook.title}</div>
                    <div className='BookInfo'>Author: {oneBook.author}</div>
                    <div className='BookInfo'>Publication year: {oneBook.publication_year}</div> 
                    <div className='BookInfo'>Genre: {oneBook.genre}</div>
                    <div className='BookInfo'>Description: {oneBook.description}</div>
                </div>
                : <div>(<Loader />)</div>}
        </>
    )
}

export default Book
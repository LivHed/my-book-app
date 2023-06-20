import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

interface OneBook {
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

const Book = () => {
    const [oneBook, setOneBook] = useState<OneBook[]>([])
    const [error, setError] = useState({})
    // Get the userId param from the URL
    let { id } = useParams();

    useEffect(() => {
        fetch('https://devies-reads-be.onrender.com/books/' + id)
            .then(response => response.json())
            .then(res => setOneBook(res))
            .catch(err => setError(err))
    }, [])

    return (<>
        <h1>More info about this book: </h1>
        <div>{id}</div>
    </>)
}

export default Book
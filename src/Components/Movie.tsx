import { useState, useEffect } from "react"
import axios from "axios"


export default function Movie(){
    const [movies, setMovies] = useState<any[]>([])

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '0ed9c3c91af5f0aa503720ff39d94c2d',
                language: 'pt-BR'
            }
        }).then(response => {
            console.log(response)
            setMovies(response.data.results)
        })
    }

    useEffect(()=> {
        getMovies()
    },[])
    return(
        <>
        </>
    )
}
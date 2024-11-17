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
            console.log(response.data.results)
            setMovies(response.data.results)
        })
    }

    useEffect(()=> {
        getMovies()
    },[])


    return(
        <>
            <div className=" mx-auto max-w-6xl mb-16 mt-10 grid grid-cols-1 md:grid-cols-3 cursor-pointer gap-7 ">
                {
                    movies.map((movie) => {
                      return(
                        <div key={movie.id}>
                            <div className="flex items-center justify-between">
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=""  />
                                <h1>{movie.title}</h1>
                            </div>
                        </div>
                      )
                    })
                }
            </div>
        </>
    )
}
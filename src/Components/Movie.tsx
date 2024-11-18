import { useState, useEffect } from "react"
import axios from "axios"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

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
            <div className=" mx-auto max-w-6xl mb-16 mt-10 grid grid-cols-1 md:grid-cols-3 cursor-pointer gap-7 text-[#fff]">
                {
                    movies.map((movie) => {
                      return(
                        <div key={movie.id}>
                            <div className="flex items-center justify-between flex-col">
                               <div className="items-center justify-center flex">
                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=""  className=" object-cover img"/>
                               </div>
                               <h1 className="text-[30px] font-medium ">{movie.title}</h1>
                               <div className="pt-6">
                                <Link className="bg-purple-600 button px-[60px] py-[10px] font-bold" to={''}>Ver mais</Link>
                               </div>
                            </div>
                        </div>
                      )
                    })
                }
            </div>
        </>
    )
}
import Movie from "../Components/Movie";
import { BiCameraMovie } from "react-icons/bi";

export default function Movies(){
    return(
        <>
            <div>
                <div>
                    <h1 className="text-[#fff] p-7 font-bold text-[2.5rem] flex items-center"><BiCameraMovie />Filmes</h1>
                </div>
                <Movie />
            </div>
        </>
    )
}
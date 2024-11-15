import { Link } from "react-router-dom";
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
export default function Navbar(){

    return(
        <>
            <div className="flex items-center justify-between border-b-[#fff] border-[3px] border-t-transparent border-r-transparent border-l-transparent py-3 ">
                <div className="flex just items-center">
                    <a className=" text-purple-600 ml-9 logo hover:text-[#fff] hover:hover-[3px] hover:border-b-purple-600 hover:border-t-transparent hover:border-l-transparent hover:border-r-transparent" href="/">CineMovie</a>
                </div>
                <div className="text-[#fff] font-bold mr-9 text-[1.3rem]">
                    <Link className="mr-4 hover:text-purple-600 size-4" to={'/movies'} > <MovieCreationOutlinedIcon sx={{ fontSize: 34 }} /> </Link>
                    <Link className="hover:text-purple-600" to={''}> <LiveTvOutlinedIcon sx={{ fontSize: 34 }} /> </Link>
                </div>
            </div>
        </>
    )
}
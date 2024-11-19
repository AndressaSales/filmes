import banner from "../assets/banner.mp4"
export default function BannerHighlights(){
    
    return(
        <div className="w-[100%] h-[100vh] relative flex justify-center items-center banner">
            <video autoPlay loop playsInline muted className="absolute right-0 bottom-0 z-[-1] w-[100%] h-[100%] object-cover video">
                <source src={banner} type="video/mp4" />
            </video>
            <div>
                <p className="text-center text-[40px] text-[#fff] font-bold">
                A sétima arte que nos transporta para outros mundos e nos faz viver mil aventuras. Aqui no <span><b>Cine Movie</b></span>, você encontra os melhores filmes para maratonar e curtir com os amigos.
                </p>
            </div>
        </div>
    )
}
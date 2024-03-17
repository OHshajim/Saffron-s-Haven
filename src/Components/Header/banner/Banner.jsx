// import './Banner.css'
const Banner = () => {
    return (
        <div className=' flex justify-center my-3 lg:my-10'>
            <div  className='  bg-center bg-[linear-gradient(0.00deg,rgba(21,11,43,0.9),rgba(21,11,43,0)100%),url("../../../../public/Cover/Cover.png")] h-[40vh]  lg:h-[75vh]  bg-cover flex items-center  justify-center rounded-3xl w-full'>
                <div className="text-center lg:space-y-10  ">
                    <h1 className="mb-5 text-xl md:text-5xl text-white font-bold px-5 md:px-10">Discover an exceptional cooking class  tailored for you!</h1>
                    <p className="mb-5 text-[#FFFFFF] text-sm md:text-lg md:px-10 px-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+  coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className="flex items-center justify-center">
                    <button className="btn bg-[#0BE58A] text-sm md:text-xl text-black border-none rounded-3xl px-3 md:px-8 mx-5">Explore Now</button>
                    <button className="btn bg-transparent rounded-3xl text-sm md:text-xl text-white border-white px-3 md:px-8 md:mx-5">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
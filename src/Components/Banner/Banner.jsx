import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className=" bg-base-200  mt-10 mb-10 rounded-2xl lg:p-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img  src="https://i.ibb.co/TkF4w7g/banner-book.png" className="max-w-sm rounded-lg h-[250px] lg:h-full" />
                <div className=";lg:w-7/12
                 space-y-12 lg:pr-24 ">
                    <h1 className="text-3xl lg:text-5xl font-bold font-serif ">Books to freshen up <br /> your bookshelf</h1>
                  <div>
                  <Link to='/books'><button className="w-full lg:w-60 lg:px-12 text-white rounded-xl font-bold text-xl py-4 bg-[#23BE0A]">View The List</button></Link>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import { GrLocation } from "react-icons/gr";
import { IoPeopleOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const WishList = () => {
    return (
        <div className=" bg-base-100 mt-10 mb-5 p-5 border rounded-xl  ">
        <div className="h-[280px] flex gap-8">
            <div className=" bg-base-200 rounded-lg flex justify-center items-center h-full  px-16 py-10">
                <img src="https://i.ibb.co/WVhLhBj/1984.jpg" alt="Movie" className="h-full rounded-lg" />
            </div>
            <div className=" h-full w-full space-y-5 ">
                <h1 className="text-3xl font-bold font-serif">George Orwell</h1>
                <p className="font-semibold">By: <span> samasul </span></p>
                <p className="flex gap-4"><span className="font-bold">Tag</span>  <button className="px-10 rounded-full p-1 bg-base-200 mr-4 text-[#23BE0A] ml-6">#tags</button>
                    <button className="px-10 rounded-full py-1 bg-base-200 text-[#23BE0A]">#tags</button>
                    <p className="flex gap-2 items-center"><GrLocation></GrLocation> Year of Publishing: <span>1698</span></p>
                </p>

                <p className="flex gap-4"> <p className="flex gap-2 items-center"><IoPeopleOutline></IoPeopleOutline> Publisher: <span>abdul karim</span></p>
                    <p className="flex gap-2 items-center"><RiPagesLine></RiPagesLine> Page: <span>1698</span></p>
                </p>
                <div className="border border-gray-300"></div>
                <div className="flex gap-4">
                    <button className="px-10 rounded-full py-1 bg-base-300   text-blue-500">Category: Classic</button>
                    <button className="px-10 rounded-full py-1 bg-orange-200 text-orange-500">Ratings: 1.5</button>
                   <Link to='details'> <button className="px-10 rounded-full py-1 text-white bg-[#23BE0A]">View Details</button></Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default WishList;
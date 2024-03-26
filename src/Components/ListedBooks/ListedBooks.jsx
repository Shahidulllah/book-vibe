import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
   

   
    return (
        <div>
            <div className="bg-base-200 text-3xl font-bold text-center w-full py-7 rounded-xl mt-8">
                <h1>Books</h1>
            </div>
            <div className="w-full flex justify-center">
                <button className="bg-[#23BE0A] px-5 py-2 rounded-lg mt-7 text-white flex gap-3 items-center">Sort By < IoIosArrowDown></IoIosArrowDown></button>
            </div>

            <div className="flex gap-10 border-b border-gray-400 p-2 pt-10">
               <Link to=''> <button>Read Books</button></Link>
               <Link to='wishlist'> <button>Wishlist Books</button></Link>
            </div>
            <Outlet></Outlet>
        </div>

    );
};

export default ListedBooks;
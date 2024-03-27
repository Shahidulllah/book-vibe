
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import ListedBooksCard from "../ListedBooksCard/ListedBooksCard";
import { useEffect, useState } from "react";
import { getBooks } from "../../Utility/LocalStorage";


const ListedBooks = () => {
    const [listedBooks, setListedBooks] = useState([]);
    useEffect(() => {
        const storedBooks = getBooks();
        setListedBooks(storedBooks);
    }, [])
    return (
        <div>
            <div className="bg-base-200 text-3xl font-bold text-center w-full py-7 rounded-xl mt-8">
                <h1>Books</h1>
            </div>
            <div className="w-full flex justify-center">
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="bg-[#23BE0A] px-5 py-2 rounded-lg mt-7 text-white flex gap-3 items-center">Sort By < IoIosArrowDown></IoIosArrowDown></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Ratings</a></li>
                        <li><a>Number of Pages</a></li>
                        <li><a>Publish Year</a></li>
                    </ul>
                </div>

                {/* <button className="bg-[#23BE0A] px-5 py-2 rounded-lg mt-7 text-white flex gap-3 items-center">Sort By < IoIosArrowDown></IoIosArrowDown></button> */}
            </div>

            <div className="flex gap-5 border-b border-gray-300 pt-10">
                <NavLink to='listedBooks' className={({ isActive }) => isActive ? 'border-2 rounded-md  border-b-0 px-3 py-2 rounded-b-none' : 'py-2 px-3 text-gray-500'}> <button>Read Books: <span>{listedBooks.length}</span></button></NavLink>
                <NavLink to='wishlist' className={({ isActive }) => isActive ? 'border-2 rounded-md  border-b-white px-3 py-2 rounded-b-none ' : 'py-2 px-3 text-gray-500'}> <button>Wishlist Books: {listedBooks.length}</button></NavLink>
            </div>

            <div className="grid grid-cols-1 ">
                {
                    listedBooks.map(book => <ListedBooksCard key={book.id} book={book} ></ListedBooksCard>)
                }
                <Outlet></Outlet>
            </div>



        </div>

    );
};

export default ListedBooks;
import { useEffect, useState } from "react";
// import { GrLocation } from "react-icons/gr";
// import { IoPeopleOutline } from "react-icons/io5";
// import { RiPagesLine } from "react-icons/ri";
// import { Link } from "react-router-dom";
import { getBooks } from "../../Utility/LocalStorage";
import ListedBooksCard from "../ListedBooksCard/ListedBooksCard";


const WishList = () => {
    const [wishBooks, setWishBooks] = useState([]);
    useEffect(() => {
        const storedBooks = getBooks();
        setWishBooks(storedBooks);
    }, [])
    return (

        <div>
            <div className="grid grid-cols-1 ">
            {
                wishBooks.map(book => <ListedBooksCard key={book.id} book={book} ></ListedBooksCard>)
            }
        </div>
        </div>
    );
};

export default WishList;
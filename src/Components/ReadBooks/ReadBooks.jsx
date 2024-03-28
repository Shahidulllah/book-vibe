import { useEffect, useState } from "react";
import { getBooks } from "../../Utility/LocalStorage";
import ListedBooksCard from "../ListedBooksCard/ListedBooksCard";


const ReadBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    useEffect(() => {
        const storedBooks = getBooks();
        setReadBooks(storedBooks);
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 ">
                {
                    readBooks.map(book => <ListedBooksCard key={book.id} book={book} ></ListedBooksCard>)
                }
                
            </div>
        </div>
    );
};

export default ReadBooks;
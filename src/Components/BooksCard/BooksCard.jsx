import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";


const BooksCard = () => {
    const [books, setbooks] = useState([]);

    useEffect(()=>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setbooks(data))
    }, [])
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mb-8 mt-24 font-serif">Books</h1>
            <div className="grid grid-cols-3 gap-7">
            {
                books.map(card => <Cards key={card.bookId} card={card} ></Cards>)
            }
            </div>
        </div>
        
    );
};

export default BooksCard;
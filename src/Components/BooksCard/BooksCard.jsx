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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-7 mb-10">
            {
                books.map(card => <Cards key={card.id} card={card} ></Cards>)
            }
            </div>
        </div>
        
    );
};

export default BooksCard;
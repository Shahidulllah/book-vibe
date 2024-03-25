import { FaRegStar } from "react-icons/fa";


const Cards = ({ card }) => {
    const { bookName, image, category, author, rating, tags } = card;
    return (
        <div className="card bg-base-100 shadow-xl border">
            <figure className="px-7 pt-10 ">
                <img src={image} alt="Shoes" className="rounded-xl h-[300px] w-full bg-base-200 border p-16" />
            </figure>
            <div className="p-7 space-y-5">
                <div>
                    <button className="btn mr-5 text-[#23BE0A]">{tags[0]}</button>
                    <button className="btn text-[#23BE0A]">{tags[1]}</button>
                </div>
                <h1 className="text-3xl font-bold font-serif">{bookName}</h1>
                <p className="font-bold">By: <span>{author}</span></p>
                <div className="border border-dashed"></div>
                <div className="flex justify-between font-bold">
                    <p>{category}</p>
                    <p className="flex gap-3 items-center"> {rating} <FaRegStar></FaRegStar> </p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
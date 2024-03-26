import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const book = books.find(book => book.id == id)
    const {bookName, image, category, author, rating, tags, review, yearOfPublishing, publisher, totalPages} = book;
    return (
        <div className=" bg-base-100 shadow-xl mt-10 mb-5">
            <div className="w-full flex justify-between gap-10 h-[570px]">
                <div className="w-1/2 bg-base-200 rounded-lg flex justify-center items-center h-full p-10">
                    <img src={image} alt="Movie" className="h-full rounded-lg" />
                </div>
                <div className=" h-full space-y-5 w-1/2 ">
                    <h1 className="text-3xl font-bold font-serif">{bookName}</h1>
                    <p className="font-bold">By: <span> {author} </span></p>

                    <div className="border border-dashed"></div>

                    <p className="font-bold">{category}</p>

                    <div className="border border-dashed"></div>

                    <p><span className="font-bold pr-3">Reveiw:</span> {review}</p>

                    <p><span className="font-bold">Tag</span>  <button className="btn mr-5 text-[#23BE0A] ml-12">#{tags[0]}</button>
                        <button className="btn text-[#23BE0A]">#{tags[1]}</button></p>

                    <div className="border border-dashed"></div>

                    <div>
                        <table>
                            <tr>
                                <td className="w-60">Number of Pages:</td>
                                <td className="font-bold w-52">{totalPages}</td>
                            </tr>
                            <tr>
                                <td className="w-60">Publisher:</td>
                                <td className="font-bold w-52">{publisher}</td>
                            </tr>
                            <tr>
                                <td className="w-60">Year of Publishing:</td>
                                <td className="font-bold w-52">{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td className="w-60">Rating:</td>
                                <td className="font-bold w-52">{rating}</td>
                            </tr>
                        </table>
                    </div>

                    <div className="flex gap-4 mt-12">
                        <button className="btn border">Read</button>
                        <button className="btn border">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;


const Details = () => {
    return (
        <div className=" bg-base-100 shadow-xl  ">
            <div className="w-full flex justify-between gap-10 h-[570px]">
                <div className="w-1/2 bg-base-200 rounded-lg flex justify-center items-center h-full p-10">
                    <img src="https://i.ibb.co/Jm54Pyz/The-Catcher-in-the-Rye.webp" alt="Movie" className="h-full rounded-lg" />
                </div>
                <div className=" h-full space-y-4 w-1/2">
                    <h1 className="text-3xl font-bold font-serif">The name of the book</h1>
                    <p className="font-bold">By: <span>Author name</span></p>

                    <div className="border border-dashed"></div>

                    <p className="font-bold">Fiction</p>

                    <div className="border border-dashed"></div>

                    <p><span>Reveiw:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dolorum laboriosam amet iusto est dolores natus itaque, ipsam harum vero saepe quo placeat ratione? Quis necessitatibus eum officia ullam deserunt.</p>

                    <p><span className="font-bold">Tag</span>  <button className="btn mr-5 text-[#23BE0A] ml-12">#Tags here</button>
                        <button className="btn text-[#23BE0A]">#Tags here</button></p>

                    <div className="border border-dashed"></div>

                    <h1 className="">Number of Pages: <span className="font-bold ml-24">281</span></h1>
                    <h1 className="">Number of Pages: <span className="font-bold ml-24">281</span></h1>
                    <h1 className="">Number of Pages: <span className="font-bold ml-24">281</span></h1>
                    <h1 className="mr-24">Number of Pages: <span className="font-bold ml-24">281</span></h1>

                    <div className="flex gap-4">
                        <button className="btn border">Read</button>
                        <button className="btn border">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
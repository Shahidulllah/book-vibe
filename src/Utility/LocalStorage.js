import toast from "react-hot-toast";

export const getBooks = () =>{
    let books = [];
   const storedBooks = localStorage.getItem('books') ;
    if(storedBooks){
        books = JSON.parse(storedBooks);
    }
    return books;
}



export const saveBook = book =>{
    let books = getBooks();
    const isExist = books.find(b => b.id === book.id);
    if(isExist){
        return toast.error('Sorry! This book is already Added..!')
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Your book is added Successfully..!')
}

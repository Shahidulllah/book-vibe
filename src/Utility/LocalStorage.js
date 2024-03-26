const getStoredBook = () =>{
   const storedBook = localStorage.getItem('books') ;
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return [];
}



const saveBook = id =>{
    const storedBooks = getStoredBook();
    const exists = storedBooks.find(bookId=> bookId === id);
    if(!exists){
        storedBooks.push(id);
        localStorage.setItem('books', JSON.stringify(storedBooks))
    }
}



export{getStoredBook ,saveBook}
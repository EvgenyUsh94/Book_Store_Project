import React, { FC , useState} from 'react'

export interface Book {
    id: number,
    title: string,
    author: string,
    pageNum: number,
    Publisher: string,
    description: string,
    image: string,
    revue: string[],
    likes: number,
}

interface BookCardProp {
    book: Book | undefined
}

const BookCard: FC<BookCardProp> = ({ book }) => {
    const [like, setLike] = useState<number>(0)

    const handelAddLike = () => {
        setLike(like +1)
        console.log("At boon card like state:",like)
    }

    return (
        <>
            {book != undefined ?
                <div className='book-card'>
                    <img className='book-card-img' src={book.image} alt={book.title}/>
                    <div className='book-card-info'>
                        <h2>{book.title}</h2>
                        <p>{book.description}</p>
                        <a onClick={handelAddLike}>👍{book.likes}</a>
                    </div>

                </div>  
                :
                <p>book undefine</p>  
            }

        </>
    )
}

export default BookCard

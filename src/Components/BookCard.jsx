import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer w-64 h-fit bg-white" key={book.id}>
      {book.isNew && (
        <p className='bg-black text-white text-xs px-2 py-1 rounded-sm font-Poppins font-light absolute top-2 left-2'>
          Newly Added
        </p>
      )}
      <img
        src={book.img}
        alt="book_image"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="font-semibold text-lg font-Poppins mt-4 text-gray-900 truncate">
        {book.title}
      </h3>
      <div className="flex gap-2 items-center mt-3 font-Poppins">
        <span className="bg-blue-50 border border-blue-200 px-2 py-1 rounded-md text-blue-600 text-xs font-light">
          Author
        </span>
        <p className="text-gray-600 font-medium text-sm">
          {book.author}
        </p>
      </div>
      <p className="text-gray-700 text-sm font-light mt-3 leading-tight">
        {book.description.length > 50 ? book.description.substring(0, 50) + '...' : book.description}
      </p>
      <p className="text-sm font-medium mt-3 text-orange-500">
        Ratings: {book.rating}+
      </p>
      <Link to={`/book/${book.id}`}>
        <button className='mt-4 w-full px-4 py-2 bg-black text-white text-xs font-medium rounded-md hover:bg-gray-800 transition-all'>
          View Details
        </button>
      </Link>
    </div>
  )
}

export default BookCard;

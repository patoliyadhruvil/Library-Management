import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Booksdata from '../../Components/Booksdata';
import left_icon from '../../assets/left_icon.svg';

const BookDetail = () => {
  const { id } = useParams();
  const bookDatas = useSelector(state => state.book);
  const book_data = bookDatas.find(book => book.id === id);

  return (
    <section className='p-5'>
      <Link to='/browsebook'>
        <button className='flex items-center mb-5 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out'>
          <img src={left_icon} alt="Back" className='w-5 h-5 mr-2' />
          Back to Browse Books
        </button>
      </Link>

      <div className='flex flex-col md:flex-row justify-center items-start gap-10 p-5 bg-gray-50 rounded-lg shadow-md'>
        <img src={book_data.img} alt="book cover" className='h-80 w-64 object-cover rounded-lg shadow-lg' />

        <div className='flex flex-col justify-between'>
          <h2 className='font-semibold font-Poppins text-4xl text-gray-800 mb-2'>{book_data.title}</h2>
          <p className='font-base font-Poppins text-lg text-gray-600 mb-4'>{book_data.description}</p>
          <h4 className='text-lg font-semibold font-Poppins mb-2'>
            <span className='px-2 py-1 bg-blue-600 text-white font-medium text-base rounded-md'>{book_data.author}</span>
          </h4>
          <p className='font-Poppins text-md font-medium mt-1 text-orange-600'>Ratings: {book_data.rating}+</p>
        </div>
      </div>

      <Booksdata title={'See Other Books'} />
    </section>
  );
};

export default BookDetail;

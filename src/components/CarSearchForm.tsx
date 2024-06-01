"use client";
import React, { useState } from 'react';
import { redirectSearchParams } from '../utils/actions';

const CarSearchForm = () => {
const [query, setQuery] = useState('');

const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    redirectSearchParams(query);
    setQuery('');
};

  return (
    
    <form onSubmit={handleSearch} className='block p-3 bg-white border border-gray-200 rounded-lg shadow-inner mb-4'>
        <div>
            <label htmlFor="search" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Search:
            </label>
            <input
                id="search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter search query"
                className='mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
            <button type="submit" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Search</button>
        </div>
    </form>
  );
};

export default CarSearchForm;
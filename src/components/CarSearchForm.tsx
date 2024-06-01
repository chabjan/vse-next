import React, { useState } from 'react';
import BrandAndModelFormFields from './BrandAndModelFormFields';
import prisma from '../utils/prisma';

const fetchBrands = async () => {
    const brands = await prisma.brand.findMany();
    return brands;
}

const fetchCarModels = async () => {
    const models = await prisma.carModel.findMany();
    return models;
}

const CarSearchForm = async () => {
    const brands = await fetchBrands();
    const models = await fetchCarModels();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Perform search logic here
    };

    return (
        <form onSubmit={handleSearch}>
            <BrandAndModelFormFields models={models} brands={brands} />
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter search query"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default CarSearchForm;
"use client";
import { createCar } from '../utils/actions'
import { Brand, CarModel } from '@prisma/client'
import BrandAndModelFormFields from './BrandAndModelFormFields'
import { useEffect, useState } from 'react'


const NewCarForm = ({
        models,
        brands,
    }: {
        models: CarModel[]
        brands: Brand[]
    }) => {
    const [formData, setFormData] = useState({
        modelId: '',
        brandId: '',
        description: '',
        price: 0,
        color: '',
        year: 0
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [yearErrorVisible, setYearErrorVisible] = useState(false);
    const [priceErrorVisible, setPriceErrorVisible] = useState(false);
  
    useEffect(() => {

        const {
            modelId,
            brandId,
            description,
            price,
            color,
            year } = formData;

        setIsFormValid(
            modelId !== ''
            && brandId !== ''
            && description !== ''
            && price !== 0
            && color !== ''
            && year !== 0
            && !yearErrorVisible
            && !priceErrorVisible
        );

    }, [formData, yearErrorVisible, priceErrorVisible]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log('form change')
        const { name, value } = e.target;
        if (name === 'brandId') {
            console.log('brand change - change model to empty')
            setFormData(prevState => ({ ...prevState, "modelId": '' }));
        }
        setFormData(prevState => ({ ...prevState, [name]: value }));
        console.log(e.target.name, e.target.value);
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const price = parseInt(e.target.value, 10);
        console.log('price: ', price);
        if ( price < 0 ) {
            document.getElementById('price')?.classList.add('border-red-500');
            setPriceErrorVisible(true);
        } else {
            document.getElementById('price')?.classList.remove('border-red-500');
            setFormData(prevState => ({ ...prevState, "price": price }));
            setPriceErrorVisible(false);
        }
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const year = parseInt(e.target.value, 10);
        if ( year > 2024 || year < 1970 ) {
            document.getElementById('year')?.classList.add('border-red-500');
            setYearErrorVisible(true);
        } else {
            document.getElementById('year')?.classList.remove('border-red-500');
            setFormData(prevState => ({ ...prevState, "year": year }));
            setYearErrorVisible(false);
        }
    };

    return (
        <form action={createCar} className="block p-3 bg-white border border-gray-200 rounded-lg shadow-inner mb-4">
            <BrandAndModelFormFields models={models} brands={brands} onChange={handleInputChange}/>

            <div className='mb-4'>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <input
                type='text'
                id="description"
                placeholder="Car description"
                name="description" 
                required={true} 
                onChange={handleInputChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>

            <div className='mb-4'>
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input
                type='number'
                id="price"
                placeholder="Car price"
                name="price"
                required={true}
                onChange={handlePriceChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {priceErrorVisible && <div className="text-red-500 text-sm my-2">Price must be greater than 0</div>}
            </div>

            <div className='mb-4'>
                <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
                <input
                type='text'
                id="color"
                placeholder="Car color"
                name="color"
                required={true}
                onChange={handleInputChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>

            <div className='mb-4'>
                <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
                <input
                type='number'
                id="year"
                placeholder="Car year"
                name="year"
                required={true}
                onChange={handleYearChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {yearErrorVisible ? <div className="text-red-500 text-sm my-2 h-6">Year must be between 1970 and 2024</div> : <div className="text-red-500 text-sm my-2 h-6"></div> }
            </div>

            <button type="submit" title={isFormValid ? '' : 'Button is disabled until you enter all required parameters.'} disabled={!isFormValid} className={isFormValid ? 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' : 'text-black  bg-gray-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'}>
                Add Car
            </button>
        </form>
    )
}

export default NewCarForm

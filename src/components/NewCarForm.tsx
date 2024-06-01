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
        );
    }, [formData]);

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

  return (
      <form action={createCar} className="block p-3 bg-white border border-gray-200 rounded-lg shadow-inner mb-4">
        <BrandAndModelFormFields models={models} brands={brands} onChange={handleInputChange}/>

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

        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
        <input
        type='number'
        id="price"
        placeholder="Car price"
        name="price"
        required={true}
        onChange={handleInputChange}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

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

        <button type="submit" disabled={!isFormValid}>submit</button>
      </form>
  )
}

export default NewCarForm
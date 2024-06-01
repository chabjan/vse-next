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
    description: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);
  
  useEffect(() => {
    const { modelId, brandId, description } = formData;
    setIsFormValid(modelId !== '' && brandId !== '' && description !== '');
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
    <div>
      <form action={createCar} className="flex flex-col">
        <BrandAndModelFormFields models={models} brands={brands} onChange={handleInputChange}/>
        <input type="text" name="description" required={true} onChange={handleInputChange}/>
        <button type="submit" disabled={!isFormValid}>submit</button>
      </form>
    </div>
  )
}

export default NewCarForm
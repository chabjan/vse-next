'use client'
import { Brand, CarModel } from '@prisma/client'
import { Fragment, useMemo, useState } from 'react'

const BrandAndModelFormFields = ({
  models,
  brands,
  onChange,
}: {
  models: CarModel[]
  brands: Brand[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  const [brandId, setBrandId] = useState('')
  const [chosenModel, setChosenModel] = useState('default')
  
  const filteredModels = useMemo(() => {
    return models.filter((model) => model.brandId === brandId)
  }, [brandId, models])


  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrandId(e.target.value);
    setChosenModel('default');
    onChange(e);
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChosenModel(e.target.value);
    onChange(e);
  };


  return (
    <Fragment>
        <div className='mb-4'>
            <label htmlFor="brandId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select brand</label>
            <select
                id="brandId"
                name="brandId"
                required={true}
                defaultValue={'default'}
                onChange={handleBrandChange}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
                <option value={'default'} disabled>Please select brand...</option>
                {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                    {brand.name}
                </option>
                ))}
            </select>
        </div>
        <div className='mb-4'>
        <label htmlFor="modelId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select model</label>
        <select
            id='modelId'
            name="modelId" 
            value={chosenModel}
            required={true} 
            disabled={brandId==''}
            title={brandId ? '' : 'Please select brand first.'}
            onChange={handleModelChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        >
            <option value={'default'} disabled>Please select model...</option>
            {filteredModels.map((model) => (
                <option key={model.id} value={model.id}>
                {model.name}
                </option>
            ))}
        </select>
      </div>
    </Fragment>
  )
}

export default BrandAndModelFormFields

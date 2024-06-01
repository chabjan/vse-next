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
      <select
        name="brandId"
        required={true}
        defaultValue={'default'}
        id=""
        onChange={handleBrandChange}
      ><option value={'default'} disabled>Please choose brand...</option>
        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>
      <select name="modelId" value={chosenModel} required={true} disabled={brandId==''} onChange={handleModelChange}>
        <option value={'default'} disabled>Please choose model...</option>
        {filteredModels.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
    </Fragment>
  )
}

export default BrandAndModelFormFields
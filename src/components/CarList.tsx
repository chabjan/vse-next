"use client"
import { CarWithDeps } from '../types/prismaTypes';
import CarItem from './CarItem';

type Props = {
    cars: CarWithDeps[];
}

const CarList = ({ cars }: Props) => {

    console.log("loaded");
    return (
        <div className='mb-4'>
            <ul className="list-none p-0 m-0">
                {cars.map((car) => (
                    <CarItem key={car.id} car={car} />
                ))}
            </ul>
        </div>
    );
}

export default CarList;

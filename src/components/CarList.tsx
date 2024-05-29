import { CarWithDeps } from '../types/prismaTypes'
import { Car } from '@prisma/client';
import CarItem from './CarItem';

type Props = {
    cars: CarWithDeps[];
}

const CarList = ({cars}: Props) => {

    console.log("loaded");
    return (
        <div>
            {cars.map((car) => (
                <CarItem key={car.id} car={car} />
            ))}
        </div>
    )
}

export default CarList;
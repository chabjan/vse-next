"use client";
import { quickAddTestCar } from "../utils/actions";

const AddRandomCarButton = () => {
    const addRandomTestCar = () => {
        quickAddTestCar();
    }
    return (
        <button onClick={addRandomTestCar} className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Quick add test car
        </button>
    )
}

export default AddRandomCarButton;

"use client";
import { resetHomePage } from "../utils/actions";

const ResetSearchButton = () => {
    const resetSearchClick = () => {
        resetHomePage();
    }
    return (
        <button title="Reset Search" onClick={resetSearchClick} className="p-2 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-2 focus:outline-none focus:ring-gray-700 inline-flex items-center">
            <i className="pi pi-undo"></i>
        </button>
    )
}

export default ResetSearchButton;



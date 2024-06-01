"use client";

import { redirect } from "next/navigation";
import { deleteCar } from "../utils/actions";
import { Button } from "primereact/button";
import { ConfirmDialog, ConfirmDialogPassThroughOptions, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import { rejects } from "assert";
import { PassThroughOptions } from "primereact/passthrough";

interface DeleteButtonProps {
  carId: string;
}

const CarDeleteButton: React.FC<DeleteButtonProps> = ({ carId }) => {
    const [visible, setVisible] = useState(false);

    const accept = async () => {
        await deleteCar(carId);
        setVisible(false);
    }
    const reject = () => {
        setVisible(false);
    }

    return (
        <>
            <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to delete this car?" 
                header="Confirm Delete" icon="pi pi-trash text-red-600" accept={accept} reject={reject} 
                pt={{
                    acceptButton: {
                        root: {
                            className: 'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
                        }
                    },
                    rejectButton: {
                        root: {
                            className: 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
                        }
                    
                    }
                }}
                />
            <Button onClick={() => setVisible(true)}
                
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                <i className="pi pi-trash"></i>
            </Button>
        </>
    );
};

export default CarDeleteButton;
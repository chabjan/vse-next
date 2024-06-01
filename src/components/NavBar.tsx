"use client";
import Link from "next/link";
import React, { useState } from "react";
import {Ripple} from 'primereact/ripple';

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      label: "home",
      link: "/",
    }
  ];

    return (
        
<div className={"surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static"} style={{ minHeight: '80px' }}>
    <div className={"align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none"}>
        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li>
                <Link href={"/"} className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-home mr-2"></i>
                    <span>Cars</span>
                </Link>
                <Ripple />
            </li>
        </ul>
    </div>
</div>
    
    );
};

export default Navbar;
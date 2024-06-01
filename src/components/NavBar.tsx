"use client";
import Link from "next/link";
import React, { useState } from "react";
import {Ripple} from 'primereact/ripple';

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      label: "Cars",
      link: "/",
    }
  ];

    return (
        
<div className="surface-overlay py-3 px-8 shadow-2 flex align-items-center justify-content-between sticky w-full top-0" style={{ minHeight: '80px' }}>
    <div className="align-items-center justify-content-between surface-overlay left-0 top-100 z-1 shadow-2 flex flex-row">
        <ul className="list-none p-0 m-0 flex align-items-center select-none flex-row">
            {links.map((link) => (
                <li key={link.id}>
                    <Link href={link.link} className="p-ripple flex px-6 py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                        <i className="pi pi-car mr-2"></i>
                        <span>{link.label}</span>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
</div>
    
    );
};

export default Navbar;
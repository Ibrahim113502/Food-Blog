import React from "react";
import LoginForm from '../../../Loginform/index'
import LogoImg from '../../../../assets/Images/logo.png'
import { Button } from "flowbite-react";
function Footerpage() {
    return (
        <>
            <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
                <div className="mx-auto max-w-screen-xl text-center">
                    <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <img src={LogoImg} className="mr-3 sm:h-9 h-28" />
                        Flowbite
                    </a>
                    <p className="my-6 text-gray-500 dark:text-gray-400">Open-source library of over 400+ web components and interactive elements built for better web.</p>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
                        </li>
                        <li>
                            <a href="ApiExample" className="mr-4 hover:underline md:mr-6">Example</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                        </li>
                    </ul>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
                </div>
            </footer>
            {/* <LoginForm/> */}
        </>
    )
}
export default Footerpage;
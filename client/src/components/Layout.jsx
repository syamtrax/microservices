import React from "react";
import Navbar from './Navbar'
import Footer from './Footer.jsx'
export default function Layout({ children }) {
    return (
        <React.Fragment>
            <Navbar />
            <div className="body-wrapper m-auto w-[1080px] mt-10 h-[761px]">
                {children}
            </div>
            <Footer/>
        </React.Fragment>
    )
}
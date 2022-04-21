import React from "react";
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <Navbar />
            <div className="body-wrapper m-auto w-[1080px] mt-10">
                {children}
            </div>
        </React.Fragment>
    )
}
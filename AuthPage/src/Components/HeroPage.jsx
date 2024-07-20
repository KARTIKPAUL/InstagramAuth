import React from "react";
import instaHomePage from '../assets/instaHomePage.webp'

function HeroPage(){
    return(
        <div className="flex justify-center items-center flex-col gap-10">
        <h1 className="text-center text-green-500 text-5xl">Successfully Log in !</h1>
        <img src= {instaHomePage} alt="instagramHomePic" className="rounded-xl"/>
        </div>
    )
}

export default HeroPage;
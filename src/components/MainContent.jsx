import React from "react";
import {  FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import Buttons from "./buttons";
import Bio from "./bio";
import Paragraph from "./paragraph";
import Footer from "./footer";

export default function MainContent(){
    return (
        <div>
            <header>
                
            </header>
           <Bio />
            <div className="socilaMedia-buttons">
                <Buttons socialMediaIcon={<FaFacebookSquare className="icons"/>} socialMediaName={"Email"} />
            </div>
            <Paragraph title={"About"} info="I am Software Developer, still trying to figure out my way around the software development space.
                But I am going to be recognized oneday as the best software Engineer the world has ever seen. Baby steps!" />
            <Paragraph title="Intrests" info="I enjoy Music, Cooking, Visiting th Water Slides, Naruto Fan" />
            <Footer />
        </div>
    );
}
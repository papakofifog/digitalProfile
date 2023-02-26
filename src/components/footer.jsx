import React from "react";
import {  FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import ContainIcon from './containIcon'
export default function Footer(){
    return (
        <footer>
            <ContainIcon IconName={<FaFacebookSquare className="icons"/>}  />
            <ContainIcon IconName={<FaTwitterSquare className="icons" />}  />
            <ContainIcon IconName={<FaInstagramSquare className="icons" />}  />
        </footer>
    );
}
import React from "react";

export default function Buttons(props){
    return (
        <button className="button display">
            
            {props.socialMediaIcon}
    
            {props.socialMediaName}
        </button>
    );

}
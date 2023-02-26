import React from "react";

export default function Paragraph(props){
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.info}</p>
        </div>
    );
}
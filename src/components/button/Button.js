
import React from 'react'
import '../button/Button.css'
export default function Button(props) {
    return (
        <div>
            <button id='con2btn' style={props.style} >
                {props.title}
                </button>
           
        </div>


    )
}


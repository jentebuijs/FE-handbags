import React from "react";

function Button( { buttonText, disabled } ) {

    return (
        <button
            type = "button"
            onClick={() => console.log({buttonText})}
            disabled = {disabled}
        >
            {buttonText}
        </button>
    )
}

export default Button;
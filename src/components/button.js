import React from "react";

const Button = (value, onClick) => (
    <button className="bg-button-blue rounded-md font-poppins font-normal text-2xl" onClick={onClick()}>
            {value}
    </button>
)


export default Button
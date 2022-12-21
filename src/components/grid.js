import React from "react";

const Grid = (props) => (
    <div className="flex items-center justify-center">
<div className="grid grid-cols-3 gap-2 p-5">
        <div className="bg-white border-border-grey shadow-shadow-grey/25 font-poppins font-normal text-center box-border border-2 rounded-md w-box-width h-box-height absolute">{props.children}</div>
    </div>
    </div>
)

export default Grid
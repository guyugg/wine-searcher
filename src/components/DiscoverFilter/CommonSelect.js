import React from "react";
import Select from 'react-select'

function CommonSelect({ title, options, placeholder }) {
    return (
        <div className="d-flex flex-column text-start p-3 border-bottom">
            <span>{title}</span>
            <div className="mt-2">
                <Select className="neutral90" options={options} placeholder={placeholder} />
            </div>
        </div>
    )
}

export default CommonSelect;

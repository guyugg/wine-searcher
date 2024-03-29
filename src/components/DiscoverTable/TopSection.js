import React from "react";
import Select from 'react-select'

function TopSection() {
    const options = [
        { value: 1, label: 'Critic score' },
        { value: 2, label: 'Best value' },
        { value: 3, label: 'Most popular' },
        { value: 4, label: 'Lowest price' },
        { value: 5, label: 'Highest price' },
        { value: 6, label: 'Near me' }
    ];

    return (
        <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="fs-5">Top 12 results</div>
            <div className="product-text">
                <Select className="neutral90" options={options} isSearchable={false} />
            </div>
        </div>
    )
}

export default TopSection;
import React from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Form } from "react-bootstrap";
import { FaWineGlass } from 'react-icons/fa';

function SearchBar() {
    const items = [
        {
            id: 0,
            name: 'mouton'
        },
        {
            id: 1,
            name: 'krug 2002'
        },
        {
            id: 2,
            name: 'yamazaki single malt'
        }
    ];

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>
                    <FaWineGlass /> {item.name}
                </span>
            </>
        )
    }

    return (
        <Form className="w-100">
            <ReactSearchAutocomplete
                items={items}
                showItemsOnFocus
                placeholder={"Search"}
                formatResult={formatResult}
            />
        </Form>
    )
}

export default SearchBar;
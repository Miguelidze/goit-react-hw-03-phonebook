import React from "react";
import { InputFind } from '../../Components.styled';

function Filter({ filterString }) {
    return (
        <InputFind type="text" onChange={filterString} autocomplete="off" />
    )
}

export default Filter;
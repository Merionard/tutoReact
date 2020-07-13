import React from 'react';
import {SearchBar} from "./SearchBar";
import {ProductTable} from "./ProductTable";


function FilterableProductTable() {
    return <div className="container">
        <div className="row">
            <div className="col-3">
                <SearchBar/>
                <ProductTable/>
            </div>
        </div>
    </div>


}

export default FilterableProductTable
import {products} from "./SearchBar";
import {ProductCategoryRow} from "./ProductCategoryRow";
import React from "react";



export function ProductTable() {
    return<div>
    <ProductCategoryRow products={products}/>
    </div>

}
import {products} from "./SearchBar";
import {ProductTableContent} from "./ProductTableContent";
import React from "react";


export function ProductTable(props) {

    let produits = products;

    if (props.inStockOnly) {
        produits = produits.filter(p => p.stocked);
    }

    if (props.filterText !== undefined && props.filterText !== '') {
        produits = produits.filter(p => p.name.includes(props.filterText));
    }

    return <table className="table">
        <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
        </tr>
        </thead>
        <tbody>
        <ProductTableContent products={produits} category={getCategory(products)}/>
        </tbody>
    </table>

}

function getCategory(products) {

    let categorys = [];
    for (let product in products) {
        categorys.push(products[product].category);

    }

    return new Set(categorys);

}
import React from "react";
import {products} from "./SearchBar";



export class ProductCategoryRow extends React.Component {
    constructor(props) {
        super(props);
        this.products = props.products;
    }

    render() {

        let rendu = [];
        let categorys  = getCategory(products);
        let i = 0;

        categorys.forEach(c=>rendu.push(<div className="row" key={i++}>
            <h3>{c}</h3>
        </div>));
        return rendu;
    }

}

function getCategory(products){

    let categorys = [];
    for (let product in products){
        categorys.push(products[product].category);

    }

    return new Set(categorys);

}

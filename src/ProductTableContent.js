import React from "react";
import {products} from "./SearchBar";
import {ProductRow} from "./ProductRow";


/*export class ProductTableContent extends React.Component {
    constructor(props) {
        super(props);
        this.products = props.products;
        this.inStockOnly = props.inStockOnly;
        this.filterText = props.filterText;
    }

    render() {

        let rendu = [];
        let categorys = getCategory(products);
        let i = 0;

        categorys.forEach(c => {
                rendu.push(
                    <tr className='table-active'>
                        <td colSpan="2" key={i++}>{c}</td>
                    </tr>);
                rendu.push(<ProductRow category={c} products={products} inStockOnly={this.inStockOnly}
                                       filterText={this.filterText}/>)
            }
        );
        return rendu;
    }

}*/

export function ProductTableContent(props) {

    let result = [];
    props.category.forEach(c => {
        result.push(
            <tr className='table-active'>
                <td colSpan="2">{c}</td>
            </tr>);
        result.push(<ProductRow category={c} products={props.products}/>)
    });
return result;
}

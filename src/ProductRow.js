import React from "react";

export function ProductRow(props) {

    let rendu = [];
    let products = props.products;


    products.forEach(p => {
        if (p.category === props.category) {
            rendu.push(<tr className={p.stocked ? '' : 'table-danger'}>
                <td>{p.name}</td>
                <td>{p.price}</td>
            </tr>)
        }
    })
    return rendu;
}
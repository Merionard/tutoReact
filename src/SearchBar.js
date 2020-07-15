import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

export class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleChangeFilterText = this.handleChangeFilterText.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.inStockOnly = props.inStockOnly;
        this.filterText = props.filterText;
    }

    handleChangeFilterText(event) {
        this.filterText = event.target.value;
        this.props.onFilterTextChange(this.filterText);

    }

    handleCheckBox(event) {
        this.inStockOnly = event.target.checked;
        this.props.onCheckChange(this.inStockOnly);
    }


    render() {
        return (
            <div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        name="product"
                        value={this.filterText}
                        onChange={this.handleChangeFilterText}
                        placeholder="Search ..."/>
                </div>

                <div className="form-group form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="showProduct"
                        checked={this.inStockOnly}
                        onChange={this.handleCheckBox}
                        id="check1"/>
                    <label className="form-check-label" htmlFor="check1">Only show products in stock</label>
                </div>
            </div>

        )

    }
}
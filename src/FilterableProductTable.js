import React from 'react';
import {SearchBar} from "./SearchBar";
import {ProductTable} from "./ProductTable";


export class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {filterText: '', inStockOnly: false}
        this.updateFilterText=this.updateFilterText.bind(this);
        this.setStockOnly = this.setStockOnly.bind(this);
    }

    updateFilterText(filterText){
        this.setState({filterText:filterText})

    }

    setStockOnly(stockOnly){
        this.setState({inStockOnly:stockOnly});
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-3">
                    <SearchBar onFilterTextChange={this.updateFilterText} onCheckChange={this.setStockOnly}/>
                    <ProductTable filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
                </div>
            </div>
        </div>
    }
}

export default FilterableProductTable
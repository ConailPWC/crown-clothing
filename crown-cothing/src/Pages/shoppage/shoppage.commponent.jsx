import React from "react";
import './shoppage.style.scss'
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../Commponents/preview-collection/preview-collection.commponent";


class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }


    render(){
        const {collections} = this.state;
        return (
            <div className='shoppage'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        ) 
    }    
};

export default ShopPage;
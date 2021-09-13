import React from 'react';
import './directory-menu.style.scss'
import MenuItem from '../menu-item/menu-item.commponent'

class DirectoryMenu extends React.Component {
    constructor(){
        super()
        this.state =  {
            sections: [{
                title: 'HATS',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id:1
            },
            {
                title: 'JACKETS',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2
            },
            {
                title: 'SNEAKERS',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3
            },
            {
                title: 'WOMANS',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womans.png',
                size: 'large',
                id: 4
            },
            {
                title: 'MENS',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5
            }] 
        }
        
    }

    render() {
        return ( 
            <div className='directory-menu'> 
            {
                this.state.sections.map(({id, ...otherSectionProps} ) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))
            }
            </div>
        )
    }

}

export default DirectoryMenu;
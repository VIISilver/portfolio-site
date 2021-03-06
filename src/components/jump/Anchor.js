import React, { Component } from 'react'
import './Anchor.css'

export default class Anchor extends Component {

    render() {
        return (
            <div className='anchorDiv'>
                {this.props.jumpAnchorTagsArr.map(({ name }, key) => (
                    <a 
                    key={key} 
                    href={`#${name}`}
                    >
                    {name}
                    </a>
                ))}
            </div>
        )
    }
}


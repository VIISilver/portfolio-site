import React, { Component } from 'react'
import MixDrop from './MixDrop'
import './MixBtn.css'

export default class MixBtn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropDownActive: false
        }
    }

    handleClick = () => {
        this.setState({dropDownActive: !this.state.dropDownActive})
    }

    render() {

        return (
            <div className='mix-btn-wrap'>
                <button 
                onClick={this.handleClick}
                >Mix it!</button>
                <MixDrop
                closeFromBtn={this.handleClick}
                compArrFromBtn={this.props.compArrFromJump}
                passMixDivFun={this.props.mixDivFun}
                dropBool={this.state.dropDownActive}
                resetFromBtn={this.props.resetFromJump} />
            </div>
        )
    }
}

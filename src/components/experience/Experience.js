import React, { Component } from 'react'
import Overview from './Overview'
import Contractor from './Contractor'
import Impartner from './Impartner'
import './Experience.css'

export default class Experience extends Component {
    render() {
        return (
            <div className='section-wrap experience-header'>
                <h1>Experience</h1>
                <div className='experience-wrap'>
                    <Impartner />
                    <Contractor />
                    <Overview />
                </div>
            </div>
        )
    }
}
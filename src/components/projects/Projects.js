import React, { Component } from 'react'
import ProjectSlider from './sliderComps/ProjectSlider'
import ProjectMobileText from './projectComps/ProjectMobileText'
import './Projects.css'

export default class Projects extends Component {

    render() {
        return (
            <div className='proj-comp-wrapper section-wrap'>
                <h1>Projects</h1>
                <ProjectSlider />
                <ProjectMobileText />
            </div>
        )
    }
}

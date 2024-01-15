import React from 'react'
import {Title} from "../components/Title.jsx"
 import { Card } from '../components/Card.jsx'

 const projectList = [
    {
      image: 'path/to/image.jpg', // Replace with the actual path to the image
      language: 'JavaScript', // Replace with the actual programming language
      title: 'Project Title', // Replace with the actual project title
      description: 'Project description goes here', // Replace with the actual project description
      more: 'Link to more details', // Replace with the actual link or details
    },


];
export const Projects = () => {
  return (
    <div className='section'>
        <Title title="projects" link="/home"/>
        <div className='cards'>
        <Card language="python javascript html css python javascript html css"/>
        <Card language="python javascript html css python javascript html css"/>
        <Card language="python javascript html css python javascript html css"/>
        <Card language="python javascript html css python javascript html css"/>

        </div>

    </div>
  )
}

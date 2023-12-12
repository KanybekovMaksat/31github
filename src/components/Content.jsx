import React from 'react'
import ProjectCard from './ProjectCard'
import ExperienceCard from './ExperienceCard'
import BioContent from './BioContent'

const Content = () => {
  return (
    <div id="content">
    <section id="about">
        <h2 class="section-title">О Себе</h2>
        <BioContent/>
    </section>
    <section id="experince">
        <h2 class="section-title">Опыт</h2>
        <ExperienceCard/>
    </section>
    <section id="projects">
        <h2 class="section-title">Проекты</h2>
        <ProjectCard/>
    </section>
</div>
  )
}

export default Content
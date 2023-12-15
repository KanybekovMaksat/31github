import React from 'react'
import ProjectImg from "../assets/multimedia/project_beeline.png"

const ProjectCard = () => {
  return (
    <>
            <a href="#" class="project-card">
            <img src={ProjectImg} alt=""/>
            <div class="project__card-info">
                <h3 class="project__card-title">Создание платформы для <br/> профессиональной ориентации</h3>
                <p class="project__card-desc">
                    система научно обоснованных мероприятий, направленных на подготовку молодёжи к выбору профессии, на оказание помощи молодёжи в профессиональном самоопределении и трудоустройстве.
                </p>
                <div class="project__card-tech">
                    <span>React.JS</span>
                    <span>Typescript</span>
                    <span>Material UI</span>
                </div>
            </div>
        </a>
        <a href="#" class="project-card">
        <img src={ProjectImg} alt=""/>
            <div class="project__card-info">
                <h3 class="project__card-title">Создание платформы для <br/> профессиональной ориентации</h3>
                <p class="project__card-desc">
                    система научно обоснованных мероприятий, направленных на подготовку молодёжи к выбору профессии, на оказание помощи молодёжи в профессиональном самоопределении и трудоустройстве.
                </p>
                <div class="project__card-tech">
                    <span>React.JS</span>
                    <span>Typescript</span>
                    <span>Material UI</span>
                </div>
            </div>
        </a>
        <a href="#" class="project-card">
        <img src={ProjectImg} alt=""/>
            <div class="project__card-info">
                <h3 class="project__card-title">Создание платформы для <br/> профессиональной ориентации</h3>
                <p class="project__card-desc">
                    система научно обоснованных мероприятий, направленных на подготовку молодёжи к выбору профессии, на оказание помощи молодёжи в профессиональном самоопределении и трудоустройстве.
                </p>
                <div class="project__card-tech">
                    <span>React.JS</span>
                    <span>Typescript</span>
                    <span>Material UI</span>
                </div>
            </div>
        </a>
        </>
  )
}

export default ProjectCard
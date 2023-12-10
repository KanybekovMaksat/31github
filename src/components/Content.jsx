import React from 'react'

const Content = () => {
  return (
    <div id="content">
    <section id="about">
        <h2 class="section-title">О Себе</h2>
        <p class="about__text">
            Я разработчик с более чем двухлетним опытом в создании веб-приложений.
            Окончил средне-специальное образование по информационным технологиям с <span
                class="mark-box">отличием</span>.
            Сейчас активно участвую в хакатонах,где демонстрирую хорошие результаты.
        </p>
        <p class="about__text">
            Я активно изучаю новые технологии, а также преподаю курсы по Front-End разработке в IT академиях <a
                class="mark-box" href="https://www.codifylab.com/">Codify</a> и
            <a class="mark-box" href="https://comtehno.kg/">Comtehno</a>, стремясь быть в курсе последних
            тенденций в мире веб-технологий.
        </p>
        <p class="about__text">
            В свободное время от работы я увлекаюсь созданием своего <br/> стартапа <span class="mark-box">
                Charba</span>, стремясь внести свой вклад
            в инновационные решения в сфере, которая меня страстно интересует.
        </p>
    </section>
    <section id="experince">
        <h2 class="section-title">Опыт</h2>
        <div class="experince-content">
            <div class="experience__content-date">ФЕВРАЛЬ 2023 - по настоящее</div>
            <div class="exprerince__content-desc">
                <h4 class="experince__desc-position">Front-End Ментор | Comtehno</h4>
                <ul class="experience__desc-list">
                    <li>Разработал программу интенсивного обучения Front-End разработке, в рамках которой
                        успешно обучились более 150 студентов</li>
                    <li> Создал университетское сообщество программистов, способствующий обмену знаний и опыта.
                    </li>
                    <li>Организовал и проводил хакатоны, айти-мероприятия, а также давал гостевые лекции на тему
                        “IT” в других колледжах</li>
                </ul>
                <div class="experience__desc-skills">
                    <span class="skill-box">Коммуникации</span>
                    <span class="skill-box">HTML & CSS</span>
                    <span class="skill-box">JavaScript</span>
                </div>
            </div>
        </div>
        <div class="experince-content">
            <div class="experience__content-date">ОКТЯБРЬ 2023</div>
            <div class="exprerince__content-desc">
                <h4 class="experince__desc-position">Front-End Разработчик | Prosperity Cup 2023</h4>
                <ul class="experience__desc-list">
                    <li> Команда сумела успешно выйти на демо день, опередив 65 конкурирующих команд.</li>
                    <li>
                        Разрабатывал всю клиентскую часть веб платформы, с использованием React.JS, обеспечивая
                        высокий уровень функциональности и удобства использования для пользователей. </li>
                    <li>Руководил процессом разработки, включая распределение задач и внедряя новый функционал в
                        платформу.</li>
                </ul>
                <div class="experience__desc-skills">
                    <span class="skill-box">Питчинг</span>
                    <span class="skill-box">React.Js</span>
                    <span class="skill-box">Material UI</span>
                    <span class="skill-box">Redux Toolkit</span>
                </div>
            </div>
        </div>
    </section>
    <section id="projects">
        <h2 class="section-title">Проекты</h2>
        <a href="#" class="project-card">
            <img src="./assets/multimedia/project_beeline.png" alt=""/>
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
            <img src="./assets/multimedia/project_beeline.png" alt=""/>
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
            <img src="./assets/multimedia/project_beeline.png" alt=""/>
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
    </section>
        <section class="intro swiper">
            <h2 class="section-title">Мои Награды</h2>
            <div class="intro__slider">
            <div class="swiper-wrapper intro__wrapper">
                <div class="intro__content swiper-slide">
                <img src="./assets/multimedia/certificate_0.jpg" alt=""/>
                </div>
                <div class="intro__content swiper-slide">
                    <img src="./assets/multimedia/certificate_01.jpg" alt=""/>
                </div>
                <div class="intro__content swiper-slide">
                <img src="./assets/multimedia/certificate_02.jpg" alt=""/>
                </div>
                <div class="intro__content swiper-slide">
                    <img src="./assets/multimedia/certificate_03.jpg" alt=""/>
                    </div>
                    <div class="intro__content swiper-slide">
                        <img src="./assets/multimedia/certificate_04.jpg" alt=""/>
                        </div>

            </div>
            <div class="slider__controls">
                <div class="slider__pagination"></div>
            </div>
            </div>
        </section>
</div>
  )
}

export default Content
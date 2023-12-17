import React from 'react'

const ExperienceCard = () => {
  return (
    <>
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
        <div class="experince-content">
            <div class="experience__content-date">СЕНТЯБРЬ 2022 - <br /> НОЯБРЬ 2022</div>
            <div class="exprerince__content-desc">
                <h4 class="experince__desc-position">Front-End Разработчик | Хакатон "Kyrgyz Language and IT"</h4>
                <p>платформа для изучения кыргызского языка, аналог Duolingo </p>
                <ul class="experience__desc-list">
                    <li> Получили номинацию “Лучшее веб-приложение” на хакатоне</li>
                    <li>
                    Разработал механизм отправки данных о знаниях пользователя на сервер с использованием Axios, RTK Query. </li>
                    <li>Повысил привлекательность сайта с помощью анимаций с использованием React-Transition-Group</li>
                    <li>Реализовал систему авторизации пользователя с применением Axios, Redux Toolkit</li>
                </ul>
                <div class="experience__desc-skills">
                    <span class="skill-box">React.Js</span>
                    <span class="skill-box">React Transition Group</span>
                    <span class="skill-box">Redux Toolkit</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default ExperienceCard
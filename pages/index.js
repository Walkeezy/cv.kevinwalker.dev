import React, { useEffect } from 'react'

import { Head } from './components/head'
import CVItem from '../components/cv-item'
import Image from 'next/image'
import WorkEducationData from '../data/work-education.json'
import HardSkillsData from '../data/hard-skills.json'
import SoftSkillsData from '../data/soft-skills.json'
import BackgroundData from '../data/background.json'
import PersonalData from '../data/personal.json'

function setPageColor() {
  const colors = ['yellow', 'teal', 'red', 'green', 'purple']
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  const html = document.getElementsByTagName('html')[0]
  html.className = ''
  html.classList.add('highlight-color--' + randomColor)
}

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPageColor()
      setInterval(setPageColor, 60000)
    }
  }, [])

  return (
    <>
      <Head title="Kevin Walker – Webentwickler & digitaler Spezialist">
        <meta
          name="description"
          content="Das Web ist mein Zuhause. Bei meiner Arbeit in mehreren Agenturen durfte ich
                unzählige Projekte vom Erstgespäch bis zum erfolgreichen Abschluss begleiten und
                Einblicke in die unterschiedlichsten Branchen bekommen. Dabei habe ich gelernt was
                ein erfolgreiches Produkt ausmacht."
        />
      </Head>

      <main>
        <section className="intro">
          <div className="intro__content content">
            <div className="intro__text">
              <h1>
                Grüezi, ich bin <span className="color--highlight">Kevin Walker</span>,
                Webentwickler & digitaler Spezialist.
              </h1>
              <a
                className="button"
                href="mailto:mail@kevinwalker.ch"
                target="_blank"
                rel="noopener noreferrer"
              >
                E-Mail schreiben
              </a>
            </div>
            <div className="intro__image">
              <Image
                src="/kevin.jpg"
                alt="Kevin Walker"
                width={500}
                height={500}
                layout="intrinsic"
                priority="true"
              />
            </div>
          </div>
        </section>
        <section className="background">
          <div className="background__content content">
            <div className="background__text">
              <h2>{BackgroundData.title}</h2>
              {BackgroundData.text.map((paragraph, index) => {
                return <p key={index}>{paragraph}</p>
              })}
            </div>
            <div className="background__skills">
              <h2>{SoftSkillsData.title}</h2>
              <ul>
                {SoftSkillsData.items.map((item, index) => {
                  return <li key={index}>{item}</li>
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className="work-education">
          <div className="work-education__content content">
            {WorkEducationData.map((data) => {
              return <CVItem key={data.id} data={data}></CVItem>
            })}
          </div>
        </section>
        <section className="skills">
          <div className="skills__content content">
            <h2>{HardSkillsData.title}</h2>
            <ul>
              {HardSkillsData.items.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          </div>
        </section>
        <section className="personal">
          <div className="personal__content content">
            <div className="personal__photos">
              <div className="photos photos--row-1">
                <div className="photo-1">
                  <Image
                    className="photo-large"
                    src="/gleitschirm.jpg"
                    alt="Gleitschirm"
                    width={292}
                    height={197}
                    layout="intrinsic"
                    priority="false"
                  />
                </div>
                <div className="photo-2">
                  <Image
                    className="photo-small"
                    src="/bike.jpg"
                    alt="Bike"
                    width={198}
                    height={134}
                    layout="intrinsic"
                    priority="false"
                  />
                </div>
              </div>
              <div className="photos photos--row-2">
                <div className="photo-1">
                  <Image
                    className="photo-small"
                    src="/rennvelo.jpg"
                    alt="Rennvelo"
                    width={198}
                    height={134}
                    layout="intrinsic"
                    priority="false"
                  />
                </div>
                <div className="photo-2">
                  <Image
                    className="photo-large"
                    src="/langlauf.jpg"
                    alt="Langlauf"
                    width={292}
                    height={197}
                    layout="intrinsic"
                    priority="false"
                  />
                </div>
              </div>
            </div>
            <div className="personal__text">
              <h2>{PersonalData.title}</h2>
              {PersonalData.text.map((paragraph, index) => {
                return <p key={index}>{paragraph}</p>
              })}
            </div>
          </div>
        </section>
        <section className="contact">
          <div className="contact__content content">
            <div className="contact__heading">
              <p className="color--highlight">Let's talk</p>
            </div>
            <div className="contact__contact">
              <h2>Kontakt</h2>
              <ul>
                <li>
                  <a href="mailto:mail@kevinwalker.ch" target="_blank" rel="noopener noreferrer">
                    mail@kevinwalker.ch
                  </a>
                </li>
                <li>
                  <a href="tel:0041792334025" target="_blank" rel="noopener noreferrer">
                    079 233 40 25
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact__social">
              <h2>Soziale Netze</h2>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/kevin-walkeezy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/kevinwalkeezy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

import React, { useEffect } from 'react'

import { Head } from './components/head'
import CVItem from '../components/cv-item'
import Image from 'next/image'
import WorkEducationData from '../data/work-education.json'

export default function Home() {
  const addColorCSSClass = () => {
    const colors = ['yellow', 'teal', 'red', 'green']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const html = document.getElementsByTagName('html')[0]
    html.classList.add('highlight-color--' + randomColor)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', addColorCSSClass)
    }
    return () => window.removeEventListener('load', addColorCSSClass)
  }, [addColorCSSClass])

  return (
    <>
      <Head title="Kevin Walker – Webentwickler & digitaler Spezialist"></Head>

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
              <Image src="/kevin.jpg" alt="Kevin Walker" width={500} height={500} />
            </div>
          </div>
        </section>
        <section className="background">
          <div className="background__content content">
            <div className="background__text">
              <h2>Hintergrund</h2>
              <p>
                Das Web ist mein Zuhause. Ich durfte unzählige Projekte vom Erstgespäch bis zum
                erfolgreichen Abschluss begleiten. Durch die Arbeit in Werbeagenturen habe ich
                Einblicke in die unterschiedlichsten Branchen bekommen und gelernt, was ein
                erfolgreiches Produkt ausmacht.
              </p>
            </div>
            <div className="background__skills">
              <h2>Soft Skills</h2>
              <ul>
                <li>Ganzheitliches Denken</li>
                <li>Selbstorganisation</li>
                <li>Teamfähigkeit</li>
                <li>Zuverlässigkeit</li>
                <li>Offenheit und Bereitschaft für Veränderungen und unerwartete Hindernisse</li>
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
            <h2>Hard Skills</h2>
            <ul>
              <li>HTML</li>
              <li>CSS, SCSS, LESS, Stylus</li>
              <li>JavaScript</li>
              <li>Webpack, CSS Preprocessing, Babel</li>
              <li>React, Gatsby, NextJS</li>
              <li>Wordpress</li>
              <li>Versionskontrolle, Git</li>
              <li>HTML</li>
              <li>CSS, SCSS, LESS, Stylus</li>
              <li>JavaScript, Babel</li>
              <li>React, Gatsby, NextJS</li>
              <li>Wordpress</li>
              <li>Versionskontrolle, Git</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

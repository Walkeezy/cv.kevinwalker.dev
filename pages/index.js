import React, { useEffect } from 'react'

import { Head } from './components/head'
import CVItem from '../components/cv-item'
import Image from 'next/image'
import WorkEducationData from '../data/work-education.json'

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const colors = ['yellow', 'teal', 'red', 'green']
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      const html = document.getElementsByTagName('html')[0]
      html.classList.add('highlight-color--' + randomColor)
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
                layout="responsive"
                priority="true"
              />
            </div>
          </div>
        </section>
        <section className="background">
          <div className="background__content content">
            <div className="background__text">
              <h2>Hintergrund</h2>
              <p>
                Das Web ist mein Zuhause. Bei meiner Arbeit in mehreren Agenturen durfte ich
                unzählige Projekte vom Erstgespäch bis zum erfolgreichen Abschluss begleiten und
                Einblicke in die unterschiedlichsten Branchen bekommen. Dabei habe ich gelernt was
                ein erfolgreiches Produkt ausmacht.
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
              <li>React, Gatsby, NextJS</li>
              <li>Webpack, Babel</li>
              <li>PHP</li>
              <li>WordPress</li>
              <li>MySQL & NoSQL</li>
              <li>Versionskontrolle, Git</li>
              <li>ESLint, Stylelint, Prettier</li>
              <li>Debugging & Testing</li>
              <li>Webdesign & Usability</li>
              <li>Web Performance</li>
              <li>Accessibilty</li>
              <li>SEO</li>
            </ul>
          </div>
        </section>
        {/* <section className="personal">
          <div className="personal__content content">
            <Image
              src="/personal.jpg"
              alt="Hobbies von Kevin Walker"
              width={1380}
              height={460}
              layout="responsive"
            />
          </div>
        </section> */}
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

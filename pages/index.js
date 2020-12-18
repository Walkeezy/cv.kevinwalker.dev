import { Head } from './components/head'
import CVItem from '../components/cv-item'
import Image from 'next/image'
import WorkEducationData from '../data/work-education.json'

export default function Home() {
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
        <section className="description">
          <div className="description__content content">
            <div className="description__background">
              <h2>Hintergrund</h2>
              <p>
                Das Web ist mein Zuhause. Ich durfte unzählige Projekte vom Erstgespäch bis zum
                erfolgreichen Abschluss begleiten. Durch die Arbeit in Werbeagenturen habe ich
                Einblicke in die unterschiedlichsten Branchen bekommen und gelernt, was ein
                erfolgreiches Produkt ausmacht.
              </p>
            </div>
            <div className="description__skills">
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
      </main>
    </>
  )
}

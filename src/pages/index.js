import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import Form from '../components/Form'
import PDF from '../assets/pdf/kyle-ross-resume.pdf'

const HomeIndex = () => {
  const siteTitle = 'Personal site of Kyle Ross'
  const siteDescription =
    'Kyle Ross is a front end developer, based in the Bay Area, California'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>My main focus is on Front-End web technologies</h2>
          </header>
          <p>
            I have worked on large scale enterprise level web applications for
            companies such as <a href="https://www.sony.co.uk/">Sony</a>,
            <a href="https://www.hotwire.com/hotels/">Hotwire.com</a> and
            <a href="https://samsungnext.com/">Samsung</a>. I have also worked
            on a variety of digital projects for small businesses, artists and
            professional athletes.
          </p>
          <ul className="actions">
            <li>
              <a href={PDF} className="button">
                Download Resume
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Projects</h2>
          <Gallery />
        </section>

        <section id="three">
          <h2>Contact Me</h2>
          <p>
            Currently
            <span
              style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: 'green',
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              available
            </span>
            for full and contract work. Please fill out the form below and I
            will be in contact shortly.
          </p>
          <div className="row">
            <div className="12u 12u$(small)">
              <Form />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex

import React from 'react'
import { useFormik } from 'formik'

const Form = () => {
  return (
    <>
      <form
        method="POST"
        name="contact"
        action="/confirmation"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden" style={{ display: 'none' }}>
          <label>
            Don’t fill this out if you're human:
            <input name="bot-field" />
          </label>
        </p>
        <div className="row uniform 50%">
          <div className="6u 12u$(xsmall)">
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div className="6u 12u$(xsmall)">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="12u">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows="4"
            ></textarea>
          </div>
        </div>
        <p className="actions" style={{ marginTop: 30 }}>
          <button className="button" type="submit">
            Send Message
          </button>
        </p>
      </form>
    </>
  )
}

export default Form

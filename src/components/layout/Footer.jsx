import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

const Footer = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_bmtb4rn",
        "template_aqnxaku",
        form.current,
        "user_l5xkuApwcOxiqo9Sum4Ci"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    form.current.reset()
  }

  return (
    <footer id="main-footer" className="py-2">
      <div className="container footer-container">
        <div>
          {/* <img src="img/logo_light.png" alt="NewsGrid" /> */}

          <p>We collect Fun Facts about your favourite anime</p>
        </div>
        <div>
          <h3>Email Newsletter</h3>
          <p>Join our newsteller.</p>

          <form ref={form} name="contact" onSubmit={sendEmail}>
            <input name="from_name" type="email" placeholder="Enter Email..." />
            <textarea
              name="message"
              type="submit"
              placeholder="Write your message here"
              rows="5"
              cols="40"
            ></textarea>

            <input
              type="submit"
              value="Subscribe"
              className="btn btn-primary"
            />
          </form>
        </div>
        <div>
          <h3>Site Links</h3>
          <ul className="list">
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Join Our Club</h2>
          <p>come and join!</p>

          {/* <a href="#" className="btn btn-secondary" type="button" disabled>
            Join Now
          </a> */}
          <input
            type="submit"
            value="Join Now"
            className="btn btn-primary"
            disabled
          />
        </div>
        <div>
          <p>Copyright &copy; 2021, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav id="main-nav">
      <div className="container">
        {/* <img src={img} alt="NewsGrid" className="logo" /> */}
        <Link to="/">
          <h2 className="text-logo">
            <span>Anime</span>Facts
          </h2>
        </Link>

        <div className="social">
          <a
            href="http://www.facebook.com/dragosan113/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="http://www.twitter.com/Mansour2124"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="http://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="http://youtube.com" target="_blank" rel="noreferrer">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </div>
        <ul>
          <li></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header

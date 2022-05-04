import React, { useState } from "react"

import { Link } from "react-router-dom"
import Showcase from "./layout/Showcase"
import Spinner from "./layout/Spinner"

// api key 38067550-66e3-11ec-98c1-17a17e81d7f5

const Home = ({ data, isLoading }) => {
  return (
    <>
      <Showcase />
      <section id="home-articles" className="py-2">
        <div className="container">
          {/* <h2>Editor Picks</h2> */}

          <div className="articles-container">
            {data ? (
              data.data.map((article) => (
                <article key={article.anime_id} className="card">
                  <Link to={`/article/${article.anime_name}`}>
                    <div className="category category-sports">
                      {article.anime_name}
                    </div>
                    <img src={article.anime_img} alt={article.title} />
                  </Link>
                </article>
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

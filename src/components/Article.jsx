import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Spinner from "./layout/Spinner"

const Article = () => {
  const { anime_name } = useParams()
  console.log(anime_name)

  const [article, setArticle] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://anime-facts-rest-api.herokuapp.com/api/v1/${anime_name}`
      )

      setArticle(data)
      console.log(data)
    }
    fetchData()
  }, [anime_name])

  // data && data.articles && console.log(data.articles[title])
  return (
    <section>
      <div className="container">
        <div className="page-container">
          {article ? (
            <article className="card" id={anime_name}>
              <img className="article-img" src={article.img} alt="" />
              {/* <h1 className="l-heading">{article.title}</h1> */}
              <div className="meta">
                {/* <small>
                  <i className="fas fa-user"></i> Written By {article.autor}{" "}
                  {article.puplishedAt.toLocalString()}, 2019{" "}
                </small> */}
                {/* <div className="category category-ent">Entertainment</div> */}
              </div>

              <h2>
                Facts About <span className="s-heading">{anime_name}</span>
              </h2>
              <ul>
                {article &&
                  article.data &&
                  article.data.slice(0, 10).map((item) => (
                    <li className="x-heading" key={item.fact_id}>
                      {item.fact}
                    </li>
                  ))}
              </ul>
            </article>
          ) : (
            <Spinner />
          )}

          <aside className="card bg-secondary">
            <h2>Join Our Club</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
              id?
            </p>

            <a href="#" class="btn btn-dark btn-block">
              Join Now
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Article

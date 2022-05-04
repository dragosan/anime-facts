import axios from "axios"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Article from "./components/Article"
import Home from "./components/Home"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"

function App() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(false)
    const fetchData = async () => {
      var config = {
        headers: { "Access-Control-Allow-Origin": "*" },
      }
      // const catData = await axios.get("https://cat-fact.herokuapp.com")
      const { data } = await axios.get(
        `https://anime-facts-rest-api.herokuapp.com/api/v1`,
        config
      )
      console.log(data)
      // console.log(catData)

      setIsLoading(true)
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home data={data} isLoading={isLoading} />}
        ></Route>

        <Route exact path="/article/:anime_name" element={<Article />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

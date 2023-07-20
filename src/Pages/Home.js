import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/banner.jpeg'
import '../Styles/Home.css'

function Home() {
  return (
    <Layout>
        <div className='home' style={{backgroundImage:`url(${Banner})`}}>
          <div className='headerContainer'>
            <h1>Food App</h1>
            <p>Best Food In India</p>
            <Link to="/menu">
            <button>ORDER NOW</button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home
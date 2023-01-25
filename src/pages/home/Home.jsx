import React from 'react'
import Cards from '../../components/cards/Cards'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/table'
import './Home.scss'
import data from "../../components/table/data"
const Home = () => {
  return (
    <>
        <Sidebar/>
        <div className='home'>
            <Cards />
            <br />
            <div className="table">
                <Table  data={data} displayAction={true} />
            </div>
            
        </div>
    </>
  )
}

export default Home
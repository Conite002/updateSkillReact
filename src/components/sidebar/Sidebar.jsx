import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.scss"

const lists = [
    {
        icon : "1",
        title : "Proprieté",
        description : "15 Facilitations",
        path : "properties"
    },
    {
        icon : "2",
        title : "Analytics",
        description : "15 Facilitations",
        path : "analytics"
    },
    {
        icon : "3",
        title : "Paiements",
        description : "$8,457 ",
        path : "payments"
    },
    {
        icon : "4",
        title : "Equipe",
        description : "5 menbres",
        path : "teams"
    }
]
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <div className="logo">HOMMY</div><br />
            <div className="user">
                <div className='icon'> </div>
                <div className=''>
                    <p className='title'>Adam Ringl</p>
                    <p className='description'>Chef manager</p>
                </div>
            </div>
        </div>
        <div className="links">
            {
                lists.map((item, index) =>{
                    return <Link to={item.path} key={index} className="item-link">
                        <div className='icon'>{item.icon} </div>
                        <div className='text'>
                            <p className='title'>{item.title}</p>
                            <p className='description'>{item.description}</p>
                        </div>
                    </Link>
                })
            }
        </div>
        <div className="bottom">
            <div className='icon'><span></span></div>
            <div className='text'>
                <p className='title'>Télécharger sur</p>
                <p className='description'>PLAY STORE</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
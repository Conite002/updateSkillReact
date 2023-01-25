import React from 'react'
import CardsRight from '../right-cards/CardsRight'
import './Cards.scss'
import ProgressBar from '../progress-bar/Progress'

const Cards = () => {
  return (
    <div className='card'>
        <div className="description">
            <div className="top">
                <p className='title'>PAIEMENT EN COURS</p>
                <p className='number'>$8,756</p>
            </div>
            <div className="bottom">
                <div className="progresse-bar">
                    <ProgressBar title={"Utitlites"} description={"$6,485"} color={"green"} />
                    <ProgressBar title={"Rent"} description={"$4,405"} color={"yellow"} />
                </div>
                <br />

                <div className="button">
                    <div className="pay"><span>PAY ALL</span> <span>{">"} </span></div>
                    <div className="chevron">
                        <div className="">{"<"}</div>
                        <div className="">{">"}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-small">
            <CardsRight color={"blue"} title={"Water"} description={"Commission 3%"} number={"$432"}  /> <br />
            <CardsRight color={"orange"} title={"Heating"} description={"Commission 5%"} number={"$832"}  /> <br />
            <CardsRight color={"green"} title={"Heating"} description={"Commission 5%"} number={"$832"}  /> <br />
            <CardsRight color={"blue"} title={"Water"} description={"Commission 3%"} number={"$432"}  /> <br />
        </div>
    </div>
  )
}

export default Cards
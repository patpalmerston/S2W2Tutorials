import React from 'react'

const Buttons = (props) => {
  const {
    hCount, 
    aCount, 
    setHomeScore, 
    setAwayScore
  } = props
  return (
    <div>
      <section className='buttons'>
        <div className='homeButtons'>
          
          <button
            className='homeButtons__touchdown'
            onClick={() => setHomeScore(hCount + 7)}
          >
            Home Touchdown
          </button>

          <button
            className='homeButtons__fieldGoal'
            onClick={() => setHomeScore(hCount + 3)}
          >
            Home Field Goal
          </button>
        </div>

        <div className='awayButtons'>
          <button
            className='awayButtons__touchdown'
            onClick={() => setAwayScore(aCount + 7)}
          >
            Away Touchdown
          </button>

          <button
            className='awayButtons__fieldGoal'
            onClick={() => setAwayScore(aCount + 3)}
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  )
}

export default Buttons

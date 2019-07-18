import React from 'react'
import BottomRow from './BottomRow';
import Timer from './Timer';

const Scoreboard = ({hCount, aCount }) => {
  return (
    <div>
      <section className='scoreboard'>
        <div className='topRow'>
          <div className='home'>
            <h2 className='home__name'>Lions</h2>

            <div className='home__score'>{hCount}</div>

          </div>
          <Timer />
          <div className='away'>
            <h2 className='away__name'>Tigers</h2>
            <div className='away__score'>{aCount}</div>
          </div>
        </div>
        <BottomRow />
      </section>
    </div>
  )
}

export default Scoreboard

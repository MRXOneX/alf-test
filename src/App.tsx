import { useEffect, useState } from 'react';

// COMPONENTS
import { Card, Search } from './components'

//
import axios from 'axios'

// @TYPES
import { TGame } from './@types/game';


function App() {

  const [calendar, setCalendar] = useState<TGame[] | []>([])


  const loadCalendar = async(offset: number = 0) => {
    await axios.get(`https://footballista.ru/api/seasons/5099/calendar_paginated?limit=10&offset=${offset}`)
      .then((res: any) => setCalendar((prev: TGame[] | []) => prev ? [...prev, ...res.data.items] : res.data.items))
      .catch(e => console.log(e))
  }

  useEffect(() => {
    loadCalendar()
  }, [])


  const addMore = async() => {
    loadCalendar(calendar.length)
  }


  return (
    <div>
      <Search />
      <div className="wrapper">
        {calendar 
          ? calendar.map((game: TGame) => <Card 
                                          key={game._id} 
                                          id={game._id}
                                          tourNumber={game.tourNumber} 
                                          teamHome={game.teamHome} 
                                          teamAway={game.teamAway}
                                          scoreFtHome={game.scoreFtHome}
                                          scoreFtAway={game.scoreFtAway}
                                          date={game.date}
                                          stadium={game.stadium} /> )
          : <span> Нет данных </span>
        }
      </div>
      <div className="footer">
        <button onClick={addMore}>Добавить еще</button>
      </div>
    </div>
  );
}

export default App;

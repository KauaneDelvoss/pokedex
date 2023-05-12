import  Loading  from '../../../../../img/loading.svg';
import style from '../style.module.css';
import axios from 'axios';
import { Fragment, useState } from "react";
import { useEffect } from "react";

function MovesComponent({urlToFetch, name}) {
  const [isLoading, setIsLoading] = useState(false)
  const [move, setMove] = useState([])
  useEffect(() => {
    getMove()
  }, [])

  function getMove() {
    setIsLoading(true);
    var moves = []
    axios.get(urlToFetch).then((response) => {
      moves.push(response.data.effect_entries[0]? response.data.effect_entries[0].short_effect : 'No description')
      setMove(moves)
      console.log(move)
      })
    setIsLoading(false);
    
  }

  return (
    <li className={style.item} key={move}>
      <h2>
        <span>
        {name}: {" "}
          </span>
          </h2>
          {/* {move.effect_entries?.short_effect?.map(({short_effect}) => <h2>{short_effect && short_effect}</h2>)} */}
          {isLoading ? <img src={Loading} alt="Loading" className={style.loading}/> :
          move.map((short_effect) => <h2>{short_effect && short_effect}</h2>) }
        
        
    </li>
                   
  );
}
export default MovesComponent;
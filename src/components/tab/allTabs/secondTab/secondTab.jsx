import {Fragment, useEffect } from "react";
import style from './style.module.css';
import Loading from '../../../../img/loading.svg';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

function SecondTab() {
    const { id } = useParams();
    const [poke, setPoke] = useState({})
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        function getPokemonById(){
            setIsLoading(true);
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then((response) => {
                    setPoke(response.data)
                })
                .finally(() => setIsLoading(false));
        }

        getPokemonById()

    }, [id])

  return (
    <div className={style.content}> 
        <h1>
            MOVES
        </h1>
        <ul className={style.list}>
            {isLoading ? <img src={Loading} alt="loading" /> : (Object.keys(poke).length > 0 ? (
                poke.moves.map((move) => <li className={style.item} key={move.move.name}><h2>{move.move.name}
                    </h2></li>)) : <div>Zuado!</div>)}
        </ul>
        
    </div>
  );
}
export default SecondTab;
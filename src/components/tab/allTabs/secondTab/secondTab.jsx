import {Fragment, useEffect } from "react";
import MovesComponent from "./movesComponent";
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
            {isLoading ? <img src={Loading} alt="loading" /> : (Object.keys(poke).length > 0 ? (
                poke.moves.map((move) => <MovesComponent urlToFetch={move.move.url} name={move.move.name}/> )) : <div>Zuado!</div>)}
            
            
        
    </div>
  );
}
export default SecondTab;
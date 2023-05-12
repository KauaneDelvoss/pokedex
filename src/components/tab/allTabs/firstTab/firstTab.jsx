import {Fragment, useEffect } from "react";
import style from './style.module.css';
import Loading from '../../../../img/loading.svg';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import Interrogacao from '../../../../img/interrogacao.png';

import axios from 'axios';
import GeneralPokemon from './generalPokemon';
import HabilitiesPokemon from './habilitiesPokemon';
import BoxContent from "./boxContent";

function FirstTab() {
    const { id } = useParams();
    const [poke, setPoke] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [backPokemon, setBackPokemon] = useState(false)

    

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
        {isLoading ? <img src={Loading} alt="loading" /> : (Object.keys(poke).length > 0 ? (
            <Fragment>
                
                <BoxContent >
                        <img src={
                            isLoading ? Loading :
                             (Object.keys(poke).length > 0 ? (backPokemon ? (
                                     poke.sprites.back_default ? poke.sprites.back_default : Interrogacao
                                ) : ( poke.sprites.front_default ? poke.sprites.front_default : Interrogacao)) : " no image"
                                
                            ) } alt="" className={style.img} onMouseEnter = {() => setBackPokemon(true)} onMouseLeave={() => setBackPokemon(false)} onClick={()=> setBackPokemon(!backPokemon)}
                        
                        />

                        
                            {/* // (backPokemon ? (poke.sprites.back_default? poke.sprites.back_default : <div>Não existe</div>) : (poke.sprites.front_default? poke.sprites.front_default : <div>Não existe</div>)) : "no image")
                            // } alt="" className={`${style.img} ${poke?.types ? style[poke.types[0].type.name] : ''}`} onMouseEnter = {() => setBackPokemon(true)} onMouseLeave={() => setBackPokemon(false)} onClick={()=> setBackPokemon(!backPokemon)} */}
                            
                        
                </BoxContent>
                <BoxContent>
                    <GeneralPokemon poke={poke} />
                </BoxContent>
                <BoxContent>
                    <HabilitiesPokemon poke={poke}/>
                </BoxContent>
            </Fragment>
            ) : <div>Zuado!</div>)}
    </div>
  );
}
export default FirstTab;
import style from './style.module.css';
import Box from '../../components/box/index.jsx';
import Main from '../../components/main/index.jsx';
import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';

function Home() {
    const [pokemons, setPokemons] = useState([])


    useEffect(() => {

        function getPokemon() {
            axios.get('https://pokeapi.co/api/v2/pokemon/?offset=1&limit=24').then((response) => {
                setPokemons(response.data)
                })
        }

        getPokemon()
    }, [])

    return (
        <Main>
            <Fragment>
                    <div className={style.search}>
                        <input type="text" name="searchPokemon" id="" placeholder='faça sua busca'/>
                        <label htmlFor="searchPokemon">
                            <img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" alt="" />
                        </label>
                    </div>      
                    <div className={style.filters}>
                            filtros
                    </div> 
            </Fragment>
             <Fragment>
                    {pokemons.results?.length > 0 &&
                        pokemons.results.map((pokemon) => <Box key={pokemon.name} url={pokemon.url} name={pokemon.name} />)
                    }
            </Fragment>   
           
        </Main>
    )
}
export default Home;
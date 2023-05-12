import { Fragment } from "react";
import style from './style.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import { useState, useEffect } from 'react';

function SearchBar({setFiltered, setPage}) {
    const [filter, setFilter] = useState([])

    function getFiltered() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then((response) => {
            setFilter(response.data);
            setFiltered({results: []});
        })

    }
    function searchPokemon() {
        const poke = document.querySelector('input[name="searchPokemon"]').value
        if (poke.length === 0) return setFiltered({results: []});
        const filteredPokemons = filter.results.filter((pokemon) => { 
            return pokemon.name.includes(poke);
        })

        setPage(0)
        setFiltered({results: filteredPokemons})
    }

    useEffect(() => {
        getFiltered()
    }, [])

    return (
        <Fragment>
                    
            <div className={style.search}>
                    <div className={style.filters}>
                            <h1>Pokemons</h1>
                    </div> 
                    
                    <div className={style.searchBar}>
                        <input type="text" name="searchPokemon" id="searchPokemon" placeholder='faça sua busca' onChange={searchPokemon}/>
                        <label htmlFor="searchPokemon">
                            <AiOutlineSearch />
                        </label>
                    </div>
                    
            </div>      
        </Fragment>
    )
}
export default SearchBar;
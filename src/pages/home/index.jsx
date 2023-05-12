import style from './style.module.css';
import Box from '../../components/box/index.jsx';
import Main from '../../components/main/index.jsx';
import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import SearchBar from '../../components/searchBar/index.jsx';

function Home() {
    const [pokemons, setPokemons] = useState([])
    const [filtered, setFiltered] = useState([])
    const [page, setPage] = useState(0)

    function getPokemon() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${24 * page}&limit=24`).then((response) => {
            setPokemons(response.data);
            filtered === [] && setFiltered(response.data);
            window.scrollTo(0, 0);
        })
        
    }
    useEffect(() => {
        getPokemon()
    }, [])

    useEffect(() => {
    }, [filtered])


    useEffect(() => {
        getPokemon()
    }, [page])

    return (
        <Main>
            <Fragment>
                    <SearchBar pokemons={filtered} setFiltered={setFiltered} setPage={setPage} />
            </Fragment>
             <Fragment>
                    {filtered?.results?.length > 0 ? filtered.results.slice((page === 0 ? 0 : (page * 24)), (page === 0 ? 24 : (page * 24 + 24))).map((pokemon) => (<Box key={pokemon.name} name={pokemon.name} url={pokemon.url} />)) : (pokemons?.results?.length > 0 && pokemons.results.map((pokemon) => (<Box key={pokemon.name} name={pokemon.name} url={pokemon.url} />)))}
            </Fragment>   
            <Fragment>
                    {pokemons.previous !== null ? <button className={style.button} onClick={()=>setPage(page-1)} ><h2>Prev</h2></button> : <button className={style.disabled} disabled><h2>Prev</h2></button>}
                    <button disabled>
                        <h2>{page}</h2>
                    </button>
                    {pokemons.next !== null ? <button className={style.button} onClick={()=>setPage(page+1)} ><h2>Next</h2></button> : <button className={style.disabled} disabled><h2>Prev</h2></button>}
            </Fragment>
           
        </Main>
    )
}
export default Home;
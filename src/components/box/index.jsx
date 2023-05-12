import style from './style.module.css';
import Loading from '../../img/loading.svg';
import Interrogacao from '../../img/interrogacao.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Box({ url, name, childToParent }) {
    const [poke, setPoke] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log(poke)
    }, [poke])

    useEffect(() => {

        function getPokemonByURL() {
            setIsLoading(true);

            axios.get(url)
                .then((response) => {
                    setPoke(response.data)
                })
                .finally(() => setTimeout(() => setIsLoading(false)), 2000);
        }

        getPokemonByURL()
    }, [url])

    return (


        <div className={`${style.card} `}>
            <Link className={style.link} to={"/pokemon/" + (Object.keys(poke).lenght > 0 ? 1 : poke.id)} >

                <img src={isLoading ? Loading : (Object.keys(poke).length > 0 ? (poke.sprites.front_default? poke.sprites.front_default : Interrogacao ) : Interrogacao )} alt="" className={`${style.img} ${poke?.types ? style[poke.types[0].type.name] : ''}`}  />
                <div className={style.data}>
                    <h1>
                        {name}
                    </h1>
                    <h2>
                        {isLoading ? <img src={Loading} alt="loading" /> : (Object.keys(poke).length > 0 ? poke.types.map(({type}) => <span className={`${style.span} ${style[type.name]}`}>{type.name}</span>) : <div>Zuado!</div>)}
                    </h2>
                </div>
            </Link>
        </div>
    )
}
export default Box;
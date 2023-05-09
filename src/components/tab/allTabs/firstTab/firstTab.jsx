import {Fragment, useEffect } from "react";
import style from './style.module.css';
import Loading from '../../../../img/loading.svg';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

function FirstTab() {
    const { id } = useParams();
    const [poke, setPoke] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [slide, setSlide] = useState(1)

    function plusSlides(n) {
        var newslide = slide + n
        setSlide(newslide)
    }

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
                <div className={style.slideshow}>
                    <div className={style.img}>
                        <div className={style.numbertext}>
                            1/2
                        </div>
                    
                        <img src={isLoading ? Loading : (Object.keys(poke).length > 0 ? poke.sprites.front_default : "no image")} alt="" className={`${style.img} ${poke?.types ? style[poke.types[0].type.name] : ''}`} />
                        <div className="text">Caption text</div>
                    </div> 
                    <div className={style.img}>
                    <div className={style.numbertext}>
                        2/2
                    </div>
                
                    <img src={isLoading ? Loading : (Object.keys(poke).length > 0 ? poke.sprites.back_default : "no image")} alt="" className={`${style.img} ${poke?.types ? style[poke.types[0].type.name] : ''}`} />
                    <div className="text">Caption text</div>
                </div> 
                    
                    
                    {/* <a className={style.prev} onclick={ plusSlides(-1)}>&#10094;</a>
                    <a className={style.next} onclick={plusSlides(1)}>&#10095;</a> */}
                    <div >
                        <span className={style.dot} onclick={()=>setSlide(1)}></span>
                        <span className={style.dot} onclick={()=>setSlide(2)}></span>
                        <span className={style.dot} onclick={()=>setSlide(3)}></span>
                    </div>
                </div>
                
                <div className={style.info}>
                <h1>
                Name: <span>{Object.keys(poke).length > 0 ? poke.name : "zuado"}</span>
                </h1>
                <h1>
                    Altura: <span>{Object.keys(poke).length > 0 ? poke.height : "zuado"}</span>
                </h1>
                    <h1>
                    Peso: {Object.keys(poke).length > 0 ? poke.weight : "zuado"}
                    </h1>
                    <h1>
                        Tipos: <span>{(Object.keys(poke).length > 0 ? poke.types.map((type) => <span key={type.type.name}>{type.type.name}</span>) : <div>Zuado!</div>)}</span>
                    </h1>
                    <div className={style.status}>
                    <h1> Status</h1>
                    <h2>
                        HP: <span>78</span>

                    </h2>
                    <h2>
                        Attack: <span>84</span>
                    </h2>
                    <h2>
                        Defense: <span>78</span>
                    </h2>
                    <h2>
                        Special Attack: <span>109</span>
                    </h2>
                    <h2>
                        Special Defense: <span>85</span>
                    </h2>
                    <h2>
                        Speed: <span>100</span>
                    </h2>
                    
                </div>
                </div>
       
            </Fragment>
            
            ) : <div>Zuado!</div>)}
        
    </div>
  );
}
export default FirstTab;
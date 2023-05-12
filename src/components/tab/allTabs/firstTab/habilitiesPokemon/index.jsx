import { Fragment, useEffect, useState } from "react";
import style from './style.module.css';
import AbilityComponent from "./abilityComponent/index";

function HabilitiesPokemon(poke) {

    
    return (
        <Fragment>
            <h1 className={style.title}>
                ABILITIES
            </h1>
            <ul className={style.list}>{
                    poke.poke.abilities.map(({ability}) => <AbilityComponent key={ability.name} urlToFetch={ability.url} name={ability.name}/>
                    )}
            </ul>
            <h1 className={style.title}>
                STATUS
            </h1>
            <ul className={style.list}>
                    <li className={style.item}>
                    <h2>
                                HP: <span>{poke.poke.stats[0].base_stat}</span>
                            </h2>
                    </li>
                    <li className={style.item}>
                    <h2>
                                Attack: <span>{poke.poke.stats[1].base_stat}</span>
                            </h2>

                    </li>
                    <li className={style.item}>
                    <h2>
                                Defense: <span>{poke.poke.stats[2].base_stat}</span>
                            </h2>
                           

                    </li>
                    <li className={style.item}>
                    <h2>
                                Special Attack: <span>{poke.poke.stats[3].base_stat}</span>
                            </h2>
                            
                    </li>
                    <li className={style.item}>
                    <h2>
                                Special Defense: <span>{poke.poke.stats[4].base_stat}</span>
                            </h2>
                            
                    </li>
                    <li className={style.item}>
                    <h2>
                                Speed: <span>{poke.poke.stats[5].base_stat}</span>
                            </h2>
                    </li>
            </ul>

            <div className={style.status}>
                            
                            
                            
                        </div>
        </Fragment>
    )
}
export default HabilitiesPokemon;
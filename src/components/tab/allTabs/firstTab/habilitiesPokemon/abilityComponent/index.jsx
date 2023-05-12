import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import style from '../style.module.css';

function AbilityComponent({urlToFetch, name}) {
    const [ability, setAbility] = useState('')
    function getAbility() {

        var textAbilities = []
        axios.get(urlToFetch).then((response) => {
            textAbilities.push(response.data.flavor_text_entries[0].flavor_text)
            setAbility(textAbilities)
        })
        console.log(textAbilities)
        
    }
    useEffect(() => {
         getAbility()
        // console.log(urlToFech)
     }, [])

    return(
        <Fragment>
            <li className={style.item}>
                <h2 >
                    <span>
                    {name}:{' '} 
                    </span>
                 {ability}

                </h2>
                

            </li>
        </Fragment>

    )
}
export default AbilityComponent;
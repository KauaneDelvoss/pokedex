import Main from '../../components/main/index.jsx';
// import style from './style.module.css';
import axios from 'axios';
import FirstTab from '../../components/tab/allTabs/firstTab/firstTab.jsx';
import SecondTab from '../../components/tab/allTabs/secondTab/secondTab.jsx';
import { useParams } from 'react-router-dom';
import Tab from '../../components/tab/index.jsx';
import { Fragment, useEffect, useState } from 'react';

function Pokemon(activeTab) {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false)
    const [poke, setPoke] = useState({})
    
    function getPokemonById(){
        setIsLoading(true);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => {
                setPoke(response.data)
            })
            .finally(() => setIsLoading(false));
    }

    const [tab, setTab] = useState("tab1");
    
    const childToParent = (activeTab) => {
        setTab(activeTab)
        console.log("childToParent", activeTab)
    }
    
    return (
        <Main>
            <Fragment>
                <Tab childToParent={childToParent}/>
            </Fragment>
            <Fragment>
                {tab === "tab1" ? <FirstTab getPokemonById={getPokemonById} poke={poke}/> : <SecondTab/>}

            </Fragment>
            
        </Main>
    );
}
export default Pokemon;
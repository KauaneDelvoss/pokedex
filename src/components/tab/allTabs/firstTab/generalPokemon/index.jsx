import style from './style.module.css';

function GeneralPokemon(poke) {
   
    return (
        <div className={style.general}>
                        <h1 className={style.title}>
                        <span>{poke !== "" ? poke.poke['name'] : "zuado"}</span>
                        </h1>
                        <ul className={style.list}>
                            <li className={style.item}>
                                <h2>
                                    Altura: <span>{poke !== "" ? poke.poke['height'] * 100 : "zuado"}cm</span>
                                </h2>
                            </li>
                            <li className={style.item}>
                                <h2>Peso: {poke !== "" ? poke.poke['weight'] : "zuado"}kg</h2>
                            </li>
                            <li className={style.item}>
                            <h2>Tipos: <span>{(Object.keys(poke).length > 0 ? poke.poke['types'].map((type) => <span key={type.type.name}>{type.type.name} </span>) : <div>Zuado!</div>)}</span></h2>
                            </li>
                        </ul>
                        
            </div>
    )
}
export default GeneralPokemon;
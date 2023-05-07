import style from './style.module.css'
import { Link } from 'react-router-dom'
import Container from '../container';
import logo from '../../img/logo.png'
function Navbar() {
    return (
        // <div className={style.default}>
        //     <div>
        //         <img src="" alt="iuiu" />
        //     </div>
        //     <div>
        //         <ul>
        //             <li><Link to="/">Home</Link></li>
        //             <li> <Link to="/about">About</Link></li>
        //             <li> <Link to="/pokedex">Pokedex</Link></li>
        //         </ul>
        //     </div>
        // </div>
        <nav className={style.navbar}>
            <Container customClass="flex">
                <Link to='/'> <img src={logo} alt="logo" className={style.logo} /></Link>
                <ul className={style.list}>
                    <li className={style.item}>
                    <Link to='/'> Home </Link>
                
                    </li>
                    <li className={style.item}>
                    <Link to='/pokedex'> Pokedex </Link> 
                {/* posso fazer uma pagina de qual é o meu pokemon? */}
                    </li>
                    <li className={style.item}>
                    <Link to='/about'> About </Link>
                    </li>
                
                </ul>

            </Container> 
        </nav>
    )
}
export default Navbar;
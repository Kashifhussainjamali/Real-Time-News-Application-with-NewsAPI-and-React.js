import style from "./navbar.module.css"
import { FaRegNewspaper } from "react-icons/fa";
function Navbar(){
    return<>
    <ul className={style["mainul"]}>
        <li style={{display:"flex"}}><FaRegNewspaper className={style["logo"]}/><h2>WORLD_NEWS</h2></li>
        <li className={style["text"]}>The only Site where you get Many News Chanels Headlines</li>
        <li className={style["text"]} style={{marginLeft:"400px"}}>Free of Cost</li>
    </ul>
    
    </>
}
export default Navbar
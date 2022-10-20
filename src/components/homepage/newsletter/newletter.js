import Cbanner from "./cbanner";
import { Link } from "react-router-dom";

export default function Newsletter(){
    return(
        <>
        <div className="container nl">
            <h1>Do you have any question?</h1>
            <Link to='/contact'style={{ color: 'inherit', textDecoration: 'inherit'}}><button>Contact Us Today</button></Link>
        </div>
        <Cbanner/>
        </>
    )
}
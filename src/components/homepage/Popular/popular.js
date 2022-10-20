import Popcard from "./popcard"
export default function Popular(){
    return(
        <>
        <div className="popularSec">
            <div className="head">
                <h1>Our Popular Residence</h1>
                <div>View All &nbsp;<i className="fa fa-arrow-right"></i></div>
            </div>
            <div className="container">
                <Popcard/>
            </div> 
        </div>
        </>
    )
}
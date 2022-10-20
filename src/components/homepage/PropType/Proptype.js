import TypeCard from "./tCard";

function Proptype(){
    return(
        <>
        <div style={{height:"20rem"}}>
            <h1 id="tHead">Find All Types of Properties</h1>
            <div className="container tdiv">
                <TypeCard/>
            </div>
        </div>
        </>
    )
}

export default Proptype;
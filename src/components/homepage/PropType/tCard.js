import { featured } from "../../Data/data"

function TypeCard(){
    return(
        <>
        {featured.map((items, index) => (
            <div className="tcard"  key={index}>
               <img src={items.cover} alt="type" id='timg'></img> 
               <h4>{items.name}</h4>
               <p>{items.total} Properties</p>
            </div>
        ))}           
        </>
    )
}

export default TypeCard;
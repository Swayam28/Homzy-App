import { popular } from "../../Data/data"

export default function Popcard(){
    return(
        <>
         {popular.map((items, index) => (
            <div  className="popcard" key={index}>
               <img src={items.cover} alt="type" ></img> 
               <div className="info">
                    <h1> {items.name}</h1>
                    <p> 
                        <i className="fa fa-bed"></i>{items.bed}Bedrooms<br/>
                        <i className="fa fa-bath"></i>{items.bath} Bathrooms<br/>
                        {items.add}
                    </p>
                    <button> Read More</button>
                </div>
            </div>
        ))} 
        </>
    )
}
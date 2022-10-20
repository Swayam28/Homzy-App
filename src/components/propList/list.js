import Navbar from "../homepage/Navbar/Navbar";

export default function List(){
    return(
        <>
        <Navbar/>
        <div className="list">
            <div className="filter">
                <div>
                    <input type={"text"} placeholder="Enter City.."></input>
                    <div>
                        <div>Rent</div>
                        <div>Buy</div>
                    </div>
                </div>
                <div className="seldiv">
                    <select><option>2 BHK</option></select>
                    <select><option>2 BHK</option></select>
                    <select><option>2 BHK</option></select>
                    <select><option>2 BHK</option></select>
                </div>
            </div>

        </div>
        </>
    )
}
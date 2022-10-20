import React from "react";
import { Link } from "react-router-dom";

function Search(){
    return(
        <div className="searchSect">
            <div>
                <h1>Discover</h1>
                <h1>Most Suiatble</h1>
                <h1>Property</h1>
                <div className="pt">
                    <p>Find a varity of Property that suits you easily</p>
                    <p>Forget all your difficulties in finding your dream place</p>
                </div>
                <div id="searchF">
                    <input placeholder="Search location..."></input>
                    <Link to='/list'style={{ color: 'inherit', textDecoration: 'inherit'}}><button>Search</button></Link>
                </div>
            </div>
            <img src="../imgs/main.jpg" alt="img"></img>
        </div>
    )
}

export default Search;
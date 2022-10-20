import Navbar from "../homepage/Navbar/Navbar";
import Cbanner from "../homepage/newsletter/cbanner";

export default function About(){
    return(
        <>
            <Navbar/>
            <div className="about">
                <div>
                    <h1>About Us</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <img src="../imgs/popular/3.jpg" alt='img'></img>
            </div>
            <div className="about"> 
                <img src="../imgs/popular/1.jpg" alt='img'></img>
                <div>
                    <h1>Our Founders</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <Cbanner/>
        </>
    )
}
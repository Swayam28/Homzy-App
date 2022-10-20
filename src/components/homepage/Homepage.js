import Navbar from './Navbar/Navbar';
import Search from './Search/Search';
import Proptype from './PropType/Proptype';
import Popular from './Popular/popular';
import Newletter from './newsletter/newletter';

function HomePage(){
    return(
        <>
            <Navbar/>
            <Search/>
            <Proptype/>
            <Popular/>
            <Newletter></Newletter>
        </>
    )
}

export default HomePage;
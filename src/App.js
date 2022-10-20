import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import HomePage from "./components/homepage/Homepage";
// import List from './components/propList/list';
import Login from "./components/signin/login";
import Register from "./components/signin/register";
// import Upload from 'c:/users/swayam/downloads/upload';
import Upload from './components/Upload';
import Users from './components/Users';
import EditUser from './components/EditUser';

function App() {
  return (
    <Router>
           <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route exact path='/home' element={< HomePage />}></Route>
                 <Route exact path='/register' element={< Register />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/gallery' element={< Upload />}></Route>
                 <Route exact path='/users' element={< Users />}></Route>
                 <Route exact path='/users/edit/:id' element={< EditUser />}></Route>
          </Routes>
          
       </Router>
  );
}

export default App;

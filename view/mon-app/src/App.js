import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInSide from './pages/SignInSide';
import PrimarySearchAppBar from './componant/navbar/navbar';
import SongsPage from './pages/MySongs'
import Footer from './componant/footer/footer';
import Notes from './pages/Notes.js'
import Welcome from './pages/welcome';
import MusicList from './componant/player/menulist';
import Content from './componant/content/content';
import Profile from './pages/Profile';
import Account from './pages/Account';
import Registration from './componant/registration/Registration';
import Part2 from './Playliste/playliste';
import Media from './componant/media/media';
import Routing from './routing';
import SectionTitle from './contactUs/Contact.js';

import TodoList from './planDay/ToDoList';



function App() {
  return (
    <div className="App"> 
    <Routing/>
   <Footer/>
    </div>
  );
}

export default App;

/* 
<Content/>
 <Notes/>
<SectionTitle/>
  <div className='yellocard'>
<TodoList/>
</div>
    </div>
 <SignInSide/>
          <Media/>
          
          <Route path="/user/profile">
            <Profile/>
          </Route>
*/

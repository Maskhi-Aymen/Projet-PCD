import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInSide from './pages/SignInSide';
import Navbar from './componant/navbar/navbar';
import Footer from './componant/footer/footer';
import Notes from './pages/Notes.js'
import Meditate from './pages/meditate';
import MusicList from './componant/player/menulist';
import Content from './pages/content';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import PlayListe from './componant/Playliste/playliste';
import Media from './pages/Media';
import Routing from './routing';
import Contact from './pages/Contact.js';




function App() {
  return (
    <div className="App"> 
    <Router>
      <Switch>
        <Route exact path='/' component={() => <SignInSide />} />
        <Route exact path='/registre' component={() => <Registration />} />
        <Route exact path='/user' component={() => <Routing />} />

      </Switch>
      </Router>
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

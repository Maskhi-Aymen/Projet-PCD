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
import Contact from './pages/Contact.js';
import TodoList from "./pages/ToDoList";


function Routing() {
  return (
<div>
<Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/user/home">
            <Content />
          </Route>
          <Route path="/user/media">
            <Media />
          </Route>
          <Route path="/user/profile">
            <Profile/>
          </Route>
          <Route path="/user/notes">
            <Notes />
          </Route>
          <Route path="/user/contact">
            <Contact/>
          </Route>
          <Route path="/user/Todo">
            <TodoList/>
          </Route>
        </Switch>
        

      </div>
    </Router>
    </div>
  );
}

export default Routing;

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
import Contact from './contactUs/Contact.js';
import TodoList from "./planDay/ToDoList";


function Routing() {
  return (
<div>
<Router>
      <PrimarySearchAppBar />
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

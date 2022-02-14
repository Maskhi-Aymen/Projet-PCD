import './App.css';
import SignInSide from './pages/SignInSide';
import PrimarySearchAppBar from './componant/navbar/navbar';
import SongsPage from './pages/MySongs'
import Footer from './componant/footer/footer';
import Notes from './pages/Notes.js'
import Welcome from './pages/welcome';
import MusicList from './componant/player/menulist';

function App() {
  return (
    <div className="App">
     
    <PrimarySearchAppBar /> 
    <div className='yellocard'><div className='containerPlan'><MusicList/></div></div>
    <Footer/>
  
    </div>
  );
}

export default App;

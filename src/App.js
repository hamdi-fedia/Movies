import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import style from './css/style.css'
import Movienav from './components/movienav';
import Movies from './components/moviecard';
import bgacc from './bgacc.png';
import About from './components/movieabout';
import MovieFooter from './components/moviefooter';
function App() {
  return (
    <div className="App">
        <Movienav/>
      <div className="bgsec" style={{ backgroundImage: `url(${bgacc})` , width:'100%' }}>
       <div className="text-bg">
       <span>W</span>atching <span>M</span>ovies <span>I</span>n <span>T</span>he <span>O</span>riginal <span>V</span>ersion
       </div>
      </div>
      
      <About/>
     <div className="bg-sec2 pt-5 pb-5">
     <div className="container pt-5 pb-5 bg-cont">
     <div className="row">
      <Movies/>
     </div>
     </div>
     </div>
     <div className=" pt-5 bg-sect3">
     <div className="row">
       <div className="text-end">
           Enjoy Watching Everyone
       </div>
     </div>
     </div>
     <MovieFooter/>
    </div>
  );
}

export default App;

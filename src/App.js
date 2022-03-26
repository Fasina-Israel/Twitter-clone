import Feeds from './components/Feeds';
import SideBar from './components/SideBar';
import Widgets from './components/Widgets';
import './App.css'

function App() {
  return (
    <div className="App">
     
     <SideBar/>
     <Feeds/>
     <Widgets/>
    </div>
  );
}

export default App;

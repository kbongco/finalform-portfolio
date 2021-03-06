import logo from './logo.svg';
import './App.css';
import NavBar from './Layouts/NavBar.jsx'
import Layout from './Layouts/Layout.jsx'
import About from './Screens/About.jsx'
import AboutMeStory from './Screens/AboutMeStory'
import Projects from './Screens/Projects'
import Resume from './Screens/Resume'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <div className='allcomponents'>
        
      </div> */}
      <Layout />
      <Route path ='/' exact>
        <div className='all'>
          <About/>
        </div>
      </Route>
      {/* </Layout> */}
      <Route path='/about-me' exact>
        <AboutMeStory />
      </Route>
      <Route path='/projects' exact>
        <Projects/>
      </Route>
      <Route path='/resume' exact>
        <Resume/>
      </Route>
    </div>
  );
}

export default App;

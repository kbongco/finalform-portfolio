import logo from './logo.svg';
import './App.css';
import NavBar from './Layouts/NavBar.jsx'
import Layout from './Layouts/Layout.jsx'
import About from './Screens/About.jsx'

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <div className='allcomponents'>
        
      </div> */}
      <Layout/>
        <div className='all'>
          <About/>
        </div>
      {/* </Layout> */}
    </div>
  );
}

export default App;

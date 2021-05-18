import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//images


//gonna name these bad boys
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Navbar from './components/Navbar';
import Backdecor from './components/Backdecor';
import Sidebar from './components/Sidebar';
import Herobg from './components/Herobg';
import Footer from './components/Footer';

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    
    <Router>
        
        <Navbar click={() => setSideToggle(true)}/>
        <Sidebar show={sideToggle} click={() => setSideToggle(false)}/>
        <Backdecor show={sideToggle} click={() => setSideToggle(false)}/>
        <div className="wrapper">
         <Herobg />  
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen}/>
            <Route exact path="/cart" component={CartScreen}/>
          </Switch>
        </main>
        <Footer />
        </div>
        
    </Router>
    
    
    
  );
}


export default App;

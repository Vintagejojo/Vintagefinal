import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//images

//gonna name these bad boys
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Navbar from "./components/Navbar";
import Backdecor from "./components/Backdecor";
import Sidebar from "./components/Sidebar";
import Herobg from "./components/Herobg";
import Footer from "./components/Footer";
import Contactform from "./components/Contactform";
import Blog from "./components/Blog";
import About from "./components/About";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(!sideToggle)} />
      <Sidebar show={sideToggle} click={() => setSideToggle(false)} />
      <Backdecor show={sideToggle} click={() => setSideToggle(false)} />
      <div className="wrapper">
        <Herobg click={() => setSideToggle(false)} />
        <main>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
            <Route exact path="/contactus" component={Contactform} />
            <Route exact path="/blog" component={Blog}/>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

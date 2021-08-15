import './App.css';
import MainHeader from './layout/Header';
import { BrowserRouter as Router, 
  Route,Switch
} from 'react-router-dom';
import Home from './view/home';
import About from './view/About';
import ProductsPage from './view/Products';
import DistributionPage from './view/DistributionPage';
import ContactUs from './view/ContactUs';
import viewProduct from './view/viewProduct';
function App() {
  return (
      <Router>
        <Switch>
            <MainHeader>
                <Route path="/home" component={Home} exact={true}  />
                <Route path="/about" component={About} exact={true}  />
                <Route path="/product" component={ProductsPage} exact={true}  />
                <Route path="/distributors" component={DistributionPage} exact={true}  />
                <Route path="/Contact" component={ContactUs} exact={true}  />
                <Route path="/viewProduct/:id" component={viewProduct} exact={true}  />
            </MainHeader>
        </Switch>
        </Router> 
  );
}

export default App;

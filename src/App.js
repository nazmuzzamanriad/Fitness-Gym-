
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';

import Register from './components/Register/Register';
import AuthProvider from './components/context/AuthProvider';

import Footer from './components/Footer/Footer';
import Practise from './components/practise/Practise';
import Services from './components/Services/Services';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AboutUs from './components/AboutUs/AboutUs';
import Upcoming from './components/Upcoming/Upcoming';
import Gallery from './components/Upcoming/Gallery/Gallery';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>

            <Route exact path='/'>
              <Home></Home>

            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>


            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>

            </Route>
            <Route path='/practise'>
              <Practise></Practise>

            </Route>

            <PrivateRoute path='/services'>
              <Services></Services>

            </PrivateRoute>
            <PrivateRoute path='/aboutus'>
              <AboutUs></AboutUs>

            </PrivateRoute>
            <PrivateRoute path='/upcoming'>
              <Upcoming></Upcoming>

            </PrivateRoute>
            <PrivateRoute path='/gallery'>
              <Gallery></Gallery>

            </PrivateRoute>


            <Route path="*">
              <NotFound></NotFound>
            </Route>




          </Switch>
          <Footer></Footer>


        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;

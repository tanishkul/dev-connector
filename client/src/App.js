import { Fragment } from 'react';
import './App.css';
import Landing from './components/layouts/Landing';
import Navbar from './components/layouts/Navbar';

const App = () => (
  <Fragment className='App'>
    <Landing />
    <Navbar />
  </Fragment>
);

export default App;

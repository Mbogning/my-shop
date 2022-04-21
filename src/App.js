import React, { Fragment } from 'react';
import { Header } from './components/Header';
import SideMenu from './components/SideMenu';
import './styles/App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Fragment>
      <Header />
      <div className='container mt-5'>
        <div className='row'>
          <SideMenu />
          <div className='col-sm'>
            store
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;

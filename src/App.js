import React, { Fragment } from 'react';
import { Header } from './components/Header';
import ListCard from './components/ListCard';
import SideMenu from './components/SideMenu';
import './styles/App.css';
import {list} from './data';
// import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Fragment>
      <Header />
      <div className='container mt-5'>
        <div className='row'>
          <SideMenu />
          <div className='col-sm'>
            <div className='row'>
              <ListCard data={list} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;

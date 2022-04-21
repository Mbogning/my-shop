import React, { Fragment, useState } from 'react';
import { Header } from './components/Header';
import ListCard from './components/ListCard';
import SideMenu from './components/SideMenu';
import './styles/App.css';
import {list} from './data';

// import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [category, setCategory] = useState(0);
  const loadCategory = i =>{ setCategory(i)}
  return (
    <Fragment>
      <Header />
      <div className='container mt-5'>
        <div className='row'>
          <SideMenu loadCategory={loadCategory} category={category}/>
          <div className='col-sm'>
            <div className='row'>
              <ListCard data={list[category]} category={category} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;

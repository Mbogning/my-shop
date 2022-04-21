import React, { Fragment, useState, useEffect } from 'react';
import { Header } from './components/Header';
import ListCard from './components/ListCard';
import SideMenu from './components/SideMenu';
import './styles/App.css';
import {list} from './data';

// import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [category, setCategory] = useState(0);
  const [isFiltering, setFiltering] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const loadCategory = i =>{ setCategory(i)}
  const filterResult = input => {
    // console.log(input)
    let fullList = list.flat()
    console.log(fullList)
    let results = fullList.filter(item => {
      const name = item.name.toLowerCase()
      const term = input.toLowerCase()
      return name.indexOf(term) > -1
    })
    setFiltered(results)
  }

  useEffect(()=>{
    console.log(isFiltering)
  })

  return (
    <Fragment>
      <Header filter={filterResult} setFiltering={setFiltering}/>
      <div className='container mt-5'>
        <div className='row'>
          <SideMenu loadCategory={loadCategory} category={category}/>
          <div className='col-sm'>
            <div className='row'>
              <ListCard data={ isFiltering ? filtered : list[category]} category={category} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;

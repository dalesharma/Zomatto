// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Products from './Products';





const App = (e) => {
  const [search, setSearch] = useState('food search');
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "0a85443e";
  const YOUR_APP_KEY = "c4e443682f7e4347755ee87e57f90e70";




  const submitHandler = (e) => {
    e.preventDefault();

    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()

    ).then(
      data => setData(data.hits),


    )

  }
  const clr = (e) => {
    setData("");
    setSearch("");
  }

  return (
    <div>
      <center>
        <h2>Food Recipe App</h2><br />
        <form onSubmit={submitHandler}>

          <input type='text' class="text-center " value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search food....' /><br /><br />
          <div className='gap-3 flex justify-center'>
            <input type='submit' class="text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" value='Search' />
            <input type='clear' class="text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-1 py-1.5 mb-2 text-center"
              onClick={clr} placeholder='Clear' />
          </div>

        </form>

        {data.length >= 1 ? <Products data={data} /> : null}

      </center>
    </div>




  );
}

export default App;

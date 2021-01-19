import React from 'React'
import Card from './components/Card/Card'
import Filter from './components/Filter/Filter'
import Products from './components/Products/Products'

function App() {
  return (
    <div>
      <Filter />
      <Card />
      <Products />
    </div>
  );
}

export default App;

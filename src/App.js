import React, { useState, useCallback, useMemo } from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoList from './components/Demo/DemoList';


function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [shouldDecend, setShouldDecend] = useState(false);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title')
  }, [])


  const decendingOrderHandler = () => {
    // console.log('decendingOrderHandler Running')
    setShouldDecend(!shouldDecend)
  } 


  const listItems = useMemo(() => [5, 3, 1, 10, 9], [])


  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} decend={shouldDecend} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={decendingOrderHandler}>Change to Decending Order</Button>
    </div>
  );
}

export default App;

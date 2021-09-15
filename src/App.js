import './App.css'
import Header from './components/ui/Header';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Charactergrid from './components/characters/Charactergrid';
import Search from './components/ui/Search';

const hash = "01ba5ca5394b332fb8163313e0909d11"
const App = () => {
  const [items, setItems] = useState('')
  const [loading, isLoading] = useState(true)
  const [query, setQuery] = useState('')


  useEffect(() => {
    const fetchItems = async () => {
      if(query==='') {
        const result = await axios(
          `https://gateway.marvel.com/v1/public/characters?limit=20&ts=1&apikey=b75b3e36882f682bbfd481f1eac4c181&hash=${hash}`
          )
        console.log(result.data.data.results)
        setItems(result.data.data.results)
        isLoading(false)
      } else {
        const result = await axios(
          `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${process.env.REACT_APP_api}&hash=${hash}`
          )
        console.log(result.data.data.results)
        setItems(result.data.data.results)
        isLoading(false)
      }
      
      

    }
    fetchItems();
  }, [query])
  return (
    <div>
      <div className="container">
      <Header />
      <Search getQuery={q => setQuery(q)}/>
      <Charactergrid items={items} isLoading={loading}/>
    </div>
    </div>
  )
}

export default App

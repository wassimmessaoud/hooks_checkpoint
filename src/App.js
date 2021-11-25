import {dataMovies} from './data';
import {useState} from 'react'
import Filter from './components/filter';
import Add from './components/add';
import MovieList from './components/MovieList';
import './App.css';
import {Route,Switch} from "react-router-dom";
import Details from './components/Details';




function App() {
const addMovie =(newMovie)=>{
 setMovieList ( [...movieList,{...newMovie, id:movieList.length+1}]) 
} 

const [searchByName, setSearchByName] = useState('')

const searchName =(name)=>{
  setSearchByName(name)
}


const [movieList, setMovieList] = useState(dataMovies)
const [rating, setRating] = useState(1)

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Filter searchName={searchName} setRating={setRating} />
          <MovieList movieList={movieList.filter((el)=>el.title.toUpperCase().includes(searchByName.toUpperCase().trim())&&el.rating>=rating)} />
          <Add addMovie={addMovie} />
        </Route>
        <Route path='/Details/:id' render={(props)=><Details {...props}movieList={movieList}/>} />
      </Switch>


    </div>
  );
}

export default App;
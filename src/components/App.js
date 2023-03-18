import '../styles/App.scss';
import {Route,Routes} from 'react-router-dom';


//importo lo componentes

import Header from './Header';
import CreateCard from './CreateCard';
import Landing from './Landing';

function App() {

// /* VARIABLES ESTADO (DATOS) */
//   const [allMovies, setAllMovies] = useState(ls.get('cache', []));
//   const [filterValues, setFilterValues] = useState({
//     filterTitle: '',
//     filterSynopsis: '',
//   });

//   /* EFECTOS */
//   useEffect(() => {
//     // Código que solo se ejecuta una vez
//     if (ls.notIncludes('cache')) {
//       obj.fetchMovies().then((data) => {
//         // Guardarlo en una variable.
//         setAllMovies(data);
//         ls.set('cache', data);
//       });
//     }
//   }, []);  

  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/"
        element={<Landing/>}>
        </Route>
        <Route path='/CreateCard'
        element={<CreateCard />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;




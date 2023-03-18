import '../styles/App.scss';
import {Route,Routes} from 'react-router-dom';
import Header from './Header';
import CreateCard from './CreateCard';
import Landing from './Landing';

function App() {

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




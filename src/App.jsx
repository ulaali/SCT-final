import './App.css';
import { Data } from './Data';
import Home from './components/Home';
//'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=i9NjHDB2X3wakPuA4UE9uglGpAnTeUMm'
function App() {

  return (
    <div className="App">
      <Data>
          <Home/>
      </Data>
    </div>
  );
}

export default App;

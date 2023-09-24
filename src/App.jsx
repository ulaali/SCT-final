import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Data } from './Data';
import Home from './components/Home';
import Favourite from './components/Favourite';
import Readlater from './components/Readlater';
import About from './components/About';
import Layout from './components/Layout';
import Signin from './components/Signin';
import Preview from './components/Preview';

//'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=i9NjHDB2X3wakPuA4UE9uglGpAnTeUMm'
function App() {

  return (
    <div className="App">
      <Data>
        <Layout>
        {/* <Home/> */}
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='//favourite' element={<Favourite/>}></Route>
        <Route path='/readlater' element={<Readlater/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/preview' element={<Preview/>}></Route>

      </Routes>
        </Layout>
      </Data>
     
    </div>
  );
}

export default App;

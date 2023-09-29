import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Data } from './Data';
import Home from './pages/home/Home';
import Favourite from './pages/fav-readlater/Favourite';
import Readlater from './pages/fav-readlater/Readlater';
import About from './pages/about/About';
import Layout from './components/Layout';
import Preview from './pages/preview/Preview';

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

import logo from './logo.svg';
import './App.css';
import Front from './components/Front';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Front/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

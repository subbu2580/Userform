import './App.css';
import Form from './components/Form';
import Response from './components/Response';
import Navbuttons from './components/Navbuttons';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbuttons />
        <Routes>
          <Route path='/Form' element={<Form />} />
          <Route path='/Response' element={<Response />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


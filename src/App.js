import EmailContainer from './components/EmailContainer';
import FullFormContainer from './components/FullFormContainer';
import DisplayDataContainer from './components/DisplayDataContainer';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'
import './App.css'


function App() {
  return (
    <>
       <Router>
          <Routes>
            <Route path="/" exact element={ <EmailContainer /> } />
            <Route path="/form" element={<FullFormContainer />} />
            <Route path="/data" element={<DisplayDataContainer />} />
          </Routes>
       </Router>
    </>
  );
}

export default App;

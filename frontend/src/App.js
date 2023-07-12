import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Product from './pages/Product';
import Modification from './pages/Modification';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Creation from './pages/Creation';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Accueil />}></Route>
          <Route path='/Product/:id' element={<Product />}></Route>
          <Route path='/Modification/:id' element={<Modification />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Creation' element={<Creation />}></Route>
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;

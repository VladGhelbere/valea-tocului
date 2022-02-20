import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import routes from './common/Routes';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#141313',
    },
    secondary: {
      main: '#f34949',
    },
  },
});

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'slide'
    });
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Routes>
          {
            routes.map((route, i) => <Route path={route.path} element={route.element} key={i} />)
          }
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>

  );
}

export default App;

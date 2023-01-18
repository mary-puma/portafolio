import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Footer from './componentes/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

      <Header />
      <div >
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />

    </>

  );
}

export default App;

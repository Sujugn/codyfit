import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;

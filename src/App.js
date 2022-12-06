import './App.css';

import Public from "./components/public/Public"
import Admin from "./components/admin/Admin"
import Layout from "./pages/Layout"
import NoPage from "./pages/NoPage"


import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
        <header className='app-header'>
            <h2>Könyváruház</h2>
        </header>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Public />} />
                    <Route path="admin" element={<Admin />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
        <footer>
            Csiszi
        </footer>
    </div>
  );
}

export default App;

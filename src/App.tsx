import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestPage from './pages/Test/Test';
import GamePage from "./pages/Game";
import { render } from '@testing-library/react';

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<GamePage />} />
          <Route path="/game" element={<GamePage />}/>
          <Route path="*" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
    
  );
  
};

export default App;

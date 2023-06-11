import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DragPage from './components/DragPage';
import Lesson from './components/Lesson';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DragPage />} />
        <Route path="/lesson" element={<Lesson />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

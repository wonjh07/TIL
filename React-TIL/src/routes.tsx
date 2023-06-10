import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DragAndDrop from './components/DragAndDrop';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DragAndDrop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

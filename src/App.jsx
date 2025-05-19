import { Routes, Route, Navigate } from 'react-router-dom';
import ShowsListPage from './components/ShowsListPage/ShowsListPage';
import ShowDetailsPage from './components/ShowDetailsPage/ShowDetailsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/shows" replace />} />
      <Route path="/shows" element={<ShowsListPage />} />
      <Route path="/show/:id" element={<ShowDetailsPage />} />
    </Routes>
  );
};

export default App;

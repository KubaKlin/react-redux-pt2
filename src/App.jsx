import { Routes, Route, Navigate } from 'react-router-dom';
import ShowsListPage from './components/ShowsListPage/ShowsListPage';
import ShowDetailsPage from './components/ShowDetailsPage/ShowDetailsPage';
import WatchListPage from "./components/WatchListPage/WatchListPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/shows" replace />} />
      <Route path="/shows" element={<ShowsListPage />} />
      <Route path="/show/:id" element={<ShowDetailsPage />} />
      <Route path="/watch-list" element={<WatchListPage />} />
    </Routes>
  );
};

export default App;

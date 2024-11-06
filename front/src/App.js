import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import ProjectDetailPage from './pages/projectDetailPage/ProjectDetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/detailpage/:projectId"
            element={<ProjectDetailPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

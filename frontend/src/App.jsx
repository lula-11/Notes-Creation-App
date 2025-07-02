import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotesProvider } from './context/NotesContext.jsx';
import NotesPage from './pages/NotesPage.jsx';

function App() {
  return (
    <Router>
      <NotesProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<NotesPage />} />
          </Routes>
        </div>
      </NotesProvider>
    </Router>
  );
}

export default App;

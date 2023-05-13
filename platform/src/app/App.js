// import external modules
import {Routes, Route} from 'react-router-dom';
import { Header } from './component/layout';
//import custom modules
import {HomePage, OpleidingPage, ProgrammaPage, WerkstukkenPage, BlogPage, SercivesPage, TeamPage} from './pages'
import { ROUTES } from './routes';

//import styling
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <Header />
      <main>
        <Routes>
          <Route path={ROUTES.Home} element={<HomePage />} />
          <Route path={ROUTES.Opleiding} element={<OpleidingPage />} />
          <Route path={ROUTES.Programma} element={<ProgrammaPage />} />
          <Route path={ROUTES.Werkstukken} element={<WerkstukkenPage />} />
          <Route path={ROUTES.Blog} element={<BlogPage />} />
          <Route path={ROUTES.Services} element={<SercivesPage />} />
          <Route path={ROUTES.Team} element={<TeamPage />} />
        </Routes>
      </main>
      </div>
    </div>
  );
}

export default App;

// import external modules
import {Routes, Route} from 'react-router-dom';
import { Header } from './component';
//import custom modules
import {HomePage, OpleidingPage, ProgrammaPage, WerkstukkenPage, BlogPage, SercivesPage, TeamPage} from './pages'
import { ROUTES } from './routes';

//import styling
import './App.css';
import { ThemeToggle } from './component/theme-switts';
import { ThemeProvider } from './context/theme.context';
import { UserProvider } from './context/user.context';

function App() {
  return (
    <div className="App">
     <UserProvider>
      <ThemeProvider>
      <div>
      <Header />
      <ThemeToggle />
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
      </ThemeProvider>
      </UserProvider>
    </div>
  );
}

export default App;

// import external modules
import {Routes, Route, Navigate} from 'react-router-dom';
import { Header } from './component';
//import custom modules
import {HomePage, OpleidingPage, ProgrammaPage, WerkstukkenPage, BlogPage, BlogDetailsPage, SercivesPage, TeamPage, ProgrammaDetailPage, Signin, Signup} from './pages'
import { ROUTES } from './routes';

//import styling
import './App.css';
import { ThemeToggle } from './component/theme-switts';

import { HygraphProvider, AuthProvider, UserProvider,  ThemeProvider} from './context';
import {AuthLayout, PublicLayout, UserLayout} from './component/layout'

function App() {
  return (
    <div className="App">
      <HygraphProvider>
        <AuthProvider>
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
          <Route path={ROUTES.ProgrammaDetail} element={<ProgrammaDetailPage />}/>
          <Route path={ROUTES.Werkstukken} element={<WerkstukkenPage />} />
          <Route path={ROUTES.Blog}>
            <Route index element={<BlogPage />} />
            <Route path=":postId" element={<BlogDetailsPage />} />
          </Route>
          <Route path={ROUTES.Services} element={<SercivesPage />} />
          <Route path={ROUTES.Team} element={<TeamPage />} />
          <Route path="auth" element={<AuthLayout />}>
                <Route index element ={<Navigate to={ROUTES.AUTH_SIGN_IN} replace={true} />} />
                <Route path={ROUTES.AUTH_SIGN_IN} element ={<Signin />} />
                <Route path={ROUTES.AUTH_SIGN_UP} element ={<Signup />} />
        </Route> 
        </Routes>
        
      </main>
      </div>
      </ThemeProvider>
      </UserProvider>
      </AuthProvider>
      </HygraphProvider>
    </div>
  );
}

export default App;

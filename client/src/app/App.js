// import external modules

import {Routes, Route, Navigate} from 'react-router-dom';
import { Header } from './component';
//import custom modules
import {HomePage, OpleidingPage, ProgrammaPage, WerkstukkenPage, BlogPage, BlogDetailsPage, SercivesPage, TeamPage, TeamDetailPage, ProgrammaDetailPage, Signin, Signup} from './pages'
import { ROUTES } from './routes';



import { ThemeToggle } from './component/theme-switts';

import { HygraphProvider, AuthProvider, UserProvider, ThemeProvider} from './context';
import {AuthLayout, PublicLayout, UserLayout} from './component/layout'


//import styling
import './App.scss';
import './App.css'
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
         
          <Route path={ROUTES.Team}>
            <Route index element={<TeamPage />} />
            <Route path=":teamId" element={<TeamDetailPage />} />
          
          </Route>
          

         <Route path={ROUTES.LANDING} element={<PublicLayout />}>
                <Route index element={<HomePage />} />
                <Route path={ROUTES.HOME} element={<Navigate to="/" replace={true} />} />
                <Route path={ROUTES.POSTS} element={<BlogPage />} />  
                <Route path={ROUTES.POST_DETAILS} element={<BlogDetailsPage />} />
                <Route path={ROUTES.Services} element={<SercivesPage/>} /> 
              </Route> 
          <Route path="auth" element={<AuthLayout />}>
                <Route index element ={<Navigate to={ROUTES.AUTH_SIGN_IN} replace={true} />} />
                <Route path={ROUTES.AUTH_SIGN_IN} element ={<Signin />} />
                <Route path={ROUTES.AUTH_SIGN_UP} element ={<Signup />} />
        </Route> 
        <Route path="user" element={<UserLayout />}>
                <Route index element ={<OpleidingPage />} />
                <Route path="Werkstukken" element ={< WerkstukkenPage/>} />
              </Route>
              <Route
                  path="*"
                  element={
                    <main style={{ padding: "1rem" }}>
                      <p>There's nothing here!</p>
                    </main>
                  }
                />
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

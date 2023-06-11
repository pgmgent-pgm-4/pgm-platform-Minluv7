/* eslint-disable react/jsx-filename-extension */
// import external modules
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './component';
// import custom modules
import {
  HomePage,
  OpleidingPage,
  ProgrammaPage,
  WerkstukkenPage,
  WerkstukkenDetailPage,
  BlogPage,
  BlogDetailsPage,
  SercivesPage,
  TeamPage,
  TeamDetailPage,
  ProgrammaDetailPage,
  Signin,
  Signup,
  SercivesDetailPage,
} from './pages';

import { ROUTES } from './routes';
import { FirstBlogs, FirstServices } from './component/home';
import { ThemeToggle } from './component/theme-switts';
import {
  HygraphProvider, AuthProvider, UserProvider, ThemeProvider,
} from './context';
import {
  AuthLayout,
  PublicLayout,
  UserLayout,
} from './component/layout';

// import styling
import './App.scss';
import './App.css';

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
                    <Route
                      path={ROUTES.ProgrammaDetail}
                      element={<ProgrammaDetailPage />}
                    />

                    <Route path={ROUTES.Werkstukken}>
                      <Route index element={<WerkstukkenPage />} />
                      <Route
                        path=":werkstukkenId"
                        element={<WerkstukkenDetailPage />}
                      />
                    </Route>

                    <Route path={ROUTES.Blog}>
                      <Route index element={<BlogPage />} />
                      <Route path=":postId" element={<BlogDetailsPage />} />
                      <Route path=":postId" element={<FirstBlogs />} />
                    </Route>

                    <Route path={ROUTES.Services}>
                      <Route index element={<SercivesPage />} />
                      <Route path=":serviceId" element={<SercivesDetailPage />} />
                      <Route path=":serviceId" element={<FirstServices />} />
                    </Route>

                    <Route path={ROUTES.Team}>
                      <Route index element={<TeamPage />} />
                      <Route path=":teamId" element={<TeamDetailPage />} />
                    </Route>

                    <Route
                      path={ROUTES.LANDING}
                      element={<PublicLayout />}
                    >
                      <Route index element={<HomePage />} />
                      <Route
                        path={ROUTES.HOME}
                        element={<Navigate to="/" replace />}
                      />
                      <Route path={ROUTES.POSTS} element={<BlogPage />} />
                      <Route
                        path={ROUTES.POST_DETAILS}
                        element={<BlogDetailsPage />}
                      />
                      <Route
                        path={ROUTES.Services}
                        element={<SercivesPage />}
                      />
                    </Route>

                    <Route path="auth" element={<AuthLayout />}>
                      <Route
                        index
                        element={(
                          <Navigate
                            to={ROUTES.AUTH_SIGN_IN}
                            replace
                          />
                        )}
                      />
                      <Route
                        path={ROUTES.AUTH_SIGN_IN}
                        element={<Signin />}
                      />
                      <Route
                        path={ROUTES.AUTH_SIGN_UP}
                        element={<Signup />}
                      />
                    </Route>

                    <Route path="user" element={<UserLayout />}>
                      <Route index element={<OpleidingPage />} />
                      <Route
                        path="Werkstukken"
                        element={<WerkstukkenPage />}
                      />
                    </Route>

                    <Route
                      path="*"
                      element={(
                        <main style={{ padding: '1rem' }}>
                          <p>There`s nothing here!`</p>
                        </main>
                      )}
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

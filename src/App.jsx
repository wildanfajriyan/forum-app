import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import Navigation from './components/Navigation';
import DetailPage from './pages/DetailPage';
import Loading from './components/Loading';
import LeaderboardsPage from './pages/LeaderboardsPage';
import { useAuthUser } from './hooks/useAuthUser';
import ModalAddThread from './components/ModalAddThread';

function App() {
  const authUser = useAuthUser();

  const isPreload = useSelector(
    (states) => states.isPreload,
  );

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<FormPage />} />
            <Route path="/auth" element={<FormPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      {/* modal add thread */}
      <ModalAddThread />

      <Loading />
      <main>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/threads/:id"
            element={<DetailPage />}
          />
          <Route
            path="/leaderboards"
            element={<LeaderboardsPage />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;

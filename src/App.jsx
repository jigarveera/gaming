import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';

// lazy loaded pages
const HomePage = lazy(() => import('./components/page/HomePage'))

// loader imports
import Loader from './components/ui/Loader';

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App

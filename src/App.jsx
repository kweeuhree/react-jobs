import { Route, createBrowserRouter ,createRoutesFromElements, RouterProvider } from 'react-router-dom'; 
import React from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/notFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      {/* // create a router with a path and display this element */}
      <Route index element={ <HomePage /> } /> 
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='*' element={<NotFound />} />
        
    </Route>) 
  
);

function App() {
  return <RouterProvider router={router} />;
};

export default App;
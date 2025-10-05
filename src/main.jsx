import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import University from './Components/University/University.jsx'
import Students from './Components/Students/Students.jsx'

const studentData = fetch('Student.json')
  .then(res => res.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'university', Component: University },
      {
        path: 'student',
        element: <Suspense fallback={<h2>Student data are loading....</h2>}>
          <Students studentData={studentData}></Students>
        </Suspense>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

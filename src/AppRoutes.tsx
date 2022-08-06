import React from 'react'
import Home from './components/Home'
import Projects from './components/Projects'

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/myprojs',
    element: <Projects />
  }
  // {
  //   path: '/ohhellothere',
  //   element: <Meintheinternet />
  // },
]

export default AppRoutes

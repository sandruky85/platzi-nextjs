import React from 'react'
import Navbar from '../navbar/Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>Footer</footer>
    </div>
  )
}

export default Layout

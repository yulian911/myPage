import React from 'react'
import { Link } from 'react-scroll'

const NavigationDots = ({active}:any) => {
    
  return (
    <div className="app__navigation">
    {['home', 'about', 'skills', 'gallery', 'contact'].map((item, index) => (
      <Link
        
        to={`/${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === `/${item}` ? { backgroundColor: '#313BAC' } : {}}
      />
    ))}
  </div>
  )
}

export default NavigationDots
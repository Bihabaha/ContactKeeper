import React from 'react'
import "./ThemeSelector.css"
import { useTheme } from '../../hooks/UseContextHook'
const themeColors= ["#58249c","#249c6b","#b70233"]
const ThemeSelector = () => {
    const {changeColor}=useTheme()
  return (
    <div className='themeSelector'>
        
        <div className="theme-buttons">
{themeColors.map(color=>(
    <div key={color} onClick={()=>changeColor(color)} style={{background:color}} />
))}
        </div>
    </div>
  )
}

export default ThemeSelector
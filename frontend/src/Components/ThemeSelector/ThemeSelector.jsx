import React from 'react'
import "./ThemeSelector.css"
import modeIcon from "/public/brightness_6_FILL0_wght400_GRAD0_opsz24.svg"
import { useTheme } from '../../hooks/UseContextHook'
const themeColors= ["#58249c","#249c6b","#b70233"]
const ThemeSelector = () => {
    const {changeColor,changeMode,mode}=useTheme()
    const toggleMode=()=>{
changeMode(mode==="dark"?"light":"dark")
    }
    console.log(mode)
  return (
    <div className='themeSelector bg-secondary p-2'>
       <div className="mode-toggle">
        <img src={modeIcon} alt="icon-dark-light"
        onClick={toggleMode} 
        style={{filter:mode==="dark"?"invert(100%)":"invert(20%)"}}
        />

       </div>
        <div className="theme-buttons">
{themeColors.map(color=>(
    <div key={color} onClick={()=>changeColor(color)} style={{background:color}} />
))}
        </div>
    </div>
  )
}

export default ThemeSelector
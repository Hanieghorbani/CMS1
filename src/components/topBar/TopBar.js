import React from 'react'
import './TopBar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TopBar() {
  return (
    <div className='d-flex justify-content-between align-items-center py-3 px-4 bg-white position-sticky top-0 w-100 z-3'>
        <div>
            <img src="/imgs/logo.png" alt="logo" className='logo'/>
        </div>
        <div className='icons-topbar d-flex justify-content-between align-items-center'>
            <div >
            <NotificationsNoneIcon />
            <span>2</span>
            </div>
            <div>
            <LanguageIcon />
            <span>2</span>
            </div>
            <SettingsIcon style={{cursor:'pointer'}}/>
            <img src="/imgs/testimonials-5.jpg" alt='profile' className='profile rounded-circle ms-2'/>
        </div>
    </div>
  )
}

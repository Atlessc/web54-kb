import React from 'react';
import '../styles/Home.css'

export default function HomePage() {

  return (
    <div className="home-container">
      <div className='important-message'>Important Message</div>
      <h1 className='home-title'>Welcome to the IT Knowledge Base</h1>
      <div className="category-container">
      <div className="category-box box1">iPhone</div>
      <div className="category-box box2">Macbook</div>
      <div className="category-box box3">Wifi</div>
      <div className="category-box box4">PC</div>
      <div className="category-box box5">Soft<br/>ware</div>
      <div className="category-box box6">Pass<br/>words</div>
      <div className="category-box box7">MDM</div>
      <div className="category-box box8">Loaners</div>
      <div className="category-box box9">New Hires</div>
      <div className="category-box box10">VPN</div>
      <div className="category-box box11">Command Prompt</div>
      <div className="category-box box12">Terminal Commands</div>
      <div className="category-box box13">SCCM</div>
      <div className="category-box box14">Printers</div>
      </div>
    </div>
  )
}
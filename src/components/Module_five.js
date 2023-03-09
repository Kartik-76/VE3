import React from 'react'
import Navbar from './Navbar'
import "../css/Main.css";


import backgroundImg from "../assets/background.jpg";
import MainModule from './Main_module'
const Module_one = () => {
    const tabData = [
        { label: 'Tab 1', content: 'This is the content for Module 5 tab 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat cum nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat cum nemo?' },
        { label: 'Tab 2', content: 'This is the content for Module 5 tab 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat cum nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat cum nemo?' },
        { label: 'Tab 3', content: 'This is the content for Module 5 tab 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat cum nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat cum nemo?' }
      ];
      const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <>
        <Navbar/>
        <div className="home">
        <div className="mask">
            <img src={backgroundImg} alt="VE3" className="background-img" />
        </div>
        <div className="content">
            <h1>Module Five</h1>
            
            <div >
                <MainModule tabs={tabData} value={value} onChange={handleChange}/>
                
            </div>
        </div>

    </div>

    </>
  )
}

export default Module_one
import { useState } from 'react'
import './body.css'



const Des = () => { 
    const [name, setName] = useState();
    const thisname = () => {
            setName(prompt('enter name') + ' is good at java');
    }



    return <div className="content white">
        <div className="A-cont-1">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, itaque repellat magni quibusdam aperiam officia quis minima earum nam possimus accusamus dolor blanditiis non eius accusantium doloremque perferendis aut consectetur</p>
        <div className="">
            <h3>skills</h3>
            <button className='btn'>CSS</button>
            <button className='btn'>Javascript</button>
            <button className='btn'>HTML</button>
            <button className='btn'>PHP</button>
            <button className='btn'>reactJS</button>
            <button className='btn' onClick={thisname}>Java</button>
            <p>{name}</p>
        </div>
        </div>
    </div>
}


export default Des
import { Link } from 'react-router-dom'
const Nav = () => {
    return <div className="navlinks" style={{position:'sticky', top:'0', backgroundColor:'rgba(0,0,255,0.5)'}}>
    <div className='d-flex justify-content-between p-4' >
        <div>
            <Link to='/'>
                Home
            </Link>
        </div>
        <div className='d-flex' style={{gap:'30px'}}>
            <Link>Projects</Link>
            <Link>Contact us</Link>
        </div>
    </div>
        {/* <nav>
            <ul className=' fw-bold'>
                <li><Link to="/">Home</Link></li>
                <li><a href="/Projets">Projects</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </nav> */}
    </div>
}

export default Nav
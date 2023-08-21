import About from './About'
import Des from './Desc'
import image from '../img/3d-render-abstract-particle-design.jpg'
import { BiLogoGmail } from 'react-icons/bi'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Body = () => {
    return <div className="">
        <div className='bg-dark p-3 text-white' style={{minHeight:'100vh', background: `url(${image}) fixed right no-repeat`, backgroundSize:'cover'}}>
            <div className='row'>
                <div className='col-md-1 '>
                    {/* the social media icons go here on a large screen */}
                    <div style={{ position: 'fixed', left: '50px', bottom: '30px' }}>
                        <div className='d-none d-md-flex flex-column' style={{gap:'20px'}}>
                            <BiLogoGmail size={30} />
                            <BsFacebook size={30} />
                            <AiFillInstagram size={30} />
                            <AiFillGithub size={30} />
                            <AiFillLinkedin size={30}/>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-10'>
                    <div className='text-start' style={{height:'70vh'}}>
                        <div className='d-flex  flex-column justify-content-center  h-100'>
                            <div className='ms-4'>
                                <div className='fs-2 fw-light'>Developer Portfolio</div>
                                <div className='display-3 fw-bold'>Website and user <br/> interface designer</div>
                                <div className='fs-4 light'><b>View Projects</b> or <b>Read About Me</b></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-1'></div>
            </div>
            <div>


            </div>
        </div>
    </div>
}

export default Body
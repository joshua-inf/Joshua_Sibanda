import image from '../img/Screenshot 2023-08-25 010620.png'
import image2 from '../img/mypicture.png'
import { BsFacebook } from 'react-icons/bs'
import { BiLogoReact, BiLogoPython, BiLogoNodejs } from 'react-icons/bi'
import { SiMysql, SiPhp } from 'react-icons/si'
import { FaMedal } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Projects } from '../component/products'
import { MobileSkills, WebSkills } from './mainbodycomp/Skills'

const Body = () => {

    const webprojects = Projects.filter((value) => value.category === 'Web').map((value) => {
        return (
            <>
                <div className='col-12 col-md-4 p-2'>
                    <div className=' project-cont' style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ height: '100%' }}>
                            <div style={{ position: 'absolute', top: '0', bottom: '0', right: '0', left: '0' }}>
                                <img className='cont-img' alt='image goes here' src={value.image} height='100%' />
                            </div>
                            <div className='hovercont' style={{ hight: '100%', backgroundColor: 'rgba(0,0,0,0.6)', position: 'absolute', top: '0', bottom: '0', right: '0', left: '0' }}>
                                <div className='text-white p-3'>
                                    <div className='h5'>{value.name}</div>
                                    <div style={{ fontSize: '10px' }}>
                                        {value.Descriptin}
                                    </div>
                                    <Link>
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    })



    return <div className="">
        <div className='p-3 text-white'>
            <div className='row'>
                <div className='col-md-1 '>
                    {/* the social media icons go here on a large screen */}
                    <div style={{ position: 'fixed', left: '50px', bottom: '30px' }}>
                        <div className='d-none d-md-flex flex-column' style={{ gap: '50px' }}>
                            <a href='https://www.facebook.com/joshua.sibanda.7967?mibextid=ZbWKwL'>
                                <BsFacebook className='icon' size={30} />
                            </a>
                            <a href='https://instagram.com/influenced_ljosh?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'>
                                <AiFillInstagram className='icon' size={30} />
                            </a>
                            <a href='https://github.com/joshua-inf'>
                                <AiFillGithub className='icon' size={30} />
                            </a>
                            <a href=''>
                                <AiFillLinkedin className='icon' size={30} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-10'>
                    <div className='text-start d-flex  flex-column justify-content-center' style={{ minHeight: '100vh' }}>
                        <div className='d-flex  flex-column justify-content-center'>
                            <div className='row'>
                                <div className='col-md-4 col-12 d-flex justify-content-center'>
                                    <div className='p-1 bg-light d-flex' style={{borderRadius:'100%'}}>
                                    <img src={image2} width='300px' />
                                    </div>
                                </div>
                                <div className='col-md-8 col-12'>
                                    <div className=' text-center'>
                                        <div className='fs-1 fw-light'>Hi, I'm Joshua</div>
                                        <div className='display-1 fw-bold'>Fullstack Developer</div>
                                        <div className='d-flex justify-content-center' style={{gap:10}}>
                                            <button className='btn btn-lg btn-outline-light rounded-5'>Download CV</button>
                                            <button className='btn btn-lg btn-light rounded-5'>Contact me</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex  flex-column justify-content-center' style={{ minHeight: '100vh ' }}>
                        <div>
                            <div className='row'>
                                <h2 className='text-start text-secondary h5 text-center'>Get to know more</h2>
                                <h2 className='text-start text-center'>About me</h2>
                                <div className='col-12 col-md-6 p-2'>
                                    <div className='' style={{}}>
                                        <img src={image} width='300px' />
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='text-start h-100' style={{alignContent:"center"}}>
                                        <div className='d-flex justify-content-center mb-4' style={{gap:10, flexWrap:'wrap'}}>
                                            <div className='btn btn-outline-light p-4 rounded-4 '>
                                                <FaMedal size={30} />
                                                <div className='fs-5'>Experience</div>
                                                <div className='opacity-'>2+ years</div>
                                                <div>Fullstack Developer</div>
                                            </div>
                                            <div className='btn btn-outline-light p-2 rounded-4 '>
                                                <IoSchoolSharp size={30} />
                                                <div className='fs-5'>Education</div>
                                                <div className=''>Highschool Certificate</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p>
                                            I am a young and intuitive individual with a passion for making a difference in the software engineering field. 
                                            I began my coding journey in 2020 for fun after graduating from high school,
                                             and it has since blossomed into something that I can confidently say is now a significant part of my life.
                                            </p>
                                            <p>
                                            I have honed and developed skills that enable me to make a meaningful impact while enjoying myself.
                                             I love coding; for me, it's more than just a hobby.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 pt-5'>
                        <div>
                            <div>
                                <div className='text-start h3'>My Skills</div>
                                <hr/>
                            </div>
                           
                           <div style={{minHeight:'70vh', alignContent:'center'}} className=''>
                                <MobileSkills/>
                            </div>
                            <div style={{minHeight:'70vh', alignContent:'center'}} className=''>
                                <WebSkills/>
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
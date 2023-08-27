import image from '../img/Screenshot 2023-08-25 010620.png'
import { BsFacebook } from 'react-icons/bs'
import { BiLogoReact, BiLogoPython, BiLogoNodejs } from 'react-icons/bi'
import { SiMysql, SiPhp } from 'react-icons/si'
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Projects } from '../component/products'

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
                            <div className='ms-4'>
                                <div className='fs-1 fw-light'>Hi, I'm Joshua</div>
                                <div className='display-1 fw-bold'>Web Developer</div>
                                <button className='btn btn-lg btn-outline-info rounded-0'>Contact me</button>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex  flex-column justify-content-center' style={{ minHeight: '100vh ' }}>
                        <div>
                            <div className='row'>
                                <h2 className='text-start'>About me</h2>
                                <div className='col-12 col-md-6 p-2'>
                                    <div className='' style={{ height: '400px', overflow:'hidden' }}>
                                        <img src={image} width='100%' />
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='text-start'>
                                        <p>
                                            I am a young and intuitive youth with the passion make a difference in the softaware engineering space. <br />
                                            I started my coding journey in 2020 for fun after a graduated from highschool and it has now blossomed into something that I
                                            can confidently and strongly say that it is now apart of my life now
                                        </p>
                                        <p>
                                            I have honed and developed skills that help me do things that can make a difference while at the same time enjoying my self.
                                            I love code and code for me is more than just a hobby.
                                        </p>
                                        <div>
                                            <h4>languages in my arsenal</h4>
                                            <div className='d-flex' style={{ gap: '20px' }}>
                                                <div>
                                                    <BiLogoReact size={50} />
                                                    ReactJS
                                                </div>
                                                <div>
                                                    <SiMysql size={50} />
                                                </div>
                                                <div>
                                                    <BiLogoPython size={50} />
                                                    Python
                                                </div>
                                                <div>
                                                    <BiLogoNodejs size={50} />
                                                    NodeJS
                                                </div>
                                                <div>
                                                    <SiPhp size={50} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 pt-5'>
                        <div>
                            <div>
                                <div className='text-start h3'>Project Highlights</div>
                                <hr />
                            </div>
                            <div className='row'>
                                {webprojects}
                            </div>
                        </div>
                        <div className='text-end h6'>
                            view more
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
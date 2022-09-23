import './body.css'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsTwitch } from 'react-icons/bs'

const About = () => {
    return <div className="content black">
        <div className="A-cont">
            <h2>Joshua Sibanda</h2>
            <h4>Web Developer</h4>
            <hr />
            <h5>Socials</h5>
            <div className="social-icons">
                <a href="http://">
                    <BsTwitch />
                </a>
                <a href="http://">
                    <AiOutlineTwitter />
                </a>
                <a href="http://">
                    <FiInstagram />
                </a>
                <a href="http://">
                    <AiOutlineFacebook />
                </a>
                <a href="https://github.com/joshua-inf">
                    <AiFillGithub />
                </a>
            </div>
        </div>
    </div>
}


export default About
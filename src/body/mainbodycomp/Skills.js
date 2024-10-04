import image1 from '../../img/react-mobile-image.png'
import image2 from '../../img/2149901770.jpg'

export const MobileSkills = () => {
    return (
        <div className=' rounded-3 pt-4 px-3'>
            <div className='row'>
                <div className='col-md-4 col-12'>
                    <img src={image1} width='100%' />
                </div>
                <div className='col-md-8 col-12 text-start'>
                    <div className='d-flex py-3 flex-column  h-100 justify-content-center' style={{ gap: 10 }}>
                        <h3 className='text-start h2'>Mobile App Developement</h3>
                        <div>
                            I specialize in building high-performance, cross-platform mobile apps using React Native. With this framework, I create seamless experiences for both iOS and Android by writing code once and deploying it everywhere. My skills include:
                        </div>
                        <ul>
                            <li>
                                Cross-Platform Development: Efficiently crafting apps for both iOS and Android.
                            </li>
                            <li>
                                Performance Optimization: Enhancing app speed and responsiveness.
                            </li>
                            <li>
                                Custom UI/UX: Designing intuitive, user-friendly interfaces.
                            </li>
                            <li>
                                API Integration: Connecting apps with external services and data.
                            </li>
                        </ul>
                        <div>
                            My approach combines clean coding practices with a focus on delivering exceptional user experiences.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const WebSkills = () => {
    return (
        <>
        <div className=' rounded-3 pt-4 px-3'>
            <div className='row'>
                <div className='col-md-4 order-md-1 col-12'>
                    <img src={image2} width='100%' />
                </div>
                <div className='col-md-8 col-12 text-start'>
                    <div className='d-flex py-3 flex-column  h-100 justify-content-center' style={{ gap: 10 }}>
                        <h3 className='text-start h2'>Website Designing and Developement</h3>
                        <p>
                        As a web developer, I specialize in creating dynamic and user-friendly applications using React.js. 
                        Leveraging its component-based architecture, I build scalable and maintainable web solutions that 
                        enhance user experience. My expertise includes implementing state management with tools like Redux, 
                        optimizing performance through code splitting, and ensuring responsive design for all devices.
                        </p>
                        <p>
                        I am passionate about delivering clean, efficient code and continuously exploring 
                        new features in the React ecosystem. With a focus on collaboration and agile methodologies, 
                        I thrive in team environments and enjoy bringing innovative ideas to life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
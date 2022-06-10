import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';
import logo from './logo2.png';

const sidebarNavItems = [
    {
        display: 'All in One',
        icon: <i className='bx bx-briefcase-alt bx-spin'></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Flights',
        icon: <i className='bx bx-rocket'></i>,
        to: '/flights',
        section: 'flights'
    },
    {
        display: 'Hotels',
        icon: <i className='bx bx-hotel'></i>,
        to: '/hotels',
        section: 'hotels'
    },
    {
        display: 'Rental Cars',
        icon: <i className='bx bx-car'></i>,
        to: '/rentalcars',
        section: 'rentalcars'
    },
    {
        display: 'Places to Eat',
        icon: <i className='bx bx-fork'></i>,
        to: '/placestoeat',
        section: 'placestoeat'
    },
    {
        display: 'Things to Do',
        icon: <i className='bx bx-arch'></i>,
        to: '/thingstodo',
        section: 'thingstodo'
    },
    {
        display: 'Weather',
        icon: <i className='bx bx-sun'></i>,
        to: 'weather',
        section: 'weather'
    },
    {
        display: 'Your Places',
        icon: <i className='bx bx-map-pin'></i>,
        to: 'yourplaces',
        section: 'yourplaces'
    },
    
    
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo">
        <img src={logo} alt="Logo" height="96px" width="96px"></img>
            AIO Travel Scoop
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;

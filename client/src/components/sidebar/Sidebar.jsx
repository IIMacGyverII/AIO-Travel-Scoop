import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';

const sidebarNavItems = [
    {
        display: 'Flights',
        icon: <i className='bx bx-paper-plane bx-spin'></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Hotels',
        icon: <i className='bx bx-hotel'></i>,
        to: '/login',
        section: 'login'
    },
    {
        display: 'Rental Cars',
        icon: <i className='bx bx-car'></i>,
        to: '/signup',
        section: 'signup'
    },
    {
        display: 'Places to Eat',
        icon: <i className='bx bx-fork'></i>,
        to: '/success',
        section: 'success'
    },
    {
        display: 'Things to Do',
        icon: <i className='bx bx-receipt'></i>,
        to: '/orderHistory',
        section: 'orderHistory'
    },
    {
        display: 'Weather',
        icon: <i className='bx bx-sun'></i>,
        to: 'products/:id',
        section: 'products/:id'
    },
    {
        display: 'Your Places',
        icon: <i className='bx bx-planet'></i>,
        to: 'products/:id',
        section: 'products/:id'
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

import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import "./TabContainer.css"

const TabContainer: React.FC = () => {

    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navbarLinks = document.querySelectorAll('.tab-items');
      
        sections.forEach(function(section, index) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
      
          if (window.pageYOffset >= sectionTop - 1 && window.pageYOffset < sectionTop + sectionHeight) {
            navbarLinks[index].classList.add('tab-selected');
          } else {
            navbarLinks[index].classList.remove('tab-selected');
          }
        });
    });

    return (
        <div className="tabs-container">
            <ul>
                <NavLink to="#" className="tab-items tab-selected">
                  <Link to="overview" smooth={true} duration={30}>Overview</Link>
                </NavLink>
                <NavLink to="#" className="tab-items">
                  <Link to="select-room" smooth={true} duration={30}>Rooms</Link>
                </NavLink>
                <NavLink to="#" className="tab-items">
                  <Link to="location" smooth={true} duration={30}>Location</Link>
                </NavLink>
                <NavLink to="#" className="tab-items">
                  <Link to="service" smooth={true} duration={30}>Amenities</Link>
                </NavLink>
            </ul>
        </div>
    );
};

export default TabContainer;
import { headerLogo } from './../assets/images';
import { hamburger } from './../assets/icons';
import { navLinks } from './../constants';
import NavList from './NavList';

const Nav = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <a href="#">
          <img src={headerLogo} alt="Logo" className="h-7 w-32" />
        </a>
        <ul className="flex-center flex-1 gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <NavList key={item.label} item={item} />
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger Menu" className="h-6 w-6" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

const NavList = ({ item }) => {
  return (
    <li>
      <a
        href={item.href}
        className="font-montserrat text-lg leading-normal text-slate-gray"
      >
        {item.label}
      </a>
    </li>
  );
};

export default NavList;

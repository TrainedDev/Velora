import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="flex-col-center">
      <div className="flex-row-center justify-around">
        <img src="/images/logo.png" alt="logo" />
        <h1>velvet pour</h1>
      </div>

      <ul className="flex-row-center justify-around">
        {navLinks.map((ele) => (
          <li key={ele.id}>
              <a href={`#${ele.id}`}>{ele.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

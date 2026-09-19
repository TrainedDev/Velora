import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.png" alt="logo" />
        <h1>velvet pour</h1>
      </div>

      <ul>
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

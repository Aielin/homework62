import { NavLink } from 'react-router-dom';

const ToolBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="navbar-brand">Home</NavLink>
        <div className="navbar-nav">
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default ToolBar;

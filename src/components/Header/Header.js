import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬SADMAN'S MOVIE APP🎥
    </span>
  );
};

export default Header;

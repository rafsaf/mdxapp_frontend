import React from "react";
import styled from "styled-components";
import { setColor } from "../../styles";
import { AiOutlineLogout } from "react-icons/ai";
import { IoMdApps } from "react-icons/io";
import { Link } from "gatsby";
import { getUser } from "../../services/auth/user";
import { logout } from "../../services/auth/logout";

const Nav = styled.nav`
  background: ${setColor.mainGrey};
  color: ${setColor.mainWhite};
  width: 100%;
  padding: 0.3rem 1rem;
  height: 3rem;
`;

const NavCenter = styled.div`
  max-width: 1500px;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1.2rem;
  article a {
    color: ${setColor.mainWhite};
  }
  article a svg {
    padding-top: 8px;
    font-size: 1.6rem;
  }
  div {
    margin-left: auto;
    padding: 0 1rem;
  }
  button {
    cursor: pointer;
  }
  a {
    color: ${setColor.primaryColor7};
  }
  button svg {
    font-size: 2rem;
    fill: ${setColor.mainWhite};
    color: ${setColor.mainWhite};
  }
`;

const Navbar = () => {
  const [username, setUsername] = React.useState<string>("...");
  const fillUsername = () => {
    getUser().then((user) => {
      if (user !== null) {
        setUsername(user.username);
      }
    });
  };
  React.useEffect(() => {
    fillUsername();
  }, []);

  return (
    <Nav>
      <NavCenter>
        <article>
          <Link to="/apps">
            <IoMdApps /> Apps
          </Link>
        </article>
        <div>
          Logged as <Link to="/apps/profile">{username}</Link>
        </div>
        <button onClick={logout}>
          <AiOutlineLogout />
        </button>
      </NavCenter>
    </Nav>
  );
};

export default Navbar;

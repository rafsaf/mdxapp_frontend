import React from "react";
import styled from "styled-components";
import { setColor } from "../../styles";
import { AiOutlineLogout } from "react-icons/ai";
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
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;

  div {
    padding: 0 2rem;
    font-size: 1.25rem;
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

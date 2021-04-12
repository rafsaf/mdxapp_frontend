import React, { useState } from "react";
import styled from "styled-components";
import { setColor, setFont } from "../../styles";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, navigate } from "gatsby";
import ApiLogout from "../../services/api/logout";

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
    setTimeout(() => {
      const username = localStorage.getItem("username");
      if (username) {
        setUsername(username);
      }
    }, 25);
  };
  React.useEffect(() => {
    fillUsername();
  }, []);

  const logOut = () => {
    ApiLogout.post({}, true).then((response) => {
      navigate("/");
    });
  };

  return (
    <Nav>
      <NavCenter>
        <div>
          Logged as <Link to="/apps/profile">{username}</Link>
        </div>
        <button onClick={logOut}>
          <AiOutlineLogout />
        </button>
      </NavCenter>
    </Nav>
  );
};

export default Navbar;

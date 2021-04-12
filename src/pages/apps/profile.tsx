import React from "react";
import { AuthorizedLayout } from "../../components/layout";
import {
  isProfil,
  Profil,
  ProfilError,
} from "../../services/api/models/profile.interface";
import { User } from "../../services/api/models/user.interface";
import { ApiProfile } from "../../services/api/profile";
import { getUser } from "../../services/auth/user";
import { useAPIError } from "../../services/hooks/useApiError";

const profile = () => {
  const [profil, setProfil] = React.useState<Profil | null>(null);
  const [user, setUser] = React.useState<User | null>(null);
  const { addError } = useAPIError();

  const getProfileAndUser = () => {
    ApiProfile.get<Profil, ProfilError>().then((response) => {
      if (typeof response === "string") {
        addError(response);
      } else if (isProfil(response)) {
        setProfil(response);
      }
    });
    getUser().then((user) => {
      if (user) {
        setUser(user);
      }
    });
  };

  React.useEffect(() => {
    getProfileAndUser();
  }, []);

  return (
    <AuthorizedLayout>
      {!profil ? (
        <h1>...loading</h1>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>character: {profil.character}</h1>
          <h1>username: {user?.username}</h1>
          <h1>first name: {user?.first_name}</h1>
          <h1>last name: {user?.last_name}</h1>
          <h1>email: {user?.email}</h1>
        </div>
      )}
    </AuthorizedLayout>
  );
};

export default profile;

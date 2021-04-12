export interface Profil {
  user: number;
  character: string;
}

export interface ProfilError {
  non_field_errors?: string;
  character?: string;
}

export const isProfil = (
  response: Profil | ProfilError
): response is Profil => {
  return (response as Profil).user !== undefined;
};

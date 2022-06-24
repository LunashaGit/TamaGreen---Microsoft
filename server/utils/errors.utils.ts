export const signUpErrors = (err: any) => {
    let errors = { pseudo: "", email: "", password: "" };
  
    if (err.message.includes("pseudo"))
      errors.pseudo = "Pseudo incorrect ou déjà pris";
    if (err.message.includes("email")) errors.email = "Email incorrect";
    if (err.message.includes("password"))
      errors.password = "Le mot de passe doit faire 6 caractères minimum";
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
      errors.pseudo = "Ce pseudo est déjà enregistré";
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
      errors.email = "Cet email est déjà enregistré";
    return errors;
  };
  
  export const signInErrors = (err: any) => {
    let errors = { email: "", password: "" };
  
    if (err.message.includes("email")) errors.email = "Email inconnu";
  
    if (err.message.includes("password"))
      errors.password = "Le mot de passe ne correspond pas";
    return errors;
  };
  
  export const uploadErrors = (err: any) => {
    let errors = { format: "", maxSize: "" };
    if (err.message.includes("invalid file"))
      errors.format = "Format incompatible";
    if (err.message.includes("max size"))
      errors.maxSize = "Le fichier dépasse 500ko";
    return errors;
  };
  
  export const createPostErrors = (err: any) => {
    let errors = { spotName: "", latitude: "", longitude: "", hobbies: "", description: "" };
    if (err.message.includes("spotName"))
      errors.spotName = "Nom du spot invalide";
    if (err.message.includes("latitude"))
      errors.latitude = "latitude invalide";
      if (err.message.includes("longitude"))
      errors.latitude = "longitude invalide";
      if (err.message.includes("hobbies"))
      errors.latitude = "Nom du hobbies invalide";
      if (err.message.includes("description"))
      errors.latitude = "description invalide";
    return errors;
  };
  
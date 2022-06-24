export const signUpErrors = (err: any) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "The Username is already taken";
  if (err.message.includes("email")) errors.email = "Mail isn't correct";
  if (err.message.includes("password"))
    errors.password = "The password need to be 6 letters minimal";
  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "This username is already taken";
  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "This email is already taken";
  return errors;
};

export const signInErrors = (err: any) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email")) errors.email = "Email inconnu";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe ne correspond pas";
  return errors;
};

export const createQuestionErrors = (err: any) => {
  let errors = { question: "", answerA: "", answerB: "", };
  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("question"))
    errors.question = "This question already exist";
  if (err.message.includes("question"))
    errors.question = "This question isn'tvalid";
  if (err.message.includes("answerA"))
    errors.answerA = "The Answer A isn't valid";
    if (err.message.includes("answerB"))
    errors.answerB = "The Answer A isn't valid";
    
  return errors;
};

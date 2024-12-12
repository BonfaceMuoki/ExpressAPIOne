const signUp = (req, res) => {
    
  res.status(200).json({ message: "Sign up successful" });
};

const login = (req, res) => {
  res.status(200).json({ message: "Login successful" });
};

export { signUp, login };

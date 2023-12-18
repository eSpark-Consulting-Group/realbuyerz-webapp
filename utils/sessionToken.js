const createSessionToken = ({ id, role, username }) => {
  return jwt.sign({ id, username, role }, SECRET, { expiresIn: 24 * 60 * 60 });
};

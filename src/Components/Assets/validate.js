const patterns = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
  phone: /^\d{10}$/,
  postcode: /^\d{4}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

export const validate = (type, value) => {
  const pattern = patterns[type];
  return pattern ? pattern.test(value) : false;
};

export default patterns;

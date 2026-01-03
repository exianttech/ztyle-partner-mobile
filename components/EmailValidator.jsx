const EmailValidator = (email) => /\S+@\S+\.\S+/.test(email);

export default EmailValidator
export function validateRegister({ name, email, password }) {
  if (!name || !email || !password) {
    const error = new Error("Preencha todos os campos");
    error.status = 400;
    throw error;
  }
}
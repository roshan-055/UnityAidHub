import * as bcrypt from 'bcrypt';
export function hashPassword(rawPassword: string) {
  //const SALT = bcrypt.genSaltSync();
  const SALT = 1;
  return bcrypt.hashSync(rawPassword, SALT);
}

export function comparePassword(rawPassword: string, hash: string) {
  return bcrypt.compareSync(rawPassword, hash);
}

import { getToken } from "../helpers/localToken";

export default function authHeader() {
  const token = getToken();
  const header = {};
  if (token) {
    header.authorization = token;
  }
  return header;
}

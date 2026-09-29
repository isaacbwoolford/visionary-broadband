/* Names are stored lowercase. Tokens are SHA-256 of "name\npassword". */
const VB_ACCOUNTS = [
  { name: "isaac woolford", token: "4a9c221c1b24b3afdee32f499d704e0cc251a3e2b5e89ad0f38b190199f92ea9" },
];

const VB_AUTH_KEY = "vb-auth";

function vbNormalizeName(name) {
  return String(name || "").trim().replace(/\s+/g, " ").toLowerCase();
}

async function vbHash(text) {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function vbSignIn(name, password) {
  const key = vbNormalizeName(name);
  const token = await vbHash(`${key}\n${password}`);
  const account = VB_ACCOUNTS.find((item) => item.name === key && item.token === token);
  if (!account) return false;
  sessionStorage.setItem(VB_AUTH_KEY, JSON.stringify({ name: key, token }));
  return true;
}

function vbLogout() {
  sessionStorage.removeItem(VB_AUTH_KEY);
  location.replace("/orders/");
}

function vbSession() {
  try {
    const session = JSON.parse(sessionStorage.getItem(VB_AUTH_KEY) || "null");
    if (!session) return null;
    const match = VB_ACCOUNTS.some((item) => item.name === session.name && item.token === session.token);
    return match ? session : null;
  } catch {
    return null;
  }
}

function vbSessionValid() {
  return !!vbSession();
}

function vbIsIsaac() {
  return vbSession()?.name === "isaac woolford";
}

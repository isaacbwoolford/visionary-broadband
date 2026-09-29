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
  sessionStorage.removeItem("vb-customer");
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

const VB_CUSTOMER_KEY = "vb-customer";

function vbCustomerSession() {
  try { return JSON.parse(sessionStorage.getItem(VB_CUSTOMER_KEY) || "null"); }
  catch { return null; }
}

async function vbRpc(name, args) {
  const config = window.VB_CONFIG || {};
  const key = config.supabaseAnonKey;
  if (!config.supabaseUrl || !key) throw new Error("Orders are not connected yet.");
  const headers = {
    apikey: key,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (!String(key).startsWith("sb_")) headers.Authorization = `Bearer ${key}`;
  const response = await fetch(`${config.supabaseUrl.replace(/\/$/, "")}/rest/v1/rpc/${name}`, {
    method: "POST",
    headers,
    body: JSON.stringify(args),
  });
  const text = await response.text();
  if (!response.ok) throw new Error(text || `Request failed (${response.status})`);
  return text ? JSON.parse(text) : null;
}

async function vbCustomerSignIn(name, password) {
  const username = String(name || "").trim();
  const token = await vbHash(`${username.toLowerCase()}\n${password}`);
  const order = await vbRpc("customer_sign_in", { p_username: username, p_token: token });
  if (!order || !order.number) return null;
  sessionStorage.setItem(VB_CUSTOMER_KEY, JSON.stringify({ username, token, order }));
  return order;
}

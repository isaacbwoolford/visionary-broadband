const STEPS = [
  "Enter Service Address",
  "Product Selection",
  "Voice/Fax Information",
  "Customer Information",
  "Billing Information",
  "Review",
];

const PACKAGES = [
  {
    id: "gig-bundle",
    name: "1Gig Fiber Worry Free Wi-Fi 7 Home Bundle (B)",
    price: 95,
    items: ["Residential Fiber Gig/Gig (B) x1", "eero Pro 7 Router x1", "eero Secure x1", "Residential Voice Line VFC x1"],
    voice: 1,
  },
  {
    id: "gig-pack",
    name: "1Gig Fiber Worry Free Wi-Fi 7 Package (B)",
    price: 80,
    items: ["Residential Fiber 1Gig (B) x1", "eero Pro 7 Router x1", "eero Secure x1"],
    voice: 0,
  },
  {
    id: "300-bundle",
    name: "300Mbps Fiber Worry Free Wi-Fi 7 Home Bundle (B)",
    price: 80,
    items: ["Residential Fiber 300Mbps (B) x1", "eero Pro 7 Router x1", "eero Secure x1", "Residential Voice Line VFC x1"],
    voice: 1,
  },
  {
    id: "300-pack",
    name: "300Mbps Fiber Worry Free Wi-Fi 7 Package (B)",
    price: 65,
    items: ["Residential Fiber 300Mbps (B) x1", "eero Pro 7 Router x1", "eero Secure x1"],
    voice: 0,
  },
  {
    id: "600-bundle",
    name: "600Mbps Fiber Worry Free Wi-Fi 7 Home Bundle (B)",
    price: 85,
    items: ["Residential Fiber 600Mbps (B) x1", "eero Pro 7 Router x1", "eero Secure x1", "Residential Voice Line VFC x1"],
    voice: 1,
  },
  {
    id: "600-pack",
    name: "600Mbps Fiber Worry Free Wi-Fi 7 Package (B)",
    price: 70,
    items: ["Residential Fiber 600Mbps (B) x1", "eero Pro 7 Router x1", "eero Secure x1"],
    voice: 0,
  },
  {
    id: "gig-byo",
    name: "Residential Fiber Gig/Gig: Bring Your Own Router (B)",
    price: 80,
    items: ["1Gbps/1Gbps Fiber Internet, No router included"],
    voice: 0,
  },
  {
    id: "300-byo",
    name: "Residential Fiber 300Mbps/300Mbps: Bring Your Own Router (B)",
    price: 65,
    items: ["300Mbps/300Mbps Fiber Internet, No router included"],
    voice: 0,
  },
  {
    id: "600-byo",
    name: "Residential Fiber 600Mbps/600Mbps: Bring Your Own Router (B)",
    price: 70,
    items: ["600Mbps/600Mbps Fiber Internet, No router included"],
    voice: 0,
  },
];

const ADDONS = [
  { id: "static-ip", name: "1 Static IP - Fiber", price: 5 },
  { id: "eero-plus", name: "eero Plus - Resi Fiber", price: 9 },
  { id: "email", name: "Hosting, 1 Additional Email Box", price: 2 },
  { id: "storage", name: "Hosting, Additional 2GB of Email Storage", price: 5 },
  { id: "voice", name: "Residential Voice Line (Fiber)", price: 30, voice: true },
  { id: "mesh", name: "eero Mesh Rental - Fiber", price: 10 },
  { id: "managed", name: "eero - Managed Router Upgrade - Fiber", price: 13.95 },
];

const GROUPS = [
  "Fiber Market A",
  "Fiber Market B - AC Tags",
  "Fiber Market C",
  "Fiber Market D",
];

const REFERRALS = ["Outside Sales", "Inside Sales", "Website", "Customer Referral", "Existing Customer", "Event"];
const ROLES = ["Primary", "Local Contact", "Billing Contact", "Technical Contact"];
const METHODS = ["Phone", "Email", "Text Message"];
const DISCLOSURES = [
  ["los", "LOS"],
  ["installation", "Installation"],
  ["billing", "Billing"],
  ["service", "Service Order"],
  ["rent", "Rent/Lease Property"],
  ["invoices", "Invoices"],
  ["router", "Managed Router"],
  ["documents", "Documents"],
  ["vacation", "Vacation Hold"],
];

const STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
  "Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
  "South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];
const ABBR = {
  Alabama:"AL",Alaska:"AK",Arizona:"AZ",Arkansas:"AR",California:"CA",Colorado:"CO",Connecticut:"CT",Delaware:"DE",
  Florida:"FL",Georgia:"GA",Hawaii:"HI",Idaho:"ID",Illinois:"IL",Indiana:"IN",Iowa:"IA",Kansas:"KS",Kentucky:"KY",
  Louisiana:"LA",Maine:"ME",Maryland:"MD",Massachusetts:"MA",Michigan:"MI",Minnesota:"MN",Mississippi:"MS",
  Missouri:"MO",Montana:"MT",Nebraska:"NE",Nevada:"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM",
  "New York":"NY","North Carolina":"NC","North Dakota":"ND",Ohio:"OH",Oklahoma:"OK",Oregon:"OR",Pennsylvania:"PA",
  "Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD",Tennessee:"TN",Texas:"TX",Utah:"UT",Vermont:"VT",
  Virginia:"VA",Washington:"WA","West Virginia":"WV",Wisconsin:"WI",Wyoming:"WY",
};

function blankContact(role = "Primary") {
  return { name: "", role, email: "", phone: "", smsAccount: "", smsMarketing: "", pin: "", dob: "", preferred: "Phone" };
}

function fresh() {
  return {
    screen: "flow",
    step: 0,
    maxReached: 0,
    menu: false,
    mapMode: "satellite",
    draft: { line: "", unit: "", zip: "", serviceType: "Residential" },
    service: null,
    lookupError: "",
    packageId: "",
    addons: {},
    voiceLines: [],
    accountName: "",
    contacts: [blankContact()],
    referredBy: "",
    rentOrOwn: "",
    onSite: "No",
    fiberDrop: "",
    tempFiberDrop: "",
    installDate: "",
    installTime: "",
    salesNotes: "",
    installNotes: "",
    payMethod: "card",
    cardName: "",
    cardNumber: "",
    cardExp: "",
    achName: "",
    achRouting: "",
    achAccount: "",
    achType: "Checking",
    autopay: false,
    billingReady: false,
    billing: { line: "", unit: "", city: "", region: "Colorado", zip: "" },
    mailingSame: true,
    mailing: { line: "", unit: "", city: "", region: "Colorado", zip: "" },
    promo: false,
    disclosures: {},
    errors: {},
    productError: "",
    order: null,
    toast: "",
    confirmCancel: false,
    overrideOpen: false,
    lookupToken: 0,
    saving: false,
    login: {},
    customerEditing: false,
  };
}

let state = fresh();
let map;

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function money(n) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function titleCase(s) {
  return s.trim().replace(/\s+/g, " ").toLowerCase().replace(/\b[a-z]/g, (c) => c.toUpperCase());
}

function digits(s) {
  return String(s || "").replace(/\D/g, "");
}

function selectedPackage() {
  return PACKAGES.find((p) => p.id === state.packageId) || null;
}

function hasVoice() {
  const pkg = selectedPackage();
  return ((pkg && pkg.voice) || 0) + (Number(state.addons.voice) || 0) > 0;
}

function addressLine(service, unit) {
  const street = unit ? `${service.line}, Unit ${unit}` : service.line;
  const region = ABBR[service.region] || service.region;
  return `${street}, ${service.city}, ${region} ${service.zip}`;
}

function loadOrders() {
  try { return JSON.parse(localStorage.getItem("vb-orders") || "[]"); }
  catch { return []; }
}

function saveOrderRecord(order) {
  const list = loadOrders().filter((item) => item.number !== order.number);
  list.unshift(order);
  localStorage.setItem("vb-orders", JSON.stringify(list));
}

function timeSlots() {
  const out = [];
  for (let m = 6 * 60; m <= 20 * 60; m += 15) {
    const h = Math.floor(m / 60);
    const min = m % 60;
    const suffix = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 === 0 ? 12 : h % 12;
    out.push(`${h12}:${String(min).padStart(2, "0")} ${suffix}`);
  }
  return out;
}

function matchFixture(line, zip) {
  const n = line.toLowerCase();
  const base = {
    line: titleCase(line),
    zip,
    productGroup: "Fiber Market B - AC Tags",
    existingDrop: false,
  };
  if (zip === "81201" && /\bhunt\b/.test(n)) {
    return { ...base, city: "Salida", region: "Colorado", lat: 38.529676, lng: -105.98872, zone: "SALDCO.ZONE12A", zoneStatus: "FiberAerial - UnderConstruction" };
  }
  if (zip === "81201" && /\bholman\b/.test(n)) {
    return { ...base, city: "Salida", region: "Colorado", lat: 38.528648, lng: -106.010468, zone: "SALDCO.ZONE11A", zoneStatus: "FiberAerial - UnderConstruction" };
  }
  if (zip === "81201") {
    const hash = [...n].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
    return {
      ...base,
      city: "Salida",
      region: "Colorado",
      lat: 38.5342 + (hash % 90) / 20000,
      lng: -105.998 + (hash % 70) / 20000,
      zone: `SALDCO.ZONE${String((hash % 18) + 1).padStart(2, "0")}`,
      zoneStatus: "FiberAerial - UnderConstruction",
    };
  }
  return null;
}

async function geocode(line, zip) {
  const fixed = matchFixture(line, zip);
  if (fixed) return fixed;
  const res = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=1&countrycodes=us&q=${encodeURIComponent(`${line}, ${zip}`)}`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) return null;
  const data = await res.json();
  if (!data[0]) return null;
  const a = data[0].address || {};
  const city = a.city || a.town || a.village || a.hamlet || a.county || "";
  const regionName = Object.keys(ABBR).find((name) => name.toLowerCase() === String(a.state || "").toLowerCase()) || a.state || "";
  const hash = [...city].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  const code = (city.replace(/[^a-z]/gi, "").slice(0, 4) || "ZONE").toUpperCase();
  return {
    line: titleCase(line),
    zip,
    city,
    region: regionName,
    lat: Number(data[0].lat),
    lng: Number(data[0].lon),
    zone: `${code}.ZONE${String((hash % 18) + 1).padStart(2, "0")}`,
    zoneStatus: "Fiber - Serviceable",
    productGroup: "Fiber Market B - AC Tags",
    existingDrop: false,
  };
}

function syncVoiceLines() {
  const pkg = selectedPackage();
  const wanted = [];
  for (let i = 0; i < ((pkg && pkg.voice) || 0); i += 1) wanted.push("Residential Voice Line VFC");
  for (let i = 0; i < (Number(state.addons.voice) || 0); i += 1) wanted.push("Residential Voice Line (Fiber)");
  state.voiceLines = wanted.map((label, i) => {
    const prev = state.voiceLines[i];
    if (prev && prev.label === label) return prev;
    return {
      label,
      type: "Voice",
      porting: false,
      number: "",
      main: i === 0,
      directory: "",
      voicemail: "Yes",
      vmEmail: "",
      portId: "",
    };
  });
}

function pricing() {
  const pkg = selectedPackage();
  let monthly = pkg ? pkg.price : 0;
  ADDONS.forEach((addon) => {
    monthly += addon.price * (Number(state.addons[addon.id]) || 0);
  });
  const portCount = state.voiceLines.filter((line) => line.porting && digits(line.number).length >= 10).length;
  const discount = state.promo ? 50 : 0;
  return {
    monthly,
    month1: Math.max(0, monthly - discount),
    month2: monthly,
    onetime: portCount * 10,
    portCount,
  };
}

function customerReady() {
  if (!state.accountName.trim() || !state.referredBy || !state.rentOrOwn) return false;
  return state.contacts.every((c) => c.name.trim() && c.email.includes("@") && digits(c.phone).length >= 10 && c.smsAccount && c.smsMarketing);
}

function billingAddressReady() {
  if (!state.billing.line.trim() || !state.billing.city.trim() || !state.billing.zip.trim()) return false;
  if (!state.mailingSame && (!state.mailing.line.trim() || !state.mailing.city.trim() || !state.mailing.zip.trim())) return false;
  return true;
}

function paymentTouched() {
  if (state.payMethod === "ach") return !!(digits(state.achRouting) || digits(state.achAccount));
  return !!(digits(state.cardNumber) || digits(state.cardExp));
}

function paymentComplete() {
  if (state.payMethod === "card") {
    return !!(state.cardName.trim() && digits(state.cardNumber).length >= 13 && digits(state.cardExp).length >= 6);
  }
  return !!(state.achName.trim() && digits(state.achRouting).length === 9 && digits(state.achAccount).length >= 4);
}

function billingReady() {
  return billingAddressReady() && paymentComplete();
}

function disclosuresReady() {
  return DISCLOSURES.every(([id]) => state.disclosures[id]);
}

function nextIndex(from) {
  let n = from + 1;
  if (n === 2 && !hasVoice()) n = 3;
  return n;
}

function prevIndex(from) {
  let n = from - 1;
  if (n === 2 && !hasVoice()) n = 1;
  return Math.max(0, n);
}

function ensureBilling() {
  if (state.billingReady || !state.service) return;
  state.billing = {
    line: state.service.line,
    unit: state.draft.unit,
    city: state.service.city,
    region: state.service.region || "Colorado",
    zip: state.service.zip,
  };
  if (!state.cardName) state.cardName = state.accountName;
  if (!state.achName) state.achName = state.accountName;
  state.billingReady = true;
}

function buildOrder() {
  syncVoiceLines();
  const prices = pricing();
  const pkg = selectedPackage();
  return {
    number: String(10000 + Math.floor(Math.random() * 90000)),
    service: { ...state.service, unit: state.draft.unit, serviceType: state.draft.serviceType },
    package: pkg,
    addons: ADDONS.filter((addon) => Number(state.addons[addon.id]) > 0).map((addon) => ({
      name: addon.name,
      qty: Number(state.addons[addon.id]),
      price: addon.price * Number(state.addons[addon.id]),
    })),
    promo: state.promo,
    lines: state.voiceLines.map((line) => ({ ...line })),
    accountName: state.accountName.trim(),
    mailingSame: state.mailingSame,
    mailing: { ...state.mailing },
    rentOrOwn: state.rentOrOwn,
    onSite: state.onSite,
    fiberDrop: state.fiberDrop,
    tempFiberDrop: state.tempFiberDrop || "Unspecified",
    referredBy: state.referredBy,
    contacts: state.contacts.map((c) => ({ ...c })),
    payMethod: state.payMethod === "ach" ? "ACH" : state.payMethod === "card" ? "Credit Card" : "Not entered yet",
    autopay: state.autopay ? "Yes" : "No",
    billing: { ...state.billing },
    salesNotes: state.salesNotes.trim(),
    installNotes: state.installNotes.trim(),
    installDate: state.installDate,
    installTime: state.installTime,
    disclosures: { ...state.disclosures },
    pricing: prices,
  };
}

function orderRow(order) {
  const contact = (order.contacts && order.contacts[0]) || {};
  const service = order.service || {};
  const region = ABBR[service.region] || service.region || "";
  const street = service.unit ? `${service.line}, Unit ${service.unit}` : service.line;
  const address = [street, service.city, `${region} ${service.zip || ""}`.trim()].filter(Boolean).join(", ");
  const payload = { ...order };
  ["cardNumber", "cardCvv", "cardExp", "cardName", "achAccount", "achRouting", "achName", "payment"].forEach((key) => delete payload[key]);
  const row = {
    order_number: order.number,
    source: "visionary-broadband",
    account_name: order.accountName,
    service_address: address,
    contact_name: contact.name || null,
    contact_email: contact.email || null,
    contact_phone: contact.phone || null,
    package_name: order.package ? order.package.name : null,
    month1: order.pricing ? order.pricing.month1 : null,
    monthly: order.pricing ? order.pricing.monthly : null,
    payload,
  };
  if (order.payment) row.payment = order.payment;
  return row;
}

function bytesToBase64(bytes) {
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary);
}

let paymentKeyPromise;
function importPaymentKey() {
  const config = window.VB_CONFIG || {};
  if (!config.paymentPublicKey) throw new Error("Payment encryption is not configured.");
  if (!paymentKeyPromise) {
    const der = Uint8Array.from(atob(config.paymentPublicKey), (char) => char.charCodeAt(0));
    paymentKeyPromise = crypto.subtle.importKey(
      "spki",
      der,
      { name: "RSA-OAEP", hash: "SHA-256" },
      false,
      ["encrypt"],
    );
  }
  return paymentKeyPromise;
}

async function encryptPayment() {
  const zip = digits(state.billing.zip).slice(0, 5);
  const secret = state.payMethod === "card"
    ? { cardName: state.cardName.trim(), cardNumber: digits(state.cardNumber), cardExp: state.cardExp.trim(), zip }
    : {
      achName: state.achName.trim(),
      achRouting: digits(state.achRouting),
      achAccount: digits(state.achAccount),
      achType: state.achType,
      zip,
    };
  const plain = new TextEncoder().encode(JSON.stringify(secret));
  const publicKey = await importPaymentKey();
  const aesKey = await crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, true, ["encrypt"]);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, aesKey, plain));
  const rawAes = new Uint8Array(await crypto.subtle.exportKey("raw", aesKey));
  const wrapped = new Uint8Array(await crypto.subtle.encrypt({ name: "RSA-OAEP" }, publicKey, rawAes));
  return {
    v: 1,
    alg: "RSA-OAEP-256+AES-256-GCM",
    key: bytesToBase64(wrapped),
    iv: bytesToBase64(iv),
    data: bytesToBase64(data),
  };
}

function wipePaymentSecrets() {
  state.cardNumber = "";
  state.cardExp = "";
  state.achRouting = "";
  state.achAccount = "";
}

async function saveOrderToSupabase(order) {
  const config = window.VB_CONFIG || {};
  if (!config.supabaseUrl || !config.supabaseAnonKey) {
    throw new Error("Orders are not connected yet.");
  }
  const key = config.supabaseAnonKey;
  const headers = {
    apikey: key,
    "Content-Type": "application/json",
    Accept: "application/json",
    Prefer: "return=minimal",
  };
  if (!String(key).startsWith("sb_")) headers.Authorization = `Bearer ${key}`;
  const url = `${config.supabaseUrl.replace(/\/$/, "")}/rest/v1/${config.ordersTable || "broadband_orders"}`;
  const send = () => fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(orderRow(order)),
  });
  let response = await send();
  if (response.status === 409) {
    order.number = String(10000 + Math.floor(Math.random() * 90000));
    response = await send();
  }
  if (!response.ok) throw new Error(`Request failed (${response.status})`);
}

function paint(options = {}) {
  const y = window.scrollY;
  const focus = document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.bind : "";
  document.getElementById("app").innerHTML = view();
  if (options.keepScroll) window.scrollTo(0, y);
  if (focus) {
    const el = document.querySelector(`[data-bind="${CSS.escape(focus)}"]`);
    if (el) {
      el.focus();
      if (el.setSelectionRange && typeof el.value === "string") {
        const end = el.value.length;
        try { el.setSelectionRange(end, end); } catch { /* date inputs */ }
      }
    }
  }
  if ((state.screen === "flow" || state.customerEditing) && state.service && document.getElementById("map")) mountMap();
  document.title = state.screen === "result" && state.order
    ? `Order #${state.order.number} · Visionary Broadband`
    : "Visionary Broadband";
}

function view() {
  return `${header()}${body()}${modals()}`;
}

function header() {
  return `
    <header class="header">
      <div class="brand">
        <button class="logo" data-action="home" aria-label="Visionary Broadband"><img src="logo.png?v=3" alt=""></button>
      </div>
      <div class="header-end">
        ${vbIsIsaac() ? `
        <nav class="desk-nav">
          <button data-action="new-order">New Order</button>
          <button data-action="orders">Orders</button>
        </nav>
        <div class="menu-wrap">
          <button class="menu-btn" data-action="menu" aria-label="Menu"><span></span><span></span><span></span></button>
          ${state.menu ? `<div class="menu-panel">
            <button data-action="new-order">New Order</button>
            <button data-action="orders">Orders</button>
          </div>` : ""}
        </div>` : ""}
        <button class="logout-btn" data-action="logout">Logout</button>
      </div>
    </header>`;
}

function body() {
  if (state.screen === "congrats") return congratsView();
  if (state.screen === "customer") return customerView();
  if (state.screen === "orders") return ordersView();
  if (state.screen === "result") return resultView(state.order);
  return flowView();
}

function flowView() {
  if (vbIsIsaac()) return isaacFlowView();
  const showCancel = state.step > 0;
  return `
    <div class="workspace">
      <div class="page-head">
        <h1>New Order</h1>
        ${showCancel ? `<button class="btn-cancel" data-action="ask-cancel">✕ Cancel Order</button>` : ""}
      </div>
      ${stepper()}
      <div class="stage">${stepContent()}</div>
    </div>`;
}

function isaacFlowView() {
  syncVoiceLines();
  if (state.service) ensureBilling();
  return `
    <div class="workspace one-page">
      <div class="page-head">
        <h1>New Order</h1>
        <button class="btn-cancel" data-action="ask-cancel">✕ Cancel Order</button>
      </div>
      <div class="stage">
        <h2 class="band">Service Address</h2>
        ${addressStep(false)}
        ${state.service ? `<div class="pad">${serviceSummary(true)}</div>` : ""}
        ${productStep(false, false)}
        ${hasVoice() ? voiceStep(false) : ""}
        ${customerStep(false, false)}
        ${billingStep(false, false)}
        ${disclosureBlock()}
        <div class="btn-row single">
          <button class="btn btn-gold btn-wide" data-action="submit-order" ${state.saving ? "disabled" : ""}>${state.saving ? "Saving…" : "Submit Order"}</button>
        </div>
      </div>
    </div>`;
}

function stepper() {
  return `<nav class="stepper">${STEPS.map((label, i) => {
    const skippedVoice = i === 2 && !hasVoice() && state.maxReached > 2;
    const done = i < state.step || skippedVoice || (i === 2 && !hasVoice() && state.step > 2);
    const active = i === state.step;
    const cls = active ? "is-active" : done ? "is-done" : "";
    const disabled = i > state.maxReached && !(skippedVoice);
    return `<button class="step ${cls}" data-action="step" data-step="${i}" ${disabled ? "disabled" : ""}>
      <span class="dot">${done && !active ? checkSvg() : ""}</span>${esc(label)}
    </button>`;
  }).join("")}</nav>`;
}

function checkSvg() {
  return `<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 6.2 L4.6 8.8 L10 3.2" fill="none" stroke="#1a1d21" stroke-width="1.8" stroke-linecap="round"/></svg>`;
}

function stepContent() {
  if (state.step === 0) return addressStep();
  if (state.step === 1) return productStep();
  if (state.step === 2) return voiceStep();
  if (state.step === 3) return customerStep();
  if (state.step === 4) return billingStep();
  return reviewStep();
}

function field(label, bind, value, extra = "") {
  return `<label class="lbl">${esc(label)}<input class="field" data-bind="${bind}" value="${esc(value)}" ${extra}></label>`;
}

function selectField(label, bind, value, options, placeholder) {
  const opts = (placeholder ? `<option value="">${esc(placeholder)}</option>` : "") + options.map((opt) => {
    const selected = opt === value ? "selected" : "";
    return `<option ${selected}>${esc(opt)}</option>`;
  }).join("");
  return `<label class="lbl">${esc(label)}<select class="field" data-bind="${bind}">${opts}</select></label>`;
}

function addressStep(showNav = true) {
  const map = state.service ? `
    <div class="map-wrap">
      <div class="map-toggle">
        <button data-action="map-mode" data-mode="map" class="${state.mapMode === "map" ? "is-on" : ""}">Map</button>
        <button data-action="map-mode" data-mode="satellite" class="${state.mapMode === "satellite" ? "is-on" : ""}">Satellite</button>
      </div>
      <div id="map"></div>
    </div>` : "";
  return `
    <div class="pad address-grid">
      <div class="stack">
        ${field("Address", "draft.line", state.draft.line, 'autocomplete="street-address"')}
        ${field("Unit #", "draft.unit", state.draft.unit)}
        ${field("Zip", "draft.zip", state.draft.zip, 'inputmode="numeric" maxlength="5" autocomplete="postal-code"')}
        ${state.lookupError ? `<p class="err">${esc(state.lookupError)}</p>` : ""}
        ${selectField("Service Type", "draft.serviceType", state.draft.serviceType, ["Residential", "Commercial", "Enterprise"])}
      </div>
      ${map}
    </div>
    ${showNav ? `<div class="btn-row single"><button class="btn btn-gold btn-wide" data-action="next">Next →</button></div>` : ""}`;
}

function serviceSummary(withOverride) {
  const s = state.service;
  if (!s) return "";
  const drop = s.existingDrop ? `<span class="pill-yes">Yes</span>` : `<span class="pill-no">No</span>`;
  const icon = state.draft.serviceType === "Residential" ? "⌂" : state.draft.serviceType === "Commercial" ? "▣" : "◆";
  return `
    <div class="stack facts" style="gap:18px">
      <div><div class="k">Service Address</div><div class="v">${esc(addressLine(s, state.draft.unit))}</div>
        <div class="coords">${s.lat.toFixed(6)}, ${s.lng.toFixed(6)}
          <button class="icon-btn" data-action="copy" data-text="${s.lat.toFixed(6)}, ${s.lng.toFixed(6)}" aria-label="Copy coordinates">⧉</button>
        </div>
      </div>
      <div><div class="k">Service Type</div><div class="v type-row"><span>${icon}</span> ${esc(state.draft.serviceType)}</div></div>
      <div><div class="k">Zone</div><div class="v">${esc(s.zone)}</div></div>
      <div><div class="k">Zone Status</div><div class="v">${esc(s.zoneStatus)}</div></div>
      <div><div class="k">Product Group</div><div class="v">${esc(s.productGroup)}${withOverride ? `<button class="linkish" data-action="override">Override</button>` : ""}</div></div>
      <div><div class="k">Existing Drop</div><div class="v">${drop}</div></div>
    </div>`;
}

function productStep(showNav = true, showSummary = true) {
  const packages = PACKAGES.map((pkg) => `
    <button class="package" data-action="package" data-id="${pkg.id}">
      <span class="radio ${state.packageId === pkg.id ? "is-on" : ""}"></span>
      <span>
        <span class="name">${esc(pkg.name)}</span>
        <span class="inc">${pkg.items.map(esc).join("<br>")}</span>
        <span class="price">${money(pkg.price)} / mo</span>
      </span>
    </button>`).join("");
  const addons = ADDONS.map((addon) => {
    const qty = Number(state.addons[addon.id]) || 0;
    const on = qty > 0;
    return `
      <div class="addon">
        <button class="check ${on ? "is-on" : ""}" data-action="addon" data-id="${addon.id}" aria-label="${esc(addon.name)}"></button>
        <span class="name">${esc(addon.name)}</span>
        <select class="qty" data-bind="addonQty.${addon.id}" aria-label="Quantity">
          ${[1, 2, 3, 4, 5].map((n) => `<option ${n === Math.max(qty, 1) ? "selected" : ""}>${n}</option>`).join("")}
        </select>
        <span class="price">${money(addon.price)} / mo</span>
      </div>`;
  }).join("");
  return `
    ${showSummary ? `<div class="pad">${serviceSummary(true)}</div>` : ""}
    <h2 class="band">Available Packages</h2>
    <div class="pad package-list" style="padding-top:0">
      ${state.productError ? `<p class="err">${esc(state.productError)}</p>` : ""}
      ${packages}
    </div>
    <h2 class="band">Additional Products</h2>
    <div class="pad" style="padding-top:0">${addons}</div>
    ${showNav ? `<div class="btn-row">
      <button class="btn btn-slate btn-lead" data-action="lead">Create Lead</button>
      <button class="btn btn-gold grow" data-action="continue">Continue →</button>
    </div>` : ""}`;
}

function voiceStep(showNav = true) {
  syncVoiceLines();
  if (!state.voiceLines.length) {
    if (!showNav) return "";
    return `
      <div class="pad"><p>No voice or fax lines are on this order.</p></div>
      ${navButtons(true)}`;
  }
  const cards = state.voiceLines.map((line, i) => `
    <div class="pad stack">
      <strong>${esc(line.label)}</strong>
      ${selectField("Type", `voice.${i}.type`, line.type, ["Voice", "Fax"])}
      <div>
        <div class="q">Number</div>
        <button class="choice" data-action="port" data-index="${i}" data-port="no"><span class="radio ${line.porting ? "" : "is-on"}"></span> New number</button>
        <button class="choice" data-action="port" data-index="${i}" data-port="yes"><span class="radio ${line.porting ? "is-on" : ""}"></span> Port existing</button>
      </div>
      ${line.porting ? field("Phone number to port", `voice.${i}.number`, line.number, 'inputmode="tel"') : ""}
      ${state.errors[`voice-${i}`] ? `<p class="err">${esc(state.errors[`voice-${i}`])}</p>` : ""}
      <div>
        <div class="q">Main line?</div>
        ${yesNo(`voice.${i}.main`, line.main ? "Yes" : "No", ["Yes", "No"])}
      </div>
      ${selectField("Directory listing", `voice.${i}.directory`, line.directory, ["Listed", "Unlisted", "Non-published"], "Select")}
      <div>
        <div class="q">Voicemail</div>
        ${yesNo(`voice.${i}.voicemail`, line.voicemail, ["Yes", "No"])}
      </div>
      ${field("Voicemail to email", `voice.${i}.vmEmail`, line.vmEmail, 'type="email"')}
    </div>`).join('<h2 class="band">Line</h2>');
  return `<h2 class="band">Voice/Fax Lines</h2>${cards}${showNav ? navButtons(true) : ""}`;
}

function yesNo(bind, value, options) {
  return `<div class="inline-choices">${options.map((opt) => `
    <button class="choice" data-action="choice" data-bind="${bind}" data-value="${esc(opt)}">
      <span class="radio ${value === opt ? "is-on" : ""}"></span>${esc(opt)}
    </button>`).join("")}</div>`;
}

function customerStep(showNav = true, showSummary = true, showFiber = true) {
  const contacts = state.contacts.map((c, i) => `
    <div class="stack fields-2">
      ${state.contacts.length > 1 ? `<button class="remove" data-action="remove-contact" data-index="${i}">Remove contact</button>` : ""}
      ${field("Name", `contacts.${i}.name`, c.name)}
      ${selectField("Role", `contacts.${i}.role`, c.role, ROLES)}
      ${field("Email", `contacts.${i}.email`, c.email, 'type="email"')}
      ${field("Phone", `contacts.${i}.phone`, c.phone, 'inputmode="tel"')}
      <div class="q">Agree to Account Updates SMS?</div>
      ${yesNo(`contacts.${i}.smsAccount`, c.smsAccount, ["Yes", "No"])}
      <div class="q">Agree to Marketing SMS?</div>
      ${yesNo(`contacts.${i}.smsMarketing`, c.smsMarketing, ["Yes", "No"])}
      ${field("PIN", `contacts.${i}.pin`, c.pin)}
      ${field("DOB", `contacts.${i}.dob`, c.dob, 'placeholder="MM/DD/YYYY"')}
      ${selectField("Preferred Contact Method", `contacts.${i}.preferred`, c.preferred, METHODS)}
    </div>`).join("");
  return `
    ${showSummary ? `<div class="pad">${serviceSummary(false)}</div>` : ""}
    <h2 class="band">Account Information</h2>
    <div class="pad">
      ${state.errors.customer ? `<p class="err">${esc(state.errors.customer)}</p>` : ""}
      ${field("Account Name", "accountName", state.accountName)}
    </div>
    <h2 class="band">Customer Contacts <button class="plus" data-action="add-contact" aria-label="Add contact">+</button></h2>
    <div class="pad stack">${contacts}</div>
    <h2 class="band">Additional Customer Questions</h2>
    <div class="pad stack fields-2">
      ${selectField("Referred By", "referredBy", state.referredBy, REFERRALS, "Select")}
      ${selectField("Rent or Own?", "rentOrOwn", state.rentOrOwn, ["Rent", "Own"], "Select")}
      <div>
        <div class="q">Authorizes on-site visit?</div>
        ${yesNo("onSite", state.onSite, ["No", "Yes"])}
      </div>
      ${showFiber ? `<div>
        <div class="q">Authorizes fiber-drop?</div>
        ${yesNo("fiberDrop", state.fiberDrop, ["No", "Yes"])}
        ${state.errors.fiberDrop ? `<p class="err">${esc(state.errors.fiberDrop)}</p>` : ""}
      </div>
      <div>
        <div class="q">Authorizes temporary fiber-drop?</div>
        ${yesNo("tempFiberDrop", state.tempFiberDrop, ["No", "Yes"])}
      </div>` : ""}
    </div>
    <h2 class="band">Installation Date/Time</h2>
    <div class="pad stack fields-2">
      <p class="hint">If you scheduled the install and know the date and time, please enter it here. Otherwise, ignore.</p>
      <label class="lbl">Installation Date<input class="field" type="date" data-bind="installDate" value="${esc(state.installDate)}"></label>
      ${selectField("Installation Time", "installTime", state.installTime, timeSlots(), "Select")}
    </div>
    <h2 class="band">Sales Notes</h2>
    <div class="pad"><textarea class="field" data-bind="salesNotes" placeholder="Any additional details regarding the customer sale?">${esc(state.salesNotes)}</textarea></div>
    <h2 class="band">Install Notes</h2>
    <div class="pad"><textarea class="field" data-bind="installNotes" placeholder="Directions for the install technician">${esc(state.installNotes)}</textarea></div>
    ${showNav ? navButtons(customerReady()) : ""}
  `;
}

function stateOptions(selected) {
  return STATES.map((name) => `<option ${name === selected ? "selected" : ""}>${esc(name)}</option>`).join("");
}

function addressFields(prefix, data) {
  return `
    ${field("Address", `${prefix}.line`, data.line)}
    ${field("Apartment or Unit", `${prefix}.unit`, data.unit)}
    ${field("City", `${prefix}.city`, data.city)}
    <label class="lbl">State<select class="field" data-bind="${prefix}.region">${stateOptions(data.region)}</select></label>
    ${field("Zip", `${prefix}.zip`, data.zip, 'inputmode="numeric" maxlength="5"')}`;
}

function paymentBlock(optional = false) {
  const pay = state.payMethod === "card" ? `
    ${field("Name on Card", "cardName", state.cardName)}
    ${field("Card Number", "cardNumber", state.cardNumber, 'inputmode="numeric" placeholder="#### #### #### ####"')}
    ${field("Expiration (MM/YYYY)", "cardExp", state.cardExp, 'inputmode="numeric" placeholder="## / ####"')}
  ` : `
    ${field("Name on Account", "achName", state.achName)}
    ${field("Routing Number", "achRouting", state.achRouting, 'inputmode="numeric" maxlength="9"')}
    ${field("Account Number", "achAccount", state.achAccount, 'inputmode="numeric"')}
    ${selectField("Account Type", "achType", state.achType, ["Checking", "Savings"])}
  `;
  return `
    <h2 class="band">Payment Method</h2>
    <div class="pad stack">
      ${optional ? `<p class="hint">Leave this blank if the customer will enter payment.</p>` : ""}
      <button class="choice" data-action="choice" data-bind="payMethod" data-value="card"><span class="radio ${state.payMethod === "card" ? "is-on" : ""}"></span> Credit Card</button>
      <button class="choice" data-action="choice" data-bind="payMethod" data-value="ach"><span class="radio ${state.payMethod === "ach" ? "is-on" : ""}"></span> Account number</button>
      ${pay}
      ${state.errors.pay ? `<p class="err">${esc(state.errors.pay)}</p>` : ""}
      <button class="choice" data-action="autopay"><span class="check ${state.autopay ? "is-on" : ""}"></span> Turn on automatic payment</button>
    </div>`;
}

function billingStep(showNav = true, showSummary = true, showPayment = true) {
  ensureBilling();
  return `
    ${showSummary ? `<div class="pad">${serviceSummary(false)}</div>` : ""}
    ${showPayment ? paymentBlock(!showNav) : ""}
    <h2 class="band">Billing Address</h2>
    <div class="pad stack fields-2">${addressFields("billing", state.billing)}</div>
    <h2 class="band">Mailing Address</h2>
    <div class="pad stack">
      <button class="choice" data-action="mailing-same"><span class="check ${state.mailingSame ? "is-on" : ""}"></span> Same as Service Address</button>
      ${state.mailingSame ? "" : addressFields("mailing", state.mailing)}
    </div>
    <h2 class="band">Discounts / Promotions</h2>
    <div class="pad">
      <button class="choice" data-action="promo"><span class="check ${state.promo ? "is-on" : ""}"></span> Fiber Promo - Project X $50 Credit (limited use)</button>
    </div>
    ${showNav ? navButtons(billingReady()) : ""}
  `;
}

function disclosureBlock() {
  return `
    <h2 class="band">Reviewed Disclosures</h2>
    <div class="pad">
      <div class="checks">
        ${DISCLOSURES.map(([id, label]) => `
          <button class="check-item" data-action="disclosure" data-id="${id}">
            <span class="check ${state.disclosures[id] ? "is-on" : ""}"></span>${esc(label)}
          </button>`).join("")}
      </div>
      ${state.errors.submit ? `<p class="err">${esc(state.errors.submit)}</p>` : ""}
    </div>`;
}

function reviewStep() {
  return `
    ${summaryHTML(previewOrder(), { review: true })}
    ${disclosureBlock()}
    ${navButtons(disclosuresReady() && !state.saving, state.saving ? "Saving…" : "Submit Order")}
  `;
}

function previewOrder() {
  const draft = buildOrder();
  draft.number = "";
  return draft;
}

function navButtons(enabled, forward = "Continue →") {
  const off = enabled ? "" : "is-off";
  return `<div class="btn-row">
    <button class="btn btn-slate" data-action="back">← Go Back</button>
    <button class="btn btn-gold ${off}" data-action="continue">${esc(forward)}</button>
  </div>`;
}

function resultView(order) {
  if (!order) return `<div class="pad">Order not found.</div>`;
  return `
    <div class="workspace result-layout">
      <div class="page-head"><h1>Order #${esc(order.number)} <span class="badge-new">New</span></h1></div>
      <div class="summary-board">${summaryHTML(order, { review: false })}</div>
      <div class="btn-row"><button class="btn btn-slate" data-action="orders">← Go Back</button></div>
    </div>`;
}

function summaryHTML(order, opts) {
  const s = order.service;
  const drop = s.existingDrop ? `<span class="pill-yes">Yes</span>` : `<span class="pill-no">No</span>`;
  const icon = s.serviceType === "Residential" ? "⌂" : "▣";
  const mailing = order.mailingSame
    ? `<span class="italic">[same as service]</span>`
    : esc(addressLine(order.mailing, order.mailing.unit));
  const pkg = order.package;
  const prices = order.pricing;
  const products = pkg ? `
    <div class="product-line">
      <div><div class="name">${esc(pkg.name)}</div><div class="inc">${pkg.items.map(esc).join("<br>")}</div></div>
      <div class="money">${money(pkg.price)} / mo</div>
    </div>` : "";
  const addonHtml = order.addons.map((addon) => `
    <div class="product-line">
      <div class="name">${esc(addon.name)} x${addon.qty}</div>
      <div class="money">${money(addon.price)} / mo</div>
    </div>`).join("");
  const discount = order.promo ? `
    <div class="subhead">Discounts</div>
    <div class="product-line">
      <div class="name">Fiber Promo - Project X $50 Credit (limited use)</div>
      <div class="money">-${money(50)} / mo<div class="fine">For the first month</div></div>
    </div>` : "";
  const fees = prices.portCount ? `
    <div class="subhead">Fees</div>
    <div class="product-line">
      <div class="name">Voice Port Fee</div>
      <div class="money">${money(prices.onetime)} one-time</div>
    </div>` : "";
  const lines = order.lines.length ? order.lines.map((line) => `
    <div class="kv">
      <div><div class="k">Type</div><div class="v">${esc(line.type)}</div></div>
      <div><div class="k">Line Number</div><div class="v">${line.porting ? `Porting:<br>${esc(line.number)}` : "New"}</div></div>
      <div><div class="k">Main Line?</div><div class="v">${line.main ? "Yes" : "No"}</div></div>
      <div><div class="k">Directory Listing</div><div class="v">${esc(line.directory || "-")}</div></div>
      <div><div class="k">Voicemail</div><div class="v">${esc(line.voicemail || "-")}</div></div>
      <div><div class="k">Voicemail to Email</div><div class="v">${esc(line.vmEmail || "-")}</div></div>
    </div>`).join("<hr style='border:0;border-top:1px solid #eee;margin:16px 0'>") : `<p class="muted">No voice or fax lines on this order.</p>`;
  const ports = order.lines.filter((line) => line.porting && line.number);
  const portTable = ports.length ? `
    <div class="port-card">
      <div class="subhead" style="margin-top:0">Porting Requests</div>
      <table class="port-table"><thead><tr><th>No.</th><th>Numbers</th><th>Status</th></tr></thead>
      <tbody>${ports.map((line) => `<tr><td class="port-id">${esc(line.portId || "#—")}</td><td>${esc(line.number)}</td><td>Waiting LOA</td></tr>`).join("")}</tbody></table>
    </div>` : "";
  const contacts = order.contacts.map((c) => `
    <div class="kv">
      <div><div class="k">Name</div><div class="v">${esc(c.name)}</div></div>
      <div><div class="k">Role</div><div class="v">${esc(c.role)}</div></div>
      <div><div class="k">Phone</div><div class="v">${esc(c.phone)}</div></div>
      <div><div class="k">Email</div><div class="v"><a class="email" href="mailto:${esc(c.email)}">${esc(c.email)}</a></div></div>
      <div><div class="k">Preferred Method</div><div class="v">${esc(c.preferred)}</div></div>
      <div><div class="k">Agrees to Account Updates SMS?</div><div class="v">${esc(c.smsAccount || "-")}</div></div>
      <div><div class="k">Agrees to Marketing SMS?</div><div class="v">${esc(c.smsMarketing || "-")}</div></div>
      <div><div class="k">PIN</div><div class="v">${esc(c.pin || "-")}</div></div>
      <div><div class="k">DOB</div><div class="v">${esc(c.dob || "-")}</div></div>
    </div>`).join("<div style='height:22px'></div>");
  const checks = opts.review ? "" : `
    <section class="panel wide">
    <h2 class="band">Reviewed Disclosures</h2>
    <div class="pad"><div class="checks">
      ${DISCLOSURES.map(([, label]) => `<div class="check-item"><span class="mark">✓</span> ${esc(label)}</div>`).join("")}
    </div></div>
    </section>`;
  return `
    <section class="panel">
    <h2 class="band">Service Address</h2>
    <div class="pad stack facts" style="gap:18px">
      <div><div class="k">Service Address</div><div class="v">${esc(addressLine(s, s.unit))}</div>
        <div class="coords">${Number(s.lat).toFixed(6)}, ${Number(s.lng).toFixed(6)}
          <button class="icon-btn" data-action="copy" data-text="${Number(s.lat).toFixed(6)}, ${Number(s.lng).toFixed(6)}" aria-label="Copy coordinates">⧉</button>
        </div>
      </div>
      <div><div class="k">Service Type</div><div class="v type-row"><span>${icon}</span> ${esc(s.serviceType)}</div></div>
      <div><div class="k">Zone</div><div class="v">${esc(s.zone)}</div></div>
      <div><div class="k">Zone Status</div><div class="v">${esc(s.zoneStatus)}</div></div>
      <div><div class="k">Product Group</div><div class="v">${esc(s.productGroup)}</div></div>
      <div><div class="k">Existing Drop</div>${drop}</div>
    </div>
    </section>
    <section class="panel">
    <h2 class="band">Customer Information</h2>
    <div class="pad stack" style="gap:18px">
      <div><div class="k">Account Name</div><div class="v">${esc(order.accountName)}</div></div>
      <div><div class="k">Mailing Address</div><div class="v">${mailing}</div></div>
      <div><div class="k">Rent or Own?</div><div class="v">${esc(order.rentOrOwn)}</div></div>
      <div><div class="k">Authorized On-site Visit?</div><div class="v">${esc(order.onSite)}</div></div>
      ${state.screen === "customer" ? "" : `<div><div class="k">Authorizes Fiber-drop?</div><div class="v">${esc(order.fiberDrop)}</div></div>
      <div><div class="k">Authorizes Temporary Fiber-drop?</div><div class="v">${esc(order.tempFiberDrop)}</div></div>`}
      <div><div class="k">Referred By</div><div class="v">${esc(order.referredBy)}</div></div>
      ${order.installDate || order.installTime ? `<div><div class="k">Installation</div><div class="v">${esc(formatInstall(order))}</div></div>` : ""}
    </div>
    </section>
    <section class="panel wide">
    <h2 class="band">Products Ordered</h2>
    <div class="pad">
      ${products}${addonHtml}${discount}${fees}
      <div class="total-box">
        <div class="total-row"><span>Total at month 1:</span><strong>${money(prices.month1)} / mo *</strong></div>
        <div class="total-row"><span>Total at month 2+:</span><strong>${money(prices.month2)} / mo *</strong></div>
        <p class="fine">* Plus taxes and fees.</p>
      </div>
      <div class="once-box"><span>One-time Charges:</span><strong>${money(prices.onetime)}</strong></div>
    </div>
    </section>
    <section class="panel">
    <h2 class="band">Voice/Fax Lines</h2>
    <div class="pad">${lines}${portTable}</div>
    </section>
    <section class="panel">
    <h2 class="band">Signature Requests</h2>
    <div class="pad"><p class="muted">No signature requests have been sent for this order.</p></div>
    </section>
    <section class="panel wide">
    <h2 class="band">Contacts</h2>
    <div class="pad">${contacts}</div>
    </section>
    <section class="panel">
    <h2 class="band">Billing Information</h2>
    <div class="pad stack" style="gap:18px">
      <div><div class="k">Payment Method</div><div class="v">${esc(order.payMethod)}</div></div>
      <div><div class="k">Auto-pay</div><div class="v">${esc(order.autopay)}</div></div>
      ${order.payment ? `<p class="fine">Card and bank numbers are stored encrypted.</p>` : ""}
      <div><div class="k">Billing Address</div><div class="v">${esc(addressLine(order.billing, order.billing.unit))}</div></div>
    </div>
    </section>
    ${checks}
    <section class="panel">
    <h2 class="band">Sales Notes</h2>
    <div class="pad"><div class="notes">${esc(order.salesNotes) || '<span class="muted">—</span>'}</div></div>
    </section>
    <section class="panel">
    <h2 class="band">Install Notes</h2>
    <div class="pad"><div class="notes">${esc(order.installNotes) || '<span class="muted">—</span>'}</div></div>
    </section>`;
}

function ordersView() {
  const orders = loadOrders();
  const cards = orders.length ? orders.map((order) => {
    const login = (state.login && state.login[order.number]) || {};
    return `
    <article class="order-card">
      <button class="order-open" data-action="open-order" data-number="${esc(order.number)}">
        <strong>Order #${esc(order.number)} · ${esc(order.accountName)}</strong>
        <span>${order.service ? esc(addressLine(order.service, order.service.unit)) : ""}</span>
      </button>
      <div class="order-access">
        <label class="lbl">Customer username<input class="field" data-bind="login.${esc(order.number)}.username" value="${esc(login.username || order.customerUsername || "")}" autocomplete="off"></label>
        <label class="lbl">Customer password<input class="field" type="password" data-bind="login.${esc(order.number)}.password" value="${esc(login.password || "")}" autocomplete="new-password"></label>
        <div class="btn-row">
          <button class="btn btn-gold" data-action="save-login" data-number="${esc(order.number)}">Save login</button>
          <button class="btn btn-slate" data-action="copy" data-text="https://visionary-broadband.com/orders">Copy customer link</button>
        </div>
        ${order.customerUsername ? `<p class="fine">Customer username: ${esc(order.customerUsername)}</p>` : ""}
        ${state.errors[`login-${order.number}`] ? `<p class="err">${esc(state.errors[`login-${order.number}`])}</p>` : ""}
      </div>
    </article>`;
  }).join("") : `<p class="empty">No orders yet. Start a new order to see it here.</p>`;
  return `<div class="workspace orders-layout"><div class="page-head"><h1>Orders</h1></div><div class="order-list">${cards}</div></div>`;
}

function formatInstall(order) {
  if (!order) return "a time we'll confirm with you";
  let dateText = order.installDate || "";
  if (order.installDate) {
    const parsed = new Date(`${order.installDate}T12:00:00`);
    if (!Number.isNaN(parsed.getTime())) {
      dateText = parsed.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
    }
  }
  if (dateText && order.installTime) return `${dateText} at ${order.installTime}`;
  if (dateText) return dateText;
  if (order.installTime) return order.installTime;
  return "a time we'll confirm with you";
}

function installOffer() {
  return `
    <section class="panel">
      <h2 class="band">Installation</h2>
      <div class="pad install-cost">
        <div><div class="k">Installation cost</div><div class="v">Free</div></div>
        <p>No charge installation.</p>
      </div>
    </section>`;
}

function customerDetails() {
  syncVoiceLines();
  if (state.service) ensureBilling();
  return `
    <h2 class="band">Service Address</h2>
    ${addressStep(false)}
    ${state.service ? `<div class="pad">${serviceSummary(true)}</div>` : ""}
    ${productStep(false, false)}
    ${hasVoice() ? voiceStep(false) : ""}
    ${customerStep(false, false, false)}
    ${billingStep(false, false, false)}
  `;
}

function customerView() {
  const order = {
    addons: [],
    lines: [],
    contacts: [],
    pricing: { month1: 0, month2: 0, onetime: 0, portCount: 0 },
    ...(state.order || {}),
  };
  return `
    <div class="workspace one-page">
      <div class="edit-bar">
        <h1>Your order</h1>
        <button class="edit-btn" data-action="toggle-edit">${state.customerEditing ? "Done" : "Edit"}</button>
      </div>
      <div class="stage">
        ${state.customerEditing ? customerDetails() : `<div class="summary-board">${summaryHTML(order, { review: true })}</div>`}
        ${installOffer()}
        ${paymentBlock()}
        ${state.errors.submit ? `<div class="pad"><p class="err">${esc(state.errors.submit)}</p></div>` : ""}
        <div class="btn-row single">
          <button class="btn btn-gold btn-wide" data-action="customer-submit" ${state.saving ? "disabled" : ""}>${state.saving ? "Saving…" : "Submit"}</button>
        </div>
      </div>
    </div>`;
}

function congratsView() {
  const when = formatInstall(state.order);
  return `
    <div class="workspace result-layout">
      <div class="page-head"><h1>Congratulations</h1></div>
      <div class="pad congrats">
        <p>Congratulations, your order is submitted.</p>
        <p>We will get you installed on ${esc(when)}.</p>
      </div>
    </div>`;
}

function applyOrder(order) {
  state.accountName = order.accountName || "";
  state.service = order.service || null;
  state.draft = {
    line: order.service?.line || "",
    unit: order.service?.unit || "",
    zip: order.service?.zip || "",
    serviceType: order.service?.serviceType || "Residential",
  };
  state.serviceKey = `${state.draft.line.trim().toLowerCase()}|${digits(state.draft.zip)}`;
  state.packageId = order.package?.id || "";
  state.addons = {};
  (order.addons || []).forEach((addon) => {
    const match = ADDONS.find((item) => item.name === addon.name);
    if (match) state.addons[match.id] = addon.qty;
  });
  state.voiceLines = (order.lines || []).map((line) => ({ ...line }));
  state.contacts = order.contacts?.length ? order.contacts.map((contact) => ({ ...contact })) : [blankContact()];
  state.mailingSame = order.mailingSame !== false;
  state.mailing = { line: "", unit: "", city: "", region: "Colorado", zip: "", ...(order.mailing || {}) };
  state.rentOrOwn = order.rentOrOwn || "";
  state.onSite = order.onSite || "No";
  state.fiberDrop = order.fiberDrop || "";
  state.tempFiberDrop = order.tempFiberDrop || "";
  state.referredBy = order.referredBy || "";
  state.billing = { line: "", unit: "", city: "", region: "Colorado", zip: "", ...(order.billing || {}) };
  state.billingReady = true;
  state.salesNotes = order.salesNotes || "";
  state.installNotes = order.installNotes || "";
  state.installDate = order.installDate || "";
  state.installTime = order.installTime || "";
  state.promo = !!order.promo;
  state.disclosures = { ...(order.disclosures || {}) };
  state.payMethod = "card";
  state.order = order;
}

function modals() {
  const bits = [];
  if (state.confirmCancel) {
    bits.push(`<div class="modal-back"><div class="sheet">
      <h3>Cancel this order?</h3>
      <p>The information you entered will be discarded.</p>
      <div class="btn-row" style="padding:0">
        <button class="btn btn-slate" data-action="keep">Keep editing</button>
        <button class="btn btn-cancel" data-action="confirm-cancel">Cancel Order</button>
      </div>
    </div></div>`);
  }
  if (state.overrideOpen && state.service) {
    bits.push(`<div class="modal-back" data-action="close-override"><div class="sheet" data-stop>
      <h3>Product group</h3>
      ${GROUPS.map((group) => `<button class="opt ${group === state.service.productGroup ? "is-on" : ""}" data-action="set-group" data-group="${esc(group)}">${esc(group)}</button>`).join("")}
    </div></div>`);
  }
  if (state.toast) bits.push(`<div class="toast">${esc(state.toast)}</div>`);
  return bits.join("");
}

function mountMap() {
  const el = document.getElementById("map");
  if (!el || !state.service || typeof L === "undefined") {
    if (el) el.classList.add("map-fallback");
    return;
  }
  if (map) { map.remove(); map = null; }
  map = L.map(el, { zoomControl: true }).setView([state.service.lat, state.service.lng], 18);
  map.zoomControl.setPosition("bottomright");
  const url = state.mapMode === "satellite"
    ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  L.tileLayer(url, { maxZoom: 19, attribution: "&copy; OpenStreetMap" }).addTo(map);
  const icon = L.divIcon({ className: "pin-icon", html: '<span class="pin"></span>', iconSize: [18, 18], iconAnchor: [9, 16] });
  L.marker([state.service.lat, state.service.lng], { icon }).addTo(map);
  setTimeout(() => map.invalidateSize(), 60);
}

window.addEventListener("resize", () => { if (map) map.invalidateSize(); });

function setBind(path, value) {
  const parts = path.split(".");
  let obj = state;
  for (let i = 0; i < parts.length - 1; i += 1) {
    if (obj[parts[i]] == null || typeof obj[parts[i]] !== "object") obj[parts[i]] = {};
    obj = obj[parts[i]];
  }
  obj[parts[parts.length - 1]] = value;
}

function assign(bind, value) {
  if (bind.startsWith("voice.")) {
    const [, index, key] = bind.split(".");
    const line = state.voiceLines[Number(index)];
    if (line) line[key] = value;
    return;
  }
  if (bind === "accountName") {
    const contact = state.contacts[0];
    if (contact && (!contact.name || contact.name === state.accountName)) {
      contact.name = value;
      const nameField = document.querySelector('[data-bind="contacts.0.name"]');
      if (nameField && document.activeElement !== nameField) nameField.value = value;
    }
  }
  setBind(bind, value);
}

function typedKey() {
  return `${state.draft.line.trim().toLowerCase()}|${digits(state.draft.zip)}`;
}

function refreshContinue() {
  const button = document.querySelector('[data-action="continue"]');
  if (!button) return;
  let ready = true;
  if (state.step === 3) ready = customerReady();
  if (state.step === 4) ready = billingReady();
  if (state.step === 5) ready = disclosuresReady();
  button.classList.toggle("is-off", !ready);
}

let lookupTimer;
function scheduleLookup() {
  clearTimeout(lookupTimer);
  lookupTimer = setTimeout(async () => {
    const status = await lookupNow();
    if (status === "stale") return;
    if (state.screen === "flow" && (vbIsIsaac() || state.step === 0)) paint({ keepScroll: true });
  }, 400);
}

async function lookupNow() {
  clearTimeout(lookupTimer);
  const line = state.draft.line.trim();
  const zip = digits(state.draft.zip);
  if (line.length < 4 || zip.length !== 5) {
    state.lookupError = "Enter a street and ZIP to continue.";
    return "fail";
  }
  const token = ++state.lookupToken;
  let result = null;
  try { result = await geocode(line, zip); } catch { result = null; }
  if (token !== state.lookupToken) return "stale";
  state.service = result;
  state.serviceKey = result ? `${line.toLowerCase()}|${zip}` : "";
  state.lookupError = result ? "" : "We couldn't find that service address.";
  return result ? "ok" : "fail";
}

function go(step) {
  if (step === 2) syncVoiceLines();
  if (step === 4) ensureBilling();
  state.step = step;
  state.maxReached = Math.max(state.maxReached, step);
  state.errors = {};
  paint();
  window.scrollTo(0, 0);
}

function showToast(message) {
  state.toast = message;
  paint({ keepScroll: true });
  setTimeout(() => {
    if (state.toast === message) {
      state.toast = "";
      paint({ keepScroll: true });
    }
  }, 2200);
}

async function advance() {
  if (state.step === 0) {
    if (!state.service || state.serviceKey !== typedKey()) {
      const status = await lookupNow();
      if (status !== "ok") {
        paint({ keepScroll: true });
        return;
      }
    }
    go(1);
    return;
  }
  if (state.step === 1) {
    if (!state.packageId) {
      state.productError = "Select a package to continue.";
      paint({ keepScroll: true });
      return;
    }
    state.productError = "";
    syncVoiceLines();
    go(nextIndex(1));
    return;
  }
  if (state.step === 2) {
    let ok = true;
    state.voiceLines.forEach((line, i) => {
      if (line.porting && digits(line.number).length < 10) {
        state.errors[`voice-${i}`] = "Enter the phone number to port.";
        ok = false;
      }
    });
    if (!ok) { paint({ keepScroll: true }); return; }
    go(3);
    return;
  }
  if (state.step === 3) {
    if (!customerReady()) return;
    if (!state.fiberDrop) {
      state.errors.fiberDrop = "Please answer the Authorize Fiber Drop question.";
      paint({ keepScroll: true });
      const err = document.querySelector(".err");
      if (err) err.scrollIntoView({ block: "center" });
      return;
    }
    go(4);
    return;
  }
  if (state.step === 4) {
    if (!billingReady()) {
      state.errors.pay = "Enter the payment and billing details to continue.";
      paint({ keepScroll: true });
      return;
    }
    go(5);
    return;
  }
  if (state.step === 5) await saveCurrentOrder();
}

async function submitOnePage() {
  state.errors = {};
  state.productError = "";
  let ok = true;
  if (!state.service || state.serviceKey !== typedKey()) {
    const status = await lookupNow();
    if (status !== "ok") ok = false;
  }
  if (!state.packageId) {
    state.productError = "Select a package to continue.";
    ok = false;
  }
  syncVoiceLines();
  state.voiceLines.forEach((line, i) => {
    if (line.porting && digits(line.number).length < 10) {
      state.errors[`voice-${i}`] = "Enter the phone number to port.";
      ok = false;
    }
  });
  if (!customerReady()) {
    state.errors.customer = "Enter the account name, referral, rent or own, and a complete contact.";
    ok = false;
  }
  if (!state.fiberDrop) {
    state.errors.fiberDrop = "Please answer the Authorize Fiber Drop question.";
    ok = false;
  }
  if (state.service) ensureBilling();
  if (!billingAddressReady()) {
    state.errors.pay = "Enter the billing address to continue.";
    ok = false;
  }
  if (paymentTouched() && !paymentComplete()) {
    state.errors.pay = "Finish the card or account details, or leave them blank to send this to the customer.";
    ok = false;
  }
  if (!disclosuresReady()) {
    state.errors.submit = "Review the disclosures before submitting.";
    ok = false;
  }
  if (!ok) {
    paint({ keepScroll: true });
    const err = document.querySelector(".err");
    if (err) err.scrollIntoView({ block: "center" });
    return;
  }
  await saveCurrentOrder({ payment: paymentTouched() });
}

async function saveCurrentOrder({ payment = true } = {}) {
  if (state.saving) return;
  if (payment && !disclosuresReady()) return;
  state.voiceLines.forEach((line) => {
    if (line.porting && !line.portId) line.portId = `#${100 + Math.floor(Math.random() * 900)}`;
  });
  const order = buildOrder();
  order.lines = state.voiceLines.map((line) => ({ ...line }));
  if (!payment) {
    order.payment = null;
    order.payMethod = "Not entered yet";
    order.autopay = "No";
  }
  state.saving = true;
  state.errors.submit = "";
  paint({ keepScroll: true });
  try {
    if (payment) order.payment = await encryptPayment();
    await saveOrderToSupabase(order);
  } catch {
    state.saving = false;
    state.errors.submit = "Couldn't save this order. Check your connection and try again.";
    paint({ keepScroll: true });
    return;
  }
  if (payment) wipePaymentSecrets();
  state.saving = false;
  saveOrderRecord(order);
  state.order = order;
  state.screen = "result";
  state.menu = false;
  paint();
  window.scrollTo(0, 0);
}

async function openOrders() {
  state.screen = "orders";
  state.menu = false;
  paint();
  window.scrollTo(0, 0);
  try {
    const remote = await vbRpc("list_staff_orders", { p_staff_token: vbSession()?.token || "" });
    if (!Array.isArray(remote) || state.screen !== "orders") return;
    const local = loadOrders();
    const seen = new Set();
    const merged = [];
    remote.forEach((order) => {
      seen.add(String(order.number));
      merged.push(order);
    });
    local.forEach((order) => {
      if (!seen.has(String(order.number))) merged.push(order);
    });
    localStorage.setItem("vb-orders", JSON.stringify(merged));
    if (state.screen === "orders") paint();
  } catch { /* the orders already on this computer still show */ }
}

function loginError(error) {
  const text = String(error && error.message || "");
  if (text.includes("at least 4")) return "Enter a username and a password of at least 4 characters.";
  if (text.includes("23505") || text.includes("customer_username")) return "That username is already used on another order.";
  if (text.includes("not found")) return "Save the order first, then set the login.";
  return "Couldn't save that login. Try again.";
}

async function saveCustomerLogin(number) {
  const login = (state.login && state.login[number]) || {};
  const username = String(login.username || "").trim();
  const password = login.password || "";
  state.errors[`login-${number}`] = "";
  try {
    await vbRpc("set_customer_login", {
      p_staff_token: vbSession()?.token || "",
      p_order_number: number,
      p_username: username,
      p_password: password,
    });
    const order = loadOrders().find((item) => item.number === number);
    if (order) {
      order.customerUsername = username.toLowerCase();
      saveOrderRecord(order);
    }
    state.toast = "Customer login saved.";
  } catch (error) {
    state.errors[`login-${number}`] = loginError(error);
  }
  if (state.screen === "orders") paint({ keepScroll: true });
}

async function submitCustomerOrder() {
  const session = vbCustomerSession();
  if (!session) {
    location.replace("/orders/");
    return;
  }
  state.errors = {};
  if (state.service) ensureBilling();
  if (!billingReady()) {
    state.errors.pay = "Enter the payment and billing details to continue.";
    paint({ keepScroll: true });
    const err = document.querySelector(".err");
    if (err) err.scrollIntoView({ block: "center" });
    return;
  }
  state.saving = true;
  state.errors.submit = "";
  paint({ keepScroll: true });
  try {
    const payment = await encryptPayment();
    const order = buildOrder();
    order.number = state.order.number;
    delete order.payment;
    await vbRpc("submit_customer_payment", {
      p_username: session.username,
      p_token: session.token,
      p_payload: order,
      p_payment: payment,
    });
    wipePaymentSecrets();
    state.saving = false;
    state.order = { ...order, submitted: true };
    state.screen = "congrats";
    session.order = state.order;
    sessionStorage.setItem("vb-customer", JSON.stringify(session));
    paint();
    window.scrollTo(0, 0);
  } catch {
    state.saving = false;
    state.errors.submit = "Couldn't save this order. Check your connection and try again.";
    paint({ keepScroll: true });
  }
}

document.addEventListener("click", (event) => {
  const el = event.target.closest("[data-action]");
  if (!el) {
    if (state.menu) { state.menu = false; paint({ keepScroll: true }); }
    return;
  }
  const action = el.dataset.action;
  if (action === "logout") {
    vbLogout();
    return;
  }
  if (action === "menu") {
    state.menu = !state.menu;
    paint({ keepScroll: true });
    return;
  }
  if (action === "home" || action === "new-order") {
    if (!vbIsIsaac()) return;
    state = fresh();
    paint();
    window.scrollTo(0, 0);
    return;
  }
  if (action === "orders") {
    if (!vbIsIsaac()) return;
    openOrders();
    return;
  }
  if (action === "open-order") {
    if (!vbIsIsaac()) return;
    state.order = loadOrders().find((order) => order.number === el.dataset.number) || null;
    state.screen = "result";
    paint();
    window.scrollTo(0, 0);
    return;
  }
  if (action === "step") {
    const step = Number(el.dataset.step);
    if (step <= state.maxReached) go(step);
    return;
  }
  if (action === "next" || action === "continue") { advance(); return; }
  if (action === "submit-order") { submitOnePage(); return; }
  if (action === "customer-submit") { submitCustomerOrder(); return; }
  if (action === "save-login") { saveCustomerLogin(el.dataset.number); return; }
  if (action === "toggle-edit") {
    if (state.customerEditing && state.order) {
      const number = state.order.number;
      const payMethod = state.order.payMethod;
      const autopay = state.order.autopay;
      const next = buildOrder();
      next.number = number;
      next.payMethod = payMethod || "Not entered yet";
      next.autopay = autopay || "No";
      delete next.payment;
      state.order = next;
    }
    state.customerEditing = !state.customerEditing;
    paint({ keepScroll: true });
    return;
  }
  if (action === "back") { go(prevIndex(state.step)); return; }
  if (action === "ask-cancel") { state.confirmCancel = true; paint({ keepScroll: true }); return; }
  if (action === "keep") { state.confirmCancel = false; paint({ keepScroll: true }); return; }
  if (action === "confirm-cancel") { state = fresh(); paint(); window.scrollTo(0, 0); return; }
  if (action === "package") {
    state.packageId = el.dataset.id;
    state.productError = "";
    paint({ keepScroll: true });
    return;
  }
  if (action === "addon") {
    const id = el.dataset.id;
    if (state.addons[id]) delete state.addons[id];
    else {
      const qty = Number(document.querySelector(`[data-bind="addonQty.${id}"]`)?.value || 1);
      state.addons[id] = qty;
    }
    paint({ keepScroll: true });
    return;
  }
  if (action === "lead") {
    const where = state.service ? addressLine(state.service, state.draft.unit) : "this address";
    showToast(`Lead created for ${where}`);
    return;
  }
  if (action === "copy") {
    navigator.clipboard.writeText(el.dataset.text).then(() => {
      el.classList.add("copied");
      setTimeout(() => el.classList.remove("copied"), 1000);
    }).catch(() => {});
    return;
  }
  if (action === "map-mode") {
    state.mapMode = el.dataset.mode;
    paint({ keepScroll: true });
    return;
  }
  if (action === "override") { state.overrideOpen = true; paint({ keepScroll: true }); return; }
  if (action === "close-override") {
    if (event.target.closest("[data-stop]")) return;
    state.overrideOpen = false;
    paint({ keepScroll: true });
    return;
  }
  if (action === "set-group") {
    state.service.productGroup = el.dataset.group;
    state.overrideOpen = false;
    paint({ keepScroll: true });
    return;
  }
  if (action === "add-contact") {
    state.contacts.push(blankContact("Local Contact"));
    paint({ keepScroll: true });
    return;
  }
  if (action === "remove-contact") {
    state.contacts.splice(Number(el.dataset.index), 1);
    paint({ keepScroll: true });
    return;
  }
  if (action === "choice") {
    const value = el.dataset.value;
    if (el.dataset.bind.startsWith("voice.")) {
      const [, index, key] = el.dataset.bind.split(".");
      if (key === "main") state.voiceLines[index].main = value === "Yes";
      else state.voiceLines[index][key] = value;
    } else if (el.dataset.bind.startsWith("contacts.")) {
      setBind(el.dataset.bind, value);
    } else {
      state[el.dataset.bind] = value;
      if (el.dataset.bind === "fiberDrop") state.errors.fiberDrop = "";
      if (el.dataset.bind === "payMethod") state.errors.pay = "";
    }
    paint({ keepScroll: true });
    return;
  }
  if (action === "port") {
    const line = state.voiceLines[Number(el.dataset.index)];
    line.porting = el.dataset.port === "yes";
    if (line.porting && !line.portId) line.portId = `#${100 + Math.floor(Math.random() * 900)}`;
    paint({ keepScroll: true });
    return;
  }
  if (action === "autopay") { state.autopay = !state.autopay; paint({ keepScroll: true }); return; }
  if (action === "mailing-same") { state.mailingSame = !state.mailingSame; paint({ keepScroll: true }); return; }
  if (action === "promo") { state.promo = !state.promo; paint({ keepScroll: true }); return; }
  if (action === "disclosure") {
    const id = el.dataset.id;
    state.disclosures[id] = !state.disclosures[id];
    paint({ keepScroll: true });
  }
});

document.addEventListener("input", (event) => {
  const el = event.target.closest("[data-bind]");
  if (!el || el.tagName === "SELECT") return;
  const bind = el.dataset.bind;
  if (bind === "cardNumber") {
    const d = digits(el.value).slice(0, 16);
    el.value = d.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
    state.cardNumber = el.value;
    return;
  }
  if (bind === "cardExp") {
    const d = digits(el.value).slice(0, 6);
    el.value = d.length > 2 ? `${d.slice(0, 2)} / ${d.slice(2)}` : d;
    state.cardExp = el.value;
    return;
  }
  if (bind === "draft.zip" || bind.endsWith(".zip")) {
    el.value = digits(el.value).slice(0, 5);
  }
  assign(bind, el.value);
  if (bind === "draft.line" || bind === "draft.zip") scheduleLookup();
  refreshContinue();
});

document.addEventListener("change", (event) => {
  const el = event.target.closest("[data-bind]");
  if (!el) return;
  const bind = el.dataset.bind;
  if (bind.startsWith("addonQty.")) {
    const id = bind.split(".")[1];
    if (state.addons[id]) state.addons[id] = Number(el.value);
    return;
  }
  assign(bind, el.value);
  refreshContinue();
});

document.addEventListener("DOMContentLoaded", () => {
  const customerPage = location.pathname.includes("/orders/customer");
  if (customerPage) {
    const session = typeof vbCustomerSession === "function" ? vbCustomerSession() : null;
    if (!session || !session.order) {
      location.replace("/orders/");
      return;
    }
    applyOrder(session.order);
    state.screen = session.order.submitted ? "congrats" : "customer";
    paint();
    return;
  }
  if (typeof vbSessionValid !== "function" || !vbSessionValid()) {
    location.replace("/orders/");
    return;
  }
  paint();
});

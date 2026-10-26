
const firebaseConfig = {
  apiKey: "AIzaSyBCnZxWWRlmcolCMdfDmB93cU7ZfxIYztc",
  authDomain: "planner-bc1ab.firebaseapp.com",
  projectId: "planner-bc1ab",
  storageBucket: "planner-bc1ab.firebasestorage.app",
  messagingSenderId: "449940580879",
  appId: "1:449940580879:web:b06e2ac43ded64b986517a"
};
const FB_ON = typeof firebase !== "undefined" && firebaseConfig.apiKey !== "YOUR_API_KEY";

const $ = (s) => document.querySelector(s);
const h = (t, c, x) => { const e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; };
const ico = (n) => { const NS = "http://www.w3.org/2000/svg", s = document.createElementNS(NS, "svg"), u = document.createElementNS(NS, "use"); s.setAttribute("class", "i"); u.setAttribute("href", "#i-" + n); s.append(u); return s; };
const ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

const I = {
  en: { notes: "Notes", todo: "To-do", plans: "Day plans", calendar: "Calendar", search: "Search notes", take: "Take a note…",
    pinned: "Pinned", others: "Others", title: "Title", note: "Note", item: "List item", done: "Done", prev: "Previous", next: "Next",
    del: "Delete", pin: "Pin", list: "Checklist", today: "Today", empty: "Notes you add appear here.", addev: "Add event",
    no_ev: "No events on this day.", yearly: "Repeats every year", ev_title: "Event title", details: "Details: place, who, what to bring",
    task_ph: "Add a task…", plan_ph: "What do you want to get done?", add: "Add", clear: "Clear completed", of: "done",
    events: "Events", plan: "Plan", no_plan: "Nothing planned yet. Write what you want to get done, then cross it off.",
    todo_empty: "No tasks yet. Write one above.", upcoming: "Coming up", nothing_up: "Nothing coming up.", open_plan: "Open day plan",
    yr_short: "Yearly", you: "You", a_sub: "Sign in to keep your planner in sync on every device", a_email: "Email", a_pass: "Password (min. 6 characters)", a_in: "Sign in", a_up: "Create account", a_google: "Continue with Google", a_guest: "Continue without an account", a_bad: "Wrong email or password.", a_used: "This email already has an account.", a_weak: "Password must be at least 6 characters.", a_mail: "That email address looks invalid.", a_off: "Sign-in is not enabled in Firebase yet (Authentication → Sign-in method).", a_dom: "This address is not allowed. Add it under Authentication → Settings → Authorized domains.", signout: "Sign out", signin: "Sign in", synced_fb: "Synced to your account", local_fb: "Guest mode: saved on this device only.", synced: "Synced to your Claude account", local: "Saved on this device only. Open the page signed in to claude.ai to sync.", appearance: "Appearance", mode_sys: "Auto", mode_light: "Light", mode_dark: "Dark", accent: "Accent colour", tasks: "tasks", s1: "Groceries", si: "Milk|Bread|Coffee", s3: "Welcome",
    s3t: "Notes live here, separate from everything else.\nUse To-do for tasks, Day plans for a specific date and Calendar for events and meetings.",
    s2: "Team meeting", t1: "Book a dentist appointment", t2: "Reply to emails", p1: "Finish the report", p2: "Go for a run" },
  no: { notes: "Notater", todo: "Gjøremål", plans: "Dagsplan", calendar: "Kalender", search: "Søk i notater", take: "Skriv et notat…",
    pinned: "Festet", others: "Andre", title: "Tittel", note: "Notat", item: "Listepunkt", done: "Ferdig", prev: "Forrige", next: "Neste",
    del: "Slett", pin: "Fest", list: "Sjekkliste", today: "I dag", empty: "Notatene dine vises her.", addev: "Ny hendelse",
    no_ev: "Ingen hendelser denne dagen.", yearly: "Gjentas hvert år", ev_title: "Navn på hendelse", details: "Detaljer: sted, hvem, hva du tar med",
    task_ph: "Legg til en oppgave…", plan_ph: "Hva vil du få gjort?", add: "Legg til", clear: "Fjern fullførte", of: "fullført",
    events: "Hendelser", plan: "Plan", no_plan: "Ingenting planlagt ennå. Skriv hva du vil få gjort, og kryss det av.",
    todo_empty: "Ingen oppgaver ennå. Skriv en ovenfor.", upcoming: "Kommer opp", nothing_up: "Ingenting kommer opp.", open_plan: "Åpne dagsplan",
    yr_short: "Årlig", you: "Deg", a_sub: "Logg inn for å holde planleggeren synkronisert på alle enheter", a_email: "E-post", a_pass: "Passord (minst 6 tegn)", a_in: "Logg inn", a_up: "Opprett konto", a_google: "Fortsett med Google", a_guest: "Fortsett uten konto", a_bad: "Feil e-post eller passord.", a_used: "Denne e-posten har allerede en konto.", a_weak: "Passordet må ha minst 6 tegn.", a_mail: "E-postadressen ser ugyldig ut.", a_off: "Innlogging er ikke slått på i Firebase ennå (Authentication → Sign-in method).", a_dom: "Denne adressen er ikke tillatt. Legg den til under Authentication → Settings → Authorized domains.", signout: "Logg ut", signin: "Logg inn", synced_fb: "Synkronisert med kontoen din", local_fb: "Gjestemodus: lagres kun på denne enheten.", synced: "Synkronisert med Claude-kontoen din", local: "Lagres kun på denne enheten. Åpne siden innlogget på claude.ai for å synkronisere.", appearance: "Utseende", mode_sys: "Auto", mode_light: "Lys", mode_dark: "Mørk", accent: "Aksentfarge", tasks: "oppgaver", s1: "Handleliste", si: "Melk|Brød|Kaffe", s3: "Velkommen",
    s3t: "Notater bor her, adskilt fra alt annet.\nBruk Gjøremål for oppgaver, Dagsplan for en bestemt dato og Kalender for hendelser og møter.",
    s2: "Teammøte", t1: "Bestill time hos tannlegen", t2: "Svar på e-poster", p1: "Ferdigstill rapporten", p2: "Gå en løpetur" },
};
const LOC = { en: "en-GB", no: "nb-NO" };
const COL = ["", "#F5D5D0", "#F6E1C0", "#F2EBB0", "#D5EACB", "#C6E7DF", "#CCE2F2", "#D8D4F1", "#EAD2E8", "#E6DACB"];
const KEY = "planner-v3";

let lang = (() => { try { const s = localStorage.getItem("planner-lang"); if (I[s]) return s; } catch {} return /^(nb|nn|no)/i.test(navigator.language) ? "no" : "en"; })();
const tr = (k) => I[lang][k] ?? k;
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const byTime = (a, b) => (a.time || "").localeCompare(b.time || "");
const dlong = (s, o) => cap(new Date(s + "T00:00").toLocaleDateString(LOC[lang], o));

let view = "notes", q = "", cur = new Date(), sel = ymd(new Date()), pday = sel;
let ed = null, isNew = false, focusIdx = -1, ev = null, evNew = false, evOld = "", focusIn = false;
cur.setDate(1);

const newNote = (kind) => ({ id: uid(), title: "", text: "", list: kind === "list", items: kind === "list" ? [{ t: "", d: false }] : [], color: "", pinned: false });
const newEvent = (date) => ({ id: uid(), title: "", details: "", date, time: "", color: "#CCE2F2", yearly: false });
function seed() {
  const t = ymd(new Date());
  return {
    notes: [{ ...newNote("list"), title: tr("s1"), items: tr("si").split("|").map((x) => ({ t: x, d: false })), color: "#F2EBB0" },
            { ...newNote("note"), title: tr("s3"), text: tr("s3t"), pinned: true }],
    events: [{ ...newEvent(t), title: tr("s2"), time: "10:00" }],
    plans: { [t]: [{ id: uid(), t: tr("p1"), d: false }, { id: uid(), t: tr("p2"), d: false }] },
    todos: [{ id: uid(), t: tr("t1"), d: false }, { id: uid(), t: tr("t2"), d: false }],
  };
}
function load() {
  try { const v = JSON.parse(localStorage.getItem(KEY)); if (v) return v; } catch {}
  try { // migrate the first version (notes with dates become events)
    const o = JSON.parse(localStorage.getItem("planner-v2"));
    if (o) {
      const d = { notes: [], events: [], plans: {}, todos: [] };
      o.forEach((n) => n.date
        ? d.events.push({ id: n.id, title: n.title || n.text || "", details: n.title ? n.text : "", date: n.date, time: n.time || "", color: n.color, yearly: false })
        : d.notes.push({ id: n.id, title: n.title, text: n.text, list: n.list, items: n.items, color: n.color, pinned: n.pinned }));
      return d;
    }
  } catch {}
  return seed();
}
const PREF_KEY = "planner-prefs";
let prefs = { mode: "system", accent: "fjord" };
try { Object.assign(prefs, JSON.parse(localStorage.getItem(PREF_KEY))); } catch {}
function applyPrefs() {
  const r = document.documentElement;
  if (prefs.mode === "system") r.removeAttribute("data-theme"); else r.setAttribute("data-theme", prefs.mode);
  r.setAttribute("data-accent", prefs.accent);
}
applyPrefs();
let cloud = null, me = null, sync = "local", pushT = 0, auth = null;
function push() {
  if (!cloud) return; clearTimeout(pushT);
  pushT = setTimeout(() => cloud.set({ data: JSON.stringify(D), prefs }).catch(() => { sync = "local"; }), 700);
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(D)); } catch {} push(); }
function savePrefs() { try { localStorage.setItem(PREF_KEY, JSON.stringify(prefs)); } catch {} applyPrefs(); push(); renderPop(); }
let D = load();
const eventsOn = (k) => D.events.filter((e) => e.date === k || (e.yearly && e.date.slice(5) === k.slice(5)));

function mk(txt, fn, c, label) {
  const b = h("button", c || "icon"); b.append(typeof txt === "string" ? document.createTextNode(txt) : txt);
  if (label) b.setAttribute("aria-label", label); b.onclick = fn; return b;
}
function addForm(ph, fn) {
  const f = h("form", "tform"), i = h("input"); i.placeholder = ph; i.maxLength = 200;
  const b = h("button", "addbtn"); b.type = "submit"; b.append(ico("plus"), document.createTextNode(tr("add")));
  f.append(i, b);
  f.onsubmit = (e) => { e.preventDefault(); const t = i.value.trim(); if (!t) return; fn(t); save(); focusIn = true; render(); };
  if (focusIn) { focusIn = false; setTimeout(() => i.focus()); }
  return f;
}
function taskRow(it, arr) {
  const r = h("div", "task" + (it.d ? " dn" : "")); const cb = h("input"); cb.type = "checkbox"; cb.checked = it.d;
  cb.onchange = () => { it.d = cb.checked; save(); render(); };
  const x = h("button", "icon sm del"); x.append(ico("x")); x.setAttribute("aria-label", tr("del"));
  x.onclick = () => { arr.splice(arr.indexOf(it), 1); save(); render(); };
  r.append(cb, h("span", "tt", it.t), x); return r;
}
function evRow(e) {
  const r = h("div", "row"); r.style.setProperty("--c", e.color || "var(--accent)");
  r.append(h("span", "tm", e.time || ""), h("span", "rt", e.title));
  if (e.yearly) r.append(h("span", "muted", tr("yr_short")));
  r.onclick = () => openEv(e); return r;
}
const addEvBtn = (date) => { const b = h("button", "addbtn"); b.append(ico("plus"), document.createTextNode(tr("addev"))); b.onclick = () => openEv(newEvent(date), true); return b; };

function card(n) {
  const c = h("article", "note"); c.style.setProperty("--c", n.color || "var(--surface)"); c.tabIndex = 0;
  if (n.title) c.append(h("h3", "nt", n.title));
  if (n.list) {
    const ul = h("div", "ci");
    n.items.slice(0, 10).forEach((it) => {
      const l = h("label", "cl" + (it.d ? " dn" : "")); const cb = h("input"); cb.type = "checkbox"; cb.checked = it.d;
      cb.onchange = () => { it.d = cb.checked; save(); render(); }; l.onclick = (e) => e.stopPropagation();
      l.append(cb, h("span", "", it.t)); ul.append(l);
    });
    c.append(ul);
  } else if (n.text) c.append(h("p", "nb", n.text));
  const a = h("div", "acts");
  const p = h("button", "icon sm" + (n.pinned ? " on" : "")); p.append(ico("pin")); p.title = tr("pin");
  p.onclick = (e) => { e.stopPropagation(); n.pinned = !n.pinned; save(); render(); };
  const d = h("button", "icon sm"); d.append(ico("trash")); d.title = tr("del");
  d.onclick = (e) => { e.stopPropagation(); D.notes = D.notes.filter((x) => x !== n); save(); render(); };
  a.append(p, d); c.append(a);
  c.onclick = () => openEd(n);
  c.onkeydown = (e) => { if (e.key === "Enter" && e.target === c) openEd(n); };
  return c;
}
function rNotes(m) {
  const bar = h("div", "take"); bar.append(h("span", "", tr("take")));
  const ic = h("span", "tk"); ic.append(ico("check")); bar.append(ic);
  bar.onclick = (e) => openEd(newNote(e.target.closest(".tk") ? "list" : "note"), true);
  m.append(bar);
  const s = q.toLowerCase();
  const list = D.notes.filter((n) => !s || [n.title, n.text, ...n.items.map((i) => i.t)].join(" ").toLowerCase().includes(s));
  if (!list.length) { m.append(h("p", "empty muted", tr("empty"))); return; }
  const sect = (label, arr) => {
    if (!arr.length) return; if (label) m.append(h("h2", "sec", label));
    const g = h("div", "grid"); arr.forEach((n) => g.append(card(n))); m.append(g);
  };
  const pin = list.filter((n) => n.pinned);
  sect(pin.length ? tr("pinned") : "", pin);
  sect(pin.length ? tr("others") : "", list.filter((n) => !n.pinned));
}

function rTodo(m) {
  m.append(h("h1", "pg", tr("todo")));
  const n = D.todos.length, dn = D.todos.filter((t) => t.d).length;
  m.append(addForm(tr("task_ph"), (t) => D.todos.push({ id: uid(), t, d: false })));
  if (n) {
    const pr = h("div", "prog"), b = h("i"); b.style.width = (dn / n * 100) + "%"; pr.append(b);
    m.append(pr, h("p", "muted", `${dn}/${n} ${tr("of")}`));
  }
  const w = h("div", "rows"); D.todos.forEach((t) => w.append(taskRow(t, D.todos))); m.append(w);
  if (!n) m.append(h("p", "muted", tr("todo_empty")));
  if (dn) { const b = mk(tr("clear"), () => { D.todos = D.todos.filter((t) => !t.d); save(); render(); }, "pill"); b.style.marginLeft = "0"; m.append(b); }
}

function rPlans(m) {
  const d = new Date(pday + "T00:00"), t = ymd(new Date());
  const wrap = h("div", "calwrap"), main = h("div"), side = h("aside", "agenda");
  const hero = h("div", "hero"), hm = h("div", "hmeta");
  hm.append(h("span", "hwd", dlong(pday, { weekday: "long" })), h("span", "hmo", dlong(pday, { month: "long", year: "numeric" })));
  hero.append(h("span", "hnum", String(d.getDate())), hm);
  const go = (n) => { const x = new Date(d); x.setDate(x.getDate() + n); pday = ymd(x); render(); };
  const di = h("input"); di.type = "date"; di.value = pday; di.onchange = () => { if (di.value) { pday = di.value; render(); } };
  const nav = h("div", "dnav");
  nav.append(mk(ico("left"), () => go(-1), "icon", tr("prev")), mk(ico("right"), () => go(1), "icon", tr("next")),
    mk(tr("today"), () => { pday = t; render(); }, "pill"), di, addEvBtn(pday));
  main.append(hero, nav);

  const evs = eventsOn(pday).sort(byTime);
  if (evs.length) { main.append(h("h2", "sec", tr("events"))); const wE = h("div", "rows"); evs.forEach((e) => wE.append(evRow(e))); main.append(wE); }
  main.append(h("h2", "sec", tr("plan")));
  const arr = D.plans[pday] || [];
  main.append(addForm(tr("plan_ph"), (x) => { (D.plans[pday] = D.plans[pday] || []).push({ id: uid(), t: x, d: false }); }));
  const wP = h("div", "rows"); arr.forEach((it) => wP.append(taskRow(it, arr))); main.append(wP);
  if (!arr.length) main.append(h("p", "muted", tr("no_plan")));

  side.append(h("h2", "sec", tr("upcoming")));
  const up = [];
  for (let i = 0; i < 60 && up.length < 8; i++) {
    const x = new Date(); x.setDate(x.getDate() + i); const k = ymd(x);
    const e = eventsOn(k).sort(byTime), p = (D.plans[k] || []).filter((z) => !z.d);
    if (e.length || p.length) up.push({ k, e, p });
  }
  if (!up.length) side.append(h("p", "muted", tr("nothing_up")));
  up.forEach(({ k, e, p }) => {
    const b = h("button", "up" + (k === pday ? " on" : "")), c = h("div", "upc");
    b.append(h("b", "", dlong(k, { weekday: "short", day: "numeric" })));
    e.forEach((z) => c.append(h("span", "", (z.time ? z.time + " " : "") + z.title)));
    if (p.length) c.append(h("span", "muted", p.length + " " + tr("tasks")));
    b.append(c); b.onclick = () => { pday = k; render(); }; side.append(b);
  });
  wrap.append(main, side); m.append(wrap);
}

function rCal(m) {
  const y = cur.getFullYear(), mo = cur.getMonth(), t = ymd(new Date());
  const wrap = h("div", "calwrap"), left = h("div"), side = h("aside", "agenda");
  const hd = h("div", "calhead");
  hd.append(h("h1", "pg", cap(cur.toLocaleDateString(LOC[lang], { month: "long", year: "numeric" }))),
    mk(ico("left"), () => { cur.setMonth(mo - 1); render(); }, "icon", tr("prev")),
    mk(ico("right"), () => { cur.setMonth(mo + 1); render(); }, "icon", tr("next")),
    mk(tr("today"), () => { cur = new Date(); cur.setDate(1); sel = t; render(); }, "pill"));
  left.append(hd);

  const g = h("div", "cal");
  for (let i = 0; i < 7; i++) g.append(h("div", "dow", cap(new Date(2024, 0, 1 + i).toLocaleDateString(LOC[lang], { weekday: "short" }))));
  for (let i = 0; i < (new Date(y, mo, 1).getDay() + 6) % 7; i++) g.append(h("div", "cell off"));
  for (let d = 1; d <= new Date(y, mo + 1, 0).getDate(); d++) {
    const key = ymd(new Date(y, mo, d));
    const c = h("div", "cell" + (key === t ? " today" : "") + (key === sel ? " sel" : ""));
    c.append(h("span", "dn2", String(d)));
    if ((D.plans[key] || []).some((z) => !z.d)) c.append(h("span", "pdot"));
    const list = eventsOn(key).sort(byTime);
    list.slice(0, 3).forEach((e) => {
      const b = h("button", "chip", (e.time ? e.time + " " : "") + e.title);
      b.style.background = e.color || "#CCE2F2"; b.onclick = (x) => { x.stopPropagation(); openEv(e); }; c.append(b);
    });
    if (list.length > 3) c.append(h("span", "muted more", "+" + (list.length - 3)));
    c.onclick = () => { sel = key; render(); };
    g.append(c);
  }
  left.append(g);

  side.append(h("h2", "sec", dlong(sel, { weekday: "long", day: "numeric", month: "long" })));
  const bt = h("div", "btns"); bt.append(addEvBtn(sel), mk(tr("open_plan"), () => { pday = sel; view = "plans"; render(); }, "pill")); side.append(bt);
  const day = eventsOn(sel).sort(byTime);
  const w = h("div", "rows"); day.forEach((e) => w.append(evRow(e))); side.append(w);
  if (!day.length) side.append(h("p", "muted", tr("no_ev")));
  wrap.append(left, side); m.append(wrap);
}

function colors(box, o, dg) {
  box.innerHTML = "";
  COL.forEach((col) => {
    const b = h("button", "dot" + (col === o.color ? " on" : "")); b.type = "button";
    b.style.background = col || "var(--surface)"; b.setAttribute("aria-label", col || "default");
    b.onclick = () => { o.color = col; dg.style.setProperty("--c", col || "var(--surface)"); colors(box, o, dg); };
    box.append(b);
  });
}

const dlg = $("#dlg");
function openEd(n, fresh) {
  ed = n; isNew = !!fresh;
  dlg.style.setProperty("--c", n.color || "var(--surface)");
  $("#e-title").value = n.title; $("#e-pin").classList.toggle("on", n.pinned);
  edBody(); colors($("#e-colors"), ed, dlg); dlg.showModal();
}
function edBody() {
  const b = $("#e-body"); b.innerHTML = "";
  $("#e-list").classList.toggle("on", ed.list);
  if (!ed.list) {
    const ta = h("textarea"); ta.placeholder = tr("note"); ta.value = ed.text; ta.oninput = () => (ed.text = ta.value); b.append(ta); return;
  }
  ed.items.forEach((it, i) => {
    const r = h("div", "irow"); const cb = h("input"); cb.type = "checkbox"; cb.checked = it.d;
    const t = h("input", "itxt" + (it.d ? " dn" : "")); t.value = it.t; t.placeholder = tr("item");
    cb.onchange = () => { it.d = cb.checked; t.classList.toggle("dn", it.d); };
    t.oninput = () => (it.t = t.value);
    t.onkeydown = (e) => {
      if (e.key === "Enter") { e.preventDefault(); ed.items.splice(i + 1, 0, { t: "", d: false }); focusIdx = i + 1; edBody(); }
      else if (e.key === "Backspace" && !t.value && ed.items.length > 1) { e.preventDefault(); ed.items.splice(i, 1); focusIdx = Math.max(0, i - 1); edBody(); }
    };
    const x = h("button", "icon sm"); x.append(ico("x")); x.type = "button";
    x.onclick = () => { ed.items.splice(i, 1); if (!ed.items.length) ed.items.push({ t: "", d: false }); edBody(); };
    r.append(cb, t, x); b.append(r);
  });
  const add = h("button", "addi", "+ " + tr("item")); add.type = "button";
  add.onclick = () => { ed.items.push({ t: "", d: false }); focusIdx = ed.items.length - 1; edBody(); };
  b.append(add);
  if (focusIdx >= 0) { const els = b.querySelectorAll(".itxt"); if (els[focusIdx]) els[focusIdx].focus(); focusIdx = -1; }
}
$("#e-list").onclick = () => {
  if (ed.list) { ed.text = ed.items.map((i) => i.t).filter(Boolean).join("\n"); ed.items = []; ed.list = false; }
  else { ed.items = ed.text.split("\n").filter((s) => s.trim()).map((t) => ({ t, d: false })); if (!ed.items.length) ed.items = [{ t: "", d: false }]; ed.text = ""; ed.list = true; focusIdx = 0; }
  edBody();
};
$("#e-pin").onclick = (e) => { ed.pinned = !ed.pinned; e.currentTarget.classList.toggle("on", ed.pinned); };
$("#e-del").onclick = () => { if (!isNew) D.notes = D.notes.filter((n) => n !== ed); ed = null; dlg.close(); };
$("#e-done").onclick = () => dlg.close();
dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener("close", () => {
  if (ed) {
    ed.title = $("#e-title").value.trim();
    if (ed.list) ed.items = ed.items.filter((i) => i.t.trim());
    const empty = !ed.title && !ed.text.trim() && !ed.items.length;
    if (isNew) { if (!empty) D.notes.unshift(ed); } else if (empty) D.notes = D.notes.filter((n) => n !== ed);
  }
  ed = null; save(); render();
});

const dE = $("#dlgE");
function openEv(e, fresh) {
  ev = e; evNew = !!fresh; evOld = e.title;
  dE.style.setProperty("--c", e.color || "var(--surface)");
  $("#v-title").value = e.title; $("#v-det").value = e.details || ""; $("#v-date").value = e.date;
  $("#v-time").value = e.time || ""; $("#v-yr").checked = !!e.yearly;
  colors($("#v-colors"), ev, dE); dE.showModal();
}
$("#v-del").onclick = () => { if (!evNew) D.events = D.events.filter((x) => x !== ev); ev = null; dE.close(); };
$("#v-done").onclick = () => dE.close();
dE.addEventListener("click", (e) => { if (e.target === dE) dE.close(); });
dE.addEventListener("close", () => {
  if (ev) {
    ev.title = $("#v-title").value.trim(); ev.details = $("#v-det").value.trim();
    ev.date = $("#v-date").value || sel; ev.time = $("#v-time").value; ev.yearly = $("#v-yr").checked;
    if (!ev.title) { if (evNew) ev = null; else ev.title = evOld; }
    if (ev && evNew) D.events.push(ev);
  }
  ev = null; save(); render();
});

const ACC = [["fjord", "Fjord", "#2F55D4"], ["aurora", "Aurora", "#0B7A66"], ["ember", "Ember", "#D6452B"], ["orchid", "Orchid", "#9333A8"], ["graphite", "Graphite", "#1F2430"]];
function avatarInto(el) {
  el.innerHTML = "";
  if (me && me.id && me.avatarUrl) { const i = h("img"); i.src = me.avatarUrl; i.alt = ""; el.append(i); } else el.append(ico("user"));
}
function renderPop() {
  const p = $("#pop"); p.innerHTML = "";
  const who = h("div", "pwho"), av = h("span", "avatar"), tx = h("div"); avatarInto(av);
  tx.append(h("b", "", (me && me.name) || tr("you")), h("span", "muted", tr(sync === "cloud" ? (FB_ON ? "synced_fb" : "synced") : (FB_ON ? "local_fb" : "local"))));
  who.append(av, tx); p.append(who);
  const a = h("div"); a.append(h("div", "plabel", tr("appearance")));
  const seg = h("div", "seg");
  [["system", "mode_sys"], ["light", "mode_light"], ["dark", "mode_dark"]].forEach(([k, l]) => {
    const b = h("button", prefs.mode === k ? "on" : "", tr(l)); b.onclick = () => { prefs.mode = k; savePrefs(); }; seg.append(b);
  });
  a.append(seg); p.append(a);
  const c = h("div"); c.append(h("div", "plabel", tr("accent")));
  const sw = h("div", "sw");
  ACC.forEach(([k, n, col]) => {
    const b = h("button", prefs.accent === k ? "on" : ""); b.style.background = col; b.title = n; b.setAttribute("aria-label", n);
    b.onclick = () => { prefs.accent = k; savePrefs(); }; sw.append(b);
  });
  c.append(sw); p.append(c);
  if (FB_ON) {
    const b = h("button", "pill", me ? tr("signout") : tr("signin")); b.style.marginLeft = "0";
    b.onclick = () => { $("#pop").hidden = true; if (me) doSignOut(); else showAuth(true); }; p.append(b);
  }
}
async function initCloud() {
  try {
    if (typeof claude === "undefined") return;
    const user = await claude.use("user"), db = await claude.use("db");
    if (user) me = await user.me();
    avatarInto($("#me"));
    if (db && me && me.id) {
      const ref = db.collection("data/users/" + me.id).doc("state"), snap = await ref.get();
      if (snap.exists) {
        const b = snap.data();
        try { D = JSON.parse(b.data); if (b.prefs) prefs = { ...prefs, ...b.prefs }; } catch {}
        try { localStorage.setItem(KEY, JSON.stringify(D)); localStorage.setItem(PREF_KEY, JSON.stringify(prefs)); } catch {}
        applyPrefs();
      } else await ref.set({ data: JSON.stringify(D), prefs });
      cloud = ref; sync = "cloud";
    }
  } catch {}
  avatarInto($("#me")); render();
}

function showAuth(on) { $("#auth").hidden = !on; document.querySelector(".bar").hidden = on; document.querySelector(".shell").hidden = on; }
const AERR = { "invalid-credential": "a_bad", "wrong-password": "a_bad", "user-not-found": "a_bad", "email-already-in-use": "a_used", "weak-password": "a_weak",
  "invalid-email": "a_mail", "operation-not-allowed": "a_off", "configuration-not-found": "a_off", "unauthorized-domain": "a_dom" };
function authErr(e) {
  const c = (e.code || "").replace("auth/", "");
  $("#a-err").textContent = c === "popup-closed-by-user" ? "" : AERR[c] ? tr(AERR[c]) : (c || e.message || "").replaceAll("-", " ");
}
async function doSignOut() {
  try { if (cloud) { clearTimeout(pushT); await cloud.set({ data: JSON.stringify(D), prefs }); } } catch {}
  try { await auth.signOut(); } catch {}
  try { localStorage.removeItem(KEY); } catch {}
  D = seed(); cloud = null; me = null; sync = "local";
  avatarInto($("#me")); showAuth(true); render();
}
function initFirebase() {
  firebase.initializeApp(firebaseConfig);
  auth = firebase.auth(); const fdb = firebase.firestore();
  const email = () => $("#a-email").value.trim(), pass = () => $("#a-pass").value;
  $("#a-in").onclick = () => auth.signInWithEmailAndPassword(email(), pass()).catch(authErr);
  $("#a-up").onclick = () => auth.createUserWithEmailAndPassword(email(), pass()).catch(authErr);
  $("#a-google").onclick = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(authErr);
  $("#a-guest").onclick = () => showAuth(false);
  $("#a-pass").onkeydown = (e) => { if (e.key === "Enter") $("#a-in").click(); };
  auth.onAuthStateChanged(async (u) => {
    if (!u) return;
    me = { id: u.uid, name: u.displayName || u.email || "", avatarUrl: u.photoURL || "" };
    $("#a-err").textContent = ""; showAuth(false);
    try {
      const ref = fdb.collection("users").doc(u.uid), snap = await ref.get();
      if (snap.exists) {
        const b = snap.data();
        try { D = JSON.parse(b.data); if (b.prefs) prefs = { ...prefs, ...b.prefs }; } catch {}
        try { localStorage.setItem(KEY, JSON.stringify(D)); localStorage.setItem(PREF_KEY, JSON.stringify(prefs)); } catch {}
        applyPrefs();
      } else await ref.set({ data: JSON.stringify(D), prefs });
      cloud = ref; sync = "cloud";
    } catch (e) { sync = "local"; console.error("Firestore:", e); }
    avatarInto($("#me")); render();
  });
}

function render() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i]").forEach((e) => (e.textContent = tr(e.dataset.i)));
  $("#q").placeholder = tr("search"); $("#a-email").placeholder = tr("a_email"); $("#a-pass").placeholder = tr("a_pass"); if (!$("#pop").hidden) renderPop(); $("#e-title").placeholder = tr("title");
  $("#v-title").placeholder = tr("ev_title"); $("#v-det").placeholder = tr("details");
  $("#e-del").title = tr("del"); $("#e-pin").title = tr("pin"); $("#e-list").title = tr("list"); $("#v-del").title = tr("del");
  document.querySelectorAll("[data-v]").forEach((b) => b.classList.toggle("on", b.dataset.v === view));
  document.querySelectorAll("[data-l]").forEach((b) => b.classList.toggle("on", b.dataset.l === lang));
  const m = $("#main"); m.innerHTML = "";
  ({ notes: rNotes, todo: rTodo, plans: rPlans, calendar: rCal })[view](m);
}
document.querySelectorAll("[data-v]").forEach((b) => (b.onclick = () => { view = b.dataset.v; render(); }));
document.querySelectorAll("[data-l]").forEach((b) => (b.onclick = () => {
  lang = b.dataset.l; try { localStorage.setItem("planner-lang", lang); } catch {} render();
}));
$("#q").oninput = (e) => { q = e.target.value; view = "notes"; render(); };
$("#me").onclick = (e) => { e.stopPropagation(); const p = $("#pop"); p.hidden = !p.hidden; if (!p.hidden) renderPop(); };
document.addEventListener("click", (e) => { const p = $("#pop"); if (!p.hidden && !p.contains(e.target)) p.hidden = true; });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") $("#pop").hidden = true; });
if (FB_ON) showAuth(true);
avatarInto($("#me"));
render();
if (FB_ON) initFirebase(); else initCloud();
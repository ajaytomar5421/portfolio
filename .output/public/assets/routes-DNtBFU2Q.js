import {
  a as e,
  i as t,
  n,
  o as r,
  r as i,
  s as a,
  t as o,
} from "./index-1lnJV9FK.js";
var s = a(i(), 1),
  c = (0, s.createContext)({});
function l(e) {
  let t = (0, s.useRef)(null);
  return (t.current === null && (t.current = e()), t.current);
}
var u = typeof window < `u` ? s.useLayoutEffect : s.useEffect,
  d = (0, s.createContext)(null);
function f(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function p(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var m = (e, t, n) => (n > t ? t : n < e ? e : n),
  h = {},
  g = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  _ = (e) => typeof e == `object` && !!e,
  v = (e) => /^0[^.\s]+$/u.test(e);
function y(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var b = (e) => e,
  x = (...e) => e.reduce((e, t) => (n) => t(e(n))),
  S = (e, t, n) => {
    let r = t - e;
    return r ? (n - e) / r : 1;
  },
  C = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return (f(this.subscriptions, e), () => p(this.subscriptions, e));
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            let r = this.subscriptions[i];
            r && r(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  w = (e) => e * 1e3,
  T = (e) => e / 1e3,
  ee = (e, t) => (t ? (1e3 / t) * e : 0),
  te = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  ne = 1e-7,
  re = 12;
function ie(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = te(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > ne && ++s < re);
  return o;
}
function ae(e, t, n, r) {
  if (e === t && n === r) return b;
  let i = (t) => ie(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : te(i(e), t, r));
}
var oe = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  se = (e) => (t) => 1 - e(1 - t),
  ce = ae(0.33, 1.53, 0.69, 0.99),
  le = se(ce),
  ue = oe(le),
  de = (e) =>
    e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * le(e) : 0.5 * (2 - 2 ** (-10 * (e - 1))),
  fe = (e) => 1 - Math.sin(Math.acos(e)),
  pe = se(fe),
  me = oe(fe),
  he = ae(0.42, 0, 1, 1),
  ge = ae(0, 0, 0.58, 1),
  _e = ae(0.42, 0, 0.58, 1),
  ve = (e) => Array.isArray(e) && typeof e[0] != `number`,
  ye = (e) => Array.isArray(e) && typeof e[0] == `number`,
  be = {
    linear: b,
    easeIn: he,
    easeInOut: _e,
    easeOut: ge,
    circIn: fe,
    circInOut: me,
    circOut: pe,
    backIn: le,
    backInOut: ue,
    backOut: ce,
    anticipate: de,
  },
  xe = (e) => typeof e == `string`,
  Se = (e) => {
    if (ye(e)) {
      e.length;
      let [t, n, r, i] = e;
      return ae(t, n, r, i);
    } else if (xe(e)) return (be[e], `${e}`, be[e]);
    return e;
  },
  Ce = [
    `setup`,
    `read`,
    `resolveKeyframes`,
    `preUpdate`,
    `update`,
    `preRender`,
    `render`,
    `postRender`,
  ];
function we(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    a = new WeakSet(),
    o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(t) {
    (a.has(t) && (c.schedule(t), e()), t(o));
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n;
      return (i && a.add(e), s.add(e), e);
    },
    cancel: (e) => {
      (n.delete(e), a.delete(e));
    },
    process: (e) => {
      if (((o = e), r)) {
        i = !0;
        return;
      }
      r = !0;
      let a = t;
      ((t = n),
        (n = a),
        t.forEach(s),
        t.clear(),
        (r = !1),
        i && ((i = !1), c.process(e)));
    },
  };
  return c;
}
var Te = 40;
function Ee(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = Ce.reduce((e, t) => ((e[t] = we(a)), e), {}),
    {
      setup: s,
      read: c,
      resolveKeyframes: l,
      preUpdate: u,
      update: d,
      preRender: f,
      render: p,
      postRender: m,
    } = o,
    g = () => {
      let a = h.useManualTiming,
        o = a ? i.timestamp : performance.now();
      ((n = !1),
        a ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, Te), 1)),
        (i.timestamp = o),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        p.process(i),
        m.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g)));
    },
    _ = () => {
      ((n = !0), (r = !0), i.isProcessing || e(g));
    };
  return {
    schedule: Ce.reduce((e, t) => {
      let r = o[t];
      return (
        (e[t] = (e, t = !1, i = !1) => (n || _(), r.schedule(e, t, i))),
        e
      );
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < Ce.length; t++) o[Ce[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
var {
    schedule: E,
    cancel: De,
    state: D,
    steps: Oe,
  } = Ee(typeof requestAnimationFrame < `u` ? requestAnimationFrame : b, !0),
  ke;
function Ae() {
  ke = void 0;
}
var O = {
    now: () => (
      ke === void 0 &&
        O.set(
          D.isProcessing || h.useManualTiming ? D.timestamp : performance.now(),
        ),
      ke
    ),
    set: (e) => {
      ((ke = e), queueMicrotask(Ae));
    },
  },
  je = (e) => (t) => typeof t == `string` && t.startsWith(e),
  Me = je(`--`),
  Ne = je(`var(--`),
  Pe = (e) => (Ne(e) ? Fe.test(e.split(`/*`)[0].trim()) : !1),
  Fe =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ie(e) {
  return typeof e == `string` ? e.split(`/*`)[0].includes(`var(--`) : !1;
}
var Le = {
    test: (e) => typeof e == `number`,
    parse: parseFloat,
    transform: (e) => e,
  },
  Re = { ...Le, transform: (e) => m(0, 1, e) },
  ze = { ...Le, default: 1 },
  Be = (e) => Math.round(e * 1e5) / 1e5,
  Ve = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function He(e) {
  return e == null;
}
var Ue =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  We = (e, t) => (n) =>
    !!(
      (typeof n == `string` && Ue.test(n) && n.startsWith(e)) ||
      (t && !He(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Ge = (e, t, n) => (r) => {
    if (typeof r != `string`) return r;
    let [i, a, o, s] = r.match(Ve);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s),
    };
  },
  Ke = (e) => m(0, 255, e),
  qe = { ...Le, transform: (e) => Math.round(Ke(e)) },
  Je = {
    test: We(`rgb`, `red`),
    parse: Ge(`red`, `green`, `blue`),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      `rgba(` +
      qe.transform(e) +
      `, ` +
      qe.transform(t) +
      `, ` +
      qe.transform(n) +
      `, ` +
      Be(Re.transform(r)) +
      `)`,
  };
function Ye(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var Xe = { test: We(`#`), parse: Ye, transform: Je.transform },
  Ze = (e) => ({
    test: (t) =>
      typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Qe = Ze(`deg`),
  $e = Ze(`%`),
  k = Ze(`px`),
  et = Ze(`vh`),
  tt = Ze(`vw`),
  nt = {
    ...$e,
    parse: (e) => $e.parse(e) / 100,
    transform: (e) => $e.transform(e * 100),
  },
  rt = {
    test: We(`hsl`, `hue`),
    parse: Ge(`hue`, `saturation`, `lightness`),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      `hsla(` +
      Math.round(e) +
      `, ` +
      $e.transform(Be(t)) +
      `, ` +
      $e.transform(Be(n)) +
      `, ` +
      Be(Re.transform(r)) +
      `)`,
  },
  A = {
    test: (e) => Je.test(e) || Xe.test(e) || rt.test(e),
    parse: (e) =>
      Je.test(e) ? Je.parse(e) : rt.test(e) ? rt.parse(e) : Xe.parse(e),
    transform: (e) =>
      typeof e == `string`
        ? e
        : e.hasOwnProperty(`red`)
          ? Je.transform(e)
          : rt.transform(e),
    getAnimatableNone: (e) => {
      let t = A.parse(e);
      return ((t.alpha = 0), A.transform(t));
    },
  },
  it =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function at(e) {
  return (
    isNaN(e) &&
    typeof e == `string` &&
    (e.match(Ve)?.length || 0) + (e.match(it)?.length || 0) > 0
  );
}
var ot = `number`,
  st = `color`,
  ct = `var`,
  lt = `var(`,
  ut = "${}",
  dt =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ft(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        dt,
        (e) => (
          A.test(e)
            ? (r.color.push(a), i.push(st), n.push(A.parse(e)))
            : e.startsWith(lt)
              ? (r.var.push(a), i.push(ct), n.push(e))
              : (r.number.push(a), i.push(ot), n.push(parseFloat(e))),
          ++a,
          ut
        ),
      )
      .split(ut),
    indexes: r,
    types: i,
  };
}
function pt(e) {
  return ft(e).values;
}
function mt({ split: e, types: t }) {
  let n = e.length;
  return (r) => {
    let i = ``;
    for (let a = 0; a < n; a++)
      if (((i += e[a]), r[a] !== void 0)) {
        let e = t[a];
        e === ot
          ? (i += Be(r[a]))
          : e === st
            ? (i += A.transform(r[a]))
            : (i += r[a]);
      }
    return i;
  };
}
function ht(e) {
  return mt(ft(e));
}
var gt = (e) =>
    typeof e == `number` ? 0 : A.test(e) ? A.getAnimatableNone(e) : e,
  _t = (e, t) =>
    typeof e == `number` ? (t?.trim().endsWith(`/`) ? e : 0) : gt(e);
function vt(e) {
  let t = ft(e);
  return mt(t)(t.values.map((e, n) => _t(e, t.split[n])));
}
var yt = { test: at, parse: pt, createTransformer: ht, getAnimatableNone: vt };
function bt(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function xt({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = bt(s, r, e + 1 / 3)), (a = bt(s, r, e)), (o = bt(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function St(e, t) {
  return (n) => (n > 0 ? t : e);
}
var j = (e, t, n) => e + (t - e) * n,
  Ct = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  wt = [Xe, Je, rt],
  Tt = (e) => wt.find((t) => t.test(e));
function Et(e) {
  let t = Tt(e);
  if ((`${e}`, !t)) return !1;
  let n = t.parse(e);
  return (t === rt && (n = xt(n)), n);
}
var Dt = (e, t) => {
    let n = Et(e),
      r = Et(t);
    if (!n || !r) return St(e, t);
    let i = { ...n };
    return (e) => (
      (i.red = Ct(n.red, r.red, e)),
      (i.green = Ct(n.green, r.green, e)),
      (i.blue = Ct(n.blue, r.blue, e)),
      (i.alpha = j(n.alpha, r.alpha, e)),
      Je.transform(i)
    );
  },
  Ot = new Set([`none`, `hidden`]);
function kt(e, t) {
  return Ot.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function At(e, t) {
  return (n) => j(e, t, n);
}
function jt(e) {
  return typeof e == `number`
    ? At
    : typeof e == `string`
      ? Pe(e)
        ? St
        : A.test(e)
          ? Dt
          : Ft
      : Array.isArray(e)
        ? Mt
        : typeof e == `object`
          ? A.test(e)
            ? Dt
            : Nt
          : St;
}
function Mt(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => jt(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function Nt(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = jt(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function Pt(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]];
    ((n[i] = e.values[o] ?? 0), r[a]++);
  }
  return n;
}
var Ft = (e, t) => {
  let n = yt.createTransformer(t),
    r = ft(e),
    i = ft(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Ot.has(e) && !i.values.length) || (Ot.has(t) && !r.values.length)
      ? kt(e, t)
      : x(Mt(Pt(r, i), i.values), n)
    : (`${e}${t}`, St(e, t));
};
function It(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number`
    ? j(e, t, n)
    : jt(e)(e, t);
}
var Lt = (e) => {
    let t = ({ timestamp: t }) => e(t);
    return {
      start: (e = !0) => E.update(t, e),
      stop: () => De(t),
      now: () => (D.isProcessing ? D.timestamp : O.now()),
    };
  },
  Rt = (e, t, n = 10) => {
    let r = ``,
      i = Math.max(Math.round(t / n), 2);
    for (let t = 0; t < i; t++)
      r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `;
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  zt = 2e4;
function Bt(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < 2e4; ) ((t += 50), (n = e.next(t)));
  return t >= 2e4 ? 1 / 0 : t;
}
function Vt(e, t = 100, n) {
  let r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(Bt(r), zt);
  return {
    type: `keyframes`,
    ease: (e) => r.next(i * e).value / t,
    duration: T(i),
  };
}
var M = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function Ht(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var Ut = 12;
function Wt(e, t, n) {
  let r = n;
  for (let n = 1; n < Ut; n++) r -= e(r) / t(r);
  return r;
}
var Gt = 0.001;
function Kt({
  duration: e = M.duration,
  bounce: t = M.bounce,
  velocity: n = M.velocity,
  mass: r = M.mass,
}) {
  let i, a;
  M.maxDuration;
  let o = 1 - t;
  ((o = m(M.minDamping, M.maxDamping, o)),
    (e = m(M.minDuration, M.maxDuration, T(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = Ht(t, o),
            c = Math.exp(-i);
          return Gt - (a / s) * c;
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = Ht(t ** 2, o);
          return ((-i(t) + Gt > 0 ? -1 : 1) * ((a - s) * c)) / l;
        }))
      : ((i = (t) => -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)))));
  let s = 5 / e,
    c = Wt(i, a, s);
  if (((e = w(e)), isNaN(c)))
    return { stiffness: M.stiffness, damping: M.damping, duration: e };
  {
    let t = c ** 2 * r;
    return { stiffness: t, damping: o * 2 * Math.sqrt(r * t), duration: e };
  }
}
var qt = [`duration`, `bounce`],
  Jt = [`stiffness`, `damping`, `mass`];
function Yt(e, t) {
  return t.some((t) => e[t] !== void 0);
}
function Xt(e) {
  let t = {
    velocity: M.velocity,
    stiffness: M.stiffness,
    damping: M.damping,
    mass: M.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Yt(e, Jt) && Yt(e, qt))
    if (((t.velocity = 0), e.visualDuration)) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * m(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: M.mass, stiffness: i, damping: a };
    } else {
      let n = Kt({ ...e, velocity: 0 });
      ((t = { ...t, ...n, mass: M.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Zt(e = M.visualDuration, t = M.bounce) {
  let n =
      typeof e == `object`
        ? e
        : { visualDuration: e, keyframes: [0, 1], bounce: t },
    { restSpeed: r, restDelta: i } = n,
    a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = { done: !1, value: a },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = Xt({ ...n, velocity: -T(n.velocity || 0) }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    _ = T(Math.sqrt(c / u)),
    v = Math.abs(g) < 5;
  ((r ||= v ? M.restSpeed.granular : M.restSpeed.default),
    (i ||= v ? M.restDelta.granular : M.restDelta.default));
  let y, b, x, S, C, ee;
  if (h < 1)
    ((x = Ht(_, h)),
      (S = (m + h * _ * g) / x),
      (y = (e) =>
        o - Math.exp(-h * _ * e) * (S * Math.sin(x * e) + g * Math.cos(x * e))),
      (C = h * _ * S + g * x),
      (ee = h * _ * g - S * x),
      (b = (e) =>
        Math.exp(-h * _ * e) * (C * Math.sin(x * e) + ee * Math.cos(x * e))));
  else if (h === 1) {
    y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
    let e = m + _ * g;
    b = (t) => Math.exp(-_ * t) * (_ * e * t - m);
  } else {
    let e = _ * Math.sqrt(h * h - 1);
    y = (t) => {
      let n = Math.exp(-h * _ * t),
        r = Math.min(e * t, 300);
      return (
        o - (n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e
      );
    };
    let t = (m + h * _ * g) / e,
      n = h * _ * t - g * e,
      r = h * _ * g - t * e;
    b = (t) => {
      let i = Math.exp(-h * _ * t),
        a = Math.min(e * t, 300);
      return i * (n * Math.sinh(a) + r * Math.cosh(a));
    };
  }
  let te = {
    calculatedDuration: (p && d) || null,
    velocity: (e) => w(b(e)),
    next: (e) => {
      if (!p && h < 1) {
        let t = Math.exp(-h * _ * e),
          n = Math.sin(x * e),
          a = Math.cos(x * e),
          c = o - t * (S * n + g * a),
          l = w(t * (C * n + ee * a));
        return (
          (s.done = Math.abs(l) <= r && Math.abs(o - c) <= i),
          (s.value = s.done ? o : c),
          s
        );
      }
      let t = y(e);
      if (p) s.done = e >= d;
      else {
        let n = w(b(e));
        s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
      }
      return ((s.value = s.done ? o : t), s);
    },
    toString: () => {
      let e = Math.min(Bt(te), zt),
        t = Rt((t) => te.next(e * t).value, e, 30);
      return e + `ms ` + t;
    },
    toTransition: () => {},
  };
  return te;
}
Zt.applyToOptions = (e) => {
  let t = Vt(e, 100, Zt);
  return (
    (e.ease = t.ease),
    (e.duration = w(t.duration)),
    (e.type = `keyframes`),
    e
  );
};
var Qt = 5;
function $t(e, t, n) {
  let r = Math.max(t - Qt, 0);
  return ee(n - e(r), t - r);
}
function en({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
    m = (e) =>
      s === void 0
        ? c
        : c === void 0 || Math.abs(s - e) < Math.abs(c - e)
          ? s
          : c,
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => _ + v(e),
    b = (e) => {
      let t = v(e),
        n = y(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : n));
    },
    x,
    S,
    C = (e) => {
      p(f.value) &&
        ((x = e),
        (S = Zt({
          keyframes: [f.value, m(f.value)],
          velocity: $t(y, e, f.value),
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !S && x === void 0 && ((t = !0), b(e), C(e)),
          x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        );
      },
    }
  );
}
function tn(e, t, n) {
  let r = [],
    i = n || h.mix || It,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    (t && (a = x(Array.isArray(t) ? t[n] || b : t, a)), r.push(a));
  }
  return r;
}
function nn(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if ((t.length, a === 1)) return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = tn(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = S(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(m(e[0], e[a - 1], t)) : l;
}
function rn(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = S(0, t, r);
    e.push(j(n, 1, i));
  }
}
function an(e) {
  let t = [0];
  return (rn(t, e.length - 1), t);
}
function on(e, t) {
  return e.map((e) => e * t);
}
function sn(e, t) {
  return e.map(() => t || _e).splice(0, e.length - 1);
}
function cn({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = `easeInOut`,
}) {
  let i = ve(r) ? r.map(Se) : Se(r),
    a = { done: !1, value: t[0] },
    o = nn(on(n && n.length === t.length ? n : an(t), e), t, {
      ease: Array.isArray(i) ? i : sn(t, i),
    });
  return {
    calculatedDuration: e,
    next: (t) => ((a.value = o(t)), (a.done = t >= e), a),
  };
}
var ln = (e) => e !== null;
function un(e, { repeat: t, repeatType: n = `loop` }, r, i = 1) {
  let a = e.filter(ln),
    o = i < 0 || (t && n !== `loop` && t % 2 == 1) ? 0 : a.length - 1;
  return !o || r === void 0 ? a[o] : r;
}
var dn = { decay: en, inertia: en, tween: cn, keyframes: cn, spring: Zt };
function fn(e) {
  typeof e.type == `string` && (e.type = dn[e.type]);
}
var pn = class {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise((e) => {
        this.resolve = e;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    then(e, t) {
      return this.finished.then(e, t);
    }
  },
  mn = (e) => e / 100,
  hn = class extends pn {
    constructor(e) {
      (super(),
        (this.state = `idle`),
        (this.startTime = null),
        (this.isStopped = !1),
        (this.currentTime = 0),
        (this.holdTime = null),
        (this.playbackSpeed = 1),
        (this.delayState = { done: !1, value: void 0 }),
        (this.stop = () => {
          let { motionValue: e } = this.options;
          (e && e.updatedAt !== O.now() && this.tick(O.now()),
            (this.isStopped = !0),
            this.state !== `idle` &&
              (this.teardown(), this.options.onStop?.()));
        }),
        (this.options = e),
        this.initAnimation(),
        this.play(),
        e.autoplay === !1 && this.pause());
    }
    initAnimation() {
      let { options: e } = this;
      fn(e);
      let {
          type: t = cn,
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: a = 0,
        } = e,
        { keyframes: o } = e,
        s = t || cn;
      s !== cn &&
        typeof o[0] != `number` &&
        ((this.mixKeyframes = x(mn, It(o[0], o[1]))), (o = [0, 100]));
      let c = s({ ...e, keyframes: o });
      (i === `mirror` &&
        (this.mirroredGenerator = s({
          ...e,
          keyframes: [...o].reverse(),
          velocity: -a,
        })),
        c.calculatedDuration === null && (c.calculatedDuration = Bt(c)));
      let { calculatedDuration: l } = c;
      ((this.calculatedDuration = l),
        (this.resolvedDuration = l + r),
        (this.totalDuration = this.resolvedDuration * (n + 1) - r),
        (this.generator = c));
    }
    updateTime(e) {
      let t = Math.round(e - this.startTime) * this.playbackSpeed;
      this.holdTime === null
        ? (this.currentTime = t)
        : (this.currentTime = this.holdTime);
    }
    tick(e, t = !1) {
      let {
        generator: n,
        totalDuration: r,
        mixKeyframes: i,
        mirroredGenerator: a,
        resolvedDuration: o,
        calculatedDuration: s,
      } = this;
      if (this.startTime === null) return n.next(0);
      let {
        delay: c = 0,
        keyframes: l,
        repeat: u,
        repeatType: d,
        repeatDelay: f,
        type: p,
        onUpdate: h,
        finalKeyframe: g,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - r / this.speed, this.startTime)),
        t ? (this.currentTime = e) : this.updateTime(e));
      let _ = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
        v = this.playbackSpeed >= 0 ? _ < 0 : _ > r;
      ((this.currentTime = Math.max(_, 0)),
        this.state === `finished` &&
          this.holdTime === null &&
          (this.currentTime = r));
      let y = this.currentTime,
        b = n;
      if (u) {
        let e = Math.min(this.currentTime, r) / o,
          t = Math.floor(e),
          n = e % 1;
        (!n && e >= 1 && (n = 1),
          n === 1 && t--,
          (t = Math.min(t, u + 1)),
          t % 2 &&
            (d === `reverse`
              ? ((n = 1 - n), f && (n -= f / o))
              : d === `mirror` && (b = a)),
          (y = m(0, 1, n) * o));
      }
      let x;
      (v
        ? ((this.delayState.value = l[0]), (x = this.delayState))
        : (x = b.next(y)),
        i && !v && (x.value = i(x.value)));
      let { done: S } = x;
      !v &&
        s !== null &&
        (S =
          this.playbackSpeed >= 0
            ? this.currentTime >= r
            : this.currentTime <= 0);
      let C =
        this.holdTime === null &&
        (this.state === `finished` || (this.state === `running` && S));
      return (
        C && p !== en && (x.value = un(l, this.options, g, this.speed)),
        h && h(x.value),
        C && this.finish(),
        x
      );
    }
    then(e, t) {
      return this.finished.then(e, t);
    }
    get duration() {
      return T(this.calculatedDuration);
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {};
      return this.duration + T(e);
    }
    get time() {
      return T(this.currentTime);
    }
    set time(e) {
      ((e = w(e)),
        (this.currentTime = e),
        this.startTime === null ||
        this.holdTime !== null ||
        this.playbackSpeed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.playbackSpeed),
        this.driver
          ? this.driver.start(!1)
          : ((this.startTime = 0),
            (this.state = `paused`),
            (this.holdTime = e),
            this.tick(e)));
    }
    getGeneratorVelocity() {
      let e = this.currentTime;
      if (e <= 0) return this.options.velocity || 0;
      if (this.generator.velocity) return this.generator.velocity(e);
      let t = this.generator.next(e).value;
      return $t((e) => this.generator.next(e).value, e, t);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      (t && this.driver && this.updateTime(O.now()),
        (this.playbackSpeed = e),
        t && this.driver && (this.time = T(this.currentTime)));
    }
    play() {
      if (this.isStopped) return;
      let { driver: e = Lt, startTime: t } = this.options;
      ((this.driver ||= e((e) => this.tick(e))), this.options.onPlay?.());
      let n = this.driver.now();
      (this.state === `finished`
        ? (this.updateFinished(), (this.startTime = n))
        : this.holdTime === null
          ? (this.startTime ||= t ?? n)
          : (this.startTime = n - this.holdTime),
        this.state === `finished` &&
          this.speed < 0 &&
          (this.startTime += this.calculatedDuration),
        (this.holdTime = null),
        (this.state = `running`),
        this.driver.start());
    }
    pause() {
      ((this.state = `paused`),
        this.updateTime(O.now()),
        (this.holdTime = this.currentTime));
    }
    complete() {
      (this.state !== `running` && this.play(),
        (this.state = `finished`),
        (this.holdTime = null));
    }
    finish() {
      (this.notifyFinished(),
        this.teardown(),
        (this.state = `finished`),
        this.options.onComplete?.());
    }
    cancel() {
      ((this.holdTime = null),
        (this.startTime = 0),
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.());
    }
    teardown() {
      ((this.state = `idle`),
        this.stopDriver(),
        (this.startTime = this.holdTime = null));
    }
    stopDriver() {
      this.driver &&= (this.driver.stop(), void 0);
    }
    sample(e) {
      return ((this.startTime = 0), this.tick(e, !0));
    }
    attachTimeline(e) {
      return (
        this.options.allowFlatten &&
          ((this.options.type = `keyframes`),
          (this.options.ease = `linear`),
          this.initAnimation()),
        this.driver?.stop(),
        e.observe(this)
      );
    }
  };
function gn(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
var _n = (e) => (e * 180) / Math.PI,
  vn = (e) => bn(_n(Math.atan2(e[1], e[0]))),
  yn = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: vn,
    rotateZ: vn,
    skewX: (e) => _n(Math.atan(e[1])),
    skewY: (e) => _n(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  bn = (e) => ((e %= 360), e < 0 && (e += 360), e),
  xn = vn,
  Sn = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Cn = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  wn = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Sn,
    scaleY: Cn,
    scale: (e) => (Sn(e) + Cn(e)) / 2,
    rotateX: (e) => bn(_n(Math.atan2(e[6], e[5]))),
    rotateY: (e) => bn(_n(Math.atan2(-e[2], e[0]))),
    rotateZ: xn,
    rotate: xn,
    skewX: (e) => _n(Math.atan(e[4])),
    skewY: (e) => _n(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function Tn(e) {
  return +!!e.includes(`scale`);
}
function En(e, t) {
  if (!e || e === `none`) return Tn(t);
  let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
    r,
    i;
  if (n) ((r = wn), (i = n));
  else {
    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = yn), (i = t));
  }
  if (!i) return Tn(t);
  let a = r[t],
    o = i[1].split(`,`).map(On);
  return typeof a == `function` ? a(o) : o[a];
}
var Dn = (e, t) => {
  let { transform: n = `none` } = getComputedStyle(e);
  return En(n, t);
};
function On(e) {
  return parseFloat(e.trim());
}
var kn = [
    `transformPerspective`,
    `x`,
    `y`,
    `z`,
    `translateX`,
    `translateY`,
    `translateZ`,
    `scale`,
    `scaleX`,
    `scaleY`,
    `rotate`,
    `rotateX`,
    `rotateY`,
    `rotateZ`,
    `skew`,
    `skewX`,
    `skewY`,
  ],
  An = new Set([...kn, `pathRotation`]),
  jn = (e) => e === Le || e === k,
  Mn = new Set([`x`, `y`, `z`]),
  Nn = kn.filter((e) => !Mn.has(e));
function Pn(e) {
  let t = [];
  return (
    Nn.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)));
    }),
    t
  );
}
var Fn = {
  width: (
    { x: e },
    { paddingLeft: t = `0`, paddingRight: n = `0`, boxSizing: r },
  ) => {
    let i = e.max - e.min;
    return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
  },
  height: (
    { y: e },
    { paddingTop: t = `0`, paddingBottom: n = `0`, boxSizing: r },
  ) => {
    let i = e.max - e.min;
    return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => En(t, `x`),
  y: (e, { transform: t }) => En(t, `y`),
};
((Fn.translateX = Fn.x), (Fn.translateY = Fn.y));
var In = new Set(),
  Ln = !1,
  Rn = !1,
  zn = !1;
function Bn() {
  if (Rn) {
    let e = Array.from(In).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map();
    (t.forEach((e) => {
      let t = Pn(e);
      t.length && (n.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = n.get(e);
        t &&
          t.forEach(([t, n]) => {
            e.getValue(t)?.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
      }));
  }
  ((Rn = !1), (Ln = !1), In.forEach((e) => e.complete(zn)), In.clear());
}
function Vn() {
  In.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Rn = !0));
  });
}
function Hn() {
  ((zn = !0), Vn(), Bn(), (zn = !1));
}
var Un = class {
    constructor(e, t, n, r, i, a = !1) {
      ((this.state = `pending`),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = a));
    }
    scheduleResolve() {
      ((this.state = `scheduled`),
        this.isAsync
          ? (In.add(this),
            Ln || ((Ln = !0), E.read(Vn), E.resolveKeyframes(Bn)))
          : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r,
      } = this;
      if (e[0] === null) {
        let i = r?.get(),
          a = e[e.length - 1];
        if (i !== void 0) e[0] = i;
        else if (n && t) {
          let r = n.readValue(t, a);
          r != null && (e[0] = r);
        }
        (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
      }
      gn(e);
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(e = !1) {
      ((this.state = `complete`),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
        In.delete(this));
    }
    cancel() {
      this.state === `scheduled` && (In.delete(this), (this.state = `pending`));
    }
    resume() {
      this.state === `pending` && this.scheduleResolve();
    }
  },
  Wn = (e) => e.startsWith(`--`);
function Gn(e, t, n) {
  Wn(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
var Kn = {};
function qn(e, t) {
  let n = y(e);
  return () => Kn[t] ?? n();
}
var Jn = qn(() => window.ScrollTimeline !== void 0, `scrollTimeline`),
  Yn = qn(() => {
    try {
      document
        .createElement(`div`)
        .animate({ opacity: 0 }, { easing: `linear(0, 1)` });
    } catch {
      return !1;
    }
    return !0;
  }, `linearEasing`),
  Xn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Zn = {
    linear: `linear`,
    ease: `ease`,
    easeIn: `ease-in`,
    easeOut: `ease-out`,
    easeInOut: `ease-in-out`,
    circIn: Xn([0, 0.65, 0.55, 1]),
    circOut: Xn([0.55, 0, 1, 0.45]),
    backIn: Xn([0.31, 0.01, 0.66, -0.59]),
    backOut: Xn([0.33, 1.53, 0.69, 0.99]),
  };
function Qn(e, t) {
  if (e)
    return typeof e == `function`
      ? Yn()
        ? Rt(e, t)
        : `ease-out`
      : ye(e)
        ? Xn(e)
        : Array.isArray(e)
          ? e.map((e) => Qn(e, t) || Zn.easeOut)
          : Zn[e];
}
function $n(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeOut`,
    times: c,
  } = {},
  l = void 0,
) {
  let u = { [t]: n };
  c && (u.offset = c);
  let d = Qn(s, i);
  Array.isArray(d) && (u.easing = d);
  let f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? `linear` : d,
    fill: `both`,
    iterations: a + 1,
    direction: o === `reverse` ? `alternate` : `normal`,
  };
  return (l && (f.pseudoElement = l), e.animate(u, f));
}
function er(e) {
  return typeof e == `function` && `applyToOptions` in e;
}
function tr({ type: e, ...t }) {
  return er(e) && Yn()
    ? e.applyToOptions(t)
    : ((t.duration ??= 300), (t.ease ??= `easeOut`), t);
}
var nr = class extends pn {
    constructor(e) {
      if (
        (super(),
        (this.finishedTime = null),
        (this.isStopped = !1),
        (this.manualStartTime = null),
        !e)
      )
        return;
      let {
        element: t,
        name: n,
        keyframes: r,
        pseudoElement: i,
        allowFlatten: a = !1,
        finalKeyframe: o,
        onComplete: s,
      } = e;
      ((this.isPseudoElement = !!i),
        (this.allowFlatten = a),
        (this.options = e),
        e.type);
      let c = tr(e);
      ((this.animation = $n(t, n, r, c, i)),
        c.autoplay === !1 && this.animation.pause(),
        (this.animation.onfinish = () => {
          if (((this.finishedTime = this.time), !i)) {
            let e = un(r, this.options, o, this.speed);
            (this.updateMotionValue && this.updateMotionValue(e),
              Gn(t, n, e),
              this.animation.cancel());
          }
          (s?.(), this.notifyFinished());
        }));
    }
    play() {
      this.isStopped ||
        ((this.manualStartTime = null),
        this.animation.play(),
        this.state === `finished` && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.finish?.();
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch {}
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = !0;
      let { state: e } = this;
      e === `idle` ||
        e === `finished` ||
        (this.updateMotionValue
          ? this.updateMotionValue()
          : this.commitStyles(),
        this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      let e = this.options?.element;
      !this.isPseudoElement &&
        e?.isConnected &&
        this.animation.commitStyles?.();
    }
    get duration() {
      let e = this.animation.effect?.getComputedTiming?.().duration || 0;
      return T(Number(e));
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {};
      return this.duration + T(e);
    }
    get time() {
      return T(Number(this.animation.currentTime) || 0);
    }
    set time(e) {
      let t = this.finishedTime !== null;
      ((this.manualStartTime = null),
        (this.finishedTime = null),
        (this.animation.currentTime = w(e)),
        t && this.animation.pause());
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(e) {
      (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
    }
    get state() {
      return this.finishedTime === null ? this.animation.playState : `finished`;
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(e) {
      this.manualStartTime = this.animation.startTime = e;
    }
    attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
      return (
        this.allowFlatten &&
          this.animation.effect?.updateTiming({ easing: `linear` }),
        (this.animation.onfinish = null),
        e && Jn()
          ? ((this.animation.timeline = e),
            t && (this.animation.rangeStart = t),
            n && (this.animation.rangeEnd = n),
            b)
          : r(this)
      );
    }
  },
  rr = { anticipate: de, backInOut: ue, circInOut: me };
function ir(e) {
  return e in rr;
}
function ar(e) {
  typeof e.ease == `string` && ir(e.ease) && (e.ease = rr[e.ease]);
}
var or = 10,
  sr = class extends nr {
    constructor(e) {
      (ar(e),
        fn(e),
        super(e),
        e.startTime !== void 0 &&
          e.autoplay !== !1 &&
          (this.startTime = e.startTime),
        (this.options = e));
    }
    updateMotionValue(e) {
      let {
        motionValue: t,
        onUpdate: n,
        onComplete: r,
        element: i,
        ...a
      } = this.options;
      if (!t) return;
      if (e !== void 0) {
        t.set(e);
        return;
      }
      let o = new hn({ ...a, autoplay: !1 }),
        s = Math.max(or, O.now() - this.startTime),
        c = m(0, or, s - or),
        l = o.sample(s).value,
        { name: u } = this.options;
      (i && u && Gn(i, u, l),
        t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c),
        o.stop());
    }
  },
  cr = (e, t) =>
    t === `zIndex`
      ? !1
      : !!(
          typeof e == `number` ||
          Array.isArray(e) ||
          (typeof e == `string` &&
            (yt.test(e) || e === `0`) &&
            !e.startsWith(`url(`))
        );
function lr(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function ur(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = cr(i, t),
    s = cr(a, t);
  return (
    `${t}${i}${a}${o ? a : i}`,
    !o || !s ? !1 : lr(e) || ((n === `spring` || er(n)) && r)
  );
}
function dr(e) {
  ((e.duration = 0), (e.type = `keyframes`));
}
var fr = new Set([`opacity`, `clipPath`, `filter`, `transform`]),
  pr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function mr(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == `string` && pr.test(e[t])) return !0;
  return !1;
}
var hr = new Set([
    `color`,
    `backgroundColor`,
    `outlineColor`,
    `fill`,
    `stroke`,
    `borderColor`,
    `borderTopColor`,
    `borderRightColor`,
    `borderBottomColor`,
    `borderLeftColor`,
  ]),
  gr = y(() => Object.hasOwnProperty.call(Element.prototype, `animate`));
function _r(e) {
  let {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: a,
    type: o,
    keyframes: s,
  } = e;
  if (!(t?.owner?.current instanceof HTMLElement)) return !1;
  let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
  return (
    gr() &&
    n &&
    (fr.has(n) || (hr.has(n) && mr(s))) &&
    (n !== `transform` || !l) &&
    !c &&
    !r &&
    i !== `mirror` &&
    a !== 0 &&
    o !== `inertia`
  );
}
var vr = 40,
  yr = class extends pn {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = `keyframes`,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: a = `loop`,
      keyframes: o,
      name: s,
      motionValue: c,
      element: l,
      ...u
    }) {
      (super(),
        (this.stop = () => {
          (this._animation && (this._animation.stop(), this.stopTimeline?.()),
            this.keyframeResolver?.cancel());
        }),
        (this.createdAt = O.now()));
      let d = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: a,
          name: s,
          motionValue: c,
          element: l,
          ...u,
        },
        f = l?.KeyframeResolver || Un;
      ((this.keyframeResolver = new f(
        o,
        (e, t, n) => this.onKeyframesResolved(e, t, d, !n),
        s,
        c,
        l,
      )),
        this.keyframeResolver?.scheduleResolve());
    }
    onKeyframesResolved(e, t, n, r) {
      this.keyframeResolver = void 0;
      let {
        name: i,
        type: a,
        velocity: o,
        delay: s,
        isHandoff: c,
        onUpdate: l,
      } = n;
      this.resolvedAt = O.now();
      let u = !0;
      ur(e, i, a, o) ||
        ((u = !1),
        (h.instantAnimations || !s) && l?.(un(e, n, t)),
        (e[0] = e[e.length - 1]),
        dr(n),
        (n.repeat = 0));
      let d = {
          startTime: r
            ? this.resolvedAt && this.resolvedAt - this.createdAt > vr
              ? this.resolvedAt
              : this.createdAt
            : void 0,
          finalKeyframe: t,
          ...n,
          keyframes: e,
        },
        f = u && !c && _r(d),
        p = d.motionValue?.owner?.current,
        m;
      if (f)
        try {
          m = new sr({ ...d, element: p });
        } catch {
          m = new hn(d);
        }
      else m = new hn(d);
      (m.finished
        .then(() => {
          this.notifyFinished();
        })
        .catch(b),
        (this.pendingTimeline &&=
          ((this.stopTimeline = m.attachTimeline(this.pendingTimeline)),
          void 0)),
        (this._animation = m));
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished;
    }
    then(e, t) {
      return this.finished.finally(e).then(() => {});
    }
    get animation() {
      return (
        this._animation || (this.keyframeResolver?.resume(), Hn()),
        this._animation
      );
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(e) {
      this.animation.time = e;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(e) {
      this.animation.speed = e;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(e) {
      return (
        this._animation
          ? (this.stopTimeline = this.animation.attachTimeline(e))
          : (this.pendingTimeline = e),
        () => this.stop()
      );
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      (this._animation && this.animation.cancel(),
        this.keyframeResolver?.cancel());
    }
  };
function br(e, t, n, r = 0, i = 1) {
  let a = Array.from(e)
      .sort((e, t) => e.sortNodePosition(t))
      .indexOf(t),
    o = e.size,
    s = (o - 1) * r;
  return typeof n == `function` ? n(a, o) : i === 1 ? a * r : s - a * r;
}
var xr = 30,
  Sr = (e) => !isNaN(parseFloat(e)),
  Cr = { current: void 0 },
  wr = class {
    constructor(e, t = {}) {
      ((this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (e) => {
          let t = O.now();
          if (
            (this.updatedAt !== t && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(e),
            this.current !== this.prev &&
              (this.events.change?.notify(this.current), this.dependents))
          )
            for (let e of this.dependents) e.dirty();
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner));
    }
    setCurrent(e) {
      ((this.current = e),
        (this.updatedAt = O.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = Sr(this.current)));
    }
    setPrevFrameValue(e = this.current) {
      ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(e) {
      return this.on(`change`, e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new C());
      let n = this.events[e].add(t);
      return e === `change`
        ? () => {
            (n(),
              E.read(() => {
                this.events.change.getSize() || this.stop();
              }));
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      ((this.passiveEffect = e), (this.stopPassiveEffect = t));
    }
    set(e) {
      this.passiveEffect
        ? this.passiveEffect(e, this.updateAndNotify)
        : this.updateAndNotify(e);
    }
    setWithVelocity(e, t, n) {
      (this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n));
    }
    jump(e, t = !0) {
      (this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    dirty() {
      this.events.change?.notify(this.current);
    }
    addDependent(e) {
      ((this.dependents ||= new Set()), this.dependents.add(e));
    }
    removeDependent(e) {
      this.dependents && this.dependents.delete(e);
    }
    get() {
      return (Cr.current && Cr.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = O.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > xr
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, xr);
      return ee(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          ((this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify());
        }).then(() => {
          (this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      (this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  };
function Tr(e, t) {
  return new wr(e, t);
}
function Er(e, t) {
  if (e?.inherit && t) {
    let { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function Dr(e, t) {
  let n = e?.[t] ?? e?.default ?? e;
  return n === e ? n : Er(n, e);
}
var Or = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 },
  kr = (e) => ({
    type: `spring`,
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Ar = { type: `keyframes`, duration: 0.8 },
  jr = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Mr = (e, { keyframes: t }) =>
    t.length > 2
      ? Ar
      : An.has(e)
        ? e.startsWith(`scale`)
          ? kr(t[1])
          : Or
        : jr,
  Nr = new Set([
    `when`,
    `delay`,
    `delayChildren`,
    `staggerChildren`,
    `staggerDirection`,
    `repeat`,
    `repeatType`,
    `repeatDelay`,
    `from`,
    `elapsed`,
  ]);
function Pr(e) {
  for (let t in e) if (!Nr.has(t)) return !0;
  return !1;
}
var Fr =
    (e, t, n, r = {}, i, a) =>
    (o) => {
      let s = Dr(r, e) || {},
        c = s.delay || r.delay || 0,
        { elapsed: l = 0 } = r;
      l -= w(c);
      let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: `easeOut`,
        velocity: t.getVelocity(),
        ...s,
        delay: -l,
        onUpdate: (e) => {
          (t.set(e), s.onUpdate && s.onUpdate(e));
        },
        onComplete: () => {
          (o(), s.onComplete && s.onComplete());
        },
        name: e,
        motionValue: t,
        element: a ? void 0 : i,
      };
      (Pr(s) || Object.assign(u, Mr(e, u)),
        (u.duration &&= w(u.duration)),
        (u.repeatDelay &&= w(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from));
      let d = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          (dr(u), u.delay === 0 && (d = !0)),
        (h.instantAnimations ||
          h.skipAnimations ||
          i?.shouldSkipAnimations ||
          s.skipAnimations) &&
          ((d = !0), dr(u), (u.delay = 0)),
        (u.allowFlatten = !s.type && !s.ease),
        d && !a && t.get() !== void 0)
      ) {
        let e = un(u.keyframes, s);
        if (e !== void 0) {
          E.update(() => {
            (u.onUpdate(e), u.onComplete());
          });
          return;
        }
      }
      return s.isSync ? new hn(u) : new yr(u);
    },
  Ir = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Lr(e) {
  let t = Ir.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Rr(e, t, n = 1) {
  `${e}`;
  let [r, i] = Lr(e);
  if (!r) return;
  let a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return g(e) ? parseFloat(e) : e;
  }
  return Pe(i) ? Rr(i, t, n + 1) : i;
}
function zr(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function Br(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = zr(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if (
    (typeof t == `string` && (t = e.variants && e.variants[t]),
    typeof t == `function`)
  ) {
    let [i, a] = zr(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
function Vr(e, t, n) {
  let r = e.getProps();
  return Br(r, t, n === void 0 ? r.custom : n, e);
}
var Hr = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...kn]),
  Ur = (e) => Array.isArray(e);
function Wr(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Tr(n));
}
function Gr(e) {
  return Ur(e) ? e[e.length - 1] || 0 : e;
}
function Kr(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = Vr(e, t) || {};
  i = { ...i, ...n };
  for (let t in i) Wr(e, t, Gr(i[t]));
}
var N = (e) => !!(e && e.getVelocity);
function qr(e) {
  return !!(N(e) && e.add);
}
function Jr(e, t) {
  let n = e.getValue(`willChange`);
  if (qr(n)) return n.add(t);
  if (!n && h.WillChange) {
    let n = new h.WillChange(`auto`);
    (e.addValue(`willChange`, n), n.add(t));
  }
}
function Yr(e) {
  return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var Xr = `data-` + Yr(`framerAppearId`);
function Zr(e) {
  return e.props[Xr];
}
function Qr({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function $r(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a, transitionEnd: o, ...s } = t,
    c = e.getDefaultTransition();
  a = a ? Er(a, c) : c;
  let l = a?.reduceMotion,
    u = a?.skipAnimations;
  r && (a = r);
  let d = [],
    f = i && e.animationState && e.animationState.getState()[i],
    p = a?.path;
  p && p.animateVisualElement(e, s, a, n, d);
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || (f && Qr(f, t))) continue;
    let o = { delay: n, ...Dr(a || {}, t) };
    u && (o.skipAnimations = !0);
    let c = r.get();
    if (
      c !== void 0 &&
      !r.isAnimating() &&
      !Array.isArray(i) &&
      i === c &&
      !o.velocity
    ) {
      E.update(() => r.set(i));
      continue;
    }
    let p = !1;
    if (window.MotionHandoffAnimation) {
      let n = Zr(e);
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, E);
        e !== null && ((o.startTime = e), (p = !0));
      }
    }
    Jr(e, t);
    let m = l ?? e.shouldReduceMotion;
    r.start(Fr(t, r, i, m && Hr.has(t) ? { type: !1 } : o, e, p));
    let h = r.animation;
    h && d.push(h);
  }
  if (o) {
    let t = () =>
      E.update(() => {
        o && Kr(e, o);
      });
    d.length ? Promise.all(d).then(t) : t();
  }
  return d;
}
function ei(e, t, n = {}) {
  let r = Vr(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let a = r ? () => Promise.all($r(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let {
              delayChildren: a = 0,
              staggerChildren: o,
              staggerDirection: s,
            } = i;
            return ti(e, t, r, a, o, s, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
    return e().then(() => t());
  } else return Promise.all([a(), o(n.delay)]);
}
function ti(e, t, n = 0, r = 0, i = 0, a = 1, o) {
  let s = [];
  for (let c of e.variantChildren)
    (c.notify(`AnimationStart`, t),
      s.push(
        ei(c, t, {
          ...o,
          delay:
            n +
            (typeof r == `function` ? 0 : r) +
            br(e.variantChildren, c, r, i, a),
        }).then(() => c.notify(`AnimationComplete`, t)),
      ));
  return Promise.all(s);
}
function ni(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((t) => ei(e, t, n));
    r = Promise.all(i);
  } else if (typeof t == `string`) r = ei(e, t, n);
  else {
    let i = typeof t == `function` ? Vr(e, t, n.custom) : t;
    r = Promise.all($r(e, i, n));
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
var ri = { test: (e) => e === `auto`, parse: (e) => e },
  ii = (e) => (t) => t.test(e),
  ai = [Le, k, $e, Qe, tt, et, ri],
  oi = (e) => ai.find(ii(e));
function si(e) {
  return typeof e == `number`
    ? e === 0
    : e === null
      ? !0
      : e === `none` || e === `0` || v(e);
}
var ci = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function li(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(Ve) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!ci.has(t);
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
var ui = /\b([a-z-]*)\(.*?\)/gu,
  di = {
    ...yt,
    getAnimatableNone: (e) => {
      let t = e.match(ui);
      return t ? t.map(li).join(` `) : e;
    },
  },
  fi = {
    ...yt,
    getAnimatableNone: (e) => {
      let t = yt.parse(e);
      return yt.createTransformer(e)(
        t.map((e) =>
          typeof e == `number`
            ? 0
            : typeof e == `object`
              ? { ...e, alpha: 1 }
              : e,
        ),
      );
    },
  },
  pi = { ...Le, transform: Math.round },
  mi = {
    borderWidth: k,
    borderTopWidth: k,
    borderRightWidth: k,
    borderBottomWidth: k,
    borderLeftWidth: k,
    borderRadius: k,
    borderTopLeftRadius: k,
    borderTopRightRadius: k,
    borderBottomRightRadius: k,
    borderBottomLeftRadius: k,
    width: k,
    maxWidth: k,
    height: k,
    maxHeight: k,
    top: k,
    right: k,
    bottom: k,
    left: k,
    inset: k,
    insetBlock: k,
    insetBlockStart: k,
    insetBlockEnd: k,
    insetInline: k,
    insetInlineStart: k,
    insetInlineEnd: k,
    padding: k,
    paddingTop: k,
    paddingRight: k,
    paddingBottom: k,
    paddingLeft: k,
    paddingBlock: k,
    paddingBlockStart: k,
    paddingBlockEnd: k,
    paddingInline: k,
    paddingInlineStart: k,
    paddingInlineEnd: k,
    margin: k,
    marginTop: k,
    marginRight: k,
    marginBottom: k,
    marginLeft: k,
    marginBlock: k,
    marginBlockStart: k,
    marginBlockEnd: k,
    marginInline: k,
    marginInlineStart: k,
    marginInlineEnd: k,
    fontSize: k,
    backgroundPositionX: k,
    backgroundPositionY: k,
    rotate: Qe,
    pathRotation: Qe,
    rotateX: Qe,
    rotateY: Qe,
    rotateZ: Qe,
    scale: ze,
    scaleX: ze,
    scaleY: ze,
    scaleZ: ze,
    skew: Qe,
    skewX: Qe,
    skewY: Qe,
    distance: k,
    translateX: k,
    translateY: k,
    translateZ: k,
    x: k,
    y: k,
    z: k,
    perspective: k,
    transformPerspective: k,
    opacity: Re,
    originX: nt,
    originY: nt,
    originZ: k,
    zIndex: pi,
    fillOpacity: Re,
    strokeOpacity: Re,
    numOctaves: pi,
  },
  hi = {
    ...mi,
    color: A,
    backgroundColor: A,
    outlineColor: A,
    fill: A,
    stroke: A,
    borderColor: A,
    borderTopColor: A,
    borderRightColor: A,
    borderBottomColor: A,
    borderLeftColor: A,
    filter: di,
    WebkitFilter: di,
    mask: fi,
    WebkitMask: fi,
  },
  gi = (e) => hi[e],
  _i = new Set([di, fi]);
function vi(e, t) {
  let n = gi(e);
  return (
    _i.has(n) || (n = yt),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var yi = new Set([`auto`, `none`, `0`]);
function bi(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    let t = e[r];
    (typeof t == `string` && !yi.has(t) && ft(t).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (let r of t) e[r] = vi(n, i);
}
var xi = class extends Un {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (typeof r == `string` && ((r = r.trim()), Pe(r))) {
          let i = Rr(r, t.current);
          (i !== void 0 && (e[n] = i),
            n === e.length - 1 && (this.finalKeyframe = r));
        }
      }
      if ((this.resolveNoneKeyframes(), !Hr.has(n) || e.length !== 2)) return;
      let [r, i] = e,
        a = oi(r),
        o = oi(i);
      if (Ie(r) !== Ie(i) && Fn[n]) {
        this.needsMeasurement = !0;
        return;
      }
      if (a !== o)
        if (jn(a) && jn(o))
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            typeof n == `string` && (e[t] = parseFloat(n));
          }
        else Fn[n] && (this.needsMeasurement = !0);
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let t = 0; t < e.length; t++)
        (e[t] === null || si(e[t])) && n.push(t);
      n.length && bi(e, n, t);
    }
    measureInitialState() {
      let { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      (n === `height` && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = Fn[n](
          e.measureViewportBox(),
          window.getComputedStyle(e.current),
        )),
        (t[0] = this.measuredOrigin));
      let r = t[t.length - 1];
      r !== void 0 && e.getValue(n, r).jump(r, !1);
    }
    measureEndState() {
      let { element: e, name: t, unresolvedKeyframes: n } = this;
      if (!e || !e.current) return;
      let r = e.getValue(t);
      r && r.jump(this.measuredOrigin, !1);
      let i = n.length - 1,
        a = n[i];
      ((n[i] = Fn[t](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        this.removedTransforms?.length &&
          this.removedTransforms.forEach(([t, n]) => {
            e.getValue(t).set(n);
          }),
        this.resolveNoneKeyframes());
    }
  },
  Si = [
    `borderTopLeftRadius`,
    `borderTopRightRadius`,
    `borderBottomRightRadius`,
    `borderBottomLeftRadius`,
  ];
function Ci(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((e) => e != null);
}
var wi = (e, t) => (t && typeof e == `number` ? t.transform(e) : e);
function Ti(e) {
  return _(e) && `offsetHeight` in e && !(`ownerSVGElement` in e);
}
var { schedule: Ei, cancel: Di } = Ee(queueMicrotask, !1),
  P = { x: !1, y: !1 };
function Oi() {
  return P.x || P.y;
}
function ki(e) {
  return e === `x` || e === `y`
    ? P[e]
      ? null
      : ((P[e] = !0),
        () => {
          P[e] = !1;
        })
    : P.x || P.y
      ? null
      : ((P.x = P.y = !0),
        () => {
          P.x = P.y = !1;
        });
}
function Ai(e, t) {
  let n = Ci(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function ji(e) {
  return !(e.pointerType === `touch` || Oi());
}
function Mi(e, t, n = {}) {
  let [r, i, a] = Ai(e, n);
  return (
    r.forEach((e) => {
      let n = !1,
        r = !1,
        a,
        o = () => {
          e.removeEventListener(`pointerleave`, u);
        },
        s = (e) => {
          ((a &&= (a(e), void 0)), o());
        },
        c = (e) => {
          ((n = !1),
            window.removeEventListener(`pointerup`, c),
            window.removeEventListener(`pointercancel`, c),
            r && ((r = !1), s(e)));
        },
        l = () => {
          ((n = !0),
            window.addEventListener(`pointerup`, c, i),
            window.addEventListener(`pointercancel`, c, i));
        },
        u = (e) => {
          if (e.pointerType !== `touch`) {
            if (n) {
              r = !0;
              return;
            }
            s(e);
          }
        };
      (e.addEventListener(
        `pointerenter`,
        (n) => {
          if (!ji(n)) return;
          r = !1;
          let o = t(e, n);
          typeof o == `function` &&
            ((a = o), e.addEventListener(`pointerleave`, u, i));
        },
        i,
      ),
        e.addEventListener(`pointerdown`, l, i));
    }),
    a
  );
}
var Ni = (e, t) => (t ? (e === t ? !0 : Ni(e, t.parentElement)) : !1),
  Pi = (e) =>
    e.pointerType === `mouse`
      ? typeof e.button != `number` || e.button <= 0
      : e.isPrimary !== !1,
  Fi = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function Ii(e) {
  return Fi.has(e.tagName) || e.isContentEditable === !0;
}
var Li = new Set([`INPUT`, `SELECT`, `TEXTAREA`]);
function Ri(e) {
  return Li.has(e.tagName) || e.isContentEditable === !0;
}
var zi = new WeakSet();
function Bi(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function Vi(e, t) {
  e.dispatchEvent(
    new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }),
  );
}
var Hi = (e, t) => {
  let n = e.currentTarget;
  if (!n) return;
  let r = Bi(() => {
    if (zi.has(n)) return;
    Vi(n, `down`);
    let e = Bi(() => {
      Vi(n, `up`);
    });
    (n.addEventListener(`keyup`, e, t),
      n.addEventListener(`blur`, () => Vi(n, `cancel`), t));
  });
  (n.addEventListener(`keydown`, r, t),
    n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t));
};
function Ui(e) {
  return Pi(e) && !Oi();
}
var Wi = new WeakSet();
function Gi(e, t, n = {}) {
  let [r, i, a] = Ai(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!Ui(e) || Wi.has(e)) return;
      (zi.add(r), n.stopPropagation && Wi.add(e));
      let a = t(r, e),
        o = { ...i, capture: !0 },
        s = (e, t) => {
          (window.removeEventListener(`pointerup`, c, o),
            window.removeEventListener(`pointercancel`, l, o),
            zi.has(r) && zi.delete(r),
            Ui(e) && typeof a == `function` && a(e, { success: t }));
        },
        c = (e) => {
          s(
            e,
            r === window ||
              r === document ||
              n.useGlobalTarget ||
              Ni(r, e.target),
          );
        },
        l = (e) => {
          s(e, !1);
        };
      (window.addEventListener(`pointerup`, c, o),
        window.addEventListener(`pointercancel`, l, o));
    };
  return (
    r.forEach((e) => {
      ((n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i),
        Ti(e) &&
          (e.addEventListener(`focus`, (e) => Hi(e, i)),
          !Ii(e) && !e.hasAttribute(`tabindex`) && (e.tabIndex = 0)));
    }),
    a
  );
}
function Ki(e) {
  return _(e) && `ownerSVGElement` in e;
}
var qi = new WeakMap(),
  Ji,
  Yi = (e, t, n) => (r, i) =>
    i && i[0]
      ? i[0][e + `Size`]
      : Ki(r) && `getBBox` in r
        ? r.getBBox()[t]
        : r[n],
  Xi = Yi(`inline`, `width`, `offsetWidth`),
  Zi = Yi(`block`, `height`, `offsetHeight`);
function Qi({ target: e, borderBoxSize: t }) {
  qi.get(e)?.forEach((n) => {
    n(e, {
      get width() {
        return Xi(e, t);
      },
      get height() {
        return Zi(e, t);
      },
    });
  });
}
function $i(e) {
  e.forEach(Qi);
}
function ea() {
  typeof ResizeObserver > `u` || (Ji = new ResizeObserver($i));
}
function ta(e, t) {
  Ji || ea();
  let n = Ci(e);
  return (
    n.forEach((e) => {
      let n = qi.get(e);
      (n || ((n = new Set()), qi.set(e, n)), n.add(t), Ji?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = qi.get(e);
        (n?.delete(t), n?.size || Ji?.unobserve(e));
      });
    }
  );
}
var na = new Set(),
  ra;
function ia() {
  ((ra = () => {
    let e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    na.forEach((t) => t(e));
  }),
    window.addEventListener(`resize`, ra));
}
function aa(e) {
  return (
    na.add(e),
    ra || ia(),
    () => {
      (na.delete(e),
        !na.size &&
          typeof ra == `function` &&
          (window.removeEventListener(`resize`, ra), (ra = void 0)));
    }
  );
}
function oa(e, t) {
  return typeof e == `function` ? aa(e) : ta(e, t);
}
var sa = { value: null, addProjectionMetrics: null };
function ca(e) {
  return Ki(e) && e.tagName === `svg`;
}
var la = [...ai, A, yt],
  ua = (e) => la.find(ii(e)),
  da = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  fa = () => ({ x: da(), y: da() }),
  pa = () => ({ min: 0, max: 0 }),
  F = () => ({ x: pa(), y: pa() }),
  ma = new WeakMap();
function ha(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
function ga(e) {
  return typeof e == `string` || Array.isArray(e);
}
var _a = [
    `animate`,
    `whileInView`,
    `whileFocus`,
    `whileHover`,
    `whileTap`,
    `whileDrag`,
    `exit`,
  ],
  va = [`initial`, ..._a];
function ya(e) {
  return ha(e.animate) || va.some((t) => ga(e[t]));
}
function ba(e) {
  return !!(ya(e) || e.variants);
}
function xa(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (N(i)) e.addValue(r, i);
    else if (N(a)) e.addValue(r, Tr(i, { owner: e }));
    else if (a !== i)
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, Tr(t === void 0 ? i : t, { owner: e }));
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var Sa = { current: null },
  Ca = { current: !1 },
  wa = typeof window < `u`;
function Ta() {
  if (((Ca.current = !0), wa))
    if (window.matchMedia) {
      let e = window.matchMedia(`(prefers-reduced-motion)`),
        t = () => (Sa.current = e.matches);
      (e.addEventListener(`change`, t), t());
    } else Sa.current = !1;
}
var Ea = [
    `AnimationStart`,
    `AnimationComplete`,
    `Update`,
    `BeforeLayoutMeasure`,
    `LayoutMeasure`,
    `LayoutAnimationStart`,
    `LayoutAnimationComplete`,
  ],
  Da = {};
function Oa(e) {
  Da = e;
}
function ka() {
  return Da;
}
var Aa = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        skipAnimations: i,
        blockInitialAnimation: a,
        visualState: o,
      },
      s = {},
    ) {
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.shouldSkipAnimations = !1),
        (this.values = new Map()),
        (this.KeyframeResolver = Un),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.hasBeenMounted = !1),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let e = O.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), E.render(this.render, !1, !0));
        }));
      let { latestValues: c, renderState: l } = o;
      ((this.latestValues = c),
        (this.baseTarget = { ...c }),
        (this.initialValues = t.initial ? { ...c } : {}),
        (this.renderState = l),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.skipAnimationsConfig = i),
        (this.options = s),
        (this.blockInitialAnimation = !!a),
        (this.isControllingVariants = ya(t)),
        (this.isVariantNode = ba(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current)));
      let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
        t,
        {},
        this,
      );
      for (let e in d) {
        let t = d[e];
        c[e] !== void 0 && N(t) && t.set(c[e]);
      }
    }
    mount(e) {
      if (this.hasBeenMounted)
        for (let e in this.initialValues)
          (this.values.get(e)?.jump(this.initialValues[e]),
            (this.latestValues[e] = this.initialValues[e]));
      ((this.current = e),
        ma.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        this.reducedMotionConfig === `never`
          ? (this.shouldReduceMotion = !1)
          : this.reducedMotionConfig === `always`
            ? (this.shouldReduceMotion = !0)
            : (Ca.current || Ta(), (this.shouldReduceMotion = Sa.current)),
        (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
        this.parent?.addChild(this),
        this.update(this.props, this.presenceContext),
        (this.hasBeenMounted = !0));
    }
    unmount() {
      (this.projection && this.projection.unmount(),
        De(this.notifyUpdate),
        De(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this));
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    addChild(e) {
      (this.children.add(e),
        (this.enteringChildren ??= new Set()),
        this.enteringChildren.add(e));
    }
    removeChild(e) {
      (this.children.delete(e),
        this.enteringChildren && this.enteringChildren.delete(e));
    }
    bindToMotionValue(e, t) {
      if (
        (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
        t.accelerate && fr.has(e) && this.current instanceof HTMLElement)
      ) {
        let {
            factory: n,
            keyframes: r,
            times: i,
            ease: a,
            duration: o,
          } = t.accelerate,
          s = new nr({
            element: this.current,
            name: e,
            keyframes: r,
            times: i,
            ease: a,
            duration: w(o),
          }),
          c = n(s);
        this.valueSubscriptions.set(e, () => {
          (c(), s.cancel());
        });
        return;
      }
      let n = An.has(e);
      n && this.onBindTransform && this.onBindTransform();
      let r = t.on(`change`, (t) => {
          ((this.latestValues[e] = t),
            this.props.onUpdate && E.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender());
        }),
        i;
      (typeof window < `u` &&
        window.MotionCheckAppearSync &&
        (i = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          (r(), i && i());
        }));
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = `animation`;
      for (e in Da) {
        let t = Da[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : F();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      ((e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t));
      for (let t = 0; t < Ea.length; t++) {
        let n = Ea[t];
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](),
          delete this.propEventSubscriptions[n]);
        let r = e[`on` + n];
        r && (this.propEventSubscriptions[n] = this.on(n, r));
      }
      ((this.prevMotionValues = xa(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue());
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      (t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState));
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = Tr(t === null ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      let n =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (this.getBaseTargetFromProps(this.props, e) ??
            this.readValueFromInstance(this.current, e, this.options));
      return (
        n != null &&
          (typeof n == `string` && (g(n) || v(n))
            ? (n = parseFloat(n))
            : !ua(n) && yt.test(t) && (n = vi(e, t)),
          this.setBaseTarget(e, N(n) ? n.get() : n)),
        N(n) ? n.get() : n
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      let { initial: t } = this.props,
        n;
      if (typeof t == `string` || typeof t == `object`) {
        let r = Br(this.props, t, this.presenceContext?.custom);
        r && (n = r[e]);
      }
      if (t && n !== void 0) return n;
      let r = this.getBaseTargetFromProps(this.props, e);
      return r !== void 0 && !N(r)
        ? r
        : this.initialValues[e] !== void 0 && n === void 0
          ? void 0
          : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new C()),
        this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
    scheduleRenderMicrotask() {
      Ei.render(this.render);
    }
  },
  ja = class extends Aa {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = xi));
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      let n = e.style;
      return n ? n[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      (delete t[e], delete n[e]);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      N(e) &&
        (this.childSubscription = e.on(`change`, (e) => {
          this.current && (this.current.textContent = `${e}`);
        }));
    }
  },
  Ma = class {
    constructor(e) {
      ((this.isMounted = !1), (this.node = e));
    }
    update() {}
  };
function Na({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Pa({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Fa(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ia(e) {
  return e === void 0 || e === 1;
}
function La({ scale: e, scaleX: t, scaleY: n }) {
  return !Ia(e) || !Ia(t) || !Ia(n);
}
function Ra(e) {
  return (
    La(e) ||
    za(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function za(e) {
  return Ba(e.x) || Ba(e.y);
}
function Ba(e) {
  return e && e !== `0%`;
}
function Va(e, t, n) {
  return n + t * (e - n);
}
function Ha(e, t, n, r, i) {
  return (i !== void 0 && (e = Va(e, i, r)), Va(e, n, r) + t);
}
function Ua(e, t = 0, n = 1, r, i) {
  ((e.min = Ha(e.min, t, n, r, i)), (e.max = Ha(e.max, t, n, r, i)));
}
function Wa(e, { x: t, y: n }) {
  (Ua(e.x, t.translate, t.scale, t.originPoint),
    Ua(e.y, n.translate, n.scale, n.originPoint));
}
var Ga = 0.999999999999,
  Ka = 1.0000000000001;
function qa(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    ((a = n[s]), (o = a.projectionDelta));
    let { visualElement: i } = a.options;
    (i && i.props.style && i.props.style.display === `contents`) ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        (Ja(e.x, -a.scroll.offset.x), Ja(e.y, -a.scroll.offset.y)),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Wa(e, o)),
      r && Ra(a.latestValues) && Za(e, a.latestValues, a.layout?.layoutBox));
  }
  (t.x < Ka && t.x > Ga && (t.x = 1), t.y < Ka && t.y > Ga && (t.y = 1));
}
function Ja(e, t) {
  ((e.min += t), (e.max += t));
}
function Ya(e, t, n, r, i = 0.5) {
  Ua(e, t, n, j(e.min, e.max, i), r);
}
function Xa(e, t) {
  return typeof e == `string` ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function Za(e, t, n) {
  let r = n ?? e;
  (Ya(e.x, Xa(t.x, r.x), t.scaleX, t.scale, t.originX),
    Ya(e.y, Xa(t.y, r.y), t.scaleY, t.scale, t.originY));
}
function Qa(e, t) {
  return Na(Fa(e.getBoundingClientRect(), t));
}
function $a(e, t, n) {
  let r = Qa(e, n),
    { scroll: i } = t;
  return (i && (Ja(r.x, i.offset.x), Ja(r.y, i.offset.y)), r);
}
var eo = {
    x: `translateX`,
    y: `translateY`,
    z: `translateZ`,
    transformPerspective: `perspective`,
  },
  to = kn.length;
function no(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < to; a++) {
    let o = kn[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (typeof s == `number`) c = s === +!!o.startsWith(`scale`);
    else {
      let e = parseFloat(s);
      c = o.startsWith(`scale`) ? e === 1 : e === 0;
    }
    if (!c || n) {
      let e = wi(s, mi[o]);
      if (!c) {
        i = !1;
        let t = eo[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  let a = e.pathRotation;
  return (
    a && ((i = !1), (r += `rotate(${wi(a, mi.pathRotation)}) `)),
    (r = r.trim()),
    n ? (r = n(t, i ? `` : r)) : i && (r = `none`),
    r
  );
}
function ro(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (An.has(e)) {
      o = !0;
      continue;
    } else if (Me(e)) {
      i[e] = n;
      continue;
    } else {
      let t = wi(n, mi[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = no(t, e.transform, n))
        : (r.transform &&= `none`)),
    s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
function io(e, { style: t, vars: n }, r, i) {
  let a = e.style,
    o;
  for (o in t) a[o] = t[o];
  for (o in (i?.applyProjectionStyles(a, r), n)) a.setProperty(o, n[o]);
}
function ao(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var oo = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == `string`)
        if (k.test(e)) e = parseFloat(e);
        else return e;
      return `${ao(e, t.target.x)}% ${ao(e, t.target.y)}%`;
    },
  },
  so = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = yt.parse(e);
      if (i.length > 5) return r;
      let a = yt.createTransformer(e),
        o = typeof i[0] == `number` ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y;
      ((i[0 + o] /= s), (i[1 + o] /= c));
      let l = j(s, c, 0.5);
      return (
        typeof i[2 + o] == `number` && (i[2 + o] /= l),
        typeof i[3 + o] == `number` && (i[3 + o] /= l),
        a(i)
      );
    },
  },
  co = {
    borderRadius: { ...oo, applyTo: [...Si] },
    borderTopLeftRadius: oo,
    borderTopRightRadius: oo,
    borderBottomLeftRadius: oo,
    borderBottomRightRadius: oo,
    boxShadow: so,
  };
function lo(e, { layout: t, layoutId: n }) {
  return (
    An.has(e) ||
    e.startsWith(`origin`) ||
    ((t || n !== void 0) && (!!co[e] || e === `opacity`))
  );
}
function uo(e, t, n) {
  let r = e.style,
    i = t?.style,
    a = {};
  if (!r) return a;
  for (let t in r)
    (N(r[t]) ||
      (i && N(i[t])) ||
      lo(t, e) ||
      n?.getValue(t)?.liveStyle !== void 0) &&
      (a[t] = r[t]);
  return a;
}
function fo(e) {
  return window.getComputedStyle(e);
}
var po = class extends ja {
    constructor() {
      (super(...arguments), (this.type = `html`), (this.renderInstance = io));
    }
    readValueFromInstance(e, t) {
      if (An.has(t)) return this.projection?.isProjecting ? Tn(t) : Dn(e, t);
      {
        let n = fo(e),
          r = (Me(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == `string` ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return Qa(e, t);
    }
    build(e, t, n) {
      ro(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return uo(e, t, n);
    }
  },
  mo = { offset: `stroke-dashoffset`, array: `stroke-dasharray` },
  ho = { offset: `strokeDashoffset`, array: `strokeDasharray` };
function go(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? mo : ho;
  ((e[a.offset] = `${-r}`), (e[a.array] = `${t} ${n}`));
}
var _o = [`offsetDistance`, `offsetPath`, `offsetRotate`, `offsetAnchor`];
function vo(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: a = 1,
    pathOffset: o = 0,
    ...s
  },
  c,
  l,
  u,
) {
  if ((ro(e, s, l), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: d, style: f } = e;
  (d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? `50% 50%`),
      delete d.transformOrigin),
    f.transform &&
      ((f.transformBox = u?.transformBox ?? `fill-box`),
      delete d.transformBox));
  for (let e of _o) d[e] !== void 0 && ((f[e] = d[e]), delete d[e]);
  (t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && go(d, i, a, o, !1));
}
var yo = new Set([
    `baseFrequency`,
    `diffuseConstant`,
    `kernelMatrix`,
    `kernelUnitLength`,
    `keySplines`,
    `keyTimes`,
    `limitingConeAngle`,
    `markerHeight`,
    `markerWidth`,
    `numOctaves`,
    `targetX`,
    `targetY`,
    `surfaceScale`,
    `specularConstant`,
    `specularExponent`,
    `stdDeviation`,
    `tableValues`,
    `viewBox`,
    `gradientTransform`,
    `pathLength`,
    `startOffset`,
    `textLength`,
    `lengthAdjust`,
  ]),
  bo = (e) => typeof e == `string` && e.toLowerCase() === `svg`;
function xo(e, t, n, r) {
  io(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(yo.has(n) ? n : Yr(n), t.attrs[n]);
}
function So(e, t, n) {
  let r = uo(e, t, n);
  for (let n in e)
    if (N(e[n]) || N(t[n])) {
      let t =
        kn.indexOf(n) === -1
          ? n
          : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
var Co = class extends ja {
    constructor() {
      (super(...arguments),
        (this.type = `svg`),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = F));
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (An.has(t)) {
        let e = gi(t);
        return (e && e.default) || 0;
      }
      return ((t = yo.has(t) ? t : Yr(t)), e.getAttribute(t));
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return So(e, t, n);
    }
    build(e, t, n) {
      vo(e, t, this.isSVGTag, n.transformTemplate, n.style);
    }
    renderInstance(e, t, n, r) {
      xo(e, t, n, r);
    }
    mount(e) {
      ((this.isSVGTag = bo(e.tagName)), super.mount(e));
    }
  },
  wo = va.length;
function To(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = (e.parent && To(e.parent)) || {};
    return (e.props.initial !== void 0 && (t.initial = e.props.initial), t);
  }
  let t = {};
  for (let n = 0; n < wo; n++) {
    let r = va[n],
      i = e.props[r];
    (ga(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function Eo(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
var Do = [..._a].reverse(),
  Oo = _a.length;
function ko(e) {
  return (t) =>
    Promise.all(t.map(({ animation: t, options: n }) => ni(e, t, n)));
}
function Ao(e) {
  let t = ko(e),
    n = No(),
    r = !0,
    i = !1,
    a = (t) => (n, r) => {
      let i = Vr(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
      if (i) {
        let { transition: e, transitionEnd: t, ...r } = i;
        n = { ...n, ...r, ...t };
      }
      return n;
    };
  function o(n) {
    t = n(e);
  }
  function s(o) {
    let { props: s } = e,
      c = To(e.parent) || {},
      l = [],
      u = new Set(),
      d = {},
      f = 1 / 0;
    for (let t = 0; t < Oo; t++) {
      let p = Do[t],
        m = n[p],
        h = s[p] === void 0 ? c[p] : s[p],
        g = ga(h),
        _ = p === o ? m.isActive : null;
      _ === !1 && (f = t);
      let v = h === c[p] && h !== s[p] && g;
      if (
        (v && (r || i) && e.manuallyAnimateOnMount && (v = !1),
        (m.protectedKeys = { ...d }),
        (!m.isActive && _ === null) ||
          (!h && !m.prevProp) ||
          ha(h) ||
          typeof h == `boolean`)
      )
        continue;
      if (p === `exit` && m.isActive && _ !== !0) {
        m.prevResolvedValues && (d = { ...d, ...m.prevResolvedValues });
        continue;
      }
      let y = jo(m.prevProp, h),
        b = y || (p === o && m.isActive && !v && g) || (t > f && g),
        x = !1,
        S = Array.isArray(h) ? h : [h],
        C = S.reduce(a(p), {});
      _ === !1 && (C = {});
      let { prevResolvedValues: w = {} } = m,
        T = { ...w, ...C },
        ee = (t) => {
          ((b = !0),
            u.has(t) && ((x = !0), u.delete(t)),
            (m.needsAnimating[t] = !0));
          let n = e.getValue(t);
          n && (n.liveStyle = !1);
        };
      for (let e in T) {
        let t = C[e],
          n = w[e];
        if (d.hasOwnProperty(e)) continue;
        let r = !1;
        ((r = Ur(t) && Ur(n) ? !Eo(t, n) || y : t !== n),
          r
            ? t == null
              ? u.add(e)
              : ee(e)
            : t !== void 0 && u.has(e)
              ? ee(e)
              : (m.protectedKeys[e] = !0));
      }
      ((m.prevProp = h),
        (m.prevResolvedValues = C),
        m.isActive && (d = { ...d, ...C }),
        (r || i) && e.blockInitialAnimation && (b = !1));
      let te = v && y;
      b &&
        (!te || x) &&
        l.push(
          ...S.map((t) => {
            let n = { type: p };
            if (
              typeof t == `string` &&
              (r || i) &&
              !te &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              let { parent: r } = e,
                i = Vr(r, t);
              if (r.enteringChildren && i) {
                let { delayChildren: t } = i.transition || {};
                n.delay = br(r.enteringChildren, e, t);
              }
            }
            return { animation: t, options: n };
          }),
        );
    }
    if (u.size) {
      let t = {};
      if (typeof s.initial != `boolean`) {
        let n = Vr(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
        n && n.transition && (t.transition = n.transition);
      }
      (u.forEach((n) => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n);
        (i && (i.liveStyle = !0), (t[n] = r ?? null));
      }),
        l.push({ animation: t }));
    }
    let p = !!l.length;
    return (
      r &&
        (s.initial === !1 || s.initial === s.animate) &&
        !e.manuallyAnimateOnMount &&
        (p = !1),
      (r = !1),
      (i = !1),
      p ? t(l) : Promise.resolve()
    );
  }
  function c(t, r) {
    if (n[t].isActive === r) return Promise.resolve();
    (e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)),
      (n[t].isActive = r));
    let i = s(t);
    for (let e in n) n[e].protectedKeys = {};
    return i;
  }
  return {
    animateChanges: s,
    setActive: c,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ((n = No()), (i = !0));
    },
  };
}
function jo(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !Eo(t, e) : !1;
}
function Mo(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function No() {
  return {
    animate: Mo(!0),
    whileInView: Mo(),
    whileHover: Mo(),
    whileTap: Mo(),
    whileDrag: Mo(),
    whileFocus: Mo(),
    exit: Mo(),
  };
}
function Po(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Fo(e, t) {
  (Po(e.x, t.x), Po(e.y, t.y));
}
function Io(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
var Lo = 0.9999,
  Ro = 1.0001,
  zo = -0.01,
  Bo = 0.01;
function I(e) {
  return e.max - e.min;
}
function Vo(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Ho(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = j(t.min, t.max, e.origin)),
    (e.scale = I(n) / I(t)),
    (e.translate = j(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Lo && e.scale <= Ro) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= zo && e.translate <= Bo) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Uo(e, t, n, r) {
  (Ho(e.x, t.x, n.x, r ? r.originX : void 0),
    Ho(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Wo(e, t, n, r = 0) {
  ((e.min = (r ? j(n.min, n.max, r) : n.min) + t.min), (e.max = e.min + I(t)));
}
function Go(e, t, n, r) {
  (Wo(e.x, t.x, n.x, r?.x), Wo(e.y, t.y, n.y, r?.y));
}
function Ko(e, t, n, r = 0) {
  let i = r ? j(n.min, n.max, r) : n.min;
  ((e.min = t.min - i), (e.max = e.min + I(t)));
}
function qo(e, t, n, r) {
  (Ko(e.x, t.x, n.x, r?.x), Ko(e.y, t.y, n.y, r?.y));
}
function Jo(e, t, n, r, i) {
  return (
    (e -= t),
    (e = Va(e, 1 / n, r)),
    i !== void 0 && (e = Va(e, 1 / i, r)),
    e
  );
}
function Yo(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    ($e.test(t) &&
      ((t = parseFloat(t)), (t = j(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = j(a.min, a.max, r);
  (e === a && (s -= t),
    (e.min = Jo(e.min, t, n, s, i)),
    (e.max = Jo(e.max, t, n, s, i)));
}
function Xo(e, t, [n, r, i], a, o) {
  Yo(e, t[n], t[r], t[i], t.scale, a, o);
}
var Zo = [`x`, `scaleX`, `originX`],
  Qo = [`y`, `scaleY`, `originY`];
function $o(e, t, n, r) {
  (Xo(e.x, t, Zo, n ? n.x : void 0, r ? r.x : void 0),
    Xo(e.y, t, Qo, n ? n.y : void 0, r ? r.y : void 0));
}
function es(e) {
  return e.translate === 0 && e.scale === 1;
}
function ts(e) {
  return es(e.x) && es(e.y);
}
function ns(e, t) {
  return e.min === t.min && e.max === t.max;
}
function rs(e, t) {
  return ns(e.x, t.x) && ns(e.y, t.y);
}
function is(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function as(e, t) {
  return is(e.x, t.x) && is(e.y, t.y);
}
function os(e) {
  return I(e.x) / I(e.y);
}
function ss(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function cs(e) {
  return [e(`x`), e(`y`)];
}
function ls(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: e,
      rotate: t,
      pathRotation: i,
      rotateX: a,
      rotateY: o,
      skewX: s,
      skewY: c,
    } = n;
    (e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotate(${i}deg) `),
      a && (r += `rotateX(${a}deg) `),
      o && (r += `rotateY(${o}deg) `),
      s && (r += `skewX(${s}deg) `),
      c && (r += `skewY(${c}deg) `));
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`);
}
var us = Si.length,
  ds = (e) => (typeof e == `string` ? parseFloat(e) : e),
  fs = (e) => typeof e == `number` || k.test(e);
function ps(e, t, n, r, i, a) {
  i
    ? ((e.opacity = j(0, n.opacity ?? 1, hs(r))),
      (e.opacityExit = j(t.opacity ?? 1, 0, gs(r))))
    : a && (e.opacity = j(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let i = 0; i < us; i++) {
    let a = Si[i],
      o = ms(t, a),
      s = ms(n, a);
    (o === void 0 && s === void 0) ||
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || fs(o) === fs(s)
        ? ((e[a] = Math.max(j(ds(o), ds(s), r), 0)),
          ($e.test(s) || $e.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = j(t.rotate || 0, n.rotate || 0, r));
}
function ms(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
var hs = _s(0, 0.5, pe),
  gs = _s(0.5, 0.95, b);
function _s(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(S(e, t, r)));
}
function vs(e, t, n) {
  let r = N(e) ? e : Tr(e);
  return (r.start(Fr(``, r, t, n)), r.animation);
}
function ys(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r));
}
var bs = (e, t) => e.depth - t.depth,
  xs = class {
    constructor() {
      ((this.children = []), (this.isDirty = !1));
    }
    add(e) {
      (f(this.children, e), (this.isDirty = !0));
    }
    remove(e) {
      (p(this.children, e), (this.isDirty = !0));
    }
    forEach(e) {
      (this.isDirty && this.children.sort(bs),
        (this.isDirty = !1),
        this.children.forEach(e));
    }
  };
function Ss(e, t) {
  let n = O.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (De(r), e(a - t));
    };
  return (E.setup(r, !0), () => De(r));
}
function Cs(e) {
  return N(e) ? e.get() : e;
}
var ws = class {
    constructor() {
      this.members = [];
    }
    add(e) {
      f(this.members, e);
      for (let t = this.members.length - 1; t >= 0; t--) {
        let n = this.members[t];
        if (n === e || n === this.lead || n === this.prevLead) continue;
        let r = n.instance;
        (!r || r.isConnected === !1) &&
          !n.snapshot &&
          (p(this.members, n), n.unmount());
      }
      e.scheduleRender();
    }
    remove(e) {
      if (
        (p(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead)
      ) {
        let e = this.members[this.members.length - 1];
        e && this.promote(e);
      }
    }
    relegate(e) {
      for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
        let e = this.members[t];
        if (e.isPresent !== !1 && e.instance?.isConnected !== !1)
          return (this.promote(e), !0);
      }
      return !1;
    }
    promote(e, t) {
      let n = this.lead;
      if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
        (n.updateSnapshot(), e.scheduleRender());
        let { layoutDependency: r } = n.options,
          { layoutDependency: i } = e.options;
        ((r === void 0 || r !== i) &&
          ((e.resumeFrom = n),
          t && (n.preserveOpacity = !0),
          n.snapshot &&
            ((e.snapshot = n.snapshot),
            (e.snapshot.latestValues = n.animationValues || n.latestValues)),
          e.root?.isUpdating && (e.isLayoutDirty = !0)),
          e.options.crossfade === !1 && n.hide());
      }
    }
    exitAnimationComplete() {
      this.members.forEach((e) => {
        (e.options.onExitComplete?.(),
          e.resumingFrom?.options.onExitComplete?.());
      });
    }
    scheduleRender() {
      this.members.forEach((e) => e.instance && e.scheduleRender(!1));
    }
    removeLeadSnapshot() {
      this.lead?.snapshot && (this.lead.snapshot = void 0);
    }
  },
  Ts = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Es = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 },
  Ds = [``, `X`, `Y`, `Z`],
  Os = 1e3,
  ks = 0;
function As(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function js(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = Zr(t);
  if (window.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    window.MotionCancelOptimisedAnimation(n, `transform`, E, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && js(r);
}
function Ms({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ((this.id = ks++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            sa.value &&
              (Es.nodes =
                Es.calculatedTargetDeltas =
                Es.calculatedProjections =
                  0),
            this.nodes.forEach(Fs),
            this.nodes.forEach(Ws),
            this.nodes.forEach(Gs),
            this.nodes.forEach(Is),
            sa.addProjectionMetrics && sa.addProjectionMetrics(Es));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0));
      for (let e = 0; e < this.path.length; e++)
        this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new xs());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new C()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t) {
      if (this.instance) return;
      ((this.isSVG = Ki(t) && !ca(t)), (this.instance = t));
      let { layoutId: n, layout: r, visualElement: i } = this.options;
      if (
        (i && !i.current && i.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = 0,
          i = () => (this.root.updateBlockedByResize = !1);
        (E.read(() => {
          r = window.innerWidth;
        }),
          e(t, () => {
            let e = window.innerWidth;
            e !== r &&
              ((r = e),
              (this.root.updateBlockedByResize = !0),
              n && n(),
              (n = Ss(i, 250)),
              Ts.hasAnimatedSinceResize &&
                ((Ts.hasAnimatedSinceResize = !1), this.nodes.forEach(Us)));
          }));
      }
      (n && this.root.registerSharedNode(n, this),
        this.options.animate !== !1 &&
          i &&
          (n || r) &&
          this.addEventListener(
            `didUpdate`,
            ({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeLayoutChanged: n,
              layout: r,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let a = this.options.transition || i.getDefaultTransition() || Qs,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } =
                  i.getProps(),
                c = !this.targetLayout || !as(this.targetLayout, r),
                l = !t && n;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                let t = { ...Dr(a, `layout`), onPlay: o, onComplete: s };
                ((i.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t),
                  this.setAnimationOrigin(e, l, t.path));
              } else
                (t || Us(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = r;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      let e = this.getStack();
      (e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        De(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Ks),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          js(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        ((t.shouldResetTransform = !0),
          (typeof t.latestValues.x == `string` ||
            typeof t.latestValues.y == `string`) &&
            (t.isLayoutDirty = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1));
      }
      let { layoutId: t, layout: n } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = r
        ? r(this.latestValues, ``)
        : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        let e = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          e && this.nodes.forEach(zs),
          this.nodes.forEach(Rs));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Bs);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Vs),
            this.nodes.forEach(Hs),
            this.nodes.forEach(Ns),
            this.nodes.forEach(Ps))
          : this.nodes.forEach(Bs),
        this.clearAllSnapshots());
      let e = O.now();
      ((D.delta = m(0, 1e3 / 60, e - D.timestamp)),
        (D.timestamp = e),
        (D.isProcessing = !0),
        Oe.update.process(D),
        Oe.preRender.process(D),
        Oe.render.process(D),
        (D.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Ei.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Ls), this.sharedNodes.forEach(qs));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        E.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      E.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !I(this.snapshot.measuredBox.x) &&
          !I(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected ||= F()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox));
      let { visualElement: t } = this.options;
      t &&
        t.notify(
          `LayoutMeasure`,
          this.layout.layoutBox,
          e ? e.layoutBox : void 0,
        );
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t && this.instance)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !ts(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        this.instance &&
        (t || Ra(this.latestValues) || a) &&
        (i(this.instance, r),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        nc(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: e } = this.options;
      if (!e) return F();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(ic))) {
        let { scroll: e } = this.root;
        e && (Ja(t.x, e.offset.x), Ja(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = F();
      if ((Fo(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && Fo(t, e), Ja(t.x, i.offset.x), Ja(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1, n) {
      let r = n || F();
      Fo(r, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        (!t &&
          n.options.layoutScroll &&
          n.scroll &&
          n !== n.root &&
          (Ja(r.x, -n.scroll.offset.x), Ja(r.y, -n.scroll.offset.y)),
          Ra(n.latestValues) && Za(r, n.latestValues, n.layout?.layoutBox));
      }
      return (
        Ra(this.latestValues) &&
          Za(r, this.latestValues, this.layout?.layoutBox),
        r
      );
    }
    removeTransform(e) {
      let t = F();
      Fo(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!Ra(n.latestValues)) continue;
        let r;
        (n.instance &&
          (La(n.latestValues) && n.updateSnapshot(),
          (r = F()),
          Fo(r, n.measurePageBox())),
          $o(t, n.latestValues, n.snapshot?.layoutBox, r));
      }
      return (Ra(this.latestValues) && $o(t, this.latestValues), t);
    }
    setTargetDelta(e) {
      ((this.targetDelta = e),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: e.crossfade === void 0 ? !0 : e.crossfade,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== D.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      ((this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty));
      let n = !!this.resumingFrom || this !== t;
      if (
        !(
          e ||
          (n && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (!this.layout || !(r || i)) return;
      this.resolvedRelativeTargetAt = D.timestamp;
      let a = this.getClosestProjectingParent();
      (a &&
        this.linkedParentVersion !== a.layoutVersion &&
        !a.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && a && a.layout
            ? this.createRelativeTarget(
                a,
                this.layout.layoutBox,
                a.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = F()), (this.targetWithTransforms = F())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Go(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : Fo(this.target, this.layout.layoutBox),
                Wa(this.target, this.targetDelta))
              : Fo(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            a &&
            !!a.resumingFrom == !!this.resumingFrom &&
            !a.options.layoutScroll &&
            a.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(a, this.target, a.target)
              : (this.relativeParent = this.relativeTarget = void 0)),
          sa.value && Es.calculatedTargetDeltas++));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          La(this.parent.latestValues) ||
          za(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(e, t, n) {
      ((this.relativeParent = e),
        (this.linkedParentVersion = e.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = F()),
        (this.relativeTargetOrigin = F()),
        qo(
          this.relativeTargetOrigin,
          t,
          n,
          this.options.layoutAnchor || void 0,
        ),
        Fo(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (n = !1),
        this.resolvedRelativeTargetAt === D.timestamp && (n = !1),
        n)
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return;
      Fo(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      (qa(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = F())));
      let { target: s } = e;
      if (!s) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Io(this.prevProjectionDelta.x, this.projectionDelta.x),
          Io(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Uo(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== o ||
          !ss(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !ss(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners(`projectionUpdate`, s)),
        sa.value && Es.calculatedProjections++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      if ((this.options.visualElement?.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = fa()),
        (this.projectionDelta = fa()),
        (this.projectionDeltaWithTransform = fa()));
    }
    setAnimationOrigin(e, t = !1, n) {
      let r = this.snapshot,
        i = r ? r.latestValues : {},
        a = { ...this.latestValues },
        o = fa();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let s = F(),
        c =
          (r ? r.source : void 0) !==
          (this.layout ? this.layout.source : void 0),
        l = this.getStack(),
        u = !l || l.members.length <= 1,
        d = !!(c && !u && this.options.crossfade === !0 && !this.path.some(Zs));
      this.animationProgress = 0;
      let f,
        p = n?.interpolateProjection(e);
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3,
          r = p?.(n);
        (r
          ? ((o.x.translate = r.x),
            (o.x.scale = j(e.x.scale, 1, n)),
            (o.x.origin = e.x.origin),
            (o.x.originPoint = e.x.originPoint),
            (o.y.translate = r.y),
            (o.y.scale = j(e.y.scale, 1, n)),
            (o.y.origin = e.y.origin),
            (o.y.originPoint = e.y.originPoint))
          : (Js(o.x, e.x, n), Js(o.y, e.y, n)),
          this.setTargetDelta(o),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (qo(
              s,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            Xs(this.relativeTarget, this.relativeTargetOrigin, s, n),
            f && rs(this.relativeTarget, f) && (this.isProjectionDirty = !1),
            (f ||= F()),
            Fo(f, this.relativeTarget)),
          c &&
            ((this.animationValues = a), ps(a, i, this.latestValues, n, d, u)),
          r &&
            r.rotate !== void 0 &&
            ((this.animationValues ||= a),
            (this.animationValues.pathRotation = r.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(e) {
      (this.notifyListeners(`animationStart`),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        (this.pendingAnimation &&= (De(this.pendingAnimation), void 0)),
        (this.pendingAnimation = E.update(() => {
          ((Ts.hasAnimatedSinceResize = !0),
            (this.motionValue ||= Tr(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = vs(this.motionValue, [0, 1e3], {
              ...e,
              velocity: 0,
              isSync: !0,
              onUpdate: (t) => {
                (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
              },
              onComplete: () => {
                (e.onComplete && e.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      (e && e.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners(`animationComplete`));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Os),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
      if (!(!t || !n || !r)) {
        if (
          this !== e &&
          this.layout &&
          r &&
          rc(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || F();
          let t = I(this.layout.layoutBox.x);
          ((n.x.min = e.target.x.min), (n.x.max = n.x.min + t));
          let r = I(this.layout.layoutBox.y);
          ((n.y.min = e.target.y.min), (n.y.max = n.y.min + r));
        }
        (Fo(t, n),
          Za(t, i),
          Uo(this.projectionDeltaWithTransform, this.layoutCorrected, t, i));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new ws()),
        this.sharedNodes.get(e).add(t));
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity
            ? n.shouldPreserveFollowOpacity(t)
            : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return e ? e.lead === this : !0;
    }
    getLead() {
      let { layoutId: e } = this.options;
      return (e && this.getStack()?.lead) || this;
    }
    getPrevLead() {
      let { layoutId: e } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      (r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t }));
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z ||
          n.rotate ||
          n.rotateX ||
          n.rotateY ||
          n.rotateZ ||
          n.skewX ||
          n.skewY) &&
          (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && As(`z`, e, r, this.animationValues);
      for (let t = 0; t < Ds.length; t++)
        (As(`rotate${Ds[t]}`, e, r, this.animationValues),
          As(`skew${Ds[t]}`, e, r, this.animationValues));
      e.render();
      for (let t in r)
        (e.setStaticValue(t, r[t]),
          this.animationValues && (this.animationValues[t] = r[t]));
      e.scheduleRender();
    }
    applyProjectionStyles(e, t) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        e.visibility = `hidden`;
        return;
      }
      let n = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (e.visibility = ``),
          (e.opacity = ``),
          (e.pointerEvents = Cs(t?.pointerEvents) || ``),
          (e.transform = n ? n(this.latestValues, ``) : `none`));
        return;
      }
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        (this.options.layoutId &&
          ((e.opacity =
            this.latestValues.opacity === void 0
              ? 1
              : this.latestValues.opacity),
          (e.pointerEvents = Cs(t?.pointerEvents) || ``)),
          this.hasProjected &&
            !Ra(this.latestValues) &&
            ((e.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)));
        return;
      }
      e.visibility = ``;
      let i = r.animationValues || r.latestValues;
      this.applyTransformsToTarget();
      let a = ls(this.projectionDeltaWithTransform, this.treeScale, i);
      (n && (a = n(i, a)), (e.transform = a));
      let { x: o, y: s } = this.projectionDelta;
      ((e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`),
        r.animationValues
          ? (e.opacity =
              r === this
                ? (i.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : i.opacityExit)
          : (e.opacity =
              r === this
                ? i.opacity === void 0
                  ? ``
                  : i.opacity
                : i.opacityExit === void 0
                  ? 0
                  : i.opacityExit));
      for (let t in co) {
        if (i[t] === void 0) continue;
        let { correct: n, applyTo: o, isCSSVariable: s } = co[t],
          c = a === `none` ? i[t] : n(i[t], r);
        if (o) {
          let t = o.length;
          for (let n = 0; n < t; n++) e[o[n]] = c;
        } else
          s ? (this.options.visualElement.renderState.vars[t] = c) : (e[t] = c);
      }
      this.options.layoutId &&
        (e.pointerEvents = r === this ? Cs(t?.pointerEvents) || `` : `none`);
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(Rs),
        this.root.sharedNodes.clear());
    }
  };
}
function Ns(e) {
  e.updateLayout();
}
function Ps(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    if (i === `size`)
      cs((e) => {
        let r = a ? t.measuredBox[e] : t.layoutBox[e],
          i = I(r);
        ((r.min = n[e].min), (r.max = r.min + i));
      });
    else if (i === `x` || i === `y`) {
      let e = i === `x` ? `y` : `x`;
      Po(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
    } else
      rc(i, t.layoutBox, n) &&
        cs((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = I(n[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = fa();
    Uo(o, n, t.layoutBox);
    let s = fa();
    a ? Uo(s, e.applyTransform(r, !0), t.measuredBox) : Uo(s, n, t.layoutBox);
    let c = !ts(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = e.options.layoutAnchor || void 0,
            s = F();
          qo(s, t.layoutBox, i.layoutBox, o);
          let c = F();
          (qo(c, n, a.layoutBox, o),
            as(s, c) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = c),
              (e.relativeTargetOrigin = s),
              (e.relativeParent = r)));
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: l,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function Fs(e) {
  (sa.value && Es.nodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)));
}
function Is(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Ls(e) {
  e.clearSnapshot();
}
function Rs(e) {
  e.clearMeasurements();
}
function zs(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function Bs(e) {
  e.isLayoutDirty = !1;
}
function Vs(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function Hs(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`),
    e.resetTransform());
}
function Us(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function Ws(e) {
  e.resolveTargetDelta();
}
function Gs(e) {
  e.calcProjection();
}
function Ks(e) {
  e.resetSkewAndRotation();
}
function qs(e) {
  e.removeLeadSnapshot();
}
function Js(e, t, n) {
  ((e.translate = j(t.translate, 0, n)),
    (e.scale = j(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Ys(e, t, n, r) {
  ((e.min = j(t.min, n.min, r)), (e.max = j(t.max, n.max, r)));
}
function Xs(e, t, n, r) {
  (Ys(e.x, t.x, n.x, r), Ys(e.y, t.y, n.y, r));
}
function Zs(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Qs = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  $s = (e) =>
    typeof navigator < `u` &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  ec = $s(`applewebkit/`) && !$s(`chrome/`) ? Math.round : b;
function tc(e) {
  ((e.min = ec(e.min)), (e.max = ec(e.max)));
}
function nc(e) {
  (tc(e.x), tc(e.y));
}
function rc(e, t, n) {
  return (
    e === `position` || (e === `preserve-aspect` && !Vo(os(t), os(n), 0.2))
  );
}
function ic(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
var ac = Ms({
    attachResizeListener: (e, t) => ys(e, `resize`, t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  oc = { current: void 0 },
  sc = Ms({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!oc.current) {
        let e = new ac({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (oc.current = e));
      }
      return oc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t === void 0 ? `none` : t;
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === `fixed`,
  }),
  cc = (0, s.createContext)({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: `never`,
  });
function lc(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function uc(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = lc(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : lc(e[t], null);
        }
      };
  };
}
function dc(...e) {
  return s.useCallback(uc(...e), e);
}
var L = o(),
  fc = class extends s.Component {
    getSnapshotBeforeUpdate(e) {
      let t = this.props.childRef.current;
      if (
        Ti(t) &&
        e.isPresent &&
        !this.props.isPresent &&
        this.props.pop !== !1
      ) {
        let e = t.offsetParent,
          n = (Ti(e) && e.offsetWidth) || 0,
          r = (Ti(e) && e.offsetHeight) || 0,
          i = getComputedStyle(t),
          a = this.props.sizeRef.current;
        ((a.height = parseFloat(i.height)),
          (a.width = parseFloat(i.width)),
          (a.top = t.offsetTop),
          (a.left = t.offsetLeft),
          (a.right = n - a.width - a.left),
          (a.bottom = r - a.height - a.top),
          (a.direction = i.direction));
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  };
function pc({
  children: e,
  isPresent: t,
  anchorX: n,
  anchorY: r,
  root: i,
  pop: a,
}) {
  let o = (0, s.useId)(),
    c = (0, s.useRef)(null),
    l = (0, s.useRef)({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: `ltr`,
    }),
    { nonce: u } = (0, s.useContext)(cc),
    d = dc(c, e.props?.ref ?? e?.ref);
  return (
    (0, s.useInsertionEffect)(() => {
      let {
        width: e,
        height: s,
        top: d,
        left: f,
        right: p,
        bottom: m,
        direction: h,
      } = l.current;
      if (t || a === !1 || !c.current || !e || !s) return;
      let g = h === `rtl`,
        _ =
          n === `left`
            ? g
              ? `right: ${p}`
              : `left: ${f}`
            : g
              ? `left: ${f}`
              : `right: ${p}`,
        v = r === `bottom` ? `bottom: ${m}` : `top: ${d}`;
      c.current.dataset.motionPopId = o;
      let y = document.createElement(`style`);
      u && (y.nonce = u);
      let b = i ?? document.head;
      return (
        b.appendChild(y),
        y.sheet &&
          y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${s}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),
        () => {
          (c.current?.removeAttribute(`data-motion-pop-id`),
            b.contains(y) && b.removeChild(y));
        }
      );
    }, [t]),
    (0, L.jsx)(fc, {
      isPresent: t,
      childRef: c,
      sizeRef: l,
      pop: a,
      children: a === !1 ? e : s.cloneElement(e, { ref: d }),
    })
  );
}
var mc = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: a,
  mode: o,
  anchorX: c,
  anchorY: f,
  root: p,
}) => {
  let m = l(hc),
    h = (0, s.useId)(),
    g = (0, s.useRef)(n),
    _ = (0, s.useRef)(r);
  u(() => {
    ((g.current = n), (_.current = r));
  });
  let v = !0,
    y = (0, s.useMemo)(
      () => (
        (v = !1),
        {
          id: h,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (e) => {
            m.set(e, !0);
            for (let e of m.values()) if (!e) return;
            r && r();
          },
          register: (e) => (
            m.set(e, !1),
            () => {
              (m.delete(e), !g.current && !m.size && _.current?.());
            }
          ),
        }
      ),
      [n, m, r],
    );
  return (
    a && v && (y = { ...y }),
    (0, s.useMemo)(() => {
      m.forEach((e, t) => m.set(t, !1));
    }, [n]),
    s.useEffect(() => {
      !n && !m.size && r && r();
    }, [n]),
    (e = (0, L.jsx)(pc, {
      pop: o === `popLayout`,
      isPresent: n,
      anchorX: c,
      anchorY: f,
      root: p,
      children: e,
    })),
    (0, L.jsx)(d.Provider, { value: y, children: e })
  );
};
function hc() {
  return new Map();
}
function gc(e = !0) {
  let t = (0, s.useContext)(d);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: r, register: i } = t,
    a = (0, s.useId)();
  (0, s.useEffect)(() => {
    if (e) return i(a);
  }, [e]);
  let o = (0, s.useCallback)(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, o] : [!0];
}
var _c = (e) => e.key || ``;
function vc(e) {
  let t = [];
  return (
    s.Children.forEach(e, (e) => {
      (0, s.isValidElement)(e) && t.push(e);
    }),
    t
  );
}
var yc = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: a = `sync`,
    propagate: o = !1,
    anchorX: d = `left`,
    anchorY: f = `top`,
    root: p,
  }) => {
    let [m, h] = gc(o),
      g = (0, s.useMemo)(() => vc(e), [e]),
      _ = o && !m ? [] : g.map(_c),
      v = (0, s.useRef)(!0),
      y = (0, s.useRef)(g),
      b = l(() => new Map()),
      x = (0, s.useRef)(new Set()),
      [S, C] = (0, s.useState)(g),
      [w, T] = (0, s.useState)(g);
    u(() => {
      ((v.current = !1), (y.current = g));
      for (let e = 0; e < w.length; e++) {
        let t = _c(w[e]);
        _.includes(t)
          ? (b.delete(t), x.current.delete(t))
          : b.get(t) !== !0 && b.set(t, !1);
      }
    }, [w, _.length, _.join(`-`)]);
    let ee = [];
    if (g !== S) {
      let e = [...g];
      for (let t = 0; t < w.length; t++) {
        let n = w[t],
          r = _c(n);
        _.includes(r) || (e.splice(t, 0, n), ee.push(n));
      }
      return (a === `wait` && ee.length && (e = ee), T(vc(e)), C(g), null);
    }
    let { forceRender: te } = (0, s.useContext)(c);
    return (0, L.jsx)(L.Fragment, {
      children: w.map((e) => {
        let s = _c(e),
          c = o && !m ? !1 : g === w || _.includes(s);
        return (0, L.jsx)(
          mc,
          {
            isPresent: c,
            initial: !v.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: i,
            mode: a,
            root: p,
            onExitComplete: c
              ? void 0
              : () => {
                  if (x.current.has(s)) return;
                  if (b.has(s)) (x.current.add(s), b.set(s, !0));
                  else return;
                  let e = !0;
                  (b.forEach((t) => {
                    t || (e = !1);
                  }),
                    e && (te?.(), T(y.current), o && h?.(), r && r()));
                },
            anchorX: d,
            anchorY: f,
            children: e,
          },
          s,
        );
      }),
    });
  },
  bc = (0, s.createContext)({ strict: !1 }),
  xc = {
    animation: [
      `animate`,
      `variants`,
      `whileHover`,
      `whileTap`,
      `exit`,
      `whileInView`,
      `whileFocus`,
      `whileDrag`,
    ],
    exit: [`exit`],
    drag: [`drag`, `dragControls`],
    focus: [`whileFocus`],
    hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
    tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
    pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
    inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
    layout: [`layout`, `layoutId`],
  },
  Sc = !1;
function Cc() {
  if (Sc) return;
  let e = {};
  for (let t in xc) e[t] = { isEnabled: (e) => xc[t].some((t) => !!e[t]) };
  (Oa(e), (Sc = !0));
}
function wc() {
  return (Cc(), ka());
}
function Tc(e) {
  let t = wc();
  for (let n in e) t[n] = { ...t[n], ...e[n] };
  Oa(t);
}
var Ec = new Set(
  `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(
    `.`,
  ),
);
function Dc(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    Ec.has(e)
  );
}
var Oc = e({ default: () => kc }),
  kc,
  Ac = t(() => {
    throw (
      (kc = {}),
      Error(
        `Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`,
      )
    );
  }),
  jc = (e) => !Dc(e);
function Mc(e) {
  typeof e == `function` && (jc = (t) => (t.startsWith(`on`) ? !Dc(t) : e(t)));
}
try {
  Mc((Ac(), r(Oc)).default);
} catch {}
function Nc(e, t, n) {
  let r = {};
  for (let i in e)
    (i === `values` && typeof e.values == `object`) ||
      N(e[i]) ||
      ((jc(i) ||
        (n === !0 && Dc(i)) ||
        (!t && !Dc(i)) ||
        (e.draggable && i.startsWith(`onDrag`))) &&
        (r[i] = e[i]));
  return r;
}
var Pc = (0, s.createContext)({});
function Fc(e, t) {
  if (ya(e)) {
    let { initial: t, animate: n } = e;
    return {
      initial: t === !1 || ga(t) ? t : void 0,
      animate: ga(n) ? n : void 0,
    };
  }
  return e.inherit === !1 ? {} : t;
}
function Ic(e) {
  let { initial: t, animate: n } = Fc(e, (0, s.useContext)(Pc));
  return (0, s.useMemo)(() => ({ initial: t, animate: n }), [Lc(t), Lc(n)]);
}
function Lc(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
var Rc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function zc(e, t, n) {
  for (let r in t) !N(t[r]) && !lo(r, n) && (e[r] = t[r]);
}
function Bc({ transformTemplate: e }, t) {
  return (0, s.useMemo)(() => {
    let n = Rc();
    return (ro(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function Vc(e, t) {
  let n = e.style || {},
    r = {};
  return (zc(r, n, e), Object.assign(r, Bc(e, t)), r);
}
function Hc(e, t) {
  let n = {},
    r = Vc(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction =
        e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
var Uc = () => ({ ...Rc(), attrs: {} });
function Wc(e, t, n, r) {
  let i = (0, s.useMemo)(() => {
    let n = Uc();
    return (
      vo(n, t, bo(r), e.transformTemplate, e.style),
      { ...n.attrs, style: { ...n.style } }
    );
  }, [t]);
  if (e.style) {
    let t = {};
    (zc(t, e.style, e), (i.style = { ...t, ...i.style }));
  }
  return i;
}
var Gc = [
  `animate`,
  `circle`,
  `defs`,
  `desc`,
  `ellipse`,
  `g`,
  `image`,
  `line`,
  `filter`,
  `marker`,
  `mask`,
  `metadata`,
  `path`,
  `pattern`,
  `polygon`,
  `polyline`,
  `rect`,
  `stop`,
  `switch`,
  `symbol`,
  `svg`,
  `text`,
  `tspan`,
  `use`,
  `view`,
];
function Kc(e) {
  return typeof e != `string` || e.includes(`-`)
    ? !1
    : !!(Gc.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function qc(e, t, n, { latestValues: r }, i, a = !1, o) {
  let c = ((o ?? Kc(e)) ? Wc : Hc)(t, r, i, e),
    l = Nc(t, typeof e == `string`, a),
    u = e === s.Fragment ? {} : { ...l, ...c, ref: n },
    { children: d } = t,
    f = (0, s.useMemo)(() => (N(d) ? d.get() : d), [d]);
  return (0, s.createElement)(e, { ...u, children: f });
}
function Jc({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: Yc(n, r, i, e), renderState: t() };
}
function Yc(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = Cs(a[e]);
  let { initial: o, animate: s } = e,
    c = ya(e),
    l = ba(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !ha(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = Br(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
var Xc = (e) => (t, n) => {
    let r = (0, s.useContext)(Pc),
      i = (0, s.useContext)(d),
      a = () => Jc(e, t, r, i);
    return n ? a() : l(a);
  },
  Zc = Xc({ scrapeMotionValuesFromProps: uo, createRenderState: Rc }),
  Qc = Xc({ scrapeMotionValuesFromProps: So, createRenderState: Uc }),
  $c = Symbol.for(`motionComponentSymbol`);
function el(e, t, n) {
  let r = (0, s.useRef)(n);
  (0, s.useInsertionEffect)(() => {
    r.current = n;
  });
  let i = (0, s.useRef)(null);
  return (0, s.useCallback)(
    (n) => {
      (n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount()));
      let a = r.current;
      if (typeof a == `function`)
        if (n) {
          let e = a(n);
          typeof e == `function` && (i.current = e);
        } else i.current ? (i.current(), (i.current = null)) : a(n);
      else a && (a.current = n);
    },
    [t],
  );
}
var tl = (0, s.createContext)({});
function nl(e) {
  return (
    e &&
    typeof e == `object` &&
    Object.prototype.hasOwnProperty.call(e, `current`)
  );
}
function rl(e, t, n, r, i, a) {
  let { visualElement: o } = (0, s.useContext)(Pc),
    c = (0, s.useContext)(bc),
    l = (0, s.useContext)(d),
    f = (0, s.useContext)(cc),
    p = f.reducedMotion,
    m = f.skipAnimations,
    h = (0, s.useRef)(null),
    g = (0, s.useRef)(!1);
  ((r ||= c.renderer),
    !h.current &&
      r &&
      ((h.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: p,
        skipAnimations: m,
        isSVG: a,
      })),
      g.current && h.current && (h.current.manuallyAnimateOnMount = !0)));
  let _ = h.current,
    v = (0, s.useContext)(tl);
  _ &&
    !_.projection &&
    i &&
    (_.type === `html` || _.type === `svg`) &&
    il(h.current, n, i, v);
  let y = (0, s.useRef)(!1);
  (0, s.useInsertionEffect)(() => {
    _ && y.current && _.update(n, l);
  });
  let b = n[Xr],
    x = (0, s.useRef)(
      !!b &&
        typeof window < `u` &&
        !window.MotionHandoffIsComplete?.(b) &&
        window.MotionHasOptimisedAnimation?.(b),
    );
  return (
    u(() => {
      ((g.current = !0),
        _ &&
          ((y.current = !0),
          (window.MotionIsMounted = !0),
          _.updateFeatures(),
          _.scheduleRenderMicrotask(),
          x.current && _.animationState && _.animationState.animateChanges()));
    }),
    (0, s.useEffect)(() => {
      _ &&
        (!x.current && _.animationState && _.animationState.animateChanges(),
        (x.current &&=
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(b);
          }),
          !1)),
        (_.enteringChildren = void 0));
    }),
    _
  );
}
function il(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
    layoutAnchor: u,
    layoutCrossfade: d,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t[`data-framer-portal-id`] ? void 0 : al(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && nl(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: c,
      layoutRoot: l,
      layoutAnchor: u,
    }));
}
function al(e) {
  if (e) return e.options.allowProjection === !1 ? al(e.parent) : e.projection;
}
function ol(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && Tc(r);
  let a = n ? n === `svg` : Kc(e),
    o = a ? Qc : Zc;
  function c(n, c) {
    let l,
      u = { ...(0, s.useContext)(cc), ...n, layoutId: sl(n) },
      { isStatic: d } = u,
      f = Ic(n),
      p = o(n, d);
    if (!d && typeof window < `u`) {
      cl(u, r);
      let t = ll(u);
      ((l = t.MeasureLayout),
        (f.visualElement = rl(e, p, u, i, t.ProjectionNode, a)));
    }
    return (0, L.jsxs)(Pc.Provider, {
      value: f,
      children: [
        l && f.visualElement
          ? (0, L.jsx)(l, { visualElement: f.visualElement, ...u })
          : null,
        qc(e, n, el(p, f.visualElement, c), p, d, t, a),
      ],
    });
  }
  c.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`;
  let l = (0, s.forwardRef)(c);
  return ((l[$c] = e), l);
}
function sl({ layoutId: e }) {
  let t = (0, s.useContext)(c).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function cl(e, t) {
  (0, s.useContext)(bc).strict;
}
function ll(e) {
  let { drag: t, layout: n } = wc();
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout:
      t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function ul(e, t) {
  if (typeof Proxy > `u`) return ol;
  let n = new Map(),
    r = (n, r) => ol(n, r, e, t);
  return new Proxy((e, t) => r(e, t), {
    get: (i, a) =>
      a === `create`
        ? r
        : (n.has(a) || n.set(a, ol(a, void 0, e, t)), n.get(a)),
  });
}
var dl = (e, t) =>
    (t.isSVG ?? Kc(e))
      ? new Co(t)
      : new po(t, { allowProjection: e !== s.Fragment }),
  fl = class extends Ma {
    constructor(e) {
      (super(e), (e.animationState ||= Ao(e)));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      ha(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      (this.node.animationState.reset(), this.unmountControls?.());
    }
  },
  pl = 0,
  ml = {
    animation: { Feature: fl },
    exit: {
      Feature: class extends Ma {
        constructor() {
          (super(...arguments), (this.id = pl++), (this.isExitComplete = !1));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          if (e && n === !1) {
            if (this.isExitComplete) {
              let { initial: e, custom: t } = this.node.getProps();
              if (
                typeof e == `string` ||
                (typeof e == `object` && e && !Array.isArray(e))
              ) {
                let n = Vr(this.node, e, t);
                if (n) {
                  let { transition: e, transitionEnd: t, ...r } = n;
                  for (let e in r) this.node.getValue(e)?.jump(r[e]);
                }
              }
              (this.node.animationState.reset(),
                this.node.animationState.animateChanges());
            } else this.node.animationState.setActive(`exit`, !1);
            this.isExitComplete = !1;
            return;
          }
          let r = this.node.animationState.setActive(`exit`, !e);
          t &&
            !e &&
            r.then(() => {
              ((this.isExitComplete = !0), t(this.id));
            });
        }
        mount() {
          let { register: e, onExitComplete: t } =
            this.node.presenceContext || {};
          (t && t(this.id), e && (this.unmount = e(this.id)));
        }
        unmount() {}
      },
    },
  };
function hl(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
var gl = (e) => (t) => Pi(t) && e(t, hl(t));
function _l(e, t, n, r) {
  return ys(e, t, gl(n), r);
}
var vl = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  yl = (e, t) => Math.abs(e - t);
function bl(e, t) {
  let n = yl(e.x, t.x),
    r = yl(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var xl = new Set([`auto`, `scroll`]),
  Sl = class {
    constructor(
      e,
      t,
      {
        transformPagePoint: n,
        contextWindow: r = window,
        dragSnapToOrigin: i = !1,
        distanceThreshold: a = 3,
        element: o,
      } = {},
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.lastRawMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.scrollPositions = new Map()),
        (this.removeScrollListeners = null),
        (this.onElementScroll = (e) => {
          this.handleScroll(e.target);
        }),
        (this.onWindowScroll = () => {
          this.handleScroll(window);
        }),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          this.lastRawMoveEventInfo &&
            (this.lastMoveEventInfo = Cl(
              this.lastRawMoveEventInfo,
              this.transformPagePoint,
            ));
          let e = Tl(this.lastMoveEventInfo, this.history),
            t = this.startEvent !== null,
            n = bl(e.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
          if (!t && !n) return;
          let { point: r } = e,
            { timestamp: i } = D;
          this.history.push({ ...r, timestamp: i });
          let { onStart: a, onMove: o } = this.handlers;
          (t ||
            (a && a(this.lastMoveEvent, e),
            (this.startEvent = this.lastMoveEvent)),
            o && o(this.lastMoveEvent, e));
        }),
        (this.handlePointerMove = (e, t) => {
          ((this.lastMoveEvent = e),
            (this.lastRawMoveEventInfo = t),
            (this.lastMoveEventInfo = Cl(t, this.transformPagePoint)),
            E.update(this.updatePoint, !0));
        }),
        (this.handlePointerUp = (e, t) => {
          this.end();
          let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
          if (
            ((this.dragSnapToOrigin || !this.startEvent) && i && i(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          let a = Tl(
            e.type === `pointercancel`
              ? this.lastMoveEventInfo
              : Cl(t, this.transformPagePoint),
            this.history,
          );
          (this.startEvent && n && n(e, a), r && r(e, a));
        }),
        !Pi(e))
      )
        return;
      ((this.dragSnapToOrigin = i),
        (this.handlers = t),
        (this.transformPagePoint = n),
        (this.distanceThreshold = a),
        (this.contextWindow = r || window));
      let s = Cl(hl(e), this.transformPagePoint),
        { point: c } = s,
        { timestamp: l } = D;
      this.history = [{ ...c, timestamp: l }];
      let { onSessionStart: u } = t;
      u && u(e, Tl(s, this.history));
      let d = { passive: !0, capture: !0 };
      ((this.removeListeners = x(
        _l(this.contextWindow, `pointermove`, this.handlePointerMove, d),
        _l(this.contextWindow, `pointerup`, this.handlePointerUp, d),
        _l(this.contextWindow, `pointercancel`, this.handlePointerUp, d),
      )),
        o && this.startScrollTracking(o));
    }
    startScrollTracking(e) {
      let t = e.parentElement;
      for (; t; ) {
        let e = getComputedStyle(t);
        ((xl.has(e.overflowX) || xl.has(e.overflowY)) &&
          this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
          (t = t.parentElement));
      }
      (this.scrollPositions.set(window, {
        x: window.scrollX,
        y: window.scrollY,
      }),
        window.addEventListener(`scroll`, this.onElementScroll, {
          capture: !0,
        }),
        window.addEventListener(`scroll`, this.onWindowScroll),
        (this.removeScrollListeners = () => {
          (window.removeEventListener(`scroll`, this.onElementScroll, {
            capture: !0,
          }),
            window.removeEventListener(`scroll`, this.onWindowScroll));
        }));
    }
    handleScroll(e) {
      let t = this.scrollPositions.get(e);
      if (!t) return;
      let n = e === window,
        r = n
          ? { x: window.scrollX, y: window.scrollY }
          : { x: e.scrollLeft, y: e.scrollTop },
        i = { x: r.x - t.x, y: r.y - t.y };
      (i.x === 0 && i.y === 0) ||
        (n
          ? this.lastMoveEventInfo &&
            ((this.lastMoveEventInfo.point.x += i.x),
            (this.lastMoveEventInfo.point.y += i.y))
          : this.history.length > 0 &&
            ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
        this.scrollPositions.set(e, r),
        E.update(this.updatePoint, !0));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      (this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        De(this.updatePoint));
    }
  };
function Cl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function wl(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Tl({ point: e }, t) {
  return {
    point: e,
    delta: wl(e, Dl(t)),
    offset: wl(e, El(t)),
    velocity: Ol(t, 0.1),
  };
}
function El(e) {
  return e[0];
}
function Dl(e) {
  return e[e.length - 1];
}
function Ol(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = Dl(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > w(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    i.timestamp - r.timestamp > w(t) * 2 &&
    (r = e[1]);
  let a = T(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function kl(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? j(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? j(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Al(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function jl(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Al(e.x, n, i), y: Al(e.y, t, r) };
}
function Ml(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function Nl(e, t) {
  return { x: Ml(e.x, t.x), y: Ml(e.y, t.y) };
}
function Pl(e, t) {
  let n = 0.5,
    r = I(e),
    i = I(t);
  return (
    i > r
      ? (n = S(t.min, t.max - r, e.min))
      : r > i && (n = S(e.min, e.max - i, t.min)),
    m(0, 1, n)
  );
}
function Fl(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var Il = 0.35;
function Ll(e = Il) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Il),
    { x: Rl(e, `left`, `right`), y: Rl(e, `top`, `bottom`) }
  );
}
function Rl(e, t, n) {
  return { min: zl(e, t), max: zl(e, n) };
}
function zl(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
var Bl = new WeakMap(),
  Vl = class {
    constructor(e) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = F()),
        (this.latestPointerEvent = null),
        (this.latestPanInfo = null),
        (this.visualElement = e));
    }
    start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
      let { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1) return;
      let i = (e) => {
          (t && this.snapToCursor(hl(e).point), this.stopAnimation());
        },
        a = (e, t) => {
          let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
          if (
            n &&
            !r &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = ki(n)),
            !this.openDragLock)
          )
            return;
          ((this.latestPointerEvent = e),
            (this.latestPanInfo = t),
            (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            cs((e) => {
              let t = this.getAxisMotionValue(e).get() || 0;
              if ($e.test(t)) {
                let { projection: n } = this.visualElement;
                if (n && n.layout) {
                  let r = n.layout.layoutBox[e];
                  r && (t = I(r) * (parseFloat(t) / 100));
                }
              }
              this.originPoint[e] = t;
            }),
            i && E.update(() => i(e, t), !1, !0),
            Jr(this.visualElement, `transform`));
          let { animationState: a } = this.visualElement;
          a && a.setActive(`whileDrag`, !0);
        },
        o = (e, t) => {
          ((this.latestPointerEvent = e), (this.latestPanInfo = t));
          let {
            dragPropagation: n,
            dragDirectionLock: r,
            onDirectionLock: i,
            onDrag: a,
          } = this.getProps();
          if (!n && !this.openDragLock) return;
          let { offset: o } = t;
          if (r && this.currentDirection === null) {
            ((this.currentDirection = Gl(o)),
              this.currentDirection !== null && i && i(this.currentDirection));
            return;
          }
          (this.updateAxis(`x`, t.point, o),
            this.updateAxis(`y`, t.point, o),
            this.visualElement.render(),
            a && E.update(() => a(e, t), !1, !0));
        },
        s = (e, t) => {
          ((this.latestPointerEvent = e),
            (this.latestPanInfo = t),
            this.stop(e, t),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null));
        },
        c = () => {
          let { dragSnapToOrigin: e } = this.getProps();
          (e || this.constraints) && this.startAnimation({ x: 0, y: 0 });
        },
        { dragSnapToOrigin: l } = this.getProps();
      this.panSession = new Sl(
        e,
        {
          onSessionStart: i,
          onStart: a,
          onMove: o,
          onSessionEnd: s,
          resumeAnimation: c,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: l,
          distanceThreshold: n,
          contextWindow: vl(this.visualElement),
          element: this.visualElement.current,
        },
      );
    }
    stop(e, t) {
      let n = e || this.latestPointerEvent,
        r = t || this.latestPanInfo,
        i = this.isDragging;
      if ((this.cancel(), !i || !r || !n)) return;
      let { velocity: a } = r;
      this.startAnimation(a);
      let { onDragEnd: o } = this.getProps();
      o && E.postRender(() => o(n, r));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      (e && (e.isAnimationBlocked = !1), this.endPanSession());
      let { dragPropagation: n } = this.getProps();
      (!n &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        t && t.setActive(`whileDrag`, !1));
    }
    endPanSession() {
      (this.panSession && this.panSession.end(), (this.panSession = void 0));
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !Wl(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        a = this.originPoint[e] + n[e];
      (this.constraints &&
        this.constraints[e] &&
        (a = kl(a, this.constraints[e], this.elastic[e])),
        i.set(a));
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: t } = this.getProps(),
        n =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        r = this.constraints;
      (e && nl(e)
        ? (this.constraints ||= this.resolveRefConstraints())
        : e && n
          ? (this.constraints = jl(n.layoutBox, e))
          : (this.constraints = !1),
        (this.elastic = Ll(t)),
        r !== this.constraints &&
          !nl(e) &&
          n &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          cs((e) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = Fl(n.layoutBox[e], this.constraints[e]));
          }));
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !nl(e)) return !1;
      let n = e.current,
        { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      r.root && ((r.root.scroll = void 0), r.root.updateScroll());
      let i = $a(n, r.root, this.visualElement.getTransformPagePoint()),
        a = Nl(r.layout.layoutBox, i);
      if (t) {
        let e = t(Pa(a));
        ((this.hasMutatedConstraints = !!e), e && (a = Na(e)));
      }
      return a;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: a,
          onDragTransitionEnd: o,
        } = this.getProps(),
        s = this.constraints || {},
        c = cs((o) => {
          if (!Wl(o, t, this.currentDirection)) return;
          let c = (s && s[o]) || {};
          (a === !0 || a === o) && (c = { min: 0, max: 0 });
          let l = r ? 200 : 1e6,
            u = r ? 40 : 1e7,
            d = {
              type: `inertia`,
              velocity: n ? e[o] : 0,
              bounceStiffness: l,
              bounceDamping: u,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...c,
            };
          return this.startAxisValueAnimation(o, d);
        });
      return Promise.all(c).then(o);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return (
        Jr(this.visualElement, e),
        n.start(Fr(e, n, 0, t, this.visualElement, !1))
      );
    }
    stopAnimation() {
      cs((e) => this.getAxisMotionValue(e).stop());
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`;
      return (
        this.visualElement.getProps()[t] ||
        this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0)
      );
    }
    snapToCursor(e) {
      cs((t) => {
        let { drag: n } = this.getProps();
        if (!Wl(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: n, max: a } = r.layout.layoutBox[t],
            o = i.get() || 0;
          i.set(e[t] - j(n, a, 0.5) + o);
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!nl(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      cs((e) => {
        let t = this.getAxisMotionValue(e);
        if (t && this.constraints !== !1) {
          let n = t.get();
          r[e] = Pl({ min: n, max: n }, this.constraints[e]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = i ? i({}, ``) : `none`),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        (this.constraints = !1),
        this.resolveConstraints(),
        cs((t) => {
          if (!Wl(t, e, null)) return;
          let n = this.getAxisMotionValue(t),
            { min: i, max: a } = this.constraints[t];
          n.set(j(i, a, r[t]));
        }),
        this.visualElement.render());
    }
    addListeners() {
      if (!this.visualElement.current) return;
      Bl.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = _l(e, `pointerdown`, (t) => {
          let { drag: n, dragListener: r = !0 } = this.getProps(),
            i = t.target,
            a = i !== e && Ri(i);
          n && r && !a && this.start(t);
        }),
        n,
        r = () => {
          let { dragConstraints: t } = this.getProps();
          nl(t) &&
            t.current &&
            ((this.constraints = this.resolveRefConstraints()),
            (n ||= Ul(e, t.current, () =>
              this.scalePositionWithinConstraints(),
            )));
        },
        { projection: i } = this.visualElement,
        a = i.addEventListener(`measure`, r);
      (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
        E.read(r));
      let o = ys(window, `resize`, () => this.scalePositionWithinConstraints()),
        s = i.addEventListener(
          `didUpdate`,
          ({ delta: e, hasLayoutChanged: t }) => {
            this.isDragging &&
              t &&
              (cs((t) => {
                let n = this.getAxisMotionValue(t);
                n &&
                  ((this.originPoint[t] += e[t].translate),
                  n.set(n.get() + e[t].translate));
              }),
              this.visualElement.render());
          },
        );
      return () => {
        (o(), t(), a(), s && s(), n && n());
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: a = Il,
          dragMomentum: o = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: a,
        dragMomentum: o,
      };
    }
  };
function Hl(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function Ul(e, t, n) {
  let r = oa(e, Hl(n)),
    i = oa(t, Hl(n));
  return () => {
    (r(), i());
  };
}
function Wl(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Gl(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
var Kl = class extends Ma {
    constructor(e) {
      (super(e),
        (this.removeGroupControls = b),
        (this.removeListeners = b),
        (this.controls = new Vl(e)));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      (e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || b));
    }
    update() {
      let { dragControls: e } = this.node.getProps(),
        { dragControls: t } = this.node.prevProps || {};
      e !== t &&
        (this.removeGroupControls(),
        e && (this.removeGroupControls = e.subscribe(this.controls)));
    }
    unmount() {
      (this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession());
    }
  },
  ql = (e) => (t, n) => {
    e && E.update(() => e(t, n), !1, !0);
  },
  Jl = class extends Ma {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = b));
    }
    onPointerDown(e) {
      this.session = new Sl(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: vl(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: ql(e),
        onStart: ql(t),
        onMove: ql(n),
        onEnd: (e, t) => {
          (delete this.session, r && E.postRender(() => r(e, t)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = _l(
        this.node.current,
        `pointerdown`,
        (e) => this.onPointerDown(e),
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  },
  Yl = !1,
  Xl = class extends s.Component {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      (i &&
        (t.group && t.group.add(i),
        n && n.register && r && n.register(i),
        Yl && i.root.didUpdate(),
        i.addEventListener(`animationComplete`, () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          layoutDependency: this.props.layoutDependency,
          onExitComplete: () => this.safeToRemove(),
        })),
        (Ts.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        { projection: a } = n;
      return a
        ? ((a.isPresent = i),
          e.layoutDependency !== t &&
            a.setOptions({ ...a.options, layoutDependency: t }),
          (Yl = !0),
          r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i
            ? a.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? a.promote()
              : a.relegate() ||
                E.postRender(() => {
                  let e = a.getStack();
                  (!e || !e.members.length) && this.safeToRemove();
                })),
          null)
        : null;
    }
    componentDidUpdate() {
      let { visualElement: e, layoutAnchor: t } = this.props,
        { projection: n } = e;
      n &&
        ((n.options.layoutAnchor = t),
        n.root.didUpdate(),
        Ei.postRender(() => {
          !n.currentAnimation && n.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      ((Yl = !0),
        r &&
          (r.scheduleCheckAfterUnmount(),
          t && t.group && t.group.remove(r),
          n && n.deregister && n.deregister(r)));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function Zl(e) {
  let [t, n] = gc(),
    r = (0, s.useContext)(c);
  return (0, L.jsx)(Xl, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: (0, s.useContext)(tl),
    isPresent: t,
    safeToRemove: n,
  });
}
var Ql = {
  pan: { Feature: Jl },
  drag: { Feature: Kl, ProjectionNode: sc, MeasureLayout: Zl },
};
function $l(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && E.postRender(() => i(t, hl(t)));
}
var eu = class extends Ma {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = Mi(
          e,
          (e, t) => ($l(this.node, t, `Start`), (e) => $l(this.node, e, `End`)),
        ));
    }
    unmount() {}
  },
  tu = class extends Ma {
    constructor() {
      (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(`:focus-visible`);
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = x(
        ys(this.node.current, `focus`, () => this.onFocus()),
        ys(this.node.current, `blur`, () => this.onBlur()),
      );
    }
    unmount() {}
  };
function nu(e, t, n) {
  let { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && E.postRender(() => i(t, hl(t)));
}
var ru = class extends Ma {
    mount() {
      let { current: e } = this.node;
      if (!e) return;
      let { globalTapTarget: t, propagate: n } = this.node.props;
      this.unmount = Gi(
        e,
        (e, t) => (
          nu(this.node, t, `Start`),
          (e, { success: t }) => nu(this.node, e, t ? `End` : `Cancel`)
        ),
        { useGlobalTarget: t, stopPropagation: n?.tap === !1 },
      );
    }
    unmount() {}
  },
  iu = new WeakMap(),
  au = new WeakMap(),
  ou = (e) => {
    let t = iu.get(e.target);
    t && t(e);
  },
  su = (e) => {
    e.forEach(ou);
  };
function cu({ root: e, ...t }) {
  let n = e || document;
  au.has(n) || au.set(n, {});
  let r = au.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(su, { root: e, ...t })),
    r[i]
  );
}
function lu(e, t, n) {
  let r = cu(t);
  return (
    iu.set(e, n),
    r.observe(e),
    () => {
      (iu.delete(e), r.unobserve(e));
    }
  );
}
var uu = { some: 0, all: 1 },
  du = class extends Ma {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      this.stopObserver?.();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = `some`, once: i } = e,
        a = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == `number` ? r : uu[r],
        },
        o = (e) => {
          let { isIntersecting: t } = e;
          if (
            this.isInView === t ||
            ((this.isInView = t), i && !t && this.hasEnteredView)
          )
            return;
          (t && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive(`whileInView`, t));
          let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
            a = t ? n : r;
          a && a(e);
        };
      this.stopObserver = lu(this.node.current, a, o);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > `u`) return;
      let { props: e, prevProps: t } = this.node;
      [`amount`, `margin`, `root`].some(fu(e, t)) && this.startObserver();
    }
    unmount() {
      (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
    }
  };
function fu({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var pu = {
    inView: { Feature: du },
    tap: { Feature: ru },
    focus: { Feature: tu },
    hover: { Feature: eu },
  },
  mu = { layout: { ProjectionNode: sc, MeasureLayout: Zl } },
  R = ul({ ...ml, ...pu, ...Ql, ...mu }, dl),
  hu = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  gu = s.createContext && s.createContext(hu),
  _u = [`attr`, `size`, `title`];
function vu(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = yu(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function yu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function bu() {
  return (
    (bu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bu.apply(null, arguments)
  );
}
function xu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Su(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? xu(Object(n), !0).forEach(function (t) {
          Cu(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : xu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Cu(e, t, n) {
  return (
    (t = wu(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function wu(e) {
  var t = Tu(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Tu(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Eu(e) {
  return (
    e &&
    e.map((e, t) => s.createElement(e.tag, Su({ key: t }, e.attr), Eu(e.child)))
  );
}
function z(e) {
  return (t) =>
    s.createElement(Du, bu({ attr: Su({}, e.attr) }, t), Eu(e.child));
}
function Du(e) {
  var t = (t) => {
    var n = e.attr,
      r = e.size,
      i = e.title,
      a = vu(e, _u),
      o = r || t.size || `1em`,
      c;
    return (
      t.className && (c = t.className),
      e.className && (c = (c ? c + ` ` : ``) + e.className),
      s.createElement(
        `svg`,
        bu(
          { stroke: `currentColor`, fill: `currentColor`, strokeWidth: `0` },
          t.attr,
          n,
          a,
          {
            className: c,
            style: Su(Su({ color: e.color || t.color }, t.style), e.style),
            height: o,
            width: o,
            xmlns: `http://www.w3.org/2000/svg`,
          },
        ),
        i && s.createElement(`title`, null, i),
        e.children,
      )
    );
  };
  return gu === void 0
    ? t(hu)
    : s.createElement(gu.Consumer, null, (e) => t(e));
}
function Ou(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `polygon`,
        attr: { points: `13 2 3 14 12 14 11 22 21 10 12 10 13 2` },
        child: [],
      },
    ],
  })(e);
}
function ku(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `line`,
        attr: { x1: `18`, y1: `6`, x2: `6`, y2: `18` },
        child: [],
      },
      {
        tag: `line`,
        attr: { x1: `6`, y1: `6`, x2: `18`, y2: `18` },
        child: [],
      },
    ],
  })(e);
}
function Au(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `path`,
        attr: { d: `M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2` },
        child: [],
      },
      { tag: `circle`, attr: { cx: `12`, cy: `7`, r: `4` }, child: [] },
    ],
  })(e);
}
function ju(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      { tag: `circle`, attr: { cx: `12`, cy: `12`, r: `10` }, child: [] },
      { tag: `circle`, attr: { cx: `12`, cy: `12`, r: `6` }, child: [] },
      { tag: `circle`, attr: { cx: `12`, cy: `12`, r: `2` }, child: [] },
    ],
  })(e);
}
function Mu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `polygon`,
        attr: {
          points: `12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2`,
        },
        child: [],
      },
    ],
  })(e);
}
function Nu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `line`,
        attr: { x1: `22`, y1: `2`, x2: `11`, y2: `13` },
        child: [],
      },
      {
        tag: `polygon`,
        attr: { points: `22 2 15 22 11 13 2 9 22 2` },
        child: [],
      },
    ],
  })(e);
}
function Pu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`,
        },
        child: [],
      },
    ],
  })(e);
}
function Fu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `line`,
        attr: { x1: `3`, y1: `12`, x2: `21`, y2: `12` },
        child: [],
      },
      { tag: `line`, attr: { x1: `3`, y1: `6`, x2: `21`, y2: `6` }, child: [] },
      {
        tag: `line`,
        attr: { x1: `3`, y1: `18`, x2: `21`, y2: `18` },
        child: [],
      },
    ],
  })(e);
}
function Iu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `path`,
        attr: { d: `M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z` },
        child: [],
      },
      { tag: `circle`, attr: { cx: `12`, cy: `10`, r: `3` }, child: [] },
    ],
  })(e);
}
function Lu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`,
        },
        child: [],
      },
      { tag: `polyline`, attr: { points: `22,6 12,13 2,6` }, child: [] },
    ],
  })(e);
}
function Ru(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `line`,
        attr: { x1: `12`, y1: `2`, x2: `12`, y2: `6` },
        child: [],
      },
      {
        tag: `line`,
        attr: { x1: `12`, y1: `18`, x2: `12`, y2: `22` },
        child: [],
      },
      {
        tag: `line`,
        attr: { x1: `4.93`, y1: `4.93`, x2: `7.76`, y2: `7.76` },
        child: [],
      },
      {
        tag: `line`,
        attr: { x1: `16.24`, y1: `16.24`, x2: `19.07`, y2: `19.07` },
        child: [],
      },
      {
        tag: `line`,
        attr: { x1: `2`, y1: `12`, x2: `6`, y2: `12` },
        child: [],
      },
      {
        tag: `line`,
        attr: { x1: `18`, y1: `12`, x2: `22`, y2: `12` },
        child: [],
      },
      {
        tag: `line`,
        attr: { x1: `4.93`, y1: `19.07`, x2: `7.76`, y2: `16.24` },
        child: [],
      },
      {
        tag: `line`,
        attr: { x1: `16.24`, y1: `7.76`, x2: `19.07`, y2: `4.93` },
        child: [],
      },
    ],
  })(e);
}
function zu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z`,
        },
        child: [],
      },
    ],
  })(e);
}
function Bu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22`,
        },
        child: [],
      },
    ],
  })(e);
}
function Vu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`,
        },
        child: [],
      },
      { tag: `polyline`, attr: { points: `14 2 14 8 20 8` }, child: [] },
      {
        tag: `line`,
        attr: { x1: `16`, y1: `13`, x2: `8`, y2: `13` },
        child: [],
      },
      {
        tag: `line`,
        attr: { x1: `16`, y1: `17`, x2: `8`, y2: `17` },
        child: [],
      },
      { tag: `polyline`, attr: { points: `10 9 9 9 8 9` }, child: [] },
    ],
  })(e);
}
function Hu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `path`,
        attr: { d: `M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z` },
        child: [],
      },
      { tag: `circle`, attr: { cx: `12`, cy: `12`, r: `3` }, child: [] },
    ],
  })(e);
}
function Uu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `path`,
        attr: { d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6` },
        child: [],
      },
      { tag: `polyline`, attr: { points: `15 3 21 3 21 9` }, child: [] },
      {
        tag: `line`,
        attr: { x1: `10`, y1: `14`, x2: `21`, y2: `3` },
        child: [],
      },
    ],
  })(e);
}
function Wu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `path`,
        attr: { d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4` },
        child: [],
      },
      { tag: `polyline`, attr: { points: `7 10 12 15 17 10` }, child: [] },
      {
        tag: `line`,
        attr: { x1: `12`, y1: `15`, x2: `12`, y2: `3` },
        child: [],
      },
    ],
  })(e);
}
function Gu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      { tag: `circle`, attr: { cx: `12`, cy: `12`, r: `10` }, child: [] },
      { tag: `polyline`, attr: { points: `12 6 12 12 16 14` }, child: [] },
    ],
  })(e);
}
function Ku(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [{ tag: `polyline`, attr: { points: `20 6 9 17 4 12` }, child: [] }],
  })(e);
}
function qu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `path`,
        attr: { d: `M22 11.08V12a10 10 0 1 1-5.93-9.14` },
        child: [],
      },
      { tag: `polyline`, attr: { points: `22 4 12 14.01 9 11.01` }, child: [] },
    ],
  })(e);
}
function Ju(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `rect`,
        attr: { x: `3`, y: `4`, width: `18`, height: `18`, rx: `2`, ry: `2` },
        child: [],
      },
      {
        tag: `line`,
        attr: { x1: `16`, y1: `2`, x2: `16`, y2: `6` },
        child: [],
      },
      { tag: `line`, attr: { x1: `8`, y1: `2`, x2: `8`, y2: `6` }, child: [] },
      {
        tag: `line`,
        attr: { x1: `3`, y1: `10`, x2: `21`, y2: `10` },
        child: [],
      },
    ],
  })(e);
}
function Yu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `rect`,
        attr: { x: `2`, y: `7`, width: `20`, height: `14`, rx: `2`, ry: `2` },
        child: [],
      },
      {
        tag: `path`,
        attr: { d: `M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16` },
        child: [],
      },
    ],
  })(e);
}
function Xu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      { tag: `circle`, attr: { cx: `12`, cy: `8`, r: `7` }, child: [] },
      {
        tag: `polyline`,
        attr: { points: `8.21 13.89 7 23 12 20 17 23 15.79 13.88` },
        child: [],
      },
    ],
  })(e);
}
function Zu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `line`,
        attr: { x1: `12`, y1: `19`, x2: `12`, y2: `5` },
        child: [],
      },
      { tag: `polyline`, attr: { points: `5 12 12 5 19 12` }, child: [] },
    ],
  })(e);
}
function Qu(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      { tag: `circle`, attr: { cx: `12`, cy: `12`, r: `10` }, child: [] },
      {
        tag: `line`,
        attr: { x1: `12`, y1: `8`, x2: `12`, y2: `12` },
        child: [],
      },
      {
        tag: `line`,
        attr: { x1: `12`, y1: `16`, x2: `12.01`, y2: `16` },
        child: [],
      },
    ],
  })(e);
}
var $u = `/assets/profile-C8DNMZG_.jpg`;
function ed(e) {
  return z({
    tag: `svg`,
    attr: { viewBox: `0 0 512 512` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z`,
        },
        child: [],
      },
    ],
  })(e);
}
function td(e) {
  return z({
    tag: `svg`,
    attr: { viewBox: `0 0 448 512` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z`,
        },
        child: [],
      },
    ],
  })(e);
}
function nd(e) {
  return z({
    tag: `svg`,
    attr: { viewBox: `0 0 448 512` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z`,
        },
        child: [],
      },
    ],
  })(e);
}
function rd(e) {
  return z({
    tag: `svg`,
    attr: { viewBox: `0 0 384 512` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z`,
        },
        child: [],
      },
    ],
  })(e);
}
function id(e) {
  return z({
    tag: `svg`,
    attr: { viewBox: `0 0 384 512` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z`,
        },
        child: [],
      },
    ],
  })(e);
}
function ad(e) {
  return z({
    tag: `svg`,
    attr: { viewBox: `0 0 496 512` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z`,
        },
        child: [],
      },
    ],
  })(e);
}
function od(e) {
  return z({
    tag: `svg`,
    attr: { viewBox: `0 0 448 512` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z`,
        },
        child: [],
      },
    ],
  })(e);
}
function sd(e) {
  return z({
    tag: `svg`,
    attr: { viewBox: `0 0 384 512` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z`,
        },
        child: [],
      },
    ],
  })(e);
}
function cd(e) {
  return z({
    tag: `svg`,
    attr: { viewBox: `0 0 640 512` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z`,
        },
        child: [],
      },
    ],
  })(e);
}
function ld(e) {
  return z({
    tag: `svg`,
    attr: { viewBox: `0 0 448 512` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z`,
        },
        child: [],
      },
    ],
  })(e);
}
function ud(e) {
  return z({
    tag: `svg`,
    attr: { role: `img`, viewBox: `0 0 24 24` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z`,
        },
        child: [],
      },
    ],
  })(e);
}
function dd(e) {
  return z({
    tag: `svg`,
    attr: { role: `img`, viewBox: `0 0 24 24` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z`,
        },
        child: [],
      },
    ],
  })(e);
}
function fd(e) {
  return z({
    tag: `svg`,
    attr: { role: `img`, viewBox: `0 0 24 24` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z`,
        },
        child: [],
      },
    ],
  })(e);
}
function pd(e) {
  return z({
    tag: `svg`,
    attr: { role: `img`, viewBox: `0 0 24 24` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z`,
        },
        child: [],
      },
    ],
  })(e);
}
function md(e) {
  return z({
    tag: `svg`,
    attr: { role: `img`, viewBox: `0 0 24 24` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95c-.061 0-.111-.05-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 01-.11-.11V8.112c0-.06.05-.11.11-.11h1.806c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm2.999 0h5.778c.061 0 .111.05.111.11v7.767a.11.11 0 01-.11.112h-5.78a.11.11 0 01-.11-.11V8.111c0-.06.05-.11.11-.11z`,
        },
        child: [],
      },
    ],
  })(e);
}
function hd(e) {
  return z({
    tag: `svg`,
    attr: { role: `img`, viewBox: `0 0 24 24` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z`,
        },
        child: [],
      },
    ],
  })(e);
}
function gd(e) {
  return z({
    tag: `svg`,
    attr: { role: `img`, viewBox: `0 0 24 24` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z`,
        },
        child: [],
      },
    ],
  })(e);
}
function _d(e) {
  return z({
    tag: `svg`,
    attr: { viewBox: `0 0 24 24`, fill: `currentColor` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M20.5624 10.1875C20.8124 9.5 20.8749 8.8125 20.8124 8.125C20.7499 7.4375 20.4999 6.75 20.1874 6.125C19.6249 5.1875 18.8124 4.4375 17.8749 4C16.8749 3.5625 15.8124 3.4375 14.7499 3.6875C14.2499 3.1875 13.6874 2.75 13.0624 2.4375C12.4374 2.125 11.6874 2 10.9999 2C9.9374 2 8.8749 2.3125 7.9999 2.9375C7.1249 3.5625 6.4999 4.4375 6.1874 5.4375C5.4374 5.625 4.8124 5.9375 4.1874 6.3125C3.6249 6.75 3.1874 7.3125 2.8124 7.875C2.24991 8.8125 2.06241 9.875 2.18741 10.9375C2.31241 12 2.7499 13 3.4374 13.8125C3.1874 14.5 3.1249 15.1875 3.1874 15.875C3.2499 16.5625 3.4999 17.25 3.8124 17.875C4.3749 18.8125 5.1874 19.5625 6.1249 20C7.1249 20.4375 8.1874 20.5625 9.2499 20.3125C9.7499 20.8125 10.3124 21.25 10.9374 21.5625C11.5624 21.875 12.3124 22 12.9999 22C14.0624 22 15.1249 21.6875 15.9999 21.0625C16.8749 20.4375 17.4999 19.5625 17.8124 18.5625C18.4999 18.4375 19.1874 18.125 19.7499 17.6875C20.3124 17.25 20.8124 16.75 21.1249 16.125C21.6874 15.1875 21.8749 14.125 21.7499 13.0625C21.6249 12 21.2499 11 20.5624 10.1875ZM13.0624 20.6875C12.0624 20.6875 11.3124 20.375 10.6249 19.8125C10.6249 19.8125 10.6874 19.75 10.7499 19.75L14.7499 17.4375C14.8749 17.375 14.9374 17.3125 14.9999 17.1875C15.0624 17.0625 15.0624 17 15.0624 16.875V11.25L16.7499 12.25V16.875C16.8124 19.0625 15.0624 20.6875 13.0624 20.6875ZM4.9999 17.25C4.5624 16.5 4.3749 15.625 4.5624 14.75C4.5624 14.75 4.6249 14.8125 4.6874 14.8125L8.6874 17.125C8.8124 17.1875 8.8749 17.1875 8.9999 17.1875C9.1249 17.1875 9.2499 17.1875 9.3124 17.125L14.1874 14.3125V16.25L10.1249 18.625C9.2499 19.125 8.2499 19.25 7.3124 19C6.3124 18.75 5.4999 18.125 4.9999 17.25ZM3.9374 8.5625C4.3749 7.8125 5.0624 7.25 5.8749 6.9375V7.0625V11.6875C5.8749 11.8125 5.8749 11.9375 5.9374 12C5.9999 12.125 6.0624 12.1875 6.1874 12.25L11.0624 15.0625L9.3749 16.0625L5.3749 13.75C4.4999 13.25 3.8749 12.4375 3.6249 11.5C3.3749 10.5625 3.4374 9.4375 3.9374 8.5625ZM17.7499 11.75L12.8749 8.9375L14.5624 7.9375L18.5624 10.25C19.1874 10.625 19.6874 11.125 19.9999 11.75C20.3124 12.375 20.4999 13.0625 20.4374 13.8125C20.3749 14.5 20.1249 15.1875 19.6874 15.75C19.2499 16.3125 18.6874 16.75 17.9999 17V12.25C17.9999 12.125 17.9999 12 17.9374 11.9375C17.9374 11.9375 17.8749 11.8125 17.7499 11.75ZM19.4374 9.25C19.4374 9.25 19.3749 9.1875 19.3124 9.1875L15.3124 6.875C15.1874 6.8125 15.1249 6.8125 14.9999 6.8125C14.8749 6.8125 14.7499 6.8125 14.6874 6.875L9.8124 9.6875V7.75L13.8749 5.375C14.4999 5 15.1874 4.875 15.9374 4.875C16.6249 4.875 17.3124 5.125 17.9374 5.5625C18.4999 6 18.9999 6.5625 19.2499 7.1875C19.4999 7.8125 19.5624 8.5625 19.4374 9.25ZM8.9374 12.75L7.2499 11.75V7.0625C7.2499 6.375 7.4374 5.625 7.8124 5.0625C8.1874 4.4375 8.7499 4 9.3749 3.6875C9.9999 3.375 10.7499 3.25 11.4374 3.375C12.1249 3.4375 12.8124 3.75 13.3749 4.1875C13.3749 4.1875 13.3124 4.25 13.2499 4.25L9.2499 6.5625C9.1249 6.625 9.0624 6.6875 8.9999 6.8125C8.9374 6.9375 8.9374 7 8.9374 7.125V12.75ZM9.8124 10.75L11.9999 9.5L14.1874 10.75V13.25L11.9999 14.5L9.8124 13.25V10.75Z`,
        },
        child: [],
      },
    ],
  })(e);
}
function vd(e) {
  return z({
    tag: `svg`,
    attr: { viewBox: `0 0 16 16`, fill: `currentColor` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M15.434 1.72887L12.14 0.144875C12.002 0.078875 11.855 0.046875 11.709 0.046875C11.353 0.046875 11.18 0.211875 11.155 0.228875C11.073 0.270875 11.005 0.337875 11.004 0.338875L4.698 6.08888L1.951 4.00488C1.832 3.91388 1.69 3.86987 1.548 3.86987C1.387 3.86987 1.226 3.92788 1.1 4.04288L0.219 4.84387C0.074 4.97587 0.001 5.15688 0.001 5.33687C0.001 5.51687 0.073 5.69688 0.218 5.82888L2.6 8.00088L0.217 10.1719C0.072 10.3039 0 10.4839 0 10.6639C0 10.8439 0.073 11.0249 0.218 11.1569L1.099 11.9579C1.226 12.0729 1.386 12.1309 1.547 12.1309C1.688 12.1309 1.83 12.0859 1.95 11.9959L4.697 9.91187L11.003 15.6619C11.003 15.6619 11.072 15.7299 11.155 15.7719C11.179 15.7889 11.353 15.9529 11.709 15.9529C11.855 15.9529 12.003 15.9209 12.141 15.8549L15.435 14.2709C15.781 14.1049 16.001 13.7539 16.001 13.3699V2.62888C16.001 2.24487 15.781 1.89488 15.435 1.72787L15.434 1.72887ZM7.217 7.99988L12.002 4.36987V11.6299L7.217 7.99988Z`,
        },
        child: [],
      },
    ],
  })(e);
}
function yd(e) {
  return z({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      { tag: `path`, attr: { d: `M4 13h5` }, child: [] },
      {
        tag: `path`,
        attr: { d: `M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3` },
        child: [],
      },
      { tag: `path`, attr: { d: `M20 8v8` }, child: [] },
      {
        tag: `path`,
        attr: { d: `M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5` },
        child: [],
      },
    ],
  })(e);
}
var B = {
    name: `Ajay Tomar`,
    tagline: `Aspiring Full Stack Java Developer | React Developer | Spring Boot Enthusiast | Problem Solver`,
    location: `Khoda Sector 62A, Noida, Uttar Pradesh, India`,
    email: `ajaytomar80060@gmail.com`,
    phone: `+91 6396595226`,
    linkedin: `https://www.linkedin.com/in/ajay-tec`,
    github: `https://github.com/ajaytomar5421`,
    profileImg: $u,
    resumeUrl: `/resume.pdf`,
    roles: [
      `Aspiring Full Stack Java Developer`,
      `Spring Boot Developer`,
      `React Developer`,
      `Java Programmer`,
      `Software Engineer`,
    ],
  },
  bd = `I am a Computer Science graduate who enjoys building modern web applications using Java, Spring Boot, React, and REST APIs. I like exploring new technologies, solving programming problems, and continuously improving my development skills. I am focused on writing clean, maintainable code and growing as a full stack engineer.`,
  xd = `To join a forward-thinking engineering team as a software developer where I can apply my Java, Spring Boot, and React skills to build reliable, user-focused products, learn from experienced engineers, and grow into a well-rounded full stack developer.`,
  Sd = [
    {
      degree: `Bachelor of Technology (B.Tech)`,
      field: `Computer Science & Engineering`,
      school: `Dr. A.P.J. Abdul Kalam Technical University (AKTU)`,
      period: `2022 – 2026`,
      detail: `CGPA: 8.03`,
    },
  ],
  Cd = [
    {
      title: `Languages`,
      items: [
        { name: `Java`, Icon: rd, color: `#f89820` },
        { name: `JavaScript`, Icon: nd, color: `#f7df1e` },
        { name: `HTML5`, Icon: id, color: `#e34f26` },
        { name: `CSS3`, Icon: sd, color: `#1572b6` },
      ],
    },
    {
      title: `Frontend`,
      items: [
        { name: `React`, Icon: ed, color: `#61dafb` },
        { name: `Tailwind CSS`, Icon: ud, color: `#38bdf8` },
      ],
    },
    {
      title: `Backend`,
      items: [
        { name: `Java`, Icon: rd, color: `#f89820` },
        { name: `Spring Boot`, Icon: dd, color: `#6db33f` },
        { name: `REST APIs`, Icon: yd, color: `#a78bfa` },
      ],
    },
    {
      title: `Database`,
      items: [{ name: `MySQL`, Icon: ld, color: `#64748b` }],
    },
    {
      title: `Tools`,
      items: [
        { name: `VS Code`, Icon: vd, color: `#3b82f6` },
        { name: `Postman`, Icon: fd, color: `#ff6c37` },
        { name: `Git`, Icon: od, color: `#f05032` },
        { name: `GitHub`, Icon: ad, color: `#ffffff` },
      ],
    },
    {
      title: `AI Tools`,
      items: [
        { name: `ChatGPT`, Icon: _d, color: `#10a37f` },
        { name: `Claude`, Icon: gd, color: `#d97757` },
      ],
    },
  ],
  wd = {
    company: `Softpro India`,
    duration: `2 Months`,
    description: `Gained exposure to real-world software development practices, collaborated on structured learning assignments, and strengthened my understanding of Java and web development fundamentals in a professional setting.`,
  },
  Td = [
    {
      title: `Student Management CRUD Application`,
      description: `A full-stack CRUD application built with a React.js frontend and Java Spring Boot backend. Users can create, read, update, and delete student records through a clean, responsive interface backed by REST APIs.`,
      features: [
        `Create Student`,
        `Read Student Details`,
        `Update Student`,
        `Delete Student`,
        `REST API Integration`,
        `Responsive UI`,
      ],
      stack: [`React`, `Java`, `Spring Boot`, `Tailwind CSS`, `REST API`],
      github: `https://github.com/ajaytomar5421`,
      demo: null,
    },
  ],
  Ed = [
    `Passionate Java Learner`,
    `Consistent Technology Learner`,
    `Actively Building Development Skills`,
  ],
  Dd = [
    {
      name: `GitHub`,
      url: `https://github.com/ajaytomar5421`,
      Icon: ad,
      available: !0,
    },
    {
      name: `LinkedIn`,
      url: `https://www.linkedin.com/in/ajay-tec`,
      Icon: td,
      available: !0,
    },
    { name: `LeetCode`, url: null, Icon: pd, available: !1 },
    { name: `HackerRank`, url: null, Icon: md, available: !1 },
    { name: `GeeksforGeeks`, url: null, Icon: hd, available: !1 },
  ],
  Od = [
    `Problem Solving`,
    `Quick Learner`,
    `Team Collaboration`,
    `Adaptability`,
    `Communication`,
    `Time Management`,
    `Analytical Thinking`,
  ],
  kd = [
    `Full Stack Development`,
    `Backend Development`,
    `Learning New Technologies`,
    `Problem Solving`,
    `Software Engineering`,
  ],
  Ad = [
    { label: `Home`, href: `#home` },
    { label: `About`, href: `#about` },
    { label: `Skills`, href: `#skills` },
    { label: `Internship`, href: `#internship` },
    { label: `Projects`, href: `#projects` },
    { label: `Contact`, href: `#contact` },
  ];
function jd() {
  let [e, t] = (0, s.useState)(!1),
    [n, r] = (0, s.useState)(!1);
  return (
    (0, s.useEffect)(() => {
      let e = () => t(window.scrollY > 20);
      return (
        e(),
        window.addEventListener(`scroll`, e),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []),
    (0, L.jsx)(R.header, {
      initial: { y: -30, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.5 },
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${e ? `py-2` : `py-4`}`,
      children: (0, L.jsxs)(`div`, {
        className: `mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300 `,
        children: [
          (0, L.jsxs)(`nav`, {
            className: `flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 ${e ? `glass-strong` : `glass`}`,
            children: [
              (0, L.jsxs)(`a`, {
                href: `#home`,
                className: `flex items-center gap-2`,
                children: [
                  (0, L.jsx)(`span`, {
                    className: `grid place-items-center w-9 h-9 rounded-xl text-sm font-bold text-white bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)]`,
                    children: `AT`,
                  }),
                  (0, L.jsxs)(`span`, {
                    className: `hidden sm:block font-semibold tracking-tight`,
                    children: [
                      `Ajay`,
                      (0, L.jsx)(`span`, {
                        className: `text-gradient`,
                        children: `.dev`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, L.jsx)(`ul`, {
                className: `hidden md:flex items-center gap-1`,
                children: Ad.map((e) =>
                  (0, L.jsx)(
                    `li`,
                    {
                      children: (0, L.jsx)(`a`, {
                        href: e.href,
                        className: `px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors`,
                        children: e.label,
                      }),
                    },
                    e.href,
                  ),
                ),
              }),
              (0, L.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, L.jsxs)(`a`, {
                    href: B.resumeUrl,
                    download: !0,
                    className: `hidden sm:inline-flex btn-primary text-sm !py-2 !px-4`,
                    children: [(0, L.jsx)(Wu, {}), ` Resume`],
                  }),
                  (0, L.jsx)(`button`, {
                    className: `md:hidden grid place-items-center w-10 h-10 rounded-lg glass`,
                    onClick: () => r((e) => !e),
                    "aria-label": `Toggle menu`,
                    children: n ? (0, L.jsx)(ku, {}) : (0, L.jsx)(Fu, {}),
                  }),
                ],
              }),
            ],
          }),
          (0, L.jsx)(yc, {
            children:
              n &&
              (0, L.jsx)(R.div, {
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
                className: `md:hidden mt-2 glass-strong rounded-2xl p-3`,
                children: (0, L.jsxs)(`ul`, {
                  className: `flex flex-col`,
                  children: [
                    Ad.map((e) =>
                      (0, L.jsx)(
                        `li`,
                        {
                          children: (0, L.jsx)(`a`, {
                            href: e.href,
                            onClick: () => r(!1),
                            className: `block px-4 py-3 rounded-lg text-sm hover:bg-white/5`,
                            children: e.label,
                          }),
                        },
                        e.href,
                      ),
                    ),
                    (0, L.jsx)(`li`, {
                      children: (0, L.jsxs)(`a`, {
                        href: B.resumeUrl,
                        download: !0,
                        className: `mt-2 btn-primary text-sm w-full`,
                        children: [(0, L.jsx)(Wu, {}), ` Download Resume`],
                      }),
                    }),
                  ],
                }),
              }),
          }),
        ],
      }),
    })
  );
}
function Md(e, t = 80, n = 1600) {
  let [r, i] = (0, s.useState)(0),
    [a, o] = (0, s.useState)(``),
    [c, l] = (0, s.useState)(!1);
  return (
    (0, s.useEffect)(() => {
      let s = e[r % e.length],
        u = !c && a === s,
        d = c && a === ``,
        f = u ? n : c ? t / 2 : t,
        p = setTimeout(() => {
          u
            ? l(!0)
            : d
              ? (l(!1), i((t) => (t + 1) % e.length))
              : o(c ? s.slice(0, a.length - 1) : s.slice(0, a.length + 1));
        }, f);
      return () => clearTimeout(p);
    }, [a, c, r, e, t, n]),
    a
  );
}
function Nd() {
  let e = Md(B.roles);
  return (0, L.jsxs)(`section`, {
    id: `home`,
    className: `relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden`,
    children: [
      (0, L.jsxs)(`div`, {
        className: `pointer-events-none absolute inset-0 -z-10`,
        children: [
          (0, L.jsx)(`div`, {
            className: `absolute top-20 -left-10 w-80 h-80 rounded-full bg-[var(--brand-blue)]/25 blur-3xl animate-blob`,
          }),
          (0, L.jsx)(`div`, {
            className: `absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[var(--brand-purple)]/25 blur-3xl animate-blob [animation-delay:-6s]`,
          }),
          (0, L.jsx)(`div`, {
            className: `absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-[var(--brand-cyan)]/15 blur-3xl animate-blob [animation-delay:-12s]`,
          }),
        ],
      }),
      (0, L.jsxs)(`div`, {
        className: `mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center w-full`,
        children: [
          (0, L.jsxs)(R.div, {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7 },
            className: `space-y-6`,
            children: [
              (0, L.jsxs)(`span`, {
                className: `inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground`,
                children: [
                  (0, L.jsx)(`span`, {
                    className: `w-2 h-2 rounded-full bg-emerald-400 animate-pulse`,
                  }),
                  `Open to full-time opportunities`,
                ],
              }),
              (0, L.jsxs)(`h1`, {
                className: `text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]`,
                children: [
                  `Hi, I'm `,
                  (0, L.jsx)(`span`, {
                    className: `text-gradient`,
                    children: B.name,
                  }),
                ],
              }),
              (0, L.jsxs)(`div`, {
                className: `text-xl sm:text-2xl text-muted-foreground min-h-[2.5rem]`,
                children: [
                  (0, L.jsx)(`span`, {
                    className: `text-foreground`,
                    children: e,
                  }),
                  (0, L.jsx)(`span`, {
                    className: `inline-block w-[2px] h-6 bg-[var(--brand-blue)] align-middle ml-1 animate-caret`,
                  }),
                ],
              }),
              (0, L.jsxs)(`p`, {
                className: `text-muted-foreground max-w-xl leading-relaxed`,
                children: [
                  `Computer Science graduate building modern full stack web applications with `,
                  (0, L.jsx)(`span`, {
                    className: `text-foreground`,
                    children: `Java, Spring Boot, and React`,
                  }),
                  `. Focused on clean code, thoughtful UI, and continuous learning.`,
                ],
              }),
              (0, L.jsxs)(`div`, {
                className: `flex flex-wrap items-center gap-3 pt-2`,
                children: [
                  (0, L.jsxs)(`a`, {
                    href: B.resumeUrl,
                    download: !0,
                    className: `btn-primary`,
                    children: [(0, L.jsx)(Wu, {}), ` Download Resume`],
                  }),
                  (0, L.jsxs)(`a`, {
                    href: `#contact`,
                    className: `btn-outline`,
                    children: [(0, L.jsx)(Lu, {}), ` Contact Me`],
                  }),
                ],
              }),
              (0, L.jsxs)(`div`, {
                className: `flex items-center gap-4 pt-4 text-muted-foreground`,
                children: [
                  (0, L.jsx)(`a`, {
                    href: B.github,
                    target: `_blank`,
                    rel: `noreferrer`,
                    "aria-label": `GitHub`,
                    className: `grid place-items-center w-11 h-11 rounded-xl glass hover:text-foreground hover:-translate-y-1 transition-all`,
                    children: (0, L.jsx)(ad, { size: 20 }),
                  }),
                  (0, L.jsx)(`a`, {
                    href: B.linkedin,
                    target: `_blank`,
                    rel: `noreferrer`,
                    "aria-label": `LinkedIn`,
                    className: `grid place-items-center w-11 h-11 rounded-xl glass hover:text-foreground hover:-translate-y-1 transition-all`,
                    children: (0, L.jsx)(td, { size: 20 }),
                  }),
                  (0, L.jsx)(`a`, {
                    href: `mailto:${B.email}`,
                    "aria-label": `Email`,
                    className: `grid place-items-center w-11 h-11 rounded-xl glass hover:text-foreground hover:-translate-y-1 transition-all`,
                    children: (0, L.jsx)(Lu, { size: 20 }),
                  }),
                  (0, L.jsxs)(`span`, {
                    className: `hidden sm:inline-flex items-center gap-2 text-xs`,
                    children: [(0, L.jsx)(Iu, {}), ` Noida, India`],
                  }),
                ],
              }),
            ],
          }),
          (0, L.jsx)(R.div, {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.7, delay: 0.2 },
            className: `relative mx-auto`,
            children: (0, L.jsxs)(`div`, {
              className: `relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-floaty`,
              children: [
                (0, L.jsx)(`div`, {
                  className: `absolute -inset-4 rounded-[2rem] bg-[image:var(--gradient-brand)] opacity-60 blur-2xl`,
                }),
                (0, L.jsx)(`div`, {
                  className: `relative w-full h-full rounded-[2rem] overflow-hidden glass-strong p-2`,
                  children: (0, L.jsx)(`img`, {
                    src: B.profileImg,
                    alt: `${B.name} portrait`,
                    width: 1024,
                    height: 1024,
                    className: `w-full h-full object-cover rounded-[1.6rem]`,
                  }),
                }),
                (0, L.jsxs)(`div`, {
                  className: `absolute -bottom-4 -right-4 glass px-4 py-2 rounded-xl text-xs`,
                  children: [
                    (0, L.jsx)(`span`, {
                      className: `text-gradient font-semibold`,
                      children: `CGPA 8.03`,
                    }),
                    ` · B.Tech CSE`,
                  ],
                }),
                (0, L.jsx)(`div`, {
                  className: `absolute -top-4 -left-4 glass px-4 py-2 rounded-xl text-xs`,
                  children: `Java · Spring · React`,
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Pd({ id: e, eyebrow: t, title: n, subtitle: r, children: i }) {
  return (0, L.jsx)(`section`, {
    id: e,
    className: `relative py-24 scroll-mt-24`,
    children: (0, L.jsxs)(`div`, {
      className: `mx-auto max-w-6xl px-6`,
      children: [
        (0, L.jsxs)(R.div, {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: `-80px` },
          transition: { duration: 0.6 },
          className: `max-w-2xl mb-12`,
          children: [
            t &&
              (0, L.jsxs)(`div`, {
                className: `inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-4`,
                children: [
                  (0, L.jsx)(`span`, {
                    className: `w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)]`,
                  }),
                  t,
                ],
              }),
            (0, L.jsx)(`h2`, {
              className: `text-3xl sm:text-4xl font-bold`,
              children: n
                .split(` `)
                .map((e, t, n) =>
                  t === n.length - 1
                    ? (0, L.jsxs)(
                        `span`,
                        { className: `text-gradient`, children: [` `, e] },
                        t,
                      )
                    : (0, L.jsxs)(
                        `span`,
                        { children: [t === 0 ? `` : ` `, e] },
                        t,
                      ),
                ),
            }),
            r &&
              (0, L.jsx)(`p`, {
                className: `mt-3 text-muted-foreground leading-relaxed`,
                children: r,
              }),
          ],
        }),
        i,
      ],
    }),
  });
}
function Fd() {
  return (0, L.jsx)(Pd, {
    id: `about`,
    eyebrow: `About Me`,
    title: `A quick introduction`,
    children: (0, L.jsxs)(`div`, {
      className: `grid lg:grid-cols-2 gap-6`,
      children: [
        (0, L.jsxs)(R.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.5 },
          className: `glass rounded-2xl p-6 sm:p-8 space-y-3`,
          children: [
            (0, L.jsxs)(`div`, {
              className: `flex items-center gap-2 text-sm text-muted-foreground`,
              children: [
                (0, L.jsx)(Au, { className: `text-[var(--brand-blue)]` }),
                ` Professional Summary`,
              ],
            }),
            (0, L.jsx)(`p`, {
              className: `text-foreground/90 leading-relaxed`,
              children: bd,
            }),
          ],
        }),
        (0, L.jsxs)(R.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.5, delay: 0.1 },
          className: `glass rounded-2xl p-6 sm:p-8 space-y-3`,
          children: [
            (0, L.jsxs)(`div`, {
              className: `flex items-center gap-2 text-sm text-muted-foreground`,
              children: [
                (0, L.jsx)(ju, { className: `text-[var(--brand-purple)]` }),
                ` Career Objective`,
              ],
            }),
            (0, L.jsx)(`p`, {
              className: `text-foreground/90 leading-relaxed`,
              children: xd,
            }),
          ],
        }),
        (0, L.jsxs)(R.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.5, delay: 0.15 },
          className: `glass rounded-2xl p-6 sm:p-8`,
          children: [
            (0, L.jsxs)(`div`, {
              className: `flex items-center gap-2 text-sm text-muted-foreground mb-4`,
              children: [
                (0, L.jsx)(Mu, { className: `text-[var(--brand-cyan)]` }),
                ` Soft Skills`,
              ],
            }),
            (0, L.jsx)(`div`, {
              className: `flex flex-wrap gap-2`,
              children: Od.map((e) =>
                (0, L.jsx)(
                  `span`,
                  {
                    className: `px-3 py-1.5 text-sm rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition`,
                    children: e,
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
        (0, L.jsxs)(R.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.5, delay: 0.2 },
          className: `glass rounded-2xl p-6 sm:p-8`,
          children: [
            (0, L.jsxs)(`div`, {
              className: `flex items-center gap-2 text-sm text-muted-foreground mb-4`,
              children: [
                (0, L.jsx)(zu, { className: `text-pink-400` }),
                ` Interests`,
              ],
            }),
            (0, L.jsx)(`div`, {
              className: `flex flex-wrap gap-2`,
              children: kd.map((e) =>
                (0, L.jsx)(
                  `span`,
                  {
                    className: `px-3 py-1.5 text-sm rounded-full border border-white/10 bg-[image:var(--gradient-brand-soft)]`,
                    children: e,
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function Id() {
  return (0, L.jsx)(Pd, {
    id: `skills`,
    eyebrow: `Toolbox`,
    title: `Technical Skills`,
    subtitle: `Technologies and tools I use to build reliable, modern web applications.`,
    children: (0, L.jsx)(`div`, {
      className: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`,
      children: Cd.map((e, t) =>
        (0, L.jsxs)(
          R.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: `-60px` },
            transition: { duration: 0.5, delay: t * 0.05 },
            className: `glass rounded-2xl p-6 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--brand-blue)_50%,transparent)] transition-all`,
            children: [
              (0, L.jsx)(`h3`, {
                className: `text-sm uppercase tracking-widest text-muted-foreground mb-4`,
                children: e.title,
              }),
              (0, L.jsx)(`div`, {
                className: `flex flex-wrap gap-3`,
                children: e.items.map(({ name: e, Icon: t, color: n }) =>
                  (0, L.jsxs)(
                    R.div,
                    {
                      whileHover: { y: -3, scale: 1.03 },
                      className: `group flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5`,
                      children: [
                        (0, L.jsx)(t, { size: 20, style: { color: n } }),
                        (0, L.jsx)(`span`, {
                          className: `text-sm`,
                          children: e,
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            ],
          },
          e.title,
        ),
      ),
    }),
  });
}
function Ld() {
  return (0, L.jsx)(Pd, {
    id: `education`,
    eyebrow: `Education`,
    title: `Academic Background`,
    children: (0, L.jsx)(`div`, {
      className: `relative border-l border-white/10 pl-8 space-y-6`,
      children: Sd.map((e, t) =>
        (0, L.jsxs)(
          R.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.5, delay: t * 0.1 },
            className: `relative`,
            children: [
              (0, L.jsx)(`span`, {
                className: `absolute -left-[43px] top-4 grid place-items-center w-9 h-9 rounded-full bg-[image:var(--gradient-brand)] text-white shadow-[var(--shadow-glow)]`,
                children: (0, L.jsx)(cd, {}),
              }),
              (0, L.jsxs)(`div`, {
                className: `glass rounded-2xl p-6`,
                children: [
                  (0, L.jsx)(`h3`, {
                    className: `text-xl font-semibold`,
                    children: e.degree,
                  }),
                  (0, L.jsx)(`p`, {
                    className: `text-muted-foreground`,
                    children: e.field,
                  }),
                  (0, L.jsx)(`p`, {
                    className: `mt-2 text-foreground/90`,
                    children: e.school,
                  }),
                  (0, L.jsxs)(`div`, {
                    className: `mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground`,
                    children: [
                      (0, L.jsxs)(`span`, {
                        className: `inline-flex items-center gap-2`,
                        children: [(0, L.jsx)(Ju, {}), ` `, e.period],
                      }),
                      (0, L.jsxs)(`span`, {
                        className: `inline-flex items-center gap-2`,
                        children: [
                          (0, L.jsx)(Xu, {
                            className: `text-[var(--brand-cyan)]`,
                          }),
                          ` `,
                          e.detail,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          },
          t,
        ),
      ),
    }),
  });
}
function Rd() {
  return (0, L.jsx)(Pd, {
    id: `internship`,
    eyebrow: `Experience`,
    title: `Internship`,
    children: (0, L.jsx)(R.div, {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0 },
      transition: { duration: 0.5 },
      className: `glass rounded-2xl p-6 sm:p-8`,
      children: (0, L.jsxs)(`div`, {
        className: `flex items-start gap-4`,
        children: [
          (0, L.jsx)(`div`, {
            className: `grid place-items-center w-12 h-12 rounded-xl bg-[image:var(--gradient-brand)] text-white shrink-0`,
            children: (0, L.jsx)(Yu, { size: 22 }),
          }),
          (0, L.jsxs)(`div`, {
            className: `flex-1`,
            children: [
              (0, L.jsxs)(`div`, {
                className: `flex flex-wrap items-baseline justify-between gap-2`,
                children: [
                  (0, L.jsx)(`h3`, {
                    className: `text-xl font-semibold`,
                    children: wd.company,
                  }),
                  (0, L.jsxs)(`span`, {
                    className: `inline-flex items-center gap-2 text-sm text-muted-foreground`,
                    children: [(0, L.jsx)(Gu, {}), ` `, wd.duration],
                  }),
                ],
              }),
              (0, L.jsx)(`p`, {
                className: `mt-3 text-foreground/90 leading-relaxed`,
                children: wd.description,
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function zd() {
  return (0, L.jsx)(Pd, {
    id: `projects`,
    eyebrow: `Work`,
    title: `Featured Projects`,
    subtitle: `Hands-on work I've built while learning full stack development. More projects coming soon.`,
    children: (0, L.jsxs)(`div`, {
      className: `grid md:grid-cols-2 gap-6`,
      children: [
        Td.map((e, t) =>
          (0, L.jsxs)(
            R.article,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.5, delay: t * 0.1 },
              className: `glass rounded-2xl p-6 flex flex-col group hover:-translate-y-1 transition-transform`,
              children: [
                (0, L.jsxs)(`div`, {
                  className: `aspect-[16/9] rounded-xl bg-[image:var(--gradient-brand-soft)] border border-white/10 mb-5 grid place-items-center relative overflow-hidden`,
                  children: [
                    (0, L.jsx)(`div`, {
                      className: `absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_30%,white,transparent_40%)]`,
                    }),
                    (0, L.jsx)(`span`, {
                      className: `text-4xl font-bold text-gradient relative`,
                      children: e.title.split(` `).slice(0, 2).join(` `),
                    }),
                  ],
                }),
                (0, L.jsx)(`h3`, {
                  className: `text-xl font-semibold`,
                  children: e.title,
                }),
                (0, L.jsx)(`p`, {
                  className: `mt-2 text-muted-foreground text-sm leading-relaxed`,
                  children: e.description,
                }),
                (0, L.jsx)(`ul`, {
                  className: `mt-4 grid grid-cols-2 gap-2 text-sm`,
                  children: e.features.map((e) =>
                    (0, L.jsxs)(
                      `li`,
                      {
                        className: `flex items-center gap-2 text-foreground/80`,
                        children: [
                          (0, L.jsx)(qu, {
                            className: `text-[var(--brand-cyan)] shrink-0`,
                            size: 14,
                          }),
                          e,
                        ],
                      },
                      e,
                    ),
                  ),
                }),
                (0, L.jsx)(`div`, {
                  className: `mt-5 flex flex-wrap gap-2`,
                  children: e.stack.map((e) =>
                    (0, L.jsx)(
                      `span`,
                      {
                        className: `px-2.5 py-1 text-xs rounded-md border border-white/10 bg-white/5 text-muted-foreground`,
                        children: e,
                      },
                      e,
                    ),
                  ),
                }),
                (0, L.jsxs)(`div`, {
                  className: `mt-6 flex gap-3`,
                  children: [
                    (0, L.jsxs)(`a`, {
                      href: e.github,
                      target: `_blank`,
                      rel: `noreferrer`,
                      className: `btn-outline text-sm !py-2 !px-4`,
                      children: [(0, L.jsx)(Bu, {}), ` GitHub`],
                    }),
                    (0, L.jsxs)(`button`, {
                      type: `button`,
                      disabled: !0,
                      className: `inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius)] text-sm font-semibold border border-white/10 bg-white/5 text-muted-foreground cursor-not-allowed`,
                      children: [
                        (0, L.jsx)(Uu, {}),
                        ` Live Demo — Coming Soon`,
                      ],
                    }),
                  ],
                }),
              ],
            },
            e.title,
          ),
        ),
        (0, L.jsxs)(R.div, {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.5, delay: 0.15 },
          className: `glass rounded-2xl p-6 flex flex-col items-center justify-center text-center border-dashed min-h-[320px]`,
          style: { borderStyle: `dashed` },
          children: [
            (0, L.jsx)(`div`, {
              className: `w-14 h-14 rounded-2xl grid place-items-center bg-[image:var(--gradient-brand-soft)] mb-4`,
              children: (0, L.jsx)(`span`, {
                className: `text-2xl`,
                children: `✨`,
              }),
            }),
            (0, L.jsx)(`h3`, {
              className: `text-lg font-semibold`,
              children: `More projects coming soon`,
            }),
            (0, L.jsx)(`p`, {
              className: `mt-2 text-sm text-muted-foreground max-w-xs`,
              children: `Currently building new full stack projects with Spring Boot, React, and REST APIs.`,
            }),
          ],
        }),
      ],
    }),
  });
}
function Bd() {
  return (0, L.jsx)(Pd, {
    id: `certifications`,
    eyebrow: `Learning`,
    title: `Certifications`,
    children: (0, L.jsxs)(R.div, {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0 },
      transition: { duration: 0.5 },
      className: `glass rounded-2xl p-10 text-center`,
      children: [
        (0, L.jsx)(`div`, {
          className: `mx-auto w-14 h-14 grid place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-white shadow-[var(--shadow-glow)]`,
          children: (0, L.jsx)(Xu, { size: 22 }),
        }),
        (0, L.jsx)(`p`, {
          className: `mt-4 text-lg`,
          children: `Certifications will be added soon.`,
        }),
        (0, L.jsx)(`p`, {
          className: `mt-1 text-sm text-muted-foreground`,
          children: `Actively pursuing courses in Java, Spring Boot, and full stack development.`,
        }),
      ],
    }),
  });
}
function Vd() {
  return (0, L.jsx)(Pd, {
    id: `achievements`,
    eyebrow: `Highlights`,
    title: `Achievements`,
    children: (0, L.jsx)(`div`, {
      className: `grid sm:grid-cols-3 gap-5`,
      children: Ed.map((e, t) =>
        (0, L.jsxs)(
          R.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.5, delay: t * 0.08 },
            className: `glass rounded-2xl p-6 hover:-translate-y-1 transition-transform`,
            children: [
              (0, L.jsx)(`div`, {
                className: `w-10 h-10 rounded-xl grid place-items-center bg-[image:var(--gradient-brand)] text-white mb-4`,
                children: (0, L.jsx)(Ou, {}),
              }),
              (0, L.jsx)(`p`, { className: `font-medium`, children: e }),
            ],
          },
          e,
        ),
      ),
    }),
  });
}
function Hd() {
  return (0, L.jsx)(Pd, {
    id: `coding`,
    eyebrow: `Profiles`,
    title: `Coding Profiles`,
    subtitle: `Where you can follow my code, connect, and (soon) my problem solving journey.`,
    children: (0, L.jsx)(`div`, {
      className: `grid sm:grid-cols-2 lg:grid-cols-3 gap-5`,
      children: Dd.map((e, t) => {
        let n = (0, L.jsxs)(L.Fragment, {
            children: [
              (0, L.jsx)(`div`, {
                className: `w-12 h-12 rounded-xl grid place-items-center bg-white/5 border border-white/10 group-hover:bg-[image:var(--gradient-brand-soft)] transition-colors`,
                children: (0, L.jsx)(e.Icon, { size: 22 }),
              }),
              (0, L.jsxs)(`div`, {
                className: `flex-1`,
                children: [
                  (0, L.jsx)(`div`, {
                    className: `font-semibold`,
                    children: e.name,
                  }),
                  (0, L.jsx)(`div`, {
                    className: `text-xs text-muted-foreground`,
                    children: e.available
                      ? `View profile`
                      : `Profile Coming Soon`,
                  }),
                ],
              }),
              e.available &&
                (0, L.jsx)(Uu, {
                  className: `text-muted-foreground group-hover:text-foreground`,
                }),
            ],
          }),
          r = `group glass rounded-2xl p-5 flex items-center gap-4 transition-all`;
        return (0, L.jsx)(
          R.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.5, delay: t * 0.05 },
            children:
              e.available && e.url
                ? (0, L.jsx)(`a`, {
                    href: e.url,
                    target: `_blank`,
                    rel: `noreferrer`,
                    className: `${r} hover:-translate-y-1`,
                    children: n,
                  })
                : (0, L.jsx)(`div`, {
                    className: `${r} opacity-70`,
                    children: n,
                  }),
          },
          e.name,
        );
      }),
    }),
  });
}
function Ud() {
  return (0, L.jsx)(Pd, {
    id: `resume`,
    eyebrow: `Resume`,
    title: `Grab my Resume`,
    children: (0, L.jsxs)(R.div, {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0 },
      transition: { duration: 0.5 },
      className: `glass rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6`,
      children: [
        (0, L.jsx)(`div`, {
          className: `w-16 h-16 rounded-2xl grid place-items-center bg-[image:var(--gradient-brand)] text-white shrink-0`,
          children: (0, L.jsx)(Vu, { size: 26 }),
        }),
        (0, L.jsxs)(`div`, {
          className: `flex-1 text-center sm:text-left`,
          children: [
            (0, L.jsx)(`h3`, {
              className: `text-xl font-semibold`,
              children: `Prefer a one-pager?`,
            }),
            (0, L.jsx)(`p`, {
              className: `text-muted-foreground text-sm mt-1`,
              children: `Download or view my resume — updated regularly with the latest work and skills.`,
            }),
          ],
        }),
        (0, L.jsxs)(`div`, {
          className: `flex gap-3`,
          children: [
            (0, L.jsxs)(`a`, {
              href: B.resumeUrl,
              download: !0,
              className: `btn-primary`,
              children: [(0, L.jsx)(Wu, {}), ` Download`],
            }),
            (0, L.jsxs)(`a`, {
              href: B.resumeUrl,
              target: `_blank`,
              rel: `noreferrer`,
              className: `btn-outline`,
              children: [(0, L.jsx)(Hu, {}), ` View`],
            }),
          ],
        }),
      ],
    }),
  });
}
var V;
(function (e) {
  e.assertEqual = (e) => {};
  function t(e) {}
  e.assertIs = t;
  function n(e) {
    throw Error();
  }
  ((e.assertNever = n),
    (e.arrayToEnum = (e) => {
      let t = {};
      for (let n of e) t[n] = n;
      return t;
    }),
    (e.getValidEnumValues = (t) => {
      let n = e.objectKeys(t).filter((e) => typeof t[t[e]] != `number`),
        r = {};
      for (let e of n) r[e] = t[e];
      return e.objectValues(r);
    }),
    (e.objectValues = (t) =>
      e.objectKeys(t).map(function (e) {
        return t[e];
      })),
    (e.objectKeys =
      typeof Object.keys == `function`
        ? (e) => Object.keys(e)
        : (e) => {
            let t = [];
            for (let n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t;
          }),
    (e.find = (e, t) => {
      for (let n of e) if (t(n)) return n;
    }),
    (e.isInteger =
      typeof Number.isInteger == `function`
        ? (e) => Number.isInteger(e)
        : (e) =>
            typeof e == `number` && Number.isFinite(e) && Math.floor(e) === e));
  function r(e, t = ` | `) {
    return e.map((e) => (typeof e == `string` ? `'${e}'` : e)).join(t);
  }
  ((e.joinValues = r),
    (e.jsonStringifyReplacer = (e, t) =>
      typeof t == `bigint` ? t.toString() : t));
})((V ||= {}));
var Wd;
(function (e) {
  e.mergeShapes = (e, t) => ({ ...e, ...t });
})((Wd ||= {}));
var H = V.arrayToEnum([
    `string`,
    `nan`,
    `number`,
    `integer`,
    `float`,
    `boolean`,
    `date`,
    `bigint`,
    `symbol`,
    `function`,
    `undefined`,
    `null`,
    `array`,
    `object`,
    `unknown`,
    `promise`,
    `void`,
    `never`,
    `map`,
    `set`,
  ]),
  Gd = (e) => {
    switch (typeof e) {
      case `undefined`:
        return H.undefined;
      case `string`:
        return H.string;
      case `number`:
        return Number.isNaN(e) ? H.nan : H.number;
      case `boolean`:
        return H.boolean;
      case `function`:
        return H.function;
      case `bigint`:
        return H.bigint;
      case `symbol`:
        return H.symbol;
      case `object`:
        return Array.isArray(e)
          ? H.array
          : e === null
            ? H.null
            : e.then &&
                typeof e.then == `function` &&
                e.catch &&
                typeof e.catch == `function`
              ? H.promise
              : typeof Map < `u` && e instanceof Map
                ? H.map
                : typeof Set < `u` && e instanceof Set
                  ? H.set
                  : typeof Date < `u` && e instanceof Date
                    ? H.date
                    : H.object;
      default:
        return H.unknown;
    }
  },
  U = V.arrayToEnum([
    `invalid_type`,
    `invalid_literal`,
    `custom`,
    `invalid_union`,
    `invalid_union_discriminator`,
    `invalid_enum_value`,
    `unrecognized_keys`,
    `invalid_arguments`,
    `invalid_return_type`,
    `invalid_date`,
    `invalid_string`,
    `too_small`,
    `too_big`,
    `invalid_intersection_types`,
    `not_multiple_of`,
    `not_finite`,
  ]),
  Kd = class e extends Error {
    get errors() {
      return this.issues;
    }
    constructor(e) {
      (super(),
        (this.issues = []),
        (this.addIssue = (e) => {
          this.issues = [...this.issues, e];
        }),
        (this.addIssues = (e = []) => {
          this.issues = [...this.issues, ...e];
        }));
      let t = new.target.prototype;
      (Object.setPrototypeOf
        ? Object.setPrototypeOf(this, t)
        : (this.__proto__ = t),
        (this.name = `ZodError`),
        (this.issues = e));
    }
    format(e) {
      let t =
          e ||
          function (e) {
            return e.message;
          },
        n = { _errors: [] },
        r = (e) => {
          for (let i of e.issues)
            if (i.code === `invalid_union`) i.unionErrors.map(r);
            else if (i.code === `invalid_return_type`) r(i.returnTypeError);
            else if (i.code === `invalid_arguments`) r(i.argumentsError);
            else if (i.path.length === 0) n._errors.push(t(i));
            else {
              let e = n,
                r = 0;
              for (; r < i.path.length; ) {
                let n = i.path[r];
                (r === i.path.length - 1
                  ? ((e[n] = e[n] || { _errors: [] }), e[n]._errors.push(t(i)))
                  : (e[n] = e[n] || { _errors: [] }),
                  (e = e[n]),
                  r++);
              }
            }
        };
      return (r(this), n);
    }
    static assert(t) {
      if (!(t instanceof e)) throw Error(`Not a ZodError: ${t}`);
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, V.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(e = (e) => e.message) {
      let t = {},
        n = [];
      for (let r of this.issues)
        if (r.path.length > 0) {
          let n = r.path[0];
          ((t[n] = t[n] || []), t[n].push(e(r)));
        } else n.push(e(r));
      return { formErrors: n, fieldErrors: t };
    }
    get formErrors() {
      return this.flatten();
    }
  };
Kd.create = (e) => new Kd(e);
var qd = (e, t) => {
    let n;
    switch (e.code) {
      case U.invalid_type:
        n =
          e.received === H.undefined
            ? `Required`
            : `Expected ${e.expected}, received ${e.received}`;
        break;
      case U.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(e.expected, V.jsonStringifyReplacer)}`;
        break;
      case U.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${V.joinValues(e.keys, `, `)}`;
        break;
      case U.invalid_union:
        n = `Invalid input`;
        break;
      case U.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${V.joinValues(e.options)}`;
        break;
      case U.invalid_enum_value:
        n = `Invalid enum value. Expected ${V.joinValues(e.options)}, received '${e.received}'`;
        break;
      case U.invalid_arguments:
        n = `Invalid function arguments`;
        break;
      case U.invalid_return_type:
        n = `Invalid function return type`;
        break;
      case U.invalid_date:
        n = `Invalid date`;
        break;
      case U.invalid_string:
        typeof e.validation == `object`
          ? `includes` in e.validation
            ? ((n = `Invalid input: must include "${e.validation.includes}"`),
              typeof e.validation.position == `number` &&
                (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
            : `startsWith` in e.validation
              ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
              : `endsWith` in e.validation
                ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
                : V.assertNever(e.validation)
          : (n =
              e.validation === `regex` ? `Invalid` : `Invalid ${e.validation}`);
        break;
      case U.too_small:
        n =
          e.type === `array`
            ? `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at least` : `more than`} ${e.minimum} element(s)`
            : e.type === `string`
              ? `String must contain ${e.exact ? `exactly` : e.inclusive ? `at least` : `over`} ${e.minimum} character(s)`
              : e.type === `number` || e.type === `bigint`
                ? `Number must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${e.minimum}`
                : e.type === `date`
                  ? `Date must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(e.minimum))}`
                  : `Invalid input`;
        break;
      case U.too_big:
        n =
          e.type === `array`
            ? `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `less than`} ${e.maximum} element(s)`
            : e.type === `string`
              ? `String must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `under`} ${e.maximum} character(s)`
              : e.type === `number`
                ? `Number must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`
                : e.type === `bigint`
                  ? `BigInt must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`
                  : e.type === `date`
                    ? `Date must be ${e.exact ? `exactly` : e.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(e.maximum))}`
                    : `Invalid input`;
        break;
      case U.custom:
        n = `Invalid input`;
        break;
      case U.invalid_intersection_types:
        n = `Intersection results could not be merged`;
        break;
      case U.not_multiple_of:
        n = `Number must be a multiple of ${e.multipleOf}`;
        break;
      case U.not_finite:
        n = `Number must be finite`;
        break;
      default:
        ((n = t.defaultError), V.assertNever(e));
    }
    return { message: n };
  },
  Jd = qd;
function Yd() {
  return Jd;
}
var Xd = (e) => {
  let { data: t, path: n, errorMaps: r, issueData: i } = e,
    a = [...n, ...(i.path || [])],
    o = { ...i, path: a };
  if (i.message !== void 0) return { ...i, path: a, message: i.message };
  let s = ``,
    c = r
      .filter((e) => !!e)
      .slice()
      .reverse();
  for (let e of c) s = e(o, { data: t, defaultError: s }).message;
  return { ...i, path: a, message: s };
};
function W(e, t) {
  let n = Yd(),
    r = Xd({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        n,
        n === qd ? void 0 : qd,
      ].filter((e) => !!e),
    });
  e.common.issues.push(r);
}
var G = class e {
    constructor() {
      this.value = `valid`;
    }
    dirty() {
      this.value === `valid` && (this.value = `dirty`);
    }
    abort() {
      this.value !== `aborted` && (this.value = `aborted`);
    }
    static mergeArray(e, t) {
      let n = [];
      for (let r of t) {
        if (r.status === `aborted`) return K;
        (r.status === `dirty` && e.dirty(), n.push(r.value));
      }
      return { status: e.value, value: n };
    }
    static async mergeObjectAsync(t, n) {
      let r = [];
      for (let e of n) {
        let t = await e.key,
          n = await e.value;
        r.push({ key: t, value: n });
      }
      return e.mergeObjectSync(t, r);
    }
    static mergeObjectSync(e, t) {
      let n = {};
      for (let r of t) {
        let { key: t, value: i } = r;
        if (t.status === `aborted` || i.status === `aborted`) return K;
        (t.status === `dirty` && e.dirty(),
          i.status === `dirty` && e.dirty(),
          t.value !== `__proto__` &&
            (i.value !== void 0 || r.alwaysSet) &&
            (n[t.value] = i.value));
      }
      return { status: e.value, value: n };
    }
  },
  K = Object.freeze({ status: `aborted` }),
  Zd = (e) => ({ status: `dirty`, value: e }),
  q = (e) => ({ status: `valid`, value: e }),
  Qd = (e) => e.status === `aborted`,
  $d = (e) => e.status === `dirty`,
  ef = (e) => e.status === `valid`,
  tf = (e) => typeof Promise < `u` && e instanceof Promise,
  J;
(function (e) {
  ((e.errToObj = (e) => (typeof e == `string` ? { message: e } : e || {})),
    (e.toString = (e) => (typeof e == `string` ? e : e?.message)));
})((J ||= {}));
var nf = class {
    constructor(e, t, n, r) {
      ((this._cachedPath = []),
        (this.parent = e),
        (this.data = t),
        (this._path = n),
        (this._key = r));
    }
    get path() {
      return (
        this._cachedPath.length ||
          (Array.isArray(this._key)
            ? this._cachedPath.push(...this._path, ...this._key)
            : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
      );
    }
  },
  rf = (e, t) => {
    if (ef(t)) return { success: !0, data: t.value };
    if (!e.common.issues.length)
      throw Error(`Validation failed but no issues detected.`);
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        let t = new Kd(e.common.issues);
        return ((this._error = t), this._error);
      },
    };
  };
function Y(e) {
  if (!e) return {};
  let {
    errorMap: t,
    invalid_type_error: n,
    required_error: r,
    description: i,
  } = e;
  if (t && (n || r))
    throw Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return t
    ? { errorMap: t, description: i }
    : {
        errorMap: (t, i) => {
          let { message: a } = e;
          return t.code === `invalid_enum_value`
            ? { message: a ?? i.defaultError }
            : i.data === void 0
              ? { message: a ?? r ?? i.defaultError }
              : t.code === `invalid_type`
                ? { message: a ?? n ?? i.defaultError }
                : { message: i.defaultError };
        },
        description: i,
      };
}
var X = class {
    get description() {
      return this._def.description;
    }
    _getType(e) {
      return Gd(e.data);
    }
    _getOrReturnCtx(e, t) {
      return (
        t || {
          common: e.parent.common,
          data: e.data,
          parsedType: Gd(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        }
      );
    }
    _processInputParams(e) {
      return {
        status: new G(),
        ctx: {
          common: e.parent.common,
          data: e.data,
          parsedType: Gd(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        },
      };
    }
    _parseSync(e) {
      let t = this._parse(e);
      if (tf(t)) throw Error(`Synchronous parse encountered promise.`);
      return t;
    }
    _parseAsync(e) {
      let t = this._parse(e);
      return Promise.resolve(t);
    }
    parse(e, t) {
      let n = this.safeParse(e, t);
      if (n.success) return n.data;
      throw n.error;
    }
    safeParse(e, t) {
      let n = {
        common: {
          issues: [],
          async: t?.async ?? !1,
          contextualErrorMap: t?.errorMap,
        },
        path: t?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: Gd(e),
      };
      return rf(n, this._parseSync({ data: e, path: n.path, parent: n }));
    }
    "~validate"(e) {
      let t = {
        common: { issues: [], async: !!this[`~standard`].async },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: Gd(e),
      };
      if (!this[`~standard`].async)
        try {
          let n = this._parseSync({ data: e, path: [], parent: t });
          return ef(n) ? { value: n.value } : { issues: t.common.issues };
        } catch (e) {
          (e?.message?.toLowerCase()?.includes(`encountered`) &&
            (this[`~standard`].async = !0),
            (t.common = { issues: [], async: !0 }));
        }
      return this._parseAsync({ data: e, path: [], parent: t }).then((e) =>
        ef(e) ? { value: e.value } : { issues: t.common.issues },
      );
    }
    async parseAsync(e, t) {
      let n = await this.safeParseAsync(e, t);
      if (n.success) return n.data;
      throw n.error;
    }
    async safeParseAsync(e, t) {
      let n = {
          common: { issues: [], contextualErrorMap: t?.errorMap, async: !0 },
          path: t?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: Gd(e),
        },
        r = this._parse({ data: e, path: n.path, parent: n });
      return rf(n, await (tf(r) ? r : Promise.resolve(r)));
    }
    refine(e, t) {
      let n = (e) =>
        typeof t == `string` || t === void 0
          ? { message: t }
          : typeof t == `function`
            ? t(e)
            : t;
      return this._refinement((t, r) => {
        let i = e(t),
          a = () => r.addIssue({ code: U.custom, ...n(t) });
        return typeof Promise < `u` && i instanceof Promise
          ? i.then((e) => (e ? !0 : (a(), !1)))
          : i
            ? !0
            : (a(), !1);
      });
    }
    refinement(e, t) {
      return this._refinement((n, r) =>
        e(n) ? !0 : (r.addIssue(typeof t == `function` ? t(n, r) : t), !1),
      );
    }
    _refinement(e) {
      return new sp({
        schema: this,
        typeName: Z.ZodEffects,
        effect: { type: `refinement`, refinement: e },
      });
    }
    superRefine(e) {
      return this._refinement(e);
    }
    constructor(e) {
      ((this.spa = this.safeParseAsync),
        (this._def = e),
        (this.parse = this.parse.bind(this)),
        (this.safeParse = this.safeParse.bind(this)),
        (this.parseAsync = this.parseAsync.bind(this)),
        (this.safeParseAsync = this.safeParseAsync.bind(this)),
        (this.spa = this.spa.bind(this)),
        (this.refine = this.refine.bind(this)),
        (this.refinement = this.refinement.bind(this)),
        (this.superRefine = this.superRefine.bind(this)),
        (this.optional = this.optional.bind(this)),
        (this.nullable = this.nullable.bind(this)),
        (this.nullish = this.nullish.bind(this)),
        (this.array = this.array.bind(this)),
        (this.promise = this.promise.bind(this)),
        (this.or = this.or.bind(this)),
        (this.and = this.and.bind(this)),
        (this.transform = this.transform.bind(this)),
        (this.brand = this.brand.bind(this)),
        (this.default = this.default.bind(this)),
        (this.catch = this.catch.bind(this)),
        (this.describe = this.describe.bind(this)),
        (this.pipe = this.pipe.bind(this)),
        (this.readonly = this.readonly.bind(this)),
        (this.isNullable = this.isNullable.bind(this)),
        (this.isOptional = this.isOptional.bind(this)),
        (this[`~standard`] = {
          version: 1,
          vendor: `zod`,
          validate: (e) => this[`~validate`](e),
        }));
    }
    optional() {
      return cp.create(this, this._def);
    }
    nullable() {
      return lp.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return Hf.create(this);
    }
    promise() {
      return op.create(this, this._def);
    }
    or(e) {
      return Gf.create([this, e], this._def);
    }
    and(e) {
      return Yf.create(this, e, this._def);
    }
    transform(e) {
      return new sp({
        ...Y(this._def),
        schema: this,
        typeName: Z.ZodEffects,
        effect: { type: `transform`, transform: e },
      });
    }
    default(e) {
      let t = typeof e == `function` ? e : () => e;
      return new up({
        ...Y(this._def),
        innerType: this,
        defaultValue: t,
        typeName: Z.ZodDefault,
      });
    }
    brand() {
      return new pp({ typeName: Z.ZodBranded, type: this, ...Y(this._def) });
    }
    catch(e) {
      let t = typeof e == `function` ? e : () => e;
      return new dp({
        ...Y(this._def),
        innerType: this,
        catchValue: t,
        typeName: Z.ZodCatch,
      });
    }
    describe(e) {
      let t = this.constructor;
      return new t({ ...this._def, description: e });
    }
    pipe(e) {
      return mp.create(this, e);
    }
    readonly() {
      return hp.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  },
  af = /^c[^\s-]{8,}$/i,
  of = /^[0-9a-z]+$/,
  sf = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  cf =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  lf = /^[a-z0-9_-]{21}$/i,
  uf = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  df =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  ff =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  pf = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,
  mf,
  hf =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  gf =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  _f =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  vf =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  yf = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  bf = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  xf = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`,
  Sf = RegExp(`^${xf}$`);
function Cf(e) {
  let t = `[0-5]\\d`;
  e.precision
    ? (t = `${t}\\.\\d{${e.precision}}`)
    : (e.precision ?? (t = `${t}(\\.\\d+)?`));
  let n = e.precision ? `+` : `?`;
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function wf(e) {
  return RegExp(`^${Cf(e)}$`);
}
function Tf(e) {
  let t = `${xf}T${Cf(e)}`,
    n = [];
  return (
    n.push(e.local ? `Z?` : `Z`),
    e.offset && n.push(`([+-]\\d{2}:?\\d{2})`),
    (t = `${t}(${n.join(`|`)})`),
    RegExp(`^${t}$`)
  );
}
function Ef(e, t) {
  return !!(
    ((t === `v4` || !t) && hf.test(e)) ||
    ((t === `v6` || !t) && _f.test(e))
  );
}
function Df(e, t) {
  if (!uf.test(e)) return !1;
  try {
    let [n] = e.split(`.`);
    if (!n) return !1;
    let r = n
        .replace(/-/g, `+`)
        .replace(/_/g, `/`)
        .padEnd(n.length + ((4 - (n.length % 4)) % 4), `=`),
      i = JSON.parse(atob(r));
    return !(
      typeof i != `object` ||
      !i ||
      (`typ` in i && i?.typ !== `JWT`) ||
      !i.alg ||
      (t && i.alg !== t)
    );
  } catch {
    return !1;
  }
}
function Of(e, t) {
  return !!(
    ((t === `v4` || !t) && gf.test(e)) ||
    ((t === `v6` || !t) && vf.test(e))
  );
}
var kf = class e extends X {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = String(e.data)),
      this._getType(e) !== H.string)
    ) {
      let t = this._getOrReturnCtx(e);
      return (
        W(t, {
          code: U.invalid_type,
          expected: H.string,
          received: t.parsedType,
        }),
        K
      );
    }
    let t = new G(),
      n;
    for (let r of this._def.checks)
      if (r.kind === `min`)
        e.data.length < r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          W(n, {
            code: U.too_small,
            minimum: r.value,
            type: `string`,
            inclusive: !0,
            exact: !1,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `max`)
        e.data.length > r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          W(n, {
            code: U.too_big,
            maximum: r.value,
            type: `string`,
            inclusive: !0,
            exact: !1,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `length`) {
        let i = e.data.length > r.value,
          a = e.data.length < r.value;
        (i || a) &&
          ((n = this._getOrReturnCtx(e, n)),
          i
            ? W(n, {
                code: U.too_big,
                maximum: r.value,
                type: `string`,
                inclusive: !0,
                exact: !0,
                message: r.message,
              })
            : a &&
              W(n, {
                code: U.too_small,
                minimum: r.value,
                type: `string`,
                inclusive: !0,
                exact: !0,
                message: r.message,
              }),
          t.dirty());
      } else if (r.kind === `email`)
        ff.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          W(n, {
            validation: `email`,
            code: U.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `emoji`)
        ((mf ||= new RegExp(pf, `u`)),
          mf.test(e.data) ||
            ((n = this._getOrReturnCtx(e, n)),
            W(n, {
              validation: `emoji`,
              code: U.invalid_string,
              message: r.message,
            }),
            t.dirty()));
      else if (r.kind === `uuid`)
        cf.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          W(n, {
            validation: `uuid`,
            code: U.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `nanoid`)
        lf.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          W(n, {
            validation: `nanoid`,
            code: U.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `cuid`)
        af.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          W(n, {
            validation: `cuid`,
            code: U.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `cuid2`)
        of.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          W(n, {
            validation: `cuid2`,
            code: U.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `ulid`)
        sf.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          W(n, {
            validation: `ulid`,
            code: U.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `url`)
        try {
          new URL(e.data);
        } catch {
          ((n = this._getOrReturnCtx(e, n)),
            W(n, {
              validation: `url`,
              code: U.invalid_string,
              message: r.message,
            }),
            t.dirty());
        }
      else
        r.kind === `regex`
          ? ((r.regex.lastIndex = 0),
            r.regex.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              W(n, {
                validation: `regex`,
                code: U.invalid_string,
                message: r.message,
              }),
              t.dirty()))
          : r.kind === `trim`
            ? (e.data = e.data.trim())
            : r.kind === `includes`
              ? e.data.includes(r.value, r.position) ||
                ((n = this._getOrReturnCtx(e, n)),
                W(n, {
                  code: U.invalid_string,
                  validation: { includes: r.value, position: r.position },
                  message: r.message,
                }),
                t.dirty())
              : r.kind === `toLowerCase`
                ? (e.data = e.data.toLowerCase())
                : r.kind === `toUpperCase`
                  ? (e.data = e.data.toUpperCase())
                  : r.kind === `startsWith`
                    ? e.data.startsWith(r.value) ||
                      ((n = this._getOrReturnCtx(e, n)),
                      W(n, {
                        code: U.invalid_string,
                        validation: { startsWith: r.value },
                        message: r.message,
                      }),
                      t.dirty())
                    : r.kind === `endsWith`
                      ? e.data.endsWith(r.value) ||
                        ((n = this._getOrReturnCtx(e, n)),
                        W(n, {
                          code: U.invalid_string,
                          validation: { endsWith: r.value },
                          message: r.message,
                        }),
                        t.dirty())
                      : r.kind === `datetime`
                        ? Tf(r).test(e.data) ||
                          ((n = this._getOrReturnCtx(e, n)),
                          W(n, {
                            code: U.invalid_string,
                            validation: `datetime`,
                            message: r.message,
                          }),
                          t.dirty())
                        : r.kind === `date`
                          ? Sf.test(e.data) ||
                            ((n = this._getOrReturnCtx(e, n)),
                            W(n, {
                              code: U.invalid_string,
                              validation: `date`,
                              message: r.message,
                            }),
                            t.dirty())
                          : r.kind === `time`
                            ? wf(r).test(e.data) ||
                              ((n = this._getOrReturnCtx(e, n)),
                              W(n, {
                                code: U.invalid_string,
                                validation: `time`,
                                message: r.message,
                              }),
                              t.dirty())
                            : r.kind === `duration`
                              ? df.test(e.data) ||
                                ((n = this._getOrReturnCtx(e, n)),
                                W(n, {
                                  validation: `duration`,
                                  code: U.invalid_string,
                                  message: r.message,
                                }),
                                t.dirty())
                              : r.kind === `ip`
                                ? Ef(e.data, r.version) ||
                                  ((n = this._getOrReturnCtx(e, n)),
                                  W(n, {
                                    validation: `ip`,
                                    code: U.invalid_string,
                                    message: r.message,
                                  }),
                                  t.dirty())
                                : r.kind === `jwt`
                                  ? Df(e.data, r.alg) ||
                                    ((n = this._getOrReturnCtx(e, n)),
                                    W(n, {
                                      validation: `jwt`,
                                      code: U.invalid_string,
                                      message: r.message,
                                    }),
                                    t.dirty())
                                  : r.kind === `cidr`
                                    ? Of(e.data, r.version) ||
                                      ((n = this._getOrReturnCtx(e, n)),
                                      W(n, {
                                        validation: `cidr`,
                                        code: U.invalid_string,
                                        message: r.message,
                                      }),
                                      t.dirty())
                                    : r.kind === `base64`
                                      ? yf.test(e.data) ||
                                        ((n = this._getOrReturnCtx(e, n)),
                                        W(n, {
                                          validation: `base64`,
                                          code: U.invalid_string,
                                          message: r.message,
                                        }),
                                        t.dirty())
                                      : r.kind === `base64url`
                                        ? bf.test(e.data) ||
                                          ((n = this._getOrReturnCtx(e, n)),
                                          W(n, {
                                            validation: `base64url`,
                                            code: U.invalid_string,
                                            message: r.message,
                                          }),
                                          t.dirty())
                                        : V.assertNever(r);
    return { status: t.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((t) => e.test(t), {
      validation: t,
      code: U.invalid_string,
      ...J.errToObj(n),
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(e) {
    return this._addCheck({ kind: `email`, ...J.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: `url`, ...J.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: `emoji`, ...J.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: `uuid`, ...J.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: `nanoid`, ...J.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: `cuid`, ...J.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: `cuid2`, ...J.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: `ulid`, ...J.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: `base64`, ...J.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({ kind: `base64url`, ...J.errToObj(e) });
  }
  jwt(e) {
    return this._addCheck({ kind: `jwt`, ...J.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: `ip`, ...J.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: `cidr`, ...J.errToObj(e) });
  }
  datetime(e) {
    return typeof e == `string`
      ? this._addCheck({
          kind: `datetime`,
          precision: null,
          offset: !1,
          local: !1,
          message: e,
        })
      : this._addCheck({
          kind: `datetime`,
          precision: e?.precision === void 0 ? null : e?.precision,
          offset: e?.offset ?? !1,
          local: e?.local ?? !1,
          ...J.errToObj(e?.message),
        });
  }
  date(e) {
    return this._addCheck({ kind: `date`, message: e });
  }
  time(e) {
    return typeof e == `string`
      ? this._addCheck({ kind: `time`, precision: null, message: e })
      : this._addCheck({
          kind: `time`,
          precision: e?.precision === void 0 ? null : e?.precision,
          ...J.errToObj(e?.message),
        });
  }
  duration(e) {
    return this._addCheck({ kind: `duration`, ...J.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({ kind: `regex`, regex: e, ...J.errToObj(t) });
  }
  includes(e, t) {
    return this._addCheck({
      kind: `includes`,
      value: e,
      position: t?.position,
      ...J.errToObj(t?.message),
    });
  }
  startsWith(e, t) {
    return this._addCheck({ kind: `startsWith`, value: e, ...J.errToObj(t) });
  }
  endsWith(e, t) {
    return this._addCheck({ kind: `endsWith`, value: e, ...J.errToObj(t) });
  }
  min(e, t) {
    return this._addCheck({ kind: `min`, value: e, ...J.errToObj(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: `max`, value: e, ...J.errToObj(t) });
  }
  length(e, t) {
    return this._addCheck({ kind: `length`, value: e, ...J.errToObj(t) });
  }
  nonempty(e) {
    return this.min(1, J.errToObj(e));
  }
  trim() {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: `trim` }],
    });
  }
  toLowerCase() {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: `toLowerCase` }],
    });
  }
  toUpperCase() {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: `toUpperCase` }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === `datetime`);
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === `date`);
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === `time`);
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === `duration`);
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === `email`);
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === `url`);
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === `emoji`);
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === `uuid`);
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === `nanoid`);
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === `cuid`);
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === `cuid2`);
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === `ulid`);
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === `ip`);
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === `cidr`);
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === `base64`);
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === `base64url`);
  }
  get minLength() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
kf.create = (e) =>
  new kf({
    checks: [],
    typeName: Z.ZodString,
    coerce: e?.coerce ?? !1,
    ...Y(e),
  });
function Af(e, t) {
  let n = (e.toString().split(`.`)[1] || ``).length,
    r = (t.toString().split(`.`)[1] || ``).length,
    i = n > r ? n : r;
  return (
    (Number.parseInt(e.toFixed(i).replace(`.`, ``)) %
      Number.parseInt(t.toFixed(i).replace(`.`, ``))) /
    10 ** i
  );
}
var jf = class e extends X {
  constructor() {
    (super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf));
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Number(e.data)),
      this._getType(e) !== H.number)
    ) {
      let t = this._getOrReturnCtx(e);
      return (
        W(t, {
          code: U.invalid_type,
          expected: H.number,
          received: t.parsedType,
        }),
        K
      );
    }
    let t,
      n = new G();
    for (let r of this._def.checks)
      r.kind === `int`
        ? V.isInteger(e.data) ||
          ((t = this._getOrReturnCtx(e, t)),
          W(t, {
            code: U.invalid_type,
            expected: `integer`,
            received: `float`,
            message: r.message,
          }),
          n.dirty())
        : r.kind === `min`
          ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
            ((t = this._getOrReturnCtx(e, t)),
            W(t, {
              code: U.too_small,
              minimum: r.value,
              type: `number`,
              inclusive: r.inclusive,
              exact: !1,
              message: r.message,
            }),
            n.dirty())
          : r.kind === `max`
            ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
              ((t = this._getOrReturnCtx(e, t)),
              W(t, {
                code: U.too_big,
                maximum: r.value,
                type: `number`,
                inclusive: r.inclusive,
                exact: !1,
                message: r.message,
              }),
              n.dirty())
            : r.kind === `multipleOf`
              ? Af(e.data, r.value) !== 0 &&
                ((t = this._getOrReturnCtx(e, t)),
                W(t, {
                  code: U.not_multiple_of,
                  multipleOf: r.value,
                  message: r.message,
                }),
                n.dirty())
              : r.kind === `finite`
                ? Number.isFinite(e.data) ||
                  ((t = this._getOrReturnCtx(e, t)),
                  W(t, { code: U.not_finite, message: r.message }),
                  n.dirty())
                : V.assertNever(r);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit(`min`, e, !0, J.toString(t));
  }
  gt(e, t) {
    return this.setLimit(`min`, e, !1, J.toString(t));
  }
  lte(e, t) {
    return this.setLimit(`max`, e, !0, J.toString(t));
  }
  lt(e, t) {
    return this.setLimit(`max`, e, !1, J.toString(t));
  }
  setLimit(t, n, r, i) {
    return new e({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: J.toString(i) },
      ],
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(e) {
    return this._addCheck({ kind: `int`, message: J.toString(e) });
  }
  positive(e) {
    return this._addCheck({
      kind: `min`,
      value: 0,
      inclusive: !1,
      message: J.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: `max`,
      value: 0,
      inclusive: !1,
      message: J.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: `max`,
      value: 0,
      inclusive: !0,
      message: J.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: `min`,
      value: 0,
      inclusive: !0,
      message: J.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: `multipleOf`,
      value: e,
      message: J.toString(t),
    });
  }
  finite(e) {
    return this._addCheck({ kind: `finite`, message: J.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: `min`,
      inclusive: !0,
      value: -(2 ** 53 - 1),
      message: J.toString(e),
    })._addCheck({
      kind: `max`,
      inclusive: !0,
      value: 2 ** 53 - 1,
      message: J.toString(e),
    });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) =>
        e.kind === `int` || (e.kind === `multipleOf` && V.isInteger(e.value)),
    );
  }
  get isFinite() {
    let e = null,
      t = null;
    for (let n of this._def.checks)
      if (n.kind === `finite` || n.kind === `int` || n.kind === `multipleOf`)
        return !0;
      else
        n.kind === `min`
          ? (t === null || n.value > t) && (t = n.value)
          : n.kind === `max` && (e === null || n.value < e) && (e = n.value);
    return Number.isFinite(t) && Number.isFinite(e);
  }
};
jf.create = (e) =>
  new jf({
    checks: [],
    typeName: Z.ZodNumber,
    coerce: e?.coerce || !1,
    ...Y(e),
  });
var Mf = class e extends X {
  constructor() {
    (super(...arguments), (this.min = this.gte), (this.max = this.lte));
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== H.bigint) return this._getInvalidInput(e);
    let t,
      n = new G();
    for (let r of this._def.checks)
      r.kind === `min`
        ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
          ((t = this._getOrReturnCtx(e, t)),
          W(t, {
            code: U.too_small,
            type: `bigint`,
            minimum: r.value,
            inclusive: r.inclusive,
            message: r.message,
          }),
          n.dirty())
        : r.kind === `max`
          ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
            ((t = this._getOrReturnCtx(e, t)),
            W(t, {
              code: U.too_big,
              type: `bigint`,
              maximum: r.value,
              inclusive: r.inclusive,
              message: r.message,
            }),
            n.dirty())
          : r.kind === `multipleOf`
            ? e.data % r.value !== BigInt(0) &&
              ((t = this._getOrReturnCtx(e, t)),
              W(t, {
                code: U.not_multiple_of,
                multipleOf: r.value,
                message: r.message,
              }),
              n.dirty())
            : V.assertNever(r);
    return { status: n.value, value: e.data };
  }
  _getInvalidInput(e) {
    let t = this._getOrReturnCtx(e);
    return (
      W(t, {
        code: U.invalid_type,
        expected: H.bigint,
        received: t.parsedType,
      }),
      K
    );
  }
  gte(e, t) {
    return this.setLimit(`min`, e, !0, J.toString(t));
  }
  gt(e, t) {
    return this.setLimit(`min`, e, !1, J.toString(t));
  }
  lte(e, t) {
    return this.setLimit(`max`, e, !0, J.toString(t));
  }
  lt(e, t) {
    return this.setLimit(`max`, e, !1, J.toString(t));
  }
  setLimit(t, n, r, i) {
    return new e({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: J.toString(i) },
      ],
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(e) {
    return this._addCheck({
      kind: `min`,
      value: BigInt(0),
      inclusive: !1,
      message: J.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: `max`,
      value: BigInt(0),
      inclusive: !1,
      message: J.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: `max`,
      value: BigInt(0),
      inclusive: !0,
      message: J.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: `min`,
      value: BigInt(0),
      inclusive: !0,
      message: J.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: `multipleOf`,
      value: e,
      message: J.toString(t),
    });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
Mf.create = (e) =>
  new Mf({
    checks: [],
    typeName: Z.ZodBigInt,
    coerce: e?.coerce ?? !1,
    ...Y(e),
  });
var Nf = class extends X {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = !!e.data), this._getType(e) !== H.boolean)
    ) {
      let t = this._getOrReturnCtx(e);
      return (
        W(t, {
          code: U.invalid_type,
          expected: H.boolean,
          received: t.parsedType,
        }),
        K
      );
    }
    return q(e.data);
  }
};
Nf.create = (e) =>
  new Nf({ typeName: Z.ZodBoolean, coerce: e?.coerce || !1, ...Y(e) });
var Pf = class e extends X {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = new Date(e.data)),
      this._getType(e) !== H.date)
    ) {
      let t = this._getOrReturnCtx(e);
      return (
        W(t, {
          code: U.invalid_type,
          expected: H.date,
          received: t.parsedType,
        }),
        K
      );
    }
    if (Number.isNaN(e.data.getTime()))
      return (W(this._getOrReturnCtx(e), { code: U.invalid_date }), K);
    let t = new G(),
      n;
    for (let r of this._def.checks)
      r.kind === `min`
        ? e.data.getTime() < r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          W(n, {
            code: U.too_small,
            message: r.message,
            inclusive: !0,
            exact: !1,
            minimum: r.value,
            type: `date`,
          }),
          t.dirty())
        : r.kind === `max`
          ? e.data.getTime() > r.value &&
            ((n = this._getOrReturnCtx(e, n)),
            W(n, {
              code: U.too_big,
              message: r.message,
              inclusive: !0,
              exact: !1,
              maximum: r.value,
              type: `date`,
            }),
            t.dirty())
          : V.assertNever(r);
    return { status: t.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(e, t) {
    return this._addCheck({
      kind: `min`,
      value: e.getTime(),
      message: J.toString(t),
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: `max`,
      value: e.getTime(),
      message: J.toString(t),
    });
  }
  get minDate() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e == null ? null : new Date(e);
  }
  get maxDate() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e == null ? null : new Date(e);
  }
};
Pf.create = (e) =>
  new Pf({ checks: [], coerce: e?.coerce || !1, typeName: Z.ZodDate, ...Y(e) });
var Ff = class extends X {
  _parse(e) {
    if (this._getType(e) !== H.symbol) {
      let t = this._getOrReturnCtx(e);
      return (
        W(t, {
          code: U.invalid_type,
          expected: H.symbol,
          received: t.parsedType,
        }),
        K
      );
    }
    return q(e.data);
  }
};
Ff.create = (e) => new Ff({ typeName: Z.ZodSymbol, ...Y(e) });
var If = class extends X {
  _parse(e) {
    if (this._getType(e) !== H.undefined) {
      let t = this._getOrReturnCtx(e);
      return (
        W(t, {
          code: U.invalid_type,
          expected: H.undefined,
          received: t.parsedType,
        }),
        K
      );
    }
    return q(e.data);
  }
};
If.create = (e) => new If({ typeName: Z.ZodUndefined, ...Y(e) });
var Lf = class extends X {
  _parse(e) {
    if (this._getType(e) !== H.null) {
      let t = this._getOrReturnCtx(e);
      return (
        W(t, {
          code: U.invalid_type,
          expected: H.null,
          received: t.parsedType,
        }),
        K
      );
    }
    return q(e.data);
  }
};
Lf.create = (e) => new Lf({ typeName: Z.ZodNull, ...Y(e) });
var Rf = class extends X {
  constructor() {
    (super(...arguments), (this._any = !0));
  }
  _parse(e) {
    return q(e.data);
  }
};
Rf.create = (e) => new Rf({ typeName: Z.ZodAny, ...Y(e) });
var zf = class extends X {
  constructor() {
    (super(...arguments), (this._unknown = !0));
  }
  _parse(e) {
    return q(e.data);
  }
};
zf.create = (e) => new zf({ typeName: Z.ZodUnknown, ...Y(e) });
var Bf = class extends X {
  _parse(e) {
    let t = this._getOrReturnCtx(e);
    return (
      W(t, { code: U.invalid_type, expected: H.never, received: t.parsedType }),
      K
    );
  }
};
Bf.create = (e) => new Bf({ typeName: Z.ZodNever, ...Y(e) });
var Vf = class extends X {
  _parse(e) {
    if (this._getType(e) !== H.undefined) {
      let t = this._getOrReturnCtx(e);
      return (
        W(t, {
          code: U.invalid_type,
          expected: H.void,
          received: t.parsedType,
        }),
        K
      );
    }
    return q(e.data);
  }
};
Vf.create = (e) => new Vf({ typeName: Z.ZodVoid, ...Y(e) });
var Hf = class e extends X {
  _parse(e) {
    let { ctx: t, status: n } = this._processInputParams(e),
      r = this._def;
    if (t.parsedType !== H.array)
      return (
        W(t, {
          code: U.invalid_type,
          expected: H.array,
          received: t.parsedType,
        }),
        K
      );
    if (r.exactLength !== null) {
      let e = t.data.length > r.exactLength.value,
        i = t.data.length < r.exactLength.value;
      (e || i) &&
        (W(t, {
          code: e ? U.too_big : U.too_small,
          minimum: i ? r.exactLength.value : void 0,
          maximum: e ? r.exactLength.value : void 0,
          type: `array`,
          inclusive: !0,
          exact: !0,
          message: r.exactLength.message,
        }),
        n.dirty());
    }
    if (
      (r.minLength !== null &&
        t.data.length < r.minLength.value &&
        (W(t, {
          code: U.too_small,
          minimum: r.minLength.value,
          type: `array`,
          inclusive: !0,
          exact: !1,
          message: r.minLength.message,
        }),
        n.dirty()),
      r.maxLength !== null &&
        t.data.length > r.maxLength.value &&
        (W(t, {
          code: U.too_big,
          maximum: r.maxLength.value,
          type: `array`,
          inclusive: !0,
          exact: !1,
          message: r.maxLength.message,
        }),
        n.dirty()),
      t.common.async)
    )
      return Promise.all(
        [...t.data].map((e, n) => r.type._parseAsync(new nf(t, e, t.path, n))),
      ).then((e) => G.mergeArray(n, e));
    let i = [...t.data].map((e, n) =>
      r.type._parseSync(new nf(t, e, t.path, n)),
    );
    return G.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new e({
      ...this._def,
      minLength: { value: t, message: J.toString(n) },
    });
  }
  max(t, n) {
    return new e({
      ...this._def,
      maxLength: { value: t, message: J.toString(n) },
    });
  }
  length(t, n) {
    return new e({
      ...this._def,
      exactLength: { value: t, message: J.toString(n) },
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
Hf.create = (e, t) =>
  new Hf({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Z.ZodArray,
    ...Y(t),
  });
function Uf(e) {
  if (e instanceof Wf) {
    let t = {};
    for (let n in e.shape) {
      let r = e.shape[n];
      t[n] = cp.create(Uf(r));
    }
    return new Wf({ ...e._def, shape: () => t });
  } else if (e instanceof Hf) return new Hf({ ...e._def, type: Uf(e.element) });
  else if (e instanceof cp) return cp.create(Uf(e.unwrap()));
  else if (e instanceof lp) return lp.create(Uf(e.unwrap()));
  else if (e instanceof Xf) return Xf.create(e.items.map((e) => Uf(e)));
  else return e;
}
var Wf = class e extends X {
  constructor() {
    (super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e = this._def.shape(),
      t = V.objectKeys(e);
    return ((this._cached = { shape: e, keys: t }), this._cached);
  }
  _parse(e) {
    if (this._getType(e) !== H.object) {
      let t = this._getOrReturnCtx(e);
      return (
        W(t, {
          code: U.invalid_type,
          expected: H.object,
          received: t.parsedType,
        }),
        K
      );
    }
    let { status: t, ctx: n } = this._processInputParams(e),
      { shape: r, keys: i } = this._getCached(),
      a = [];
    if (
      !(this._def.catchall instanceof Bf && this._def.unknownKeys === `strip`)
    )
      for (let e in n.data) i.includes(e) || a.push(e);
    let o = [];
    for (let e of i) {
      let t = r[e],
        i = n.data[e];
      o.push({
        key: { status: `valid`, value: e },
        value: t._parse(new nf(n, i, n.path, e)),
        alwaysSet: e in n.data,
      });
    }
    if (this._def.catchall instanceof Bf) {
      let e = this._def.unknownKeys;
      if (e === `passthrough`)
        for (let e of a)
          o.push({
            key: { status: `valid`, value: e },
            value: { status: `valid`, value: n.data[e] },
          });
      else if (e === `strict`)
        a.length > 0 &&
          (W(n, { code: U.unrecognized_keys, keys: a }), t.dirty());
      else if (e !== `strip`)
        throw Error(`Internal ZodObject error: invalid unknownKeys value.`);
    } else {
      let e = this._def.catchall;
      for (let t of a) {
        let r = n.data[t];
        o.push({
          key: { status: `valid`, value: t },
          value: e._parse(new nf(n, r, n.path, t)),
          alwaysSet: t in n.data,
        });
      }
    }
    return n.common.async
      ? Promise.resolve()
          .then(async () => {
            let e = [];
            for (let t of o) {
              let n = await t.key,
                r = await t.value;
              e.push({ key: n, value: r, alwaysSet: t.alwaysSet });
            }
            return e;
          })
          .then((e) => G.mergeObjectSync(t, e))
      : G.mergeObjectSync(t, o);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      J.errToObj,
      new e({
        ...this._def,
        unknownKeys: `strict`,
        ...(t === void 0
          ? {}
          : {
              errorMap: (e, n) => {
                let r = this._def.errorMap?.(e, n).message ?? n.defaultError;
                return e.code === `unrecognized_keys`
                  ? { message: J.errToObj(t).message ?? r }
                  : { message: r };
              },
            }),
      })
    );
  }
  strip() {
    return new e({ ...this._def, unknownKeys: `strip` });
  }
  passthrough() {
    return new e({ ...this._def, unknownKeys: `passthrough` });
  }
  extend(t) {
    return new e({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new e({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: Z.ZodObject,
    });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(t) {
    return new e({ ...this._def, catchall: t });
  }
  pick(t) {
    let n = {};
    for (let e of V.objectKeys(t))
      t[e] && this.shape[e] && (n[e] = this.shape[e]);
    return new e({ ...this._def, shape: () => n });
  }
  omit(t) {
    let n = {};
    for (let e of V.objectKeys(this.shape)) t[e] || (n[e] = this.shape[e]);
    return new e({ ...this._def, shape: () => n });
  }
  deepPartial() {
    return Uf(this);
  }
  partial(t) {
    let n = {};
    for (let e of V.objectKeys(this.shape)) {
      let r = this.shape[e];
      t && !t[e] ? (n[e] = r) : (n[e] = r.optional());
    }
    return new e({ ...this._def, shape: () => n });
  }
  required(t) {
    let n = {};
    for (let e of V.objectKeys(this.shape))
      if (t && !t[e]) n[e] = this.shape[e];
      else {
        let t = this.shape[e];
        for (; t instanceof cp; ) t = t._def.innerType;
        n[e] = t;
      }
    return new e({ ...this._def, shape: () => n });
  }
  keyof() {
    return rp(V.objectKeys(this.shape));
  }
};
((Wf.create = (e, t) =>
  new Wf({
    shape: () => e,
    unknownKeys: `strip`,
    catchall: Bf.create(),
    typeName: Z.ZodObject,
    ...Y(t),
  })),
  (Wf.strictCreate = (e, t) =>
    new Wf({
      shape: () => e,
      unknownKeys: `strict`,
      catchall: Bf.create(),
      typeName: Z.ZodObject,
      ...Y(t),
    })),
  (Wf.lazycreate = (e, t) =>
    new Wf({
      shape: e,
      unknownKeys: `strip`,
      catchall: Bf.create(),
      typeName: Z.ZodObject,
      ...Y(t),
    })));
var Gf = class extends X {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = this._def.options;
    function r(e) {
      for (let t of e) if (t.result.status === `valid`) return t.result;
      for (let n of e)
        if (n.result.status === `dirty`)
          return (t.common.issues.push(...n.ctx.common.issues), n.result);
      let n = e.map((e) => new Kd(e.ctx.common.issues));
      return (W(t, { code: U.invalid_union, unionErrors: n }), K);
    }
    if (t.common.async)
      return Promise.all(
        n.map(async (e) => {
          let n = { ...t, common: { ...t.common, issues: [] }, parent: null };
          return {
            result: await e._parseAsync({
              data: t.data,
              path: t.path,
              parent: n,
            }),
            ctx: n,
          };
        }),
      ).then(r);
    {
      let e,
        r = [];
      for (let i of n) {
        let n = { ...t, common: { ...t.common, issues: [] }, parent: null },
          a = i._parseSync({ data: t.data, path: t.path, parent: n });
        if (a.status === `valid`) return a;
        (a.status === `dirty` && !e && (e = { result: a, ctx: n }),
          n.common.issues.length && r.push(n.common.issues));
      }
      if (e) return (t.common.issues.push(...e.ctx.common.issues), e.result);
      let i = r.map((e) => new Kd(e));
      return (W(t, { code: U.invalid_union, unionErrors: i }), K);
    }
  }
  get options() {
    return this._def.options;
  }
};
Gf.create = (e, t) => new Gf({ options: e, typeName: Z.ZodUnion, ...Y(t) });
var Kf = (e) =>
    e instanceof tp
      ? Kf(e.schema)
      : e instanceof sp
        ? Kf(e.innerType())
        : e instanceof np
          ? [e.value]
          : e instanceof ip
            ? e.options
            : e instanceof ap
              ? V.objectValues(e.enum)
              : e instanceof up
                ? Kf(e._def.innerType)
                : e instanceof If
                  ? [void 0]
                  : e instanceof Lf
                    ? [null]
                    : e instanceof cp
                      ? [void 0, ...Kf(e.unwrap())]
                      : e instanceof lp
                        ? [null, ...Kf(e.unwrap())]
                        : e instanceof pp || e instanceof hp
                          ? Kf(e.unwrap())
                          : e instanceof dp
                            ? Kf(e._def.innerType)
                            : [],
  qf = class e extends X {
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== H.object)
        return (
          W(t, {
            code: U.invalid_type,
            expected: H.object,
            received: t.parsedType,
          }),
          K
        );
      let n = this.discriminator,
        r = t.data[n],
        i = this.optionsMap.get(r);
      return i
        ? t.common.async
          ? i._parseAsync({ data: t.data, path: t.path, parent: t })
          : i._parseSync({ data: t.data, path: t.path, parent: t })
        : (W(t, {
            code: U.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [n],
          }),
          K);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(t, n, r) {
      let i = new Map();
      for (let e of n) {
        let n = Kf(e.shape[t]);
        if (!n.length)
          throw Error(
            `A discriminator value for key \`${t}\` could not be extracted from all schema options`,
          );
        for (let r of n) {
          if (i.has(r))
            throw Error(
              `Discriminator property ${String(t)} has duplicate value ${String(r)}`,
            );
          i.set(r, e);
        }
      }
      return new e({
        typeName: Z.ZodDiscriminatedUnion,
        discriminator: t,
        options: n,
        optionsMap: i,
        ...Y(r),
      });
    }
  };
function Jf(e, t) {
  let n = Gd(e),
    r = Gd(t);
  if (e === t) return { valid: !0, data: e };
  if (n === H.object && r === H.object) {
    let n = V.objectKeys(t),
      r = V.objectKeys(e).filter((e) => n.indexOf(e) !== -1),
      i = { ...e, ...t };
    for (let n of r) {
      let r = Jf(e[n], t[n]);
      if (!r.valid) return { valid: !1 };
      i[n] = r.data;
    }
    return { valid: !0, data: i };
  } else if (n === H.array && r === H.array) {
    if (e.length !== t.length) return { valid: !1 };
    let n = [];
    for (let r = 0; r < e.length; r++) {
      let i = e[r],
        a = t[r],
        o = Jf(i, a);
      if (!o.valid) return { valid: !1 };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  } else if (n === H.date && r === H.date && +e == +t)
    return { valid: !0, data: e };
  else return { valid: !1 };
}
var Yf = class extends X {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e),
      r = (e, r) => {
        if (Qd(e) || Qd(r)) return K;
        let i = Jf(e.value, r.value);
        return i.valid
          ? (($d(e) || $d(r)) && t.dirty(), { status: t.value, value: i.data })
          : (W(n, { code: U.invalid_intersection_types }), K);
      };
    return n.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseAsync({
            data: n.data,
            path: n.path,
            parent: n,
          }),
        ]).then(([e, t]) => r(e, t))
      : r(
          this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseSync({ data: n.data, path: n.path, parent: n }),
        );
  }
};
Yf.create = (e, t, n) =>
  new Yf({ left: e, right: t, typeName: Z.ZodIntersection, ...Y(n) });
var Xf = class e extends X {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== H.array)
      return (
        W(n, {
          code: U.invalid_type,
          expected: H.array,
          received: n.parsedType,
        }),
        K
      );
    if (n.data.length < this._def.items.length)
      return (
        W(n, {
          code: U.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: `array`,
        }),
        K
      );
    !this._def.rest &&
      n.data.length > this._def.items.length &&
      (W(n, {
        code: U.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: `array`,
      }),
      t.dirty());
    let r = [...n.data]
      .map((e, t) => {
        let r = this._def.items[t] || this._def.rest;
        return r ? r._parse(new nf(n, e, n.path, t)) : null;
      })
      .filter((e) => !!e);
    return n.common.async
      ? Promise.all(r).then((e) => G.mergeArray(t, e))
      : G.mergeArray(t, r);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new e({ ...this._def, rest: t });
  }
};
Xf.create = (e, t) => {
  if (!Array.isArray(e))
    throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);
  return new Xf({ items: e, typeName: Z.ZodTuple, rest: null, ...Y(t) });
};
var Zf = class e extends X {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.parsedType !== H.object)
        return (
          W(n, {
            code: U.invalid_type,
            expected: H.object,
            received: n.parsedType,
          }),
          K
        );
      let r = [],
        i = this._def.keyType,
        a = this._def.valueType;
      for (let e in n.data)
        r.push({
          key: i._parse(new nf(n, e, n.path, e)),
          value: a._parse(new nf(n, n.data[e], n.path, e)),
          alwaysSet: e in n.data,
        });
      return n.common.async
        ? G.mergeObjectAsync(t, r)
        : G.mergeObjectSync(t, r);
    }
    get element() {
      return this._def.valueType;
    }
    static create(t, n, r) {
      return n instanceof X
        ? new e({ keyType: t, valueType: n, typeName: Z.ZodRecord, ...Y(r) })
        : new e({
            keyType: kf.create(),
            valueType: t,
            typeName: Z.ZodRecord,
            ...Y(n),
          });
    }
  },
  Qf = class extends X {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.parsedType !== H.map)
        return (
          W(n, {
            code: U.invalid_type,
            expected: H.map,
            received: n.parsedType,
          }),
          K
        );
      let r = this._def.keyType,
        i = this._def.valueType,
        a = [...n.data.entries()].map(([e, t], a) => ({
          key: r._parse(new nf(n, e, n.path, [a, `key`])),
          value: i._parse(new nf(n, t, n.path, [a, `value`])),
        }));
      if (n.common.async) {
        let e = new Map();
        return Promise.resolve().then(async () => {
          for (let n of a) {
            let r = await n.key,
              i = await n.value;
            if (r.status === `aborted` || i.status === `aborted`) return K;
            ((r.status === `dirty` || i.status === `dirty`) && t.dirty(),
              e.set(r.value, i.value));
          }
          return { status: t.value, value: e };
        });
      } else {
        let e = new Map();
        for (let n of a) {
          let r = n.key,
            i = n.value;
          if (r.status === `aborted` || i.status === `aborted`) return K;
          ((r.status === `dirty` || i.status === `dirty`) && t.dirty(),
            e.set(r.value, i.value));
        }
        return { status: t.value, value: e };
      }
    }
  };
Qf.create = (e, t, n) =>
  new Qf({ valueType: t, keyType: e, typeName: Z.ZodMap, ...Y(n) });
var $f = class e extends X {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== H.set)
      return (
        W(n, { code: U.invalid_type, expected: H.set, received: n.parsedType }),
        K
      );
    let r = this._def;
    (r.minSize !== null &&
      n.data.size < r.minSize.value &&
      (W(n, {
        code: U.too_small,
        minimum: r.minSize.value,
        type: `set`,
        inclusive: !0,
        exact: !1,
        message: r.minSize.message,
      }),
      t.dirty()),
      r.maxSize !== null &&
        n.data.size > r.maxSize.value &&
        (W(n, {
          code: U.too_big,
          maximum: r.maxSize.value,
          type: `set`,
          inclusive: !0,
          exact: !1,
          message: r.maxSize.message,
        }),
        t.dirty()));
    let i = this._def.valueType;
    function a(e) {
      let n = new Set();
      for (let r of e) {
        if (r.status === `aborted`) return K;
        (r.status === `dirty` && t.dirty(), n.add(r.value));
      }
      return { status: t.value, value: n };
    }
    let o = [...n.data.values()].map((e, t) =>
      i._parse(new nf(n, e, n.path, t)),
    );
    return n.common.async ? Promise.all(o).then((e) => a(e)) : a(o);
  }
  min(t, n) {
    return new e({
      ...this._def,
      minSize: { value: t, message: J.toString(n) },
    });
  }
  max(t, n) {
    return new e({
      ...this._def,
      maxSize: { value: t, message: J.toString(n) },
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
$f.create = (e, t) =>
  new $f({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: Z.ZodSet,
    ...Y(t),
  });
var ep = class e extends X {
    constructor() {
      (super(...arguments), (this.validate = this.implement));
    }
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== H.function)
        return (
          W(t, {
            code: U.invalid_type,
            expected: H.function,
            received: t.parsedType,
          }),
          K
        );
      function n(e, n) {
        return Xd({
          data: e,
          path: t.path,
          errorMaps: [
            t.common.contextualErrorMap,
            t.schemaErrorMap,
            Yd(),
            qd,
          ].filter((e) => !!e),
          issueData: { code: U.invalid_arguments, argumentsError: n },
        });
      }
      function r(e, n) {
        return Xd({
          data: e,
          path: t.path,
          errorMaps: [
            t.common.contextualErrorMap,
            t.schemaErrorMap,
            Yd(),
            qd,
          ].filter((e) => !!e),
          issueData: { code: U.invalid_return_type, returnTypeError: n },
        });
      }
      let i = { errorMap: t.common.contextualErrorMap },
        a = t.data;
      if (this._def.returns instanceof op) {
        let e = this;
        return q(async function (...t) {
          let o = new Kd([]),
            s = await e._def.args.parseAsync(t, i).catch((e) => {
              throw (o.addIssue(n(t, e)), o);
            }),
            c = await Reflect.apply(a, this, s);
          return await e._def.returns._def.type.parseAsync(c, i).catch((e) => {
            throw (o.addIssue(r(c, e)), o);
          });
        });
      } else {
        let e = this;
        return q(function (...t) {
          let o = e._def.args.safeParse(t, i);
          if (!o.success) throw new Kd([n(t, o.error)]);
          let s = Reflect.apply(a, this, o.data),
            c = e._def.returns.safeParse(s, i);
          if (!c.success) throw new Kd([r(s, c.error)]);
          return c.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...t) {
      return new e({ ...this._def, args: Xf.create(t).rest(zf.create()) });
    }
    returns(t) {
      return new e({ ...this._def, returns: t });
    }
    implement(e) {
      return this.parse(e);
    }
    strictImplement(e) {
      return this.parse(e);
    }
    static create(t, n, r) {
      return new e({
        args: t || Xf.create([]).rest(zf.create()),
        returns: n || zf.create(),
        typeName: Z.ZodFunction,
        ...Y(r),
      });
    }
  },
  tp = class extends X {
    get schema() {
      return this._def.getter();
    }
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      return this._def
        .getter()
        ._parse({ data: t.data, path: t.path, parent: t });
    }
  };
tp.create = (e, t) => new tp({ getter: e, typeName: Z.ZodLazy, ...Y(t) });
var np = class extends X {
  _parse(e) {
    if (e.data !== this._def.value) {
      let t = this._getOrReturnCtx(e);
      return (
        W(t, {
          received: t.data,
          code: U.invalid_literal,
          expected: this._def.value,
        }),
        K
      );
    }
    return { status: `valid`, value: e.data };
  }
  get value() {
    return this._def.value;
  }
};
np.create = (e, t) => new np({ value: e, typeName: Z.ZodLiteral, ...Y(t) });
function rp(e, t) {
  return new ip({ values: e, typeName: Z.ZodEnum, ...Y(t) });
}
var ip = class e extends X {
  _parse(e) {
    if (typeof e.data != `string`) {
      let t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (
        W(t, {
          expected: V.joinValues(n),
          received: t.parsedType,
          code: U.invalid_type,
        }),
        K
      );
    }
    if (
      ((this._cache ||= new Set(this._def.values)), !this._cache.has(e.data))
    ) {
      let t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (
        W(t, { received: t.data, code: U.invalid_enum_value, options: n }),
        K
      );
    }
    return q(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  extract(t, n = this._def) {
    return e.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return e.create(
      this.options.filter((e) => !t.includes(e)),
      { ...this._def, ...n },
    );
  }
};
ip.create = rp;
var ap = class extends X {
  _parse(e) {
    let t = V.getValidEnumValues(this._def.values),
      n = this._getOrReturnCtx(e);
    if (n.parsedType !== H.string && n.parsedType !== H.number) {
      let e = V.objectValues(t);
      return (
        W(n, {
          expected: V.joinValues(e),
          received: n.parsedType,
          code: U.invalid_type,
        }),
        K
      );
    }
    if (
      ((this._cache ||= new Set(V.getValidEnumValues(this._def.values))),
      !this._cache.has(e.data))
    ) {
      let e = V.objectValues(t);
      return (
        W(n, { received: n.data, code: U.invalid_enum_value, options: e }),
        K
      );
    }
    return q(e.data);
  }
  get enum() {
    return this._def.values;
  }
};
ap.create = (e, t) => new ap({ values: e, typeName: Z.ZodNativeEnum, ...Y(t) });
var op = class extends X {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    let { ctx: t } = this._processInputParams(e);
    return t.parsedType !== H.promise && t.common.async === !1
      ? (W(t, {
          code: U.invalid_type,
          expected: H.promise,
          received: t.parsedType,
        }),
        K)
      : q(
          (t.parsedType === H.promise ? t.data : Promise.resolve(t.data)).then(
            (e) =>
              this._def.type.parseAsync(e, {
                path: t.path,
                errorMap: t.common.contextualErrorMap,
              }),
          ),
        );
  }
};
op.create = (e, t) => new op({ type: e, typeName: Z.ZodPromise, ...Y(t) });
var sp = class extends X {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Z.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e),
      r = this._def.effect || null,
      i = {
        addIssue: (e) => {
          (W(n, e), e.fatal ? t.abort() : t.dirty());
        },
        get path() {
          return n.path;
        },
      };
    if (((i.addIssue = i.addIssue.bind(i)), r.type === `preprocess`)) {
      let e = r.transform(n.data, i);
      if (n.common.async)
        return Promise.resolve(e).then(async (e) => {
          if (t.value === `aborted`) return K;
          let r = await this._def.schema._parseAsync({
            data: e,
            path: n.path,
            parent: n,
          });
          return r.status === `aborted`
            ? K
            : r.status === `dirty` || t.value === `dirty`
              ? Zd(r.value)
              : r;
        });
      {
        if (t.value === `aborted`) return K;
        let r = this._def.schema._parseSync({
          data: e,
          path: n.path,
          parent: n,
        });
        return r.status === `aborted`
          ? K
          : r.status === `dirty` || t.value === `dirty`
            ? Zd(r.value)
            : r;
      }
    }
    if (r.type === `refinement`) {
      let e = (e) => {
        let t = r.refinement(e, i);
        if (n.common.async) return Promise.resolve(t);
        if (t instanceof Promise)
          throw Error(
            `Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`,
          );
        return e;
      };
      if (n.common.async === !1) {
        let r = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return r.status === `aborted`
          ? K
          : (r.status === `dirty` && t.dirty(),
            e(r.value),
            { status: t.value, value: r.value });
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((n) =>
            n.status === `aborted`
              ? K
              : (n.status === `dirty` && t.dirty(),
                e(n.value).then(() => ({ status: t.value, value: n.value }))),
          );
    }
    if (r.type === `transform`)
      if (n.common.async === !1) {
        let e = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        if (!ef(e)) return K;
        let a = r.transform(e.value, i);
        if (a instanceof Promise)
          throw Error(
            `Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`,
          );
        return { status: t.value, value: a };
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((e) =>
            ef(e)
              ? Promise.resolve(r.transform(e.value, i)).then((e) => ({
                  status: t.value,
                  value: e,
                }))
              : K,
          );
    V.assertNever(r);
  }
};
((sp.create = (e, t, n) =>
  new sp({ schema: e, typeName: Z.ZodEffects, effect: t, ...Y(n) })),
  (sp.createWithPreprocess = (e, t, n) =>
    new sp({
      schema: t,
      effect: { type: `preprocess`, transform: e },
      typeName: Z.ZodEffects,
      ...Y(n),
    })));
var cp = class extends X {
  _parse(e) {
    return this._getType(e) === H.undefined
      ? q(void 0)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
cp.create = (e, t) =>
  new cp({ innerType: e, typeName: Z.ZodOptional, ...Y(t) });
var lp = class extends X {
  _parse(e) {
    return this._getType(e) === H.null
      ? q(null)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
lp.create = (e, t) =>
  new lp({ innerType: e, typeName: Z.ZodNullable, ...Y(t) });
var up = class extends X {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = t.data;
    return (
      t.parsedType === H.undefined && (n = this._def.defaultValue()),
      this._def.innerType._parse({ data: n, path: t.path, parent: t })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
};
up.create = (e, t) =>
  new up({
    innerType: e,
    typeName: Z.ZodDefault,
    defaultValue: typeof t.default == `function` ? t.default : () => t.default,
    ...Y(t),
  });
var dp = class extends X {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = { ...t, common: { ...t.common, issues: [] } },
      r = this._def.innerType._parse({
        data: n.data,
        path: n.path,
        parent: { ...n },
      });
    return tf(r)
      ? r.then((e) => ({
          status: `valid`,
          value:
            e.status === `valid`
              ? e.value
              : this._def.catchValue({
                  get error() {
                    return new Kd(n.common.issues);
                  },
                  input: n.data,
                }),
        }))
      : {
          status: `valid`,
          value:
            r.status === `valid`
              ? r.value
              : this._def.catchValue({
                  get error() {
                    return new Kd(n.common.issues);
                  },
                  input: n.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
dp.create = (e, t) =>
  new dp({
    innerType: e,
    typeName: Z.ZodCatch,
    catchValue: typeof t.catch == `function` ? t.catch : () => t.catch,
    ...Y(t),
  });
var fp = class extends X {
  _parse(e) {
    if (this._getType(e) !== H.nan) {
      let t = this._getOrReturnCtx(e);
      return (
        W(t, { code: U.invalid_type, expected: H.nan, received: t.parsedType }),
        K
      );
    }
    return { status: `valid`, value: e.data };
  }
};
fp.create = (e) => new fp({ typeName: Z.ZodNaN, ...Y(e) });
var pp = class extends X {
    _parse(e) {
      let { ctx: t } = this._processInputParams(e),
        n = t.data;
      return this._def.type._parse({ data: n, path: t.path, parent: t });
    }
    unwrap() {
      return this._def.type;
    }
  },
  mp = class e extends X {
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.common.async)
        return (async () => {
          let e = await this._def.in._parseAsync({
            data: n.data,
            path: n.path,
            parent: n,
          });
          return e.status === `aborted`
            ? K
            : e.status === `dirty`
              ? (t.dirty(), Zd(e.value))
              : this._def.out._parseAsync({
                  data: e.value,
                  path: n.path,
                  parent: n,
                });
        })();
      {
        let e = this._def.in._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return e.status === `aborted`
          ? K
          : e.status === `dirty`
            ? (t.dirty(), { status: `dirty`, value: e.value })
            : this._def.out._parseSync({
                data: e.value,
                path: n.path,
                parent: n,
              });
      }
    }
    static create(t, n) {
      return new e({ in: t, out: n, typeName: Z.ZodPipeline });
    }
  },
  hp = class extends X {
    _parse(e) {
      let t = this._def.innerType._parse(e),
        n = (e) => (ef(e) && (e.value = Object.freeze(e.value)), e);
      return tf(t) ? t.then((e) => n(e)) : n(t);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
((hp.create = (e, t) =>
  new hp({ innerType: e, typeName: Z.ZodReadonly, ...Y(t) })),
  Wf.lazycreate);
var Z;
(function (e) {
  ((e.ZodString = `ZodString`),
    (e.ZodNumber = `ZodNumber`),
    (e.ZodNaN = `ZodNaN`),
    (e.ZodBigInt = `ZodBigInt`),
    (e.ZodBoolean = `ZodBoolean`),
    (e.ZodDate = `ZodDate`),
    (e.ZodSymbol = `ZodSymbol`),
    (e.ZodUndefined = `ZodUndefined`),
    (e.ZodNull = `ZodNull`),
    (e.ZodAny = `ZodAny`),
    (e.ZodUnknown = `ZodUnknown`),
    (e.ZodNever = `ZodNever`),
    (e.ZodVoid = `ZodVoid`),
    (e.ZodArray = `ZodArray`),
    (e.ZodObject = `ZodObject`),
    (e.ZodUnion = `ZodUnion`),
    (e.ZodDiscriminatedUnion = `ZodDiscriminatedUnion`),
    (e.ZodIntersection = `ZodIntersection`),
    (e.ZodTuple = `ZodTuple`),
    (e.ZodRecord = `ZodRecord`),
    (e.ZodMap = `ZodMap`),
    (e.ZodSet = `ZodSet`),
    (e.ZodFunction = `ZodFunction`),
    (e.ZodLazy = `ZodLazy`),
    (e.ZodLiteral = `ZodLiteral`),
    (e.ZodEnum = `ZodEnum`),
    (e.ZodEffects = `ZodEffects`),
    (e.ZodNativeEnum = `ZodNativeEnum`),
    (e.ZodOptional = `ZodOptional`),
    (e.ZodNullable = `ZodNullable`),
    (e.ZodDefault = `ZodDefault`),
    (e.ZodCatch = `ZodCatch`),
    (e.ZodPromise = `ZodPromise`),
    (e.ZodBranded = `ZodBranded`),
    (e.ZodPipeline = `ZodPipeline`),
    (e.ZodReadonly = `ZodReadonly`));
})((Z ||= {}));
var gp = kf.create;
(jf.create,
  fp.create,
  Mf.create,
  Nf.create,
  Pf.create,
  Ff.create,
  If.create,
  Lf.create,
  Rf.create,
  zf.create,
  Bf.create,
  Vf.create,
  Hf.create);
var _p = Wf.create;
(Wf.strictCreate,
  Gf.create,
  qf.create,
  Yf.create,
  Xf.create,
  Zf.create,
  Qf.create,
  $f.create,
  ep.create,
  tp.create,
  np.create,
  ip.create,
  ap.create,
  op.create,
  sp.create,
  cp.create,
  lp.create,
  sp.createWithPreprocess,
  mp.create);
var vp = class {
    constructor(e = 0, t = `Network Error`) {
      ((this.status = e), (this.text = t));
    }
  },
  Q = {
    origin: `https://api.emailjs.com`,
    blockHeadless: !1,
    storageProvider: (() => {
      if (!(typeof localStorage > `u`))
        return {
          get: (e) => Promise.resolve(localStorage.getItem(e)),
          set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
          remove: (e) => Promise.resolve(localStorage.removeItem(e)),
        };
    })(),
  },
  yp = (e) =>
    e
      ? typeof e == `string`
        ? { publicKey: e }
        : e.toString() === `[object Object]`
          ? e
          : {}
      : {},
  bp = (e, t = `https://api.emailjs.com`) => {
    if (!e) return;
    let n = yp(e);
    ((Q.publicKey = n.publicKey),
      (Q.blockHeadless = n.blockHeadless),
      (Q.storageProvider = n.storageProvider),
      (Q.blockList = n.blockList),
      (Q.limitRate = n.limitRate),
      (Q.origin = n.origin || t));
  },
  xp = async (e, t, n = {}) => {
    let r = await fetch(Q.origin + e, { method: `POST`, headers: n, body: t }),
      i = await r.text(),
      a = new vp(r.status, i);
    if (r.ok) return a;
    throw a;
  },
  Sp = (e, t, n) => {
    if (!e || typeof e != `string`)
      throw `The public key is required. Visit https://dashboard.emailjs.com/admin/account`;
    if (!t || typeof t != `string`)
      throw `The service ID is required. Visit https://dashboard.emailjs.com/admin`;
    if (!n || typeof n != `string`)
      throw `The template ID is required. Visit https://dashboard.emailjs.com/admin/templates`;
  },
  Cp = (e) => {
    if (e && e.toString() !== `[object Object]`)
      throw `The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/`;
  },
  wp = (e) => e.webdriver || !e.languages || e.languages.length === 0,
  Tp = () => new vp(451, `Unavailable For Headless Browser`),
  Ep = (e, t) => {
    if (!Array.isArray(e)) throw `The BlockList list has to be an array`;
    if (typeof t != `string`)
      throw `The BlockList watchVariable has to be a string`;
  },
  Dp = (e) => !e.list?.length || !e.watchVariable,
  Op = (e, t) => (e instanceof FormData ? e.get(t) : e[t]),
  kp = (e, t) => {
    if (Dp(e)) return !1;
    Ep(e.list, e.watchVariable);
    let n = Op(t, e.watchVariable);
    return typeof n == `string` ? e.list.includes(n) : !1;
  },
  Ap = () => new vp(403, `Forbidden`),
  jp = (e, t) => {
    if (typeof e != `number` || e < 0)
      throw `The LimitRate throttle has to be a positive number`;
    if (t && typeof t != `string`)
      throw `The LimitRate ID has to be a non-empty string`;
  },
  Mp = async (e, t, n) => {
    let r = Number((await n.get(e)) || 0);
    return t - Date.now() + r;
  },
  Np = async (e, t, n) => {
    if (!t.throttle || !n) return !1;
    jp(t.throttle, t.id);
    let r = t.id || e;
    return (await Mp(r, t.throttle, n)) > 0
      ? !0
      : (await n.set(r, Date.now().toString()), !1);
  },
  Pp = () => new vp(429, `Too Many Requests`),
  Fp = async (e, t, n, r) => {
    let i = yp(r),
      a = i.publicKey || Q.publicKey,
      o = i.blockHeadless || Q.blockHeadless,
      s = i.storageProvider || Q.storageProvider,
      c = { ...Q.blockList, ...i.blockList },
      l = { ...Q.limitRate, ...i.limitRate };
    return o && wp(navigator)
      ? Promise.reject(Tp())
      : (Sp(a, e, t),
        Cp(n),
        n && kp(c, n)
          ? Promise.reject(Ap())
          : (await Np(location.pathname, l, s))
            ? Promise.reject(Pp())
            : xp(
                `/api/v1.0/email/send`,
                JSON.stringify({
                  lib_version: `4.4.1`,
                  user_id: a,
                  service_id: e,
                  template_id: t,
                  template_params: n,
                }),
                { "Content-type": `application/json` },
              ));
  },
  Ip = (e) => {
    if (!e || e.nodeName !== `FORM`)
      throw `The 3rd parameter is expected to be the HTML form element or the style selector of the form`;
  },
  Lp = (e) => (typeof e == `string` ? document.querySelector(e) : e),
  Rp = {
    init: bp,
    send: Fp,
    sendForm: async (e, t, n, r) => {
      let i = yp(r),
        a = i.publicKey || Q.publicKey,
        o = i.blockHeadless || Q.blockHeadless,
        s = Q.storageProvider || i.storageProvider,
        c = { ...Q.blockList, ...i.blockList },
        l = { ...Q.limitRate, ...i.limitRate };
      if (o && wp(navigator)) return Promise.reject(Tp());
      let u = Lp(n);
      (Sp(a, e, t), Ip(u));
      let d = new FormData(u);
      return kp(c, d)
        ? Promise.reject(Ap())
        : (await Np(location.pathname, l, s))
          ? Promise.reject(Pp())
          : (d.append(`lib_version`, `4.4.1`),
            d.append(`service_id`, e),
            d.append(`template_id`, t),
            d.append(`user_id`, a),
            xp(`/api/v1.0/email/send-form`, d));
    },
    EmailJSResponseStatus: vp,
  },
  zp = {
    SERVICE_ID: `service_YOUR_SERVICE_ID_HERE`,
    TEMPLATE_ID: `template_YOUR_TEMPLATE_ID_HERE`,
    PUBLIC_KEY: `YOUR_PUBLIC_KEY_HERE`,
  },
  Bp = () =>
    zp.SERVICE_ID !== `service_YOUR_SERVICE_ID_HERE` &&
    zp.TEMPLATE_ID !== `template_YOUR_TEMPLATE_ID_HERE` &&
    zp.PUBLIC_KEY !== `YOUR_PUBLIC_KEY_HERE`;
n();
function Vp(e) {
  if (!e || typeof document > `u`) return;
  let t = document.head || document.getElementsByTagName(`head`)[0],
    n = document.createElement(`style`);
  ((n.type = `text/css`),
    t.appendChild(n),
    n.styleSheet
      ? (n.styleSheet.cssText = e)
      : n.appendChild(document.createTextNode(e)));
}
Array(12).fill(0);
var Hp = 1,
  $ = new (class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          let { message: t, ...n } = e,
            r = typeof e?.id == `number` || e.id?.length > 0 ? e.id : Hp++,
            i = this.toasts.find((e) => e.id === r),
            a = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(r) && this.dismissedToasts.delete(r),
            i
              ? (this.toasts = this.toasts.map((n) =>
                  n.id === r
                    ? (this.publish({ ...n, ...e, id: r, title: t }),
                      { ...n, ...e, id: r, dismissible: a, title: t })
                    : n,
                ))
              : this.addToast({ title: t, ...n, dismissible: a, id: r }),
            r
          );
        }),
        (this.dismiss = (e) => (
          e
            ? (this.dismissedToasts.add(e),
              requestAnimationFrame(() =>
                this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
              ))
            : this.toasts.forEach((e) => {
                this.subscribers.forEach((t) => t({ id: e.id, dismiss: !0 }));
              }),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: `error` })),
        (this.success = (e, t) =>
          this.create({ ...t, type: `success`, message: e })),
        (this.info = (e, t) => this.create({ ...t, type: `info`, message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: `warning`, message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: `loading`, message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: `loading`,
              message: t.loading,
              description:
                typeof t.description == `function` ? void 0 : t.description,
            }));
          let r = Promise.resolve(e instanceof Function ? e() : e),
            i = n !== void 0,
            a,
            o = r
              .then(async (e) => {
                if (((a = [`resolve`, e]), s.isValidElement(e)))
                  ((i = !1),
                    this.create({ id: n, type: `default`, message: e }));
                else if (Wp(e) && !e.ok) {
                  i = !1;
                  let r =
                      typeof t.error == `function`
                        ? await t.error(`HTTP error! status: ${e.status}`)
                        : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(`HTTP error! status: ${e.status}`)
                        : t.description,
                    o =
                      typeof r == `object` && !s.isValidElement(r)
                        ? r
                        : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                } else if (e instanceof Error) {
                  i = !1;
                  let r =
                      typeof t.error == `function` ? await t.error(e) : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(e)
                        : t.description,
                    o =
                      typeof r == `object` && !s.isValidElement(r)
                        ? r
                        : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                } else if (t.success !== void 0) {
                  i = !1;
                  let r =
                      typeof t.success == `function`
                        ? await t.success(e)
                        : t.success,
                    a =
                      typeof t.description == `function`
                        ? await t.description(e)
                        : t.description,
                    o =
                      typeof r == `object` && !s.isValidElement(r)
                        ? r
                        : { message: r };
                  this.create({ id: n, type: `success`, description: a, ...o });
                }
              })
              .catch(async (e) => {
                if (((a = [`reject`, e]), t.error !== void 0)) {
                  i = !1;
                  let r =
                      typeof t.error == `function` ? await t.error(e) : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(e)
                        : t.description,
                    o =
                      typeof r == `object` && !s.isValidElement(r)
                        ? r
                        : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                }
              })
              .finally(() => {
                (i && (this.dismiss(n), (n = void 0)),
                  t.finally == null || t.finally.call(t));
              }),
            c = () =>
              new Promise((e, t) =>
                o.then(() => (a[0] === `reject` ? t(a[1]) : e(a[1]))).catch(t),
              );
          return typeof n != `string` && typeof n != `number`
            ? { unwrap: c }
            : Object.assign(n, { unwrap: c });
        }),
        (this.custom = (e, t) => {
          let n = t?.id || Hp++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  })(),
  Up = (e, t) => {
    let n = t?.id || Hp++;
    return ($.addToast({ title: e, ...t, id: n }), n);
  },
  Wp = (e) =>
    e &&
    typeof e == `object` &&
    `ok` in e &&
    typeof e.ok == `boolean` &&
    `status` in e &&
    typeof e.status == `number`,
  Gp = Object.assign(
    Up,
    {
      success: $.success,
      info: $.info,
      warning: $.warning,
      error: $.error,
      custom: $.custom,
      message: $.message,
      promise: $.promise,
      dismiss: $.dismiss,
      loading: $.loading,
    },
    { getHistory: () => $.toasts, getToasts: () => $.getActiveToasts() },
  );
Vp(
  `[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}`,
);
function Kp() {
  let [e, t] = (0, s.useState)(`idle`),
    n = Bp();
  return (
    n && !Rp.init && Rp.init(zp.PUBLIC_KEY),
    {
      status: e,
      sendEmail: async (e) => {
        if (!n) {
          (Gp.error(
            `Email service not configured. Please add your EmailJS credentials.`,
          ),
            console.warn(
              `EmailJS credentials not configured. Check src/config/emailjs.ts`,
            ));
          return;
        }
        try {
          if (
            (t(`sending`),
            (
              await Rp.send(
                zp.SERVICE_ID,
                zp.TEMPLATE_ID,
                {
                  from_name: e.name,
                  from_email: e.email,
                  subject: e.subject,
                  message: e.message,
                  reply_to: e.email,
                },
                zp.PUBLIC_KEY,
              )
            ).status === 200)
          )
            (t(`sent`),
              Gp.success(
                `Message sent successfully! I'll get back to you soon.`,
              ));
          else throw Error(`Failed to send email`);
        } catch (e) {
          t(`error`);
          let n =
            e instanceof Error
              ? e.message
              : `Failed to send message. Please try again.`;
          (Gp.error(n), console.error(`EmailJS error:`, e));
        }
      },
      reset: () => t(`idle`),
      isConfigured: n,
    }
  );
}
var qp = _p({
    name: gp().trim().min(2, `Name must be at least 2 characters`).max(80),
    email: gp().trim().email(`Enter a valid email`).max(160),
    subject: gp().trim().min(3, `Subject is too short`).max(120),
    message: gp()
      .trim()
      .min(10, `Message must be at least 10 characters`)
      .max(1e3),
  }),
  Jp = { name: ``, email: ``, subject: ``, message: `` };
function Yp() {
  let [e, t] = (0, s.useState)(Jp),
    [n, r] = (0, s.useState)({}),
    { status: i, sendEmail: a, reset: o, isConfigured: c } = Kp();
  (0, s.useEffect)(() => {
    if (i === `sent`) {
      t(Jp);
      let e = setTimeout(() => o(), 3e3);
      return () => clearTimeout(e);
    }
  }, [i, o]);
  let l = (e) => (i) => {
      (t((t) => ({ ...t, [e]: i.target.value })),
        n[e] && r((t) => ({ ...t, [e]: void 0 })));
    },
    u = async (t) => {
      t.preventDefault();
      let n = qp.safeParse(e);
      if (!n.success) {
        let e = {};
        for (let t of n.error.issues) {
          let n = t.path[0];
          e[n] || (e[n] = t.message);
        }
        r(e);
        return;
      }
      if (!c) {
        Gp.error(
          `Email service not configured. Please add your EmailJS credentials to src/config/emailjs.ts`,
        );
        return;
      }
      await a(e);
    },
    d = [
      { Icon: Lu, label: `Email`, value: B.email, href: `mailto:${B.email}` },
      {
        Icon: Pu,
        label: `Phone`,
        value: B.phone,
        href: `tel:${B.phone.replace(/\s/g, ``)}`,
      },
      { Icon: Iu, label: `Location`, value: B.location },
      {
        Icon: td,
        label: `LinkedIn`,
        value: `linkedin.com/in/ajay-tec`,
        href: B.linkedin,
      },
      {
        Icon: ad,
        label: `GitHub`,
        value: `github.com/ajaytomar5421`,
        href: B.github,
      },
    ];
  return (0, L.jsx)(Pd, {
    id: `contact`,
    eyebrow: `Contact`,
    title: `Let's build something together`,
    subtitle: `Have an opportunity, a question, or just want to say hi? Drop a message.`,
    children: (0, L.jsxs)(`div`, {
      className: `grid lg:grid-cols-[1fr_1.2fr] gap-6`,
      children: [
        !c &&
          (0, L.jsxs)(R.div, {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            className: `lg:col-span-2 flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30`,
            children: [
              (0, L.jsx)(Qu, {
                className: `w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5`,
              }),
              (0, L.jsxs)(`div`, {
                className: `text-sm`,
                children: [
                  (0, L.jsx)(`p`, {
                    className: `font-medium text-amber-500`,
                    children: `EmailJS not configured`,
                  }),
                  (0, L.jsxs)(`p`, {
                    className: `text-amber-500/80 mt-1`,
                    children: [
                      `Add your EmailJS credentials to `,
                      (0, L.jsx)(`code`, {
                        className: `bg-black/30 px-1.5 py-0.5 rounded`,
                        children: `src/config/emailjs.ts`,
                      }),
                      ` to enable email sending. Follow the setup guide in that file.`,
                    ],
                  }),
                ],
              }),
            ],
          }),
        (0, L.jsxs)(R.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.5 },
          className: `glass rounded-2xl p-6 sm:p-8 space-y-4`,
          children: [
            (0, L.jsx)(`h3`, {
              className: `text-lg font-semibold`,
              children: `Contact Information`,
            }),
            (0, L.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: `Reach out through any of the channels below. I'll get back within a day.`,
            }),
            (0, L.jsx)(`ul`, {
              className: `space-y-3 pt-2`,
              children: d.map(({ Icon: e, label: t, value: n, href: r }) => {
                let i = (0, L.jsxs)(`div`, {
                  className: `flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors`,
                  children: [
                    (0, L.jsx)(`div`, {
                      className: `w-10 h-10 rounded-lg grid place-items-center bg-[image:var(--gradient-brand-soft)]`,
                      children: (0, L.jsx)(e, {}),
                    }),
                    (0, L.jsxs)(`div`, {
                      className: `min-w-0`,
                      children: [
                        (0, L.jsx)(`div`, {
                          className: `text-xs text-muted-foreground`,
                          children: t,
                        }),
                        (0, L.jsx)(`div`, {
                          className: `text-sm truncate`,
                          children: n,
                        }),
                      ],
                    }),
                  ],
                });
                return (0, L.jsx)(
                  `li`,
                  {
                    children: r
                      ? (0, L.jsx)(`a`, {
                          href: r,
                          target: r.startsWith(`http`) ? `_blank` : void 0,
                          rel: `noreferrer`,
                          children: i,
                        })
                      : i,
                  },
                  t,
                );
              }),
            }),
          ],
        }),
        (0, L.jsxs)(R.form, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.5, delay: 0.1 },
          onSubmit: u,
          className: `glass rounded-2xl p-6 sm:p-8 space-y-4`,
          noValidate: !0,
          children: [
            (0, L.jsxs)(`div`, {
              className: `grid sm:grid-cols-2 gap-4`,
              children: [
                (0, L.jsx)(Xp, {
                  label: `Name`,
                  name: `name`,
                  value: e.name,
                  onChange: l(`name`),
                  error: n.name,
                  placeholder: `Your name`,
                }),
                (0, L.jsx)(Xp, {
                  label: `Email`,
                  name: `email`,
                  type: `email`,
                  value: e.email,
                  onChange: l(`email`),
                  error: n.email,
                  placeholder: `you@example.com`,
                }),
              ],
            }),
            (0, L.jsx)(Xp, {
              label: `Subject`,
              name: `subject`,
              value: e.subject,
              onChange: l(`subject`),
              error: n.subject,
              placeholder: `What's this about?`,
            }),
            (0, L.jsx)(Xp, {
              label: `Message`,
              name: `message`,
              as: `textarea`,
              rows: 5,
              value: e.message,
              onChange: l(`message`),
              error: n.message,
              placeholder: `Tell me a bit more...`,
            }),
            (0, L.jsxs)(`button`, {
              type: `submit`,
              disabled: i === `sending` || !c,
              className: `btn-primary w-full sm:w-auto disabled:opacity-70`,
              children: [
                i === `sending` &&
                  (0, L.jsx)(Ru, { className: `animate-spin` }),
                i === `sent` && (0, L.jsx)(Ku, {}),
                i === `error` && (0, L.jsx)(Qu, {}),
                i === `idle` && (0, L.jsx)(Nu, {}),
                i === `sent`
                  ? `Message sent`
                  : i === `sending`
                    ? `Sending...`
                    : i === `error`
                      ? `Error - Try again`
                      : `Send Message`,
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Xp({
  label: e,
  name: t,
  value: n,
  onChange: r,
  error: i,
  placeholder: a,
  type: o = `text`,
  as: s = `input`,
  rows: c,
}) {
  let l = `peer w-full rounded-xl bg-white/5 border px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:bg-white/10 focus:border-[color-mix(in_oklab,var(--brand-blue)_60%,transparent)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--brand-blue)_25%,transparent)]`,
    u = i ? `border-red-400/60` : `border-white/10`;
  return (0, L.jsxs)(`label`, {
    className: `block`,
    children: [
      (0, L.jsx)(`span`, {
        className: `block text-xs text-muted-foreground mb-1.5`,
        children: e,
      }),
      s === `textarea`
        ? (0, L.jsx)(`textarea`, {
            name: t,
            value: n,
            onChange: r,
            rows: c,
            placeholder: a,
            className: `${l} ${u} resize-none`,
          })
        : (0, L.jsx)(`input`, {
            name: t,
            type: o,
            value: n,
            onChange: r,
            placeholder: a,
            className: `${l} ${u}`,
          }),
      i &&
        (0, L.jsx)(`span`, {
          className: `mt-1 block text-xs text-red-400`,
          children: i,
        }),
    ],
  });
}
function Zp() {
  return (0, L.jsx)(`footer`, {
    className: `relative mt-10 border-t border-white/10`,
    children: (0, L.jsxs)(`div`, {
      className: `mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6`,
      children: [
        (0, L.jsxs)(`p`, {
          className: `text-sm text-muted-foreground text-center sm:text-left`,
          children: [
            `© `,
            new Date().getFullYear(),
            ` `,
            B.name,
            `. Built with React, Tailwind & Framer Motion.`,
          ],
        }),
        (0, L.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [
            (0, L.jsx)(`a`, {
              href: B.github,
              target: `_blank`,
              rel: `noreferrer`,
              "aria-label": `GitHub`,
              className: `grid place-items-center w-10 h-10 rounded-xl glass hover:-translate-y-1 transition-all`,
              children: (0, L.jsx)(ad, {}),
            }),
            (0, L.jsx)(`a`, {
              href: B.linkedin,
              target: `_blank`,
              rel: `noreferrer`,
              "aria-label": `LinkedIn`,
              className: `grid place-items-center w-10 h-10 rounded-xl glass hover:-translate-y-1 transition-all`,
              children: (0, L.jsx)(td, {}),
            }),
            (0, L.jsx)(`a`, {
              href: `mailto:${B.email}`,
              "aria-label": `Email`,
              className: `grid place-items-center w-10 h-10 rounded-xl glass hover:-translate-y-1 transition-all`,
              children: (0, L.jsx)(Lu, {}),
            }),
            (0, L.jsxs)(`a`, {
              href: `#home`,
              "aria-label": `Back to top`,
              className: `ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[image:var(--gradient-brand)] text-white text-sm font-semibold hover:-translate-y-1 transition-all`,
              children: [(0, L.jsx)(Zu, {}), ` Top`],
            }),
          ],
        }),
      ],
    }),
  });
}
function Qp() {
  return (0, L.jsxs)(`div`, {
    className: `min-h-screen`,
    children: [
      (0, L.jsx)(jd, {}),
      (0, L.jsxs)(`main`, {
        children: [
          (0, L.jsx)(Nd, {}),
          (0, L.jsx)(Fd, {}),
          (0, L.jsx)(Id, {}),
          (0, L.jsx)(Ld, {}),
          (0, L.jsx)(Rd, {}),
          (0, L.jsx)(zd, {}),
          (0, L.jsx)(Bd, {}),
          (0, L.jsx)(Vd, {}),
          (0, L.jsx)(Hd, {}),
          (0, L.jsx)(Ud, {}),
          (0, L.jsx)(Yp, {}),
        ],
      }),
      (0, L.jsx)(Zp, {}),
    ],
  });
}
export { Qp as component };

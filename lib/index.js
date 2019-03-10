function e(e) {
  return /^on/.test(e);
}
function t(n) {
  if ("string" == typeof n) return document.createTextNode(n);
  if ("object" == typeof n.type) return t(n.type);
  if ("function" == typeof n.type) return t(n.type(n.props));
  var r = document.createElement(n.type);
  return (
    (function(t, n) {
      void 0 === n && (n = {}),
        n &&
          Object.keys(n)
            .filter(function(t) {
              return !e(t);
            })
            .forEach(function(e) {
              return (function(e, t, n) {
                "className" === t
                  ? (t = "class")
                  : "boolean" == typeof n &&
                    (function(e, t, n) {
                      n ? (e.setAttribute(t, n), (e[t] = !0)) : (e[t] = !1);
                    })(e, t, n),
                  e.setAttribute(t, n);
              })(t, e, n[e]);
            });
    })(r, n.props),
    (function(t, n) {
      void 0 === n && (n = {}),
        n &&
          Object.keys(n)
            .filter(e)
            .forEach(function(e) {
              return t.addEventListener(e.slice(2).toLowerCase(), n[e]);
            });
    })(r, n.props),
    n.children &&
      n.children.map(t).forEach(function(e) {
        return r.appendChild(e);
      }),
    r
  );
}
(exports.j = function(e, t) {
  for (var n, r = [], o = arguments.length - 2; o-- > 0; )
    r[o] = arguments[o + 2];
  return {
    type: e,
    props: t || {},
    children: r.length ? (n = []).concat.apply(n, r) : null
  };
}),
  (exports.createElement = t),
  (exports.updateElement = function e(n, r, o, i) {
    if ((void 0 === i && (i = 0), o))
      if (r) {
        if (
          typeof (l = r) != typeof (u = o) ||
          ("string" == typeof l && l !== u) ||
          l.type !== u.type
        )
          n.replaceChild(t(r), n.childNodes[i]);
        else if (r.type)
          for (
            var c = r.children.length, p = o.children.length, f = 0;
            f < c || f < p;
            f++
          )
            e(n.childNodes[i], r.children[f], o.children[f], f);
      } else n.removeChild(n.childNodes[i]);
    else n.appendChild(t(r));
    var l, u;
  });
//# sourceMappingURL=index.js.map

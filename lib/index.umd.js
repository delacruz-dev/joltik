!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t((e.joltik = {}));
})(this, function(e) {
  function t(e) {
    return /^on/.test(e);
  }
  function n(e) {
    if ("string" == typeof e) return document.createTextNode(e);
    if ("object" == typeof e.type) return n(e.type);
    if ("function" == typeof e.type) return n(e.type(e.props));
    var o = document.createElement(e.type);
    return (
      (function(e, n) {
        void 0 === n && (n = {}),
          n &&
            Object.keys(n)
              .filter(function(e) {
                return !t(e);
              })
              .forEach(function(t) {
                return (function(e, t, n) {
                  "className" === t
                    ? (t = "class")
                    : "boolean" == typeof n &&
                      (function(e, t, n) {
                        n ? (e.setAttribute(t, n), (e[t] = !0)) : (e[t] = !1);
                      })(e, t, n),
                    e.setAttribute(t, n);
                })(e, t, n[t]);
              });
      })(o, e.props),
      (function(e, n) {
        void 0 === n && (n = {}),
          n &&
            Object.keys(n)
              .filter(t)
              .forEach(function(t) {
                return e.addEventListener(t.slice(2).toLowerCase(), n[t]);
              });
      })(o, e.props),
      e.children &&
        e.children.map(n).forEach(function(e) {
          return o.appendChild(e);
        }),
      o
    );
  }
  (e.j = function(e, t) {
    for (var n, o = [], r = arguments.length - 2; r-- > 0; )
      o[r] = arguments[r + 2];
    return {
      type: e,
      props: t || {},
      children: o.length ? (n = []).concat.apply(n, o) : null
    };
  }),
    (e.createElement = n),
    (e.updateElement = function e(t, o, r, i) {
      if ((void 0 === i && (i = 0), r))
        if (o) {
          if (
            typeof (l = o) != typeof (d = r) ||
            ("string" == typeof l && l !== d) ||
            l.type !== d.type
          )
            t.replaceChild(n(o), t.childNodes[i]);
          else if (o.type)
            for (
              var c = o.children.length, f = r.children.length, p = 0;
              p < c || p < f;
              p++
            )
              e(t.childNodes[i], o.children[p], r.children[p], p);
        } else t.removeChild(t.childNodes[i]);
      else t.appendChild(n(o));
      var l, d;
    });
});
//# sourceMappingURL=index.umd.js.map

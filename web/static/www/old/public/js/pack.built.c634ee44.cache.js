webpackJsonp(
    [0],
    [
        function(t, e, i) {
            t.exports = i(1);
        },
        function(t, e, i) {
            "use strict";
            !(function() {
                    "undefined" == typeof WeixinJSBridge &&
                        document.addEventListener(
                            "WeixinJSBridgeReady",
                            function() {
                                $("audio[autoplay]").length &&
                                    $("audio[autoplay]")
                                        .get(0)
                                        .play();
                            },
                            !1
                        ),
                    i.e(0, function(t) {
                        var e = [
                            t(2),
                            t(4),
                            t(6),
                            t(10),
                            t(11),
                            t(12),
                            t(13),
                            t(14),
                            t(15),
                            t(17),
                            t(18),
                            t(19),
                            t(20),
                            t(21),
                            t(22),
                            t(23),
                            t(24),
                            t(25),
                            t(26),
                            t(27),
                            t(28),
                            t(29),
                            t(30),
                            t(31),
                            t(32),
                            t(33),
                            t(34),
                            t(36),
                            t(37),
                            t(38),
                            t(39),
                            t(40),
                            t(41),
                            t(42),
                            t(43),
                            t(44),
                            t(35)
                        ];
                        (function() {
                            _cs.variable.init(),
                                _cs.ani.init(),
                                _cs.stagger.init(),
                                _cs.refreshcontentlist.init(),
                                _cs.canvascircle.ani(),
                                _cs.util.init(),
                                _cs.event.init(),
                                _cs.sdk.init(),
                                _cs.mvc.init(),
                                coolsite_play.play.start(),
                                _g.device.ios() &&
                                    setTimeout(function() {
                                        $("[data-toggle=dropdown]").each(
                                            function() {
                                                $(this).attr("href") ||
                                                    $(this).attr("href", "#");
                                            }
                                        );
                                    }, 500);
                        }.apply(null, e));
                    });
            })(window);
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function(t, e) {
            (function(e) {
                "use strict"; /*!
	 * VERSION: 0.0.4
	 * DATE: 2014-12-04
	 * UPDATES AND DOCS AT: http://www.greensock.com
	 *
	 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
	 * DrawSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
	 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
	 * This work is subject to the software agreement that was issued with your membership.
	 * 
	 * @author: Jack Doyle, jack@greensock.com
	 */
                var i =
                    "undefined" != typeof t &&
                    t.exports &&
                    "undefined" != typeof e
                        ? e
                        : window;
                (i._gsQueue || (i._gsQueue = [])).push(function() {
                    function t(t, e, i, n) {
                        return (
                            (i = parseFloat(i) - parseFloat(t)),
                            (n = parseFloat(n) - parseFloat(e)),
                            Math.sqrt(i * i + n * n)
                        );
                    }
                    function e(t) {
                        return (
                            ("string" != typeof t && t.nodeType) ||
                                ((t = i.TweenLite.selector(t)),
                                t.length && (t = t[0])),
                            t
                        );
                    }
                    function n(t, e, i) {
                        var n,
                            o,
                            s = t.indexOf(" ");
                        return (
                            s === -1
                                ? ((n = void 0 !== i ? i + "" : t), (o = t))
                                : ((n = t.substr(0, s)), (o = t.substr(s + 1))),
                            (n =
                                n.indexOf("%") !== -1
                                    ? (parseFloat(n) / 100) * e
                                    : parseFloat(n)),
                            (o =
                                o.indexOf("%") !== -1
                                    ? (parseFloat(o) / 100) * e
                                    : parseFloat(o)),
                            n > o ? [o, n] : [n, o]
                        );
                    }
                    function o(i) {
                        if (!i) return 0;
                        i = e(i);
                        var n,
                            o,
                            s,
                            r,
                            a,
                            l,
                            c,
                            u,
                            d = i.tagName.toLowerCase();
                        if ("path" === d) n = i.getTotalLength() || 0;
                        else if ("rect" === d)
                            (o = i.getBBox()), (n = 2 * (o.width + o.height));
                        else if ("circle" === d)
                            n = 2 * Math.PI * parseFloat(i.getAttribute("r"));
                        else if ("line" === d)
                            n = t(
                                i.getAttribute("x1"),
                                i.getAttribute("y1"),
                                i.getAttribute("x2"),
                                i.getAttribute("y2")
                            );
                        else if ("polyline" === d || "polygon" === d)
                            for (
                                s = i.getAttribute("points").split(" "),
                                    n = 0,
                                    a = s[0].split(","),
                                    "polygon" === d &&
                                        (s.push(s[0]),
                                        s[0].indexOf(",") === -1 &&
                                            s.push(s[1])),
                                    l = 1;
                                l < s.length;
                                l++
                            )
                                (r = s[l].split(",")),
                                    1 === r.length && (r[1] = s[l++]),
                                    2 === r.length &&
                                        ((n += t(a[0], a[1], r[0], r[1]) || 0),
                                        (a = r));
                        else
                            "ellipse" === d &&
                                ((c = parseFloat(i.getAttribute("rx"))),
                                (u = parseFloat(i.getAttribute("ry"))),
                                (n =
                                    Math.PI *
                                    (3 * (c + u) -
                                        Math.sqrt((3 * c + u) * (c + 3 * u)))));
                        return n || 0;
                    }
                    function s(t, i) {
                        if (!t) return [0, 0];
                        (t = e(t)), (i = i || o(t) + 1);
                        var n = a(t),
                            s = n.strokeDasharray || "",
                            r = parseFloat(n.strokeDashoffset);
                        return (
                            (s =
                                s.indexOf(" ") === -1
                                    ? i
                                    : parseFloat(s.split(" ")[0]) || 1e-5),
                            s > i && (s = i),
                            [Math.max(0, -r), s - r]
                        );
                    }
                    var r,
                        a = document.defaultView
                            ? document.defaultView.getComputedStyle
                            : function() {};
                    (r = i._gsDefine.plugin({
                        propName: "drawSVG",
                        API: 2,
                        version: "0.0.4",
                        global: !0,
                        overwriteProps: ["drawSVG"],
                        init: function(t, e, i) {
                            if (!t.getBBox) return !1;
                            var r,
                                a,
                                l,
                                c = o(t) + 1;
                            return (
                                (this._style = t.style),
                                e === !0 || "true" === e
                                    ? (e = "0 100%")
                                    : e
                                        ? (e + "").indexOf(" ") === -1 &&
                                          (e = "0 " + e)
                                        : (e = "0 0"),
                                (r = s(t, c)),
                                (a = n(e, c, r[0])),
                                (this._length = c + 10),
                                0 === r[0] && 0 === a[0]
                                    ? ((l = Math.max(1e-5, a[1] - c)),
                                      (this._dash = c + l),
                                      (this._offset = c - r[1] + l),
                                      this._addTween(
                                          this,
                                          "_offset",
                                          this._offset,
                                          c - a[1] + l,
                                          "drawSVG"
                                      ))
                                    : ((this._dash = r[1] - r[0] || 1e-6),
                                      (this._offset = -r[0]),
                                      this._addTween(
                                          this,
                                          "_dash",
                                          this._dash,
                                          a[1] - a[0] || 1e-5,
                                          "drawSVG"
                                      ),
                                      this._addTween(
                                          this,
                                          "_offset",
                                          this._offset,
                                          -a[0],
                                          "drawSVG"
                                      )),
                                !0
                            );
                        },
                        set: function(t) {
                            this._firstPT &&
                                (this._super.setRatio.call(this, t),
                                (this._style.strokeDashoffset = this._offset),
                                (this._style.strokeDasharray =
                                    this._dash + " " + this._length));
                        }
                    })),
                        (r.getLength = o),
                        (r.getPosition = s);
                }),
                    i._gsDefine && i._gsQueue.pop()();
            }.call(
                e,
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e) {
            (function(e) {
                "use strict";
                var i =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                            ? function(t) {
                                  return typeof t;
                              }
                            : function(t) {
                                  return t &&
                                      "function" == typeof Symbol &&
                                      t.constructor === Symbol &&
                                      t !== Symbol.prototype
                                      ? "symbol"
                                      : typeof t;
                              },
                    n =
                        "undefined" != typeof t &&
                        t.exports &&
                        "undefined" != typeof e
                            ? e
                            : window;
                (n._gsQueue || (n._gsQueue = [])).push(function() {
                    var t = Math.PI / 180,
                        e = 180 / Math.PI,
                        o = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        s = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        r = /[achlmqstvz]/gi,
                        a = n.TweenLite,
                        l = function(t) {
                            window.console && console.log(t);
                        },
                        c = function(e, i) {
                            var n,
                                o,
                                s,
                                r,
                                a,
                                l,
                                c = Math.ceil(Math.abs(i) / 90),
                                u = 0,
                                d = [];
                            for (
                                e *= t,
                                    i *= t,
                                    n = i / c,
                                    o =
                                        ((4 / 3) * Math.sin(n / 2)) /
                                        (1 + Math.cos(n / 2)),
                                    l = 0;
                                l < c;
                                l++
                            )
                                (s = e + l * n),
                                    (r = Math.cos(s)),
                                    (a = Math.sin(s)),
                                    (d[u++] = r - o * a),
                                    (d[u++] = a + o * r),
                                    (s += n),
                                    (r = Math.cos(s)),
                                    (a = Math.sin(s)),
                                    (d[u++] = r + o * a),
                                    (d[u++] = a - o * r),
                                    (d[u++] = r),
                                    (d[u++] = a);
                            return d;
                        },
                        u = function(i, n, o, s, r, a, l, u, d) {
                            if (i !== u || n !== d) {
                                (o = Math.abs(o)), (s = Math.abs(s));
                                var h = (r % 360) * t,
                                    p = Math.cos(h),
                                    f = Math.sin(h),
                                    m = (i - u) / 2,
                                    g = (n - d) / 2,
                                    v = p * m + f * g,
                                    y = -f * m + p * g,
                                    _ = o * o,
                                    w = s * s,
                                    b = v * v,
                                    x = y * y,
                                    $ = b / _ + x / w;
                                $ > 1 &&
                                    ((o = Math.sqrt($) * o),
                                    (s = Math.sqrt($) * s),
                                    (_ = o * o),
                                    (w = s * s));
                                var C = a === l ? -1 : 1,
                                    I =
                                        (_ * w - _ * x - w * b) /
                                        (_ * x + w * b);
                                I < 0 && (I = 0);
                                var S = C * Math.sqrt(I),
                                    T = S * ((o * y) / s),
                                    E = S * -((s * v) / o),
                                    A = (i + u) / 2,
                                    k = (n + d) / 2,
                                    P = A + (p * T - f * E),
                                    M = k + (f * T + p * E),
                                    O = (v - T) / o,
                                    L = (y - E) / s,
                                    N = (-v - T) / o,
                                    D = (-y - E) / s,
                                    R = Math.sqrt(O * O + L * L),
                                    z = O;
                                C = L < 0 ? -1 : 1;
                                var W = C * Math.acos(z / R) * e;
                                (R = Math.sqrt(
                                    (O * O + L * L) * (N * N + D * D)
                                )),
                                    (z = O * N + L * D),
                                    (C = O * D - L * N < 0 ? -1 : 1);
                                var B = C * Math.acos(z / R) * e;
                                !l && B > 0
                                    ? (B -= 360)
                                    : l && B < 0 && (B += 360),
                                    (B %= 360),
                                    (W %= 360);
                                var F,
                                    q,
                                    H,
                                    U = c(W, B),
                                    j = p * o,
                                    Y = f * o,
                                    V = f * -s,
                                    X = p * s,
                                    Q = U.length - 2;
                                for (F = 0; F < Q; F += 2)
                                    (q = U[F]),
                                        (H = U[F + 1]),
                                        (U[F] = q * j + H * V + P),
                                        (U[F + 1] = q * Y + H * X + M);
                                return (
                                    (U[U.length - 2] = u),
                                    (U[U.length - 1] = d),
                                    U
                                );
                            }
                        },
                        d = function(t) {
                            var e,
                                i,
                                n,
                                s,
                                r,
                                a,
                                c,
                                d,
                                h,
                                p,
                                f,
                                m,
                                g,
                                v = (t + "").match(o) || [],
                                y = [],
                                _ = 0,
                                w = 0,
                                b = v.length,
                                x = 2,
                                $ = 0;
                            if (!t || !isNaN(v[0]) || isNaN(v[1]))
                                return l("ERROR: malformed path data: " + t), y;
                            for (e = 0; e < b; e++)
                                if (
                                    ((g = r),
                                    isNaN(v[e])
                                        ? ((r = v[e].toUpperCase()),
                                          (a = r !== v[e]))
                                        : e--,
                                    (n = +v[e + 1]),
                                    (s = +v[e + 2]),
                                    a && ((n += _), (s += w)),
                                    0 === e && ((d = n), (h = s)),
                                    "M" === r)
                                )
                                    c &&
                                        c.length < 8 &&
                                        ((y.length -= 1), (x = 0)),
                                        (_ = d = n),
                                        (w = h = s),
                                        (c = [n, s]),
                                        ($ += x),
                                        (x = 2),
                                        y.push(c),
                                        (e += 2),
                                        (r = "L");
                                else if ("C" === r)
                                    c || (c = [0, 0]),
                                        (c[x++] = n),
                                        (c[x++] = s),
                                        a || (_ = w = 0),
                                        (c[x++] = _ + 1 * v[e + 3]),
                                        (c[x++] = w + 1 * v[e + 4]),
                                        (c[x++] = _ += 1 * v[e + 5]),
                                        (c[x++] = w += 1 * v[e + 6]),
                                        (e += 6);
                                else if ("S" === r)
                                    "C" === g || "S" === g
                                        ? ((p = _ - c[x - 4]),
                                          (f = w - c[x - 3]),
                                          (c[x++] = _ + p),
                                          (c[x++] = w + f))
                                        : ((c[x++] = _), (c[x++] = w)),
                                        (c[x++] = n),
                                        (c[x++] = s),
                                        a || (_ = w = 0),
                                        (c[x++] = _ += 1 * v[e + 3]),
                                        (c[x++] = w += 1 * v[e + 4]),
                                        (e += 4);
                                else if ("Q" === r)
                                    (p = n - _),
                                        (f = s - w),
                                        (c[x++] = _ + (2 * p) / 3),
                                        (c[x++] = w + (2 * f) / 3),
                                        a || (_ = w = 0),
                                        (_ += 1 * v[e + 3]),
                                        (w += 1 * v[e + 4]),
                                        (p = n - _),
                                        (f = s - w),
                                        (c[x++] = _ + (2 * p) / 3),
                                        (c[x++] = w + (2 * f) / 3),
                                        (c[x++] = _),
                                        (c[x++] = w),
                                        (e += 4);
                                else if ("T" === r)
                                    (p = _ - c[x - 4]),
                                        (f = w - c[x - 3]),
                                        (c[x++] = _ + p),
                                        (c[x++] = w + f),
                                        (p = _ + 1.5 * p - n),
                                        (f = w + 1.5 * f - s),
                                        (c[x++] = n + (2 * p) / 3),
                                        (c[x++] = s + (2 * f) / 3),
                                        (c[x++] = _ = n),
                                        (c[x++] = w = s),
                                        (e += 2);
                                else if ("H" === r)
                                    (s = w),
                                        (c[x++] = _ + (n - _) / 3),
                                        (c[x++] = w + (s - w) / 3),
                                        (c[x++] = _ + (2 * (n - _)) / 3),
                                        (c[x++] = w + (2 * (s - w)) / 3),
                                        (c[x++] = _ = n),
                                        (c[x++] = s),
                                        (e += 1);
                                else if ("V" === r)
                                    (s = n),
                                        (n = _),
                                        a && (s += w - _),
                                        (c[x++] = n),
                                        (c[x++] = w + (s - w) / 3),
                                        (c[x++] = n),
                                        (c[x++] = w + (2 * (s - w)) / 3),
                                        (c[x++] = n),
                                        (c[x++] = w = s),
                                        (e += 1);
                                else if ("L" === r || "Z" === r)
                                    "Z" === r &&
                                        ((n = d), (s = h), (c.closed = !0)),
                                        ("L" === r ||
                                            Math.abs(_ - n) > 0.5 ||
                                            Math.abs(w - s) > 0.5) &&
                                            ((c[x++] = _ + (n - _) / 3),
                                            (c[x++] = w + (s - w) / 3),
                                            (c[x++] = _ + (2 * (n - _)) / 3),
                                            (c[x++] = w + (2 * (s - w)) / 3),
                                            (c[x++] = n),
                                            (c[x++] = s),
                                            "L" === r && (e += 2)),
                                        (_ = n),
                                        (w = s);
                                else if ("A" === r) {
                                    for (
                                        m = u(
                                            _,
                                            w,
                                            1 * v[e + 1],
                                            1 * v[e + 2],
                                            1 * v[e + 3],
                                            1 * v[e + 4],
                                            1 * v[e + 5],
                                            (a ? _ : 0) + 1 * v[e + 6],
                                            (a ? w : 0) + 1 * v[e + 7]
                                        ),
                                            i = 0;
                                        i < m.length;
                                        i++
                                    )
                                        c[x++] = m[i];
                                    (_ = c[x - 2]), (w = c[x - 1]), (e += 7);
                                } else l("Error: malformed path data: " + t);
                            return (y.totalPoints = $ + x), y;
                        },
                        h = function(t, e) {
                            var i,
                                n,
                                o,
                                s,
                                r,
                                a,
                                l,
                                c,
                                u,
                                d,
                                h,
                                p,
                                f,
                                m,
                                g = 0,
                                v = 0.999999,
                                y = t.length,
                                _ = e / ((y - 2) / 6);
                            for (f = 2; f < y; f += 6)
                                for (g += _; g > v; )
                                    (i = t[f - 2]),
                                        (n = t[f - 1]),
                                        (o = t[f]),
                                        (s = t[f + 1]),
                                        (r = t[f + 2]),
                                        (a = t[f + 3]),
                                        (l = t[f + 4]),
                                        (c = t[f + 5]),
                                        (m = 1 / (Math.floor(g) + 1)),
                                        (u = i + (o - i) * m),
                                        (h = o + (r - o) * m),
                                        (u += (h - u) * m),
                                        (h += (r + (l - r) * m - h) * m),
                                        (d = n + (s - n) * m),
                                        (p = s + (a - s) * m),
                                        (d += (p - d) * m),
                                        (p += (a + (c - a) * m - p) * m),
                                        t.splice(
                                            f,
                                            4,
                                            i + (o - i) * m,
                                            n + (s - n) * m,
                                            u,
                                            d,
                                            u + (h - u) * m,
                                            d + (p - d) * m,
                                            h,
                                            p,
                                            r + (l - r) * m,
                                            a + (c - a) * m
                                        ),
                                        (f += 6),
                                        (y += 6),
                                        g--;
                            return t;
                        },
                        p = function(t) {
                            var e,
                                i,
                                n,
                                o,
                                s = "",
                                r = t.length,
                                a = 100;
                            for (i = 0; i < r; i++) {
                                for (
                                    o = t[i],
                                        s += "M" + o[0] + "," + o[1] + " C",
                                        e = o.length,
                                        n = 2;
                                    n < e;
                                    n++
                                )
                                    s +=
                                        ((o[n++] * a) | 0) / a +
                                        "," +
                                        ((o[n++] * a) | 0) / a +
                                        " " +
                                        ((o[n++] * a) | 0) / a +
                                        "," +
                                        ((o[n++] * a) | 0) / a +
                                        " " +
                                        ((o[n++] * a) | 0) / a +
                                        "," +
                                        ((o[n] * a) | 0) / a +
                                        " ";
                                o.closed && (s += "z");
                            }
                            return s;
                        },
                        f = function(t) {
                            for (
                                var e = [], i = t.length - 1, n = 0;
                                --i > -1;

                            )
                                (e[n++] = t[i]), (e[n++] = t[i + 1]), i--;
                            for (i = 0; i < n; i++) t[i] = e[i];
                            t.reversed = !t.reversed;
                        },
                        m = function(t) {
                            var e,
                                i = t.length,
                                n = 0,
                                o = 0;
                            for (e = 0; e < i; e++) (n += t[e++]), (o += t[e]);
                            return [n / (i / 2), o / (i / 2)];
                        },
                        g = function(t) {
                            var e,
                                i,
                                n,
                                o = t.length,
                                s = t[0],
                                r = s,
                                a = t[1],
                                l = a;
                            for (n = 6; n < o; n += 6)
                                (e = t[n]),
                                    (i = t[n + 1]),
                                    e > s ? (s = e) : e < r && (r = e),
                                    i > a ? (a = i) : i < l && (l = i);
                            return (
                                (t.centerX = (s + r) / 2),
                                (t.centerY = (a + l) / 2),
                                (t.size = (s - r) * (a - l))
                            );
                        },
                        v = function(t) {
                            for (
                                var e,
                                    i,
                                    n,
                                    o,
                                    s,
                                    r = t.length,
                                    a = t[0][0],
                                    l = a,
                                    c = t[0][1],
                                    u = c;
                                --r > -1;

                            )
                                for (
                                    s = t[r], e = s.length, o = 6;
                                    o < e;
                                    o += 6
                                )
                                    (i = s[o]),
                                        (n = s[o + 1]),
                                        i > a ? (a = i) : i < l && (l = i),
                                        n > c ? (c = n) : n < u && (u = n);
                            return (
                                (t.centerX = (a + l) / 2),
                                (t.centerY = (c + u) / 2),
                                (t.size = (a - l) * (c - u))
                            );
                        },
                        y = function(t, e) {
                            return e.length - t.length;
                        },
                        _ = function(t, e) {
                            var i = t.size || g(t),
                                n = e.size || g(e);
                            return Math.abs(n - i) < (i + n) / 20
                                ? e.centerX - t.centerX || e.centerY - t.centerY
                                : n - i;
                        },
                        w = function(t, e) {
                            var i,
                                n,
                                o = t.slice(0),
                                s = t.length,
                                r = s - 2;
                            for (e |= 0, i = 0; i < s; i++)
                                (n = (i + e) % r),
                                    (t[i++] = o[n]),
                                    (t[i] = o[n + 1]);
                        },
                        b = function(t, e, i, n, o) {
                            var s,
                                r,
                                a,
                                l,
                                c = t.length,
                                u = 0,
                                d = c - 2;
                            for (i *= 6, r = 0; r < c; r += 6)
                                (s = (r + i) % d),
                                    (l = t[s] - (e[r] - n)),
                                    (a = t[s + 1] - (e[r + 1] - o)),
                                    (u += Math.sqrt(a * a + l * l));
                            return u;
                        },
                        x = function(t, e, i) {
                            var n,
                                o,
                                s,
                                r = t.length,
                                a = m(t),
                                l = m(e),
                                c = l[0] - a[0],
                                u = l[1] - a[1],
                                d = b(t, e, 0, c, u),
                                h = 0;
                            for (s = 6; s < r; s += 6)
                                (o = b(t, e, s / 6, c, u)),
                                    o < d && ((d = o), (h = s));
                            if (i)
                                for (n = t.slice(0), f(n), s = 6; s < r; s += 6)
                                    (o = b(n, e, s / 6, c, u)),
                                        o < d && ((d = o), (h = -s));
                            return h / 6;
                        },
                        $ = function(t, e, i) {
                            for (
                                var n,
                                    o,
                                    s,
                                    r,
                                    a,
                                    l,
                                    c = t.length,
                                    u = 99999999999,
                                    d = 0,
                                    h = 0;
                                --c > -1;

                            )
                                for (
                                    n = t[c], l = n.length, a = 0;
                                    a < l;
                                    a += 6
                                )
                                    (o = n[a] - e),
                                        (s = n[a + 1] - i),
                                        (r = Math.sqrt(o * o + s * s)),
                                        r < u &&
                                            ((u = r),
                                            (d = n[a]),
                                            (h = n[a + 1]));
                            return [d, h];
                        },
                        C = function(t, e, i, n, o, s) {
                            var r,
                                a,
                                l,
                                c,
                                u,
                                d = e.length,
                                h = 0,
                                p =
                                    Math.min(
                                        t.size || g(t),
                                        e[i].size || g(e[i])
                                    ) * n,
                                f = 999999999999,
                                m = t.centerX + o,
                                v = t.centerY + s;
                            for (
                                a = i;
                                a < d && ((r = e[a].size || g(e[a])), !(r < p));
                                a++
                            )
                                (l = e[a].centerX - m),
                                    (c = e[a].centerY - v),
                                    (u = Math.sqrt(l * l + c * c)),
                                    u < f && ((h = a), (f = u));
                            return (u = e[h]), e.splice(h, 1), u;
                        },
                        I = function(t, e, n, o) {
                            var s,
                                r,
                                a,
                                c,
                                u,
                                d,
                                p,
                                m = e.length - t.length,
                                b = m > 0 ? e : t,
                                I = m > 0 ? t : e,
                                S = 0,
                                T = "complexity" === o ? y : _,
                                E =
                                    "position" === o
                                        ? 0
                                        : "number" == typeof o
                                            ? o
                                            : 0.8,
                                A = I.length,
                                k =
                                    "object" ===
                                        ("undefined" == typeof n
                                            ? "undefined"
                                            : i(n)) && n.push
                                        ? n.slice(0)
                                        : [n],
                                P = "reverse" === k[0] || k[0] < 0,
                                M = "log" === n;
                            if (I[0]) {
                                if (
                                    b.length > 1 &&
                                    (t.sort(T),
                                    e.sort(T),
                                    (d = b.size || v(b)),
                                    (d = I.size || v(I)),
                                    (d = b.centerX - I.centerX),
                                    (p = b.centerY - I.centerY),
                                    T === _)
                                )
                                    for (A = 0; A < I.length; A++)
                                        b.splice(A, 0, C(I[A], b, A, E, d, p));
                                if (m)
                                    for (
                                        m < 0 && (m = -m),
                                            b[0].length > I[0].length &&
                                                h(
                                                    I[0],
                                                    ((b[0].length -
                                                        I[0].length) /
                                                        6) |
                                                        0
                                                ),
                                            A = I.length;
                                        S < m;

                                    )
                                        (c = b[A].size || g(b[A])),
                                            (a = $(
                                                I,
                                                b[A].centerX,
                                                b[A].centerY
                                            )),
                                            (c = a[0]),
                                            (u = a[1]),
                                            (I[A++] = [c, u, c, u, c, u, c, u]),
                                            (I.totalPoints += 8),
                                            S++;
                                for (A = 0; A < t.length; A++)
                                    (s = e[A]),
                                        (r = t[A]),
                                        (m = s.length - r.length),
                                        m < 0
                                            ? h(s, (-m / 6) | 0)
                                            : m > 0 && h(r, (m / 6) | 0),
                                        P && !r.reversed && f(r),
                                        (n =
                                            k[A] || 0 === k[A] ? k[A] : "auto"),
                                        n &&
                                            (r.closed ||
                                            (Math.abs(r[0] - r[r.length - 2]) <
                                                0.5 &&
                                                Math.abs(
                                                    r[1] - r[r.length - 1]
                                                ) < 0.5)
                                                ? "auto" === n || "log" === n
                                                    ? ((k[A] = n = x(
                                                          r,
                                                          s,
                                                          0 === A
                                                      )),
                                                      n < 0 &&
                                                          ((P = !0),
                                                          f(r),
                                                          (n = -n)),
                                                      w(r, 6 * n))
                                                    : "reverse" !== n &&
                                                      (A && n < 0 && f(r),
                                                      w(
                                                          r,
                                                          6 * (n < 0 ? -n : n)
                                                      ))
                                                : !P &&
                                                  (("auto" === n &&
                                                      Math.abs(s[0] - r[0]) +
                                                          Math.abs(
                                                              s[1] - r[1]
                                                          ) +
                                                          Math.abs(
                                                              s[s.length - 2] -
                                                                  r[
                                                                      r.length -
                                                                          2
                                                                  ]
                                                          ) +
                                                          Math.abs(
                                                              s[s.length - 1] -
                                                                  r[
                                                                      r.length -
                                                                          1
                                                                  ]
                                                          ) >
                                                          Math.abs(
                                                              s[0] -
                                                                  r[
                                                                      r.length -
                                                                          2
                                                                  ]
                                                          ) +
                                                              Math.abs(
                                                                  s[1] -
                                                                      r[
                                                                          r.length -
                                                                              1
                                                                      ]
                                                              ) +
                                                              Math.abs(
                                                                  s[
                                                                      s.length -
                                                                          2
                                                                  ] - r[0]
                                                              ) +
                                                              Math.abs(
                                                                  s[
                                                                      s.length -
                                                                          1
                                                                  ] - r[1]
                                                              )) ||
                                                      n % 2)
                                                    ? (f(r),
                                                      (k[A] = -1),
                                                      (P = !0))
                                                    : "auto" === n
                                                        ? (k[A] = 0)
                                                        : "reverse" === n &&
                                                          (k[A] = -1),
                                            r.closed !== s.closed &&
                                                (r.closed = s.closed = !1));
                                return (
                                    M && l("shapeIndex:[" + k.join(",") + "]"),
                                    k
                                );
                            }
                        },
                        S = function(t, e, i, n) {
                            var o = d(t[0]),
                                s = d(t[1]);
                            I(o, s, e || 0 === e ? e : "auto", i) &&
                                ((t[0] = p(o)),
                                (t[1] = p(s)),
                                ("log" !== n && n !== !0) ||
                                    l(
                                        'precompile:["' +
                                            t[0] +
                                            '","' +
                                            t[1] +
                                            '"]'
                                    ));
                        },
                        T = function(t, e, i) {
                            return e || i || t || 0 === t
                                ? function(n) {
                                      S(n, t, e, i);
                                  }
                                : S;
                        },
                        E = function(t, e) {
                            if (!e) return t;
                            var i,
                                n,
                                o,
                                r = t.match(s) || [],
                                a = r.length,
                                l = "";
                            for (
                                "reverse" === e
                                    ? ((n = a - 1), (i = -2))
                                    : ((n =
                                          (2 * (parseInt(e, 10) || 0) +
                                              1 +
                                              100 * a) %
                                          a),
                                      (i = 2)),
                                    o = 0;
                                o < a;
                                o += 2
                            )
                                (l += r[n - 1] + "," + r[n] + " "),
                                    (n = (n + i) % a);
                            return l;
                        },
                        A = function(t, e) {
                            var i,
                                n,
                                o,
                                s,
                                r,
                                a,
                                l,
                                c = 0,
                                u = parseFloat(t[0]),
                                d = parseFloat(t[1]),
                                h = u + "," + d + " ",
                                p = 0.999999;
                            for (
                                o = t.length,
                                    i = (0.5 * e) / (0.5 * o - 1),
                                    n = 0;
                                n < o - 2;
                                n += 2
                            ) {
                                if (
                                    ((c += i),
                                    (a = parseFloat(t[n + 2])),
                                    (l = parseFloat(t[n + 3])),
                                    c > p)
                                )
                                    for (
                                        r = 1 / (Math.floor(c) + 1), s = 1;
                                        c > p;

                                    )
                                        (h +=
                                            (u + (a - u) * r * s).toFixed(2) +
                                            "," +
                                            (d + (l - d) * r * s).toFixed(2) +
                                            " "),
                                            c--,
                                            s++;
                                (h += a + "," + l + " "), (u = a), (d = l);
                            }
                            return h;
                        },
                        k = function(t) {
                            var e = t[0].match(s) || [],
                                i = t[1].match(s) || [],
                                n = i.length - e.length;
                            n > 0 ? (t[0] = A(e, n)) : (t[1] = A(i, -n));
                        },
                        P = function(t) {
                            return isNaN(t)
                                ? k
                                : function(e) {
                                      k(e), (e[1] = E(e[1], parseInt(t, 10)));
                                  };
                        },
                        M = function(t, e) {
                            var i = document.createElementNS(
                                    "http://www.w3.org/2000/svg",
                                    "path"
                                ),
                                n = Array.prototype.slice.call(t.attributes),
                                o = n.length;
                            for (e = "," + e + ","; --o > -1; )
                                e.indexOf("," + n[o].nodeName + ",") === -1 &&
                                    i.setAttributeNS(
                                        null,
                                        n[o].nodeName,
                                        n[o].nodeValue
                                    );
                            return i;
                        },
                        O = function(t, e) {
                            var i,
                                n,
                                o,
                                r,
                                a,
                                l,
                                c,
                                u,
                                d,
                                h,
                                p,
                                f,
                                m,
                                g,
                                v,
                                y,
                                _,
                                w,
                                b,
                                x,
                                $,
                                C = t.tagName.toLowerCase(),
                                I = 0.552284749831;
                            return "path" !== C && t.getBBox
                                ? ((l = M(
                                      t,
                                      "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"
                                  )),
                                  "rect" === C
                                      ? ((r = +t.getAttribute("rx") || 0),
                                        (a = +t.getAttribute("ry") || 0),
                                        (n = +t.getAttribute("x") || 0),
                                        (o = +t.getAttribute("y") || 0),
                                        (h =
                                            (+t.getAttribute("width") || 0) -
                                            2 * r),
                                        (p =
                                            (+t.getAttribute("height") || 0) -
                                            2 * a),
                                        r || a
                                            ? ((f = n + r * (1 - I)),
                                              (m = n + r),
                                              (g = m + h),
                                              (v = g + r * I),
                                              (y = g + r),
                                              (_ = o + a * (1 - I)),
                                              (w = o + a),
                                              (b = w + p),
                                              (x = b + a * I),
                                              ($ = b + a),
                                              (i =
                                                  "M" +
                                                  y +
                                                  "," +
                                                  w +
                                                  " V" +
                                                  b +
                                                  " C" +
                                                  [
                                                      y,
                                                      x,
                                                      v,
                                                      $,
                                                      g,
                                                      $,
                                                      g - (g - m) / 3,
                                                      $,
                                                      m + (g - m) / 3,
                                                      $,
                                                      m,
                                                      $,
                                                      f,
                                                      $,
                                                      n,
                                                      x,
                                                      n,
                                                      b,
                                                      n,
                                                      b - (b - w) / 3,
                                                      n,
                                                      w + (b - w) / 3,
                                                      n,
                                                      w,
                                                      n,
                                                      _,
                                                      f,
                                                      o,
                                                      m,
                                                      o,
                                                      m + (g - m) / 3,
                                                      o,
                                                      g - (g - m) / 3,
                                                      o,
                                                      g,
                                                      o,
                                                      v,
                                                      o,
                                                      y,
                                                      _,
                                                      y,
                                                      w
                                                  ].join(",") +
                                                  "z"))
                                            : (i =
                                                  "M" +
                                                  (n + h) +
                                                  "," +
                                                  o +
                                                  " v" +
                                                  p +
                                                  " h" +
                                                  -h +
                                                  " v" +
                                                  -p +
                                                  " h" +
                                                  h +
                                                  "z"))
                                      : "circle" === C || "ellipse" === C
                                          ? ("circle" === C
                                                ? ((r = a =
                                                      +t.getAttribute("r") ||
                                                      0),
                                                  (u = r * I))
                                                : ((r =
                                                      +t.getAttribute("rx") ||
                                                      0),
                                                  (a =
                                                      +t.getAttribute("ry") ||
                                                      0),
                                                  (u = a * I)),
                                            (n = +t.getAttribute("cx") || 0),
                                            (o = +t.getAttribute("cy") || 0),
                                            (c = r * I),
                                            (i =
                                                "M" +
                                                (n + r) +
                                                "," +
                                                o +
                                                " C" +
                                                [
                                                    n + r,
                                                    o + u,
                                                    n + c,
                                                    o + a,
                                                    n,
                                                    o + a,
                                                    n - c,
                                                    o + a,
                                                    n - r,
                                                    o + u,
                                                    n - r,
                                                    o,
                                                    n - r,
                                                    o - u,
                                                    n - c,
                                                    o - a,
                                                    n,
                                                    o - a,
                                                    n + c,
                                                    o - a,
                                                    n + r,
                                                    o - u,
                                                    n + r,
                                                    o
                                                ].join(",") +
                                                "z"))
                                          : "line" === C
                                              ? (i =
                                                    "M" +
                                                    t.getAttribute("x1") +
                                                    "," +
                                                    t.getAttribute("y1") +
                                                    " L" +
                                                    t.getAttribute("x2") +
                                                    "," +
                                                    t.getAttribute("y2"))
                                              : ("polyline" !== C &&
                                                    "polygon" !== C) ||
                                                ((d =
                                                    (
                                                        t.getAttribute(
                                                            "points"
                                                        ) + ""
                                                    ).match(s) || []),
                                                (n = d.shift()),
                                                (o = d.shift()),
                                                (i =
                                                    "M" +
                                                    n +
                                                    "," +
                                                    o +
                                                    " L" +
                                                    d.join(",")),
                                                "polygon" === C &&
                                                    (i +=
                                                        "," +
                                                        n +
                                                        "," +
                                                        o +
                                                        "z")),
                                  l.setAttribute("d", i),
                                  e &&
                                      t.parentNode &&
                                      (t.parentNode.insertBefore(l, t),
                                      t.parentNode.removeChild(t)),
                                  l)
                                : t;
                        },
                        L = function(t, e, i) {
                            var n,
                                o,
                                r = "string" == typeof t;
                            return (
                                (!r || (t.match(s) || []).length < 3) &&
                                    ((n = r ? a.selector(t) : [t]),
                                    n && n[0]
                                        ? ((n = n[0]),
                                          (o = n.nodeName.toUpperCase()),
                                          e &&
                                              "PATH" !== o &&
                                              ((n = O(n, !1)), (o = "PATH")),
                                          (t =
                                              n.getAttribute(
                                                  "PATH" === o ? "d" : "points"
                                              ) || ""),
                                          n === i &&
                                              (t =
                                                  n.getAttributeNS(
                                                      null,
                                                      "data-original"
                                                  ) || t))
                                        : (l("WARNING: invalid morph to: " + t),
                                          (t = !1))),
                                t
                            );
                        },
                        N =
                            "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",
                        D = n._gsDefine.plugin({
                            propName: "morphSVG",
                            API: 2,
                            global: !0,
                            version: "0.8.1",
                            init: function(t, e, n) {
                                var o, s, a, c, u;
                                return (
                                    "function" == typeof t.setAttribute &&
                                    ((o = t.nodeName.toUpperCase()),
                                    (u = "POLYLINE" === o || "POLYGON" === o),
                                    "PATH" === o || u
                                        ? ((s = "PATH" === o ? "d" : "points"),
                                          ("string" == typeof e ||
                                              e.getBBox ||
                                              e[0]) &&
                                              (e = { shape: e }),
                                          (c = L(
                                              e.shape || e.d || e.points || "",
                                              "d" === s,
                                              t
                                          )),
                                          u && r.test(c)
                                              ? (l(
                                                    "WARNING: a <" +
                                                        o +
                                                        "> cannot accept path data. " +
                                                        N
                                                ),
                                                !1)
                                              : (c &&
                                                    ((this._target = t),
                                                    t.getAttributeNS(
                                                        null,
                                                        "data-original"
                                                    ) ||
                                                        t.setAttributeNS(
                                                            null,
                                                            "data-original",
                                                            t.getAttribute(s)
                                                        ),
                                                    (a = this._addTween(
                                                        t,
                                                        "setAttribute",
                                                        t.getAttribute(s) + "",
                                                        c + "",
                                                        "morphSVG",
                                                        !1,
                                                        s,
                                                        "object" ===
                                                        i(e.precompile)
                                                            ? function(t) {
                                                                  (t[0] =
                                                                      e.precompile[0]),
                                                                      (t[1] =
                                                                          e.precompile[1]);
                                                              }
                                                            : "d" === s
                                                                ? T(
                                                                      e.shapeIndex,
                                                                      e.map ||
                                                                          D.defaultMap,
                                                                      e.precompile
                                                                  )
                                                                : P(
                                                                      e.shapeIndex
                                                                  )
                                                    )),
                                                    a &&
                                                        (this._overwriteProps.push(
                                                            "morphSVG"
                                                        ),
                                                        (a.end = c),
                                                        (a.endProp = s))),
                                                !0))
                                        : (l(
                                              "WARNING: cannot morph a <" +
                                                  o +
                                                  "> SVG element. " +
                                                  N
                                          ),
                                          !1))
                                );
                            },
                            set: function(t) {
                                var e;
                                if (
                                    (this._super.setRatio.call(this, t),
                                    1 === t)
                                )
                                    for (e = this._firstPT; e; )
                                        e.end &&
                                            this._target.setAttribute(
                                                e.endProp,
                                                e.end
                                            ),
                                            (e = e._next);
                            }
                        });
                    (D.pathFilter = S),
                        (D.pointsFilter = k),
                        (D.subdivideRawBezier = h),
                        (D.defaultMap = "size"),
                        (D.pathDataToRawBezier = function(t) {
                            return d(L(t, !0));
                        }),
                        (D.equalizeSegmentQuantity = I),
                        (D.convertToPath = function(t, e) {
                            "string" == typeof t && (t = a.selector(t));
                            for (
                                var i =
                                        t && 0 !== t.length
                                            ? t.length && t[0] && t[0].nodeType
                                                ? Array.prototype.slice.call(
                                                      t,
                                                      0
                                                  )
                                                : [t]
                                            : [],
                                    n = i.length;
                                --n > -1;

                            )
                                i[n] = O(i[n], e !== !1);
                            return i;
                        }),
                        (D.pathDataToBezier = function(t, e) {
                            var i,
                                n,
                                o,
                                s,
                                r,
                                l,
                                c,
                                u,
                                h = d(L(t, !0))[0] || [],
                                p = 0;
                            if (
                                ((e = e || {}),
                                (u = e.align || e.relative),
                                (s = e.matrix || [1, 0, 0, 1, 0, 0]),
                                (r = e.offsetX || 0),
                                (l = e.offsetY || 0),
                                "relative" === u || u === !0
                                    ? ((r -= h[0] * s[0] + h[1] * s[2]),
                                      (l -= h[0] * s[1] + h[1] * s[3]),
                                      (p = "+="))
                                    : ((r += s[4]),
                                      (l += s[5]),
                                      u &&
                                          ((u =
                                              "string" == typeof u
                                                  ? a.selector(u)
                                                  : [u]),
                                          u &&
                                              u[0] &&
                                              ((c = u[0].getBBox() || {
                                                  x: 0,
                                                  y: 0
                                              }),
                                              (r -= c.x),
                                              (l -= c.y)))),
                                (i = []),
                                (o = h.length),
                                s)
                            )
                                for (n = 0; n < o; n += 2)
                                    i.push({
                                        x:
                                            p +
                                            (h[n] * s[0] + h[n + 1] * s[2] + r),
                                        y:
                                            p +
                                            (h[n] * s[1] + h[n + 1] * s[3] + l)
                                    });
                            else
                                for (n = 0; n < o; n += 2)
                                    i.push({
                                        x: p + (h[n] + r),
                                        y: p + (h[n + 1] + l)
                                    });
                            return i;
                        });
                }),
                    n._gsDefine && n._gsQueue.pop()();
            }.call(
                e,
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e, n) {
            var o,
                s,
                r =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function(t) {
                              return typeof t;
                          }
                        : function(t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          };
            !(function() {
                var l = {
                    uuid: function(t) {
                        function e() {
                            return Math.floor(65536 * (1 + Math.random()))
                                .toString(16)
                                .substring(1);
                        }
                        if (t) {
                            for (var i = ""; t--; ) i += e();
                            return i;
                        }
                        return e() + e() + e() + e() + e() + e() + e() + e();
                    },
                    changeURLPar: function(t, e, n) {
                        var o,
                            s = t.split("#")[0];
                        if (s.indexOf("?") != -1) {
                            var r = "";
                            r = s.substr(s.indexOf("?") + 1);
                            var a,
                                l = "",
                                c = "",
                                u = "0";
                            if (r.indexOf("&") != -1) {
                                a = r.split("&");
                                for (i in a) {
                                    if (a[i].split("=")[0] == e) {
                                        if ("" == n) continue;
                                        (c = n), (u = "1");
                                    } else c = a[i].split("=")[1];
                                    l = l + a[i].split("=")[0] + "=" + c + "&";
                                }
                                (l = l.substr(0, l.length - 1)),
                                    "0" == u &&
                                        "" != n &&
                                        l == r &&
                                        (l = l + "&" + e + "=" + n);
                            } else
                                r.indexOf("=") != -1
                                    ? ((a = r.split("=")),
                                      a[0] == e
                                          ? ((c = n), (u = "1"))
                                          : (c = a[1]),
                                      "" != c && (l = a[0] + "=" + c),
                                      "0" == u &&
                                          l == r &&
                                          "" != n &&
                                          (l = l + "&" + e + "=" + n))
                                    : "" != n && (l = e + "=" + n);
                            (o = s.substr(0, s.indexOf("?"))),
                                "" != l && (o = o + "?" + l);
                        } else o = "" != n ? s + "?" + e + "=" + n : s;
                        return (
                            t.indexOf("#") > 0 &&
                                (o = o + "#" + t.split("#")[1]),
                            o
                        );
                    },
                    getUrlParameterByName: function(t, e) {
                        var i = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"),
                            n = new RegExp("[\\?&]" + i + "=([^&#]*)"),
                            o = n.exec(
                                ("undefined" != typeof e && e) ||
                                    location.search
                            );
                        return null == o
                            ? null
                            : decodeURIComponent(o[1].replace(/\+/g, " "));
                    },
                    replaceUrlParameterByName: function(t, e, i) {
                        var n = e.split("=")[1];
                        return this.changeURLPar(i, t, n);
                    },
                    getHashParameterByName: function(t) {
                        var e = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"),
                            i = new RegExp("[\\#&]" + e + "=([^&#]*)"),
                            n = i.exec(location.hash);
                        return null == n
                            ? null
                            : decodeURIComponent(n[1].replace(/\+/g, " "));
                    },
                    replaceHashParameterByName: function(t, e) {
                        var i = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"),
                            n = new RegExp("[\\#&]" + i + "=([^&#]*)"),
                            o = n.exec(location.hash);
                        return location.hash.replace(o[0].substr(1), e);
                    },
                    parseTemplate: function(t) {
                        var e = null;
                        return (
                            "function" == typeof t && (e = t),
                            "string" == typeof t && (e = _.template(t)),
                            e
                        );
                    },
                    renderT: function(t, e, i, o, s) {
                        if (!t) return !1;
                        e || (e = {});
                        var r = o || null,
                            a = $.extend(!0, {}, e);
                        if (
                            (r &&
                                "undefined" != typeof _gDebug &&
                                _gDebug &&
                                _g.debug &&
                                _g.debug.enabled &&
                                _g.debug.query_user_template(r) &&
                                !s &&
                                (t = _g.debug.query_user_template(r)),
                            i)
                        ) {
                            var l = {};
                            (l[i] = a), (a = l);
                        }
                        var c = _g.parseTemplate(t);
                        r &&
                            _g.debug &&
                            _g.debug.enabled &&
                            (_g.debug.template[r] = {
                                data: a,
                                template:
                                    "string" == typeof t ? t : t.textsource,
                                debug: !0
                            });
                        var u = $(c(a));
                        return (
                            r &&
                                _g.debug &&
                                _g.debug.enabled &&
                                (_g.debug.template[r].el = u),
                            _g.generator &&
                                (_g.generator.autoWidget(u),
                                (u.hasClass("c-slimscroll") ||
                                    u.find(".c-slimscroll").length) &&
                                    _g.generator.autoScroll(u)),
                            u
                                .find("[data-toggle=tooltip],.c-tooltip-btn")
                                .each(function() {
                                    var t = $(this),
                                        e = $(this).data().template;
                                    e
                                        ? n.e(0, function(e) {
                                              var i = [
                                                  !(function() {
                                                      var t = new Error(
                                                          'Cannot find module "."'
                                                      );
                                                      throw ((t.code =
                                                          "MODULE_NOT_FOUND"),
                                                      t);
                                                  })()
                                              ];
                                              (function() {
                                                  var e = !(function() {
                                                      var t = new Error(
                                                          'Cannot find module "."'
                                                      );
                                                      throw ((t.code =
                                                          "MODULE_NOT_FOUND"),
                                                      t);
                                                  })();
                                                  t.tooltip({ template: e });
                                              }.apply(null, i));
                                          })
                                        : $(this).tooltip();
                                }),
                            u
                        );
                    },
                    domExist: function(t, e) {
                        return (
                            e || (e = document),
                            "string" == typeof t && (t = $(t)),
                            jQuery.contains(e.documentElement, t[0])
                        );
                    },
                    browserSupport: function(t) {
                        var e = !1,
                            i = {
                                msie: 1,
                                chrome: 1,
                                mozilla: 1,
                                safari: 1,
                                opera: 1,
                                success: null,
                                fail: null
                            };
                        t = t ? $.extend(!0, {}, i, t) : $.extend(!0, {}, i);
                        var n = parseInt($.browser.version, 10);
                        return (
                            ($.browser.msie && 1 == t.msie) ||
                            ($.browser.chrome && 1 == t.chrome) ||
                            ($.browser.mozilla && 1 == t.mozilla) ||
                            ($.browser.safari &&
                                1 == t.safrai &&
                                $.browser.opera &&
                                1 == t.opera)
                                ? (e = !0)
                                : ($.browser.msie && 0 == t.msie) ||
                                  ($.browser.chrome && 0 == t.chrome) ||
                                  ($.browser.mozilla && 0 == t.mozilla) ||
                                  ($.browser.safari &&
                                      0 == t.safrai &&
                                      $.browser.opera &&
                                      0 == t.opera)
                                    ? (e = !1)
                                    : ($.browser.msie && (e = n >= t.msie),
                                      $.browser.chrome && (e = n >= t.chrome),
                                      $.browser.mozilla && (e = n >= t.mozilla),
                                      $.browser.opera && (e = n >= t.opera),
                                      $.browser.safari && (e = n >= t.safari)),
                            e ? t.success && t.success() : t.fail && t.fail(),
                            e
                        );
                    },
                    array: {
                        moveup: function(t, e) {
                            var i = t.indexOf(e);
                            return i > 0 && (t = _g.array.swap(t, i, i - 1)), t;
                        },
                        movedown: function(t, e) {
                            var i = t.indexOf(e);
                            return (
                                i < t.length &&
                                    (t = _g.array.swap(t, i, i + 1)),
                                t
                            );
                        },
                        swap: function(t, e, i) {
                            return (t[e] = t.splice(i, 1, t[e])[0]), t;
                        },
                        move2first: function(t, e) {
                            var n = [];
                            for (n.push(e), i = 0; i < t.length; i++)
                                t[i] != e && n.push(t[i]);
                            return n;
                        },
                        move2last: function(t, e) {
                            var n = [];
                            for (i = 0; i < t.length; i++)
                                t[i] != e && n.push(t[i]);
                            return n.push(e), n;
                        },
                        randomPick: function(t) {
                            return t[Math.floor(Math.random() * t.length)];
                        },
                        maptree: function(t) {
                            var e = {
                                treesource: null,
                                mapdata: null,
                                idAttribute: "id"
                            };
                            if (
                                ((t = t
                                    ? $.extend(!0, {}, e, t)
                                    : $.extend(!0, {}, e)),
                                !t.treesource || !t.mapdata)
                            )
                                return [];
                            var i = [];
                            return (
                                _.each(t.treesource, function(e) {
                                    e.children &&
                                        (e.children = _g.array.maptree({
                                            treesource: e.children,
                                            mapdata: t.mapdata,
                                            idAttribute: t.idAttribute
                                        }));
                                    var n = _.find(t.mapdata, function(i) {
                                        return (
                                            i[t.idAttribute] == e[t.idAttribute]
                                        );
                                    });
                                    n && (e = $.extend(!0, e, n)), i.push(e);
                                }),
                                i
                            );
                        },
                        toDict: function(t, e) {
                            var n,
                                o = {};
                            for (i = 0; i < t.length; i++)
                                (n = t[i][e]), (o[n] = t[i]);
                            return o;
                        },
                        treeToList: function(t, e, i) {
                            var n = {
                                childrenKey: "children",
                                parentKey: "parent",
                                idAttribute: "id"
                            };
                            if (
                                ((e = e
                                    ? $.extend(!0, {}, n, e)
                                    : $.extend(!0, {}, n)),
                                !t)
                            )
                                return [];
                            var o = [];
                            return (
                                _.each(t, function(n) {
                                    if (n[e.childrenKey].length) {
                                        var s = _g.array.toTreeList(
                                            n[e.childrenKey],
                                            e,
                                            i ? i : t
                                        );
                                        for (j = 0; j < s.length; j++)
                                            o.push(s[j]);
                                        n.children = _.pluck(n.children, "id");
                                    } else delete n.children;
                                    o.push(n);
                                }),
                                o
                            );
                        },
                        listToTree: function(t, e, i) {
                            var n = {
                                childrenKey: "children",
                                parentKey: "parent",
                                idAttribute: "id"
                            };
                            e = e
                                ? $.extend(!0, {}, n, e)
                                : $.extend(!0, {}, n);
                            var o = [];
                            return (
                                i &&
                                    (t = _.map(t, function(t) {
                                        return (
                                            "string" == typeof t &&
                                                (t = _.find(i, function(i) {
                                                    return (
                                                        i[e.idAttribute] == t
                                                    );
                                                })),
                                            t
                                        );
                                    })),
                                _.each(t, function(n) {
                                    var s = $.extend(!0, {}, n);
                                    i || s[e.parentKey],
                                        s[e.childrenKey] &&
                                        s[e.childrenKey].length
                                            ? ((s[
                                                  e.childrenKey
                                              ] = _g.array.listToTree(
                                                  s[e.childrenKey],
                                                  e,
                                                  i ? i : t
                                              )),
                                              o.push(s))
                                            : o.push(s);
                                }),
                                o
                            );
                        }
                    },
                    object: {
                        jsonparse: function(t) {
                            if (!t) return null;
                            try {
                                return (a = JSON.parse(t)), a;
                            } catch (e) {
                                return t;
                            }
                        },
                        equal: function(t, e) {},
                        treeToArray: function(t) {},
                        getKeyByValue: function(t, e) {
                            try {
                                var i = _.keys(t)[_.values(t).indexOf(e)];
                                return i;
                            } catch (t) {
                                return;
                            }
                        }
                    },
                    string: {
                        randomGenerate: function(t) {
                            t = t ? t : 10;
                            for (
                                var e = "",
                                    i =
                                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890",
                                    n = 0;
                                n < t;
                                n++
                            )
                                e += i.charAt(
                                    Math.floor(Math.random() * i.length)
                                );
                            return e;
                        },
                        getUrlExt: function(t) {
                            return t.match(/(.[^.]+|)$/)[0];
                        },
                        getUrlNameWithOutExt: function(t) {
                            return t.substr(0, t.lastIndexOf(".")) || t;
                        },
                        getFileNameByPath: function(t) {
                            return t.replace(/^.*[\\\/]/, "");
                        },
                        string2boolean: function(t) {
                            return "true" == t;
                        },
                        capitalize: function(t) {
                            return (t =
                                t.substring(0, 1).toUpperCase() +
                                t.substring(1));
                        },
                        rmfirst: function(t) {
                            return t.replace(/^.(\s+)?/, "");
                        },
                        rmlast: function(t) {
                            return t.replace(/(\s+)?.$/, "");
                        },
                        isPureEng: function(t) {
                            var e = t;
                            if ("" == e) return !0;
                            for (var i = 0; i < e.length; i++)
                                if (
                                    !(
                                        (e.charCodeAt(i) >= 48 &&
                                            e.charCodeAt(i) <= 57) ||
                                        (e.charCodeAt(i) >= 65 &&
                                            e.charCodeAt(i) <= 90) ||
                                        (e.charCodeAt(i) >= 97 &&
                                            e.charCodeAt(i) <= 122)
                                    )
                                )
                                    return !1;
                            return !0;
                        },
                        isEng: function(t) {
                            var e = t;
                            if ("" == e) return !0;
                            for (var i = 0; i < e.length; i++)
                                if (
                                    !(
                                        32 == e.charCodeAt(i) ||
                                        (e.charCodeAt(i) >= 48 &&
                                            e.charCodeAt(i) <= 57) ||
                                        (e.charCodeAt(i) >= 65 &&
                                            e.charCodeAt(i) <= 90) ||
                                        (e.charCodeAt(i) >= 97 &&
                                            e.charCodeAt(i) <= 122)
                                    )
                                )
                                    return !1;
                            return !0;
                        },
                        isPureChi: function(t) {
                            var e = t;
                            if ("" == e) return !0;
                            for (var i = 0; i < e.length; i++)
                                if (
                                    !(
                                        e.charCodeAt(i) >= 19968 &&
                                        e.charCodeAt(i) <= 64041
                                    )
                                )
                                    return !1;
                            return !0;
                        },
                        isChi: function(t) {
                            var e = t;
                            if ("" == e) return !0;
                            for (var i = 0; i < e.length; i++)
                                if (
                                    !(
                                        32 == e.charCodeAt(i) ||
                                        (e.charCodeAt(i) >= 19968 &&
                                            e.charCodeAt(i) <= 64041)
                                    )
                                )
                                    return !1;
                            return !0;
                        },
                        autoName: function(t, e, i, n) {
                            t || (t = ""), i || (i = ""), n || (n = 1);
                            var o = t + n + i;
                            return e.indexOf(o) != -1
                                ? _g.string.autoName(t, e, i, n + 1)
                                : o;
                        }
                    },
                    boolean: {
                        randomPick: function() {
                            return !!Math.round(1 * Math.random());
                        }
                    },
                    number: {
                        random: function(t, e) {
                            return (
                                "undefined" == typeof t && (t = 0),
                                "undefined" == typeof e && (e = 100),
                                Math.random() * (e - t) + t
                            );
                        },
                        randomInt: function(t, e) {
                            return (
                                "undefined" == typeof t && (t = 0),
                                "undefined" == typeof e && (e = 100),
                                Math.floor(Math.random() * (e - t + 1)) + t
                            );
                        },
                        round: function(t, e) {
                            var i = t;
                            void 0 ==
                                ("undefined" == typeof e
                                    ? "undefined"
                                    : r(e)) && (e = 0.5);
                            var n = parseInt(t),
                                o = t - n;
                            i = o < e ? n : n + 1;
                        },
                        rgbToHex: function(t, e, i) {
                            return (
                                "#" +
                                ((1 << 24) + (t << 16) + (e << 8) + i)
                                    .toString(16)
                                    .slice(1)
                            );
                        },
                        hexToRgb: function(t) {
                            var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                            t = t.replace(e, function(t, e, i, n) {
                                return e + e + i + i + n + n;
                            });
                            var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                                t
                            );
                            return i
                                ? {
                                      r: parseInt(i[1], 16),
                                      g: parseInt(i[2], 16),
                                      b: parseInt(i[3], 16)
                                  }
                                : null;
                        },
                        decimal: function(t, e) {
                            return Number(t.toFixed(e));
                        }
                    },
                    hasTouch: (function() {
                        try {
                            return document.createEvent("TouchEvent"), !0;
                        } catch (t) {
                            return !1;
                        }
                    })(),
                    inIframe: function() {
                        try {
                            return window.self !== window.top;
                        } catch (t) {
                            return !0;
                        }
                    },
                    supportFlash: function() {
                        return (
                            "undefined" != typeof swfobject &&
                            0 !== swfobject.getFlashPlayerVersion().major
                        );
                    },
                    isMSIE11: function() {
                        return !!navigator.userAgent.match(/Trident\/7\./);
                    },
                    getRGBA: function(t, e) {
                        if (((e = void 0 != e ? Number(e) : 1), !t))
                            return "transparent";
                        if (t.indexOf("rgb(") != -1)
                            var i = t.replace(/rgb\((.*)\)/, "$1").split(","),
                                n =
                                    "rgba(" +
                                    i[0] +
                                    "," +
                                    i[1] +
                                    "," +
                                    i[2] +
                                    "," +
                                    e +
                                    ")";
                        else {
                            var i = _g.number.hexToRgb(t);
                            if (i)
                                var n =
                                    "rgba(" +
                                    i.r +
                                    "," +
                                    i.g +
                                    "," +
                                    i.b +
                                    "," +
                                    e +
                                    ")";
                            else n = "rgba(255,255,255,1)";
                        }
                        return n;
                    },
                    weixinShare: function() {
                        if (
                            "undefined" != typeof wx_permissions &&
                            wx_permissions.onMenuShareTimeline
                        ) {
                            var t =
                                    message_link +
                                    (message_link.indexOf(
                                        "disableHistoryStart=0"
                                    ) >= 0
                                        ? "#page/" +
                                          interaction_view.currentPage
                                        : ""),
                                e =
                                    shareTitle == bookTitle
                                        ? descContent
                                        : shareTitle;
                            wx.onMenuShareAppMessage({
                                title: bookTitle,
                                desc: e,
                                link: t,
                                imgUrl: imgUrl,
                                trigger: function(t) {
                                    _gaq.push([
                                        "_trackEvent",
                                        "weixin",
                                        "share",
                                        "appmessage",
                                        "click"
                                    ]);
                                },
                                success: function(t) {
                                    _gaq.push([
                                        "_trackSocial",
                                        "Wechat",
                                        "appmessage",
                                        ga_opt_target,
                                        ga_opt_pagePath
                                    ]);
                                },
                                cancel: function(t) {
                                    _gaq.push([
                                        "_trackEvent",
                                        "weixin",
                                        "share",
                                        "appmessage",
                                        "cancel"
                                    ]);
                                },
                                fail: function(t) {
                                    _gaq.push([
                                        "_trackEvent",
                                        "error",
                                        "weixinjsapi",
                                        "appmessage",
                                        JSON.stringify(t)
                                    ]);
                                }
                            }),
                                wx.onMenuShareTimeline({
                                    title: shareTitle,
                                    link: t,
                                    imgUrl: imgUrl,
                                    trigger: function(t) {
                                        _gaq.push([
                                            "_trackEvent",
                                            "weixin",
                                            "share",
                                            "timeline",
                                            "click"
                                        ]);
                                    },
                                    success: function(t) {
                                        _gaq.push([
                                            "_trackSocial",
                                            "Wechat",
                                            "timeline",
                                            ga_opt_target,
                                            ga_opt_pagePath
                                        ]);
                                    },
                                    cancel: function(t) {
                                        _gaq.push([
                                            "_trackEvent",
                                            "weixin",
                                            "share",
                                            "timeline",
                                            "cancel"
                                        ]);
                                    },
                                    fail: function(t) {
                                        _gaq.push([
                                            "_trackEvent",
                                            "error",
                                            "weixinjsapi",
                                            "timeline",
                                            JSON.stringify(t)
                                        ]);
                                    }
                                }),
                                wx.onMenuShareQQ({
                                    title: bookTitle,
                                    desc: e,
                                    link: t,
                                    imgUrl: imgUrl,
                                    trigger: function(t) {
                                        _gaq.push([
                                            "_trackEvent",
                                            "weixin",
                                            "share",
                                            "QQ",
                                            "click"
                                        ]);
                                    },
                                    complete: function(t) {
                                        _gaq.push([
                                            "_trackEvent",
                                            "weixin",
                                            "share",
                                            "QQ",
                                            "complete"
                                        ]);
                                    },
                                    success: function(t) {
                                        _gaq.push([
                                            "_trackSocial",
                                            "Wechat",
                                            "QQ",
                                            ga_opt_target,
                                            ga_opt_pagePath
                                        ]);
                                    },
                                    cancel: function(t) {
                                        _gaq.push([
                                            "_trackEvent",
                                            "weixin",
                                            "share",
                                            "QQ",
                                            "cancel"
                                        ]);
                                    },
                                    fail: function(t) {
                                        _gaq.push([
                                            "_trackEvent",
                                            "error",
                                            "weixinjsapi",
                                            "QQ",
                                            JSON.stringify(t)
                                        ]);
                                    }
                                }),
                                wx.onMenuShareWeibo({
                                    title: shareTitle,
                                    desc: descContent,
                                    link: message_link,
                                    imgUrl: imgUrl,
                                    trigger: function(t) {
                                        _gaq.push([
                                            "_trackEvent",
                                            "weixin",
                                            "share",
                                            "Weibo",
                                            "click"
                                        ]);
                                    },
                                    complete: function(t) {
                                        _gaq.push([
                                            "_trackEvent",
                                            "weixin",
                                            "share",
                                            "Weibo",
                                            "complete"
                                        ]);
                                    },
                                    success: function(t) {
                                        _gaq.push([
                                            "_trackSocial",
                                            "Wechat",
                                            "Weibo",
                                            ga_opt_target,
                                            ga_opt_pagePath
                                        ]);
                                    },
                                    cancel: function(t) {
                                        _gaq.push([
                                            "_trackEvent",
                                            "weixin",
                                            "share",
                                            "Weibo",
                                            "cancel"
                                        ]);
                                    },
                                    fail: function(t) {
                                        _gaq.push([
                                            "_trackEvent",
                                            "error",
                                            "weixinjsapi",
                                            "Weibo",
                                            JSON.stringify(t)
                                        ]);
                                    }
                                });
                        }
                    }
                };
                (o = [n(9), n(4)]),
                    (s = function() {
                        return (
                            window._g || (window._g = {}),
                            (window._g = $.extend(!0, {}, window._g, l)),
                            (l = void 0),
                            window._g
                        );
                    }.apply(e, o)),
                    !(void 0 !== s && (t.exports = s));
            })(window);
        },
        function(t, e) {
            function i(t) {
                throw new Error("Cannot find module '" + t + "'.");
            }
            (i.keys = function() {
                return [];
            }),
                (i.resolve = i),
                (t.exports = i),
                (i.id = 16);
        },
        function(t, e, i) {
            var n, o;
            !(function() {
                var s,
                    r,
                    a,
                    l,
                    c,
                    u,
                    d,
                    h,
                    p,
                    f = {};
                (r = window.document.documentElement),
                    (p = window.navigator.userAgent.toLowerCase()),
                    (f.ios = function() {
                        return f.iphone() || f.ipod() || f.ipad();
                    }),
                    (f.iphone = function() {
                        return a("iphone");
                    }),
                    (f.ipod = function() {
                        return a("ipod");
                    }),
                    (f.ipad = function() {
                        return a("ipad");
                    }),
                    (f.android = function() {
                        return a("android");
                    }),
                    (f.androidPhone = function() {
                        return f.android() && a("mobile");
                    }),
                    (f.androidTablet = function() {
                        return f.android() && !a("mobile");
                    }),
                    (f.blackberry = function() {
                        return a("blackberry") || a("bb10") || a("rim");
                    }),
                    (f.blackberryPhone = function() {
                        return f.blackberry() && !a("tablet");
                    }),
                    (f.blackberryTablet = function() {
                        return f.blackberry() && a("tablet");
                    }),
                    (f.windows = function() {
                        return a("windows");
                    }),
                    (f.mac = function() {
                        return a("mac");
                    }),
                    (f.linux = function() {
                        return a("linux");
                    }),
                    (f.windowsPhone = function() {
                        return f.windows() && a("phone");
                    }),
                    (f.windowsTablet = function() {
                        return f.windows() && a("touch");
                    }),
                    (f.fxos = function() {
                        return (a("(mobile;") || a("(tablet;")) && a("; rv:");
                    }),
                    (f.fxosPhone = function() {
                        return f.fxos() && a("mobile");
                    }),
                    (f.fxosTablet = function() {
                        return f.fxos() && a("tablet");
                    }),
                    (f.meego = function() {
                        return a("meego");
                    }),
                    (f.mobile = function() {
                        return (
                            f.androidPhone() ||
                            f.iphone() ||
                            f.ipod() ||
                            f.windowsPhone() ||
                            f.blackberryPhone() ||
                            f.fxosPhone() ||
                            f.meego()
                        );
                    }),
                    (f.tablet = function() {
                        return (
                            f.ipad() ||
                            f.androidTablet() ||
                            f.blackberryTablet() ||
                            f.windowsTablet() ||
                            f.fxosTablet()
                        );
                    }),
                    (f.msie = function() {
                        return (
                            $.browser.msie ||
                            !!navigator.userAgent.match(/Trident\/7\./)
                        );
                    }),
                    (f.portrait = function() {
                        return 90 !== Math.abs(window.orientation);
                    }),
                    (f.landscape = function() {
                        return 90 === Math.abs(window.orientation);
                    }),
                    (f.noConflict = function() {
                        return this;
                    }),
                    (f.svg = function() {
                        return document.implementation.hasFeature(
                            "http://www.w3.org/TR/SVG11/feature#Shape",
                            "1.1"
                        );
                    }),
                    (f.online = function(t, e, i) {
                        var n = new Image();
                        (n.onload = function() {
                            console.log("online"),
                                e && e.constructor == Function && e();
                        }),
                            (n.onerror = function() {
                                console.log("offline"),
                                    i && i.constructor == Function && i();
                            }),
                            (n.src = t + "?t=" + _g.uuid());
                    }),
                    (f.screenSize = function() {
                        var t = window,
                            e = document,
                            i = e.documentElement,
                            n = e.getElementsByTagName("body")[0],
                            o = t.innerWidth || i.clientWidth || n.clientWidth,
                            s =
                                t.innerHeight ||
                                i.clientHeight ||
                                n.clientHeight;
                        return { x: o, y: s };
                    }),
                    (f.isWeixin = function() {
                        var t = navigator.userAgent.toLowerCase();
                        return !!/micromessenger/.test(t);
                    }),
                    (a = function(t) {
                        return p.indexOf(t) !== -1;
                    }),
                    (c = function(t) {
                        var e;
                        return (e = new RegExp(t, "i")), r.className.match(e);
                    }),
                    (s = function(t) {
                        if (!c(t)) return (r.className += " " + t);
                    }),
                    (d = function(t) {
                        if (c(t))
                            return (r.className = r.className.replace(t, ""));
                    });
                var m = function() {
                    f.ios()
                        ? f.ipad()
                            ? s("ios ipad tablet")
                            : f.iphone()
                                ? s("ios iphone mobile")
                                : f.ipod() && s("ios ipod mobile")
                        : s(
                              f.android()
                                  ? f.androidTablet()
                                      ? "android tablet"
                                      : "android mobile"
                                  : f.blackberry()
                                      ? f.blackberryTablet()
                                          ? "blackberry tablet"
                                          : "blackberry mobile"
                                      : f.windows()
                                          ? f.windowsTablet()
                                              ? "windows tablet"
                                              : f.windowsPhone()
                                                  ? "windows mobile"
                                                  : "desktop"
                                          : f.fxos()
                                              ? f.fxosTablet()
                                                  ? "fxos tablet"
                                                  : "fxos mobile"
                                              : f.meego()
                                                  ? "meego mobile"
                                                  : "desktop"
                          );
                };
                (l = function() {
                    return f.landscape()
                        ? (d("portrait"), s("landscape"))
                        : (d("landscape"), s("portrait"));
                }),
                    (h = "onorientationchange" in window),
                    (u = h ? "orientationchange" : "resize"),
                    window.addEventListener
                        ? window.addEventListener(u, l, !1)
                        : window.attachEvent
                            ? window.attachEvent(u, l)
                            : (window[u] = l),
                    l(),
                    (f.initDom = m),
                    (window._g_device = f),
                    (n = [i(15)]),
                    (o = function() {
                        return (window._g.device = _g_device), window._g.device;
                    }.apply(e, n)),
                    !(void 0 !== o && (t.exports = o));
            })(window);
        },
        function(t, e, i) {
            var n, o;
            !(function() {
                var s = {
                    bind: function(t) {
                        var e,
                            i,
                            n = 0,
                            o = 0;
                        t.callback ||
                            (t.callback = function() {
                                return !0;
                            }),
                            $(t.el)
                                .hammer()
                                .on("dragstart", function(i) {
                                    (t.canDrag && !t.canDrag(i)) ||
                                        (t.dragstart && t.dragstart(i),
                                        (e = !0));
                                }),
                            $(t.el)
                                .hammer()
                                .on("dragleft", function(o) {
                                    if (
                                        (null == i && (i = 1),
                                        (!t.canDragX || t.canDragX(o)) &&
                                            _g.dragcontrol._testDragEventAccess(
                                                o,
                                                i
                                            ))
                                    )
                                        return (
                                            console.log("dragleft"),
                                            (e = !0),
                                            $.zoom &&
                                                1 != $.zoom &&
                                                (o.gesture.deltaX =
                                                    o.gesture.deltaX / $.zoom),
                                            (n = o.gesture.deltaX),
                                            t.dragleft && t.dragleft(o),
                                            o.gesture.preventDefault(),
                                            !1
                                        );
                                }),
                            $(t.el)
                                .hammer()
                                .on("dragright", function(o) {
                                    if (
                                        (null == i && (i = 1),
                                        (!t.canDragX || t.canDragX(o)) &&
                                            _g.dragcontrol._testDragEventAccess(
                                                o,
                                                i
                                            ))
                                    )
                                        return (
                                            console.log("dragright"),
                                            (e = !0),
                                            $.zoom &&
                                                1 != $.zoom &&
                                                (o.gesture.deltaX =
                                                    o.gesture.deltaX / $.zoom),
                                            (n = o.gesture.deltaX),
                                            t.dragright && t.dragright(o),
                                            o.gesture.preventDefault(),
                                            !1
                                        );
                                }),
                            $(t.el)
                                .hammer()
                                .on("dragup", function(n) {
                                    if (
                                        (null == i && (i = 2),
                                        (!t.canDragY || t.canDragY(n)) &&
                                            _g.dragcontrol._testDragEventAccess(
                                                n,
                                                i
                                            ))
                                    )
                                        return (
                                            console.log("dragup"),
                                            (e = !0),
                                            $.zoom &&
                                                1 != $.zoom &&
                                                (n.gesture.deltaY =
                                                    n.gesture.deltaY / $.zoom),
                                            (o = n.gesture.deltaY),
                                            t.dragup && t.dragup(n),
                                            n.gesture.preventDefault(),
                                            !1
                                        );
                                }),
                            $(t.el)
                                .hammer()
                                .on("dragdown", function(n) {
                                    if (
                                        (null == i && (i = 2),
                                        (!t.canDragY || t.canDragY(n)) &&
                                            _g.dragcontrol._testDragEventAccess(
                                                n,
                                                i
                                            ))
                                    )
                                        return (
                                            console.log("dragdown"),
                                            (e = !0),
                                            $.zoom &&
                                                1 != $.zoom &&
                                                (n.gesture.deltaY =
                                                    n.gesture.deltaY / $.zoom),
                                            (o = n.gesture.deltaY),
                                            t.dragdown && t.dragdown(n),
                                            n.gesture.preventDefault(),
                                            !1
                                        );
                                }),
                            $(t.el)
                                .hammer()
                                .on("dragend", function(s) {
                                    if (
                                        (console.log("slide is dragended"),
                                        e || (i = null),
                                        (!t.canDrag || t.canDrag(s)) &&
                                            _g.dragcontrol._testDragEventAccess(
                                                s,
                                                i
                                            ))
                                    )
                                        return (
                                            ((1 == i && n) || (2 == i && o)) &&
                                                ($.zoom &&
                                                    1 != $.zoom &&
                                                    (2 == i &&
                                                        o &&
                                                        (s.gesture.deltaY =
                                                            s.gesture.deltaY /
                                                            $.zoom),
                                                    1 == i &&
                                                        n &&
                                                        (s.gesture.deltaX =
                                                            s.gesture.deltaX /
                                                            $.zoom)),
                                                t.dragend && t.dragend(s)),
                                            (e = !1),
                                            (i = null),
                                            (n = 0),
                                            (o = 0),
                                            s.gesture.preventDefault(),
                                            !1
                                        );
                                });
                    },
                    _testDragEventAccess: function(t, e) {
                        var i = !0;
                        return (
                            1 == e &&
                                (("dragup" != t.type && "dragdown" != t.type) ||
                                    (i = !1)),
                            2 == e &&
                                (("dragleft" != t.type &&
                                    "dragright" != t.type) ||
                                    (i = !1)),
                            "dragend" == t.type && (e || (i = !1)),
                            i
                        );
                    }
                };
                (n = [i(15), i(6)]),
                    (o = function() {
                        return (
                            (window._g.dragcontrol = s), window._g.dragcontrol
                        );
                    }.apply(e, n)),
                    !(void 0 !== o && (t.exports = o));
            })(window);
        },
        function(t, e, i) {
            var n, o;
            !(function() {
                var s = {
                    support: (function() {
                        return !!document.createElement("video").canPlayType;
                    })(),
                    medias: [],
                    collect: function(t, e) {
                        _g.html5media.support &&
                            (t || (t = document),
                            e || (e = "id"),
                            $(t)
                                .find("video,audio")
                                .each(function() {
                                    var t = {
                                        media: this,
                                        duration: 0,
                                        currentTime: 0,
                                        timer: 0,
                                        seekx: 0,
                                        seekPos: 0,
                                        buffered: 0,
                                        timerBuffer: 0,
                                        type:
                                            "VIDEO" == this.tagName
                                                ? "video"
                                                : "audio",
                                        autoplay: $(this).attr("autoplay"),
                                        id: $(this).attr(e)
                                    };
                                    _g.html5media.medias.push(t),
                                        this.addEventListener(
                                            "ended",
                                            function() {},
                                            !0
                                        ),
                                        this.addEventListener(
                                            "play",
                                            function() {},
                                            !0
                                        ),
                                        this.addEventListener(
                                            "timeupdate",
                                            function() {},
                                            !0
                                        ),
                                        this.addEventListener(
                                            "pause",
                                            function() {},
                                            !0
                                        );
                                }));
                    },
                    findById: function(t) {
                        return _g.html5media.support
                            ? _.find(_g.html5media.medias, function(e) {
                                  return e.id == t;
                              })
                            : null;
                    },
                    play: function(t) {
                        var e = _g.html5media.findById(t);
                        try {
                            e.media.play();
                        } catch (t) {}
                    },
                    pause: function(t) {
                        var e = _g.html5media.findById(t);
                        try {
                            e.media.pause();
                        } catch (t) {}
                    },
                    pauseAll: function() {
                        _.each(_g.html5media.medias, function(t) {
                            _g.html5media.pause(t.id);
                        });
                    },
                    stopAll: function() {
                        _.each(_g.html5media.medias, function(t) {
                            _g.html5media.stop(t.id);
                        });
                    },
                    stop: function(t) {
                        var e = _g.html5media.findById(t);
                        try {
                            e.media.pause(), (e.media.currentTime = 0);
                        } catch (t) {}
                    },
                    toggle: function(t) {
                        var e = _g.html5media.findById(t);
                        try {
                            e.media.paused ? e.media.play() : e.media.pause();
                        } catch (t) {}
                    }
                };
                (n = [i(15), i(2)]),
                    (o = function() {
                        return (window._g.html5media = s), window._g.html5media;
                    }.apply(e, n)),
                    !(void 0 !== o && (t.exports = o));
            })(window);
        },
        function(module, exports, __webpack_require__) {
            function _defineProperty(t, e, i) {
                return (
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = i),
                    t
                );
            }
            var __WEBPACK_AMD_DEFINE_ARRAY__,
                __WEBPACK_AMD_DEFINE_RESULT__,
                _typeof =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function(t) {
                              return typeof t;
                          }
                        : function(t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          };
            !(function() {
                var _g_mvc = {
                    createModel: function createModel(opts) {
                        var defaults = {
                            defaults: {},
                            autoIndex: !0,
                            autoUpdate: !0,
                            autoRemove: !0,
                            enableSync: !0,
                            createUrl: null,
                            updateUrl: null,
                            removeUrl: null,
                            fetchUrl: null,
                            staticFetchUrl: null,
                            staticRemoveUrl: null,
                            staticCreateUrl: null,
                            staticUpdateUrl: null,
                            fetchUrlName: null,
                            removeUrlName: null,
                            createUrlName: null,
                            updateUrlName: null,
                            restful: !1,
                            debug: !1,
                            bindChange: null,
                            bindRemove: null,
                            callback: null,
                            initView: null,
                            patchKeys: null,
                            initialize: function initialize() {
                                if (
                                    ((this.iViewlist = []),
                                    (this.iCollectionlist = []),
                                    this.get("id"))
                                )
                                    this.preset();
                                else if (
                                    (this.set("isNew", !0), this.autoIndex)
                                ) {
                                    var prefix =
                                        this.get("type") ||
                                        this.get("iType") ||
                                        "M";
                                    this.set("id", prefix + "_" + _g.uuid()),
                                        this.preset();
                                } else
                                    this.save(
                                        {},
                                        {
                                            wait: !0,
                                            success: function success(
                                                model,
                                                response
                                            ) {
                                                var returned = eval(response);
                                                ("Success" != returned.Status &&
                                                    200 != returned.code) ||
                                                    model.set(
                                                        "id",
                                                        returned.ID.toString()
                                                    ),
                                                    model.preset();
                                            }
                                        }
                                    );
                            },
                            addView: function(t, e) {
                                if (
                                    ("function" == typeof e &&
                                        (this[t] = new e({ model: this })),
                                    "object" ==
                                        ("undefined" == typeof e
                                            ? "undefined"
                                            : _typeof(e)))
                                ) {
                                    var i = _g.mvc.createView(e);
                                    this[t] = new i({ model: this });
                                }
                                this[t] && this.iViewlist.push(this[t]);
                            },
                            addCollection: function(t, e) {
                                if (
                                    ("function" == typeof e &&
                                        (this[t] = new e()),
                                    "object" ==
                                        ("undefined" == typeof view
                                            ? "undefined"
                                            : _typeof(view)))
                                ) {
                                    var i = _g.mvc.createCollection(e);
                                    this[t] = new i();
                                }
                                this[t] && this.iCollectionlist.push(this[t]);
                            },
                            preset: function() {
                                this.callback && this.callback(this);
                                var t = this;
                                this.autoUpdate &&
                                    this.on("change", function() {
                                        t.updateAllViews();
                                    }),
                                    this.autoRemove &&
                                        this.on("destroy", function(t, e, i) {
                                            t.removeAllViews(),
                                                t.bindRemove &&
                                                    t.bindRemove(t, i);
                                        }),
                                    this.bindChange && this.bindChange(),
                                    this.initView &&
                                        this.addView("iview", this.initView);
                            },
                            updateAllViews: function() {
                                _.each(this.iViewlist, function(t) {
                                    t.$el && t.update();
                                });
                            },
                            removeView: function(t) {
                                this[t] &&
                                    (this[t].$el.remove(),
                                    (this.iViewlist = _.reject(
                                        this.iViewlist,
                                        function(e) {
                                            return e == this[t];
                                        }
                                    )),
                                    (this[t] = null));
                            },
                            removeAllViews: function(t) {
                                _.each(this.iViewlist, function(e) {
                                    e.$el &&
                                        (t
                                            ? e.undelegateEvents()
                                            : e.$el.remove());
                                });
                            }
                        };
                        opts = opts
                            ? $.extend(!0, {}, defaults, opts)
                            : defaults;
                        var Model = Backbone.Model.extend(opts);
                        return Model;
                    },
                    createView: function(t) {
                        var e,
                            i = ((e = {
                                template: null,
                                className: null,
                                containment: null,
                                wrap: null,
                                wrapClassName: null,
                                autoRender: !0,
                                position: 1,
                                parseData: null,
                                callback: null,
                                bindChange: null,
                                parseTemplate: null,
                                templateKey: null,
                                templateName: null,
                                afterRender: null,
                                afterUpdate: null,
                                initialize: function() {
                                    _.bindAll(this),
                                        this.autoRender && this.render(),
                                        this.callback && this.callback(this);
                                },
                                createEl: function() {
                                    var t,
                                        e = this.model.toJSON();
                                    return (
                                        this.parseData &&
                                            (e = this.parseData()),
                                        (t = this.parseTemplate
                                            ? this.parseTemplate(this.template)
                                            : this.template),
                                        _g.renderT(
                                            t,
                                            e,
                                            this.templateKey,
                                            this.templateName
                                        )
                                    );
                                },
                                render: function(t, e) {
                                    if (!this.model || !this.template)
                                        return !1;
                                    if (!_g.domExist(this.$el)) {
                                        if (!t && !this.containment) return !1;
                                        t || (t = $(this.containment)),
                                            e || (e = this.position),
                                            this.wrap &&
                                                !$(this.containment).is(
                                                    this.wrap
                                                ) &&
                                                (0 ==
                                                    $(
                                                        this.containment
                                                    ).children(this.wrap)
                                                        .length &&
                                                    $(this.containment).append(
                                                        document.createElement(
                                                            this.wrap
                                                        )
                                                    ),
                                                (t = $(
                                                    this.containment
                                                ).children(this.wrap)),
                                                this.containment &&
                                                    this.wrapClassName &&
                                                    t.addClass(
                                                        this.wrapClassName
                                                    ));
                                        var i = this.createEl(),
                                            n = i;
                                        return (
                                            this.setElement(n),
                                            1 == e ? t.append(n) : t.prepend(n),
                                            this.className &&
                                                this.$el.addClass(
                                                    this.className
                                                ),
                                            this.afterRender &&
                                                this.afterRender(this),
                                            this
                                        );
                                    }
                                    var i = this.createEl(),
                                        n = i;
                                    this.$el.replaceWith(n),
                                        this.setElement(n),
                                        this.afterUpdate &&
                                            this.afterUpdate(this);
                                },
                                update: function() {
                                    this.render();
                                }
                            }),
                            _defineProperty(e, "afterUpdate", function() {
                                this.afterRender && this.afterRender(this);
                            }),
                            _defineProperty(e, "events", {}),
                            e);
                        t = t ? $.extend(!0, {}, i, t) : i;
                        var n = Backbone.View.extend(t);
                        return n;
                    },
                    createCollection: function(t) {
                        var e = {
                            enableSync: !1,
                            fetchUrl: null,
                            staticFetchUrl: null,
                            saveUrl: null,
                            staticSaveUrl: null,
                            debug: !1,
                            bindRemove: !1,
                            bindReset: !0,
                            bindAdd: null,
                            callback: null,
                            patchKeys: null,
                            name: null,
                            initialize: function() {
                                var t = this;
                                this.bindRemove &&
                                    this.on("remove", function(e) {
                                        "function" == typeof t.bindRemove
                                            ? t.bindRemove(e)
                                            : e.removeAllViews();
                                    }),
                                    this.bindReset &&
                                        this.on("reset", function(e, i) {
                                            "function" == typeof t.bindReset
                                                ? t.bindReset(e, i)
                                                : _.each(
                                                      i.previousModels,
                                                      function(t) {
                                                          t.removeAllViews();
                                                      }
                                                  ),
                                                t.afterReset &&
                                                    t.afterReset(e, i);
                                        }),
                                    this.bindAdd &&
                                        this.on("add", function(e) {
                                            t.bindAdd();
                                        }),
                                    this.callback && this.callback(this);
                            },
                            refreshView: function(t) {
                                var e = { containment: null, viewname: null };
                                (t = t ? $.extend({}, e, t) : e),
                                    this.length > 0 &&
                                        (_.each(this.at(0).iViewlist, function(
                                            e
                                        ) {
                                            (containment =
                                                t.containment || e.containment),
                                                containment &&
                                                    (e.wrap &&
                                                    !$(containment).is(e.wrap)
                                                        ? $(containment)
                                                              .children(e.wrap)
                                                              .empty()
                                                        : $(
                                                              containment
                                                          ).empty());
                                        }),
                                        this.each(function(e) {
                                            t.containment &&
                                                (e.iview.containment =
                                                    t.containment),
                                                t.viewname
                                                    ? e[viewname].update()
                                                    : e.iview.update();
                                        }));
                            },
                            removeAllViews: function(t) {
                                this.each(function(e) {
                                    e.removeAllViews(t);
                                });
                            }
                        };
                        t = t ? $.extend(!0, {}, e, t) : e;
                        var i = Backbone.Collection.extend(t);
                        return i;
                    }
                };
                (__WEBPACK_AMD_DEFINE_ARRAY__ = [
                    __webpack_require__(9),
                    __webpack_require__(4),
                    __webpack_require__(15)
                ]),
                    (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                        return (
                            (window._g.mvc = _g_mvc),
                            (_g_mvc = void 0),
                            window._g.mvc
                        );
                    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
                    !(
                        void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ &&
                        (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
                    );
            })(window);
        },
        function(t, e, n) {
            var o, s;
            !(function() {
                var r = function(t) {
                    this.init(t);
                };
                (r.prototype = {
                    isDraged: !1,
                    init: function(t) {
                        var e = {
                            containment: null,
                            containmentClass: "c-transition-containment",
                            perspectiveClass: "c-perspective",
                            itemClass: "c-transition-item",
                            currentClass: "c-transition-current",
                            leftClass: "c-transition-left",
                            rightClass: "c-transition-right",
                            upClass: "c-transition-up",
                            downClass: "c-transition-down",
                            activeClass: "c-transition-active",
                            topClass: "c-transition-top",
                            repeat: !1,
                            direction: 0,
                            type: 1,
                            duration: 1e3,
                            onStart: null,
                            onEnd: null,
                            control: !0,
                            autoplay: !1,
                            width: null,
                            height: null,
                            disableControlled: !1,
                            autoplayDirection: -1,
                            autoplayAxis: null
                        };
                        return (
                            (this.opts = t ? $.extend(!0, {}, e, t) : e),
                            !!this.opts.containment &&
                                ($(this.opts.containment).addClass(
                                    this.opts.containmentClass
                                ),
                                _.bindAll(this),
                                this.opts.control &&
                                    (this.control(),
                                    this.opts.disableControlled &&
                                        this.disableControl()),
                                this.opts.autostart
                                    ? ((this.timerDisabled = !1),
                                      this.timerstart({}))
                                    : (this.timerDisabled = !0),
                                this)
                        );
                    },
                    disableControlled: !1,
                    disableControl: function() {
                        this.disableControlled = !0;
                    },
                    enableControl: function() {
                        this.disableControlled = !1;
                    },
                    control: function() {
                        var t = this;
                        _g.dragcontrol.bind({
                            el: this.opts.containment,
                            dragstart: function(e) {
                                console.log(e),
                                    t.disableControlled || t.start(e);
                            },
                            dragleft: function(e) {
                                t.disableControlled ||
                                    (t.dragX(e),
                                    t.opts.onStart &&
                                        t.opts.onStart(
                                            t.currentItem.index(),
                                            t.activeItem.index()
                                        ));
                            },
                            dragright: function(e) {
                                t.disableControlled ||
                                    (t.dragX(e),
                                    t.opts.onStart &&
                                        t.opts.onStart(
                                            t.currentItem.index(),
                                            t.activeItem.index()
                                        ));
                            },
                            dragup: function(e) {
                                t.disableControlled ||
                                    (t.dragY(e),
                                    t.opts.onStart &&
                                        t.opts.onStart(
                                            t.currentItem.index(),
                                            t.activeItem.index()
                                        ));
                            },
                            dragdown: function(e) {
                                t.disableControled ||
                                    (t.dragY(e),
                                    t.opts.onStart &&
                                        t.opts.onStart(
                                            t.currentItem.index(),
                                            t.activeItem.index()
                                        ));
                            },
                            dragend: function(e) {
                                if (!t.disableControlled) {
                                    if (t.direction && !t.timerDisabled) {
                                        var i =
                                            "x" == t.direction
                                                ? e.gesture.deltaX
                                                : e.gesture.deltaY;
                                        t.TimerDirection = i > 0 ? 1 : -1;
                                    }
                                    t.dragEnd(e);
                                }
                            },
                            canDragX: function() {
                                return (
                                    !t.opts.autoplayAxis ||
                                    "x" == t.opts.autoplayAxis
                                );
                            },
                            canDragY: function() {
                                return (
                                    !t.opts.autoplayAxis ||
                                    "y" == t.opts.autoplayAxis
                                );
                            }
                        });
                    },
                    stashitemClass: function() {
                        $(this.opts.containment)
                            .find("." + this.opts.itemClass)
                            .css({
                                transform: "",
                                "-moz-transform": "",
                                "-webkit-transform": "",
                                "-o-transform": "",
                                "-ms-transform": "",
                                opacity: ""
                            }),
                            (this.stashClass = {
                                current: $(this.opts.containment)
                                    .find("." + this.opts.currentClass)
                                    .attr("style"),
                                left: $(this.opts.containment)
                                    .find("." + this.opts.leftClass)
                                    .attr("style"),
                                right: $(this.opts.containment)
                                    .find("." + this.opts.rightClass)
                                    .attr("style"),
                                up: $(this.opts.containment)
                                    .find("." + this.opts.upClass)
                                    .attr("style"),
                                down: $(this.opts.containment)
                                    .find("." + this.opts.downClass)
                                    .attr("style")
                            }),
                            (this.stashed = !0);
                    },
                    recoveritemClass: function() {
                        if (this.stashed)
                            try {
                                this.currentItem.attr(
                                    "style",
                                    this.stashClass.current || ""
                                ),
                                    this.activeItem.hasClass(
                                        this.opts.leftClass
                                    )
                                        ? this.activeItem.attr(
                                              "style",
                                              this.stashClass.left || ""
                                          )
                                        : this.activeItem.hasClass(
                                              this.opts.rightClass
                                          )
                                            ? this.activeItem.attr(
                                                  "style",
                                                  this.stashClass.right || ""
                                              )
                                            : this.activeItem.hasClass(
                                                  this.opts.upClass
                                              )
                                                ? this.activeItem.attr(
                                                      "style",
                                                      this.stashClass.up || ""
                                                  )
                                                : this.activeItem.hasClass(
                                                      this.opts.downClass
                                                  ) &&
                                                  this.activeItem.attr(
                                                      "style",
                                                      this.stashClass.down || ""
                                                  );
                            } catch (t) {
                                console.log(t);
                            }
                        $(this.opts.containment)
                            .find("." + this.opts.itemClass)
                            .css({
                                transform: "",
                                "-moz-transform": "",
                                "-webkit-transform": "",
                                "-o-transform": "",
                                "-ms-transform": "",
                                opacity: ""
                            }),
                            (this.stashed = !1);
                    },
                    start: function(t, e) {
                        this.isTransiting ||
                            (e || (e = this.opts.type),
                            (this.args = _g.transitionargs[e]),
                            this.args.perspective
                                ? $(this.opts.containment).addClass(
                                      this.opts.perspectiveClass
                                  )
                                : $(this.opts.containment).removeClass(
                                      this.opts.perspectiveClass
                                  ),
                            (this.currentItem = $(this.opts.containment).find(
                                "." + this.opts.currentClass
                            )),
                            this.currentItem.addClass(this.opts.topClass),
                            this.stashitemClass());
                    },
                    dragX: function(t) {
                        if (
                            !this.isTransiting &&
                            (t.gesture.deltaX <= 0
                                ? ((this.plus = -1),
                                  (this.activeItem = $(
                                      this.opts.containment
                                  ).find("." + this.opts.rightClass)))
                                : ((this.plus = 1),
                                  (this.activeItem = $(
                                      this.opts.containment
                                  ).find("." + this.opts.leftClass))),
                            this.activeItem.length)
                        ) {
                            var e = t.gesture.deltaX;
                            (this.direction = "x"), this.dragHandle(e);
                        }
                    },
                    dragY: function(t) {
                        if (
                            !this.isTransiting &&
                            (t.gesture.deltaY <= 0
                                ? ((this.plus = -1),
                                  (this.activeItem = $(
                                      this.opts.containment
                                  ).find("." + this.opts.downClass)))
                                : ((this.plus = 1),
                                  (this.activeItem = $(
                                      this.opts.containment
                                  ).find("." + this.opts.upClass))),
                            this.activeItem.length)
                        ) {
                            var e = t.gesture.deltaY;
                            (this.direction = "y"), this.dragHandle(e);
                        }
                    },
                    dragHandle: function(t) {
                        (isDraged = !0),
                            $(this.opts.containment)
                                .find("." + this.opts.itemClass)
                                .removeClass(this.opts.activeClass),
                            this.activeItem.addClass(this.opts.activeClass),
                            (this.currentItem = $(this.opts.containment).find(
                                "." + this.opts.currentClass
                            ));
                        var e = Math.abs(t) / $(this.opts.containment).width();
                        if (_g.browserSupport({ msie: 9 }))
                            if (this.args.percentcontrol) {
                                for (
                                    i = 0;
                                    i < this.args.percentcontrol.length;
                                    i++
                                )
                                    if (e <= this.args.percentcontrol[i]) {
                                        if (
                                            this.args[
                                                this.args.percentcontrol[i]
                                            ][this.direction].css
                                        ) {
                                            var n = this.args[
                                                this.args.percentcontrol[i]
                                            ][this.direction].css;
                                            n.currentItem &&
                                                this.currentItem.css(
                                                    this.getArgs(
                                                        n.currentItem,
                                                        this.plus,
                                                        e
                                                    )
                                                ),
                                                n.activeItem &&
                                                    this.activeItem.css(
                                                        this.getArgs(
                                                            n.activeItem,
                                                            this.plus,
                                                            e
                                                        )
                                                    );
                                        }
                                        this.activeItem.css(
                                            this.getArgs(
                                                this.args[
                                                    this.args.percentcontrol[i]
                                                ][this.direction].activeItem,
                                                this.plus,
                                                e
                                            )
                                        ),
                                            this.currentItem.css(
                                                this.getArgs(
                                                    this.args[
                                                        this.args
                                                            .percentcontrol[i]
                                                    ][this.direction]
                                                        .currentItem,
                                                    this.plus,
                                                    e
                                                )
                                            );
                                        break;
                                    }
                            } else {
                                if (this.args[this.direction].css) {
                                    var n = this.args[this.direction].css;
                                    n.currentItem &&
                                        this.currentItem.css(
                                            this.getArgs(
                                                n.currentItem,
                                                this.plus,
                                                e
                                            )
                                        ),
                                        n.activeItem &&
                                            this.activeItem.css(
                                                this.getArgs(
                                                    n.activeItem,
                                                    this.plus,
                                                    e
                                                )
                                            );
                                }
                                this.activeItem.css(
                                    this.getArgs(
                                        this.args[this.direction].activeItem,
                                        this.plus,
                                        e
                                    )
                                ),
                                    this.currentItem.css(
                                        this.getArgs(
                                            this.args[this.direction]
                                                .currentItem,
                                            this.plus,
                                            e
                                        )
                                    );
                            }
                        else
                            this.currentItem.css(
                                "x" == this.direction
                                    ? "margin-left"
                                    : "margin-top",
                                this.plus * e * 100 + "%"
                            ),
                                this.activeItem.css(
                                    "x" == this.direction
                                        ? "margin-left"
                                        : "margin-top",
                                    -this.plus * (1 - e) * 100 + "%"
                                );
                        this.args.currentTop
                            ? this.currentItem.addClass(this.opts.topClass)
                            : this.currentItem.removeClass(this.opts.topClass),
                            this.args.activeTop &&
                                this.activeItem.addClass(this.opts.topClass),
                            this.opts.onTransition &&
                                this.opts.onTransition(event, e);
                    },
                    dragEnd: function(t) {
                        if (
                            !this.isTransiting &&
                            this.currentItem.length &&
                            this.activeItem.length
                        ) {
                            var e = this;
                            this.isTransiting = !0;
                            var n =
                                    "x" == this.direction
                                        ? t.gesture.deltaX
                                        : t.gesture.deltaY,
                                o =
                                    Math.abs(n) /
                                    $(this.opts.containment).width();
                            if (_g.browserSupport({ msie: 9 }))
                                if (this.args.percentcontrol) {
                                    for (
                                        this.percent = o, i = 0;
                                        i < this.args.percentcontrol.length;
                                        i++
                                    )
                                        if (o <= this.args.percentcontrol[i]) {
                                            this.transitPercent(i);
                                            break;
                                        }
                                } else {
                                    var s = 1200;
                                    "undefined" != typeof coolsite && (s = 1);
                                    var r = this.getArgs(
                                        this.args[this.direction].currentItem,
                                        this.plus,
                                        1
                                    );
                                    (r.duration = s),
                                        (r.easing = this.args.currentEasing);
                                    var a = this.getArgs(
                                        this.args[this.direction].activeItem,
                                        this.plus,
                                        1
                                    );
                                    (a.duration = s),
                                        (a.easing = this.args.activeEasing),
                                        (a.complete = function() {
                                            (e.isTransiting = !1),
                                                e.onTransitionEnd();
                                        }),
                                        this.currentItem.transit(r),
                                        this.activeItem.transit(a);
                                }
                            else
                                this.activeItem.css(
                                    "x" == this.direction
                                        ? "margin-left"
                                        : "margin-top",
                                    "0%"
                                ),
                                    this.currentItem.css(
                                        "x" == this.direction
                                            ? "margin-left"
                                            : "margin-top",
                                        100 * -this.plus + "%"
                                    );
                            console.log("dragend");
                        }
                    },
                    onTransitionEnd: function() {
                        var t = this;
                        this.recoveritemClass(),
                            this.currentItem.removeClass(
                                this.opts.currentClass
                            ),
                            this.activeItem
                                .addClass(this.opts.currentClass)
                                .removeClass(this.opts.activeClass)
                                .removeClass(this.opts.upClass)
                                .removeClass(this.opts.rightClass)
                                .removeClass(this.opts.leftClass)
                                .removeClass(this.opts.downClass),
                            $(this.opts.containment)
                                .find("." + this.opts.itemClass)
                                .removeClass(this.opts.topClass);
                        var e = this.currentItem.index(),
                            i = this.activeItem.index();
                        $(this.opts.containment).removeClass(
                            this.opts.perspectiveClass
                        ),
                            t.opts.onEnd && t.opts.onEnd(e, i),
                            this.timerStart();
                    },
                    transitPercent: function(t) {
                        var e = this;
                        if (t < this.args.percentcontrol.length) {
                            var e = this,
                                i =
                                    this.opts.duration *
                                    (this.args.percentcontrol[t] -
                                        this.percent),
                                n = this.getArgs(
                                    this.args[this.args.percentcontrol[t]][
                                        this.direction
                                    ].currentItem,
                                    this.plus,
                                    this.args.percentcontrol[t]
                                );
                            (n.duration = i),
                                (n.easing = this.args.currentEasing);
                            var o = this.getArgs(
                                this.args[this.args.percentcontrol[t]][
                                    this.direction
                                ].activeItem,
                                this.plus,
                                this.args.percentcontrol[t]
                            );
                            (o.duration = i),
                                (o.easing = this.args.activeEasing),
                                (o.complete = function() {
                                    e.transitPercent(t + 1);
                                }),
                                (this.percent = this.args.percentcontrol[t]),
                                this.currentItem.transit(n),
                                this.activeItem.transit(o);
                        } else (e.isTransiting = !1), this.onTransitionEnd();
                    },
                    getArgs: function(t, e, i) {
                        var n = {};
                        return (
                            _.each(t, function(t, o) {
                                "function" == typeof t
                                    ? (n[o] = t(e, i))
                                    : (n[o] = t);
                            }),
                            n
                        );
                    },
                    autostart: function(t, e, i) {
                        if (
                            !this.isTransiting &&
                            ((this.args = _g.transitionargs[t]),
                            (this.currentItem = $(this.opts.containment).find(
                                "." + this.opts.currentClass
                            )),
                            this.stashitemClass(),
                            "x" == e &&
                                (i < 0
                                    ? (this.activeItem = $(
                                          this.opts.containment
                                      ).find("." + this.opts.rightClass))
                                    : (this.activeItem = $(
                                          this.opts.containment
                                      ).find("." + this.opts.leftClass))),
                            "y" == e &&
                                (i < 0
                                    ? (this.activeItem = $(
                                          this.opts.containment
                                      ).find("." + this.opts.downClass))
                                    : (this.activeItem = $(
                                          this.opts.containment
                                      ).find("." + this.opts.upClass))),
                            this.activeItem.length)
                        ) {
                            this.args.currentTop &&
                                this.currentItem.addClass(this.opts.topClass),
                                (this.plus = i),
                                (this.direction = e),
                                this.args.perspective
                                    ? $(this.opts.containment).addClass(
                                          this.opts.perspectiveClass
                                      )
                                    : $(this.opts.containment).removeClass(
                                          this.opts.perspectiveClass
                                      );
                            var n = { gesture: {} };
                            "x" == e
                                ? (n.gesture.deltaX = 0)
                                : (n.gesture.deltaY = 0),
                                this.opts.onStart &&
                                    this.opts.onStart(
                                        this.currentItem.index(),
                                        this.activeItem.index()
                                    ),
                                this.dragHandle(0),
                                this.dragEnd(n);
                        }
                    },
                    enableTimer: function() {
                        this.timerDisabled = !1;
                    },
                    disableTimer: function() {
                        this.timerDisabled = !0;
                    },
                    setCurrent: function(t, e) {
                        var i,
                            n = this;
                        $(this.opts.containment)
                            .children("." + this.opts.itemClass)
                            .removeClass(this.opts.topClass)
                            .removeClass(this.opts.activeClass)
                            .removeClass(this.opts.upClass)
                            .removeClass(this.opts.rightClass)
                            .removeClass(this.opts.leftClass)
                            .removeClass(this.opts.downClass);
                        var o = $(this.opts.containment).children().length;
                        if (t >= o) {
                            if (!this.opts.repeat) return void this.timerStop();
                            (this.current = 0), (t = 0);
                        } else if (t < 0) {
                            if (!this.opts.repeat) return void this.timerStop();
                            (this.current = o - 1), (t = o - 1);
                        }
                        if (
                            ($(this.opts.containment)
                                .children()
                                .each(function() {
                                    $(this).index() == t
                                        ? ((i = $(this)),
                                          $(this).addClass(n.opts.currentClass))
                                        : $(this).removeClass(
                                              n.opts.currentClass
                                          );
                                }),
                            e && i)
                        ) {
                            if ("x" == e)
                                var s = this.opts.leftClass,
                                    r = this.opts.rightClass;
                            else
                                var s = this.opts.upClass,
                                    r = this.opts.downClass;
                            i.prev().length
                                ? i.prev().addClass(s)
                                : this.opts.repeat &&
                                  $(this.opts.containment)
                                      .children()
                                      .last()
                                      .addClass(s),
                                i.next().length
                                    ? i.next().addClass(r)
                                    : this.opts.repeat &&
                                      $(this.opts.containment)
                                          .children()
                                          .first()
                                          .addClass(r);
                        }
                    },
                    timerStart: function(t) {
                        if (!this.timerDisabled) {
                            var e = this;
                            if (t)
                                t.type || (t.type = e.opts.type),
                                    t.axis || (t.axis = "x"),
                                    t.diretion || (t.direction = -1),
                                    t.startAt || (t.startAt = 0),
                                    this.setCurrent(t.startAt, t.axis),
                                    (this.current = t.startAt),
                                    (this.TimerArgs = t);
                            else {
                                if (!this.TimerArgs) return;
                                (t = this.TimerArgs),
                                    (this.TimerDirection =
                                        this.TimerDirection ||
                                        e.opts.autoplayDirection),
                                    (this.current =
                                        null != this.tempCurrent
                                            ? this.tempCurrent
                                            : this.TimerDirection == -1
                                                ? this.current + 1
                                                : this.current - 1),
                                    (this.tempCurrent = null),
                                    (this.TimerDirection = null),
                                    this.setCurrent(this.current, t.axis);
                            }
                            this.Timer && window.clearTimeout(this.Timer),
                                (this.Timer = window.setTimeout(function() {
                                    e.autostart(t.type, t.axis, t.direction);
                                }, this.opts.interval));
                        }
                    },
                    timerStop: function(t) {
                        this.Timer &&
                            (window.clearTimeout(this.Timer),
                            (this.Timer = null)),
                            (this.TimerArgs = null),
                            this.disableTimer();
                    }
                }),
                    (o = [n(15), n(10), n(22)]),
                    (s = function() {
                        return (window._g.transition = r), window._g.transition;
                    }.apply(e, o)),
                    !(void 0 !== s && (t.exports = s));
            })(window);
        },
        function(t, e, i) {
            var n, o;
            !(function() {
                var s = {
                    0: {
                        x: {
                            activeItem: {
                                x: function(t, e) {
                                    return -t * (1 - e) * 100 + "%";
                                }
                            },
                            currentItem: {
                                x: function(t, e) {
                                    return t * e * 100 + "%";
                                }
                            }
                        },
                        y: {
                            activeItem: {
                                y: function(t, e) {
                                    return -t * (1 - e) * 100 + "%";
                                }
                            },
                            currentItem: {
                                y: function(t, e) {
                                    return t * e * 100 + "%";
                                }
                            }
                        },
                        perspective: !1,
                        currentEasing: "snap",
                        activeEasing: "snap"
                    },
                    1: {
                        x: {
                            activeItem: {
                                x: function(t, e) {
                                    return -t * (1 - e) * 100 + "%";
                                }
                            },
                            currentItem: { x: 0 }
                        },
                        y: {
                            activeItem: {
                                y: function(t, e) {
                                    return -t * (1 - e) * 100 + "%";
                                }
                            },
                            currentItem: { y: 0 }
                        },
                        activeTop: !0,
                        perspective: !1,
                        currentEasing: "snap",
                        activeEasing: "snap"
                    },
                    2: {
                        x: {
                            activeItem: {},
                            currentItem: {
                                opacity: function(t, e) {
                                    return 1 - e;
                                }
                            }
                        },
                        y: {
                            activeItem: {},
                            currentItem: {
                                opacity: function(t, e) {
                                    return 1 - e;
                                }
                            }
                        },
                        currentTop: !0,
                        perspective: !1,
                        currentEasing: "snap",
                        activeEasing: "snap"
                    },
                    3: {
                        perspective: !0,
                        currentEasing: "out",
                        activeEasing: "in",
                        currentTop: !0,
                        percentcontrol: [0.5, 1],
                        0.5: {
                            x: {
                                activeItem: {
                                    rotateY: function(t, e) {
                                        return 90 * -t + "deg";
                                    },
                                    opacity: 0.2
                                },
                                currentItem: {
                                    rotateY: function(t, e) {
                                        return 90 * t * e * 2 + "deg";
                                    },
                                    opacity: function(t, e) {
                                        return 0.2 + 0.8 * (1 - 2 * e);
                                    }
                                }
                            },
                            y: {
                                activeItem: {
                                    rotateX: function(t, e) {
                                        return 90 * t + "deg";
                                    },
                                    opacity: 0.2
                                },
                                currentItem: {
                                    rotateX: function(t, e) {
                                        return 90 * -t * e * 2 + "deg";
                                    },
                                    opacity: function(t, e) {
                                        return 0.2 + 0.8 * (1 - 2 * e);
                                    }
                                }
                            }
                        },
                        1: {
                            x: {
                                activeItem: {
                                    rotateY: function(t, e) {
                                        return (
                                            90 * -t * (1 - 2 * (e - 0.5)) +
                                            "deg"
                                        );
                                    },
                                    opacity: function(t, e) {
                                        return 0.2 + 0.8 * (e - 0.5) * 2;
                                    }
                                },
                                currentItem: {
                                    rotateY: function(t, e) {
                                        return 90 * t + "deg";
                                    },
                                    opacity: 0.2
                                }
                            },
                            y: {
                                activeItem: {
                                    rotateX: function(t, e) {
                                        return (
                                            90 * t * (1 - 2 * (e - 0.5)) + "deg"
                                        );
                                    },
                                    opacity: function(t, e) {
                                        return 0.2 + 0.8 * (e - 0.5) * 2;
                                    }
                                },
                                currentItem: {
                                    rotateX: function(t, e) {
                                        return 90 * -t + "deg";
                                    },
                                    opacity: 0.2
                                }
                            }
                        }
                    },
                    4: {
                        x: {
                            css: {
                                currentItem: {
                                    transformOrigin: function(t, e) {
                                        return t < 0 ? "100% 50%" : "0% 50%";
                                    }
                                },
                                activeItem: {
                                    transformOrigin: function(t, e) {
                                        return t > 0 ? "100% 50%" : "0% 50%";
                                    }
                                }
                            },
                            activeItem: {
                                x: function(t, e) {
                                    return -t * (1 - e) * 100 + "%";
                                },
                                opacity: function(t, e) {
                                    return e;
                                },
                                rotateY: function(t, e) {
                                    return -t * (1 - e) * 90 + "deg";
                                }
                            },
                            currentItem: {
                                x: function(t, e) {
                                    return t * e * 100 + "%";
                                },
                                rotateY: function(t, e) {
                                    return t * e * 90 + "deg";
                                },
                                opacity: function(t, e) {
                                    return 1 - e;
                                }
                            }
                        },
                        y: {
                            css: {
                                currentItem: {
                                    transformOrigin: function(t, e) {
                                        return t < 0 ? "50% 100%" : "50% 0%";
                                    }
                                },
                                activeItem: {
                                    transformOrigin: function(t, e) {
                                        return t > 0 ? "50% 100%" : "50% 0%";
                                    }
                                }
                            },
                            activeItem: {
                                y: function(t, e) {
                                    return -t * (1 - e) * 100 + "%";
                                },
                                opacity: function(t, e) {
                                    return e;
                                },
                                rotateX: function(t, e) {
                                    return t * (1 - e) * 90 + "deg";
                                }
                            },
                            currentItem: {
                                y: function(t, e) {
                                    return t * e * 100 + "%";
                                },
                                rotateX: function(t, e) {
                                    return -t * e * 90 + "deg";
                                },
                                opacity: function(t, e) {
                                    return 1 - e;
                                }
                            }
                        },
                        currentTop: !0,
                        perspective: !0,
                        currentEasing: "easeOutCubic",
                        activeEasing: "easeOutCubic"
                    },
                    5: {
                        x: {
                            css: {
                                currentItem: {
                                    transformOrigin: function(t, e) {
                                        return t > 0 ? "100% 50%" : "0% 50%";
                                    }
                                }
                            },
                            activeItem: {
                                x: function(t, e) {
                                    return -t * (1 - e) * 100 + "%";
                                }
                            },
                            currentItem: {
                                x: 0,
                                scale: function(t, e) {
                                    return 0.5 + 0.5 * (1 - e);
                                }
                            }
                        },
                        y: {
                            css: {
                                currentItem: {
                                    transformOrigin: function(t, e) {
                                        return t > 0 ? "50% 100%" : "50% 0%";
                                    }
                                }
                            },
                            activeItem: {
                                y: function(t, e) {
                                    return -t * (1 - e) * 100 + "%";
                                }
                            },
                            currentItem: {
                                y: 0,
                                scale: function(t, e) {
                                    return 0.5 + 0.5 * (1 - e);
                                }
                            }
                        },
                        activeTop: !0,
                        perspective: !1,
                        currentEasing: "epubOut",
                        activeEasing: "epubOut"
                    }
                };
                (n = [i(15)]),
                    (o = function() {
                        return (
                            (window._g.transitionargs = s),
                            window._g.transitionargs
                        );
                    }.apply(e, n)),
                    !(void 0 !== o && (t.exports = o));
            })(window);
        },
        function(t, e, i) {
            var n, o;
            !(function() {
                var i = {
                    init: function() {
                        var t = {
                            model: function(t, e) {
                                return new coolsite_play.model.action.action(
                                    t,
                                    e
                                );
                            }
                        };
                        coolsite_play.collection.action = _g.mvc.createCollection(
                            t
                        );
                        var e = {
                            model: function(t, e) {
                                return new coolsite_play.model.animation.animation(
                                    t,
                                    e
                                );
                            }
                        };
                        coolsite_play.collection.animation = _g.mvc.createCollection(
                            e
                        );
                        var i = { enableSync: !1 };
                        (coolsite_play.collection.element = _g.mvc.createCollection(
                            i
                        )),
                            (coolsite_play.collection.slider = coolsite_play.collection.element.extend(
                                {
                                    model: function(t, e) {
                                        return new coolsite_play.model.element.slider(
                                            t,
                                            e
                                        );
                                    },
                                    generate: function() {
                                        var t = this;
                                        this.reset([], { silent: !0 }),
                                            $(document)
                                                .find(".c-slider:not(.cf-ref)")
                                                .each(function() {
                                                    var e = t.getArgs(this);
                                                    t.add({ args: e }),
                                                        t
                                                            .last()
                                                            .iview.setElement(
                                                                this
                                                            ),
                                                        t
                                                            .last()
                                                            .iview.afterRender();
                                                });
                                    },
                                    getArgs: function(t) {
                                        var e = $(t).attr("data-c_slider_args"),
                                            e = e.split(";"),
                                            i = {};
                                        return (
                                            _.each(e, function(t) {
                                                var e = t.split(":");
                                                i[e[0]] = e[1];
                                            }),
                                            i
                                        );
                                    },
                                    stop: function() {
                                        this.each(function(t) {
                                            t.stop();
                                        });
                                    }
                                }
                            ));
                        var n = {
                            model: function(t, e) {
                                return new coolsite_play.model.timeline.timeline(
                                    t,
                                    e
                                );
                            }
                        };
                        (coolsite_play.collection.timeline = _g.mvc.createCollection(
                            n
                        )),
                            _cs.mvc.init_controllers(),
                            _cs.mvc.init_views(),
                            _cs.mvc.init_models(),
                            (coolsite_play.animationlist = new coolsite_play.collection.animation()),
                            (coolsite_play.timelinelist = new coolsite_play.collection.timeline()),
                            (coolsite_play.sliderlist = new coolsite_play.collection.slider()),
                            (coolsite_play.actionlist = new coolsite_play.collection.action());
                    },
                    init_models: function() {
                        var t = {
                            enableSync: !1,
                            autoIndex: !0,
                            element: null,
                            bindRemove: function(t, e) {},
                            callback: function() {
                                (this.type = this.get("data").type),
                                    (this.exec = this.get("data").exec);
                            },
                            initView: coolsite_play.view.action.action,
                            getArgs: function() {
                                var t = this.get("data").args;
                                return $.extend(!0, {}, t);
                            },
                            getType: function() {
                                var t = this.get("data").type;
                                return t;
                            }
                        };
                        coolsite_play.model.action.action = _g.mvc.createModel(
                            t
                        );
                        var e = {
                            enableSync: !1,
                            autoIndex: !0,
                            element: null,
                            bindRemove: function(t, e) {},
                            callback: function() {},
                            initView: coolsite_play.view.animation.animation
                        };
                        coolsite_play.model.animation.animation = _g.mvc.createModel(
                            e
                        );
                        var i = {
                            enableSync: !1,
                            autoIndex: !0,
                            initView: coolsite_play.view.element.element,
                            callback: function() {}
                        };
                        (coolsite_play.model.element.element = _g.mvc.createModel(
                            i
                        )),
                            (coolsite_play.model.element.slider = coolsite_play.model.element.element.extend(
                                {
                                    initView: coolsite_play.view.element.slider,
                                    start: function() {
                                        var t = this,
                                            e = this.get("args");
                                        if (
                                            ((this.transition = transition = this.getTransition()),
                                            !this.silderStart)
                                        ) {
                                            if (
                                                ((this.sliderStart = !0),
                                                this.iview.$el
                                                    .children(".c-leftarrow")
                                                    .on("click", function() {
                                                        t.switchSlide("prev");
                                                    }),
                                                this.iview.$el
                                                    .children(".c-rightarrow")
                                                    .on("click", function() {
                                                        t.switchSlide("next");
                                                    }),
                                                coolsite_play.isPreview ||
                                                    _.each(
                                                        this.iview
                                                            .slidernavdots,
                                                        function(e, i) {
                                                            $(e).on(
                                                                "click",
                                                                function() {
                                                                    t.switchSlide(
                                                                        i
                                                                    );
                                                                }
                                                            );
                                                        }
                                                    ),
                                                this.iview.$el
                                                    .children(".c-slider-mask")
                                                    .data("sliderId", this.id),
                                                !Number(e.ap))
                                            )
                                                return;
                                            transition.enableTimer(),
                                                transition.timerStart({});
                                        }
                                    },
                                    stop: function() {
                                        this.sliderStart &&
                                            (this.transition.timerStop(),
                                            this.iview.$el
                                                .children(".c-leftarrow")
                                                .off("click"),
                                            this.iview.$el
                                                .children(".c-rightarrow")
                                                .off("click"),
                                            coolsite_play.isPreview ||
                                                this.iview.slidernavdots.off(
                                                    "click"
                                                ),
                                            (this.sliderStart = !1));
                                    },
                                    switchSlide: function(t) {
                                        if (
                                            !this.transition ||
                                            !this.transition.isTransiting
                                        ) {
                                            var e = this.get("args");
                                            if (
                                                ("prev" == t &&
                                                    ((this.transition.TimerDirection = 1),
                                                    this.transition.autostart(
                                                        e.type,
                                                        "x",
                                                        1
                                                    )),
                                                "next" == t &&
                                                    this.transition.autostart(
                                                        e.type,
                                                        "x",
                                                        -1
                                                    ),
                                                _.isNumber(t))
                                            ) {
                                                if (
                                                    t ==
                                                    this.transition.currentIndex
                                                )
                                                    return null;
                                                t > this.transition.currentIndex
                                                    ? (direction = -1)
                                                    : (direction = 1),
                                                    (this.transition.currentIndex = t),
                                                    this.transition.prepareNextClass(
                                                        this.iview.slidermask,
                                                        t,
                                                        direction
                                                    ),
                                                    (this.transition.TimerDirection = direction),
                                                    this.transition.Timer &&
                                                        window.clearTimeout(
                                                            this.transition
                                                                .Timer
                                                        ),
                                                    (this.transition.tempCurrent = t),
                                                    this.transition.autostart(
                                                        e.type,
                                                        "x",
                                                        direction
                                                    ),
                                                    (this.transition.TimerDirection = -1);
                                            }
                                        }
                                    },
                                    onChangeTo: function(t, e) {
                                        (coolsite_play.isPreview ||
                                            coolsite_play.isPlay) &&
                                            (_.isNumber(t) &&
                                                this.iview.slides
                                                    .eq(t)
                                                    .trigger("recover"),
                                            this.iview.slides
                                                .eq(e)
                                                .trigger("changeTo"));
                                    },
                                    getTransition: function() {
                                        if (this.transition)
                                            return this.transition;
                                        var t = this.iview.$el.attr(
                                                "data-c_sliderid"
                                            ),
                                            e = coolsite_editor.elementlist.get(
                                                t
                                            );
                                        return e ? e.transition : null;
                                    }
                                }
                            ));
                        var n = {
                            enableSync: !1,
                            autoIndex: !0,
                            element: null,
                            bindRemove: function(t, e) {},
                            callback: function() {},
                            initView: coolsite_play.view.timeline.timeline,
                            play: function() {
                                var t = this.getArgs();
                                (t && 2 == t.st && this.played) ||
                                    ((this.played = !0),
                                    this.animations ||
                                        ((this.animations = this.get(
                                            "animations"
                                        )),
                                        this.animations &&
                                            this.animations.length &&
                                            ((this.animations = _.map(
                                                this.animations,
                                                function(t) {
                                                    var e = coolsite_play.animationlist.get(
                                                        t
                                                    );
                                                    return e ? e : null;
                                                }
                                            )),
                                            (this.animations = _.reject(
                                                this.animations,
                                                function(t) {
                                                    return !t;
                                                }
                                            )),
                                            (this.animations = _.reject(
                                                this.animations,
                                                function(t) {
                                                    return t.toJSON().data.t.wa;
                                                }
                                            )))),
                                    console.log({
                                        animations: this.animations
                                    }),
                                    this.timeline ||
                                        (this.timeline = coolsite_play.util.timeline.createTimeline(
                                            {
                                                animations: this.animations,
                                                args: t,
                                                model: this
                                            }
                                        )),
                                    this.timeline.play(0));
                            },
                            stop: function() {
                                this.timeline && this.timeline.kill();
                            },
                            recoverStyle: function() {
                                var t = this.getArgs();
                                (t && 2 == t.st && this.played) ||
                                    (this.animations &&
                                        _.each(this.animations, function(t) {
                                            t.iview.recoverStyle();
                                        }));
                            },
                            getArgs: function() {
                                var t = this.get("data");
                                return t.t;
                            }
                        };
                        coolsite_play.model.timeline.timeline = _g.mvc.createModel(
                            n
                        );
                    },
                    init_views: function() {
                        (coolsite_play.view.action.action = {
                            autoRender: !1,
                            events: coolsite_play.controller.action.action,
                            execute: function(t) {
                                var e = this.model.getArgs();
                                if (e && 2 == e.st && this.model.triggered)
                                    return !1;
                                this.model.triggered = !0;
                                var i = this.model.get("data").exec;
                                switch (i) {
                                    case 0:
                                        this.renderAnimations();
                                        break;
                                    case 1:
                                        this.renderShow();
                                        break;
                                    case 2:
                                        this.renderHide();
                                        break;
                                    case 5:
                                        this.renderUrl();
                                        break;
                                    case 6:
                                        this.renderSwitch();
                                        break;
                                    case 10:
                                        this.renderUrl();
                                        break;
                                    case 16:
                                        this.renderPhone();
                                        break;
                                    case 30:
                                        this.renderHash();
                                        break;
                                    case 20:
                                        this.renderToggle();
                                        break;
                                    case 21:
                                        this.renderClass("add");
                                        break;
                                    case 22:
                                        this.renderClass("remove");
                                        break;
                                    case 23:
                                        this.renderClass("toggle");
                                        break;
                                    case 26:
                                        this.renderState();
                                        break;
                                    case 27:
                                        this.renderDialog("open", t);
                                        break;
                                    case 28:
                                        this.renderDialog("close", t);
                                        break;
                                    case 29:
                                        this.renderDialog("toggle", t);
                                        break;
                                    case 32:
                                        this.renderHtml("load");
                                        break;
                                    case 33:
                                        this.renderHtml("unload");
                                        break;
                                    case 52:
                                        this.renderMedia("play");
                                        break;
                                    case 53:
                                        this.renderMedia("pause");
                                        break;
                                    case 54:
                                        this.renderMedia("stop");
                                        break;
                                    case 55:
                                        this.renderMedia("toggle");
                                }
                                coolsite_play.util.PluginManage.actionexcutes[
                                    i
                                ] &&
                                    coolsite_play.util.PluginManage.actionexcutes[
                                        i
                                    ].config.exec(this);
                            },
                            renderAnimations: function() {
                                var t = this.model.getArgs();
                                this.animations ||
                                    ((this.animations = t.a_ids),
                                    this.animations &&
                                        this.animations.length &&
                                        ((this.animations = _.map(
                                            this.animations,
                                            function(t) {
                                                var e = coolsite_play.animationlist.get(
                                                    t
                                                );
                                                return e ? e : null;
                                            }
                                        )),
                                        (this.animations = _.reject(
                                            this.animations,
                                            function(t) {
                                                return !t;
                                            }
                                        )))),
                                    this.timeline ||
                                        (this.timeline = coolsite_play.util.timeline.createTimeline(
                                            {
                                                animations: this.animations,
                                                args: t
                                            }
                                        )),
                                    this.timeline.play(0);
                            },
                            getEl: function(t) {
                                var e = $("[data-c_e_id=" + t + "]");
                                return (e =
                                    e.length > 1 &&
                                    void 0 != this.model.siblingIndex &&
                                    e[this.model.siblingIndex]
                                        ? $(e[this.model.siblingIndex])
                                        : e);
                            },
                            renderShow: function() {
                                var t = this,
                                    e = this.model.getArgs(),
                                    i = e.e_ids;
                                _.each(i, function(e) {
                                    var i = t.getEl(e);
                                    i.length &&
                                        (i.removeClass("c-initHide"),
                                        i.removeClass("cf-initHide"),
                                        i.show());
                                });
                            },
                            renderHide: function() {
                                var t = this,
                                    e = this.model.getArgs(),
                                    i = e.e_ids;
                                _.each(i, function(e) {
                                    var i = t.getEl(e);
                                    i.length && i.hide();
                                });
                            },
                            renderToggle: function() {
                                var t = this,
                                    e = this.model.getArgs(),
                                    i = e.e_ids;
                                _.each(i, function(e) {
                                    var i = t.getEl(e);
                                    i.length &&
                                        (i.hasClass("c-initHide") ||
                                        i.hasClass("cf-initHide")
                                            ? (i.removeClass("c-initHide"),
                                              i.removeClass("cf-initHide"),
                                              i.show())
                                            : i.toggle());
                                });
                            },
                            renderClass: function(t, e) {
                                var i = this,
                                    n = this.model.getArgs();
                                e || (e = n.cla);
                                var o = n.e_ids;
                                e &&
                                    _.each(o, function(n) {
                                        var o = i.getEl(n);
                                        o.length &&
                                            ("add" == t && o.addClass(e),
                                            "remove" == t && o.removeClass(e),
                                            "toggle" == t && o.toggleClass(e));
                                    });
                            },
                            renderDialog: function(t, e) {
                                var i = this,
                                    n = this.model.getArgs(),
                                    o = n.e_ids;
                                _.each(o, function(n) {
                                    var o = i.getEl(n);
                                    if (o.length) {
                                        var s = $(e.target).closest(
                                            "[data-c_contentview_id]"
                                        );
                                        if (s.length) {
                                            var r = s.attr(
                                                "data-c_contentview_id"
                                            );
                                            if (
                                                (console.log(r),
                                                o.find(
                                                    "[data-c_e_id=" + r + "]"
                                                ).length)
                                            ) {
                                                var a = s.attr(
                                                    "data-c_content_url"
                                                );
                                                if (a) {
                                                    o.find(
                                                        "[data-c_e_id=" +
                                                            r +
                                                            "]"
                                                    ).empty();
                                                    $.ajax({
                                                        url: a,
                                                        type: "GET",
                                                        dataType: "html",
                                                        success: function(t) {
                                                            o &&
                                                                o.find(
                                                                    "[data-c_e_id=" +
                                                                        r +
                                                                        "]"
                                                                ).length &&
                                                                o
                                                                    .find(
                                                                        "[data-c_e_id=" +
                                                                            r +
                                                                            "]"
                                                                    )
                                                                    .replaceWith(
                                                                        t
                                                                    );
                                                        },
                                                        error: function() {},
                                                        timeout: 1e4
                                                    });
                                                }
                                            }
                                        }
                                        "open" == t
                                            ? (o.removeClass("c-initHide"),
                                              o.removeClass("cf-initHide"),
                                              o.show(),
                                              $("body").addClass("modal-open"),
                                              $("html").addClass(
                                                  "c-modal-patch"
                                              ),
                                              window.setTimeout(function() {
                                                  o.addClass("c-dialog-open");
                                              }, 300))
                                            : "close" == t
                                                ? (o.removeClass(
                                                      "c-dialog-open"
                                                  ),
                                                  $("body").removeClass(
                                                      "modal-open"
                                                  ),
                                                  $("html").removeClass(
                                                      "c-modal-patch"
                                                  ),
                                                  window.setTimeout(function() {
                                                      o.hide();
                                                  }, 300))
                                                : "toggle" == t &&
                                                  (o.hasClass("c-dialog-open")
                                                      ? (o.removeClass(
                                                            "c-dialog-open"
                                                        ),
                                                        $("body").removeClass(
                                                            "modal-open"
                                                        ),
                                                        $("html").removeClass(
                                                            "c-modal-patch"
                                                        ),
                                                        window.setTimeout(
                                                            function() {
                                                                o.hide();
                                                            },
                                                            300
                                                        ))
                                                      : (o.removeClass(
                                                            "c-initHide"
                                                        ),
                                                        o.removeClass(
                                                            "cf-initHide"
                                                        ),
                                                        o.show(),
                                                        $("body").addClass(
                                                            "modal-open"
                                                        ),
                                                        $("html").addClass(
                                                            "c-modal-patch"
                                                        ),
                                                        window.setTimeout(
                                                            function() {
                                                                o.addClass(
                                                                    "c-dialog-open"
                                                                );
                                                            },
                                                            300
                                                        )));
                                    }
                                });
                            },
                            renderMedia: function(t) {
                                var e = this.model.getArgs(),
                                    i = e.e_ids;
                                _.each(i, function(e) {
                                    switch (t) {
                                        case "play":
                                            _g.html5media.play(e);
                                            break;
                                        case "pause":
                                            _g.html5media.pause(e);
                                            break;
                                        case "stop":
                                            _g.html5media.stop(e);
                                            break;
                                        case "toggle":
                                            _g.html5media.toggle(e);
                                    }
                                });
                            },
                            renderState: function(t) {
                                var e = this,
                                    i = this.model.getArgs();
                                t || (t = i.cla);
                                var n = i.e_ids;
                                _.each(n, function(i) {
                                    var n = e.getEl(i);
                                    if (n.length) {
                                        if (
                                            ("c-state1" != t &&
                                                n.removeClass("c-state1"),
                                            "c-state2" != t &&
                                                n.removeClass("c-state2"),
                                            "c-state3" != t &&
                                                n.removeClass("c-state3"),
                                            !t)
                                        )
                                            return;
                                        n.addClass(t);
                                    }
                                });
                            },
                            renderUrl: function() {
                                var t = this.model.getArgs();
                                if (t.url) {
                                    var e = this.model.get("data").exec;
                                    if (
                                        (10 == e
                                            ? 0 == t.url.indexOf("#") ||
                                              t.url.indexOf("://") != -1 ||
                                              (t.url = "http://" + t.url)
                                            : 5 == e &&
                                              "undefined" !=
                                                  typeof portal_url &&
                                              (t.url = portal_url + t.url),
                                        t.blank)
                                    ) {
                                        if (coolsite_play.isPreview)
                                            return (
                                                coolsite_editor.ui.message.show(
                                                    "warning",
                                                    coolsite_editor.WARN[100]
                                                ),
                                                !1
                                            );
                                        window.open(t.url);
                                    } else {
                                        if (coolsite_play.isPreview)
                                            return (
                                                coolsite_editor.ui.message.show(
                                                    "warning",
                                                    coolsite_editor.WARN[100]
                                                ),
                                                !1
                                            );
                                        window.location.href = t.url;
                                    }
                                }
                            },
                            renderHash: function() {
                                var t = this.model.getArgs();
                                t.url &&
                                    coolsite_play.events.scroll.doHashScroll(
                                        null,
                                        t.url
                                    );
                            },
                            renderPhone: function() {
                                var t = this.model.getArgs();
                                t.url && (window.location = "tel:" + t.url);
                            },
                            renderHtml: function(t) {
                                var e = this,
                                    i = this.model.getArgs(),
                                    n = i.e_ids;
                                _.each(n, function(i) {
                                    var n = e.getEl(i);
                                    n.length &&
                                        ("load" == t
                                            ? (n.removeClass("c-initHide"),
                                              n.removeClass("cf-initHide"),
                                              n.show(),
                                              n.attr("data-src") &&
                                                  n.attr(
                                                      "src",
                                                      n.attr("data-src")
                                                  ),
                                              n.attr("data-srcdoc") &&
                                                  (_g.device.msie()
                                                      ? n[0].contentWindow.document.write(
                                                            n.attr(
                                                                "data-srcdoc"
                                                            )
                                                        )
                                                      : n.attr(
                                                            "srcdoc",
                                                            n.attr(
                                                                "data-srcdoc"
                                                            )
                                                        )))
                                            : "unload" == t &&
                                              (n.attr("src") &&
                                                  n.removeAttr("src"),
                                              n.attr("srcdoc") &&
                                                  (_g.device.msie()
                                                      ? n[0].contentWindow.document.write(
                                                            ""
                                                        )
                                                      : n.removeAttr(
                                                            "srcdoc"
                                                        ))));
                                });
                            },
                            renderSwitch: function() {
                                var t = this,
                                    e = this.model.getArgs(),
                                    i = e.e_ids;
                                _.each(i, function(i) {
                                    var n = t.getEl(i);
                                    n.length && n.trigger("switchTo", e.i);
                                });
                            }
                        }),
                            (coolsite_play.view.animation.animation = {
                                autoRender: !1,
                                events:
                                    coolsite_play.controller.animation
                                        .animation,
                                stashStyle: function() {
                                    if (this.$el.length > 1) {
                                        var t = this;
                                        (t.tmpClass = []),
                                            (t.tmpStyle = []),
                                            _.each(this.$el, function(e) {
                                                t.tmpClass.push(
                                                    $(e).attr("class")
                                                ),
                                                    t.tmpStyle.push(
                                                        $(e).attr("style")
                                                    );
                                            });
                                    } else
                                        (this.tmpClass = this.$el.attr(
                                            "class"
                                        )),
                                            (this.tmpStyle = this.$el.attr(
                                                "style"
                                            ));
                                },
                                recoverStyle: function() {
                                    if (this.$el.length > 1) {
                                        var t = this;
                                        _.each(this.$el, function(e, i) {
                                            $(e).attr("class", t.tmpClass[i]),
                                                $(e).attr(
                                                    "style",
                                                    t.tmpStyle[i]
                                                );
                                        });
                                    } else
                                        this.$el.attr("class", this.tmpClass),
                                            this.$el.attr(
                                                "style",
                                                this.tmpStyle
                                            );
                                }
                            }),
                            (coolsite_play.view.element.element = {
                                autoRender: !1,
                                events: coolsite_play.controller.element.element
                            }),
                            (coolsite_play.view.element.slider = $.extend(
                                !0,
                                {},
                                coolsite_play.view.element.element,
                                {
                                    events:
                                        coolsite_play.controller.element.slider,
                                    afterRender: function() {
                                        (this.slidernav = this.$el.children(
                                            ".c-slider-nav"
                                        )),
                                            (this.slidernavdots = this.slidernav.children(
                                                ".c-slider-nav-dot"
                                            )),
                                            (this.slidermask = this.$el.children(
                                                ".c-slider-mask"
                                            )),
                                            (this.slides = this.slidermask.children(
                                                ".c-slide"
                                            ));
                                        var t = this.model.get("args");
                                        coolsite_play.isPreview ||
                                            ((this.model.transition = coolsite_play.slider(
                                                this.slidermask,
                                                t
                                            )),
                                            this.model.transition.refreshSlideClass(
                                                this.slidermask,
                                                0
                                            ),
                                            this.slidernavdots
                                                .first()
                                                .addClass("c-active"),
                                            (this.model.transition.currentIndex = 0));
                                    }
                                }
                            )),
                            (coolsite_play.view.timeline.timeline = {
                                autoRender: !1,
                                events:
                                    coolsite_play.controller.timeline.timeline
                            });
                    },
                    init_controllers: function() {
                        (coolsite_play.controller.action.action = {
                            c_start: function(t) {
                                if ($(t.target).is(this.$el))
                                    return 6 == this.model.type
                                        ? (this.execute(t), !1)
                                        : void 0;
                            },
                            click: function(t) {
                                if (
                                    (console.log("element click"),
                                    0 == this.model.type)
                                )
                                    return this.execute(t), !1;
                            },
                            dblclick: function(t) {
                                if (
                                    (console.log("element dblclick"),
                                    4 == this.model.type)
                                )
                                    return this.execute(t), !1;
                            },
                            mouseover: function(t) {
                                if (
                                    (console.log("element mouseover"),
                                    20 == this.model.type)
                                )
                                    return this.execute(t), !1;
                            },
                            mouseout: function(t) {
                                if (21 == this.model.type)
                                    return this.execute(t), !1;
                            },
                            c_scroll: function(t) {
                                23 == this.model.type && this.execute(t);
                            },
                            c_scrollUp: function(t) {
                                $(t.target).is(this.$el) &&
                                    24 == this.model.type &&
                                    this.execute(t);
                            },
                            c_scrollDown: function(t) {
                                $(t.target).is(this.$el) &&
                                    25 == this.model.type &&
                                    this.execute(t);
                            },
                            scrollIn: function(t) {
                                $(t.target).is(this.$el) &&
                                    26 == this.model.type &&
                                    this.execute(t);
                            },
                            scrollUpIn: function(t) {
                                $(t.target).is(this.$el) &&
                                    27 == this.model.type &&
                                    this.execute(t);
                            },
                            scrollDownIn: function(t) {
                                $(t.target).is(this.$el) &&
                                    28 == this.model.type &&
                                    this.execute(t);
                            },
                            scrollOut: function(t) {
                                $(t.target).is(this.$el) &&
                                    29 == this.model.type &&
                                    this.execute(t);
                            },
                            scrollUpOut: function(t) {
                                $(t.target).is(this.$el) &&
                                    30 == this.model.type &&
                                    this.execute(t);
                            },
                            scrollDownOut: function(t) {
                                $(t.target).is(this.$el) &&
                                    31 == this.model.type &&
                                    this.execute(t);
                            },
                            changeTo: function(t) {
                                $(t.target).is(this.$el) &&
                                    (console.log("element changeTo"),
                                    5 == this.model.type && this.execute(t));
                            },
                            c_active: function(t) {
                                $(t.target).is(this.$el) &&
                                    33 == this.model.type &&
                                    this.execute(t);
                            },
                            c_deactive: function(t) {
                                $(t.target).is(this.$el) &&
                                    34 == this.model.type &&
                                    this.execute(t);
                            },
                            button_active: function(t) {
                                35 == this.model.type && this.execute(t);
                            }
                        }),
                            (coolsite_play.controller.animation.animation = {}),
                            (coolsite_play.controller.element.element = {
                                scrollUpIn: function(t) {
                                    console.log("slider scroll in");
                                }
                            }),
                            (coolsite_play.controller.element.slider = $.extend(
                                !0,
                                {},
                                coolsite_play.controller.element.element,
                                {
                                    scrollUpIn: function(t) {
                                        $(t.target).is(this.$el) &&
                                            (console.log("slider scroll in"),
                                            this.model.start(),
                                            this.model.onChangeTo(null, 0));
                                    },
                                    switchTo: function(t, e) {
                                        $(t.target).is(this.$el) &&
                                            (console.log(e),
                                            this.model.switchSlide(e));
                                    }
                                }
                            )),
                            (coolsite_play.controller.timeline.timeline = {
                                scrollIn: function(t) {
                                    $(t.target).is(this.$el) &&
                                        this.model.play();
                                },
                                recover: function(t) {
                                    $(t.target).is(this.$el) &&
                                        this.model.recoverStyle();
                                },
                                changeTo: function(t) {
                                    $(t.target).is(this.$el) &&
                                        this.model.play();
                                },
                                c_active: function(t) {
                                    !$(t.target).is(this.$el);
                                },
                                c_deactive: function(t) {
                                    !$(t.target).is(this.$el);
                                },
                                t_start: function(t) {
                                    $(t.target).is(this.$el) &&
                                        ("locked" ==
                                        this.$el.attr("data-c_tl_locked")
                                            ? (coolsite_play.isSectionLock = this.model.id)
                                            : (coolsite_play.isSectionLock = !1));
                                },
                                t_end: function(t) {
                                    $(t.target).is(this.$el) &&
                                        coolsite_play.isSectionLock ==
                                            this.model.id &&
                                        (coolsite_play.isSectionLock = !1);
                                }
                            });
                    }
                };
                (n = []),
                    (o = function() {
                        return (
                            window._cs || (window._cs = {}),
                            (window._cs.mvc = i),
                            window._cs.mvc
                        );
                    }.apply(e, n)),
                    !(void 0 !== o && (t.exports = o));
            })(window);
        },
        function(t, e, n) {
            var o, s;
            !(function() {
                var n = {
                    init: function() {
                        (coolsite_play.events.dialog = {
                            init: function() {
                                $(document)
                                    .find(".c-modal")
                                    .on(
                                        "click",
                                        ".dialog-close",
                                        coolsite_play.events.dialog
                                            .handleDialogClose
                                    );
                            },
                            handleDialogClose: function() {
                                var t = $(this).closest(".c-modal");
                                return (
                                    t.removeClass("c-dialog-open"),
                                    $("body").removeClass("modal-open"),
                                    $("html").removeClass("c-modal-patch"),
                                    window.setTimeout(function() {
                                        t.hide();
                                    }, 300),
                                    !1
                                );
                            },
                            stop: function() {
                                $(document)
                                    .find(".c-modal")
                                    .off(
                                        "click",
                                        ".dialog-close",
                                        coolsite_play.events.dialog
                                            .handleDialogClose
                                    );
                            }
                        }),
                            (coolsite_play.events.form = {
                                init: function() {
                                    $("form textarea").each(function() {
                                        "    " == $(this).html() &&
                                            $(this).html("");
                                    }),
                                        $("[data-c_form]").each(function() {
                                            $(this).bind(
                                                "submit",
                                                coolsite_play.events.form.bind
                                            );
                                        });
                                },
                                bind: function() {
                                    var t = $(this),
                                        e = $(this).attr("data-action");
                                    if (!e) return !1;
                                    $.ajax({
                                        url: e,
                                        type: "POST",
                                        dataType: "JSON",
                                        data: $(this).serialize(),
                                        beforeSend: function(t) {
                                            t.setRequestHeader(
                                                "X-CSRFToken",
                                                coolsite_play.readCookie(
                                                    "csrftoken"
                                                )
                                            );
                                        },
                                        traditional: !0,
                                        success: function(e) {
                                            if (
                                                (t
                                                    .find(".c-error")
                                                    .removeClass("c-error"),
                                                200 == e.code)
                                            )
                                                t.addClass("c-success"),
                                                    t.removeClass("c-error"),
                                                    coolsite_play.events.form.handleRedirect(
                                                        t
                                                    );
                                            else {
                                                t.addClass("c-error");
                                                var i = e.msg;
                                                _.each(i, function(e, i) {
                                                    var n = t.find(
                                                        "[name=" + i + "]"
                                                    );
                                                    n.is("input[type=radio]") ||
                                                    n.is("input[type=checkbox]")
                                                        ? n
                                                              .parent()
                                                              .addClass(
                                                                  "c-error"
                                                              )
                                                        : t
                                                              .find(
                                                                  "[name=" +
                                                                      i +
                                                                      "]"
                                                              )
                                                              .addClass(
                                                                  "c-error"
                                                              );
                                                });
                                            }
                                        },
                                        error: function() {},
                                        timeout: 1e4
                                    });
                                    return !1;
                                },
                                stop: function() {
                                    $("[data-c_form]").each(function() {
                                        $(this).unbind(
                                            "submit",
                                            coolsite_play.events.form.bind
                                        );
                                    });
                                },
                                handleRedirect: function(t) {
                                    var e,
                                        i = t.attr("data-url"),
                                        n = t.attr("data-page"),
                                        o = t.attr("data-target");
                                    if (i)
                                        (e = i),
                                            0 == e.indexOf("#") ||
                                                e.indexOf("://") != -1 ||
                                                (e = "http://" + e);
                                    else {
                                        if (!n) return !1;
                                        (e = n),
                                            "undefined" != typeof portal_url &&
                                                (e = portal_url + e);
                                    }
                                    if (o) {
                                        if (coolsite_play.isPreview)
                                            return (
                                                coolsite_editor.ui.message.show(
                                                    "warning",
                                                    coolsite_editor.WARN[100]
                                                ),
                                                !1
                                            );
                                        window.open(e);
                                    } else {
                                        if (coolsite_play.isPreview)
                                            return (
                                                coolsite_editor.ui.message.show(
                                                    "warning",
                                                    coolsite_editor.WARN[100]
                                                ),
                                                !1
                                            );
                                        window.location.href = e;
                                    }
                                }
                            }),
                            (coolsite_play.events.html = {
                                init: function() {
                                    _g.device.msie() &&
                                        $(document)
                                            .find("iframe.c-iframe")
                                            .each(function() {
                                                if ($(this).attr("srcdoc")) {
                                                    var t = $(this).attr(
                                                        "srcdoc"
                                                    );
                                                    this.contentWindow.document.write(
                                                        t
                                                    );
                                                }
                                            });
                                }
                            }),
                            (coolsite_play.events.mousewheel = {
                                init: function() {
                                    $("body")
                                        .find(".c-section-switch")
                                        .each(function() {
                                            $(this).on(
                                                "mousewheel",
                                                coolsite_play.events.mousewheel
                                                    .handlemousewheel
                                            );
                                        });
                                },
                                stop: function() {
                                    $("body")
                                        .find(".c-section-switch")
                                        .each(function() {
                                            $(this).off(
                                                "mousewheel",
                                                coolsite_play.events.mousewheel
                                                    .handlemousewheel
                                            );
                                        });
                                },
                                handlemousewheel: function(t) {
                                    var e = t.currentTarget,
                                        i = null;
                                    (t.deltaY < -10 ||
                                        (coolsite_play.isWindows &&
                                            t.deltaY < 0)) &&
                                        (i = 1),
                                        (t.deltaY > 10 ||
                                            (coolsite_play.isWindows &&
                                                t.deltaY > 0)) &&
                                            (i = 0),
                                        null != i &&
                                            coolsite_play.events.scroll.doSectionSwitch(
                                                e,
                                                i
                                            ),
                                        t.preventDefault();
                                }
                            }),
                            (coolsite_play.events.scroll = {
                                init: function() {
                                    coolsite_play.events.scroll.refresh(),
                                        $("body").trigger("scrollIn"),
                                        $("body").trigger("scrollUpIn");
                                    var t = $(window).scrollTop(),
                                        e = coolsite_play.events.scroll.getScrollHeight(),
                                        n = e - $(window).height(),
                                        o = coolsite_play.sectionItems;
                                    if (
                                        ($("body")
                                            .find(".c-section,.c-slider")
                                            .each(function() {
                                                $(this).offset().top <
                                                    t + $(window).height() &&
                                                    (console.log(this),
                                                    $(this).addClass(
                                                        "c-scrollIn"
                                                    ),
                                                    $(this).trigger("scrollIn"),
                                                    $(this).trigger(
                                                        "scrollUpIn"
                                                    ));
                                            }),
                                        o.length)
                                    )
                                        if (t >= n)
                                            coolsite_play.events.scroll.activate(
                                                o.length - 1
                                            );
                                        else if (t <= o[0].top)
                                            coolsite_play.events.scroll.activate(
                                                0
                                            );
                                        else
                                            for (i = 0; i < o.length; i++)
                                                t >= o[i].top &&
                                                    (!o[i + 1] ||
                                                        t <= o[i + 1].top) &&
                                                    coolsite_play.events.scroll.activate(
                                                        i
                                                    );
                                    (coolsite_play.events.scroll.lastst = t),
                                        (coolsite_play.scroll_offset = 0),
                                        $(window).bind(
                                            "scroll",
                                            coolsite_play.events.scroll.handle
                                        ),
                                        $(window).bind(
                                            "resize",
                                            coolsite_play.events.scroll
                                                .resizehandle
                                        );
                                },
                                refresh: function() {
                                    (coolsite_play.scrollItems = []),
                                        (coolsite_play.sectionItems = []);
                                    var t = $("body").find(
                                        ".c-section,.c-slider"
                                    );
                                    t
                                        .map(function() {
                                            var t = $(this).offset().top,
                                                e =
                                                    $(this).offset().top +
                                                    $(this).height();
                                            $(this).hasClass("c-section")
                                                ? "section"
                                                : $(this).hasClass("c-slider")
                                                    ? "slider"
                                                    : "other";
                                            return {
                                                top: t,
                                                bottom: e,
                                                target: this
                                            };
                                        })
                                        .sort(function(t, e) {
                                            return t.top - e.top;
                                        })
                                        .each(function() {
                                            coolsite_play.scrollItems.push(
                                                this
                                            ),
                                                $(this.target).hasClass(
                                                    "c-section"
                                                ) &&
                                                    "scroll" ==
                                                        $(this.target).attr(
                                                            "data-c_spy"
                                                        ) &&
                                                    coolsite_play.sectionItems.push(
                                                        this
                                                    );
                                        }),
                                        (coolsite_play.scrollHeight = coolsite_play.events.scroll.getScrollHeight()),
                                        console.log(coolsite_play.scrollItems);
                                },
                                getScrollHeight: function() {
                                    return Math.max(
                                        $("body")[0].scrollHeight,
                                        document.documentElement.scrollHeight
                                    );
                                },
                                handle: function(t) {
                                    var e,
                                        i,
                                        n = $(this).scrollTop(),
                                        o = coolsite_play.events.scroll.getScrollHeight(),
                                        s = o - $(window).height(),
                                        r = coolsite_play.scrollItems,
                                        a = coolsite_play.sectionItems;
                                    if (
                                        (coolsite_play.scrollHeight != o &&
                                            coolsite_play.events.scroll.refresh(),
                                        (e =
                                            n >
                                            coolsite_play.events.scroll.lastst
                                                ? 1
                                                : 0),
                                        (coolsite_play.events.scroll.lastst = n),
                                        $("body").trigger("c_scroll"),
                                        $("body").trigger(
                                            1 == e
                                                ? "c_scrollUp"
                                                : "c_scrollDown"
                                        ),
                                        a.length)
                                    )
                                        if (n >= s)
                                            coolsite_play.events.scroll.activate(
                                                a.length - 1
                                            );
                                        else if (n <= a[0].top)
                                            coolsite_play.events.scroll.activate(
                                                0
                                            );
                                        else
                                            for (i = 0; i < a.length; i++)
                                                e
                                                    ? n >= a[i].top &&
                                                      (!a[i + 1] ||
                                                          n <= a[i + 1].top) &&
                                                      coolsite_play.events.scroll.activate(
                                                          i
                                                      )
                                                    : n <= a[i].top &&
                                                      (!a[i - 1] ||
                                                          n >= a[i - 1].top) &&
                                                      coolsite_play.events.scroll.activate(
                                                          i - 1
                                                      );
                                    for (i = 0; i < r.length; i++) {
                                        var l = r[i].target,
                                            c = r[i].top,
                                            u = r[i].bottom;
                                        e
                                            ? c < n + $(window).height() &&
                                              u - n > 0
                                                ? $(l).hasClass("c-scrollIn")
                                                    ? ($(l).trigger("c_scroll"),
                                                      $(l).trigger(
                                                          "c_scrollUp"
                                                      ))
                                                    : ($(l).addClass(
                                                          "c-scrollIn"
                                                      ),
                                                      $(l).trigger("scrollIn"),
                                                      $(l).trigger(
                                                          "scrollUpIn"
                                                      ),
                                                      console.log("upIn"))
                                                : $(l).hasClass("c-scrollIn") &&
                                                  ($(l).removeClass(
                                                      "c-scrollIn"
                                                  ),
                                                  $(l).trigger("scrollOut"),
                                                  $(l).trigger("scrollUpOut"),
                                                  $(l).trigger("recover"),
                                                  console.log("upOut"))
                                            : u - n > 0 &&
                                              c < n + $(window).height()
                                                ? $(l).hasClass("c-scrollIn")
                                                    ? ($(l).trigger("c_scroll"),
                                                      $(l).trigger(
                                                          "c_scrollDown"
                                                      ))
                                                    : ($(l).addClass(
                                                          "c-scrollIn"
                                                      ),
                                                      $(l).trigger("scrollIn"),
                                                      $(l).trigger(
                                                          "scrollDownIn"
                                                      ))
                                                : $(l).hasClass("c-scrollIn") &&
                                                  ($(l).removeClass(
                                                      "c-scrollIn"
                                                  ),
                                                  $(l).trigger("scrollOut"),
                                                  $(l).trigger("scrollDownOut"),
                                                  $(l).trigger("recover"));
                                    }
                                },
                                activate: function(t) {
                                    var e = coolsite_play.sectionItems;
                                    if (
                                        null ==
                                            coolsite_play.currentActiveIndex ||
                                        coolsite_play.currentActiveIndex != t
                                    ) {
                                        if (
                                            null !=
                                            coolsite_play.currentActiveIndex
                                        ) {
                                            $(
                                                e[
                                                    coolsite_play
                                                        .currentActiveIndex
                                                ].target
                                            ).trigger("c_deactive");
                                            var i =
                                                e[
                                                    coolsite_play
                                                        .currentActiveIndex
                                                ].target.id;
                                            if (i) {
                                                var n = $("[href=#" + i + "]");
                                                n.length &&
                                                    n.each(function() {
                                                        "scroll" ==
                                                            $(this).attr(
                                                                "data-c_spy"
                                                            ) &&
                                                            $(this).parent("li")
                                                                .length &&
                                                            $(this)
                                                                .parent("li")
                                                                .removeClass(
                                                                    "active"
                                                                );
                                                    });
                                            }
                                        }
                                        console.log(
                                            coolsite_play.currentActiveIndex +
                                                ":deactive"
                                        ),
                                            $(e[t].target).trigger("c_active"),
                                            (coolsite_play.currentActiveIndex = t),
                                            console.log(t + ":active");
                                        var i = e[t].target.id;
                                        if (i) {
                                            var n = $("[href=#" + i + "]");
                                            n.length &&
                                                n.each(function() {
                                                    "scroll" ==
                                                        $(this).attr(
                                                            "data-c_spy"
                                                        ) &&
                                                        $(this).parent("li")
                                                            .length &&
                                                        $(this)
                                                            .parent("li")
                                                            .addClass("active");
                                                });
                                        }
                                    }
                                },
                                resizehandle: function(t) {
                                    coolsite_play.events.scroll.refresh();
                                },
                                bindHashScroll: function() {
                                    $("a[href^='#'][data-toggle!='tab']").bind(
                                        "click",
                                        coolsite_play.events.scroll.doHashScroll
                                    );
                                },
                                unBindHashScroll: function() {
                                    $(
                                        "a[href^='#'][data-toggle!='tab']"
                                    ).unbind(
                                        "click",
                                        coolsite_play.events.scroll.doHashScroll
                                    );
                                },
                                doHashScroll: function(t, e) {
                                    if (
                                        (e || (e = $(this).attr("href")),
                                        !t ||
                                            !$(t.target).hasClass(
                                                "c-search-box-btn"
                                            ))
                                    )
                                        return (
                                            $(e).length &&
                                                $("html, body").animate(
                                                    {
                                                        scrollTop: $(e).offset()
                                                            .top
                                                    },
                                                    800
                                                ),
                                            !1
                                        );
                                },
                                doScrollByElement: function(t) {
                                    coolsite_play.isSectionSwitching ||
                                        coolsite_play.isSectionLock ||
                                        ($(t).length &&
                                            $("html, body").animate(
                                                {
                                                    scrollTop: $(t).offset().top
                                                },
                                                800
                                            ));
                                },
                                doSectionSwitch: function(t, e) {
                                    var i = $(t).prev(".c-section-switch")
                                            .length
                                            ? $(t).prev(".c-section-switch")
                                            : $(t).prev(".c-section")
                                                ? $(t).prev(".c-section")
                                                : null,
                                        n = $(t).next(".c-section-switch")
                                            .length
                                            ? $(t).next(".c-section-switch")
                                            : $(t).next(".c-section")
                                                ? $(t).next(".c-section")
                                                : null;
                                    e &&
                                        (coolsite_play.isSectionSwitching ||
                                            (n &&
                                                (coolsite_play.events.scroll.doScrollByElement(
                                                    n
                                                ),
                                                (coolsite_play.isSectionSwitching = t),
                                                window.setTimeout(function() {
                                                    coolsite_play.isSectionSwitching = null;
                                                }, 1e3)))),
                                        e ||
                                            coolsite_play.isSectionSwitching ||
                                            (i &&
                                                (coolsite_play.events.scroll.doScrollByElement(
                                                    i
                                                ),
                                                (coolsite_play.isSectionSwitching = t),
                                                window.setTimeout(function() {
                                                    coolsite_play.isSectionSwitching = null;
                                                }, 1e3)));
                                },
                                stop: function() {
                                    $(window).unbind(
                                        "scroll",
                                        coolsite_play.events.scroll.handle
                                    ),
                                        $(window).unbind(
                                            "resize",
                                            coolsite_play.events.scroll
                                                .resizehandle
                                        ),
                                        (coolsite_play.currentActiveIndex = null);
                                }
                            }),
                            (coolsite_play.events.touch = {
                                init: function() {
                                    $("body")
                                        .find(".c-section-switch")
                                        .each(function() {
                                            $(this)
                                                .hammer()
                                                .on("dragup", function(t) {
                                                    return (
                                                        console.log("dragup"),
                                                        (deltaY =
                                                            t.gesture.deltaY),
                                                        coolsite_play.events.touch.handletouch(
                                                            t,
                                                            1
                                                        ),
                                                        t.gesture.preventDefault(),
                                                        !1
                                                    );
                                                }),
                                                $(this)
                                                    .hammer()
                                                    .on("dragdown", function(
                                                        t
                                                    ) {
                                                        return (
                                                            console.log(
                                                                "dragdown"
                                                            ),
                                                            (deltaY =
                                                                t.gesture
                                                                    .deltaY),
                                                            coolsite_play.events.touch.handletouch(
                                                                t,
                                                                0
                                                            ),
                                                            t.gesture.preventDefault(),
                                                            !1
                                                        );
                                                    });
                                        });
                                    var t = !1;
                                    $("body")
                                        .hammer()
                                        .on("drag", function(e) {
                                            if (!t) {
                                                var i = _.filter(
                                                    _g.html5media.medias,
                                                    function(t) {
                                                        return (
                                                            "audio" == t.type &&
                                                            t.autoplay
                                                        );
                                                    }
                                                );
                                                if (i.length)
                                                    try {
                                                        i[0].media.play(),
                                                            (t = !0);
                                                    } catch (e) {
                                                        t = !1;
                                                    }
                                                else t = !0;
                                            }
                                        });
                                },
                                handletouch: function(t, e) {
                                    var i = t.currentTarget;
                                    coolsite_play.events.scroll.doSectionSwitch(
                                        i,
                                        e
                                    );
                                }
                            });
                    }
                };
                (o = []),
                    (s = function() {
                        return (
                            window._cs || (window._cs = {}),
                            (window._cs.event = n),
                            window._cs.event
                        );
                    }.apply(e, o)),
                    !(void 0 !== s && (t.exports = s));
            })(window);
        },
        function(t, e, i) {
            var n,
                o,
                s =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function(t) {
                              return typeof t;
                          }
                        : function(t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          };
            !(function() {
                var i = {
                    init: function() {
                        _g.timeline = { animation: {} };
                        var t = {
                            param: function(t, e) {
                                var i = {
                                    repeat: e.t.rp,
                                    ease: coolsite_play.easeType[e.t.es]
                                };
                                return (
                                    (i.onStartParams = ["{self}", e, t]),
                                    (i.onStart = this.onStart),
                                    (i.onComplete = this.onComplete),
                                    (i.onCompleteParams = ["{self}", e, t]),
                                    i
                                );
                            },
                            fromparam: function(t, e) {
                                var i = {};
                                return i;
                            },
                            toparam: function(t, e) {
                                var i = {};
                                return (
                                    (i.onComplete = this.stop),
                                    (i.onCompleteParams = ["{self}", e, t]),
                                    (i.ease = coolsite_play.easeType[e.t.es]),
                                    (i.repeat = e.t.rp),
                                    (i.immediateRender = !1),
                                    (i.onStartParams = ["{self}", e, t]),
                                    (i.onStart = this.onStart),
                                    i
                                );
                            },
                            onStart: function(e, i, n) {
                                switch ((console.log(n, i), i.type)) {
                                    case 1:
                                    case 3:
                                    case 5:
                                        t.show(n), t.setOriginCenter(n);
                                        break;
                                    case 6:
                                        t.setOriginCenter(n);
                                        break;
                                    case 9:
                                        t.setOriginCenter(n);
                                        break;
                                    case 10:
                                        t.show(n), t.setOriginCenter(n);
                                }
                            },
                            onComplete: function(e, i, n) {
                                switch (i.type) {
                                    case 5:
                                        t.unsetOriginCenter(n);
                                        break;
                                    case 2:
                                    case 4:
                                    case 6:
                                        t.unsetOriginCenter(n), t.hide(n);
                                        break;
                                    case 7:
                                        break;
                                    case 9:
                                    case 10:
                                        t.unsetOriginCenter(n);
                                }
                                console.log(n, i);
                            },
                            show: function(t, e) {
                                $(t).removeClass("c-initHide"),
                                    $(t).removeClass("cf-initHide"),
                                    $(t).show();
                            },
                            hide: function(t, e) {
                                $(t).addClass("c-initHide"),
                                    $(t).addClass("cf-initHide");
                            },
                            setOriginCenter: function(t) {
                                $(t).css("transform-origin", "50% 50%");
                            },
                            unsetOriginCenter: function(t) {}
                        };
                        (_g.timeline.animation[3] = function(e, i) {
                            var n = t.fromparam(e, i),
                                o = t.toparam(e, i);
                            if (
                                ((n.css = { opacity: 0 }),
                                (o.css = { opacity: 1, force3D: !1 }),
                                "stage" == i.aniType)
                            ) {
                                var s = TweenMax.staggerFrom(
                                    e,
                                    i.t.du,
                                    n,
                                    i.stagger
                                );
                                return s;
                            }
                            var s = TweenMax.fromTo(e, i.t.du, n, o);
                            return s;
                        }),
                            (_g.timeline.animation[4] = function(e, i) {
                                var n = t.param(e, i);
                                if (
                                    ((n.css = { opacity: 0, force3D: !1 }),
                                    "stage" == i.aniType)
                                ) {
                                    var o = TweenMax.staggerTo(
                                        e,
                                        i.t.du,
                                        n,
                                        i.stagger
                                    );
                                    return o;
                                }
                                var o = TweenMax.to(e, i.t.du, n);
                                return o;
                            }),
                            (_g.timeline.animation[1] = function(e, i) {
                                var n = i.d.di,
                                    o = i.d.dt,
                                    s = i.d.dl,
                                    r = t.fromparam(e, i),
                                    a = t.toparam(e, i),
                                    l = $(window).width(),
                                    c = $(window).height();
                                (r.css = {}), (a.css = { force3D: !1 });
                                var u = !1;
                                $(e).hasClass("c-initHide") && (u = !0),
                                    $(e)
                                        .addClass("cf-invisible c-invisible")
                                        .removeClass("c-initHide")
                                        .removeClass("cf-initHide")
                                        .show();
                                var d = e.offset();
                                switch (n) {
                                    case 0:
                                        (r.css.y = o
                                            ? -s
                                            : -(
                                                  d.top +
                                                  e.height() -
                                                  $(window).scrollTop()
                                              )),
                                            (a.css.y = 0);
                                        break;
                                    case 3:
                                        (r.css.x = o ? s : l - d.left),
                                            (a.css.x = 0);
                                        break;
                                    case 2:
                                        (r.css.y = o
                                            ? s
                                            : c -
                                              (d.top - $(window).scrollTop())),
                                            (a.css.y = 0);
                                        break;
                                    case 1:
                                        (r.css.x = o
                                            ? -s
                                            : -(d.left + e.width())),
                                            (a.css.x = 0);
                                }
                                if (
                                    (o &&
                                        ((r.css.opacity = 0),
                                        (a.css.opacity = 1)),
                                    $(e).removeClass(
                                        "cf-invisible c-invisible"
                                    ),
                                    "stage" == i.aniType)
                                ) {
                                    r.css.opacity = 0;
                                    var h = TweenMax.staggerFrom(
                                        e,
                                        i.t.du,
                                        r,
                                        i.stagger
                                    );
                                } else var h = TweenMax.fromTo(e, i.t.du, r, a);
                                return h;
                            }),
                            (_g.timeline.animation[2] = function(e, i) {
                                var n = i.d.di,
                                    o = i.d.dt,
                                    s = i.d.dl,
                                    r = t.param(e, i),
                                    a = e.offset(),
                                    l = $(window).width(),
                                    c = $(window).height();
                                switch (((r.css = { force3D: !1 }), n)) {
                                    case 0:
                                        r.css.y = o
                                            ? -s
                                            : -(
                                                  a.top +
                                                  e.height() -
                                                  $(window).scrollTop()
                                              );
                                        break;
                                    case 3:
                                        r.css.x = o ? s : l - a.left;
                                        break;
                                    case 2:
                                        r.css.y = o
                                            ? s
                                            : c -
                                              (a.top - $(window).scrollTop());
                                        break;
                                    case 1:
                                        r.css.x = o
                                            ? -s
                                            : -(a.left + e.width());
                                }
                                if (
                                    (o && (r.css.opacity = 0),
                                    "stage" == i.aniType)
                                )
                                    var u = TweenMax.staggerTo(
                                        e,
                                        i.t.du,
                                        r,
                                        i.stagger
                                    );
                                else var u = TweenMax.to(e, i.t.du, r);
                                return u;
                            }),
                            (_g.timeline.animation[5] = function(e, i) {
                                var n = t.fromparam(e, i),
                                    o = t.toparam(e, i);
                                if (
                                    ((n.css = { scale: 0 }),
                                    (o.css = { scale: 1, force3D: !1 }),
                                    "stage" == i.aniType)
                                )
                                    var s = TweenMax.staggerFrom(
                                        e,
                                        i.t.du,
                                        n,
                                        i.stagger
                                    );
                                else var s = TweenMax.fromTo(e, i.t.du, n, o);
                                return s;
                            }),
                            (_g.timeline.animation[6] = function(e, i) {
                                var n = t.fromparam(e, i),
                                    o = t.toparam(e, i);
                                if (
                                    ((n.css = { scale: 1 }),
                                    (o.css = { scale: 0, force3D: "auto" }),
                                    "stage" == i.aniType)
                                )
                                    var s = TweenMax.staggerTo(
                                        e,
                                        i.t.du,
                                        o,
                                        i.stagger
                                    );
                                else var s = TweenMax.fromTo(e, i.t.du, n, o);
                                return s;
                            }),
                            (_g.timeline.animation[8] = function(e, i) {
                                var n = t.param(e, i),
                                    o = _.isNumber(i.d.op)
                                        ? Number(i.d.op)
                                        : 100;
                                if (
                                    ((n.css = {
                                        opacity: o / 100,
                                        force3D: !1
                                    }),
                                    "stage" == i.aniType)
                                )
                                    var s = TweenMax.staggerTo(
                                        e,
                                        i.t.du,
                                        n,
                                        i.stagger
                                    );
                                else var s = TweenMax.to(e, i.t.du, n);
                                return s;
                            }),
                            (_g.timeline.animation[7] = function(e, i) {
                                var n = t.param(e, i),
                                    o = _.isNumber(i.d.deg)
                                        ? Number(i.d.deg)
                                        : 0,
                                    s = i.d.ax || 0,
                                    r = "_cw",
                                    a = "+";
                                o < 0 && (r = "_ccw"), o < 0 && (a = "-");
                                var l = { force3D: !1 };
                                if (
                                    (0 == s &&
                                        (l.rotation =
                                            a + "=" + Math.abs(o) + r),
                                    1 == s &&
                                        (l.rotationX =
                                            a + "=" + Math.abs(o) + r),
                                    2 == s &&
                                        (l.rotationY =
                                            a + "=" + Math.abs(o) + r),
                                    (n.css = l),
                                    _g.device.android() &&
                                        TweenLite.set(e, {
                                            transformPerspective: 2e3
                                        }),
                                    "stage" == i.aniType)
                                )
                                    var c = TweenMax.staggerTo(
                                        e,
                                        i.t.du,
                                        n,
                                        i.stagger
                                    );
                                else var c = TweenMax.to(e, i.t.du, n);
                                return c;
                            }),
                            (_g.timeline.animation[9] = function(e, i) {
                                var n = t.param(e, i),
                                    o = _.isNumber(i.d.sc) ? Number(i.d.sc) : 1;
                                if (
                                    ((n.css = { scale: o, force3D: !1 }),
                                    "stage" == i.aniType)
                                )
                                    var s = TweenMax.staggerTo(
                                        e,
                                        i.t.du,
                                        n,
                                        i.stagger
                                    );
                                else var s = TweenMax.to(e, i.t.du, n);
                                return s;
                            }),
                            (_g.timeline.animation[10] = function(e, i) {
                                var n = t.fromparam(e, i),
                                    o = t.toparam(e, i),
                                    s = _.isNumber(i.d.op)
                                        ? Number(i.d.op)
                                        : 50,
                                    r = _.isNumber(i.d.sc) ? Number(i.d.sc) : 2;
                                if (
                                    ((n.css = { opacity: s / 100, scale: r }),
                                    (o.css = {
                                        opacity: 1,
                                        scale: 1,
                                        force3D: !1
                                    }),
                                    "stage" == i.aniType)
                                )
                                    var a = TweenMax.staggerFrom(
                                        e,
                                        i.t.du,
                                        n,
                                        i.stagger
                                    );
                                else var a = TweenMax.fromTo(e, i.t.du, n, o);
                                return a;
                            }),
                            (_g.timeline.animation[11] = function(e, i) {
                                var n = e
                                        .find(
                                            "rect, circle, ellipse, polyline, path, line, polygon"
                                        )
                                        .not("[data-attr=morphCloneElement]"),
                                    o = t.fromparam(e, i),
                                    s = t.toparam(e, i);
                                (o.drawSVG =
                                    i.d.startx + "% " + i.d.starty + "%"),
                                    (s.drawSVG =
                                        i.d.endx + "% " + i.d.endy + "%");
                                var r = TweenMax.fromTo(n, i.t.du, o, s);
                                return r;
                            }),
                            (_g.timeline.animation[12] = function(e, i) {
                                var n = {};
                                (n.paths = []), (n.otherPaths = []);
                                var o = 0;
                                if (
                                    (_.each(i.d.pathIndex, function(t, e) {
                                        null != t.selected && o++;
                                    }),
                                    o <= 1)
                                )
                                    return null;
                                if (
                                    (_.each(i.d.pathIndex, function(t, e) {
                                        null != t.selected
                                            ? n.paths.push({
                                                  shapeIndex: t.selected,
                                                  id: t.id
                                              })
                                            : n.otherPaths.push({ id: t.id });
                                    }),
                                    n.paths.length >= 2)
                                ) {
                                    var r,
                                        a,
                                        l,
                                        c,
                                        u,
                                        d,
                                        h,
                                        p = (function() {
                                            var o = function(t) {
                                                    return e.find(
                                                        "path#" + t.id
                                                    );
                                                },
                                                s = function(t) {
                                                    return e.find(
                                                        "path#clone_" + t.id
                                                    );
                                                },
                                                p = function() {
                                                    $(c).attr(
                                                        "d",
                                                        $(c).attr(
                                                            "data-original"
                                                        )
                                                    ),
                                                        $(c).css(
                                                            $(c).data(
                                                                "initStyle"
                                                            )
                                                        ),
                                                        $(c).data("show", !1);
                                                },
                                                f = function(t) {
                                                    var e =
                                                            t.css("fill") ||
                                                            "white",
                                                        i =
                                                            parseFloat(
                                                                t.css(
                                                                    "fill-opacity"
                                                                )
                                                            ) >= 0
                                                                ? parseFloat(
                                                                      t.css(
                                                                          "fill-opacity"
                                                                      )
                                                                  )
                                                                : 1,
                                                        n =
                                                            t.css("stroke") ||
                                                            "black",
                                                        o =
                                                            parseFloat(
                                                                t.css(
                                                                    "stroke-opacity"
                                                                )
                                                            ) >= 0
                                                                ? parseFloat(
                                                                      t.css(
                                                                          "stroke-opacity"
                                                                      )
                                                                  )
                                                                : 1,
                                                        s =
                                                            parseFloat(
                                                                t.css(
                                                                    "stroke-width"
                                                                )
                                                            ) >= 0
                                                                ? parseFloat(
                                                                      t.css(
                                                                          "stroke-width"
                                                                      )
                                                                  )
                                                                : 1;
                                                    return {
                                                        fill: e,
                                                        "fill-opacity": i,
                                                        stroke: n,
                                                        "stroke-opacity": o,
                                                        "stroke-width": s
                                                    };
                                                },
                                                m = function() {
                                                    $(c)
                                                        .show()
                                                        .css({
                                                            "stroke-dasharray":
                                                                "none",
                                                            "stroke-dashoffset":
                                                                "none"
                                                        }),
                                                        $(c).data("show", !0);
                                                    for (
                                                        var t = 1;
                                                        t < n.paths.length;
                                                        t++
                                                    )
                                                        o(n.paths[t]).hide();
                                                    for (
                                                        var t = 0;
                                                        t < n.otherPaths.length;
                                                        t++
                                                    ) {
                                                        var e = o(
                                                            n.otherPaths[t]
                                                        );
                                                        e.data("show") ||
                                                            e.hide();
                                                    }
                                                },
                                                g = function() {
                                                    m(), p();
                                                },
                                                v = function() {
                                                    $(c).data("show", !1);
                                                };
                                            for (
                                                r =
                                                    i.t.du /
                                                    (n.paths.length - 1),
                                                    a = t.toparam(e, i),
                                                    c = o(n.paths[0])[0],
                                                    $(c).data("initStyle") ||
                                                        $(c).data(
                                                            "initStyle",
                                                            f($(c))
                                                        ),
                                                    u = new TimelineMax({
                                                        repeat: i.t.rp,
                                                        onStart: g,
                                                        onComplete: v
                                                    }),
                                                    d = 0,
                                                    h = 1;
                                                h < n.paths.length;
                                                h++
                                            )
                                                (l = $.extend(
                                                    !0,
                                                    {
                                                        morphSVG: {
                                                            shape: s(
                                                                n.paths[h]
                                                            )[0],
                                                            shapeIndex:
                                                                n.paths[h - 1]
                                                                    .shapeIndex
                                                        }
                                                    },
                                                    a
                                                )),
                                                    (l = $.extend(
                                                        !0,
                                                        f(o(n.paths[h])),
                                                        l
                                                    )),
                                                    u.add(
                                                        TweenMax.to(c, r, l),
                                                        d
                                                    ),
                                                    (d += r);
                                            return { v: u };
                                        })();
                                    if (
                                        "object" ===
                                        ("undefined" == typeof p
                                            ? "undefined"
                                            : s(p))
                                    )
                                        return p.v;
                                }
                            }),
                            (_g.timeline.create = function(t) {
                                var e = {
                                        paused: !0,
                                        onStart: function(e) {
                                            t.model &&
                                                t.model.iview &&
                                                t.model.iview.$el.trigger(
                                                    "t_start"
                                                );
                                        },
                                        onComplete: function(e) {
                                            t.model &&
                                                t.model.iview &&
                                                t.model.iview.$el.trigger(
                                                    "t_end"
                                                );
                                        },
                                        repeat: t.args ? t.args.rp : 0
                                    },
                                    i = 0,
                                    n = new TimelineMax(e);
                                n.addLabel("Start");
                                var o = t.animations;
                                return (
                                    _.each(o, function(t, e) {
                                        var o = t.toJSON().data,
                                            s = o.t.de,
                                            r = o.t.st;
                                        o.t.rp;
                                        if (((i += s), 2 == r))
                                            if (0 != e) {
                                                var a = n.getLabelTime(
                                                    e - 1 + "_start"
                                                );
                                                n.addLabel(e + "_start", a + s),
                                                    (i = a + s);
                                            } else n.addLabel(e + "_start", i);
                                        else n.addLabel(e + "_start", i);
                                        o.d || (o.d = {});
                                        var l = _g.timeline.animation[o.type](
                                            t.iview.$el,
                                            o
                                        );
                                        n.add(l, i),
                                            (i += o.t.du),
                                            t.siblingIds &&
                                                _.each(t.siblingIds, function(
                                                    t
                                                ) {
                                                    var o = coolsite_play.animationlist.get(
                                                        t
                                                    );
                                                    if (o) {
                                                        var s = o.toJSON().data,
                                                            r = s.t.de,
                                                            a = s.t.st;
                                                        s.t.rp;
                                                        if (((i += r), 2 == a))
                                                            if (0 != e) {
                                                                var l = n.getLabelTime(
                                                                    e -
                                                                        1 +
                                                                        "_start"
                                                                );
                                                                n.addLabel(
                                                                    e +
                                                                        "_start",
                                                                    l + r
                                                                ),
                                                                    (i = l + r);
                                                            } else
                                                                n.addLabel(
                                                                    e +
                                                                        "_start",
                                                                    i
                                                                );
                                                        else
                                                            n.addLabel(
                                                                e + "_start",
                                                                i
                                                            );
                                                        s.d || (s.d = {});
                                                        var c = _g.timeline.animation[
                                                            s.type
                                                        ](o.iview.$el, s);
                                                        n.add(c, i),
                                                            (i += s.t.du);
                                                    }
                                                });
                                    }),
                                    n
                                );
                            });
                    }
                };
                (n = []),
                    (o = function() {
                        return (
                            window._cs || (window._cs = {}),
                            (window._cs.sdk = i),
                            window._cs.sdk
                        );
                    }.apply(e, n)),
                    !(void 0 !== o && (t.exports = o));
            })(window);
        },
        function(t, e, i) {
            var n, o;
            !(function() {
                var i = {
                    ani: function() {
                        coolsite_play.util.canvasCirAni = {
                            init: function(t) {
                                var e = coolsite_play.doc.find(".c-section"),
                                    i = [],
                                    n = coolsite_play.doc.find("canvas");
                                e = _.filter(e, function(t) {
                                    return 0 != $(t).find("canvas").length;
                                });
                                for (var o = 0; o < e.length; o++) {
                                    var s = $(e[o]).find("canvas");
                                    if (s.length) {
                                        if (((i = _.uniq(i.concat(s))), t)) {
                                            for (var r = 0; r < s.length; r++)
                                                coolsite_play.util.canvasCirAni.generate(
                                                    $(s[r]),
                                                    "",
                                                    t
                                                );
                                            return;
                                        }
                                        $(e[o]).on("scrollIn", s, function(e) {
                                            e.preventDefault();
                                            for (var i = 0; i < s.length; i++)
                                                coolsite_play.util.canvasCirAni.generate(
                                                    $(s[i]),
                                                    "",
                                                    t
                                                );
                                            return !1;
                                        });
                                    }
                                }
                                (n = _.difference(n, i)),
                                    _.each(n, function(e) {
                                        coolsite_play.util.canvasCirAni.generate(
                                            $(e),
                                            "",
                                            t
                                        );
                                    });
                            },
                            generate: function(t, e, i) {
                                function n() {
                                    var t = Math.min(1, (Date.now() - f) / h);
                                    o(t), t >= 1 ? g(v) : m(n);
                                }
                                function o(t) {
                                    r.clearRect(0, 0, a, l),
                                        (r.strokeStyle = s.backgroundColor),
                                        (r.lineWidth = c),
                                        (r.lineCap = "round"),
                                        r.beginPath(),
                                        r.arc(p.x, p.y, u, 0, 2 * Math.PI, !1),
                                        r.stroke(),
                                        r.closePath(),
                                        (r.strokeStyle = s.borderColor),
                                        r.beginPath(),
                                        r.arc(
                                            p.x,
                                            p.y,
                                            u,
                                            -0.5 * Math.PI,
                                            (t * d * 2 - 0.5) * Math.PI,
                                            !1
                                        ),
                                        r.stroke(),
                                        r.closePath(),
                                        s.showProgress &&
                                            ((r.fillStyle = s.fontColor),
                                            (r.font =
                                                s.fontWeight +
                                                " " +
                                                s.fontSize +
                                                "px Helvetica"),
                                            (r.textBaseline = "middle"),
                                            (r.textAlign = "center"),
                                            r.fillText(
                                                parseInt(s.progress * t),
                                                p.x,
                                                p.y,
                                                2 * u
                                            ));
                                }
                                var s = t.attr("part_data");
                                if (s) {
                                    s = JSON.parse(s);
                                    var r = t[0].getContext("2d"),
                                        a = t.width(),
                                        l = t.height(),
                                        c = parseFloat(s.borderWidth),
                                        u = Math.abs(
                                            Math.min(
                                                parseFloat(a - c) / 2,
                                                parseFloat(l - c) / 2
                                            )
                                        ),
                                        d = parseFloat(s.progress / s.max),
                                        h = parseInt(s.duration),
                                        p = {
                                            x: parseFloat(a / 2),
                                            y: parseFloat(l / 2)
                                        };
                                    if (i) o(1);
                                    else if (s.isWait && !e)
                                        (r.strokeStyle = s.backgroundColor),
                                            (r.lineWidth = c),
                                            (r.lineCap = "round"),
                                            r.clearRect(0, 0, a, l),
                                            r.beginPath(),
                                            r.arc(
                                                p.x,
                                                p.y,
                                                u,
                                                0,
                                                2 * Math.PI,
                                                !1
                                            ),
                                            r.stroke(),
                                            r.closePath();
                                    else
                                        var f = Date.now(),
                                            m =
                                                window.requestAnimationFrame ||
                                                window.webkitRequestAnimationFrame ||
                                                window.mozRequestAnimationFrame ||
                                                window.msRequestAnimationFrame ||
                                                window.oRequestAnimationFrame,
                                            g =
                                                window.cancelAnimationFrame ||
                                                window.webkitCancelAnimationFrame ||
                                                window.mozCancelAnimationFrame ||
                                                window.msCancelAnimationFrame ||
                                                window.oCancelAnimationFrame,
                                            v = m(n);
                                }
                            },
                            stop: function() {
                                coolsite_play.util.canvasCirAni.init(!0);
                            }
                        };
                    }
                };
                (n = []),
                    (o = function() {
                        return (
                            window._cs || (window._cs = {}),
                            (window._cs.canvascircle = i),
                            window._cs.canvascircle
                        );
                    }.apply(e, n)),
                    !(void 0 !== o && (t.exports = o));
            })(window);
        },
        function(t, e, n) {
            var o, s;
            !(function() {
                var n = {
                        actionexcutes: [],
                        init: function() {
                            if (coolsite360.PlayerPlugins.length)
                                for (
                                    var t = 0;
                                    t < coolsite360.PlayerPlugins.length;
                                    t++
                                ) {
                                    var e = coolsite360.PlayerPlugins[t];
                                    "actionexecute" == e.type
                                        ? (coolsite_play.util.PluginManage.actionexcutes[
                                              e.config.type
                                          ] = e)
                                        : "wx" == e.type
                                            ? _cs.wx_register(e)
                                            : e.onInit && e.onInit();
                                }
                        }
                    },
                    r = {
                        init: function() {
                            (coolsite_play.util.PluginManage = n),
                                (coolsite_play.util.action = {
                                    generate: function() {
                                        coolsite_play.doc
                                            .find("[data-c_act_id]")
                                            .each(function() {
                                                var t = this,
                                                    e = $(this).attr(
                                                        "data-c_act_id"
                                                    ),
                                                    n = String(e).split("|");
                                                for (i = 0; i < n.length; i++)
                                                    coolsite_play.actionlist.each(
                                                        function(e) {
                                                            if (e.id == n[i]) {
                                                                e.getType();
                                                                if (e.hasEl) {
                                                                    var o = $.extend(
                                                                        !0,
                                                                        {},
                                                                        e.toJSON()
                                                                    );
                                                                    delete o.id,
                                                                        coolsite_play.actionlist.add(
                                                                            o
                                                                        );
                                                                    var s = coolsite_play.actionlist.last();
                                                                    s.iview.setElement(
                                                                        t
                                                                    ),
                                                                        (s.hasEl = !0),
                                                                        e.siblingIds ||
                                                                            ((e.isSibling = !0),
                                                                            (e.siblingIndex = 0),
                                                                            (e.siblingIds = [])),
                                                                        0 ==
                                                                            e.getType() &&
                                                                            s.iview.$el.addClass(
                                                                                "c-action-click"
                                                                            ),
                                                                        e.siblingIds.push(
                                                                            s.id
                                                                        ),
                                                                        (s.isSibling = !0),
                                                                        (s.siblingIndex =
                                                                            e.siblingIds.length);
                                                                } else
                                                                    e.iview.setElement(
                                                                        t
                                                                    ),
                                                                        0 ==
                                                                            e.getType() &&
                                                                            e.iview.$el.addClass(
                                                                                "c-action-click"
                                                                            ),
                                                                        (e.hasEl = !0);
                                                            }
                                                        }
                                                    );
                                            });
                                    }
                                }),
                                (coolsite_play.util.animation = {
                                    generate: function() {
                                        coolsite_play.doc
                                            .find("[data-c_ani_id]")
                                            .each(function() {
                                                var t = this,
                                                    e = $(this).attr(
                                                        "data-c_ani_id"
                                                    ),
                                                    n = String(e).split("|");
                                                for (i = 0; i < n.length; i++)
                                                    coolsite_play.animationlist.each(
                                                        function(e) {
                                                            if (e.id == n[i])
                                                                if (e.hasEl) {
                                                                    var o = $.extend(
                                                                        !0,
                                                                        {},
                                                                        e.toJSON()
                                                                    );
                                                                    delete o.id,
                                                                        coolsite_play.animationlist.add(
                                                                            o
                                                                        );
                                                                    var s = coolsite_play.animationlist.last();
                                                                    s.iview.setElement(
                                                                        t
                                                                    ),
                                                                        s.iview.stashStyle(),
                                                                        (s.hasEl = !0),
                                                                        e.siblingIds ||
                                                                            (e.siblingIds = []),
                                                                        e.siblingIds.push(
                                                                            s.id
                                                                        );
                                                                } else
                                                                    e.iview.setElement(
                                                                        t
                                                                    ),
                                                                        e.iview.stashStyle(),
                                                                        (e.hasEl = !0);
                                                        }
                                                    );
                                            });
                                    }
                                }),
                                (coolsite_play.util.timeline = {
                                    generate: function() {
                                        coolsite_play.doc
                                            .find("[data-c_tl_id]")
                                            .each(function() {
                                                var t = $(this).attr(
                                                        "data-c_tl_id"
                                                    ),
                                                    e = this,
                                                    n = String(t).split("|");
                                                for (i = 0; i < n.length; i++)
                                                    coolsite_play.timelinelist.each(
                                                        function(t) {
                                                            t.id == n[i] &&
                                                                t.iview.setElement(
                                                                    e
                                                                );
                                                        }
                                                    );
                                            });
                                    },
                                    createTimeline: function(t) {
                                        var e = _g.timeline.create(t);
                                        return e;
                                    },
                                    stopAll: function() {
                                        coolsite_play.timelinelist.each(
                                            function(t) {
                                                t.stop();
                                            }
                                        );
                                    }
                                }),
                                (coolsite_play.util.video = {
                                    init: function() {
                                        _g.html5media.collect(
                                            document,
                                            "data-c_e_id"
                                        );
                                    },
                                    stopAll: function() {
                                        _g.html5media.stopAll();
                                    }
                                }),
                                (coolsite_play.slider = function(t, e) {
                                    var i = new _g.transition({
                                        containment: t,
                                        disableControlled: !(
                                            !coolsite_play.isPreview &&
                                            _g.device.mobile()
                                        ),
                                        duration: 500,
                                        repeat: !0,
                                        control: !(
                                            coolsite_play.isPreview ||
                                            !_g.device.mobile()
                                        ),
                                        interval: 1e3 * Number(e.ti),
                                        type: Number(e.type),
                                        autoplayAxis: "x",
                                        onStart: function(e, n) {
                                            i.setNavDots(t, n);
                                        },
                                        onEnd: function(e, n) {
                                            (i.currentIndex = n),
                                                i.refreshSlideClass(t, n),
                                                "undefined" !=
                                                    typeof coolsite_editor &&
                                                    coolsite_editor.currentSlider &&
                                                    coolsite_editor
                                                        .currentSlider
                                                        .transitionEnd &&
                                                    coolsite_editor.currentSlider.transitionEnd(
                                                        e,
                                                        n
                                                    );
                                            var o = $(t).data("sliderId");
                                            o &&
                                                (($slider = coolsite_play.sliderlist.get(
                                                    o
                                                )),
                                                $slider.onChangeTo(e, n));
                                        }
                                    });
                                    return (
                                        (i.clearSlideClass = function(t) {
                                            $(t)
                                                .children()
                                                .removeClass(
                                                    "c-transition-left"
                                                )
                                                .removeClass(
                                                    "c-transition-right"
                                                )
                                                .removeClass("c-transition-top")
                                                .removeClass(
                                                    "c-transition-bottom"
                                                );
                                        }),
                                        (i.refreshSlideClass = function(
                                            t,
                                            e,
                                            n
                                        ) {
                                            n || (n = -1), i.clearSlideClass(t);
                                            var o = $(t).children().length;
                                            if (n == -1)
                                                var s = "c-transition-right",
                                                    r = "c-transition-left";
                                            else
                                                var s = "c-transition-left",
                                                    r = "c-transition-right";
                                            $(t)
                                                .children()
                                                .each(function() {
                                                    var i = $(this).index();
                                                    i == e
                                                        ? ($(this).addClass(
                                                              "c-transition-current"
                                                          ),
                                                          $(this).prev().length
                                                              ? $(this)
                                                                    .prev()
                                                                    .addClass(r)
                                                              : o > 1 &&
                                                                ($(t)
                                                                    .last()
                                                                    .is(this) ||
                                                                    $(t)
                                                                        .last()
                                                                        .addClass(
                                                                            r
                                                                        )),
                                                          $(this).next().length
                                                              ? $(this)
                                                                    .next()
                                                                    .addClass(s)
                                                              : o > 1 &&
                                                                ($(t)
                                                                    .first()
                                                                    .is(this) ||
                                                                    $(t)
                                                                        .first()
                                                                        .addClass(
                                                                            s
                                                                        )))
                                                        : $(this).removeClass(
                                                              "c-transition-current"
                                                          );
                                                });
                                        }),
                                        (i.prepareNextClass = function(
                                            t,
                                            e,
                                            n
                                        ) {
                                            n || (n = -1), i.clearSlideClass(t);
                                            $(t).children().length;
                                            if (n == -1)
                                                var o = "c-transition-right";
                                            else var o = "c-transition-left";
                                            $(t)
                                                .children()
                                                .each(function() {
                                                    var t = $(this).index();
                                                    t == e &&
                                                        $(this).addClass(o);
                                                });
                                        }),
                                        (i.setNavDots = function(t, e) {
                                            var i = $(t)
                                                .parent()
                                                .children(".c-slider-nav")
                                                .children(".c-slider-nav-dot");
                                            i.removeClass("c-active"),
                                                i.eq(e).addClass("c-active");
                                        }),
                                        i
                                    );
                                }),
                                (coolsite_play.readCookie = function(t) {
                                    for (
                                        var e = t + "=",
                                            i = document.cookie.split(";"),
                                            n = 0;
                                        n < i.length;
                                        n++
                                    ) {
                                        for (var o = i[n]; " " == o.charAt(0); )
                                            o = o.substring(1, o.length);
                                        if (0 == o.indexOf(e))
                                            return o.substring(
                                                e.length,
                                                o.length
                                            );
                                    }
                                    return null;
                                }),
                                (coolsite_play.play = {
                                    start: function() {
                                        return (
                                            (coolsite_play.isPlay = !0),
                                            "undefined" != typeof c_data &&
                                                ((c_data.timelines =
                                                    c_data.timelines || []),
                                                (c_data.actions =
                                                    c_data.actions || []),
                                                (c_data.animations =
                                                    c_data.animations || []),
                                                (coolsite_play.doc = $("html")),
                                                c_data.timelines.length &&
                                                    coolsite_play.timelinelist.reset(
                                                        c_data.timelines,
                                                        { silent: !0 }
                                                    ),
                                                c_data.animations.length &&
                                                    coolsite_play.animationlist.reset(
                                                        c_data.animations,
                                                        { silent: !0 }
                                                    ),
                                                c_data.actions.length &&
                                                    coolsite_play.actionlist.reset(
                                                        c_data.actions,
                                                        { silent: !0 }
                                                    ),
                                                $("body").trigger("c_start"),
                                                coolsite_play.util.PluginManage.init(),
                                                coolsite_play.sliderlist.generate(),
                                                coolsite_play.util.timeline.generate(),
                                                coolsite_play.util
                                                    .cssanimation &&
                                                    coolsite_play.util.cssanimation.generate(),
                                                coolsite_play.util
                                                    .staggeranimation &&
                                                    coolsite_play.util.staggeranimation.generate(),
                                                coolsite_play.util.animation.generate(),
                                                coolsite_play.util.action.generate(),
                                                coolsite_play.util.canvasCirAni.init(),
                                                coolsite_play.events.scroll.init(),
                                                _g.device.mobile()
                                                    ? coolsite_play.events.touch.init()
                                                    : coolsite_play.events.mousewheel.init(),
                                                coolsite_play.events.scroll.bindHashScroll(),
                                                coolsite_play.events.dialog.init(),
                                                coolsite_play.events.html.init(),
                                                coolsite_play.util.video.init(),
                                                coolsite_play.events.form.init(),
                                                void (
                                                    _g.device.android() &&
                                                    $(
                                                        "body,.c-slider-mask"
                                                    ).css({
                                                        "touch-action":
                                                            "initial"
                                                    })
                                                ))
                                        );
                                    }
                                }),
                                (coolsite_play.isWindows = _g.device.windows());
                        }
                    };
                (o = []),
                    (s = function() {
                        return (
                            window._cs || (window._cs = {}),
                            (window._cs.util = r),
                            window._cs.util
                        );
                    }.apply(e, o)),
                    !(void 0 !== s && (t.exports = s));
            })(window);
        },
        function(t, e, i) {
            var n, o;
            !(function() {
                var i = {
                    init: function() {
                        coolsite_play.util.cssanimation = {
                            generate: function() {
                                var t = [],
                                    e = [],
                                    i = coolsite_play.util.cssanimation.findTimeline(
                                        t,
                                        e
                                    );
                                (t = i.timeline), (e = i.inBody);
                                for (var n = 0; n < t.length; n++) {
                                    var o = $(t[n]);
                                    "BODY" == o[0].tagName
                                        ? coolsite_play.util.cssanimation.addCssAni(
                                              e
                                          )
                                        : o.on("scrollIn", function(t) {
                                              if (
                                                  $(t.target).hasClass(
                                                      "c-slider"
                                                  ) ||
                                                  $(t.target).hasClass(
                                                      "c-section"
                                                  )
                                              ) {
                                                  var e = $(this);
                                                  if (e.hasClass("c-slider")) {
                                                      var i = e.find(
                                                          ".c-transition-current [data-c_cssani]"
                                                      );
                                                      coolsite_play.util.cssanimation.addCssAni(
                                                          i
                                                      ),
                                                          e
                                                              .find(".c-slide")
                                                              .each(function() {
                                                                  $(this).on(
                                                                      "changeTo",
                                                                      function() {
                                                                          var t = $(
                                                                                  this
                                                                              ),
                                                                              e = t.find(
                                                                                  "[data-c_cssani]"
                                                                              );
                                                                          coolsite_play.util.cssanimation.addCssAni(
                                                                              e,
                                                                              ".c-slide",
                                                                              t
                                                                          );
                                                                      }
                                                                  );
                                                              });
                                                  } else {
                                                      var n = e.find(
                                                          "[data-c_cssani]"
                                                      );
                                                      coolsite_play.util.cssanimation.addCssAni(
                                                          n,
                                                          ".c-section",
                                                          e
                                                      );
                                                  }
                                              }
                                          });
                                }
                            },
                            findTimeline: function(t, e) {
                                var i = coolsite_play.doc.find(
                                    "[data-c_cssani]"
                                );
                                return (
                                    _.each(i, function(i) {
                                        var n =
                                            $(i).parents(
                                                ".c-section,.c-slider"
                                            )[0] || $("body");
                                        t.indexOf(n) == -1 && t.push(n),
                                            $(i).parents(".c-section")[0] ||
                                                $(i).parents(".c-slider")[0] ||
                                                !e ||
                                                e.push(i);
                                    }),
                                    { timeline: t, inBody: e }
                                );
                            },
                            addCssAni: function(t, e, i) {
                                _.each(t, function(t) {
                                    if (
                                        !e ||
                                        !i ||
                                        $(t).parents(e)[0] == i[0]
                                    ) {
                                        var n = $(t)
                                                .attr("data-c_cssani")
                                                .split("|"),
                                            o = n[0],
                                            s = n[1],
                                            r = n[2],
                                            a = "1" == n[3] ? "infinite" : 1;
                                        $(t).hasClass("cf-initHide") &&
                                            $(t).removeClass("cf-initHide"),
                                            $(t)
                                                .css({
                                                    "animation-delay":
                                                        parseFloat(r) + "s",
                                                    "animation-duration":
                                                        parseFloat(s) + "s",
                                                    "animation-iteration-count": a
                                                })
                                                .addClass(o + " animated")
                                                .one(
                                                    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                                                    function() {
                                                        $(t)
                                                            .css({
                                                                "animation-delay":
                                                                    "0s",
                                                                "animation-duration":
                                                                    "0s"
                                                            })
                                                            .removeClass(
                                                                o + " animated"
                                                            );
                                                    }
                                                );
                                    }
                                });
                            },
                            removeAllViews: function() {
                                var t = [];
                                (t = coolsite_play.util.cssanimation.findTimeline(
                                    t
                                ).timeline),
                                    _.each(t, function(t) {
                                        $(t).off("scrollIn"),
                                            $(t).hasClass("c-slider") &&
                                                $(t)
                                                    .find(".c-slide")
                                                    .off("changeTo");
                                    });
                            }
                        };
                    }
                };
                (n = []),
                    (o = function() {
                        return (
                            window._cs || (window._cs = {}),
                            (window._cs.ani = i),
                            window._cs.ani
                        );
                    }.apply(e, n)),
                    !(void 0 !== o && (t.exports = o));
            })(window);
        },
        function(t, e, i) {
            var n, o;
            !(function() {
                var i = {
                    init: function() {
                        coolsite_play.util.staggeranimation = {
                            generate: function() {
                                var t = _.filter(
                                    coolsite_play.animationlist.models,
                                    function(t) {
                                        return (
                                            "stage" == t.toJSON().data.aniType
                                        );
                                    }
                                );
                                _.each(t, function(t) {
                                    var e = t.toJSON().data,
                                        i = e.selector,
                                        n = (e.stagger,
                                        _.find(
                                            coolsite_play.timelinelist.models,
                                            function(e) {
                                                var i = e.toJSON().animations;
                                                return i.indexOf(t.id) != -1;
                                            }
                                        ));
                                    if (n && i) {
                                        var o = coolsite_play.doc.find(
                                                "[data-c_tl_id=" + n.id + "]"
                                            ),
                                            s = o.find(i);
                                        (t.iview.$el = s), t.iview.stashStyle();
                                    }
                                });
                            },
                            removeAllViews: function() {}
                        };
                    }
                };
                (n = []),
                    (o = function() {
                        return (
                            window._cs || (window._cs = {}),
                            (window._cs.stagger = i),
                            window._cs.stagger
                        );
                    }.apply(e, n)),
                    !(void 0 !== o && (t.exports = o));
            })(window);
        },
        function(t, e, i) {
            var n, o;
            !(function() {
                var i = {
                    init: function() {
                        coolsite_play.util.refreshcontentlist = {
                            generate: function(t) {
                                t ||
                                    (t = coolsite_play.doc.find(
                                        ".c-contentlistviewv2"
                                    )),
                                    t.each(function() {
                                        var t = $(this),
                                            e = t.attr("ajaxload");
                                        t.find("nav a").each(function() {
                                            var i = $(this);
                                            i.off("click").on("click", function(
                                                n
                                            ) {
                                                if (e) {
                                                    n.preventDefault();
                                                    var o = i.attr("href");
                                                    $.ajax({
                                                        url: o,
                                                        type: "GET",
                                                        success: function(e) {
                                                            if (
                                                                (t.replaceWith(
                                                                    $(e)
                                                                ),
                                                                $(e).attr(
                                                                    "class"
                                                                ))
                                                            ) {
                                                                var i =
                                                                    "." +
                                                                    $(e)
                                                                        .attr(
                                                                            "class"
                                                                        )
                                                                        .replace(
                                                                            " ",
                                                                            "."
                                                                        );
                                                                coolsite_play.util.refreshcontentlist.generate(
                                                                    $(i)
                                                                );
                                                            }
                                                        }
                                                    });
                                                }
                                            });
                                        });
                                    });
                            }
                        };
                    }
                };
                (n = []),
                    (o = function() {
                        return (
                            window._cs || (window._cs = {}),
                            (window._cs.refreshcontentlist = i),
                            window._cs.refreshcontentlist
                        );
                    }.apply(e, n)),
                    !(void 0 !== o && (t.exports = o));
            })(window);
        },
        function(t, e, i) {
            function n(t, e, i) {
                return (
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = i),
                    t
                );
            }
            var o, s;
            !(function() {
                var i = {
                    init: function() {
                        (window.coolsite_play = {
                            model: n(
                                {
                                    animation: {},
                                    action: {},
                                    timeline: {},
                                    element: {}
                                },
                                "action",
                                {}
                            ),
                            view: n(
                                {
                                    animation: {},
                                    action: {},
                                    timeline: {},
                                    element: {}
                                },
                                "action",
                                {}
                            ),
                            controller: n(
                                {
                                    animation: {},
                                    action: {},
                                    timeline: {},
                                    element: {}
                                },
                                "action",
                                {}
                            ),
                            collection: {},
                            ui: {},
                            events: {},
                            util: {},
                            varible: {}
                        }),
                            (coolsite_play.isPreview = !1),
                            (coolsite_play.scrollItems = []),
                            (coolsite_play.sectionItems = []),
                            (coolsite_play.currentActiveIndex = null),
                            (coolsite_play.isSectionSwitching = null),
                            (coolsite_play.isSectionLock = null),
                            (coolsite_play.animationCommonArgs = {
                                de: 0,
                                du: 1,
                                rp: 0,
                                rv: 0,
                                st: 1,
                                es: 0,
                                wa: 0
                            }),
                            (coolsite_play.animationArgs = {
                                1: { di: 0, dt: 0, dl: 0 },
                                2: { di: 0, dt: 0, dl: 0 },
                                3: {},
                                4: {},
                                7: { deg: 0, ax: 0 },
                                8: { op: 100 },
                                9: { sc: 1 },
                                10: { sc: 2, op: 50 },
                                11: { startx: 0, starty: 0, endx: 0, endy: 100 }
                            }),
                            (coolsite_play.easeType = {
                                0: "Linear.easeNone",
                                1: "Power0.easeIn",
                                2: "Power0.easeInOut",
                                3: "Power0.easeOut",
                                4: "Power1.easeIn",
                                5: "Power1.easeInOut",
                                6: "Power1.easeOut",
                                7: "Power2.easeIn",
                                8: "Power2.easeInOut",
                                9: "Power2.easeOut",
                                10: "Power3.easeIn",
                                11: "Power3.easeInOut",
                                12: "Power3.easeOut",
                                13: "Power4.easeIn",
                                14: "Power4.easeInOut",
                                15: "Power4.easeOut",
                                16: "Quad.easeIn",
                                17: "Quad.easeInOut",
                                18: "Quad.easeOut",
                                19: "Cubic.easeIn",
                                20: "Cubic.easeInOut",
                                21: "Cubic.easeOut",
                                22: "Quart.easeIn",
                                23: "Quart.easeInOut",
                                24: "Quart.easeOut",
                                25: "Quint.easeIn",
                                26: "Quint.easeInOut",
                                27: "Quint.easeOut",
                                28: "Strong.easeIn",
                                29: "Strong.easeInOut",
                                30: "Strong.easeOut",
                                31: "Back.easeIn",
                                32: "Back.easeInOut",
                                33: "Back.easeOut",
                                34: "Bounce.easeIn",
                                35: "Bounce.easeInOut",
                                36: "Bounce.easeOut",
                                37: "Circ.easeIn",
                                38: "Circ.easeInOut",
                                39: "Circ.easeOut",
                                40: "Elastic.easeIn",
                                41: "Elastic.easeInOut",
                                42: "Elastic.easeOut",
                                43: "Expo.easeIn",
                                44: "Expo.easeInOut",
                                45: "Expo.easeOut",
                                46: "Sine.easeIn",
                                47: "Sine.easeInOut",
                                48: "Sine.easeOut",
                                49: "SlowMo.ease"
                            }),
                            (coolsite_play.elementReference = {
                                "c-section": "section",
                                "c-container": "container",
                                "c-image": "image",
                                "c-slider": "slider",
                                "c-button": "button",
                                "c-row": "row",
                                "c-column": "column",
                                "c-paragraph": "c-paragraph",
                                "c-heading": "heading",
                                "c-div": "div",
                                "c-list": "list",
                                "c-listitem": "listitem",
                                "c-textblock": "textblock",
                                "c-slidermask": "slidermask",
                                "c-slide": "slide",
                                "c-linkblock": "lineblock",
                                "c-textlink": "textlink",
                                "c-leftarrow": "leftarrow",
                                "c-rightarrow": "rightarrow",
                                "c-icon": "icon",
                                "c-slidernav": "slidernav",
                                "c-slidernavdot": "slidernavdot"
                            }),
                            (coolsite_play.elementState = {
                                state1: "c-state1",
                                state2: "c-state2",
                                state3: "c-state3"
                            });
                    },
                    start: function(t) {
                        (coolsite_play.animationlist = new coolsite_play.collection.animation()),
                            (coolsite_play.timelinelist = new coolsite_play.collection.timeline()),
                            (coolsite_play.sliderlist = new coolsite_play.collection.slider()),
                            (coolsite_play.actionlist = new coolsite_play.collection.action());
                    }
                };
                (o = []),
                    (s = function() {
                        return (
                            window._cs || (window._cs = {}),
                            (window._cs.variable = i),
                            window._cs.variable
                        );
                    }.apply(e, o)),
                    !(void 0 !== s && (t.exports = s));
            })(window);
        },
        function(t, e, i) {
            var n,
                o,
                s,
                n,
                r,
                o,
                n,
                a,
                o,
                l,
                o,
                c,
                o,
                n,
                u,
                o,
                d,
                o,
                n,
                h,
                o,
                n,
                p,
                n,
                o,
                s,
                f =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function(t) {
                              return typeof t;
                          }
                        : function(t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }; /*!
	 * Masonry PACKAGED v3.2.1
	 * Cascading grid layout library
	 * http://masonry.desandro.com
	 * MIT License
	 * by David DeSandro
	 */
            !(function(r) {
                function a() {}
                function l(t) {
                    function e(e) {
                        e.prototype.option ||
                            (e.prototype.option = function(e) {
                                t.isPlainObject(e) &&
                                    (this.options = t.extend(
                                        !0,
                                        this.options,
                                        e
                                    ));
                            });
                    }
                    function i(e, i) {
                        t.fn[e] = function(o) {
                            if ("string" == typeof o) {
                                for (
                                    var s = c.call(arguments, 1),
                                        r = 0,
                                        a = this.length;
                                    a > r;
                                    r++
                                ) {
                                    var l = this[r],
                                        u = t.data(l, e);
                                    if (u)
                                        if (
                                            t.isFunction(u[o]) &&
                                            "_" !== o.charAt(0)
                                        ) {
                                            var d = u[o].apply(u, s);
                                            if (void 0 !== d) return d;
                                        } else
                                            n(
                                                "no such method '" +
                                                    o +
                                                    "' for " +
                                                    e +
                                                    " instance"
                                            );
                                    else
                                        n(
                                            "cannot call methods on " +
                                                e +
                                                " prior to initialization; attempted to call '" +
                                                o +
                                                "'"
                                        );
                                }
                                return this;
                            }
                            return this.each(function() {
                                var n = t.data(this, e);
                                n
                                    ? (n.option(o), n._init())
                                    : ((n = new i(this, o)),
                                      t.data(this, e, n));
                            });
                        };
                    }
                    if (t) {
                        var n =
                            "undefined" == typeof console
                                ? a
                                : function(t) {
                                      console.error(t);
                                  };
                        return (
                            (t.bridget = function(t, n) {
                                e(n), i(t, n);
                            }),
                            t.bridget
                        );
                    }
                }
                var c = Array.prototype.slice;
                (o = [i(9)]),
                    (n = l),
                    (s = "function" == typeof n ? n.apply(e, o) : n),
                    !(void 0 !== s && (t.exports = s));
            })(window),
                (function(o) {
                    function s(t) {
                        var e = o.event;
                        return (e.target = e.target || e.srcElement || t), e;
                    }
                    var a = document.documentElement,
                        l = function() {};
                    a.addEventListener
                        ? (l = function(t, e, i) {
                              t.addEventListener(e, i, !1);
                          })
                        : a.attachEvent &&
                          (l = function(t, e, i) {
                              (t[e + i] = i.handleEvent
                                  ? function() {
                                        var e = s(t);
                                        i.handleEvent.call(i, e);
                                    }
                                  : function() {
                                        var e = s(t);
                                        i.call(t, e);
                                    }),
                                  t.attachEvent("on" + e, t[e + i]);
                          });
                    var c = function() {};
                    a.removeEventListener
                        ? (c = function(t, e, i) {
                              t.removeEventListener(e, i, !1);
                          })
                        : a.detachEvent &&
                          (c = function(t, e, i) {
                              t.detachEvent("on" + e, t[e + i]);
                              try {
                                  delete t[e + i];
                              } catch (n) {
                                  t[e + i] = void 0;
                              }
                          });
                    var u = { bind: l, unbind: c };
                    (n = u),
                        !(r = "function" == typeof n ? n.call(e, i, e, t) : n);
                })(void 0),
                (function(t) {
                    function i(t) {
                        "function" == typeof t && (i.isReady ? t() : d.push(t));
                    }
                    function s(t) {
                        var e =
                            "readystatechange" === t.type &&
                            "complete" !== u.readyState;
                        i.isReady || e || l();
                    }
                    function l() {
                        i.isReady = !0;
                        for (var t = 0, e = d.length; e > t; t++) {
                            var n = d[t];
                            n();
                        }
                    }
                    function c(e) {
                        return (
                            "complete" === u.readyState
                                ? l()
                                : (e.bind(u, "DOMContentLoaded", s),
                                  e.bind(u, "readystatechange", s),
                                  e.bind(t, "load", s)),
                            i
                        );
                    }
                    var u = t.document,
                        d = [];
                    (i.isReady = !1),
                        (o = [r]),
                        (n = c),
                        !(a = "function" == typeof n ? n.apply(e, o) : n);
                })(window),
                function() {
                    function t() {}
                    function i(t, e) {
                        for (var i = t.length; i--; )
                            if (t[i].listener === e) return i;
                        return -1;
                    }
                    function n(t) {
                        return function() {
                            return this[t].apply(this, arguments);
                        };
                    }
                    var s = t.prototype,
                        r = this,
                        a = r.EventEmitter;
                    (s.getListeners = function(t) {
                        var e,
                            i,
                            n = this._getEvents();
                        if (t instanceof RegExp) {
                            e = {};
                            for (i in n)
                                n.hasOwnProperty(i) &&
                                    t.test(i) &&
                                    (e[i] = n[i]);
                        } else e = n[t] || (n[t] = []);
                        return e;
                    }),
                        (s.flattenListeners = function(t) {
                            var e,
                                i = [];
                            for (e = 0; e < t.length; e += 1)
                                i.push(t[e].listener);
                            return i;
                        }),
                        (s.getListenersAsObject = function(t) {
                            var e,
                                i = this.getListeners(t);
                            return (
                                i instanceof Array && ((e = {}), (e[t] = i)),
                                e || i
                            );
                        }),
                        (s.addListener = function(t, e) {
                            var n,
                                o = this.getListenersAsObject(t),
                                s =
                                    "object" ==
                                    ("undefined" == typeof e
                                        ? "undefined"
                                        : f(e));
                            for (n in o)
                                o.hasOwnProperty(n) &&
                                    -1 === i(o[n], e) &&
                                    o[n].push(
                                        s ? e : { listener: e, once: !1 }
                                    );
                            return this;
                        }),
                        (s.on = n("addListener")),
                        (s.addOnceListener = function(t, e) {
                            return this.addListener(t, {
                                listener: e,
                                once: !0
                            });
                        }),
                        (s.once = n("addOnceListener")),
                        (s.defineEvent = function(t) {
                            return this.getListeners(t), this;
                        }),
                        (s.defineEvents = function(t) {
                            for (var e = 0; e < t.length; e += 1)
                                this.defineEvent(t[e]);
                            return this;
                        }),
                        (s.removeListener = function(t, e) {
                            var n,
                                o,
                                s = this.getListenersAsObject(t);
                            for (o in s)
                                s.hasOwnProperty(o) &&
                                    ((n = i(s[o], e)),
                                    -1 !== n && s[o].splice(n, 1));
                            return this;
                        }),
                        (s.off = n("removeListener")),
                        (s.addListeners = function(t, e) {
                            return this.manipulateListeners(!1, t, e);
                        }),
                        (s.removeListeners = function(t, e) {
                            return this.manipulateListeners(!0, t, e);
                        }),
                        (s.manipulateListeners = function(t, e, i) {
                            var n,
                                o,
                                s = t ? this.removeListener : this.addListener,
                                r = t
                                    ? this.removeListeners
                                    : this.addListeners;
                            if (
                                "object" !=
                                    ("undefined" == typeof e
                                        ? "undefined"
                                        : f(e)) ||
                                e instanceof RegExp
                            )
                                for (n = i.length; n--; ) s.call(this, e, i[n]);
                            else
                                for (n in e)
                                    e.hasOwnProperty(n) &&
                                        (o = e[n]) &&
                                        ("function" == typeof o
                                            ? s.call(this, n, o)
                                            : r.call(this, n, o));
                            return this;
                        }),
                        (s.removeEvent = function(t) {
                            var e,
                                i =
                                    "undefined" == typeof t
                                        ? "undefined"
                                        : f(t),
                                n = this._getEvents();
                            if ("string" === i) delete n[t];
                            else if (t instanceof RegExp)
                                for (e in n)
                                    n.hasOwnProperty(e) &&
                                        t.test(e) &&
                                        delete n[e];
                            else delete this._events;
                            return this;
                        }),
                        (s.removeAllListeners = n("removeEvent")),
                        (s.emitEvent = function(t, e) {
                            var i,
                                n,
                                o,
                                s,
                                r = this.getListenersAsObject(t);
                            for (o in r)
                                if (r.hasOwnProperty(o))
                                    for (n = r[o].length; n--; )
                                        (i = r[o][n]),
                                            i.once === !0 &&
                                                this.removeListener(
                                                    t,
                                                    i.listener
                                                ),
                                            (s = i.listener.apply(
                                                this,
                                                e || []
                                            )),
                                            s === this._getOnceReturnValue() &&
                                                this.removeListener(
                                                    t,
                                                    i.listener
                                                );
                            return this;
                        }),
                        (s.trigger = n("emitEvent")),
                        (s.emit = function(t) {
                            var e = Array.prototype.slice.call(arguments, 1);
                            return this.emitEvent(t, e);
                        }),
                        (s.setOnceReturnValue = function(t) {
                            return (this._onceReturnValue = t), this;
                        }),
                        (s._getOnceReturnValue = function() {
                            return (
                                !this.hasOwnProperty("_onceReturnValue") ||
                                this._onceReturnValue
                            );
                        }),
                        (s._getEvents = function() {
                            return this._events || (this._events = {});
                        }),
                        (t.noConflict = function() {
                            return (r.EventEmitter = a), t;
                        }),
                        (o = []),
                        !(l = function() {
                            return t;
                        }.apply(e, o));
                }.call(void 0),
                (function(t) {
                    function i(t) {
                        if (t) {
                            if ("string" == typeof s[t]) return t;
                            t = t.charAt(0).toUpperCase() + t.slice(1);
                            for (var e, i = 0, o = n.length; o > i; i++)
                                if (((e = n[i] + t), "string" == typeof s[e]))
                                    return e;
                        }
                    }
                    var n = "Webkit Moz ms Ms O".split(" "),
                        s = document.documentElement.style;
                    (o = []),
                        !(c = function() {
                            return i;
                        }.apply(e, o));
                })(window),
                (function(t) {
                    function i(t) {
                        var e = parseFloat(t),
                            i = -1 === t.indexOf("%") && !isNaN(e);
                        return i && e;
                    }
                    function s() {}
                    function r() {
                        for (
                            var t = {
                                    width: 0,
                                    height: 0,
                                    innerWidth: 0,
                                    innerHeight: 0,
                                    outerWidth: 0,
                                    outerHeight: 0
                                },
                                e = 0,
                                i = d.length;
                            i > e;
                            e++
                        ) {
                            var n = d[e];
                            t[n] = 0;
                        }
                        return t;
                    }
                    function a(e) {
                        function n() {
                            if (!h) {
                                h = !0;
                                var n = t.getComputedStyle;
                                if (
                                    ((a = (function() {
                                        var t = n
                                            ? function(t) {
                                                  return n(t, null);
                                              }
                                            : function(t) {
                                                  return t.currentStyle;
                                              };
                                        return function(e) {
                                            var i = t(e);
                                            return (
                                                i ||
                                                    l(
                                                        "Style returned " +
                                                            i +
                                                            ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
                                                    ),
                                                i
                                            );
                                        };
                                    })()),
                                    (c = e("boxSizing")))
                                ) {
                                    var o = document.createElement("div");
                                    (o.style.width = "200px"),
                                        (o.style.padding = "1px 2px 3px 4px"),
                                        (o.style.borderStyle = "solid"),
                                        (o.style.borderWidth =
                                            "1px 2px 3px 4px"),
                                        (o.style[c] = "border-box");
                                    var s =
                                        document.body ||
                                        document.documentElement;
                                    s.appendChild(o);
                                    var r = a(o);
                                    (u = 200 === i(r.width)), s.removeChild(o);
                                }
                            }
                        }
                        function o(t) {
                            if (
                                (n(),
                                "string" == typeof t &&
                                    (t = document.querySelector(t)),
                                t &&
                                    "object" ==
                                        ("undefined" == typeof t
                                            ? "undefined"
                                            : f(t)) &&
                                    t.nodeType)
                            ) {
                                var e = a(t);
                                if ("none" === e.display) return r();
                                var o = {};
                                (o.width = t.offsetWidth),
                                    (o.height = t.offsetHeight);
                                for (
                                    var l = (o.isBorderBox = !(
                                            !c ||
                                            !e[c] ||
                                            "border-box" !== e[c]
                                        )),
                                        h = 0,
                                        p = d.length;
                                    p > h;
                                    h++
                                ) {
                                    var m = d[h],
                                        g = e[m];
                                    g = s(t, g);
                                    var v = parseFloat(g);
                                    o[m] = isNaN(v) ? 0 : v;
                                }
                                var y = o.paddingLeft + o.paddingRight,
                                    _ = o.paddingTop + o.paddingBottom,
                                    w = o.marginLeft + o.marginRight,
                                    b = o.marginTop + o.marginBottom,
                                    x = o.borderLeftWidth + o.borderRightWidth,
                                    $ = o.borderTopWidth + o.borderBottomWidth,
                                    C = l && u,
                                    I = i(e.width);
                                I !== !1 && (o.width = I + (C ? 0 : y + x));
                                var S = i(e.height);
                                return (
                                    S !== !1 &&
                                        (o.height = S + (C ? 0 : _ + $)),
                                    (o.innerWidth = o.width - (y + x)),
                                    (o.innerHeight = o.height - (_ + $)),
                                    (o.outerWidth = o.width + w),
                                    (o.outerHeight = o.height + b),
                                    o
                                );
                            }
                        }
                        function s(e, i) {
                            if (t.getComputedStyle || -1 === i.indexOf("%"))
                                return i;
                            var n = e.style,
                                o = n.left,
                                s = e.runtimeStyle,
                                r = s && s.left;
                            return (
                                r && (s.left = e.currentStyle.left),
                                (n.left = i),
                                (i = n.pixelLeft),
                                (n.left = o),
                                r && (s.left = r),
                                i
                            );
                        }
                        var a,
                            c,
                            u,
                            h = !1;
                        return o;
                    }
                    var l =
                            "undefined" == typeof console
                                ? s
                                : function(t) {
                                      console.error(t);
                                  },
                        d = [
                            "paddingLeft",
                            "paddingRight",
                            "paddingTop",
                            "paddingBottom",
                            "marginLeft",
                            "marginRight",
                            "marginTop",
                            "marginBottom",
                            "borderLeftWidth",
                            "borderRightWidth",
                            "borderTopWidth",
                            "borderBottomWidth"
                        ];
                    (o = [c]),
                        (n = a),
                        !(u = "function" == typeof n ? n.apply(e, o) : n);
                })(window),
                (function(t) {
                    function i(t, e) {
                        return t[l](e);
                    }
                    function n(t) {
                        if (!t.parentNode) {
                            var e = document.createDocumentFragment();
                            e.appendChild(t);
                        }
                    }
                    function s(t, e) {
                        n(t);
                        for (
                            var i = t.parentNode.querySelectorAll(e),
                                o = 0,
                                s = i.length;
                            s > o;
                            o++
                        )
                            if (i[o] === t) return !0;
                        return !1;
                    }
                    function r(t, e) {
                        return n(t), i(t, e);
                    }
                    var a,
                        l = (function() {
                            if (t.matchesSelector) return "matchesSelector";
                            for (
                                var e = ["webkit", "moz", "ms", "o"],
                                    i = 0,
                                    n = e.length;
                                n > i;
                                i++
                            ) {
                                var o = e[i],
                                    s = o + "MatchesSelector";
                                if (t[s]) return s;
                            }
                        })();
                    if (l) {
                        var c = document.createElement("div"),
                            u = i(c, "div");
                        a = u ? i : r;
                    } else a = s;
                    (o = []),
                        !(d = function() {
                            return a;
                        }.apply(e, o));
                })(Element.prototype),
                (function(t) {
                    function i(t, e) {
                        for (var i in e) t[i] = e[i];
                        return t;
                    }
                    function s(t) {
                        for (var e in t) return !1;
                        return (e = null), !0;
                    }
                    function r(t) {
                        return t.replace(/([A-Z])/g, function(t) {
                            return "-" + t.toLowerCase();
                        });
                    }
                    function a(t, e, n) {
                        function o(t, e) {
                            t &&
                                ((this.element = t),
                                (this.layout = e),
                                (this.position = { x: 0, y: 0 }),
                                this._create());
                        }
                        var a = n("transition"),
                            l = n("transform"),
                            c = a && l,
                            u = !!n("perspective"),
                            d = {
                                WebkitTransition: "webkitTransitionEnd",
                                MozTransition: "transitionend",
                                OTransition: "otransitionend",
                                transition: "transitionend"
                            }[a],
                            h = [
                                "transform",
                                "transition",
                                "transitionDuration",
                                "transitionProperty"
                            ],
                            f = (function() {
                                for (
                                    var t = {}, e = 0, i = h.length;
                                    i > e;
                                    e++
                                ) {
                                    var o = h[e],
                                        s = n(o);
                                    s && s !== o && (t[o] = s);
                                }
                                return t;
                            })();
                        i(o.prototype, t.prototype),
                            (o.prototype._create = function() {
                                (this._transn = {
                                    ingProperties: {},
                                    clean: {},
                                    onEnd: {}
                                }),
                                    this.css({ position: "absolute" });
                            }),
                            (o.prototype.handleEvent = function(t) {
                                var e = "on" + t.type;
                                this[e] && this[e](t);
                            }),
                            (o.prototype.getSize = function() {
                                this.size = e(this.element);
                            }),
                            (o.prototype.css = function(t) {
                                var e = this.element.style;
                                for (var i in t) {
                                    var n = f[i] || i;
                                    e[n] = t[i];
                                }
                            }),
                            (o.prototype.getPosition = function() {
                                var t = p(this.element),
                                    e = this.layout.options,
                                    i = e.isOriginLeft,
                                    n = e.isOriginTop,
                                    o = parseInt(t[i ? "left" : "right"], 10),
                                    s = parseInt(t[n ? "top" : "bottom"], 10);
                                (o = isNaN(o) ? 0 : o), (s = isNaN(s) ? 0 : s);
                                var r = this.layout.size;
                                (o -= i ? r.paddingLeft : r.paddingRight),
                                    (s -= n ? r.paddingTop : r.paddingBottom),
                                    (this.position.x = o),
                                    (this.position.y = s);
                            }),
                            (o.prototype.layoutPosition = function() {
                                var t = this.layout.size,
                                    e = this.layout.options,
                                    i = {};
                                e.isOriginLeft
                                    ? ((i.left =
                                          this.position.x +
                                          t.paddingLeft +
                                          "px"),
                                      (i.right = ""))
                                    : ((i.right =
                                          this.position.x +
                                          t.paddingRight +
                                          "px"),
                                      (i.left = "")),
                                    e.isOriginTop
                                        ? ((i.top =
                                              this.position.y +
                                              t.paddingTop +
                                              "px"),
                                          (i.bottom = ""))
                                        : ((i.bottom =
                                              this.position.y +
                                              t.paddingBottom +
                                              "px"),
                                          (i.top = "")),
                                    this.css(i),
                                    this.emitEvent("layout", [this]);
                            });
                        var m = u
                            ? function(t, e) {
                                  return (
                                      "translate3d(" + t + "px, " + e + "px, 0)"
                                  );
                              }
                            : function(t, e) {
                                  return "translate(" + t + "px, " + e + "px)";
                              };
                        (o.prototype._transitionTo = function(t, e) {
                            this.getPosition();
                            var i = this.position.x,
                                n = this.position.y,
                                o = parseInt(t, 10),
                                s = parseInt(e, 10),
                                r =
                                    o === this.position.x &&
                                    s === this.position.y;
                            if (
                                (this.setPosition(t, e),
                                r && !this.isTransitioning)
                            )
                                return void this.layoutPosition();
                            var a = t - i,
                                l = e - n,
                                c = {},
                                u = this.layout.options;
                            (a = u.isOriginLeft ? a : -a),
                                (l = u.isOriginTop ? l : -l),
                                (c.transform = m(a, l)),
                                this.transition({
                                    to: c,
                                    onTransitionEnd: {
                                        transform: this.layoutPosition
                                    },
                                    isCleaning: !0
                                });
                        }),
                            (o.prototype.goTo = function(t, e) {
                                this.setPosition(t, e), this.layoutPosition();
                            }),
                            (o.prototype.moveTo = c
                                ? o.prototype._transitionTo
                                : o.prototype.goTo),
                            (o.prototype.setPosition = function(t, e) {
                                (this.position.x = parseInt(t, 10)),
                                    (this.position.y = parseInt(e, 10));
                            }),
                            (o.prototype._nonTransition = function(t) {
                                this.css(t.to),
                                    t.isCleaning && this._removeStyles(t.to);
                                for (var e in t.onTransitionEnd)
                                    t.onTransitionEnd[e].call(this);
                            }),
                            (o.prototype._transition = function(t) {
                                if (
                                    !parseFloat(
                                        this.layout.options.transitionDuration
                                    )
                                )
                                    return void this._nonTransition(t);
                                var e = this._transn;
                                for (var i in t.onTransitionEnd)
                                    e.onEnd[i] = t.onTransitionEnd[i];
                                for (i in t.to)
                                    (e.ingProperties[i] = !0),
                                        t.isCleaning && (e.clean[i] = !0);
                                if (t.from) {
                                    this.css(t.from);
                                    var n = this.element.offsetHeight;
                                    n = null;
                                }
                                this.enableTransition(t.to),
                                    this.css(t.to),
                                    (this.isTransitioning = !0);
                            });
                        var g = l && r(l) + ",opacity";
                        (o.prototype.enableTransition = function() {
                            this.isTransitioning ||
                                (this.css({
                                    transitionProperty: g,
                                    transitionDuration: this.layout.options
                                        .transitionDuration
                                }),
                                this.element.addEventListener(d, this, !1));
                        }),
                            (o.prototype.transition =
                                o.prototype[
                                    a ? "_transition" : "_nonTransition"
                                ]),
                            (o.prototype.onwebkitTransitionEnd = function(t) {
                                this.ontransitionend(t);
                            }),
                            (o.prototype.onotransitionend = function(t) {
                                this.ontransitionend(t);
                            });
                        var v = {
                            "-webkit-transform": "transform",
                            "-moz-transform": "transform",
                            "-o-transform": "transform"
                        };
                        (o.prototype.ontransitionend = function(t) {
                            if (t.target === this.element) {
                                var e = this._transn,
                                    i = v[t.propertyName] || t.propertyName;
                                if (
                                    (delete e.ingProperties[i],
                                    s(e.ingProperties) &&
                                        this.disableTransition(),
                                    i in e.clean &&
                                        ((this.element.style[t.propertyName] =
                                            ""),
                                        delete e.clean[i]),
                                    i in e.onEnd)
                                ) {
                                    var n = e.onEnd[i];
                                    n.call(this), delete e.onEnd[i];
                                }
                                this.emitEvent("transitionEnd", [this]);
                            }
                        }),
                            (o.prototype.disableTransition = function() {
                                this.removeTransitionStyles(),
                                    this.element.removeEventListener(
                                        d,
                                        this,
                                        !1
                                    ),
                                    (this.isTransitioning = !1);
                            }),
                            (o.prototype._removeStyles = function(t) {
                                var e = {};
                                for (var i in t) e[i] = "";
                                this.css(e);
                            });
                        var y = {
                            transitionProperty: "",
                            transitionDuration: ""
                        };
                        return (
                            (o.prototype.removeTransitionStyles = function() {
                                this.css(y);
                            }),
                            (o.prototype.removeElem = function() {
                                this.element.parentNode.removeChild(
                                    this.element
                                ),
                                    this.emitEvent("remove", [this]);
                            }),
                            (o.prototype.remove = function() {
                                if (
                                    !a ||
                                    !parseFloat(
                                        this.layout.options.transitionDuration
                                    )
                                )
                                    return void this.removeElem();
                                var t = this;
                                this.on("transitionEnd", function() {
                                    return t.removeElem(), !0;
                                }),
                                    this.hide();
                            }),
                            (o.prototype.reveal = function() {
                                delete this.isHidden, this.css({ display: "" });
                                var t = this.layout.options;
                                this.transition({
                                    from: t.hiddenStyle,
                                    to: t.visibleStyle,
                                    isCleaning: !0
                                });
                            }),
                            (o.prototype.hide = function() {
                                (this.isHidden = !0), this.css({ display: "" });
                                var t = this.layout.options;
                                this.transition({
                                    from: t.visibleStyle,
                                    to: t.hiddenStyle,
                                    isCleaning: !0,
                                    onTransitionEnd: {
                                        opacity: function() {
                                            this.isHidden &&
                                                this.css({ display: "none" });
                                        }
                                    }
                                });
                            }),
                            (o.prototype.destroy = function() {
                                this.css({
                                    position: "",
                                    left: "",
                                    right: "",
                                    top: "",
                                    bottom: "",
                                    transition: "",
                                    transform: ""
                                });
                            }),
                            o
                        );
                    }
                    var d = t.getComputedStyle,
                        p = d
                            ? function(t) {
                                  return d(t, null);
                              }
                            : function(t) {
                                  return t.currentStyle;
                              };
                    (o = [l, u, c]),
                        (n = a),
                        !(h = "function" == typeof n ? n.apply(e, o) : n);
                })(window),
                (function(t) {
                    function i(t, e) {
                        for (var i in e) t[i] = e[i];
                        return t;
                    }
                    function s(t) {
                        return "[object Array]" === x.call(t);
                    }
                    function c(t) {
                        var e = [];
                        if (s(t)) e = t;
                        else if (t && "number" == typeof t.length)
                            for (var i = 0, n = t.length; n > i; i++)
                                e.push(t[i]);
                        else e.push(t);
                        return e;
                    }
                    function m(t, e) {
                        var i = C(e, t);
                        -1 !== i && e.splice(i, 1);
                    }
                    function g(t) {
                        return t
                            .replace(/(.)([A-Z])/g, function(t, e, i) {
                                return e + "-" + i;
                            })
                            .toLowerCase();
                    }
                    function v(e, n, o, s, r, a) {
                        function l(t, e) {
                            if (
                                ("string" == typeof t &&
                                    (t = y.querySelector(t)),
                                !t || !$(t))
                            )
                                return void (
                                    _ &&
                                    _.error(
                                        "Bad " +
                                            this.constructor.namespace +
                                            " element: " +
                                            t
                                    )
                                );
                            (this.element = t),
                                (this.options = i(
                                    {},
                                    this.constructor.defaults
                                )),
                                this.option(e);
                            var n = ++u;
                            (this.element.outlayerGUID = n),
                                (d[n] = this),
                                this._create(),
                                this.options.isInitLayout && this.layout();
                        }
                        var u = 0,
                            d = {};
                        return (
                            (l.namespace = "outlayer"),
                            (l.Item = a),
                            (l.defaults = {
                                containerStyle: { position: "relative" },
                                isInitLayout: !0,
                                isOriginLeft: !0,
                                isOriginTop: !0,
                                isResizeBound: !0,
                                isResizingContainer: !0,
                                transitionDuration: "0.4s",
                                hiddenStyle: {
                                    opacity: 0,
                                    transform: "scale(0.001)"
                                },
                                visibleStyle: {
                                    opacity: 1,
                                    transform: "scale(1)"
                                }
                            }),
                            i(l.prototype, o.prototype),
                            (l.prototype.option = function(t) {
                                i(this.options, t);
                            }),
                            (l.prototype._create = function() {
                                this.reloadItems(),
                                    (this.stamps = []),
                                    this.stamp(this.options.stamp),
                                    i(
                                        this.element.style,
                                        this.options.containerStyle
                                    ),
                                    this.options.isResizeBound &&
                                        this.bindResize();
                            }),
                            (l.prototype.reloadItems = function() {
                                this.items = this._itemize(
                                    this.element.children
                                );
                            }),
                            (l.prototype._itemize = function(t) {
                                for (
                                    var e = this._filterFindItemElements(t),
                                        i = this.constructor.Item,
                                        n = [],
                                        o = 0,
                                        s = e.length;
                                    s > o;
                                    o++
                                ) {
                                    var r = e[o],
                                        a = new i(r, this);
                                    n.push(a);
                                }
                                return n;
                            }),
                            (l.prototype._filterFindItemElements = function(t) {
                                t = c(t);
                                for (
                                    var e = this.options.itemSelector,
                                        i = [],
                                        n = 0,
                                        o = t.length;
                                    o > n;
                                    n++
                                ) {
                                    var s = t[n];
                                    if ($(s))
                                        if (e) {
                                            r(s, e) && i.push(s);
                                            for (
                                                var a = s.querySelectorAll(e),
                                                    l = 0,
                                                    u = a.length;
                                                u > l;
                                                l++
                                            )
                                                i.push(a[l]);
                                        } else i.push(s);
                                }
                                return i;
                            }),
                            (l.prototype.getItemElements = function() {
                                for (
                                    var t = [], e = 0, i = this.items.length;
                                    i > e;
                                    e++
                                )
                                    t.push(this.items[e].element);
                                return t;
                            }),
                            (l.prototype.layout = function() {
                                this._resetLayout(), this._manageStamps();
                                var t =
                                    void 0 !== this.options.isLayoutInstant
                                        ? this.options.isLayoutInstant
                                        : !this._isLayoutInited;
                                this.layoutItems(this.items, t),
                                    (this._isLayoutInited = !0);
                            }),
                            (l.prototype._init = l.prototype.layout),
                            (l.prototype._resetLayout = function() {
                                this.getSize();
                            }),
                            (l.prototype.getSize = function() {
                                this.size = s(this.element);
                            }),
                            (l.prototype._getMeasurement = function(t, e) {
                                var i,
                                    n = this.options[t];
                                n
                                    ? ("string" == typeof n
                                          ? (i = this.element.querySelector(n))
                                          : $(n) && (i = n),
                                      (this[t] = i ? s(i)[e] : n))
                                    : (this[t] = 0);
                            }),
                            (l.prototype.layoutItems = function(t, e) {
                                (t = this._getItemsForLayout(t)),
                                    this._layoutItems(t, e),
                                    this._postLayout();
                            }),
                            (l.prototype._getItemsForLayout = function(t) {
                                for (
                                    var e = [], i = 0, n = t.length;
                                    n > i;
                                    i++
                                ) {
                                    var o = t[i];
                                    o.isIgnored || e.push(o);
                                }
                                return e;
                            }),
                            (l.prototype._layoutItems = function(t, e) {
                                function i() {
                                    n.emitEvent("layoutComplete", [n, t]);
                                }
                                var n = this;
                                if (!t || !t.length) return void i();
                                this._itemsOn(t, "layout", i);
                                for (
                                    var o = [], s = 0, r = t.length;
                                    r > s;
                                    s++
                                ) {
                                    var a = t[s],
                                        l = this._getItemLayoutPosition(a);
                                    (l.item = a),
                                        (l.isInstant = e || a.isLayoutInstant),
                                        o.push(l);
                                }
                                this._processLayoutQueue(o);
                            }),
                            (l.prototype._getItemLayoutPosition = function() {
                                return { x: 0, y: 0 };
                            }),
                            (l.prototype._processLayoutQueue = function(t) {
                                for (var e = 0, i = t.length; i > e; e++) {
                                    var n = t[e];
                                    this._positionItem(
                                        n.item,
                                        n.x,
                                        n.y,
                                        n.isInstant
                                    );
                                }
                            }),
                            (l.prototype._positionItem = function(t, e, i, n) {
                                n ? t.goTo(e, i) : t.moveTo(e, i);
                            }),
                            (l.prototype._postLayout = function() {
                                this.resizeContainer();
                            }),
                            (l.prototype.resizeContainer = function() {
                                if (this.options.isResizingContainer) {
                                    var t = this._getContainerSize();
                                    t &&
                                        (this._setContainerMeasure(t.width, !0),
                                        this._setContainerMeasure(
                                            t.height,
                                            !1
                                        ));
                                }
                            }),
                            (l.prototype._getContainerSize = b),
                            (l.prototype._setContainerMeasure = function(t, e) {
                                if (void 0 !== t) {
                                    var i = this.size;
                                    i.isBorderBox &&
                                        (t += e
                                            ? i.paddingLeft +
                                              i.paddingRight +
                                              i.borderLeftWidth +
                                              i.borderRightWidth
                                            : i.paddingBottom +
                                              i.paddingTop +
                                              i.borderTopWidth +
                                              i.borderBottomWidth),
                                        (t = Math.max(t, 0)),
                                        (this.element.style[
                                            e ? "width" : "height"
                                        ] =
                                            t + "px");
                                }
                            }),
                            (l.prototype._itemsOn = function(t, e, i) {
                                function n() {
                                    return o++, o === s && i.call(r), !0;
                                }
                                for (
                                    var o = 0,
                                        s = t.length,
                                        r = this,
                                        a = 0,
                                        l = t.length;
                                    l > a;
                                    a++
                                ) {
                                    var c = t[a];
                                    c.on(e, n);
                                }
                            }),
                            (l.prototype.ignore = function(t) {
                                var e = this.getItem(t);
                                e && (e.isIgnored = !0);
                            }),
                            (l.prototype.unignore = function(t) {
                                var e = this.getItem(t);
                                e && delete e.isIgnored;
                            }),
                            (l.prototype.stamp = function(t) {
                                if ((t = this._find(t))) {
                                    this.stamps = this.stamps.concat(t);
                                    for (var e = 0, i = t.length; i > e; e++) {
                                        var n = t[e];
                                        this.ignore(n);
                                    }
                                }
                            }),
                            (l.prototype.unstamp = function(t) {
                                if ((t = this._find(t)))
                                    for (var e = 0, i = t.length; i > e; e++) {
                                        var n = t[e];
                                        m(n, this.stamps), this.unignore(n);
                                    }
                            }),
                            (l.prototype._find = function(t) {
                                return t
                                    ? ("string" == typeof t &&
                                          (t = this.element.querySelectorAll(
                                              t
                                          )),
                                      (t = c(t)))
                                    : void 0;
                            }),
                            (l.prototype._manageStamps = function() {
                                if (this.stamps && this.stamps.length) {
                                    this._getBoundingRect();
                                    for (
                                        var t = 0, e = this.stamps.length;
                                        e > t;
                                        t++
                                    ) {
                                        var i = this.stamps[t];
                                        this._manageStamp(i);
                                    }
                                }
                            }),
                            (l.prototype._getBoundingRect = function() {
                                var t = this.element.getBoundingClientRect(),
                                    e = this.size;
                                this._boundingRect = {
                                    left:
                                        t.left +
                                        e.paddingLeft +
                                        e.borderLeftWidth,
                                    top:
                                        t.top + e.paddingTop + e.borderTopWidth,
                                    right:
                                        t.right -
                                        (e.paddingRight + e.borderRightWidth),
                                    bottom:
                                        t.bottom -
                                        (e.paddingBottom + e.borderBottomWidth)
                                };
                            }),
                            (l.prototype._manageStamp = b),
                            (l.prototype._getElementOffset = function(t) {
                                var e = t.getBoundingClientRect(),
                                    i = this._boundingRect,
                                    n = s(t),
                                    o = {
                                        left: e.left - i.left - n.marginLeft,
                                        top: e.top - i.top - n.marginTop,
                                        right:
                                            i.right - e.right - n.marginRight,
                                        bottom:
                                            i.bottom - e.bottom - n.marginBottom
                                    };
                                return o;
                            }),
                            (l.prototype.handleEvent = function(t) {
                                var e = "on" + t.type;
                                this[e] && this[e](t);
                            }),
                            (l.prototype.bindResize = function() {
                                this.isResizeBound ||
                                    (e.bind(t, "resize", this),
                                    (this.isResizeBound = !0));
                            }),
                            (l.prototype.unbindResize = function() {
                                this.isResizeBound &&
                                    e.unbind(t, "resize", this),
                                    (this.isResizeBound = !1);
                            }),
                            (l.prototype.onresize = function() {
                                function t() {
                                    e.resize(), delete e.resizeTimeout;
                                }
                                this.resizeTimeout &&
                                    clearTimeout(this.resizeTimeout);
                                var e = this;
                                this.resizeTimeout = setTimeout(t, 100);
                            }),
                            (l.prototype.resize = function() {
                                this.isResizeBound &&
                                    this.needsResizeLayout() &&
                                    this.layout();
                            }),
                            (l.prototype.needsResizeLayout = function() {
                                var t = s(this.element),
                                    e = this.size && t;
                                return (
                                    e && t.innerWidth !== this.size.innerWidth
                                );
                            }),
                            (l.prototype.addItems = function(t) {
                                var e = this._itemize(t);
                                return (
                                    e.length &&
                                        (this.items = this.items.concat(e)),
                                    e
                                );
                            }),
                            (l.prototype.appended = function(t) {
                                var e = this.addItems(t);
                                e.length &&
                                    (this.layoutItems(e, !0), this.reveal(e));
                            }),
                            (l.prototype.prepended = function(t) {
                                var e = this._itemize(t);
                                if (e.length) {
                                    var i = this.items.slice(0);
                                    (this.items = e.concat(i)),
                                        this._resetLayout(),
                                        this._manageStamps(),
                                        this.layoutItems(e, !0),
                                        this.reveal(e),
                                        this.layoutItems(i);
                                }
                            }),
                            (l.prototype.reveal = function(t) {
                                var e = t && t.length;
                                if (e)
                                    for (var i = 0; e > i; i++) {
                                        var n = t[i];
                                        n.reveal();
                                    }
                            }),
                            (l.prototype.hide = function(t) {
                                var e = t && t.length;
                                if (e)
                                    for (var i = 0; e > i; i++) {
                                        var n = t[i];
                                        n.hide();
                                    }
                            }),
                            (l.prototype.getItem = function(t) {
                                for (
                                    var e = 0, i = this.items.length;
                                    i > e;
                                    e++
                                ) {
                                    var n = this.items[e];
                                    if (n.element === t) return n;
                                }
                            }),
                            (l.prototype.getItems = function(t) {
                                if (t && t.length) {
                                    for (
                                        var e = [], i = 0, n = t.length;
                                        n > i;
                                        i++
                                    ) {
                                        var o = t[i],
                                            s = this.getItem(o);
                                        s && e.push(s);
                                    }
                                    return e;
                                }
                            }),
                            (l.prototype.remove = function(t) {
                                t = c(t);
                                var e = this.getItems(t);
                                if (e && e.length) {
                                    this._itemsOn(e, "remove", function() {
                                        this.emitEvent("removeComplete", [
                                            this,
                                            e
                                        ]);
                                    });
                                    for (var i = 0, n = e.length; n > i; i++) {
                                        var o = e[i];
                                        o.remove(), m(o, this.items);
                                    }
                                }
                            }),
                            (l.prototype.destroy = function() {
                                var t = this.element.style;
                                (t.height = ""),
                                    (t.position = ""),
                                    (t.width = "");
                                for (
                                    var e = 0, i = this.items.length;
                                    i > e;
                                    e++
                                ) {
                                    var n = this.items[e];
                                    n.destroy();
                                }
                                this.unbindResize();
                                var o = this.element.outlayerGUID;
                                delete d[o],
                                    delete this.element.outlayerGUID,
                                    w &&
                                        w.removeData(
                                            this.element,
                                            this.constructor.namespace
                                        );
                            }),
                            (l.data = function(t) {
                                var e = t && t.outlayerGUID;
                                return e && d[e];
                            }),
                            (l.create = function(t, e) {
                                function o() {
                                    l.apply(this, arguments);
                                }
                                return (
                                    Object.create
                                        ? (o.prototype = Object.create(
                                              l.prototype
                                          ))
                                        : i(o.prototype, l.prototype),
                                    (o.prototype.constructor = o),
                                    (o.defaults = i({}, l.defaults)),
                                    i(o.defaults, e),
                                    (o.prototype.settings = {}),
                                    (o.namespace = t),
                                    (o.data = l.data),
                                    (o.Item = function() {
                                        a.apply(this, arguments);
                                    }),
                                    (o.Item.prototype = new a()),
                                    n(function() {
                                        for (
                                            var e = g(t),
                                                i = y.querySelectorAll(
                                                    ".js-" + e
                                                ),
                                                n = "data-" + e + "-options",
                                                s = 0,
                                                r = i.length;
                                            r > s;
                                            s++
                                        ) {
                                            var a,
                                                l = i[s],
                                                c = l.getAttribute(n);
                                            try {
                                                a = c && JSON.parse(c);
                                            } catch (t) {
                                                _ &&
                                                    _.error(
                                                        "Error parsing " +
                                                            n +
                                                            " on " +
                                                            l.nodeName.toLowerCase() +
                                                            (l.id
                                                                ? "#" + l.id
                                                                : "") +
                                                            ": " +
                                                            t
                                                    );
                                                continue;
                                            }
                                            var u = new o(l, a);
                                            w && w.data(l, t, u);
                                        }
                                    }),
                                    w && w.bridget && w.bridget(t, o),
                                    o
                                );
                            }),
                            (l.Item = a),
                            l
                        );
                    }
                    var y = t.document,
                        _ = t.console,
                        w = t.jQuery,
                        b = function() {},
                        x = Object.prototype.toString,
                        $ =
                            "function" == typeof HTMLElement ||
                            "object" ==
                                ("undefined" == typeof HTMLElement
                                    ? "undefined"
                                    : f(HTMLElement))
                                ? function(t) {
                                      return t instanceof HTMLElement;
                                  }
                                : function(t) {
                                      return (
                                          t &&
                                          "object" ==
                                              ("undefined" == typeof t
                                                  ? "undefined"
                                                  : f(t)) &&
                                          1 === t.nodeType &&
                                          "string" == typeof t.nodeName
                                      );
                                  },
                        C = Array.prototype.indexOf
                            ? function(t, e) {
                                  return t.indexOf(e);
                              }
                            : function(t, e) {
                                  for (var i = 0, n = t.length; n > i; i++)
                                      if (t[i] === e) return i;
                                  return -1;
                              };
                    (o = [r, a, l, u, d, h]),
                        (n = v),
                        !(p = "function" == typeof n ? n.apply(e, o) : n);
                })(window),
                (function(i) {
                    function r(t, e) {
                        var i = t.create("masonry");
                        return (
                            (i.prototype._resetLayout = function() {
                                this.getSize(),
                                    this._getMeasurement(
                                        "columnWidth",
                                        "outerWidth"
                                    ),
                                    this._getMeasurement(
                                        "gutter",
                                        "outerWidth"
                                    ),
                                    this.measureColumns();
                                var t = this.cols;
                                for (this.colYs = []; t--; ) this.colYs.push(0);
                                this.maxY = 0;
                            }),
                            (i.prototype.measureColumns = function() {
                                if (
                                    (this.getContainerWidth(),
                                    !this.columnWidth)
                                ) {
                                    var t = this.items[0],
                                        i = t && t.element;
                                    this.columnWidth =
                                        (i && e(i).outerWidth) ||
                                        this.containerWidth;
                                }
                                (this.columnWidth += this.gutter),
                                    (this.cols = Math.floor(
                                        (this.containerWidth + this.gutter) /
                                            this.columnWidth
                                    )),
                                    (this.cols = Math.max(this.cols, 1));
                            }),
                            (i.prototype.getContainerWidth = function() {
                                var t = this.options.isFitWidth
                                        ? this.element.parentNode
                                        : this.element,
                                    i = e(t);
                                this.containerWidth = i && i.innerWidth;
                            }),
                            (i.prototype._getItemLayoutPosition = function(t) {
                                t.getSize();
                                var e = t.size.outerWidth % this.columnWidth,
                                    i = e && 1 > e ? "round" : "ceil",
                                    n = Math[i](
                                        t.size.outerWidth / this.columnWidth
                                    );
                                n = Math.min(n, this.cols);
                                for (
                                    var o = this._getColGroup(n),
                                        s = Math.min.apply(Math, o),
                                        r = a(o, s),
                                        l = { x: this.columnWidth * r, y: s },
                                        c = s + t.size.outerHeight,
                                        u = this.cols + 1 - o.length,
                                        d = 0;
                                    u > d;
                                    d++
                                )
                                    this.colYs[r + d] = c;
                                return l;
                            }),
                            (i.prototype._getColGroup = function(t) {
                                if (2 > t) return this.colYs;
                                for (
                                    var e = [], i = this.cols + 1 - t, n = 0;
                                    i > n;
                                    n++
                                ) {
                                    var o = this.colYs.slice(n, n + t);
                                    e[n] = Math.max.apply(Math, o);
                                }
                                return e;
                            }),
                            (i.prototype._manageStamp = function(t) {
                                var i = e(t),
                                    n = this._getElementOffset(t),
                                    o = this.options.isOriginLeft
                                        ? n.left
                                        : n.right,
                                    s = o + i.outerWidth,
                                    r = Math.floor(o / this.columnWidth);
                                r = Math.max(0, r);
                                var a = Math.floor(s / this.columnWidth);
                                (a -= s % this.columnWidth ? 0 : 1),
                                    (a = Math.min(this.cols - 1, a));
                                for (
                                    var l =
                                            (this.options.isOriginTop
                                                ? n.top
                                                : n.bottom) + i.outerHeight,
                                        c = r;
                                    a >= c;
                                    c++
                                )
                                    this.colYs[c] = Math.max(l, this.colYs[c]);
                            }),
                            (i.prototype._getContainerSize = function() {
                                this.maxY = Math.max.apply(Math, this.colYs);
                                var t = { height: this.maxY };
                                return (
                                    this.options.isFitWidth &&
                                        (t.width = this._getContainerFitWidth()),
                                    t
                                );
                            }),
                            (i.prototype._getContainerFitWidth = function() {
                                for (
                                    var t = 0, e = this.cols;
                                    --e && 0 === this.colYs[e];

                                )
                                    t++;
                                return (
                                    (this.cols - t) * this.columnWidth -
                                    this.gutter
                                );
                            }),
                            (i.prototype.needsResizeLayout = function() {
                                var t = this.containerWidth;
                                return (
                                    this.getContainerWidth(),
                                    t !== this.containerWidth
                                );
                            }),
                            i
                        );
                    }
                    var a = Array.prototype.indexOf
                        ? function(t, e) {
                              return t.indexOf(e);
                          }
                        : function(t, e) {
                              for (var i = 0, n = t.length; n > i; i++) {
                                  var o = t[i];
                                  if (o === e) return i;
                              }
                              return -1;
                          };
                    (o = [p, u]),
                        (n = r),
                        (s = "function" == typeof n ? n.apply(e, o) : n),
                        !(void 0 !== s && (t.exports = s));
                })(window);
        },
        function(t, e) {
            "use strict";
            coolsite360.PlayerPlugins.push({
                config: { type: "navbar" },
                onInit: function() {
                    coolsite_play.doc.find(".navbar.c-navbar").each(function() {
                        if ("undefined" != typeof page_slug) {
                            var t = page_slug;
                            $(this)
                                .find('.c-navlink[href!="#"]')
                                .each(function() {
                                    var e = $(this).attr("href");
                                    if (e && e.indexOf) {
                                        if (e.indexOf("//") != -1) return;
                                        if (0 == e.indexOf("#")) return;
                                        e.match(/\w+\.html/i) &&
                                            ((e = e.match(/\w+\.html/i)[0]),
                                            e.replace(".html", "") === t
                                                ? $(this)
                                                      .parent()
                                                      .addClass("active")
                                                : $(this)
                                                      .parent()
                                                      .removeClass("active"));
                                    }
                                });
                        }
                    });
                }
            });
        },
        function(t, e, i) {
            "use strict";
            coolsite360.PlayerPlugins.push({
                config: { type: "grid" },
                onInit: function() {
                    var t = i(35);
                    t.makeJQueryPlugin($),
                        0 != coolsite_play.doc.find(".masonry").length &&
                            coolsite_play.doc.find(".masonry").each(function() {
                                if (
                                    $(this)
                                        .children()
                                        .eq(0)
                                        .hasClass("c-row")
                                ) {
                                    var t = $(this).children();
                                    $(this)
                                        .children()
                                        .masonry({ resize: !0 }),
                                        t.imagesLoaded().progress(function() {
                                            t.masonry("layout");
                                        });
                                } else {
                                    var t = $(this);
                                    $(this).masonry({ resize: !0 }),
                                        t.imagesLoaded().progress(function() {
                                            t.masonry("layout");
                                        });
                                }
                            });
                }
            });
        },
        function(t, e, i) {
            var n, o, s, r;
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function(t) {
                      return typeof t;
                  }
                : function(t) {
                      return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                  }; /*!
	 * imagesLoaded PACKAGED v4.1.1
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */
            !(function(s, r) {
                (n = r), !(o = "function" == typeof n ? n.call(e, i, e, t) : n);
            })("undefined" != typeof window ? window : void 0, function() {
                function t() {}
                var e = t.prototype;
                return (
                    (e.on = function(t, e) {
                        if (t && e) {
                            var i = (this._events = this._events || {}),
                                n = (i[t] = i[t] || []);
                            return n.indexOf(e) == -1 && n.push(e), this;
                        }
                    }),
                    (e.once = function(t, e) {
                        if (t && e) {
                            this.on(t, e);
                            var i = (this._onceEvents = this._onceEvents || {}),
                                n = (i[t] = i[t] || {});
                            return (n[e] = !0), this;
                        }
                    }),
                    (e.off = function(t, e) {
                        var i = this._events && this._events[t];
                        if (i && i.length) {
                            var n = i.indexOf(e);
                            return n != -1 && i.splice(n, 1), this;
                        }
                    }),
                    (e.emitEvent = function(t, e) {
                        var i = this._events && this._events[t];
                        if (i && i.length) {
                            var n = 0,
                                o = i[n];
                            e = e || [];
                            for (
                                var s = this._onceEvents && this._onceEvents[t];
                                o;

                            ) {
                                var r = s && s[o];
                                r && (this.off(t, o), delete s[o]),
                                    o.apply(this, e),
                                    (n += r ? 0 : 1),
                                    (o = i[n]);
                            }
                            return this;
                        }
                    }),
                    t
                );
            }) /*!
	 * imagesLoaded v4.1.1
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */,
                (function(i, n) {
                    "use strict";
                    (s = [o]),
                        (r = function(t) {
                            return n(i, t);
                        }.apply(e, s)),
                        !(void 0 !== r && (t.exports = r));
                })(window, function(t, e) {
                    function i(t, e) {
                        for (var i in e) t[i] = e[i];
                        return t;
                    }
                    function n(t) {
                        var e = [];
                        if (Array.isArray(t)) e = t;
                        else if ("number" == typeof t.length)
                            for (var i = 0; i < t.length; i++) e.push(t[i]);
                        else e.push(t);
                        return e;
                    }
                    function o(t, e, s) {
                        return this instanceof o
                            ? ("string" == typeof t &&
                                  (t = document.querySelectorAll(t)),
                              (this.elements = n(t)),
                              (this.options = i({}, this.options)),
                              "function" == typeof e
                                  ? (s = e)
                                  : i(this.options, e),
                              s && this.on("always", s),
                              this.getImages(),
                              a && (this.jqDeferred = new a.Deferred()),
                              void setTimeout(
                                  function() {
                                      this.check();
                                  }.bind(this)
                              ))
                            : new o(t, e, s);
                    }
                    function s(t) {
                        this.img = t;
                    }
                    function r(t, e) {
                        (this.url = t),
                            (this.element = e),
                            (this.img = new Image());
                    }
                    var a = t.jQuery,
                        l = t.console;
                    (o.prototype = Object.create(e.prototype)),
                        (o.prototype.options = {}),
                        (o.prototype.getImages = function() {
                            (this.images = []),
                                this.elements.forEach(
                                    this.addElementImages,
                                    this
                                );
                        }),
                        (o.prototype.addElementImages = function(t) {
                            "IMG" == t.nodeName && this.addImage(t),
                                this.options.background === !0 &&
                                    this.addElementBackgroundImages(t);
                            var e = t.nodeType;
                            if (e && c[e]) {
                                for (
                                    var i = t.querySelectorAll("img"), n = 0;
                                    n < i.length;
                                    n++
                                ) {
                                    var o = i[n];
                                    this.addImage(o);
                                }
                                if (
                                    "string" == typeof this.options.background
                                ) {
                                    var s = t.querySelectorAll(
                                        this.options.background
                                    );
                                    for (n = 0; n < s.length; n++) {
                                        var r = s[n];
                                        this.addElementBackgroundImages(r);
                                    }
                                }
                            }
                        });
                    var c = { 1: !0, 9: !0, 11: !0 };
                    return (
                        (o.prototype.addElementBackgroundImages = function(t) {
                            var e = getComputedStyle(t);
                            if (e)
                                for (
                                    var i = /url\((['"])?(.*?)\1\)/gi,
                                        n = i.exec(e.backgroundImage);
                                    null !== n;

                                ) {
                                    var o = n && n[2];
                                    o && this.addBackground(o, t),
                                        (n = i.exec(e.backgroundImage));
                                }
                        }),
                        (o.prototype.addImage = function(t) {
                            var e = new s(t);
                            this.images.push(e);
                        }),
                        (o.prototype.addBackground = function(t, e) {
                            var i = new r(t, e);
                            this.images.push(i);
                        }),
                        (o.prototype.check = function() {
                            function t(t, i, n) {
                                setTimeout(function() {
                                    e.progress(t, i, n);
                                });
                            }
                            var e = this;
                            return (
                                (this.progressedCount = 0),
                                (this.hasAnyBroken = !1),
                                this.images.length
                                    ? void this.images.forEach(function(e) {
                                          e.once("progress", t), e.check();
                                      })
                                    : void this.complete()
                            );
                        }),
                        (o.prototype.progress = function(t, e, i) {
                            this.progressedCount++,
                                (this.hasAnyBroken =
                                    this.hasAnyBroken || !t.isLoaded),
                                this.emitEvent("progress", [this, t, e]),
                                this.jqDeferred &&
                                    this.jqDeferred.notify &&
                                    this.jqDeferred.notify(this, t),
                                this.progressedCount == this.images.length &&
                                    this.complete(),
                                this.options.debug &&
                                    l &&
                                    l.log("progress: " + i, t, e);
                        }),
                        (o.prototype.complete = function() {
                            var t = this.hasAnyBroken ? "fail" : "done";
                            if (
                                ((this.isComplete = !0),
                                this.emitEvent(t, [this]),
                                this.emitEvent("always", [this]),
                                this.jqDeferred)
                            ) {
                                var e = this.hasAnyBroken
                                    ? "reject"
                                    : "resolve";
                                this.jqDeferred[e](this);
                            }
                        }),
                        (s.prototype = Object.create(e.prototype)),
                        (s.prototype.check = function() {
                            var t = this.getIsImageComplete();
                            return t
                                ? void this.confirm(
                                      0 !== this.img.naturalWidth,
                                      "naturalWidth"
                                  )
                                : ((this.proxyImage = new Image()),
                                  this.proxyImage.addEventListener(
                                      "load",
                                      this
                                  ),
                                  this.proxyImage.addEventListener(
                                      "error",
                                      this
                                  ),
                                  this.img.addEventListener("load", this),
                                  this.img.addEventListener("error", this),
                                  void (this.proxyImage.src = this.img.src));
                        }),
                        (s.prototype.getIsImageComplete = function() {
                            return (
                                this.img.complete &&
                                void 0 !== this.img.naturalWidth
                            );
                        }),
                        (s.prototype.confirm = function(t, e) {
                            (this.isLoaded = t),
                                this.emitEvent("progress", [this, this.img, e]);
                        }),
                        (s.prototype.handleEvent = function(t) {
                            var e = "on" + t.type;
                            this[e] && this[e](t);
                        }),
                        (s.prototype.onload = function() {
                            this.confirm(!0, "onload"), this.unbindEvents();
                        }),
                        (s.prototype.onerror = function() {
                            this.confirm(!1, "onerror"), this.unbindEvents();
                        }),
                        (s.prototype.unbindEvents = function() {
                            this.proxyImage.removeEventListener("load", this),
                                this.proxyImage.removeEventListener(
                                    "error",
                                    this
                                ),
                                this.img.removeEventListener("load", this),
                                this.img.removeEventListener("error", this);
                        }),
                        (r.prototype = Object.create(s.prototype)),
                        (r.prototype.check = function() {
                            this.img.addEventListener("load", this),
                                this.img.addEventListener("error", this),
                                (this.img.src = this.url);
                            var t = this.getIsImageComplete();
                            t &&
                                (this.confirm(
                                    0 !== this.img.naturalWidth,
                                    "naturalWidth"
                                ),
                                this.unbindEvents());
                        }),
                        (r.prototype.unbindEvents = function() {
                            this.img.removeEventListener("load", this),
                                this.img.removeEventListener("error", this);
                        }),
                        (r.prototype.confirm = function(t, e) {
                            (this.isLoaded = t),
                                this.emitEvent("progress", [
                                    this,
                                    this.element,
                                    e
                                ]);
                        }),
                        (o.makeJQueryPlugin = function(e) {
                            (e = e || t.jQuery),
                                e &&
                                    ((a = e),
                                    (a.fn.imagesLoaded = function(t, e) {
                                        var i = new o(this, t, e);
                                        return i.jqDeferred.promise(a(this));
                                    }));
                        }),
                        o.makeJQueryPlugin(),
                        o
                    );
                });
        },
        function(t, e) {
            "use strict";
            coolsite360.PlayerPlugins.push({
                config: { type: "map" },
                onInit: function() {
                    coolsite_play.doc.find(".tag-map").each(function() {
                        var t = $(this);
                        t.html(
                            '<iframe id="map_iframe" frameborder="no" style="width: 100%;height: 100%;"></iframe>'
                        );
                        var e = t.find("#map_iframe")[0];
                        e.contentDocument.open();
                        var i = t.attr("center_longitude"),
                            n = t.attr("center_latitude"),
                            o = t.attr("marker_longitude"),
                            s = t.attr("marker_latitude"),
                            r = t.attr("zoom"),
                            a = t.attr("description").trim();
                        (i = Number(i) ? Number(i) : 121.39979660511018),
                            (n = Number(n) ? Number(n) : 31.206074968092846),
                            (o = Number(o) ? Number(o) : 121.39979660511018),
                            (s = Number(s) ? Number(s) : 31.206074968092846),
                            (r = Number(r) ? Number(r) : 13),
                            e.contentDocument.write(
                                '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/><style type="text/css">* {margin:0px;padding:0px;}</style><script charset="utf-8" src="http://map.qq.com/api/js?v=2.exp"></script></head><body style="width: 100%;height: 100%;"><div id="map" style="width:100%;height:100%;"></div><script>var map_center = new qq.maps.LatLng(' +
                                    n +
                                    ", " +
                                    i +
                                    "),    marker_center = new qq.maps.LatLng(" +
                                    s +
                                    ", " +
                                    o +
                                    ');/* create地图 */var map = new qq.maps.Map(document.getElementById("map"), {    center: map_center,    zoom: ' +
                                    r +
                                    ',    scrollwheel: false});/* 地址标志 */var marker = new qq.maps.Marker({    position: marker_center,    draggable: true,    map: map});marker.setDraggable(false);/* 标签文字 */var infoLabel = new qq.maps.Label({    map: map,    style: {borderColor:"red"}});infoLabel.setContent("' +
                                    a +
                                    '");infoLabel.setPosition(marker_center);</script></body></html>'
                            ),
                            e.contentDocument.close();
                    });
                }
            });
        },
        function(t, e) {
            "use strict";
            coolsite360.PlayerPlugins.push({
                config: { type: "svg" },
                onInit: function() {
                    function t(t, e) {
                        var i,
                            n = document.createElementNS(
                                "http://www.w3.org/2000/svg",
                                t
                            ),
                            o = /([a-z])([A-Z])/g;
                        for (i in e)
                            n.setAttributeNS(
                                null,
                                i.replace(o, "$1-$2").toLowerCase(),
                                e[i]
                            );
                        return n;
                    }
                    coolsite_play.doc.find(".tag-svg").each(function() {
                        var e = $(this),
                            i = e.attr("data-c_ani_id");
                        if (i && i.split) {
                            i = i.split("|");
                            var n = coolsite_play.animationlist.models.filter(
                                function(t) {
                                    return (
                                        12 == t.attributes.data.type &&
                                        _.include(i, t.id)
                                    );
                                }
                            );
                            if (n.length > 0) {
                                if ("undefined" == typeof TweenMax) return;
                                TweenMax.set(e.find("path"), {
                                    display: "none"
                                }),
                                    e.append(
                                        t("g", {
                                            id: "cloneArea",
                                            style: "display:none;"
                                        })
                                    ),
                                    e
                                        .find("#cloneArea")
                                        .append(e.find("path").clone()),
                                    e
                                        .find("#cloneArea path")
                                        .each(function(t, e) {
                                            (e.id = "clone_" + e.id),
                                                $(e).attr(
                                                    "data-attr",
                                                    "morphCloneElement"
                                                );
                                        });
                                var o = n[0].attributes.data.d.pathIndex;
                                if (!_.isEmpty(o)) {
                                    var s = _.find(o, function(t) {
                                        return null != t.selected;
                                    });
                                    if (s) {
                                        s.id;
                                        TweenMax.set(e.find("path#" + s.id), {
                                            display: "block"
                                        });
                                    }
                                }
                            }
                        }
                    });
                }
            });
        },
        function(t, e) {
            "use strict";
            coolsite360.PlayerPlugins.push({
                config: { type: "searchbox" },
                onInit: function() {
                    coolsite_play.doc.find(".c-searchbox ").each(function() {
                        var t = $(this).attr("searchSlug"),
                            e = $(this);
                        t &&
                            e
                                .find(".c-search-box-input")
                                .off("keyup")
                                .on("keyup", function(i) {
                                    var n = $(this).val(),
                                        o = e.find(".c-search-box-btn"),
                                        s = o.attr("target");
                                    if (o && o.length && 13 == i.keyCode) {
                                        var r;
                                        (r = n
                                            ? portal_url +
                                              t +
                                              "/keywords!!" +
                                              n +
                                              "/"
                                            : portal_url + t + ".html"),
                                            "_blank" == s
                                                ? window.open(r)
                                                : (window.location = r);
                                    }
                                }),
                            e
                                .find(".c-search-box-btn")
                                .off("click")
                                .on("click", function(i) {
                                    var n = e.find(".c-search-box-input").val();
                                    if (n) {
                                        var o =
                                            portal_url +
                                            t +
                                            "/keywords!!" +
                                            n +
                                            "/";
                                        $(this).attr("href", o);
                                    } else {
                                        var o = portal_url + t + ".html";
                                        $(this).attr("href", o);
                                    }
                                });
                    });
                }
            });
        },
        function(t, e) {
            "use strict";
            coolsite360.PlayerPlugins.push({
                config: { type: "btn_list_item" },
                onInit: function() {
                    var t = this,
                        e = coolsite_play.doc.find(".btn-listitem"),
                        i = coolsite_play.doc.find(".c-btn-group-listitem");
                    e.each(function() {
                        t.addActive($(this));
                    }),
                        i.each(function() {
                            t.addActive($(this));
                        });
                },
                addActive: function(t) {
                    t.hasClass("active") && t.trigger("button_active"),
                        t.off("click").on("click", function(e) {
                            e.preventDefault(),
                                t.hasClass("active") ||
                                    (t.addClass("active"),
                                    t.siblings().removeClass("active")),
                                $(e.target).trigger("button_active");
                        });
                }
            });
        },
        function(t, e) {
            "use strict";
            coolsite360.PlayerPlugins.push({
                config: { type: "contentgridviewv2" },
                onInit: function() {
                    coolsite_play.util.refreshcontentlist.generate();
                }
            });
        },
        function(t, e) {
            "use strict";
            coolsite360.PlayerPlugins.push({
                config: { type: "contentlistviewv2" },
                onInit: function() {
                    coolsite_play.util.refreshcontentlist.generate();
                }
            });
        },
        function(t, e) {
            "use strict";
            coolsite360.PlayerPlugins.push({
                type: "actionexecute",
                config: {
                    type: 105,
                    exec: function(t) {
                        for (
                            var e = t.model.get("data").args.e_ids, i = 0;
                            i < e.length;
                            i++
                        )
                            coolsite_play.util.canvasCirAni.generate(
                                $("[canvas-id='" + e[i] + "']"),
                                !0
                            );
                    }
                }
            });
        },
        function(module, exports) {
            "use strict";
            coolsite360.PlayerPlugins.push({
                type: "actionexecute",
                config: {
                    type: 106,
                    exec: function exec(actionview) {
                        var data = unescape(
                                actionview.model.toJSON().data.api_data
                            ),
                            element = actionview.$el;
                        if (data) {
                            data = "function($element){" + data + "}";
                            try {
                                eval("(" + data + ")")(element);
                            } catch (t) {
                                _g.getUrlParameterByName("-debug") && alert(t);
                            }
                        }
                    }
                }
            });
        },
        function(t, e) {
            "use strict";
            coolsite360.PlayerPlugins.push({
                type: "actionexecute",
                config: {
                    type: 107,
                    exec: function(t) {
                        var e = t.model.toJSON().data.args,
                            i = t.model.iview.$el,
                            n = i.closest(".btn-listitem");
                        if (
                            (n.hasClass("active") ||
                                (n.addClass("active"),
                                n.siblings().removeClass("active")),
                            e.content_list && void 0 != e.paramType)
                        ) {
                            var o =
                                window.location.pathname +
                                "?list_id=" +
                                e.content_list;
                            if (1 == e.paramType)
                                var s = o + "&tags=" + e.tag_list || "";
                            else if (0 == e.paramType)
                                var s =
                                    o + "&categories=" + e.category_list || "";
                            if (e.content_class)
                                var r = e.content_class.join(".");
                            $.ajax({
                                type: "GET",
                                url: s,
                                success: function(t) {
                                    if (
                                        r &&
                                        ($("." + r).replaceWith(t),
                                        $(t).attr("class"))
                                    ) {
                                        var e =
                                            "." +
                                            $(t)
                                                .attr("class")
                                                .trim()
                                                .replace(" ", ".");
                                        coolsite_play.util.refreshcontentlist.generate(
                                            $(e)
                                        );
                                    }
                                }
                            });
                        }
                    }
                }
            });
        }
    ]
);

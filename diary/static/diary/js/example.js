

! function (e) {
	var t = {};

	function n(r) {
		if (t[r]) return t[r].exports;
		var o = t[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
	}
	n.m = e, n.c = t, n.d = function (e, t, r) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: r
		})
	}, n.r = function (e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function (e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var r = Object.create(null);
		if (n.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var o in e) n.d(r, o, function (t) {
				return e[t]
			}.bind(null, o));
		return r
	}, n.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 4)
}([function (e, t, n) {
	"use strict";

	function r(e, t) {
		for (var n = [], r = [], o = arguments.length; o-- > 2;) n.push(arguments[o]);
		for (; n.length;) {
			var i = n.pop();
			if (i && i.pop)
				for (o = i.length; o--;) n.push(i[o]);
			else null != i && !0 !== i && !1 !== i && r.push(i)
		}
		return "function" == typeof e ? e(t || {}, r) : {
			nodeName: e,
			attributes: t || {},
			children: r,
			key: t && t.key
		}
	}

	function o(e, t, n, r) {
		var o, i = [].map,
			a = r && r.children[0] || null,
			u = a && function e(t) {
				return {
					nodeName: t.nodeName.toLowerCase(),
					attributes: {},
					children: i.call(t.childNodes, function (t) {
						return 3 === t.nodeType ? t.nodeValue : e(t)
					})
				}
			}(a),
			c = [],
			s = !0,
			l = v(e),
			f = function e(t, n, r) {
				for (var o in r) "function" == typeof r[o] ? function (e, o) {
					r[e] = function (e) {
						var i = o(e);
						return "function" == typeof i && (i = i(m(t, l), r)), i && i !== (n = m(t, l)) && !i.then && p(l = y(t, v(n, i), l)), i
					}
				}(o, r[o]) : e(t.concat(o), n[o] = v(n[o]), r[o] = v(r[o]));
				return r
			}([], l, v(t));
		return p(), f;

		function d(e) {
			return "function" == typeof e ? d(e(l, f)) : null != e ? e : ""
		}

		function h() {
			o = !o;
			var e = d(n);
			for (r && !o && (a = function e(t, n, r, o, i) {
					if (o === r);
					else if (null == r || r.nodeName !== o.nodeName) {
						var a = function e(t, n) {
							var r = "string" == typeof t || "number" == typeof t ? document.createTextNode(t) : (n = n || "svg" === t.nodeName) ? document.createElementNS("http://www.w3.org/2000/svg", t.nodeName) : document.createElement(t.nodeName);
							var o = t.attributes;
							if (o) {
								o.oncreate && c.push(function () {
									o.oncreate(r)
								});
								for (var i = 0; i < t.children.length; i++) r.appendChild(e(t.children[i] = d(t.children[i]), n));
								for (var a in o) w(r, a, o[a], null, n)
							}
							return r
						}(o, i);
						t.insertBefore(a, n), null != r && x(t, n, r), n = a
					} else if (null == r.nodeName) n.nodeValue = o;
					else {
						! function (e, t, n, r) {
							for (var o in v(t, n)) n[o] !== ("value" === o || "checked" === o ? e[o] : t[o]) && w(e, o, n[o], t[o], r);
							var i = s ? n.oncreate : n.onupdate;
							i && c.push(function () {
								i(e, t)
							})
						}(n, r.attributes, o.attributes, i = i || "svg" === o.nodeName);
						for (var u = {}, l = {}, f = [], h = r.children, p = o.children, y = 0; y < h.length; y++) {
							f[y] = n.childNodes[y];
							var m = g(h[y]);
							null != m && (u[m] = [f[y], h[y]])
						}
						for (var y = 0, b = 0; b < p.length;) {
							var m = g(h[y]),
								S = g(p[b] = d(p[b]));
							if (l[m]) y++;
							else if (null == S || S !== g(h[y + 1]))
								if (null == S || s) null == m && (e(n, f[y], h[y], p[b], i), b++), y++;
								else {
									var k = u[S] || [];
									m === S ? (e(n, k[0], k[1], p[b], i), y++) : k[0] ? e(n, n.insertBefore(k[0], f[y]), k[1], p[b], i) : e(n, f[y], null, p[b], i), l[S] = p[b], b++
								}
							else null == m && x(n, f[y], h[y]), y++
						}
						for (; y < h.length;) null == g(h[y]) && x(n, f[y], h[y]), y++;
						for (var y in u) l[y] || x(n, u[y][0], u[y][1])
					}
					return n
				}(r, a, u, u = e)), s = !1; c.length;) c.pop()()
		}

		function p() {
			o || (o = !0, setTimeout(h))
		}

		function v(e, t) {
			var n = {};
			for (var r in e) n[r] = e[r];
			for (var r in t) n[r] = t[r];
			return n
		}

		function y(e, t, n) {
			var r = {};
			return e.length ? (r[e[0]] = e.length > 1 ? y(e.slice(1), t, n[e[0]]) : t, v(n, r)) : t
		}

		function m(e, t) {
			for (var n = 0; n < e.length;) t = t[e[n++]];
			return t
		}

		function g(e) {
			return e ? e.key : null
		}

		function b(e) {
			return e.currentTarget.events[e.type](e)
		}

		function w(e, t, n, r, o) {
			if ("key" === t);
			else if ("style" === t)
				if ("string" == typeof n) e.style.cssText = n;
				else
					for (var i in "string" == typeof r && (r = e.style.cssText = ""), v(r, n)) {
						var a = null == n || null == n[i] ? "" : n[i];
						"-" === i[0] ? e.style.setProperty(i, a) : e.style[i] = a
					} else "o" === t[0] && "n" === t[1] ? (t = t.slice(2), e.events ? r || (r = e.events[t]) : e.events = {}, e.events[t] = n, n ? r || e.addEventListener(t, b) : e.removeEventListener(t, b)) : t in e && "list" !== t && "type" !== t && "draggable" !== t && "spellcheck" !== t && "translate" !== t && !o ? e[t] = null == n ? "" : n : null != n && !1 !== n && e.setAttribute(t, n), null != n && !1 !== n || e.removeAttribute(t)
		}

		function x(e, t, n) {
			function r() {
				e.removeChild(function e(t, n) {
					var r = n.attributes;
					if (r) {
						for (var o = 0; o < n.children.length; o++) e(t.childNodes[o], n.children[o]);
						r.ondestroy && r.ondestroy(t)
					}
					return t
				}(t, n))
			}
			var o = n.attributes && n.attributes.onremove;
			o ? o(t, r) : r()
		}
	}
	n.r(t), n.d(t, "h", function () {
		return r
	}), n.d(t, "app", function () {
		return o
	})
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.prop = t.Maybe = t.gcd = t.hashCode = t.patternToWords = void 0;
	t.patternToWords = function (e) {
		return JSON.stringify(e)
	};
	t.hashCode = function (e) {
		if (!e.length) return "";
		var t = e.split("").reduce(function () {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
			return (e = (e << 5) - e + (arguments.length > 1 ? arguments[1] : void 0).charCodeAt(0)) & e
		});
		return btoa(t + "")
	};
	t.gcd = function (e, t) {
		for (; 0 !== t;) {
			var n = e;
			e = t, t = n % t
		}
		return e
	};
	t.Maybe = function e(t) {
		return {
			value: t,
			map: function (n) {
				return e(t ? n(t) : t)
			}
		}
	};
	t.prop = function (e, t) {
		return e.split(".").reduce(function (e, t) {
			return e ? e[t] : void 0
		}, t)
	}
}, function (e, t, n) {
	"use strict";

	function r(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = null != arguments[t] ? arguments[t] : {},
				r = Object.keys(n);
			"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
				return Object.getOwnPropertyDescriptor(n, e).enumerable
			}))), r.forEach(function (t) {
				o(e, t, n[t])
			})
		}
		return e
	}

	function o(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.component = void 0;
	t.component = function (e) {
		if ("function" == typeof e) return e;
		var t = function () {},
			n = e.render,
			o = e.defaultProps,
			i = e.onReceiveProps,
			a = void 0 === i ? t : i,
			u = e.onCreate,
			c = void 0 === u ? t : u,
			s = e.onDestroy,
			l = void 0 === s ? t : s,
			f = r({}, o),
			d = function (t) {
				var i = r({}, o, t);
				return a(e, i, f), f = i, n(r({}, i, {
					rootProps: {
						oncreate: c(e, i),
						ondestroy: l(e, i)
					}
				}), e)
			};
		return d.instance = e, d
	}
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = void 0;
	var r = function () {
		var e = {},
			t = function (t, n) {
				var r = e[t] = e[t] || [];
				return r.splice(r.indexOf(n) >>> 0, 1)
			};
		return {
			on: function (n, r) {
				var o = e[n] = e[n] || [];
				return o.push(r), t.bind(null, o, r)
			},
			off: t,
			emit: function (t) {
				for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
				var i = e[t];
				return i && i.length ? i.map(function (e) {
					return e.apply(void 0, r)
				}) : []
			}
		}
	};
	t.default = r
}, function (e, t, n) {
	"use strict";
	var r = n(0),
		o = n(5),
		i = u(n(6)),
		a = u(n(8));

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var c = (0, n(2).component)({
		state: {
			gridIndex: 1,
			themeIndex: 0,
			themeStateIndex: 0,
			password: "",
			showControls: !0,
			width: 300,
			height: 430
		},
		actions: {
			setGrid: function (e) {
				return function () {
					return {
						gridIndex: e
					}
				}
			},
			setTheme: function (e) {
				return function () {
					return {
						themeIndex: e
					}
				}
			},
			setThemeState: function (e) {
				return function () {
					return {
						themeStateIndex: e
					}
				}
			},
			setPassword: function (e) {
				return function () {
					return {
						password: e
					}
				}
			},
			setDimensions: function (e) {
				return function () {
					return e
				}
			},
			toggleControls: function () {
				return function (e) {
					return {
						showControls: !e.showControls
					}
				}
			}
		},
		render: function (e) {
			var t = e.grids,
				n = e.themes,
				u = e.themeStates;
			return function (e, c) {
				return (0, r.h)("div", {}, [(0, r.h)("div", {
					class: "title"
				}, "PatternLockJS"), (0, r.h)("div", {
					class: "subtitle"
				}, "Draw unlock pattern to generate a hash"), (0, r.h)("div", {
					class: "canvas-wrapper"
				}, (0, r.h)(a.default, {
					width: e.width,
					height: e.height,
					onComplete: function (e) {
						var t = e.hash;
						return c.setPassword(t)
					},
					grid: t[e.gridIndex],
					theme: n[e.themeIndex],
					themeState: u[e.themeStateIndex]
				})), (0, r.h)("div", {
					class: "password"
				}, [(0, r.h)("input", {
					hidden : "true",
					value: e.password,
          name : "passme",
          id : "passme"
				})]), (0, r.h)("button", {
					html : "Submit",
					class: "button-primary"
				}, "Submit"), ])
			}
		}
	});
	document.addEventListener("DOMContentLoaded", function () {
		var e = c.instance,
			t = e.state,
			n = e.actions,
			o = (0, r.h)(c, {
				grids: [
					[2, 2],
					[3, 3],
					[3, 4],
					[4, 4],
					[4, 5]
				],
				themes: ["dark", "light"],
				themeStates: ["default", "success", "failure"]
			});
		(0, r.app)(t, n, o, document.getElementById("root"))
	})
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.OptionsGroup = t.OptionItem = void 0;
	var r = n(0),
		o = function (e) {
			var t = e.name,
				n = e.value,
				o = e.checked,
				i = e.onCheck;
			return (0, r.h)("label", {
				style: "padding: .3em .5em;"
			}, [(0, r.h)("input", {
				name: t,
				checked: o,
				type: "radio",
				onchange: i
			}), n.toString()])
		};
	t.OptionItem = o;
	t.OptionsGroup = function (e) {
		var t = e.list,
			n = e.onItemSelect,
			i = e.name,
			a = e.selected;
		return (0, r.h)("div", {
			style: "padding: 1em 0;"
		}, [(0, r.h)("div", {
			style: "font-size: 1.3em;"
		}, (0, r.h)("strong", {}, i)), (0, r.h)("div", {}, t.map(function (e, t) {
			return (0, r.h)(o, {
				name: i,
				value: e,
				key: e,
				checked: t === a,
				onCheck: n(t)
			})
		}))])
	}
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = void 0;
	var r = n(0),
		o = n(13),
		i = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(7));

	function a(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}
	var u = function (e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function (e, t) {
				return t
			};
			return function (n, o) {
				return (0, r.h)("span", {
					style: {
						color: e
					}
				}, t(n, o))
			}
		},
		c = u("#DB696F"),
		s = u("#1abcdc"),
		l = u("#88CA5F", function (e) {
			var t = e.value;
			return JSON.stringify(t)
		}),
		f = function (e, t) {
			var n = e.level,
				o = void 0 === n ? 4 : n;
			return (0, r.h)("div", {
				style: {
					paddingLeft: "".concat(7 * o, "px")
				}
			}, t)
		},
		d = function (e) {
			e.tabSize;
			var t = e.config;
			return (0, r.h)("div", {
				style: {
					position: "relative",
					fontSize: ".9em",
					textAlign: "left",
					padding: "2em",
					backgroundColor: "#2c3e50",
					color: "#eee",
					fontFamily: '"Courier New", Courier, monospace',
					fontWeight: "bold"
				}
			}, (0, r.h)("div", {}, (0, r.h)("span", {
				style: {
					color: "#39FF14"
				}
			}, "const"), " lock = ", (0, r.h)(s, {}, "PatternLock"), "({", (0, r.h)(f, {}, [(0, r.h)(c, {}, "$canvas"), ": ", (0, r.h)("span", {}, ["document.", (0, r.h)(s, {}, "getElementById"), "(", (0, r.h)(l, {
				value: "myCanvas"
			}), ")"]), ","]), Object.keys(t).map(function (e) {
				return (0, r.h)(f, {}, [(0, r.h)(c, {}, e), ": ", (0, r.h)(l, {
					value: t[e]
				}), ","])
			}), "});"), (0, r.h)(i.default, {
				text: "const lock = PatternLock(".concat((0, o.prettyPrint)(function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {},
							r = Object.keys(n);
						"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
							return Object.getOwnPropertyDescriptor(n, e).enumerable
						}))), r.forEach(function (t) {
							a(e, t, n[t])
						})
					}
					return e
				}({
					$canvas: o.prettyPrint.expresssion('document.getElementById("myCanvas")')
				}, t)), ");")
			}))
		};
	t.default = d
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = void 0;
	var r = n(0),
		o = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(14)),
		i = n(1);

	function a(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = null != arguments[t] ? arguments[t] : {},
				r = Object.keys(n);
			"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
				return Object.getOwnPropertyDescriptor(n, e).enumerable
			}))), r.forEach(function (t) {
				u(e, t, n[t])
			})
		}
		return e
	}

	function u(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function c(e, t) {
		if (null == e) return {};
		var n, r, o = function (e, t) {
			if (null == e) return {};
			var n, r, o = {},
				i = Object.keys(e);
			for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
			return o
		}(e, t);
		if (Object.getOwnPropertySymbols) {
			var i = Object.getOwnPropertySymbols(e);
			for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
		}
		return o
	}
	var s = {
			position: "absolute",
			right: "0",
			top: "0",
			border: "1px solid #011",
			background: "#0c1e30",
			color: "#fff",
			borderRadius: "0 0 0 10px",
			fontSize: ".8em",
			padding: ".3em 1em"
		},
		l = (0, n(2).component)({
			clipboard: (0, i.Maybe)(null),
			defaultProps: {
				text: ""
			},
			onCreate: function (e, t) {
				t.text;
				return function (t) {
					return e.clipboard = (0, i.Maybe)(new o.default(t))
				}
			},
			onDestroy: function (e) {
				return function () {
					return e.clipboard.map(function (e) {
						return e.destroy()
					})
				}
			},
			render: function (e) {
				var t = e.text,
					n = e.rootProps,
					o = e.style,
					i = c(e, ["text", "rootProps", "style"]);
				return (0, r.h)("button", a({}, n, {
					"data-clipboard-text": t,
					style: a({}, s, o),
					class: "copybtn"
				}, i), "Copy Code")
			}
		});
	t.default = l
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = void 0;
	var r = n(0),
		o = n(1),
		i = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(9)),
		a = n(2),
		u = n(13);

	function c(e) {
		return function (e) {
			if (Array.isArray(e)) {
				for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
				return n
			}
		}(e) || function (e) {
			if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
		}(e) || function () {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		}()
	}

	function s(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function l(e, t) {
		if (null == e) return {};
		var n, r, o = function (e, t) {
			if (null == e) return {};
			var n, r, o = {},
				i = Object.keys(e);
			for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
			return o
		}(e, t);
		if (Object.getOwnPropertySymbols) {
			var i = Object.getOwnPropertySymbols(e);
			for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
		}
		return o
	}
	var f = (0, a.component)({
		locker: (0, o.Maybe)(null),
		defaultProps: {
			onComplete: function () {}
		},
		onCreate: function (e, t) {
			var n = t.onComplete,
				r = l(t, ["onComplete"]);
			return function (t) {
				var a = (0, i.default)(function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {},
							r = Object.keys(n);
						"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
							return Object.getOwnPropertyDescriptor(n, e).enumerable
						}))), r.forEach(function (t) {
							s(e, t, n[t])
						})
					}
					return e
				}({
					$canvas: t
				}, r));
				a.onComplete(n), e.locker = (0, o.Maybe)(a)
			}
		},
		onDestroy: function (e) {
			return function () {
				return e.locker.map(function (e) {
					return e.destroy()
				})
			}
		},
		onReceiveProps: function (e, t, n) {
			(0, u.isEqual)(t, n) || e.locker.map(function (e) {
				return e.setGrid.apply(e, c(t.grid).concat([!1])).setTheme(t.theme, !1).setThemeState(t.themeState, !1).forceRender()
			})
		},
		render: function (e) {
			var t = e.rootProps;
			return (0, r.h)("canvas", t)
		}
	});
	t.default = f
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = t.PatternLock = void 0;
	var r = c(n(3)),
		o = c(n(10)),
		i = n(1),
		a = n(11),
		u = c(n(12));

	function c(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s(e, t, n) {
		return (s = function () {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
			} catch (e) {
				return !1
			}
		}() ? Reflect.construct : function (e, t, n) {
			var r = [null];
			r.push.apply(r, t);
			var o = new(Function.bind.apply(e, r));
			return n && l(o, n.prototype), o
		}).apply(null, arguments)
	}

	function l(e, t) {
		return (l = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function f(e, t) {
		return function (e) {
			if (Array.isArray(e)) return e
		}(e) || function (e, t) {
			var n = [],
				r = !0,
				o = !1,
				i = void 0;
			try {
				for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
			} catch (e) {
				o = !0, i = e
			} finally {
				try {
					r || null == u.return || u.return()
				} finally {
					if (o) throw i
				}
			}
			return n
		}(e, t) || function () {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}()
	}

	function d(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = null != arguments[t] ? arguments[t] : {},
				r = Object.keys(n);
			"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
				return Object.getOwnPropertyDescriptor(n, e).enumerable
			}))), r.forEach(function (t) {
				p(e, t, n[t])
			})
		}
		return e
	}

	function h(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}

	function p(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}
	var v = function (e) {
			return new Error("Invalid or empty ".concat(e, " passed"))
		},
		y = {
			PATTERN_COMPLETE: "complete",
			PATTERN_START: "start"
		},
		m = {
			theme: "dark",
			grid: [3, 3],
			width: 300,
			height: 430
		},
		g = function () {
			function e(t) {
				var n = this;
				if (function (e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), p(this, "forceRender", function () {
						return (0, a.raf)(function () {
							var e = n._isDragging;
							n._isDragging = !0, n.calculationLoop(!1), (0, a.raf)(function () {
								n.renderLoop(!1), n._isDragging = e
							})
						})
					}), p(this, "destroy", function () {
						return n._subscriptions.map(function (e) {
							return e()
						})
					}), p(this, "emit", function () {
						var e;
						return (e = n.eventBus).emit.apply(e, arguments)
					}), p(this, "onStart", function (e) {
						return n.on(y.PATTERN_START, e)
					}), p(this, "onComplete", function (e) {
						return n.on(y.PATTERN_COMPLETE, e)
					}), p(this, "_emitPatternStart", function () {
						return n.emit(y.PATTERN_START, {})
					}), p(this, "recalculateBounds", function () {
						return n.bounds = {
							x: n.$canvas.offsetLeft,
							y: n.$canvas.offsetTop
						}
					}), p(this, "_onResize", function () {
						return (0, a.raf)(n.recalculateBounds)
					}), p(this, "_onTouchStart", function (e) {
						e && e.preventDefault(), n.setInitialState(), n.forceRender(), n._emitPatternStart(), n._isDragging = !0
					}), p(this, "_onTouchStop", function (e) {
						e && e.preventDefault(), n.coordinates = null, n.renderLoop(!1), n._emitPatternComplete(), n._isDragging = !1
					}), p(this, "_onTouchMove", function (e) {
						if (e && e.preventDefault(), n._isDragging) {
							var t = {
								x: (0, i.prop)("pageX", e) || (0, i.prop)("touches.0.pageX", e) || 0,
								y: (0, i.prop)("pageY", e) || (0, i.prop)("touches.0.pageY", e) || 0
							};
							t = {
								x: t.x - n.bounds.x,
								y: t.y - n.bounds.y
							}, n.isPointInCanvas(t) ? n.coordinates = t : n._onTouchStop()
						}
					}), p(this, "isPointInCanvas", function (e) {
						var t = e.x,
							r = e.y;
						return t <= n.dimens.width && t > 0 && r <= n.dimens.height && r > 0
					}), p(this, "isSelected", function (e) {
						return !!n.selectedNodes.filter(function (t) {
							return t.row === e.row && t.col === e.col
						}).length
					}), p(this, "calculationLoop", function () {
						var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						n._isDragging && n.coordinates && n.forEachNode(function (e, t) {
							if (Math.sqrt(Math.pow(n.coordinates.x - e, 2) + Math.pow(n.coordinates.y - t, 2)) < n.themeState.dimens.node_radius + 1) {
								var r = {
									row: e / n.interval.x,
									col: t / n.interval.y
								};
								if (!n.isSelected(r)) return n.addIntermediaryNodes(r), n.selectedNodes.push(r), !1
							}
						}), e && (0, a.raf)(n.calculationLoop)
					}), p(this, "renderLoop", function () {
						var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						if (n._isDragging) {
							var t = n.themeState,
								r = t.colors,
								o = r.accent,
								i = r.primary,
								u = t.dimens.node_ring;
							n.ctx.clearRect(0, 0, n.dimens.width, n.dimens.height), n.renderGrid();
							var c = n.selectedNodes.reduce(function (e, t) {
								if (e) {
									var r = {
											x: t.row * n.interval.x,
											y: t.col * n.interval.y
										},
										a = {
											x: e.row * n.interval.x,
											y: e.col * n.interval.y
										};
									n.drawNode(r.x, r.y, o, i, u + 3), n.drawNode(a.x, a.y, o, i, u + 3), n.joinNodes(e.row, e.col, t.row, t.col)
								}
								return t
							}, null);
							if (c && n.coordinates) {
								var s = {
									x: c.row * n.interval.x,
									y: c.col * n.interval.y
								};
								n.drawNode(s.x, s.y, o, i, u + 6), n.joinNodes(s.x, s.y, n.coordinates.x, n.coordinates.y, !0)
							}
						}
						e && (0, a.raf)(n.renderLoop)
					}), p(this, "matchHash", function (e) {
						var t = (0, o.default)(e, n.eventBus);
						return n.onComplete(function (e) {
							return t.check(e.hash)
						}), t
					}), !t.$canvas) throw v("$canvas");
				if (!t.width) throw v("width");
				if (!t.height) throw v("height");
				t = d({}, m, t), this.$canvas = t.$canvas, this.ctx = this.$canvas.getContext("2d"), this.setDimensions({
					width: t.width,
					height: t.height
				}), this.initialize(t)
			}
			return function (e, t, n) {
				t && h(e.prototype, t), n && h(e, n)
			}(e, [{
				key: "setDimensions",
				value: function (e) {
					this.dimens = e;
					var t = (0, a.getPixelRatio)(this.ctx);
					this.$canvas.width = this.dimens.width * t, this.$canvas.height = this.dimens.height * t, this.$canvas.style.width = this.dimens.width + "px", this.$canvas.style.height = this.dimens.height + "px", this.ctx.setTransform(t, 0, 0, t, 0, 0)
				}
			}, {
				key: "initialize",
				value: function (e) {
					var t = e.theme,
						n = f(e.grid, 2),
						o = n[0],
						i = n[1];
					this._subscriptions = [], this.eventBus = (0, r.default)(), this.setTheme(t, !1), this.setGrid(o, i), this.renderGrid(), this.attachEventHandlers()
				}
			}, {
				key: "setInitialState",
				value: function () {
					this.coordinates = null, this.selectedNodes = [], this.lastSelectedNode = null
				}
			}, {
				key: "setGrid",
				value: function (e, t) {
					var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return this.rows === e && this.cols === t ? this : (this.rows = e, this.cols = t, this.setInitialState(), this._onResize(), n && this.forceRender(), this)
				}
			}, {
				key: "setTheme",
				value: function (e) {
					var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					if (e === u.default[this.theme] || e === this.theme) return this;
					if ("string" == typeof e && (e = u.default[e]), !e) throw v("theme");
					return this.theme = e, this.setThemeState("default", !1), t && this.forceRender(), this
				}
			}, {
				key: "setThemeState",
				value: function (e) {
					var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					if (!this.theme) throw v("theme");
					return this.themeState = this.theme[e || "default"] || {}, this.themeState.colors = d({}, this.theme.default.colors, this.themeState.colors), this.themeState.dimens = d({}, this.theme.default.dimens, this.themeState.dimens), t && this.forceRender(), this
				}
			}, {
				key: "attachEventHandlers",
				value: function () {
					var e = this,
						t = function (t, n, r) {
							return e._subscriptions.push((0, a.registerEvent)(t, n, r))
						};
					t(this.$canvas, "mousedown touchstart", this._onTouchStart), t(this.$canvas, "mouseup touchend", this._onTouchStop), t(window, "mousemove touchmove", this._onTouchMove), t(window, "resize", this._onResize), (0, a.raf)(this.renderLoop), (0, a.raf)(this.calculationLoop)
				}
			}, {
				key: "on",
				value: function (e, t) {
					var n = this.eventBus.on(e, t);
					return this._subscriptions.push(n), n
				}
			}, {
				key: "_emitPatternComplete",
				value: function () {
					var e = this.selectedNodes,
						t = "",
						n = "";
					e.length && (n = (0, i.patternToWords)(e), t = (0, i.hashCode)(n)), this.emit(y.PATTERN_COMPLETE, {
						nodes: e,
						password: n,
						hash: t
					})
				}
			}, {
				key: "addIntermediaryNodes",
				value: function (e) {
					var t = this.getIntermediaryStepDirection(this.lastSelectedNode, e);
					if (0 !== t.row || 0 !== t.col)
						for (var n = {
								row: this.lastSelectedNode.row + t.row,
								col: this.lastSelectedNode.col + t.col
							}, r = Math.max(this.rows, this.cols), o = 0; o++ < r && (n.row !== e.row || n.col !== e.col);) this.isSelected(n) || this.selectedNodes.push(n), n = {
							row: n.row + t.row,
							col: n.col + t.col
						};
					this.lastSelectedNode = e
				}
			}, {
				key: "getIntermediaryStepDirection",
				value: function (e, t) {
					var n = {
						row: 0,
						col: 0
					};
					if (!e) return n;
					var r = Math.abs(e.row - t.row),
						o = Math.abs(e.col - t.col);
					if (1 === r || 1 === o) return n;
					var a = e.row - t.row < 0 ? 1 : -1,
						u = e.col - t.col < 0 ? 1 : -1;
					if (0 === r) 0 !== o && (n.col = u);
					else if (0 === o) n.row = a;
					else {
						var c = Math.max(r, o),
							s = Math.min(r, o),
							l = (0, i.gcd)(c, s);
						c % s == 0 && (n.col = o / l * u, n.row = r / l * a)
					}
					return n
				}
			}, {
				key: "renderGrid",
				value: function () {
					this.ctx.fillStyle = this.themeState.colors.bg, this.ctx.fillRect(0, 0, this.dimens.width, this.dimens.height), this.interval = {
						x: this.dimens.width / (this.rows + 1),
						y: this.dimens.height / (this.cols + 1)
					}, this.forEachNode(this.drawNode.bind(this))
				}
			}, {
				key: "forEachNode",
				value: function (e) {
					var t = Array(this.rows + 1).fill(this.interval.x),
						n = Array(this.cols + 1).fill(this.interval.y),
						r = new Error("Break Exception");
					try {
						n.reduce(function (n, o) {
							return t.reduce(function (t, o) {
								if (!1 === e(t, n)) throw r;
								return t + o
							}), n + o
						})
					} catch (e) {
						if (e !== r) throw e
					}
				}
			}, {
				key: "drawNode",
				value: function (e, t, n, r, o) {
					var i = this.themeState,
						a = i.dimens,
						u = a.node_ring,
						c = a.node_radius,
						s = a.node_core,
						l = i.colors.primary;
					this.ctx.lineWidth = o || u, this.ctx.fillStyle = n || l, this.ctx.strokeStyle = r || l, this.ctx.beginPath(), this.ctx.arc(e, t, s, 0, 2 * Math.PI), this.ctx.fill(), this.ctx.beginPath(), this.ctx.arc(e, t, c, 0, 2 * Math.PI), this.ctx.stroke()
				}
			}, {
				key: "joinNodes",
				value: function (e, t, n, r) {
					var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
						i = this.interval;
					o && (i = {
						x: 1,
						y: 1
					});
					var a = {
							x: i.x * e,
							y: i.y * t
						},
						u = {
							x: i.x * n,
							y: i.y * r
						};
					this.ctx.lineWidth = this.themeState.dimens.line_width, this.ctx.strokeStyle = this.themeState.colors.accent, this.ctx.lineCap = "round", this.ctx.beginPath(), this.ctx.moveTo(a.x, a.y), this.ctx.lineTo(u.x, u.y), this.ctx.stroke()
				}
			}]), e
		}();
	t.PatternLock = g;
	t.default = function () {
		for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
		return s(g, t)
	}
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = t.MATCH_FAILURE = t.MATCH_SUCCESS = void 0;
	var r = function (e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}(n(3));
	t.MATCH_SUCCESS = "MATCH_SUCCESS";
	t.MATCH_FAILURE = "MATCH_FAILURE";
	t.default = function (e, t) {
		var n = t || (0, r.default)(),
			o = {
				check: function (t) {
					return function (e, t) {
						return -1 !== e.indexOf(t)
					}(e, t) ? n.emit("MATCH_SUCCESS") : n.emit("MATCH_FAILURE")
				},
				onSuccess: function (e) {
					return n.on("MATCH_SUCCESS", e), o
				},
				onFailure: function (e) {
					return n.on("MATCH_FAILURE", e), o
				}
			};
		return o
	}
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getPixelRatio = t.raf = t.registerEvent = t.unregisterEvent = void 0;
	var r = function (e, t, n) {
		return t.split(" ").forEach(function (t) {
			return e.removeEventListener(t, n, {
				passive: !1
			})
		})
	};
	t.unregisterEvent = r;
	t.registerEvent = function (e, t, n) {
		return t.split(" ").forEach(function (t) {
				return e.addEventListener(t, n, {
					passive: !1
				})
			}),
			function () {
				return r(e, t, n)
			}
	};
	var o = requestAnimationFrame || function (e) {
		return setTimeout(e, 16)
	};
	t.raf = o;
	t.getPixelRatio = function (e) {
		return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
	}
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = void 0;
	var r = {},
		o = {
			line_width: 6,
			node_radius: 20,
			node_core: 8,
			node_ring: 1
		};
	r.dark = {
		default: {
			colors: {
				accent: "#39FF14",
				primary: "#ffffff",
				bg: "#2c3e50"
			},
			dimens: o
		},
		success: {
			colors: {
				accent: "#51e980"
			}
		},
		failure: {
			colors: {
				accent: "#e74c3c"
			}
		}
	}, r.light = {
		default: {
			colors: {
				accent: "#ae64cd",
				primary: "#34495e",
				bg: "#ecf0f1"
			},
			dimens: o
		},
		success: {
			colors: {
				accent: "#27ae60"
			}
		},
		failure: {
			colors: {
				accent: "#e74c3c"
			}
		}
	};
	var i = r;
	t.default = i
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.isEqual = t.prettyPrint = void 0;
	var r = function (e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
			n = Array(t).fill(" ").join(""),
			r = Object.keys(e).map(function (t) {
				return "".concat(t, ": ").concat(function (e) {
					return e.expresssion ? e.expresssion : JSON.stringify(e)
				}(e[t]), ",")
			}).map(function (e) {
				return "".concat(n).concat(e)
			}).join("\n");
		return "{\n".concat(r, "\n}")
	};
	t.prettyPrint = r, r.expresssion = function (e) {
		return {
			expresssion: e
		}
	};
	t.isEqual = function (e, t) {
		if (e === t) return !0;
		if (Object.keys(e).length !== Object.keys(t).length) return !1;
		for (var n in e)
			if (e[n] !== t[n]) return !1;
		return !0
	}
}, function (e, t, n) {
	/*!
	 * clipboard.js v2.0.1
	 * https://zenorocha.github.io/clipboard.js
	 *
	 * Licensed MIT © Zeno Rocha
	 */
	! function (t, n) {
		e.exports = n()
	}(0, function () {
		return function (e) {
			var t = {};

			function n(r) {
				if (t[r]) return t[r].exports;
				var o = t[r] = {
					i: r,
					l: !1,
					exports: {}
				};
				return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
			}
			return n.m = e, n.c = t, n.i = function (e) {
				return e
			}, n.d = function (e, t, r) {
				n.o(e, t) || Object.defineProperty(e, t, {
					configurable: !1,
					enumerable: !0,
					get: r
				})
			}, n.n = function (e) {
				var t = e && e.__esModule ? function () {
					return e.default
				} : function () {
					return e
				};
				return n.d(t, "a", t), t
			}, n.o = function (e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}, n.p = "", n(n.s = 3)
		}([function (e, t, n) {
			var r, o, i;
			o = [e, n(7)], void 0 === (i = "function" == typeof (r = function (e, t) {
				"use strict";
				var n = function (e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(t),
					r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
						return typeof e
					} : function (e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					o = function () {
						function e(e, t) {
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
							}
						}
						return function (t, n, r) {
							return n && e(t.prototype, n), r && e(t, r), t
						}
					}(),
					i = function () {
						function e(t) {
							! function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, e), this.resolveOptions(t), this.initSelection()
						}
						return o(e, [{
							key: "resolveOptions",
							value: function () {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
							}
						}, {
							key: "initSelection",
							value: function () {
								this.text ? this.selectFake() : this.target && this.selectTarget()
							}
						}, {
							key: "selectFake",
							value: function () {
								var e = this,
									t = "rtl" == document.documentElement.getAttribute("dir");
								this.removeFake(), this.fakeHandlerCallback = function () {
									return e.removeFake()
								}, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
								var r = window.pageYOffset || document.documentElement.scrollTop;
								this.fakeElem.style.top = r + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, n.default)(this.fakeElem), this.copyText()
							}
						}, {
							key: "removeFake",
							value: function () {
								this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
							}
						}, {
							key: "selectTarget",
							value: function () {
								this.selectedText = (0, n.default)(this.target), this.copyText()
							}
						}, {
							key: "copyText",
							value: function () {
								var e = void 0;
								try {
									e = document.execCommand(this.action)
								} catch (t) {
									e = !1
								}
								this.handleResult(e)
							}
						}, {
							key: "handleResult",
							value: function (e) {
								this.emitter.emit(e ? "success" : "error", {
									action: this.action,
									text: this.selectedText,
									trigger: this.trigger,
									clearSelection: this.clearSelection.bind(this)
								})
							}
						}, {
							key: "clearSelection",
							value: function () {
								this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
							}
						}, {
							key: "destroy",
							value: function () {
								this.removeFake()
							}
						}, {
							key: "action",
							set: function () {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
								if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
							},
							get: function () {
								return this._action
							}
						}, {
							key: "target",
							set: function (e) {
								if (void 0 !== e) {
									if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
									if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
									if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
									this._target = e
								}
							},
							get: function () {
								return this._target
							}
						}]), e
					}();
				e.exports = i
			}) ? r.apply(t, o) : r) || (e.exports = i)
		}, function (e, t, n) {
			var r = n(6),
				o = n(5);
			e.exports = function (e, t, n) {
				if (!e && !t && !n) throw new Error("Missing required arguments");
				if (!r.string(t)) throw new TypeError("Second argument must be a String");
				if (!r.fn(n)) throw new TypeError("Third argument must be a Function");
				if (r.node(e)) return function (e, t, n) {
					return e.addEventListener(t, n), {
						destroy: function () {
							e.removeEventListener(t, n)
						}
					}
				}(e, t, n);
				if (r.nodeList(e)) return function (e, t, n) {
					return Array.prototype.forEach.call(e, function (e) {
						e.addEventListener(t, n)
					}), {
						destroy: function () {
							Array.prototype.forEach.call(e, function (e) {
								e.removeEventListener(t, n)
							})
						}
					}
				}(e, t, n);
				if (r.string(e)) return function (e, t, n) {
					return o(document.body, e, t, n)
				}(e, t, n);
				throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
			}
		}, function (e, t) {
			function n() {}
			n.prototype = {
				on: function (e, t, n) {
					var r = this.e || (this.e = {});
					return (r[e] || (r[e] = [])).push({
						fn: t,
						ctx: n
					}), this
				},
				once: function (e, t, n) {
					var r = this;

					function o() {
						r.off(e, o), t.apply(n, arguments)
					}
					return o._ = t, this.on(e, o, n)
				},
				emit: function (e) {
					for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, o = n.length; r < o; r++) n[r].fn.apply(n[r].ctx, t);
					return this
				},
				off: function (e, t) {
					var n = this.e || (this.e = {}),
						r = n[e],
						o = [];
					if (r && t)
						for (var i = 0, a = r.length; i < a; i++) r[i].fn !== t && r[i].fn._ !== t && o.push(r[i]);
					return o.length ? n[e] = o : delete n[e], this
				}
			}, e.exports = n
		}, function (e, t, n) {
			var r, o, i;
			o = [e, n(0), n(2), n(1)], void 0 === (i = "function" == typeof (r = function (e, t, n, r) {
				"use strict";
				var o = u(t),
					i = u(n),
					a = u(r);

				function u(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
						return typeof e
					} : function (e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					s = function () {
						function e(e, t) {
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
							}
						}
						return function (t, n, r) {
							return n && e(t.prototype, n), r && e(t, r), t
						}
					}(),
					l = function (e) {
						function t(e, n) {
							! function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t);
							var r = function (e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
							return r.resolveOptions(n), r.listenClick(e), r
						}
						return function (e, t) {
							if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
							e.prototype = Object.create(t && t.prototype, {
								constructor: {
									value: e,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
						}(t, e), s(t, [{
							key: "resolveOptions",
							value: function () {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === c(e.container) ? e.container : document.body
							}
						}, {
							key: "listenClick",
							value: function (e) {
								var t = this;
								this.listener = (0, a.default)(e, "click", function (e) {
									return t.onClick(e)
								})
							}
						}, {
							key: "onClick",
							value: function (e) {
								var t = e.delegateTarget || e.currentTarget;
								this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new o.default({
									action: this.action(t),
									target: this.target(t),
									text: this.text(t),
									container: this.container,
									trigger: t,
									emitter: this
								})
							}
						}, {
							key: "defaultAction",
							value: function (e) {
								return f("action", e)
							}
						}, {
							key: "defaultTarget",
							value: function (e) {
								var t = f("target", e);
								if (t) return document.querySelector(t)
							}
						}, {
							key: "defaultText",
							value: function (e) {
								return f("text", e)
							}
						}, {
							key: "destroy",
							value: function () {
								this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
							}
						}], [{
							key: "isSupported",
							value: function () {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
									t = "string" == typeof e ? [e] : e,
									n = !!document.queryCommandSupported;
								return t.forEach(function (e) {
									n = n && !!document.queryCommandSupported(e)
								}), n
							}
						}]), t
					}(i.default);

				function f(e, t) {
					var n = "data-clipboard-" + e;
					if (t.hasAttribute(n)) return t.getAttribute(n)
				}
				e.exports = l
			}) ? r.apply(t, o) : r) || (e.exports = i)
		}, function (e, t) {
			var n = 9;
			if ("undefined" != typeof Element && !Element.prototype.matches) {
				var r = Element.prototype;
				r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
			}
			e.exports = function (e, t) {
				for (; e && e.nodeType !== n;) {
					if ("function" == typeof e.matches && e.matches(t)) return e;
					e = e.parentNode
				}
			}
		}, function (e, t, n) {
			var r = n(4);

			function o(e, t, n, o, i) {
				var a = function (e, t, n, o) {
					return function (n) {
						n.delegateTarget = r(n.target, t), n.delegateTarget && o.call(e, n)
					}
				}.apply(this, arguments);
				return e.addEventListener(n, a, i), {
					destroy: function () {
						e.removeEventListener(n, a, i)
					}
				}
			}
			e.exports = function (e, t, n, r, i) {
				return "function" == typeof e.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function (e) {
					return o(e, t, n, r, i)
				}))
			}
		}, function (e, t) {
			t.node = function (e) {
				return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
			}, t.nodeList = function (e) {
				var n = Object.prototype.toString.call(e);
				return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]))
			}, t.string = function (e) {
				return "string" == typeof e || e instanceof String
			}, t.fn = function (e) {
				return "[object Function]" === Object.prototype.toString.call(e)
			}
		}, function (e, t) {
			e.exports = function (e) {
				var t;
				if ("SELECT" === e.nodeName) e.focus(), t = e.value;
				else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
					var n = e.hasAttribute("readonly");
					n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
				} else {
					e.hasAttribute("contenteditable") && e.focus();
					var r = window.getSelection(),
						o = document.createRange();
					o.selectNodeContents(e), r.removeAllRanges(), r.addRange(o), t = r.toString()
				}
				return t
			}
		}])
	})
}]);

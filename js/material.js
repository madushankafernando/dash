/*! For license information please see material.js.LICENSE.txt */
(() => {
    "use strict";
    var e = function(t, i) {
        return (e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            })(t, i)
    };

    function t(t, i) {
        if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");

        function r() {
            this.constructor = t
        }
        e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
    }
    var i = function() {
        return (i = Object.assign || function(e) {
            for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var o in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };

    function r(e, t) {
        var i = "function" == typeof Symbol && e[Symbol.iterator];
        if (!i) return e;
        var r, o, s = i.call(e),
            n = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(r = s.next()).done;) n.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (i = s.return) && i.call(s)
            } finally {
                if (o) throw o.error
            }
        }
        return n
    }

    function o(e, t) {
        for (var i = 0, r = t.length, o = e.length; i < r; i++, o++) e[o] = t[i];
        return e
    }
    Object.create, Object.create, Object.create, Object.create;
    var s = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        n = function() {
            function e(e, t) {
                for (var i = [], s = 2; s < arguments.length; s++) i[s - 2] = arguments[s];
                this.root = e, this.initialize.apply(this, o([], r(i))), this.foundation = void 0 === t ? this.getDefaultFoundation() : t, this.foundation.init(), this.initialSyncWithDOM()
            }
            return e.attachTo = function(t) {
                return new e(t, new s({}))
            }, e.prototype.initialize = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
            }, e.prototype.getDefaultFoundation = function() {
                throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")
            }, e.prototype.initialSyncWithDOM = function() {}, e.prototype.destroy = function() {
                this.foundation.destroy()
            }, e.prototype.listen = function(e, t, i) {
                this.root.addEventListener(e, t, i)
            }, e.prototype.unlisten = function(e, t, i) {
                this.root.removeEventListener(e, t, i)
            }, e.prototype.emit = function(e, t, i) {
                var r;
                void 0 === i && (i = !1), "function" == typeof CustomEvent ? r = new CustomEvent(e, {
                    bubbles: i,
                    detail: t
                }) : (r = document.createEvent("CustomEvent")).initCustomEvent(e, i, !1, t), this.root.dispatchEvent(r)
            }, e
        }();

    function a(e) {
        return void 0 === e && (e = window), !! function(e) {
            void 0 === e && (e = window);
            var t = !1;
            try {
                var i = {
                        get passive() {
                            return t = !0, !1
                        }
                    },
                    r = function() {};
                e.document.addEventListener("test", r, i), e.document.removeEventListener("test", r, i)
            } catch (e) {
                t = !1
            }
            return t
        }(e) && {
            passive: !0
        }
    }
    var c, d = {
            BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
            FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
            FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
            ROOT: "mdc-ripple-upgraded",
            UNBOUNDED: "mdc-ripple-upgraded--unbounded"
        },
        l = {
            VAR_FG_SCALE: "--mdc-ripple-fg-scale",
            VAR_FG_SIZE: "--mdc-ripple-fg-size",
            VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
            VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
            VAR_LEFT: "--mdc-ripple-left",
            VAR_TOP: "--mdc-ripple-top"
        },
        p = {
            DEACTIVATION_TIMEOUT_MS: 225,
            FG_DEACTIVATION_MS: 150,
            INITIAL_ORIGIN_SCALE: .6,
            PADDING: 10,
            TAP_DELAY_MS: 300
        },
        h = ["touchstart", "pointerdown", "mousedown", "keydown"],
        u = ["touchend", "pointerup", "mouseup", "contextmenu"],
        m = [],
        f = function(e) {
            function r(t) {
                var o = e.call(this, i(i({}, r.defaultAdapter), t)) || this;
                return o.activationAnimationHasEnded_ = !1, o.activationTimer_ = 0, o.fgDeactivationRemovalTimer_ = 0, o.fgScale_ = "0", o.frame_ = {
                    width: 0,
                    height: 0
                }, o.initialSize_ = 0, o.layoutFrame_ = 0, o.maxRadius_ = 0, o.unboundedCoords_ = {
                    left: 0,
                    top: 0
                }, o.activationState_ = o.defaultActivationState_(), o.activationTimerCallback_ = function() {
                    o.activationAnimationHasEnded_ = !0, o.runDeactivationUXLogicIfReady_()
                }, o.activateHandler_ = function(e) {
                    return o.activate_(e)
                }, o.deactivateHandler_ = function() {
                    return o.deactivate_()
                }, o.focusHandler_ = function() {
                    return o.handleFocus()
                }, o.blurHandler_ = function() {
                    return o.handleBlur()
                }, o.resizeHandler_ = function() {
                    return o.layout()
                }, o
            }
            return t(r, e), Object.defineProperty(r, "cssClasses", {
                get: function() {
                    return d
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(r, "strings", {
                get: function() {
                    return l
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(r, "numbers", {
                get: function() {
                    return p
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(r, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        browserSupportsCssVars: function() {
                            return !0
                        },
                        computeBoundingRect: function() {
                            return {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                width: 0,
                                height: 0
                            }
                        },
                        containsEventTarget: function() {
                            return !0
                        },
                        deregisterDocumentInteractionHandler: function() {},
                        deregisterInteractionHandler: function() {},
                        deregisterResizeHandler: function() {},
                        getWindowPageOffset: function() {
                            return {
                                x: 0,
                                y: 0
                            }
                        },
                        isSurfaceActive: function() {
                            return !0
                        },
                        isSurfaceDisabled: function() {
                            return !0
                        },
                        isUnbounded: function() {
                            return !0
                        },
                        registerDocumentInteractionHandler: function() {},
                        registerInteractionHandler: function() {},
                        registerResizeHandler: function() {},
                        removeClass: function() {},
                        updateCssVariable: function() {}
                    }
                },
                enumerable: !1,
                configurable: !0
            }), r.prototype.init = function() {
                var e = this,
                    t = this.supportsPressRipple_();
                if (this.registerRootHandlers_(t), t) {
                    var i = r.cssClasses,
                        o = i.ROOT,
                        s = i.UNBOUNDED;
                    requestAnimationFrame((function() {
                        e.adapter.addClass(o), e.adapter.isUnbounded() && (e.adapter.addClass(s), e.layoutInternal_())
                    }))
                }
            }, r.prototype.destroy = function() {
                var e = this;
                if (this.supportsPressRipple_()) {
                    this.activationTimer_ && (clearTimeout(this.activationTimer_), this.activationTimer_ = 0, this.adapter.removeClass(r.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer_ && (clearTimeout(this.fgDeactivationRemovalTimer_), this.fgDeactivationRemovalTimer_ = 0, this.adapter.removeClass(r.cssClasses.FG_DEACTIVATION));
                    var t = r.cssClasses,
                        i = t.ROOT,
                        o = t.UNBOUNDED;
                    requestAnimationFrame((function() {
                        e.adapter.removeClass(i), e.adapter.removeClass(o), e.removeCssVars_()
                    }))
                }
                this.deregisterRootHandlers_(), this.deregisterDeactivationHandlers_()
            }, r.prototype.activate = function(e) {
                this.activate_(e)
            }, r.prototype.deactivate = function() {
                this.deactivate_()
            }, r.prototype.layout = function() {
                var e = this;
                this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = requestAnimationFrame((function() {
                    e.layoutInternal_(), e.layoutFrame_ = 0
                }))
            }, r.prototype.setUnbounded = function(e) {
                var t = r.cssClasses.UNBOUNDED;
                e ? this.adapter.addClass(t) : this.adapter.removeClass(t)
            }, r.prototype.handleFocus = function() {
                var e = this;
                requestAnimationFrame((function() {
                    return e.adapter.addClass(r.cssClasses.BG_FOCUSED)
                }))
            }, r.prototype.handleBlur = function() {
                var e = this;
                requestAnimationFrame((function() {
                    return e.adapter.removeClass(r.cssClasses.BG_FOCUSED)
                }))
            }, r.prototype.supportsPressRipple_ = function() {
                return this.adapter.browserSupportsCssVars()
            }, r.prototype.defaultActivationState_ = function() {
                return {
                    activationEvent: void 0,
                    hasDeactivationUXRun: !1,
                    isActivated: !1,
                    isProgrammatic: !1,
                    wasActivatedByPointer: !1,
                    wasElementMadeActive: !1
                }
            }, r.prototype.registerRootHandlers_ = function(e) {
                var t = this;
                e && (h.forEach((function(e) {
                    t.adapter.registerInteractionHandler(e, t.activateHandler_)
                })), this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler_)), this.adapter.registerInteractionHandler("focus", this.focusHandler_), this.adapter.registerInteractionHandler("blur", this.blurHandler_)
            }, r.prototype.registerDeactivationHandlers_ = function(e) {
                var t = this;
                "keydown" === e.type ? this.adapter.registerInteractionHandler("keyup", this.deactivateHandler_) : u.forEach((function(e) {
                    t.adapter.registerDocumentInteractionHandler(e, t.deactivateHandler_)
                }))
            }, r.prototype.deregisterRootHandlers_ = function() {
                var e = this;
                h.forEach((function(t) {
                    e.adapter.deregisterInteractionHandler(t, e.activateHandler_)
                })), this.adapter.deregisterInteractionHandler("focus", this.focusHandler_), this.adapter.deregisterInteractionHandler("blur", this.blurHandler_), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler_)
            }, r.prototype.deregisterDeactivationHandlers_ = function() {
                var e = this;
                this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler_), u.forEach((function(t) {
                    e.adapter.deregisterDocumentInteractionHandler(t, e.deactivateHandler_)
                }))
            }, r.prototype.removeCssVars_ = function() {
                var e = this,
                    t = r.strings;
                Object.keys(t).forEach((function(i) {
                    0 === i.indexOf("VAR_") && e.adapter.updateCssVariable(t[i], null)
                }))
            }, r.prototype.activate_ = function(e) {
                var t = this;
                if (!this.adapter.isSurfaceDisabled()) {
                    var i = this.activationState_;
                    if (!i.isActivated) {
                        var r = this.previousActivationEvent_;
                        r && void 0 !== e && r.type !== e.type || (i.isActivated = !0, i.isProgrammatic = void 0 === e, i.activationEvent = e, i.wasActivatedByPointer = !i.isProgrammatic && void 0 !== e && ("mousedown" === e.type || "touchstart" === e.type || "pointerdown" === e.type), void 0 !== e && m.length > 0 && m.some((function(e) {
                            return t.adapter.containsEventTarget(e)
                        })) ? this.resetActivationState_() : (void 0 !== e && (m.push(e.target), this.registerDeactivationHandlers_(e)), i.wasElementMadeActive = this.checkElementMadeActive_(e), i.wasElementMadeActive && this.animateActivation_(), requestAnimationFrame((function() {
                            m = [], i.wasElementMadeActive || void 0 === e || " " !== e.key && 32 !== e.keyCode || (i.wasElementMadeActive = t.checkElementMadeActive_(e), i.wasElementMadeActive && t.animateActivation_()), i.wasElementMadeActive || (t.activationState_ = t.defaultActivationState_())
                        }))))
                    }
                }
            }, r.prototype.checkElementMadeActive_ = function(e) {
                return void 0 === e || "keydown" !== e.type || this.adapter.isSurfaceActive()
            }, r.prototype.animateActivation_ = function() {
                var e = this,
                    t = r.strings,
                    i = t.VAR_FG_TRANSLATE_START,
                    o = t.VAR_FG_TRANSLATE_END,
                    s = r.cssClasses,
                    n = s.FG_DEACTIVATION,
                    a = s.FG_ACTIVATION,
                    c = r.numbers.DEACTIVATION_TIMEOUT_MS;
                this.layoutInternal_();
                var d = "",
                    l = "";
                if (!this.adapter.isUnbounded()) {
                    var p = this.getFgTranslationCoordinates_(),
                        h = p.startPoint,
                        u = p.endPoint;
                    d = h.x + "px, " + h.y + "px", l = u.x + "px, " + u.y + "px"
                }
                this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(o, l), clearTimeout(this.activationTimer_), clearTimeout(this.fgDeactivationRemovalTimer_), this.rmBoundedActivationClasses_(), this.adapter.removeClass(n), this.adapter.computeBoundingRect(), this.adapter.addClass(a), this.activationTimer_ = setTimeout((function() {
                    return e.activationTimerCallback_()
                }), c)
            }, r.prototype.getFgTranslationCoordinates_ = function() {
                var e, t = this.activationState_,
                    i = t.activationEvent;
                return {
                    startPoint: e = {
                        x: (e = t.wasActivatedByPointer ? function(e, t, i) {
                            if (!e) return {
                                x: 0,
                                y: 0
                            };
                            var r, o, s = t.x,
                                n = t.y,
                                a = s + i.left,
                                c = n + i.top;
                            if ("touchstart" === e.type) {
                                var d = e;
                                r = d.changedTouches[0].pageX - a, o = d.changedTouches[0].pageY - c
                            } else {
                                var l = e;
                                r = l.pageX - a, o = l.pageY - c
                            }
                            return {
                                x: r,
                                y: o
                            }
                        }(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : {
                            x: this.frame_.width / 2,
                            y: this.frame_.height / 2
                        }).x - this.initialSize_ / 2,
                        y: e.y - this.initialSize_ / 2
                    },
                    endPoint: {
                        x: this.frame_.width / 2 - this.initialSize_ / 2,
                        y: this.frame_.height / 2 - this.initialSize_ / 2
                    }
                }
            }, r.prototype.runDeactivationUXLogicIfReady_ = function() {
                var e = this,
                    t = r.cssClasses.FG_DEACTIVATION,
                    i = this.activationState_,
                    o = i.hasDeactivationUXRun,
                    s = i.isActivated;
                (o || !s) && this.activationAnimationHasEnded_ && (this.rmBoundedActivationClasses_(), this.adapter.addClass(t), this.fgDeactivationRemovalTimer_ = setTimeout((function() {
                    e.adapter.removeClass(t)
                }), p.FG_DEACTIVATION_MS))
            }, r.prototype.rmBoundedActivationClasses_ = function() {
                var e = r.cssClasses.FG_ACTIVATION;
                this.adapter.removeClass(e), this.activationAnimationHasEnded_ = !1, this.adapter.computeBoundingRect()
            }, r.prototype.resetActivationState_ = function() {
                var e = this;
                this.previousActivationEvent_ = this.activationState_.activationEvent, this.activationState_ = this.defaultActivationState_(), setTimeout((function() {
                    return e.previousActivationEvent_ = void 0
                }), r.numbers.TAP_DELAY_MS)
            }, r.prototype.deactivate_ = function() {
                var e = this,
                    t = this.activationState_;
                if (t.isActivated) {
                    var r = i({}, t);
                    t.isProgrammatic ? (requestAnimationFrame((function() {
                        return e.animateDeactivation_(r)
                    })), this.resetActivationState_()) : (this.deregisterDeactivationHandlers_(), requestAnimationFrame((function() {
                        e.activationState_.hasDeactivationUXRun = !0, e.animateDeactivation_(r), e.resetActivationState_()
                    })))
                }
            }, r.prototype.animateDeactivation_ = function(e) {
                var t = e.wasActivatedByPointer,
                    i = e.wasElementMadeActive;
                (t || i) && this.runDeactivationUXLogicIfReady_()
            }, r.prototype.layoutInternal_ = function() {
                this.frame_ = this.adapter.computeBoundingRect();
                var e = Math.max(this.frame_.height, this.frame_.width);
                this.maxRadius_ = this.adapter.isUnbounded() ? e : Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2)) + r.numbers.PADDING;
                var t = Math.floor(e * r.numbers.INITIAL_ORIGIN_SCALE);
                this.adapter.isUnbounded() && t % 2 != 0 ? this.initialSize_ = t - 1 : this.initialSize_ = t, this.fgScale_ = "" + this.maxRadius_ / this.initialSize_, this.updateLayoutCssVars_()
            }, r.prototype.updateLayoutCssVars_ = function() {
                var e = r.strings,
                    t = e.VAR_FG_SIZE,
                    i = e.VAR_LEFT,
                    o = e.VAR_TOP,
                    s = e.VAR_FG_SCALE;
                this.adapter.updateCssVariable(t, this.initialSize_ + "px"), this.adapter.updateCssVariable(s, this.fgScale_), this.adapter.isUnbounded() && (this.unboundedCoords_ = {
                    left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                    top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
                }, this.adapter.updateCssVariable(i, this.unboundedCoords_.left + "px"), this.adapter.updateCssVariable(o, this.unboundedCoords_.top + "px"))
            }, r
        }(s),
        _ = function(e) {
            function i() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.disabled = !1, t
            }
            return t(i, e), i.attachTo = function(e, t) {
                void 0 === t && (t = {
                    isUnbounded: void 0
                });
                var r = new i(e);
                return void 0 !== t.isUnbounded && (r.unbounded = t.isUnbounded), r
            }, i.createAdapter = function(e) {
                return {
                    addClass: function(t) {
                        return e.root.classList.add(t)
                    },
                    browserSupportsCssVars: function() {
                        return function(e, t) {
                            void 0 === t && (t = !1);
                            var i, r = window.CSS;
                            if ("boolean" == typeof c && !t) return c;
                            if (!r || "function" != typeof r.supports) return !1;
                            var o = r.supports("--css-vars", "yes"),
                                s = r.supports("(--css-vars: yes)") && r.supports("color", "#00000000");
                            return i = o || s, t || (c = i), i
                        }()
                    },
                    computeBoundingRect: function() {
                        return e.root.getBoundingClientRect()
                    },
                    containsEventTarget: function(t) {
                        return e.root.contains(t)
                    },
                    deregisterDocumentInteractionHandler: function(e, t) {
                        return document.documentElement.removeEventListener(e, t, a())
                    },
                    deregisterInteractionHandler: function(t, i) {
                        return e.root.removeEventListener(t, i, a())
                    },
                    deregisterResizeHandler: function(e) {
                        return window.removeEventListener("resize", e)
                    },
                    getWindowPageOffset: function() {
                        return {
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        }
                    },
                    isSurfaceActive: function() {
                        return function(e, t) {
                            return (e.matches || e.webkitMatchesSelector || e.msMatchesSelector).call(e, t)
                        }(e.root, ":active")
                    },
                    isSurfaceDisabled: function() {
                        return Boolean(e.disabled)
                    },
                    isUnbounded: function() {
                        return Boolean(e.unbounded)
                    },
                    registerDocumentInteractionHandler: function(e, t) {
                        return document.documentElement.addEventListener(e, t, a())
                    },
                    registerInteractionHandler: function(t, i) {
                        return e.root.addEventListener(t, i, a())
                    },
                    registerResizeHandler: function(e) {
                        return window.addEventListener("resize", e)
                    },
                    removeClass: function(t) {
                        return e.root.classList.remove(t)
                    },
                    updateCssVariable: function(t, i) {
                        return e.root.style.setProperty(t, i)
                    }
                }
            }, Object.defineProperty(i.prototype, "unbounded", {
                get: function() {
                    return Boolean(this.unbounded_)
                },
                set: function(e) {
                    this.unbounded_ = Boolean(e), this.setUnbounded_()
                },
                enumerable: !1,
                configurable: !0
            }), i.prototype.activate = function() {
                this.foundation.activate()
            }, i.prototype.deactivate = function() {
                this.foundation.deactivate()
            }, i.prototype.layout = function() {
                this.foundation.layout()
            }, i.prototype.getDefaultFoundation = function() {
                return new f(i.createAdapter(this))
            }, i.prototype.initialSyncWithDOM = function() {
                var e = this.root;
                this.unbounded = "mdcRippleIsUnbounded" in e.dataset
            }, i.prototype.setUnbounded_ = function() {
                this.foundation.setUnbounded(Boolean(this.unbounded_))
            }, i
        }(n),
        b = function(e, t) {
            return (b = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        };

    function g(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function i() {
            this.constructor = e
        }
        b(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    }
    var y = function() {
        return (y = Object.assign || function(e) {
            for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var o in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };

    function v(e, t, i, r) {
        var o, s = arguments.length,
            n = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, r);
        else
            for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (n = (s < 3 ? o(n) : s > 3 ? o(t, i, n) : o(t, i)) || n);
        return s > 3 && n && Object.defineProperty(t, i, n), n
    }
    Object.create, Object.create;
    const S = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
        x = (e, t, i = null) => {
            for (; t !== i;) {
                const i = t.nextSibling;
                e.removeChild(t), t = i
            }
        },
        w = `{{lit-${String(Math.random()).slice(2)}}}`,
        C = `\x3c!--${w}--\x3e`,
        P = new RegExp(`${w}|${C}`),
        k = "$lit$";
    class A {
        constructor(e, t) {
            this.parts = [], this.element = t;
            const i = [],
                r = [],
                o = document.createTreeWalker(t.content, 133, null, !1);
            let s = 0,
                n = -1,
                a = 0;
            const {
                strings: c,
                values: {
                    length: d
                }
            } = e;
            for (; a < d;) {
                const e = o.nextNode();
                if (null !== e) {
                    if (n++, 1 === e.nodeType) {
                        if (e.hasAttributes()) {
                            const t = e.attributes,
                                {
                                    length: i
                                } = t;
                            let r = 0;
                            for (let e = 0; e < i; e++) E(t[e].name, k) && r++;
                            for (; r-- > 0;) {
                                const t = c[a],
                                    i = R.exec(t)[2],
                                    r = i.toLowerCase() + k,
                                    o = e.getAttribute(r);
                                e.removeAttribute(r);
                                const s = o.split(P);
                                this.parts.push({
                                    type: "attribute",
                                    index: n,
                                    name: i,
                                    strings: s
                                }), a += s.length - 1
                            }
                        }
                        "TEMPLATE" === e.tagName && (r.push(e), o.currentNode = e.content)
                    } else if (3 === e.nodeType) {
                        const t = e.data;
                        if (t.indexOf(w) >= 0) {
                            const r = e.parentNode,
                                o = t.split(P),
                                s = o.length - 1;
                            for (let t = 0; t < s; t++) {
                                let i, s = o[t];
                                if ("" === s) i = O();
                                else {
                                    const e = R.exec(s);
                                    null !== e && E(e[2], k) && (s = s.slice(0, e.index) + e[1] + e[2].slice(0, -k.length) + e[3]), i = document.createTextNode(s)
                                }
                                r.insertBefore(i, e), this.parts.push({
                                    type: "node",
                                    index: ++n
                                })
                            }
                            "" === o[s] ? (r.insertBefore(O(), e), i.push(e)) : e.data = o[s], a += s
                        }
                    } else if (8 === e.nodeType)
                        if (e.data === w) {
                            const t = e.parentNode;
                            null !== e.previousSibling && n !== s || (n++, t.insertBefore(O(), e)), s = n, this.parts.push({
                                type: "node",
                                index: n
                            }), null === e.nextSibling ? e.data = "" : (i.push(e), n--), a++
                        } else {
                            let t = -1;
                            for (; - 1 !== (t = e.data.indexOf(w, t + 1));) this.parts.push({
                                type: "node",
                                index: -1
                            }), a++
                        }
                } else o.currentNode = r.pop()
            }
            for (const e of i) e.parentNode.removeChild(e)
        }
    }
    const E = (e, t) => {
            const i = e.length - t.length;
            return i >= 0 && e.slice(i) === t
        },
        T = e => -1 !== e.index,
        O = () => document.createComment(""),
        R = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

    function I(e, t) {
        const {
            element: {
                content: i
            },
            parts: r
        } = e, o = document.createTreeWalker(i, 133, null, !1);
        let s = z(r),
            n = r[s],
            a = -1,
            c = 0;
        const d = [];
        let l = null;
        for (; o.nextNode();) {
            a++;
            const e = o.currentNode;
            for (e.previousSibling === l && (l = null), t.has(e) && (d.push(e), null === l && (l = e)), null !== l && c++; void 0 !== n && n.index === a;) n.index = null !== l ? -1 : n.index - c, s = z(r, s), n = r[s]
        }
        d.forEach((e => e.parentNode.removeChild(e)))
    }
    const U = e => {
            let t = 11 === e.nodeType ? 0 : 1;
            const i = document.createTreeWalker(e, 133, null, !1);
            for (; i.nextNode();) t++;
            return t
        },
        z = (e, t = -1) => {
            for (let i = t + 1; i < e.length; i++) {
                const t = e[i];
                if (T(t)) return i
            }
            return -1
        },
        N = new WeakMap,
        F = e => (...t) => {
            const i = e(...t);
            return N.set(i, !0), i
        },
        M = e => "function" == typeof e && N.has(e),
        L = {},
        D = {};
    class V {
        constructor(e, t, i) {
            this.__parts = [], this.template = e, this.processor = t, this.options = i
        }
        update(e) {
            let t = 0;
            for (const i of this.__parts) void 0 !== i && i.setValue(e[t]), t++;
            for (const e of this.__parts) void 0 !== e && e.commit()
        }
        _clone() {
            const e = S ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
                t = [],
                i = this.template.parts,
                r = document.createTreeWalker(e, 133, null, !1);
            let o, s = 0,
                n = 0,
                a = r.nextNode();
            for (; s < i.length;)
                if (o = i[s], T(o)) {
                    for (; n < o.index;) n++, "TEMPLATE" === a.nodeName && (t.push(a), r.currentNode = a.content), null === (a = r.nextNode()) && (r.currentNode = t.pop(), a = r.nextNode());
                    if ("node" === o.type) {
                        const e = this.processor.handleTextExpression(this.options);
                        e.insertAfterNode(a.previousSibling), this.__parts.push(e)
                    } else this.__parts.push(...this.processor.handleAttributeExpressions(a, o.name, o.strings, this.options));
                    s++
                } else this.__parts.push(void 0), s++;
            return S && (document.adoptNode(e), customElements.upgrade(e)), e
        }
    }
    const H = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
            createHTML: e => e
        }),
        j = ` ${w} `;
    class B {
        constructor(e, t, i, r) {
            this.strings = e, this.values = t, this.type = i, this.processor = r
        }
        getHTML() {
            const e = this.strings.length - 1;
            let t = "",
                i = !1;
            for (let r = 0; r < e; r++) {
                const e = this.strings[r],
                    o = e.lastIndexOf("\x3c!--");
                i = (o > -1 || i) && -1 === e.indexOf("--\x3e", o + 1);
                const s = R.exec(e);
                t += null === s ? e + (i ? j : C) : e.substr(0, s.index) + s[1] + s[2] + k + s[3] + w
            }
            return t += this.strings[e], t
        }
        getTemplateElement() {
            const e = document.createElement("template");
            let t = this.getHTML();
            return void 0 !== H && (t = H.createHTML(t)), e.innerHTML = t, e
        }
    }
    const q = e => null === e || !("object" == typeof e || "function" == typeof e),
        $ = e => Array.isArray(e) || !(!e || !e[Symbol.iterator]);
    class X {
        constructor(e, t, i) {
            this.dirty = !0, this.element = e, this.name = t, this.strings = i, this.parts = [];
            for (let e = 0; e < i.length - 1; e++) this.parts[e] = this._createPart()
        }
        _createPart() {
            return new G(this)
        }
        _getValue() {
            const e = this.strings,
                t = e.length - 1,
                i = this.parts;
            if (1 === t && "" === e[0] && "" === e[1]) {
                const e = i[0].value;
                if ("symbol" == typeof e) return String(e);
                if ("string" == typeof e || !$(e)) return e
            }
            let r = "";
            for (let o = 0; o < t; o++) {
                r += e[o];
                const t = i[o];
                if (void 0 !== t) {
                    const e = t.value;
                    if (q(e) || !$(e)) r += "string" == typeof e ? e : String(e);
                    else
                        for (const t of e) r += "string" == typeof t ? t : String(t)
                }
            }
            return r += e[t], r
        }
        commit() {
            this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()))
        }
    }
    class G {
        constructor(e) {
            this.value = void 0, this.committer = e
        }
        setValue(e) {
            e === L || q(e) && e === this.value || (this.value = e, M(e) || (this.committer.dirty = !0))
        }
        commit() {
            for (; M(this.value);) {
                const e = this.value;
                this.value = L, e(this)
            }
            this.value !== L && this.committer.commit()
        }
    }
    class J {
        constructor(e) {
            this.value = void 0, this.__pendingValue = void 0, this.options = e
        }
        appendInto(e) {
            this.startNode = e.appendChild(O()), this.endNode = e.appendChild(O())
        }
        insertAfterNode(e) {
            this.startNode = e, this.endNode = e.nextSibling
        }
        appendIntoPart(e) {
            e.__insert(this.startNode = O()), e.__insert(this.endNode = O())
        }
        insertAfterPart(e) {
            e.__insert(this.startNode = O()), this.endNode = e.endNode, e.endNode = this.startNode
        }
        setValue(e) {
            this.__pendingValue = e
        }
        commit() {
            if (null === this.startNode.parentNode) return;
            for (; M(this.__pendingValue);) {
                const e = this.__pendingValue;
                this.__pendingValue = L, e(this)
            }
            const e = this.__pendingValue;
            e !== L && (q(e) ? e !== this.value && this.__commitText(e) : e instanceof B ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : $(e) ? this.__commitIterable(e) : e === D ? (this.value = D, this.clear()) : this.__commitText(e))
        }
        __insert(e) {
            this.endNode.parentNode.insertBefore(e, this.endNode)
        }
        __commitNode(e) {
            this.value !== e && (this.clear(), this.__insert(e), this.value = e)
        }
        __commitText(e) {
            const t = this.startNode.nextSibling,
                i = "string" == typeof(e = null == e ? "" : e) ? e : String(e);
            t === this.endNode.previousSibling && 3 === t.nodeType ? t.data = i : this.__commitNode(document.createTextNode(i)), this.value = e
        }
        __commitTemplateResult(e) {
            const t = this.options.templateFactory(e);
            if (this.value instanceof V && this.value.template === t) this.value.update(e.values);
            else {
                const i = new V(t, e.processor, this.options),
                    r = i._clone();
                i.update(e.values), this.__commitNode(r), this.value = i
            }
        }
        __commitIterable(e) {
            Array.isArray(this.value) || (this.value = [], this.clear());
            const t = this.value;
            let i, r = 0;
            for (const o of e) i = t[r], void 0 === i && (i = new J(this.options), t.push(i), 0 === r ? i.appendIntoPart(this) : i.insertAfterPart(t[r - 1])), i.setValue(o), i.commit(), r++;
            r < t.length && (t.length = r, this.clear(i && i.endNode))
        }
        clear(e = this.startNode) {
            x(this.startNode.parentNode, e.nextSibling, this.endNode)
        }
    }
    class W {
        constructor(e, t, i) {
            if (this.value = void 0, this.__pendingValue = void 0, 2 !== i.length || "" !== i[0] || "" !== i[1]) throw new Error("Boolean attributes can only contain a single expression");
            this.element = e, this.name = t, this.strings = i
        }
        setValue(e) {
            this.__pendingValue = e
        }
        commit() {
            for (; M(this.__pendingValue);) {
                const e = this.__pendingValue;
                this.__pendingValue = L, e(this)
            }
            if (this.__pendingValue === L) return;
            const e = !!this.__pendingValue;
            this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = L
        }
    }
    class Y extends X {
        constructor(e, t, i) {
            super(e, t, i), this.single = 2 === i.length && "" === i[0] && "" === i[1]
        }
        _createPart() {
            return new K(this)
        }
        _getValue() {
            return this.single ? this.parts[0].value : super._getValue()
        }
        commit() {
            this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue())
        }
    }
    class K extends G {}
    let Q = !1;
    (() => {
        try {
            const e = {
                get capture() {
                    return Q = !0, !1
                }
            };
            window.addEventListener("test", e, e), window.removeEventListener("test", e, e)
        } catch (e) {}
    })();
    class Z {
        constructor(e, t, i) {
            this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = i, this.__boundHandleEvent = e => this.handleEvent(e)
        }
        setValue(e) {
            this.__pendingValue = e
        }
        commit() {
            for (; M(this.__pendingValue);) {
                const e = this.__pendingValue;
                this.__pendingValue = L, e(this)
            }
            if (this.__pendingValue === L) return;
            const e = this.__pendingValue,
                t = this.value,
                i = null == e || null != t && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive),
                r = null != e && (null == t || i);
            i && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = ee(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = L
        }
        handleEvent(e) {
            "function" == typeof this.value ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e)
        }
    }
    const ee = e => e && (Q ? {
        capture: e.capture,
        passive: e.passive,
        once: e.once
    } : e.capture);

    function te(e) {
        let t = ie.get(e.type);
        void 0 === t && (t = {
            stringsArray: new WeakMap,
            keyString: new Map
        }, ie.set(e.type, t));
        let i = t.stringsArray.get(e.strings);
        if (void 0 !== i) return i;
        const r = e.strings.join(w);
        return i = t.keyString.get(r), void 0 === i && (i = new A(e, e.getTemplateElement()), t.keyString.set(r, i)), t.stringsArray.set(e.strings, i), i
    }
    const ie = new Map,
        re = new WeakMap,
        oe = new class {
            handleAttributeExpressions(e, t, i, r) {
                const o = t[0];
                return "." === o ? new Y(e, t.slice(1), i).parts : "@" === o ? [new Z(e, t.slice(1), r.eventContext)] : "?" === o ? [new W(e, t.slice(1), i)] : new X(e, t, i).parts
            }
            handleTextExpression(e) {
                return new J(e)
            }
        };
    "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
    const se = (e, ...t) => new B(e, t, "html", oe),
        ne = (e, t) => `${e}--${t}`;
    let ae = !0;
    void 0 === window.ShadyCSS ? ae = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), ae = !1);
    const ce = e => t => {
            const i = ne(t.type, e);
            let r = ie.get(i);
            void 0 === r && (r = {
                stringsArray: new WeakMap,
                keyString: new Map
            }, ie.set(i, r));
            let o = r.stringsArray.get(t.strings);
            if (void 0 !== o) return o;
            const s = t.strings.join(w);
            if (o = r.keyString.get(s), void 0 === o) {
                const i = t.getTemplateElement();
                ae && window.ShadyCSS.prepareTemplateDom(i, e), o = new A(t, i), r.keyString.set(s, o)
            }
            return r.stringsArray.set(t.strings, o), o
        },
        de = ["html", "svg"],
        le = new Set,
        pe = (e, t, i) => {
            if (!i || "object" != typeof i || !i.scopeName) throw new Error("The `scopeName` option is required.");
            const r = i.scopeName,
                o = re.has(t),
                s = ae && 11 === t.nodeType && !!t.host,
                n = s && !le.has(r),
                a = n ? document.createDocumentFragment() : t;
            if (((e, t, i) => {
                    let r = re.get(t);
                    void 0 === r && (x(t, t.firstChild), re.set(t, r = new J(Object.assign({
                        templateFactory: te
                    }, i))), r.appendInto(t)), r.setValue(e), r.commit()
                })(e, a, Object.assign({
                    templateFactory: ce(r)
                }, i)), n) {
                const e = re.get(a);
                re.delete(a);
                ((e, t, i) => {
                    le.add(e);
                    const r = i ? i.element : document.createElement("template"),
                        o = t.querySelectorAll("style"),
                        {
                            length: s
                        } = o;
                    if (0 === s) return void window.ShadyCSS.prepareTemplateStyles(r, e);
                    const n = document.createElement("style");
                    for (let e = 0; e < s; e++) {
                        const t = o[e];
                        t.parentNode.removeChild(t), n.textContent += t.textContent
                    }(e => {
                        de.forEach((t => {
                            const i = ie.get(ne(t, e));
                            void 0 !== i && i.keyString.forEach((e => {
                                const {
                                    element: {
                                        content: t
                                    }
                                } = e, i = new Set;
                                Array.from(t.querySelectorAll("style")).forEach((e => {
                                    i.add(e)
                                })), I(e, i)
                            }))
                        }))
                    })(e);
                    const a = r.content;
                    i ? function(e, t, i = null) {
                        const {
                            element: {
                                content: r
                            },
                            parts: o
                        } = e;
                        if (null == i) return void r.appendChild(t);
                        const s = document.createTreeWalker(r, 133, null, !1);
                        let n = z(o),
                            a = 0,
                            c = -1;
                        for (; s.nextNode();)
                            for (c++, s.currentNode === i && (a = U(t), i.parentNode.insertBefore(t, i)); - 1 !== n && o[n].index === c;) {
                                if (a > 0) {
                                    for (; - 1 !== n;) o[n].index += a, n = z(o, n);
                                    return
                                }
                                n = z(o, n)
                            }
                    }(i, n, a.firstChild) : a.insertBefore(n, a.firstChild), window.ShadyCSS.prepareTemplateStyles(r, e);
                    const c = a.querySelector("style");
                    if (window.ShadyCSS.nativeShadow && null !== c) t.insertBefore(c.cloneNode(!0), t.firstChild);
                    else if (i) {
                        a.insertBefore(n, a.firstChild);
                        const e = new Set;
                        e.add(n), I(i, e)
                    }
                })(r, a, e.value instanceof V ? e.value.template : void 0), x(t, t.firstChild), t.appendChild(a), re.set(t, e)
            }!o && s && window.ShadyCSS.styleElement(t.host)
        };
    window.JSCompiler_renameProperty = (e, t) => e;
    const he = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        ue = (e, t) => t !== e && (t == t || e == e),
        me = {
            attribute: !0,
            type: String,
            converter: he,
            reflect: !1,
            hasChanged: ue
        };
    class fe extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = me) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || me
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = ue) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || he,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || he.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = me) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    fe.finalized = !0;
    const _e = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function be(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : _e(e, t)
    }
    const ge = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        ye = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        }),
        ve = Element.prototype;
    ve.msMatchesSelector || ve.webkitMatchesSelector;
    const Se = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        xe = Symbol();
    class we {
        constructor(e, t) {
            if (t !== xe) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (Se ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const Ce = {};
    class Pe extends fe {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !Se) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new we(String(t), xe)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Se ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== Ce && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return Ce
        }
    }
    Pe.finalized = !0, Pe.render = pe, window.JSCompiler_renameProperty = (e, t) => e;
    const ke = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        Ae = (e, t) => t !== e && (t == t || e == e),
        Ee = {
            attribute: !0,
            type: String,
            converter: ke,
            reflect: !1,
            hasChanged: Ae
        };
    class Te extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = Ee) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || Ee
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = Ae) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || ke,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || ke.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = Ee) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    Te.finalized = !0;
    const Oe = Element.prototype;
    Oe.msMatchesSelector || Oe.webkitMatchesSelector;
    const Re = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        Ie = Symbol();
    class Ue {
        constructor(e, t) {
            if (t !== Ie) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (Re ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const ze = {};
    class Ne extends Te {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !Re) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new Ue(String(t), Ie)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Re ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== ze && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return ze
        }
    }
    Ne.finalized = !0, Ne.render = pe;
    const Fe = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof Ue) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new Ue(i, Ie)
    })
    `:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
    let Me = class extends Ne {
        render() {
            return se `<slot></slot>`
        }
    };
    Me.styles = Fe, Me = v([("mwc-icon", e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-icon", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-icon", e)
                }
            }
        })(0, e);
        var t
    })], Me), window.JSCompiler_renameProperty = (e, t) => e;
    const Le = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        De = (e, t) => t !== e && (t == t || e == e),
        Ve = {
            attribute: !0,
            type: String,
            converter: Le,
            reflect: !1,
            hasChanged: De
        };
    class He extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = Ve) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || Ve
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = De) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || Le,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || Le.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = Ve) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    He.finalized = !0;
    const je = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function Be(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : je(e, t)
    }

    function qe(e) {
        return Be({
            attribute: !1,
            hasChanged: null == e ? void 0 : e.hasChanged
        })
    }
    const $e = Element.prototype;
    $e.msMatchesSelector || $e.webkitMatchesSelector;
    const Xe = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        Ge = Symbol();
    class Je {
        constructor(e, t) {
            if (t !== Ge) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (Xe ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const We = {};
    class Ye extends He {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !Xe) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new Je(String(t), Ge)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Xe ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== We && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return We
        }
    }
    Ye.finalized = !0, Ye.render = pe, window.JSCompiler_renameProperty = (e, t) => e;
    const Ke = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        Qe = (e, t) => t !== e && (t == t || e == e),
        Ze = {
            attribute: !0,
            type: String,
            converter: Ke,
            reflect: !1,
            hasChanged: Qe
        };
    class et extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = Ze) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || Ze
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = Qe) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || Ke,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || Ke.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = Ze) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    et.finalized = !0;
    const tt = Element.prototype;
    tt.msMatchesSelector || tt.webkitMatchesSelector;
    const it = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        rt = Symbol();
    class ot {
        constructor(e, t) {
            if (t !== rt) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (it ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const st = {};
    class nt extends et {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !it) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new ot(String(t), rt)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? it ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== st && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return st
        }
    }

    function at(e, t) {
        return (e.matches || e.webkitMatchesSelector || e.msMatchesSelector).call(e, t)
    }
    nt.finalized = !0, nt.render = pe;
    const ct = e => e.nodeType === Node.ELEMENT_NODE;

    function dt(e, t) {
        for (const i of e.assignedNodes({
                flatten: !0
            }))
            if (ct(i)) {
                const e = i;
                if (at(e, t)) return e
            }
        return null
    }

    function lt(e) {
        return {
            addClass: t => {
                e.classList.add(t)
            },
            removeClass: t => {
                e.classList.remove(t)
            },
            hasClass: t => e.classList.contains(t)
        }
    }
    let pt = !1;
    const ht = () => {},
        ut = {
            get passive() {
                return pt = !0, !1
            }
        };
    document.addEventListener("x", ht, ut), document.removeEventListener("x", ht);
    const mt = (e = window.document) => {
            let t = e.activeElement;
            const i = [];
            if (!t) return i;
            for (; t && (i.push(t), t.shadowRoot);) t = t.shadowRoot.activeElement;
            return i
        },
        ft = e => {
            const t = mt();
            if (!t.length) return !1;
            const i = t[t.length - 1],
                r = new Event("check-if-focused", {
                    bubbles: !0,
                    composed: !0
                });
            let o = [];
            const s = e => {
                o = e.composedPath()
            };
            return document.body.addEventListener("check-if-focused", s), i.dispatchEvent(r), document.body.removeEventListener("check-if-focused", s), -1 !== o.indexOf(e)
        };
    class _t extends nt {
        click() {
            if (this.mdcRoot) return this.mdcRoot.focus(), void this.mdcRoot.click();
            super.click()
        }
        createFoundation() {
            void 0 !== this.mdcFoundation && this.mdcFoundation.destroy(), this.mdcFoundationClass && (this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter()), this.mdcFoundation.init())
        }
        firstUpdated() {
            this.createFoundation()
        }
    }
    var bt = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        gt = {
            BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
            FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
            FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
            ROOT: "mdc-ripple-upgraded",
            UNBOUNDED: "mdc-ripple-upgraded--unbounded"
        },
        yt = {
            VAR_FG_SCALE: "--mdc-ripple-fg-scale",
            VAR_FG_SIZE: "--mdc-ripple-fg-size",
            VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
            VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
            VAR_LEFT: "--mdc-ripple-left",
            VAR_TOP: "--mdc-ripple-top"
        },
        vt = {
            DEACTIVATION_TIMEOUT_MS: 225,
            FG_DEACTIVATION_MS: 150,
            INITIAL_ORIGIN_SCALE: .6,
            PADDING: 10,
            TAP_DELAY_MS: 300
        },
        St = ["touchstart", "pointerdown", "mousedown", "keydown"],
        xt = ["touchend", "pointerup", "mouseup", "contextmenu"],
        wt = [];
    const Ct = function(e) {
        function t(i) {
            var r = e.call(this, y(y({}, t.defaultAdapter), i)) || this;
            return r.activationAnimationHasEnded_ = !1, r.activationTimer_ = 0, r.fgDeactivationRemovalTimer_ = 0, r.fgScale_ = "0", r.frame_ = {
                width: 0,
                height: 0
            }, r.initialSize_ = 0, r.layoutFrame_ = 0, r.maxRadius_ = 0, r.unboundedCoords_ = {
                left: 0,
                top: 0
            }, r.activationState_ = r.defaultActivationState_(), r.activationTimerCallback_ = function() {
                r.activationAnimationHasEnded_ = !0, r.runDeactivationUXLogicIfReady_()
            }, r.activateHandler_ = function(e) {
                return r.activate_(e)
            }, r.deactivateHandler_ = function() {
                return r.deactivate_()
            }, r.focusHandler_ = function() {
                return r.handleFocus()
            }, r.blurHandler_ = function() {
                return r.handleBlur()
            }, r.resizeHandler_ = function() {
                return r.layout()
            }, r
        }
        return g(t, e), Object.defineProperty(t, "cssClasses", {
            get: function() {
                return gt
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "strings", {
            get: function() {
                return yt
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "numbers", {
            get: function() {
                return vt
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "defaultAdapter", {
            get: function() {
                return {
                    addClass: function() {},
                    browserSupportsCssVars: function() {
                        return !0
                    },
                    computeBoundingRect: function() {
                        return {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        }
                    },
                    containsEventTarget: function() {
                        return !0
                    },
                    deregisterDocumentInteractionHandler: function() {},
                    deregisterInteractionHandler: function() {},
                    deregisterResizeHandler: function() {},
                    getWindowPageOffset: function() {
                        return {
                            x: 0,
                            y: 0
                        }
                    },
                    isSurfaceActive: function() {
                        return !0
                    },
                    isSurfaceDisabled: function() {
                        return !0
                    },
                    isUnbounded: function() {
                        return !0
                    },
                    registerDocumentInteractionHandler: function() {},
                    registerInteractionHandler: function() {},
                    registerResizeHandler: function() {},
                    removeClass: function() {},
                    updateCssVariable: function() {}
                }
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.init = function() {
            var e = this,
                i = this.supportsPressRipple_();
            if (this.registerRootHandlers_(i), i) {
                var r = t.cssClasses,
                    o = r.ROOT,
                    s = r.UNBOUNDED;
                requestAnimationFrame((function() {
                    e.adapter.addClass(o), e.adapter.isUnbounded() && (e.adapter.addClass(s), e.layoutInternal_())
                }))
            }
        }, t.prototype.destroy = function() {
            var e = this;
            if (this.supportsPressRipple_()) {
                this.activationTimer_ && (clearTimeout(this.activationTimer_), this.activationTimer_ = 0, this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer_ && (clearTimeout(this.fgDeactivationRemovalTimer_), this.fgDeactivationRemovalTimer_ = 0, this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));
                var i = t.cssClasses,
                    r = i.ROOT,
                    o = i.UNBOUNDED;
                requestAnimationFrame((function() {
                    e.adapter.removeClass(r), e.adapter.removeClass(o), e.removeCssVars_()
                }))
            }
            this.deregisterRootHandlers_(), this.deregisterDeactivationHandlers_()
        }, t.prototype.activate = function(e) {
            this.activate_(e)
        }, t.prototype.deactivate = function() {
            this.deactivate_()
        }, t.prototype.layout = function() {
            var e = this;
            this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = requestAnimationFrame((function() {
                e.layoutInternal_(), e.layoutFrame_ = 0
            }))
        }, t.prototype.setUnbounded = function(e) {
            var i = t.cssClasses.UNBOUNDED;
            e ? this.adapter.addClass(i) : this.adapter.removeClass(i)
        }, t.prototype.handleFocus = function() {
            var e = this;
            requestAnimationFrame((function() {
                return e.adapter.addClass(t.cssClasses.BG_FOCUSED)
            }))
        }, t.prototype.handleBlur = function() {
            var e = this;
            requestAnimationFrame((function() {
                return e.adapter.removeClass(t.cssClasses.BG_FOCUSED)
            }))
        }, t.prototype.supportsPressRipple_ = function() {
            return this.adapter.browserSupportsCssVars()
        }, t.prototype.defaultActivationState_ = function() {
            return {
                activationEvent: void 0,
                hasDeactivationUXRun: !1,
                isActivated: !1,
                isProgrammatic: !1,
                wasActivatedByPointer: !1,
                wasElementMadeActive: !1
            }
        }, t.prototype.registerRootHandlers_ = function(e) {
            var t = this;
            e && (St.forEach((function(e) {
                t.adapter.registerInteractionHandler(e, t.activateHandler_)
            })), this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler_)), this.adapter.registerInteractionHandler("focus", this.focusHandler_), this.adapter.registerInteractionHandler("blur", this.blurHandler_)
        }, t.prototype.registerDeactivationHandlers_ = function(e) {
            var t = this;
            "keydown" === e.type ? this.adapter.registerInteractionHandler("keyup", this.deactivateHandler_) : xt.forEach((function(e) {
                t.adapter.registerDocumentInteractionHandler(e, t.deactivateHandler_)
            }))
        }, t.prototype.deregisterRootHandlers_ = function() {
            var e = this;
            St.forEach((function(t) {
                e.adapter.deregisterInteractionHandler(t, e.activateHandler_)
            })), this.adapter.deregisterInteractionHandler("focus", this.focusHandler_), this.adapter.deregisterInteractionHandler("blur", this.blurHandler_), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler_)
        }, t.prototype.deregisterDeactivationHandlers_ = function() {
            var e = this;
            this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler_), xt.forEach((function(t) {
                e.adapter.deregisterDocumentInteractionHandler(t, e.deactivateHandler_)
            }))
        }, t.prototype.removeCssVars_ = function() {
            var e = this,
                i = t.strings;
            Object.keys(i).forEach((function(t) {
                0 === t.indexOf("VAR_") && e.adapter.updateCssVariable(i[t], null)
            }))
        }, t.prototype.activate_ = function(e) {
            var t = this;
            if (!this.adapter.isSurfaceDisabled()) {
                var i = this.activationState_;
                if (!i.isActivated) {
                    var r = this.previousActivationEvent_;
                    r && void 0 !== e && r.type !== e.type || (i.isActivated = !0, i.isProgrammatic = void 0 === e, i.activationEvent = e, i.wasActivatedByPointer = !i.isProgrammatic && void 0 !== e && ("mousedown" === e.type || "touchstart" === e.type || "pointerdown" === e.type), void 0 !== e && wt.length > 0 && wt.some((function(e) {
                        return t.adapter.containsEventTarget(e)
                    })) ? this.resetActivationState_() : (void 0 !== e && (wt.push(e.target), this.registerDeactivationHandlers_(e)), i.wasElementMadeActive = this.checkElementMadeActive_(e), i.wasElementMadeActive && this.animateActivation_(), requestAnimationFrame((function() {
                        wt = [], i.wasElementMadeActive || void 0 === e || " " !== e.key && 32 !== e.keyCode || (i.wasElementMadeActive = t.checkElementMadeActive_(e), i.wasElementMadeActive && t.animateActivation_()), i.wasElementMadeActive || (t.activationState_ = t.defaultActivationState_())
                    }))))
                }
            }
        }, t.prototype.checkElementMadeActive_ = function(e) {
            return void 0 === e || "keydown" !== e.type || this.adapter.isSurfaceActive()
        }, t.prototype.animateActivation_ = function() {
            var e = this,
                i = t.strings,
                r = i.VAR_FG_TRANSLATE_START,
                o = i.VAR_FG_TRANSLATE_END,
                s = t.cssClasses,
                n = s.FG_DEACTIVATION,
                a = s.FG_ACTIVATION,
                c = t.numbers.DEACTIVATION_TIMEOUT_MS;
            this.layoutInternal_();
            var d = "",
                l = "";
            if (!this.adapter.isUnbounded()) {
                var p = this.getFgTranslationCoordinates_(),
                    h = p.startPoint,
                    u = p.endPoint;
                d = h.x + "px, " + h.y + "px", l = u.x + "px, " + u.y + "px"
            }
            this.adapter.updateCssVariable(r, d), this.adapter.updateCssVariable(o, l), clearTimeout(this.activationTimer_), clearTimeout(this.fgDeactivationRemovalTimer_), this.rmBoundedActivationClasses_(), this.adapter.removeClass(n), this.adapter.computeBoundingRect(), this.adapter.addClass(a), this.activationTimer_ = setTimeout((function() {
                return e.activationTimerCallback_()
            }), c)
        }, t.prototype.getFgTranslationCoordinates_ = function() {
            var e, t = this.activationState_,
                i = t.activationEvent;
            return {
                startPoint: e = {
                    x: (e = t.wasActivatedByPointer ? function(e, t, i) {
                        if (!e) return {
                            x: 0,
                            y: 0
                        };
                        var r, o, s = t.x,
                            n = t.y,
                            a = s + i.left,
                            c = n + i.top;
                        if ("touchstart" === e.type) {
                            var d = e;
                            r = d.changedTouches[0].pageX - a, o = d.changedTouches[0].pageY - c
                        } else {
                            var l = e;
                            r = l.pageX - a, o = l.pageY - c
                        }
                        return {
                            x: r,
                            y: o
                        }
                    }(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : {
                        x: this.frame_.width / 2,
                        y: this.frame_.height / 2
                    }).x - this.initialSize_ / 2,
                    y: e.y - this.initialSize_ / 2
                },
                endPoint: {
                    x: this.frame_.width / 2 - this.initialSize_ / 2,
                    y: this.frame_.height / 2 - this.initialSize_ / 2
                }
            }
        }, t.prototype.runDeactivationUXLogicIfReady_ = function() {
            var e = this,
                i = t.cssClasses.FG_DEACTIVATION,
                r = this.activationState_,
                o = r.hasDeactivationUXRun,
                s = r.isActivated;
            (o || !s) && this.activationAnimationHasEnded_ && (this.rmBoundedActivationClasses_(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer_ = setTimeout((function() {
                e.adapter.removeClass(i)
            }), vt.FG_DEACTIVATION_MS))
        }, t.prototype.rmBoundedActivationClasses_ = function() {
            var e = t.cssClasses.FG_ACTIVATION;
            this.adapter.removeClass(e), this.activationAnimationHasEnded_ = !1, this.adapter.computeBoundingRect()
        }, t.prototype.resetActivationState_ = function() {
            var e = this;
            this.previousActivationEvent_ = this.activationState_.activationEvent, this.activationState_ = this.defaultActivationState_(), setTimeout((function() {
                return e.previousActivationEvent_ = void 0
            }), t.numbers.TAP_DELAY_MS)
        }, t.prototype.deactivate_ = function() {
            var e = this,
                t = this.activationState_;
            if (t.isActivated) {
                var i = y({}, t);
                t.isProgrammatic ? (requestAnimationFrame((function() {
                    return e.animateDeactivation_(i)
                })), this.resetActivationState_()) : (this.deregisterDeactivationHandlers_(), requestAnimationFrame((function() {
                    e.activationState_.hasDeactivationUXRun = !0, e.animateDeactivation_(i), e.resetActivationState_()
                })))
            }
        }, t.prototype.animateDeactivation_ = function(e) {
            var t = e.wasActivatedByPointer,
                i = e.wasElementMadeActive;
            (t || i) && this.runDeactivationUXLogicIfReady_()
        }, t.prototype.layoutInternal_ = function() {
            this.frame_ = this.adapter.computeBoundingRect();
            var e = Math.max(this.frame_.height, this.frame_.width);
            this.maxRadius_ = this.adapter.isUnbounded() ? e : Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2)) + t.numbers.PADDING;
            var i = Math.floor(e * t.numbers.INITIAL_ORIGIN_SCALE);
            this.adapter.isUnbounded() && i % 2 != 0 ? this.initialSize_ = i - 1 : this.initialSize_ = i, this.fgScale_ = "" + this.maxRadius_ / this.initialSize_, this.updateLayoutCssVars_()
        }, t.prototype.updateLayoutCssVars_ = function() {
            var e = t.strings,
                i = e.VAR_FG_SIZE,
                r = e.VAR_LEFT,
                o = e.VAR_TOP,
                s = e.VAR_FG_SCALE;
            this.adapter.updateCssVariable(i, this.initialSize_ + "px"), this.adapter.updateCssVariable(s, this.fgScale_), this.adapter.isUnbounded() && (this.unboundedCoords_ = {
                left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
            }, this.adapter.updateCssVariable(r, this.unboundedCoords_.left + "px"), this.adapter.updateCssVariable(o, this.unboundedCoords_.top + "px"))
        }, t
    }(bt);
    class Pt {
        constructor(e) {
            this.classes = new Set, this.changed = !1, this.element = e;
            const t = (e.getAttribute("class") || "").split(/\s+/);
            for (const e of t) this.classes.add(e)
        }
        add(e) {
            this.classes.add(e), this.changed = !0
        }
        remove(e) {
            this.classes.delete(e), this.changed = !0
        }
        commit() {
            if (this.changed) {
                let e = "";
                this.classes.forEach((t => e += t + " ")), this.element.setAttribute("class", e)
            }
        }
    }
    const kt = new WeakMap,
        At = F((e => t => {
            if (!(t instanceof G) || t instanceof K || "class" !== t.committer.name || t.committer.parts.length > 1) throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
            const {
                committer: i
            } = t, {
                element: r
            } = i;
            let o = kt.get(t);
            void 0 === o && (r.setAttribute("class", i.strings.join(" ")), kt.set(t, o = new Set));
            const s = r.classList || new Pt(r);
            o.forEach((t => {
                t in e || (s.remove(t), o.delete(t))
            }));
            for (const t in e) {
                const i = e[t];
                i != o.has(t) && (i ? (s.add(t), o.add(t)) : (s.remove(t), o.delete(t)))
            }
            "function" == typeof s.commit && s.commit()
        })),
        Et = new WeakMap,
        Tt = F((e => t => {
            if (!(t instanceof G) || t instanceof K || "style" !== t.committer.name || t.committer.parts.length > 1) throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
            const {
                committer: i
            } = t, {
                style: r
            } = i.element;
            let o = Et.get(t);
            void 0 === o && (r.cssText = i.strings.join(" "), Et.set(t, o = new Set)), o.forEach((t => {
                t in e || (o.delete(t), -1 === t.indexOf("-") ? r[t] = null : r.removeProperty(t))
            }));
            for (const t in e) o.add(t), -1 === t.indexOf("-") ? r[t] = e[t] : r.setProperty(t, e[t])
        }));
    class Ot extends _t {
        constructor() {
            super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Ct
        }
        get isActive() {
            return function(e, t) {
                return (e.matches || e.webkitMatchesSelector || e.msMatchesSelector).call(e, t)
            }(this.parentElement || this, ":active")
        }
        createAdapter() {
            return {
                browserSupportsCssVars: () => !0,
                isUnbounded: () => this.unbounded,
                isSurfaceActive: () => this.isActive,
                isSurfaceDisabled: () => this.disabled,
                addClass: e => {
                    switch (e) {
                        case "mdc-ripple-upgraded--background-focused":
                            this.bgFocused = !0;
                            break;
                        case "mdc-ripple-upgraded--foreground-activation":
                            this.fgActivation = !0;
                            break;
                        case "mdc-ripple-upgraded--foreground-deactivation":
                            this.fgDeactivation = !0
                    }
                },
                removeClass: e => {
                    switch (e) {
                        case "mdc-ripple-upgraded--background-focused":
                            this.bgFocused = !1;
                            break;
                        case "mdc-ripple-upgraded--foreground-activation":
                            this.fgActivation = !1;
                            break;
                        case "mdc-ripple-upgraded--foreground-deactivation":
                            this.fgDeactivation = !1
                    }
                },
                containsEventTarget: () => !0,
                registerInteractionHandler: () => {},
                deregisterInteractionHandler: () => {},
                registerDocumentInteractionHandler: () => {},
                deregisterDocumentInteractionHandler: () => {},
                registerResizeHandler: () => {},
                deregisterResizeHandler: () => {},
                updateCssVariable: (e, t) => {
                    switch (e) {
                        case "--mdc-ripple-fg-scale":
                            this.fgScale = t;
                            break;
                        case "--mdc-ripple-fg-size":
                            this.fgSize = t;
                            break;
                        case "--mdc-ripple-fg-translate-end":
                            this.translateEnd = t;
                            break;
                        case "--mdc-ripple-fg-translate-start":
                            this.translateStart = t;
                            break;
                        case "--mdc-ripple-left":
                            this.leftPos = t;
                            break;
                        case "--mdc-ripple-top":
                            this.topPos = t
                    }
                },
                computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
                getWindowPageOffset: () => ({
                    x: window.pageXOffset,
                    y: window.pageYOffset
                })
            }
        }
        startPress(e) {
            this.waitForFoundation((() => {
                this.mdcFoundation.activate(e)
            }))
        }
        endPress() {
            this.waitForFoundation((() => {
                this.mdcFoundation.deactivate()
            }))
        }
        startFocus() {
            this.waitForFoundation((() => {
                this.mdcFoundation.handleFocus()
            }))
        }
        endFocus() {
            this.waitForFoundation((() => {
                this.mdcFoundation.handleBlur()
            }))
        }
        startHover() {
            this.hovering = !0
        }
        endHover() {
            this.hovering = !1
        }
        waitForFoundation(e) {
            this.mdcFoundation ? e() : this.updateComplete.then(e)
        }
        update(e) {
            e.has("disabled") && this.disabled && this.endHover(), super.update(e)
        }
        render() {
            const e = this.activated && (this.primary || !this.accent),
                t = this.selected && (this.primary || !this.accent),
                i = {
                    "mdc-ripple-surface--accent": this.accent,
                    "mdc-ripple-surface--primary--activated": e,
                    "mdc-ripple-surface--accent--activated": this.accent && this.activated,
                    "mdc-ripple-surface--primary--selected": t,
                    "mdc-ripple-surface--accent--selected": this.accent && this.selected,
                    "mdc-ripple-surface--disabled": this.disabled,
                    "mdc-ripple-surface--hover": this.hovering,
                    "mdc-ripple-surface--primary": this.primary,
                    "mdc-ripple-surface--selected": this.selected,
                    "mdc-ripple-upgraded--background-focused": this.bgFocused,
                    "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
                    "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
                    "mdc-ripple-upgraded--unbounded": this.unbounded
                };
            return se `
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${At(i)}"
          style="${Tt({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`
        }
    }
    var Rt;
    v([(Rt = ".mdc-ripple-surface", (e, t) => {
        const i = {
            get() {
                return this.renderRoot.querySelector(Rt)
            },
            enumerable: !0,
            configurable: !0
        };
        return void 0 !== t ? ((e, t, i) => {
            Object.defineProperty(t, i, e)
        })(i, e, t) : ((e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        }))(i, e)
    })], Ot.prototype, "mdcRoot", void 0), v([Be({
        type: Boolean
    })], Ot.prototype, "primary", void 0), v([Be({
        type: Boolean
    })], Ot.prototype, "accent", void 0), v([Be({
        type: Boolean
    })], Ot.prototype, "unbounded", void 0), v([Be({
        type: Boolean
    })], Ot.prototype, "disabled", void 0), v([Be({
        type: Boolean
    })], Ot.prototype, "activated", void 0), v([Be({
        type: Boolean
    })], Ot.prototype, "selected", void 0), v([qe()], Ot.prototype, "hovering", void 0), v([qe()], Ot.prototype, "bgFocused", void 0), v([qe()], Ot.prototype, "fgActivation", void 0), v([qe()], Ot.prototype, "fgDeactivation", void 0), v([qe()], Ot.prototype, "fgScale", void 0), v([qe()], Ot.prototype, "fgSize", void 0), v([qe()], Ot.prototype, "translateStart", void 0), v([qe()], Ot.prototype, "translateEnd", void 0), v([qe()], Ot.prototype, "leftPos", void 0), v([qe()], Ot.prototype, "topPos", void 0);
    const It = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof Je) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new Je(i, Ge)
    })
    `.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}`;
    let Ut = class extends Ot {};
    Ut.styles = It, Ut = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-ripple", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-ripple", e)
                }
            }
        })(0, e);
        var t
    }], Ut);
    class zt {
        constructor(e) {
            this.startPress = t => {
                e().then((e => {
                    e && e.startPress(t)
                }))
            }, this.endPress = () => {
                e().then((e => {
                    e && e.endPress()
                }))
            }, this.startFocus = () => {
                e().then((e => {
                    e && e.startFocus()
                }))
            }, this.endFocus = () => {
                e().then((e => {
                    e && e.endFocus()
                }))
            }, this.startHover = () => {
                e().then((e => {
                    e && e.startHover()
                }))
            }, this.endHover = () => {
                e().then((e => {
                    e && e.endHover()
                }))
            }
        }
    }
    class Nt extends Pe {
        constructor() {
            super(...arguments), this.raised = !1, this.unelevated = !1, this.outlined = !1, this.dense = !1, this.disabled = !1, this.trailingIcon = !1, this.fullwidth = !1, this.icon = "", this.label = "", this.expandContent = !1, this.shouldRenderRipple = !1, this.rippleHandlers = new zt((() => (this.shouldRenderRipple = !0, this.ripple)))
        }
        renderOverlay() {
            return se ``
        }
        renderRipple() {
            const e = this.raised || this.unelevated;
            return this.shouldRenderRipple ? se `<mwc-ripple class="ripple" .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>` : ""
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open",
                delegatesFocus: !0
            })
        }
        focus() {
            const e = this.buttonElement;
            e && (this.rippleHandlers.startFocus(), e.focus())
        }
        blur() {
            const e = this.buttonElement;
            e && (this.rippleHandlers.endFocus(), e.blur())
        }
        getRenderClasses() {
            return At({
                "mdc-button--raised": this.raised,
                "mdc-button--unelevated": this.unelevated,
                "mdc-button--outlined": this.outlined,
                "mdc-button--dense": this.dense
            })
        }
        render() {
            return se `
      <button
          id="button"
          class="mdc-button ${this.getRenderClasses()}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${At({flex:this.expandContent})}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`
        }
        renderIcon() {
            return se `
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`
        }
        handleRippleActivate(e) {
            const t = () => {
                window.removeEventListener("mouseup", t), this.handleRippleDeactivate()
            };
            window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e)
        }
        handleRippleDeactivate() {
            this.rippleHandlers.endPress()
        }
        handleRippleMouseEnter() {
            this.rippleHandlers.startHover()
        }
        handleRippleMouseLeave() {
            this.rippleHandlers.endHover()
        }
        handleRippleFocus() {
            this.rippleHandlers.startFocus()
        }
        handleRippleBlur() {
            this.rippleHandlers.endFocus()
        }
    }
    v([be({
        type: Boolean,
        reflect: !0
    })], Nt.prototype, "raised", void 0), v([be({
        type: Boolean,
        reflect: !0
    })], Nt.prototype, "unelevated", void 0), v([be({
        type: Boolean,
        reflect: !0
    })], Nt.prototype, "outlined", void 0), v([be({
        type: Boolean
    })], Nt.prototype, "dense", void 0), v([be({
        type: Boolean,
        reflect: !0
    })], Nt.prototype, "disabled", void 0), v([be({
        type: Boolean,
        attribute: "trailingicon"
    })], Nt.prototype, "trailingIcon", void 0), v([be({
        type: Boolean,
        reflect: !0
    })], Nt.prototype, "fullwidth", void 0), v([be({
        type: String
    })], Nt.prototype, "icon", void 0), v([be({
        type: String
    })], Nt.prototype, "label", void 0), v([be({
        type: Boolean
    })], Nt.prototype, "expandContent", void 0), v([function(e, t) {
        return (t, i) => {
            const r = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            return void 0 !== i ? ge(r, t, i) : ye(r, t)
        }
    }("#button")], Nt.prototype, "buttonElement", void 0), v([(e, t) => {
        const i = {
            async get() {
                return await this.updateComplete, this.renderRoot.querySelector("mwc-ripple")
            },
            enumerable: !0,
            configurable: !0
        };
        return void 0 !== t ? ge(i, e, t) : ye(i, e)
    }], Nt.prototype, "ripple", void 0), v([be({
        attribute: !1,
        hasChanged: void 0
    })], Nt.prototype, "shouldRenderRipple", void 0), v([function(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            Object.assign(t[i], e)
        })(e, t, i) : ((e, t) => Object.assign(Object.assign({}, t), {
            finisher(i) {
                Object.assign(i.prototype[t.key], e)
            }
        }))(e, t)
    }({
        passive: !0
    })], Nt.prototype, "handleRippleActivate", null);
    const Ft = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof we) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new we(i, xe)
    })
    `.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 8px 0 8px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px;height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){background-color:transparent}.mdc-button--outlined:disabled{background-color:transparent}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl],[dir=rtl] .leading-icon ::slotted(*),.leading-icon ::slotted(*)[dir=rtl],[dir=rtl] .leading-icon .mdc-button__icon,.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;
    let Mt = class extends Nt {};
    Mt.styles = Ft, Mt = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-button", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-button", e)
                }
            }
        })(0, e);
        var t
    }], Mt), window.JSCompiler_renameProperty = (e, t) => e;
    const Lt = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        Dt = (e, t) => t !== e && (t == t || e == e),
        Vt = {
            attribute: !0,
            type: String,
            converter: Lt,
            reflect: !1,
            hasChanged: Dt
        };
    class Ht extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = Vt) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || Vt
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = Dt) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || Lt,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || Lt.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = Vt) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    Ht.finalized = !0;
    const jt = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function Bt(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : jt(e, t)
    }
    const qt = Element.prototype;
    qt.msMatchesSelector || qt.webkitMatchesSelector;
    const $t = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        Xt = Symbol();
    class Gt {
        constructor(e, t) {
            if (t !== Xt) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && ($t ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const Jt = {};
    class Wt extends Ht {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !$t) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new Gt(String(t), Xt)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? $t ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== Jt && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return Jt
        }
    }

    function Yt(e, t, i) {
        if (void 0 !== t) return function(e, t, i) {
            const r = e.constructor;
            if (!i) {
                const e = `__${t}`;
                if (!(i = r.getPropertyDescriptor(t, e))) throw new Error("@ariaProperty must be used after a @property decorator")
            }
            const o = i;
            let s = "";
            if (!o.set) throw new Error(`@ariaProperty requires a setter for ${t}`);
            const n = {
                configurable: !0,
                enumerable: !0,
                set(e) {
                    if ("" === s) {
                        const e = r.getPropertyOptions(t);
                        s = e.attribute
                    }
                    this.hasAttribute(s) && this.removeAttribute(s), o.set.call(this, e)
                }
            };
            return o.get && (n.get = function() {
                return o.get.call(this)
            }), n
        }(e, t, i);
        throw new Error("@ariaProperty only supports TypeScript Decorators")
    }
    Wt.finalized = !0, Wt.render = pe;
    const Kt = new WeakMap,
        Qt = F((e => t => {
            const i = Kt.get(t);
            if (void 0 === e && t instanceof G) {
                if (void 0 !== i || !Kt.has(t)) {
                    const e = t.committer.name;
                    t.committer.element.removeAttribute(e)
                }
            } else e !== i && t.setValue(e);
            Kt.set(t, e)
        }));
    class Zt extends Wt {
        constructor() {
            super(...arguments), this.indeterminate = !1, this.progress = 0, this.density = 0, this.closed = !1
        }
        open() {
            this.closed = !1
        }
        close() {
            this.closed = !0
        }
        render() {
            const e = {
                    "mdc-circular-progress--closed": this.closed,
                    "mdc-circular-progress--indeterminate": this.indeterminate
                },
                t = 48 + 4 * this.density,
                i = {
                    width: `${t}px`,
                    height: `${t}px`
                };
            return se `
      <div
        class="mdc-circular-progress ${At(e)}"
        style="${Tt(i)}"
        role="progressbar"
        aria-label="${Qt(this.ariaLabel)}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="${Qt(this.indeterminate?void 0:this.progress)}">
        ${this.renderDeterminateContainer()}
        ${this.renderIndeterminateContainer()}
      </div>`
        }
        renderDeterminateContainer() {
            const e = 48 + 4 * this.density,
                t = e / 2,
                i = this.density >= -3 ? 18 + 11 * this.density / 6 : 12.5 + 5 * (this.density + 3) / 4,
                r = 6.2831852 * i,
                o = (1 - this.progress) * r,
                s = this.density >= -3 ? 4 + this.density * (1 / 3) : 3 + (this.density + 3) * (1 / 6);
            return se `
      <div class="mdc-circular-progress__determinate-container">
        <svg class="mdc-circular-progress__determinate-circle-graphic"
             viewBox="0 0 ${e} ${e}">
          <circle class="mdc-circular-progress__determinate-track"
                  cx="${t}" cy="${t}" r="${i}"
                  stroke-width="${s}"></circle>
          <circle class="mdc-circular-progress__determinate-circle"
                  cx="${t}" cy="${t}" r="${i}"
                  stroke-dasharray="${6.2831852*i}"
                  stroke-dashoffset="${o}"
                  stroke-width="${s}"></circle>
        </svg>
      </div>`
        }
        renderIndeterminateContainer() {
            return se `
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
      </div>`
        }
        renderIndeterminateSpinnerLayer() {
            const e = 48 + 4 * this.density,
                t = e / 2,
                i = this.density >= -3 ? 18 + 11 * this.density / 6 : 12.5 + 5 * (this.density + 3) / 4,
                r = 6.2831852 * i,
                o = .5 * r,
                s = this.density >= -3 ? 4 + this.density * (1 / 3) : 3 + (this.density + 3) * (1 / 6);
            return se `
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${o}"
                    stroke-width="${s}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__gap-patch">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${o}"
                    stroke-width="${.8*s}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${o}"
                    stroke-width="${s}"></circle>
          </svg>
        </div>`
        }
        update(e) {
            super.update(e), e.has("progress") && (this.progress > 1 && (this.progress = 1), this.progress < 0 && (this.progress = 0))
        }
    }
    v([Bt({
        type: Boolean,
        reflect: !0
    })], Zt.prototype, "indeterminate", void 0), v([Bt({
        type: Number,
        reflect: !0
    })], Zt.prototype, "progress", void 0), v([Bt({
        type: Number,
        reflect: !0
    })], Zt.prototype, "density", void 0), v([Bt({
        type: Boolean,
        reflect: !0
    })], Zt.prototype, "closed", void 0), v([Yt, Bt({
        type: String,
        attribute: "aria-label"
    })], Zt.prototype, "ariaLabel", void 0);
    const ei = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof Gt) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new Gt(i, Xt)
    })
    `.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}`;
    let ti = class extends Zt {};
    ti.styles = ei, ti = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-circular-progress", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-circular-progress", e)
                }
            }
        })(0, e);
        var t
    }], ti), window.JSCompiler_renameProperty = (e, t) => e;
    const ii = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        ri = (e, t) => t !== e && (t == t || e == e),
        oi = {
            attribute: !0,
            type: String,
            converter: ii,
            reflect: !1,
            hasChanged: ri
        };
    class si extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = oi) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || oi
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = ri) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || ii,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || ii.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = oi) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    si.finalized = !0;
    const ni = Element.prototype;
    ni.msMatchesSelector || ni.webkitMatchesSelector;
    const ai = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        ci = Symbol();
    class di {
        constructor(e, t) {
            if (t !== ci) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (ai ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const li = {};
    class pi extends si {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !ai) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new di(String(t), ci)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? ai ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== li && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return li
        }
    }
    pi.finalized = !0, pi.render = pe;
    class hi extends Zt {
        renderIndeterminateContainer() {
            return se `
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer mdc-circular-progress__color-1">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
        <div class="mdc-circular-progress__spinner-layer mdc-circular-progress__color-2">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
        <div class="mdc-circular-progress__spinner-layer mdc-circular-progress__color-3">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
        <div class="mdc-circular-progress__spinner-layer mdc-circular-progress__color-4">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
      </div>`
        }
    }
    const ui = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof di) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new di(i, ci)
    })
    `.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}.mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-circular-progress-bar-color-1, var(--mdc-theme-primary, #6200ee))}.mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-circular-progress-bar-color-2, var(--mdc-theme-primary, #6200ee))}.mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-circular-progress-bar-color-3, var(--mdc-theme-primary, #6200ee))}.mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-circular-progress-bar-color-4, var(--mdc-theme-primary, #6200ee))}:host{display:inline-flex}`;
    let mi = class extends hi {};
    mi.styles = ui, mi = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-circular-progress-four-color", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-circular-progress-four-color", e)
                }
            }
        })(0, e);
        var t
    }], mi), window.JSCompiler_renameProperty = (e, t) => e;
    const fi = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        _i = (e, t) => t !== e && (t == t || e == e),
        bi = {
            attribute: !0,
            type: String,
            converter: fi,
            reflect: !1,
            hasChanged: _i
        };
    class gi extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = bi) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || bi
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = _i) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || fi,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || fi.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = bi) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    gi.finalized = !0;
    const yi = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function vi(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : yi(e, t)
    }

    function Si(e) {
        return vi({
            attribute: !1,
            hasChanged: null == e ? void 0 : e.hasChanged
        })
    }

    function xi(e, t) {
        return (i, r) => {
            const o = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof r ? Symbol() : `__${r}`;
                o.get = function() {
                    return void 0 === this[t] && (this[t] = this.renderRoot.querySelector(e)), this[t]
                }
            }
            return void 0 !== r ? wi(o, i, r) : Ci(o, i)
        }
    }
    const wi = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        Ci = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        }),
        Pi = Element.prototype;
    Pi.msMatchesSelector || Pi.webkitMatchesSelector;
    const ki = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        Ai = Symbol();
    class Ei {
        constructor(e, t) {
            if (t !== Ai) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (ki ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const Ti = {};
    class Oi extends gi {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !ki) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new Ei(String(t), Ai)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? ki ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== Ti && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return Ti
        }
    }
    Oi.finalized = !0, Oi.render = pe;
    class Ri extends _t {
        createRenderRoot() {
            return this.attachShadow({
                mode: "open",
                delegatesFocus: !0
            })
        }
        click() {
            this.formElement && (this.formElement.focus(), this.formElement.click())
        }
        setAriaLabel(e) {
            this.formElement && this.formElement.setAttribute("aria-label", e)
        }
        firstUpdated() {
            super.firstUpdated(), this.shadowRoot && this.mdcRoot.addEventListener("change", (e => {
                this.dispatchEvent(new Event("change", e))
            }))
        }
    }
    class Ii extends Ri {
        constructor() {
            super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new zt((() => (this.shouldRenderRipple = !0, this.ripple.then((e => this.rippleElement = e)), this.ripple)))
        }
        createAdapter() {
            return {}
        }
        update(e) {
            const t = e.get("indeterminate"),
                i = e.get("checked"),
                r = e.get("disabled");
            if (void 0 !== t || void 0 !== i || void 0 !== r) {
                const e = this.calculateAnimationStateName(!!i, !!t, !!r),
                    o = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
                this.animationClass = `${e}-${o}`
            }
            super.update(e)
        }
        calculateAnimationStateName(e, t, i) {
            return i ? "disabled" : t ? "indeterminate" : e ? "checked" : "unchecked"
        }
        renderRipple() {
            const e = this.indeterminate || this.checked;
            return this.shouldRenderRipple ? se `
        <mwc-ripple
          .accent="${e}"
          .disabled="${this.disabled}"
          unbounded>
        </mwc-ripple>` : ""
        }
        render() {
            const e = this.indeterminate || this.checked,
                t = {
                    "mdc-checkbox--disabled": this.disabled,
                    "mdc-checkbox--selected": e,
                    "mdc-checkbox--touch": !this.reducedTouchTarget,
                    "mdc-ripple-upgraded--background-focused": this.focused,
                    "mdc-checkbox--anim-checked-indeterminate": "checked-indeterminate" == this.animationClass,
                    "mdc-checkbox--anim-checked-unchecked": "checked-unchecked" == this.animationClass,
                    "mdc-checkbox--anim-indeterminate-checked": "indeterminate-checked" == this.animationClass,
                    "mdc-checkbox--anim-indeterminate-unchecked": "indeterminate-unchecked" == this.animationClass,
                    "mdc-checkbox--anim-unchecked-checked": "unchecked-checked" == this.animationClass,
                    "mdc-checkbox--anim-unchecked-indeterminate": "unchecked-indeterminate" == this.animationClass
                },
                i = this.indeterminate ? "mixed" : void 0;
            return se `
      <div class="mdc-checkbox mdc-checkbox--upgraded ${At(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${Qt(this.name)}"
              aria-checked="${Qt(i)}"
              aria-label="${Qt(this.ariaLabel)}"
              aria-labelledby="${Qt(this.ariaLabelledBy)}"
              aria-describedby="${Qt(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate?"true":"false"}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`
        }
        handleFocus() {
            this.focused = !0, this.handleRippleFocus()
        }
        handleBlur() {
            this.focused = !1, this.handleRippleBlur()
        }
        handleRippleMouseDown(e) {
            const t = () => {
                window.removeEventListener("mouseup", t), this.handleRippleDeactivate()
            };
            window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e)
        }
        handleRippleTouchStart(e) {
            this.rippleHandlers.startPress(e)
        }
        handleRippleDeactivate() {
            this.rippleHandlers.endPress()
        }
        handleRippleMouseEnter() {
            this.rippleHandlers.startHover()
        }
        handleRippleMouseLeave() {
            this.rippleHandlers.endHover()
        }
        handleRippleFocus() {
            this.rippleHandlers.startFocus()
        }
        handleRippleBlur() {
            this.rippleHandlers.endFocus()
        }
        handleChange() {
            this.checked = this.formElement.checked, this.indeterminate = this.formElement.indeterminate
        }
        resetAnimationClass() {
            this.animationClass = ""
        }
        get isRippleActive() {
            var e;
            return (null === (e = this.rippleElement) || void 0 === e ? void 0 : e.isActive) || !1
        }
    }
    v([xi(".mdc-checkbox")], Ii.prototype, "mdcRoot", void 0), v([xi("input")], Ii.prototype, "formElement", void 0), v([vi({
        type: Boolean,
        reflect: !0
    })], Ii.prototype, "checked", void 0), v([vi({
        type: Boolean
    })], Ii.prototype, "indeterminate", void 0), v([vi({
        type: Boolean,
        reflect: !0
    })], Ii.prototype, "disabled", void 0), v([vi({
        type: String,
        reflect: !0
    })], Ii.prototype, "name", void 0), v([vi({
        type: String
    })], Ii.prototype, "value", void 0), v([Yt, vi({
        type: String,
        attribute: "aria-label"
    })], Ii.prototype, "ariaLabel", void 0), v([Yt, vi({
        type: String,
        attribute: "aria-labelledby"
    })], Ii.prototype, "ariaLabelledBy", void 0), v([Yt, vi({
        type: String,
        attribute: "aria-describedby"
    })], Ii.prototype, "ariaDescribedBy", void 0), v([vi({
        type: Boolean
    })], Ii.prototype, "reducedTouchTarget", void 0), v([Si()], Ii.prototype, "animationClass", void 0), v([Si()], Ii.prototype, "shouldRenderRipple", void 0), v([Si()], Ii.prototype, "focused", void 0), v([(e, t) => {
        const i = {
            async get() {
                return await this.updateComplete, this.renderRoot.querySelector("mwc-ripple")
            },
            enumerable: !0,
            configurable: !0
        };
        return void 0 !== t ? wi(i, e, t) : Ci(i, e)
    }], Ii.prototype, "ripple", void 0), v([function(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            Object.assign(t[i], e)
        })(e, t, i) : ((e, t) => Object.assign(Object.assign({}, t), {
            finisher(i) {
                Object.assign(i.prototype[t.key], e)
            }
        }))(e, t)
    }({
        passive: !0
    })], Ii.prototype, "handleRippleTouchStart", null);
    const Ui = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof Ei) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new Ei(i, Ai)
    })
    `.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-ripple-size, 40px)) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-ripple-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-ripple-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-ripple-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-ripple-size, 40px);height:40px;height:var(--mdc-checkbox-ripple-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 48px) - var(--mdc-checkbox-ripple-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-touch-target-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-touch-target-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-touch-target-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-touch-target-size, 48px);height:48px;height:var(--mdc-checkbox-touch-target-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
    let zi = class extends Ii {};
    zi.styles = Ui, zi = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-checkbox", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-checkbox", e)
                }
            }
        })(0, e);
        var t
    }], zi), window.JSCompiler_renameProperty = (e, t) => e;
    const Ni = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        Fi = (e, t) => t !== e && (t == t || e == e),
        Mi = {
            attribute: !0,
            type: String,
            converter: Ni,
            reflect: !1,
            hasChanged: Fi
        };
    class Li extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = Mi) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || Mi
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = Fi) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || Ni,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || Ni.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = Mi) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    Li.finalized = !0;
    const Di = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function Vi(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : Di(e, t)
    }

    function Hi(e, t) {
        return (i, r) => {
            const o = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof r ? Symbol() : `__${r}`;
                o.get = function() {
                    return void 0 === this[t] && (this[t] = this.renderRoot.querySelector(e)), this[t]
                }
            }
            return void 0 !== r ? ji(o, i, r) : Bi(o, i)
        }
    }
    const ji = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        Bi = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        }),
        qi = Element.prototype;
    qi.msMatchesSelector || qi.webkitMatchesSelector;
    const $i = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        Xi = Symbol();
    class Gi {
        constructor(e, t) {
            if (t !== Xi) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && ($i ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const Ji = {};
    class Wi extends Li {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !$i) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new Gi(String(t), Xi)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? $i ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== Ji && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return Ji
        }
    }
    Wi.finalized = !0, Wi.render = pe;
    var Yi = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        Ki = {
            ROOT: "mdc-form-field"
        },
        Qi = {
            LABEL_SELECTOR: ".mdc-form-field > label"
        };
    const Zi = function(e) {
            function t(i) {
                var r = e.call(this, y(y({}, t.defaultAdapter), i)) || this;
                return r.click = function() {
                    r.handleClick()
                }, r
            }
            return g(t, e), Object.defineProperty(t, "cssClasses", {
                get: function() {
                    return Ki
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "strings", {
                get: function() {
                    return Qi
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "defaultAdapter", {
                get: function() {
                    return {
                        activateInputRipple: function() {},
                        deactivateInputRipple: function() {},
                        deregisterInteractionHandler: function() {},
                        registerInteractionHandler: function() {}
                    }
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.init = function() {
                this.adapter.registerInteractionHandler("click", this.click)
            }, t.prototype.destroy = function() {
                this.adapter.deregisterInteractionHandler("click", this.click)
            }, t.prototype.handleClick = function() {
                var e = this;
                this.adapter.activateInputRipple(), requestAnimationFrame((function() {
                    e.adapter.deactivateInputRipple()
                }))
            }, t
        }(Yi),
        er = e => (t, i) => {
            if (t.constructor._observers) {
                if (!t.constructor.hasOwnProperty("_observers")) {
                    const e = t.constructor._observers;
                    t.constructor._observers = new Map, e.forEach(((e, i) => t.constructor._observers.set(i, e)))
                }
            } else {
                t.constructor._observers = new Map;
                const e = t.updated;
                t.updated = function(t) {
                    e.call(this, t), t.forEach(((e, t) => {
                        const i = this.constructor._observers.get(t);
                        void 0 !== i && i.call(this, this[t], e)
                    }))
                }
            }
            t.constructor._observers.set(i, e)
        };
    class tr extends _t {
        constructor() {
            super(...arguments), this.alignEnd = !1, this.spaceBetween = !1, this.nowrap = !1, this.label = "", this.mdcFoundationClass = Zi
        }
        createAdapter() {
            return {
                registerInteractionHandler: (e, t) => {
                    this.labelEl.addEventListener(e, t)
                },
                deregisterInteractionHandler: (e, t) => {
                    this.labelEl.removeEventListener(e, t)
                },
                activateInputRipple: async () => {
                    const e = this.input;
                    if (e instanceof Ri) {
                        const t = await e.ripple;
                        t && t.startPress()
                    }
                },
                deactivateInputRipple: async () => {
                    const e = this.input;
                    if (e instanceof Ri) {
                        const t = await e.ripple;
                        t && t.endPress()
                    }
                }
            }
        }
        get input() {
            return dt(this.slotEl, "*")
        }
        render() {
            const e = {
                "mdc-form-field--align-end": this.alignEnd,
                "mdc-form-field--space-between": this.spaceBetween,
                "mdc-form-field--nowrap": this.nowrap
            };
            return se `
      <div class="mdc-form-field ${At(e)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`
        }
        _labelClick() {
            const e = this.input;
            e && (e.focus(), e.click())
        }
    }
    v([Vi({
        type: Boolean
    })], tr.prototype, "alignEnd", void 0), v([Vi({
        type: Boolean
    })], tr.prototype, "spaceBetween", void 0), v([Vi({
        type: Boolean
    })], tr.prototype, "nowrap", void 0), v([Vi({
        type: String
    }), er((async function(e) {
        const t = this.input;
        t && ("input" === t.localName ? t.setAttribute("aria-label", e) : t instanceof Ri && (await t.updateComplete, t.setAriaLabel(e)))
    }))], tr.prototype, "label", void 0), v([Hi(".mdc-form-field")], tr.prototype, "mdcRoot", void 0), v([Hi("slot")], tr.prototype, "slotEl", void 0), v([Hi("label")], tr.prototype, "labelEl", void 0);
    const ir = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof Gi) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new Gi(i, Xi)
    })
    `.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch)[dir=rtl]{margin-left:10px}`;
    let rr = class extends tr {};
    rr.styles = ir, rr = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-formfield", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-formfield", e)
                }
            }
        })(0, e);
        var t
    }], rr), window.JSCompiler_renameProperty = (e, t) => e;
    const or = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        sr = (e, t) => t !== e && (t == t || e == e),
        nr = {
            attribute: !0,
            type: String,
            converter: or,
            reflect: !1,
            hasChanged: sr
        };
    class ar extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = nr) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || nr
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = sr) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || or,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || or.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = nr) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    ar.finalized = !0;
    const cr = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function dr(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : cr(e, t)
    }
    const lr = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        pr = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        });

    function hr(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            Object.assign(t[i], e)
        })(e, t, i) : ((e, t) => Object.assign(Object.assign({}, t), {
            finisher(i) {
                Object.assign(i.prototype[t.key], e)
            }
        }))(e, t)
    }
    const ur = Element.prototype;
    ur.msMatchesSelector || ur.webkitMatchesSelector;
    const mr = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        fr = Symbol();
    class _r {
        constructor(e, t) {
            if (t !== fr) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (mr ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const br = {};
    class gr extends ar {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !mr) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new _r(String(t), fr)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? mr ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== br && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return br
        }
    }
    gr.finalized = !0, gr.render = pe;
    class yr extends gr {
        constructor() {
            super(...arguments), this.disabled = !1, this.icon = "", this.shouldRenderRipple = !1, this.rippleHandlers = new zt((() => (this.shouldRenderRipple = !0, this.ripple)))
        }
        renderRipple() {
            return this.shouldRenderRipple ? se `
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>` : ""
        }
        focus() {
            const e = this.buttonElement;
            e && (this.rippleHandlers.startFocus(), e.focus())
        }
        blur() {
            const e = this.buttonElement;
            e && (this.rippleHandlers.endFocus(), e.blur())
        }
        render() {
            return se `<button
        class="mdc-icon-button"
        aria-label="${this.ariaLabel||this.icon}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    <i class="material-icons">${this.icon}</i>
    <span
      ><slot></slot
    ></span>
  </button>`
        }
        handleRippleMouseDown(e) {
            const t = () => {
                window.removeEventListener("mouseup", t), this.handleRippleDeactivate()
            };
            window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e)
        }
        handleRippleTouchStart(e) {
            this.rippleHandlers.startPress(e)
        }
        handleRippleDeactivate() {
            this.rippleHandlers.endPress()
        }
        handleRippleMouseEnter() {
            this.rippleHandlers.startHover()
        }
        handleRippleMouseLeave() {
            this.rippleHandlers.endHover()
        }
        handleRippleFocus() {
            this.rippleHandlers.startFocus()
        }
        handleRippleBlur() {
            this.rippleHandlers.endFocus()
        }
    }
    v([dr({
        type: Boolean,
        reflect: !0
    })], yr.prototype, "disabled", void 0), v([dr({
        type: String
    })], yr.prototype, "icon", void 0), v([Yt, dr({
        type: String,
        attribute: "aria-label"
    })], yr.prototype, "ariaLabel", void 0), v([function(e, t) {
        return (t, i) => {
            const r = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            return void 0 !== i ? lr(r, t, i) : pr(r, t)
        }
    }("button")], yr.prototype, "buttonElement", void 0), v([(e, t) => {
        const i = {
            async get() {
                return await this.updateComplete, this.renderRoot.querySelector("mwc-ripple")
            },
            enumerable: !0,
            configurable: !0
        };
        return void 0 !== t ? lr(i, e, t) : pr(i, e)
    }], yr.prototype, "ripple", void 0), v([dr({
        attribute: !1,
        hasChanged: void 0
    })], yr.prototype, "shouldRenderRipple", void 0), v([hr({
        passive: !0
    })], yr.prototype, "handleRippleMouseDown", null), v([hr({
        passive: !0
    })], yr.prototype, "handleRippleTouchStart", null);
    const vr = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof _r) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new _r(i, fr)
    })
    `.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;
    let Sr = class extends yr {};
    Sr.styles = vr, Sr = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-icon-button", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-icon-button", e)
                }
            }
        })(0, e);
        var t
    }], Sr), window.JSCompiler_renameProperty = (e, t) => e;
    const xr = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        wr = (e, t) => t !== e && (t == t || e == e),
        Cr = {
            attribute: !0,
            type: String,
            converter: xr,
            reflect: !1,
            hasChanged: wr
        };
    class Pr extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = Cr) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || Cr
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = wr) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || xr,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || xr.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = Cr) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    Pr.finalized = !0;
    const kr = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function Ar(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : kr(e, t)
    }

    function Er(e) {
        return Ar({
            attribute: !1,
            hasChanged: null == e ? void 0 : e.hasChanged
        })
    }
    const Tr = Element.prototype;
    Tr.msMatchesSelector || Tr.webkitMatchesSelector;
    const Or = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        Rr = Symbol();
    class Ir {
        constructor(e, t) {
            if (t !== Rr) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (Or ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const Ur = {};
    class zr extends Pr {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !Or) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new Ir(String(t), Rr)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Or ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== Ur && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return Ur
        }
    }
    zr.finalized = !0, zr.render = pe;
    class Nr extends zr {
        constructor() {
            super(...arguments), this.indeterminate = !1, this.progress = 0, this.buffer = 1, this.reverse = !1, this.closed = !1, this.stylePrimaryHalf = "", this.stylePrimaryFull = "", this.styleSecondaryQuarter = "", this.styleSecondaryHalf = "", this.styleSecondaryFull = "", this.animationReady = !0, this.closedAnimationOff = !1, this.resizeObserver = null
        }
        connectedCallback() {
            super.connectedCallback(), this.rootEl && this.attachResizeObserver()
        }
        render() {
            const e = {
                    "mdc-linear-progress--closed": this.closed,
                    "mdc-linear-progress--closed-animation-off": this.closedAnimationOff,
                    "mdc-linear-progress--indeterminate": this.indeterminate,
                    "mdc-linear-progress--animation-ready": this.animationReady
                },
                t = {
                    "--mdc-linear-progress-primary-half": this.stylePrimaryHalf,
                    "--mdc-linear-progress-primary-half-neg": "" !== this.stylePrimaryHalf ? `-${this.stylePrimaryHalf}` : "",
                    "--mdc-linear-progress-primary-full": this.stylePrimaryFull,
                    "--mdc-linear-progress-primary-full-neg": "" !== this.stylePrimaryFull ? `-${this.stylePrimaryFull}` : "",
                    "--mdc-linear-progress-secondary-quarter": this.styleSecondaryQuarter,
                    "--mdc-linear-progress-secondary-quarter-neg": "" !== this.styleSecondaryQuarter ? `-${this.styleSecondaryQuarter}` : "",
                    "--mdc-linear-progress-secondary-half": this.styleSecondaryHalf,
                    "--mdc-linear-progress-secondary-half-neg": "" !== this.styleSecondaryHalf ? `-${this.styleSecondaryHalf}` : "",
                    "--mdc-linear-progress-secondary-full": this.styleSecondaryFull,
                    "--mdc-linear-progress-secondary-full-neg": "" !== this.styleSecondaryFull ? `-${this.styleSecondaryFull}` : ""
                },
                i = {
                    "flex-basis": this.indeterminate ? "100%" : 100 * this.buffer + "%"
                },
                r = {
                    transform: this.indeterminate ? "scaleX(1)" : `scaleX(${this.progress})`
                };
            return se `
      <div
          role="progressbar"
          class="mdc-linear-progress ${At(e)}"
          style="${Tt(t)}"
          dir="${Qt(this.reverse?"rtl":void 0)}"
          aria-label="${Qt(this.ariaLabel)}"
          aria-valuemin="0"
          aria-valuemax="1"
          aria-valuenow="${Qt(this.indeterminate?void 0:this.progress)}"
        @transitionend="${this.syncClosedState}">
        <div class="mdc-linear-progress__buffer">
          <div
            class="mdc-linear-progress__buffer-bar"
            style=${Tt(i)}>
          </div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div
            class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
            style=${Tt(r)}>
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`
        }
        update(e) {
            !e.has("closed") || this.closed && void 0 !== e.get("closed") || this.syncClosedState(), super.update(e)
        }
        async firstUpdated(e) {
            super.firstUpdated(e), this.attachResizeObserver()
        }
        syncClosedState() {
            this.closedAnimationOff = this.closed
        }
        updated(e) {
            !e.has("indeterminate") && e.has("reverse") && this.indeterminate && this.restartAnimation(), e.has("indeterminate") && void 0 !== e.get("indeterminate") && this.indeterminate && window.ResizeObserver && this.calculateAndSetAnimationDimensions(this.rootEl.offsetWidth), super.updated(e)
        }
        disconnectedCallback() {
            this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), super.disconnectedCallback()
        }
        attachResizeObserver() {
            if (window.ResizeObserver) return this.resizeObserver = new window.ResizeObserver((e => {
                if (this.indeterminate)
                    for (const t of e)
                        if (t.contentRect) {
                            const e = t.contentRect.width;
                            this.calculateAndSetAnimationDimensions(e)
                        }
            })), void this.resizeObserver.observe(this.rootEl);
            this.resizeObserver = null
        }
        calculateAndSetAnimationDimensions(e) {
            const t = .8367142 * e,
                i = 2.00611057 * e,
                r = .37651913 * e,
                o = .84386165 * e,
                s = 1.60277782 * e;
            this.stylePrimaryHalf = `${t}px`, this.stylePrimaryFull = `${i}px`, this.styleSecondaryQuarter = `${r}px`, this.styleSecondaryHalf = `${o}px`, this.styleSecondaryFull = `${s}px`, this.restartAnimation()
        }
        async restartAnimation() {
            this.animationReady = !1, await this.updateComplete, await new Promise(requestAnimationFrame), this.animationReady = !0, await this.updateComplete
        }
        open() {
            this.closed = !1
        }
        close() {
            this.closed = !0
        }
    }
    v([function(e, t) {
        return (t, i) => {
            const r = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            return void 0 !== i ? ((e, t, i) => {
                Object.defineProperty(t, i, e)
            })(r, t, i) : ((e, t) => ({
                kind: "method",
                placement: "prototype",
                key: t.key,
                descriptor: e
            }))(r, t)
        }
    }(".mdc-linear-progress")], Nr.prototype, "rootEl", void 0), v([Ar({
        type: Boolean,
        reflect: !0
    })], Nr.prototype, "indeterminate", void 0), v([Ar({
        type: Number
    })], Nr.prototype, "progress", void 0), v([Ar({
        type: Number
    })], Nr.prototype, "buffer", void 0), v([Ar({
        type: Boolean,
        reflect: !0
    })], Nr.prototype, "reverse", void 0), v([Ar({
        type: Boolean,
        reflect: !0
    })], Nr.prototype, "closed", void 0), v([Yt, Ar({
        attribute: "aria-label"
    })], Nr.prototype, "ariaLabel", void 0), v([Er()], Nr.prototype, "stylePrimaryHalf", void 0), v([Er()], Nr.prototype, "stylePrimaryFull", void 0), v([Er()], Nr.prototype, "styleSecondaryQuarter", void 0), v([Er()], Nr.prototype, "styleSecondaryHalf", void 0), v([Er()], Nr.prototype, "styleSecondaryFull", void 0), v([Er()], Nr.prototype, "animationReady", void 0), v([Er()], Nr.prototype, "closedAnimationOff", void 0);
    const Fr = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof Ir) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new Ir(i, Rr)
    })
    `@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{visibility:hidden}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;visibility:visible}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}:host{display:block}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6;background-color:var(--mdc-linear-progress-buffer-color, #e6e6e6)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}`;
    let Mr = class extends Nr {};
    Mr.styles = Fr, Mr = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-linear-progress", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-linear-progress", e)
                }
            }
        })(0, e);
        var t
    }], Mr), window.JSCompiler_renameProperty = (e, t) => e;
    const Lr = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        Dr = (e, t) => t !== e && (t == t || e == e),
        Vr = {
            attribute: !0,
            type: String,
            converter: Lr,
            reflect: !1,
            hasChanged: Dr
        };
    class Hr extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = Vr) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || Vr
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = Dr) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || Lr,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || Lr.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = Vr) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    Hr.finalized = !0;
    const jr = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function Br(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : jr(e, t)
    }

    function qr(e, t) {
        return (i, r) => {
            const o = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof r ? Symbol() : `__${r}`;
                o.get = function() {
                    return void 0 === this[t] && (this[t] = this.renderRoot.querySelector(e)), this[t]
                }
            }
            return void 0 !== r ? $r(o, i, r) : Xr(o, i)
        }
    }
    const $r = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        Xr = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        }),
        Gr = Element.prototype;
    Gr.msMatchesSelector || Gr.webkitMatchesSelector;
    const Jr = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        Wr = Symbol();
    class Yr {
        constructor(e, t) {
            if (t !== Wr) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (Jr ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const Kr = {};
    class Qr extends Hr {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !Jr) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new Yr(String(t), Wr)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Jr ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== Kr && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return Kr
        }
    }
    Qr.finalized = !0, Qr.render = pe;
    const Zr = Symbol("selection controller");
    class eo {
        constructor() {
            this.selected = null, this.ordered = null, this.set = new Set
        }
    }
    class to {
        constructor(e) {
            this.sets = {}, this.focusedSet = null, this.mouseIsDown = !1, this.updating = !1, e.addEventListener("keydown", (e => {
                this.keyDownHandler(e)
            })), e.addEventListener("mousedown", (() => {
                this.mousedownHandler()
            })), e.addEventListener("mouseup", (() => {
                this.mouseupHandler()
            }))
        }
        static getController(e) {
            const t = !("global" in e) || "global" in e && e.global ? document : e.getRootNode();
            let i = t[Zr];
            return void 0 === i && (i = new to(t), t[Zr] = i), i
        }
        keyDownHandler(e) {
            const t = e.target;
            "checked" in t && this.has(t) && ("ArrowRight" == e.key || "ArrowDown" == e.key ? this.selectNext(t) : "ArrowLeft" != e.key && "ArrowUp" != e.key || this.selectPrevious(t))
        }
        mousedownHandler() {
            this.mouseIsDown = !0
        }
        mouseupHandler() {
            this.mouseIsDown = !1
        }
        has(e) {
            return this.getSet(e.name).set.has(e)
        }
        selectPrevious(e) {
            const t = this.getOrdered(e),
                i = t.indexOf(e),
                r = t[i - 1] || t[t.length - 1];
            return this.select(r), r
        }
        selectNext(e) {
            const t = this.getOrdered(e),
                i = t.indexOf(e),
                r = t[i + 1] || t[0];
            return this.select(r), r
        }
        select(e) {
            e.click()
        }
        focus(e) {
            if (this.mouseIsDown) return;
            const t = this.getSet(e.name),
                i = this.focusedSet;
            this.focusedSet = t, i != t && t.selected && t.selected != e && t.selected.focus()
        }
        isAnySelected(e) {
            const t = this.getSet(e.name);
            for (const e of t.set)
                if (e.checked) return !0;
            return !1
        }
        getOrdered(e) {
            const t = this.getSet(e.name);
            return t.ordered || (t.ordered = Array.from(t.set), t.ordered.sort(((e, t) => e.compareDocumentPosition(t) == Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0))), t.ordered
        }
        getSet(e) {
            return this.sets[e] || (this.sets[e] = new eo), this.sets[e]
        }
        register(e) {
            const t = e.name || e.getAttribute("name") || "",
                i = this.getSet(t);
            i.set.add(e), i.ordered = null
        }
        unregister(e) {
            const t = this.getSet(e.name);
            t.set.delete(e), t.ordered = null, t.selected == e && (t.selected = null)
        }
        update(e) {
            if (this.updating) return;
            this.updating = !0;
            const t = this.getSet(e.name);
            if (e.checked) {
                for (const i of t.set) i != e && (i.checked = !1);
                t.selected = e
            }
            if (this.isAnySelected(e))
                for (const e of t.set) {
                    if (void 0 === e.formElementTabIndex) break;
                    e.formElementTabIndex = e.checked ? 0 : -1
                }
            this.updating = !1
        }
    }
    var io = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        ro = {
            NATIVE_CONTROL_SELECTOR: ".mdc-radio__native-control"
        },
        oo = {
            DISABLED: "mdc-radio--disabled",
            ROOT: "mdc-radio"
        };
    const so = function(e) {
        function t(i) {
            return e.call(this, y(y({}, t.defaultAdapter), i)) || this
        }
        return g(t, e), Object.defineProperty(t, "cssClasses", {
            get: function() {
                return oo
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "strings", {
            get: function() {
                return ro
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "defaultAdapter", {
            get: function() {
                return {
                    addClass: function() {},
                    removeClass: function() {},
                    setNativeControlDisabled: function() {}
                }
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.setDisabled = function(e) {
            var i = t.cssClasses.DISABLED;
            this.adapter.setNativeControlDisabled(e), e ? this.adapter.addClass(i) : this.adapter.removeClass(i)
        }, t
    }(io);
    class no extends Ri {
        constructor() {
            super(...arguments), this._checked = !1, this.global = !1, this.disabled = !1, this.value = "", this.name = "", this.reducedTouchTarget = !1, this.mdcFoundationClass = so, this.formElementTabIndex = 0, this.shouldRenderRipple = !1, this.rippleElement = null, this.rippleHandlers = new zt((() => (this.shouldRenderRipple = !0, this.ripple.then((e => {
                this.rippleElement = e
            })), this.ripple)))
        }
        get checked() {
            return this._checked
        }
        set checked(e) {
            var t, i;
            const r = this._checked;
            e !== r && (this._checked = e, this.formElement && (this.formElement.checked = e), null === (t = this._selectionController) || void 0 === t || t.update(this), !1 === e && (null === (i = this.formElement) || void 0 === i || i.blur()), this.requestUpdate("checked", r), this.dispatchEvent(new Event("checked", {
                bubbles: !0,
                composed: !0
            })))
        }
        _handleUpdatedValue(e) {
            this.formElement.value = e
        }
        renderRipple() {
            return this.shouldRenderRipple ? se `<mwc-ripple unbounded accent .disabled="${this.disabled}"></mwc-ripple>` : ""
        }
        get isRippleActive() {
            var e;
            return (null === (e = this.rippleElement) || void 0 === e ? void 0 : e.isActive) || !1
        }
        connectedCallback() {
            super.connectedCallback(), this._selectionController = to.getController(this), this._selectionController.register(this), this._selectionController.update(this)
        }
        disconnectedCallback() {
            this._selectionController.unregister(this), this._selectionController = void 0
        }
        focus() {
            this.formElement.focus()
        }
        createAdapter() {
            return Object.assign(Object.assign({}, lt(this.mdcRoot)), {
                setNativeControlDisabled: e => {
                    this.formElement.disabled = e
                }
            })
        }
        handleFocus() {
            this.handleRippleFocus()
        }
        handleClick() {
            this.formElement.focus()
        }
        handleBlur() {
            this.formElement.blur(), this.rippleHandlers.endFocus()
        }
        render() {
            const e = {
                "mdc-radio--touch": !this.reducedTouchTarget,
                "mdc-radio--disabled": this.disabled
            };
            return se `
      <div class="mdc-radio ${At(e)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${Qt(this.ariaLabel)}"
          aria-labelledby="${Qt(this.ariaLabelledBy)}"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        ${this.renderRipple()}
      </div>`
        }
        handleRippleMouseDown(e) {
            const t = () => {
                window.removeEventListener("mouseup", t), this.handleRippleDeactivate()
            };
            window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e)
        }
        handleRippleTouchStart(e) {
            this.rippleHandlers.startPress(e)
        }
        handleRippleDeactivate() {
            this.rippleHandlers.endPress()
        }
        handleRippleMouseEnter() {
            this.rippleHandlers.startHover()
        }
        handleRippleMouseLeave() {
            this.rippleHandlers.endHover()
        }
        handleRippleFocus() {
            this.rippleHandlers.startFocus()
        }
        changeHandler() {
            this.checked = this.formElement.checked
        }
    }
    v([qr(".mdc-radio")], no.prototype, "mdcRoot", void 0), v([qr("input")], no.prototype, "formElement", void 0), v([Br({
        type: Boolean
    })], no.prototype, "global", void 0), v([Br({
        type: Boolean,
        reflect: !0
    })], no.prototype, "checked", null), v([Br({
        type: Boolean
    }), er((function(e) {
        this.mdcFoundation.setDisabled(e)
    }))], no.prototype, "disabled", void 0), v([Br({
        type: String
    }), er((function(e) {
        this._handleUpdatedValue(e)
    }))], no.prototype, "value", void 0), v([Br({
        type: String
    })], no.prototype, "name", void 0), v([Br({
        type: Boolean
    })], no.prototype, "reducedTouchTarget", void 0), v([Br({
        type: Number
    })], no.prototype, "formElementTabIndex", void 0), v([Br({
        attribute: !1,
        hasChanged: void 0
    })], no.prototype, "shouldRenderRipple", void 0), v([(e, t) => {
        const i = {
            async get() {
                return await this.updateComplete, this.renderRoot.querySelector("mwc-ripple")
            },
            enumerable: !0,
            configurable: !0
        };
        return void 0 !== t ? $r(i, e, t) : Xr(i, e)
    }], no.prototype, "ripple", void 0), v([Yt, Br({
        attribute: "aria-label"
    })], no.prototype, "ariaLabel", void 0), v([Yt, Br({
        attribute: "aria-labelledby"
    })], no.prototype, "ariaLabelledBy", void 0), v([function(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            Object.assign(t[i], e)
        })(e, t, i) : ((e, t) => Object.assign(Object.assign({}, t), {
            finisher(i) {
                Object.assign(i.prototype[t.key], e)
            }
        }))(e, t)
    }({
        passive: !0
    })], no.prototype, "handleRippleTouchStart", null);
    const ao = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof Yr) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new Yr(i, Wr)
    })
    `.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:10px;display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:-10px;left:-10px;width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:0px;right:0px;left:0px;width:40px;height:40px}@media screen and (-ms-high-contrast: active){.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;
    let co = class extends no {};
    co.styles = ao, co = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-radio", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-radio", e)
                }
            }
        })(0, e);
        var t
    }], co), window.JSCompiler_renameProperty = (e, t) => e;
    const lo = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        po = (e, t) => t !== e && (t == t || e == e),
        ho = {
            attribute: !0,
            type: String,
            converter: lo,
            reflect: !1,
            hasChanged: po
        };
    class uo extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = ho) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || ho
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = po) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || lo,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || lo.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = ho) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    uo.finalized = !0;
    const mo = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function fo(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : mo(e, t)
    }

    function _o(e) {
        return fo({
            attribute: !1,
            hasChanged: null == e ? void 0 : e.hasChanged
        })
    }

    function bo(e, t) {
        return (i, r) => {
            const o = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof r ? Symbol() : `__${r}`;
                o.get = function() {
                    return void 0 === this[t] && (this[t] = this.renderRoot.querySelector(e)), this[t]
                }
            }
            return void 0 !== r ? go(o, i, r) : yo(o, i)
        }
    }
    const go = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        yo = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        }),
        vo = Element.prototype;
    vo.msMatchesSelector || vo.webkitMatchesSelector;
    const So = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        xo = Symbol();
    class wo {
        constructor(e, t) {
            if (t !== xo) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (So ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const Co = {};
    class Po extends uo {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !So) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new wo(String(t), xo)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? So ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== Co && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return Co
        }
    }
    Po.finalized = !0, Po.render = pe, window.JSCompiler_renameProperty = (e, t) => e;
    const ko = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        Ao = (e, t) => t !== e && (t == t || e == e),
        Eo = {
            attribute: !0,
            type: String,
            converter: ko,
            reflect: !1,
            hasChanged: Ao
        };
    class To extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = Eo) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || Eo
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = Ao) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || ko,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || ko.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = Eo) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    To.finalized = !0;
    const Oo = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function Ro(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : Oo(e, t)
    }

    function Io(e, t) {
        return (i, r) => {
            const o = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof r ? Symbol() : `__${r}`;
                o.get = function() {
                    return void 0 === this[t] && (this[t] = this.renderRoot.querySelector(e)), this[t]
                }
            }
            return void 0 !== r ? Uo(o, i, r) : zo(o, i)
        }
    }
    const Uo = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        zo = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        }),
        No = Element.prototype;
    No.msMatchesSelector || No.webkitMatchesSelector;
    const Fo = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        Mo = Symbol();
    class Lo {
        constructor(e, t) {
            if (t !== Mo) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (Fo ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const Do = {};
    class Vo extends To {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !Fo) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new Lo(String(t), Mo)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Fo ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== Do && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return Do
        }
    }
    Vo.finalized = !0, Vo.render = pe;
    var Ho = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        jo = {
            NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
        },
        Bo = {
            NOTCH_ELEMENT_PADDING: 8
        },
        qo = {
            NO_LABEL: "mdc-notched-outline--no-label",
            OUTLINE_NOTCHED: "mdc-notched-outline--notched",
            OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
        },
        $o = function(e) {
            function t(i) {
                return e.call(this, y(y({}, t.defaultAdapter), i)) || this
            }
            return g(t, e), Object.defineProperty(t, "strings", {
                get: function() {
                    return jo
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "cssClasses", {
                get: function() {
                    return qo
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "numbers", {
                get: function() {
                    return Bo
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        setNotchWidthProperty: function() {},
                        removeNotchWidthProperty: function() {}
                    }
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.notch = function(e) {
                var i = t.cssClasses.OUTLINE_NOTCHED;
                e > 0 && (e += Bo.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(e), this.adapter.addClass(i)
            }, t.prototype.closeNotch = function() {
                var e = t.cssClasses.OUTLINE_NOTCHED;
                this.adapter.removeClass(e), this.adapter.removeNotchWidthProperty()
            }, t
        }(Ho);
    class Xo extends _t {
        constructor() {
            super(...arguments), this.mdcFoundationClass = $o, this.width = 0, this.open = !1, this.lastOpen = this.open
        }
        createAdapter() {
            return {
                addClass: e => this.mdcRoot.classList.add(e),
                removeClass: e => this.mdcRoot.classList.remove(e),
                setNotchWidthProperty: e => this.notchElement.style.setProperty("width", `${e}px`),
                removeNotchWidthProperty: () => this.notchElement.style.removeProperty("width")
            }
        }
        openOrClose(e, t) {
            this.mdcFoundation && (e && void 0 !== t ? this.mdcFoundation.notch(t) : this.mdcFoundation.closeNotch())
        }
        render() {
            this.openOrClose(this.open, this.width);
            const e = At({
                "mdc-notched-outline--notched": this.open
            });
            return se `
      <span class="mdc-notched-outline ${e}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`
        }
    }
    v([Io(".mdc-notched-outline")], Xo.prototype, "mdcRoot", void 0), v([Ro({
        type: Number
    })], Xo.prototype, "width", void 0), v([Ro({
        type: Boolean,
        reflect: !0
    })], Xo.prototype, "open", void 0), v([Io(".mdc-notched-outline__notch")], Xo.prototype, "notchElement", void 0);
    const Go = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof Lo) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new Lo(i, Mo)
    })
    `.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host[dir=rtl]{text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;
    let Jo = class extends Xo {};
    Jo.styles = Go, Jo = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-notched-outline", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-notched-outline", e)
                }
            }
        })(0, e);
        var t
    }], Jo), window.JSCompiler_renameProperty = (e, t) => e;
    const Wo = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        Yo = (e, t) => t !== e && (t == t || e == e),
        Ko = {
            attribute: !0,
            type: String,
            converter: Wo,
            reflect: !1,
            hasChanged: Yo
        };
    class Qo extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = Ko) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || Ko
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = Yo) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || Wo,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || Wo.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = Ko) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    Qo.finalized = !0;
    const Zo = e => t => "function" == typeof t ? ((e, t) => (window.customElements.define(e, t), t))(e, t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(t) {
                    window.customElements.define(e, t)
                }
            }
        })(e, t),
        es = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
            finisher(i) {
                i.createProperty(t.key, e)
            }
        }) : {
            kind: "field",
            key: Symbol(),
            placement: "own",
            descriptor: {},
            initializer() {
                "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
            },
            finisher(i) {
                i.createProperty(t.key, e)
            }
        };

    function ts(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : es(e, t)
    }

    function is(e) {
        return ts({
            attribute: !1,
            hasChanged: null == e ? void 0 : e.hasChanged
        })
    }

    function rs(e, t) {
        return (i, r) => {
            const o = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof r ? Symbol() : `__${r}`;
                o.get = function() {
                    return void 0 === this[t] && (this[t] = this.renderRoot.querySelector(e)), this[t]
                }
            }
            return void 0 !== r ? os(o, i, r) : ss(o, i)
        }
    }
    const os = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        ss = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        }),
        ns = Element.prototype;
    ns.msMatchesSelector || ns.webkitMatchesSelector;
    const as = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        cs = Symbol();
    class ds {
        constructor(e, t) {
            if (t !== cs) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (as ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }
    const ls = (e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof ds) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new ds(i, cs)
    };
    (window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const ps = {};
    class hs extends Qo {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !as) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new ds(String(t), cs)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? as ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== ps && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return ps
        }
    }
    hs.finalized = !0, hs.render = pe, window.JSCompiler_renameProperty = (e, t) => e;
    const us = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        ms = (e, t) => t !== e && (t == t || e == e),
        fs = {
            attribute: !0,
            type: String,
            converter: us,
            reflect: !1,
            hasChanged: ms
        };
    class _s extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = fs) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || fs
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = ms) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || us,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || us.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = fs) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    _s.finalized = !0;
    const bs = e => t => "function" == typeof t ? ((e, t) => (window.customElements.define(e, t), t))(e, t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(t) {
                    window.customElements.define(e, t)
                }
            }
        })(e, t),
        gs = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
            finisher(i) {
                i.createProperty(t.key, e)
            }
        }) : {
            kind: "field",
            key: Symbol(),
            placement: "own",
            descriptor: {},
            initializer() {
                "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
            },
            finisher(i) {
                i.createProperty(t.key, e)
            }
        };

    function ys(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : gs(e, t)
    }

    function vs(e) {
        return ys({
            attribute: !1,
            hasChanged: null == e ? void 0 : e.hasChanged
        })
    }

    function Ss(e, t) {
        return (i, r) => {
            const o = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof r ? Symbol() : `__${r}`;
                o.get = function() {
                    return void 0 === this[t] && (this[t] = this.renderRoot.querySelector(e)), this[t]
                }
            }
            return void 0 !== r ? xs(o, i, r) : ws(o, i)
        }
    }
    const xs = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        ws = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        }),
        Cs = Element.prototype;
    Cs.msMatchesSelector || Cs.webkitMatchesSelector;
    const Ps = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        ks = Symbol();
    class As {
        constructor(e, t) {
            if (t !== ks) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (Ps ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }
    const Es = (e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof As) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new As(i, ks)
    };
    (window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const Ts = {};
    class Os extends _s {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !Ps) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new As(String(t), ks)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Ps ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== Ts && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return Ts
        }
    }
    Os.finalized = !0, Os.render = pe;
    class Rs extends Os {
        constructor() {
            super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new zt((() => (this.shouldRenderRipple = !0, this.ripple))), this.listeners = [{
                target: this,
                eventNames: ["click"],
                cb: () => {
                    this.onClick()
                }
            }, {
                target: this,
                eventNames: ["mouseenter"],
                cb: this.rippleHandlers.startHover
            }, {
                target: this,
                eventNames: ["mouseleave"],
                cb: this.rippleHandlers.endHover
            }, {
                target: this,
                eventNames: ["focus"],
                cb: this.rippleHandlers.startFocus
            }, {
                target: this,
                eventNames: ["blur"],
                cb: this.rippleHandlers.endFocus
            }, {
                target: this,
                eventNames: ["mousedown", "touchstart"],
                cb: e => {
                    const t = e.type;
                    this.onDown("mousedown" === t ? "mouseup" : "touchend", e)
                }
            }]
        }
        get text() {
            const e = this.textContent;
            return e ? e.trim() : ""
        }
        render() {
            const e = this.renderText(),
                t = this.graphic ? this.renderGraphic() : se ``,
                i = this.hasMeta ? this.renderMeta() : se ``;
            return se `
      ${this.renderRipple()}
      ${t}
      ${e}
      ${i}`
        }
        renderRipple() {
            return this.shouldRenderRipple ? se `
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? se `<div class="fake-activated-ripple"></div>` : ""
        }
        renderGraphic() {
            const e = {
                multi: this.multipleGraphics
            };
            return se `
      <span class="mdc-deprecated-list-item__graphic material-icons ${At(e)}">
        <slot name="graphic"></slot>
      </span>`
        }
        renderMeta() {
            return se `
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`
        }
        renderText() {
            const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
            return se `
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`
        }
        renderSingleLine() {
            return se `<slot></slot>`
        }
        renderTwoline() {
            return se `
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `
        }
        onClick() {
            this.fireRequestSelected(!this.selected, "interaction")
        }
        onDown(e, t) {
            const i = () => {
                window.removeEventListener(e, i), this.rippleHandlers.endPress()
            };
            window.addEventListener(e, i), this.rippleHandlers.startPress(t)
        }
        fireRequestSelected(e, t) {
            if (this.noninteractive) return;
            const i = new CustomEvent("request-selected", {
                bubbles: !0,
                composed: !0,
                detail: {
                    source: t,
                    selected: e
                }
            });
            this.dispatchEvent(i)
        }
        connectedCallback() {
            super.connectedCallback(), this.noninteractive || this.setAttribute("mwc-list-item", "");
            for (const e of this.listeners)
                for (const t of e.eventNames) e.target.addEventListener(t, e.cb, {
                    passive: !0
                })
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            for (const e of this.listeners)
                for (const t of e.eventNames) e.target.removeEventListener(t, e.cb);
            this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0))
        }
        firstUpdated() {
            const e = new Event("list-item-rendered", {
                bubbles: !0,
                composed: !0
            });
            this.dispatchEvent(e)
        }
    }
    v([Ss("slot")], Rs.prototype, "slotElement", void 0), v([(e, t) => {
        const i = {
            async get() {
                return await this.updateComplete, this.renderRoot.querySelector("mwc-ripple")
            },
            enumerable: !0,
            configurable: !0
        };
        return void 0 !== t ? xs(i, e, t) : ws(i, e)
    }], Rs.prototype, "ripple", void 0), v([ys({
        type: String
    })], Rs.prototype, "value", void 0), v([ys({
        type: String,
        reflect: !0
    })], Rs.prototype, "group", void 0), v([ys({
        type: Number,
        reflect: !0
    })], Rs.prototype, "tabindex", void 0), v([ys({
        type: Boolean,
        reflect: !0
    }), er((function(e) {
        e ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false")
    }))], Rs.prototype, "disabled", void 0), v([ys({
        type: Boolean,
        reflect: !0
    })], Rs.prototype, "twoline", void 0), v([ys({
        type: Boolean,
        reflect: !0
    })], Rs.prototype, "activated", void 0), v([ys({
        type: String,
        reflect: !0
    })], Rs.prototype, "graphic", void 0), v([ys({
        type: Boolean
    })], Rs.prototype, "multipleGraphics", void 0), v([ys({
        type: Boolean
    })], Rs.prototype, "hasMeta", void 0), v([ys({
        type: Boolean,
        reflect: !0
    }), er((function(e) {
        e ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "")
    }))], Rs.prototype, "noninteractive", void 0), v([ys({
        type: Boolean,
        reflect: !0
    }), er((function(e) {
        const t = this.getAttribute("role"),
            i = "gridcell" === t || "option" === t || "row" === t || "tab" === t;
        i && e ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged ? this._firstChanged = !1 : this._skipPropRequest || this.fireRequestSelected(e, "property")
    }))], Rs.prototype, "selected", void 0), v([vs()], Rs.prototype, "shouldRenderRipple", void 0), v([vs()], Rs.prototype, "_managingList", void 0);
    const Is = Es `:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
    let Us = class extends Rs {};
    Us.styles = Is, Us = v([bs("mwc-list-item")], Us);
    var zs = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        Ns = "Backspace",
        Fs = "Enter",
        Ms = "Spacebar",
        Ls = "PageUp",
        Ds = "PageDown",
        Vs = "End",
        Hs = "Home",
        js = "ArrowLeft",
        Bs = "ArrowUp",
        qs = "ArrowRight",
        $s = "ArrowDown",
        Xs = "Delete",
        Gs = "Escape",
        Js = new Set;
    Js.add(Ns), Js.add(Fs), Js.add(Ms), Js.add(Ls), Js.add(Ds), Js.add(Vs), Js.add(Hs), Js.add(js), Js.add(Bs), Js.add(qs), Js.add($s), Js.add(Xs), Js.add(Gs), Js.add("Tab");
    var Ws = new Map;
    Ws.set(8, Ns), Ws.set(13, Fs), Ws.set(32, Ms), Ws.set(33, Ls), Ws.set(34, Ds), Ws.set(35, Vs), Ws.set(36, Hs), Ws.set(37, js), Ws.set(38, Bs), Ws.set(39, qs), Ws.set(40, $s), Ws.set(46, Xs), Ws.set(27, Gs), Ws.set(9, "Tab");
    var Ys, Ks, Qs = new Set;

    function Zs(e) {
        var t = e.key;
        return Js.has(t) ? t : Ws.get(e.keyCode) || "Unknown"
    }
    Qs.add(Ls), Qs.add(Ds), Qs.add(Vs), Qs.add(Hs), Qs.add(js), Qs.add(Bs), Qs.add(qs), Qs.add($s);
    var en = "mdc-list-item--disabled",
        tn = ((Ys = {})["mdc-list-item--activated"] = "mdc-list-item--activated", Ys["mdc-list-item"] = "mdc-list-item", Ys["mdc-list-item--disabled"] = "mdc-list-item--disabled", Ys["mdc-list-item--selected"] = "mdc-list-item--selected", Ys["mdc-list-item__primary-text"] = "mdc-list-item__primary-text", Ys["mdc-list"] = "mdc-list", (Ks = {})["mdc-list-item--activated"] = "mdc-deprecated-list-item--activated", Ks["mdc-list-item"] = "mdc-deprecated-list-item", Ks["mdc-list-item--disabled"] = "mdc-deprecated-list-item--disabled", Ks["mdc-list-item--selected"] = "mdc-deprecated-list-item--selected", Ks["mdc-list-item__text"] = "mdc-deprecated-list-item__text", Ks["mdc-list-item__primary-text"] = "mdc-deprecated-list-item__primary-text", Ks["mdc-list"] = "mdc-deprecated-list", Ks),
        rn = {
            ACTION_EVENT: "MDCList:action",
            ARIA_CHECKED: "aria-checked",
            ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
            ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
            ARIA_CURRENT: "aria-current",
            ARIA_DISABLED: "aria-disabled",
            ARIA_ORIENTATION: "aria-orientation",
            ARIA_ORIENTATION_HORIZONTAL: "horizontal",
            ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
            ARIA_SELECTED: "aria-selected",
            ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
            ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
            CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
            CHECKBOX_SELECTOR: 'input[type="checkbox"]',
            CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    .mdc-list-item button:not(:disabled),\n    .mdc-list-item a,\n    ." + tn["mdc-list-item"] + " button:not(:disabled),\n    ." + tn["mdc-list-item"] + " a\n  ",
            DEPRECATED_SELECTOR: ".mdc-deprecated-list",
            FOCUSABLE_CHILD_ELEMENTS: '\n    .mdc-list-item button:not(:disabled),\n    .mdc-list-item a,\n    .mdc-list-item input[type="radio"]:not(:disabled),\n    .mdc-list-item input[type="checkbox"]:not(:disabled),\n    .' + tn["mdc-list-item"] + " button:not(:disabled),\n    ." + tn["mdc-list-item"] + " a,\n    ." + tn["mdc-list-item"] + ' input[type="radio"]:not(:disabled),\n    .' + tn["mdc-list-item"] + ' input[type="checkbox"]:not(:disabled)\n  ',
            RADIO_SELECTOR: 'input[type="radio"]',
            SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
        },
        on = {
            UNSET_INDEX: -1,
            TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
        };
    const sn = (e, t) => e - t,
        nn = ["input", "button", "textarea", "select"];

    function an(e) {
        return e instanceof Set
    }
    const cn = e => {
        const t = e === on.UNSET_INDEX ? new Set : e;
        return an(t) ? new Set(t) : new Set([t])
    };
    class dn extends zs {
        constructor(e) {
            super(Object.assign(Object.assign({}, dn.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = on.UNSET_INDEX, this.focusedItemIndex_ = on.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null
        }
        static get strings() {
            return rn
        }
        static get numbers() {
            return on
        }
        static get defaultAdapter() {
            return {
                focusItemAtIndex: () => {},
                getFocusedElementIndex: () => 0,
                getListItemCount: () => 0,
                isFocusInsideList: () => !1,
                isRootFocused: () => !1,
                notifyAction: () => {},
                notifySelected: () => {},
                getSelectedStateForElementIndex: () => !1,
                setDisabledStateForElementIndex: () => {},
                getDisabledStateForElementIndex: () => !1,
                setSelectedStateForElementIndex: () => {},
                setActivatedStateForElementIndex: () => {},
                setTabIndexForElementIndex: () => {},
                setAttributeForElementIndex: () => {},
                getAttributeForElementIndex: () => null
            }
        }
        setWrapFocus(e) {
            this.wrapFocus_ = e
        }
        setMulti(e) {
            this.isMulti_ = e;
            const t = this.selectedIndex_;
            if (e) {
                if (!an(t)) {
                    const e = t === on.UNSET_INDEX;
                    this.selectedIndex_ = e ? new Set : new Set([t])
                }
            } else if (an(t))
                if (t.size) {
                    const e = Array.from(t).sort(sn);
                    this.selectedIndex_ = e[0]
                } else this.selectedIndex_ = on.UNSET_INDEX
        }
        setVerticalOrientation(e) {
            this.isVertical_ = e
        }
        setUseActivatedClass(e) {
            this.useActivatedClass_ = e
        }
        getSelectedIndex() {
            return this.selectedIndex_
        }
        setSelectedIndex(e) {
            this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(cn(e)) : this.setSingleSelectionAtIndex_(e))
        }
        handleFocusIn(e, t) {
            t >= 0 && this.adapter.setTabIndexForElementIndex(t, 0)
        }
        handleFocusOut(e, t) {
            t >= 0 && this.adapter.setTabIndexForElementIndex(t, -1), setTimeout((() => {
                this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_()
            }), 0)
        }
        handleKeydown(e, t, i) {
            const r = "ArrowLeft" === Zs(e),
                o = "ArrowUp" === Zs(e),
                s = "ArrowRight" === Zs(e),
                n = "ArrowDown" === Zs(e),
                a = "Home" === Zs(e),
                c = "End" === Zs(e),
                d = "Enter" === Zs(e),
                l = "Spacebar" === Zs(e);
            if (this.adapter.isRootFocused()) return void(o || c ? (e.preventDefault(), this.focusLastElement()) : (n || a) && (e.preventDefault(), this.focusFirstElement()));
            let p, h = this.adapter.getFocusedElementIndex();
            if (!(-1 === h && (h = i, h < 0))) {
                if (this.isVertical_ && n || !this.isVertical_ && s) this.preventDefaultEvent(e), p = this.focusNextElement(h);
                else if (this.isVertical_ && o || !this.isVertical_ && r) this.preventDefaultEvent(e), p = this.focusPrevElement(h);
                else if (a) this.preventDefaultEvent(e), p = this.focusFirstElement();
                else if (c) this.preventDefaultEvent(e), p = this.focusLastElement();
                else if ((d || l) && t) {
                    const t = e.target;
                    if (t && "A" === t.tagName && d) return;
                    this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(h, !0)
                }
                this.focusedItemIndex_ = h, void 0 !== p && (this.setTabindexAtIndex_(p), this.focusedItemIndex_ = p)
            }
        }
        handleSingleSelection(e, t, i) {
            e !== on.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, t, i), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e)
        }
        focusNextElement(e) {
            let t = e + 1;
            if (t >= this.adapter.getListItemCount()) {
                if (!this.wrapFocus_) return e;
                t = 0
            }
            return this.adapter.focusItemAtIndex(t), t
        }
        focusPrevElement(e) {
            let t = e - 1;
            if (t < 0) {
                if (!this.wrapFocus_) return e;
                t = this.adapter.getListItemCount() - 1
            }
            return this.adapter.focusItemAtIndex(t), t
        }
        focusFirstElement() {
            return this.adapter.focusItemAtIndex(0), 0
        }
        focusLastElement() {
            const e = this.adapter.getListItemCount() - 1;
            return this.adapter.focusItemAtIndex(e), e
        }
        setEnabled(e, t) {
            this.isIndexValid_(e) && this.adapter.setDisabledStateForElementIndex(e, !t)
        }
        preventDefaultEvent(e) {
            const t = `${e.target.tagName}`.toLowerCase(); - 1 === nn.indexOf(t) && e.preventDefault()
        }
        setSingleSelectionAtIndex_(e, t = !0) {
            this.selectedIndex_ !== e && (this.selectedIndex_ !== on.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), t && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e))
        }
        setMultiSelectionAtIndex_(e, t = !0) {
            const i = ((e, t) => {
                const i = Array.from(e),
                    r = Array.from(t),
                    o = {
                        added: [],
                        removed: []
                    },
                    s = i.sort(sn),
                    n = r.sort(sn);
                let a = 0,
                    c = 0;
                for (; a < s.length || c < n.length;) {
                    const e = s[a],
                        t = n[c];
                    e !== t ? void 0 !== e && (void 0 === t || e < t) ? (o.removed.push(e), a++) : void 0 !== t && (void 0 === e || t < e) && (o.added.push(t), c++) : (a++, c++)
                }
                return o
            })(cn(this.selectedIndex_), e);
            if (i.removed.length || i.added.length) {
                for (const e of i.removed) t && this.adapter.setSelectedStateForElementIndex(e, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !1);
                for (const e of i.added) t && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0);
                this.selectedIndex_ = e, this.adapter.notifySelected(e, i)
            }
        }
        setAriaForSingleSelectionAtIndex_(e) {
            this.selectedIndex_ === on.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, rn.ARIA_CURRENT));
            const t = null !== this.ariaCurrentAttrValue_,
                i = t ? rn.ARIA_CURRENT : rn.ARIA_SELECTED;
            this.selectedIndex_ !== on.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, i, "false");
            const r = t ? this.ariaCurrentAttrValue_ : "true";
            this.adapter.setAttributeForElementIndex(e, i, r)
        }
        setTabindexAtIndex_(e) {
            this.focusedItemIndex_ === on.UNSET_INDEX && 0 !== e ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0)
        }
        setTabindexToFirstSelectedItem_() {
            let e = 0;
            "number" == typeof this.selectedIndex_ && this.selectedIndex_ !== on.UNSET_INDEX ? e = this.selectedIndex_ : an(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e)
        }
        isIndexValid_(e) {
            if (e instanceof Set) {
                if (!this.isMulti_) throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
                if (0 === e.size) return !0; {
                    let t = !1;
                    for (const i of e)
                        if (t = this.isIndexInRange_(i), t) break;
                    return t
                }
            }
            if ("number" == typeof e) {
                if (this.isMulti_) throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
                return e === on.UNSET_INDEX || this.isIndexInRange_(e)
            }
            return !1
        }
        isIndexInRange_(e) {
            const t = this.adapter.getListItemCount();
            return e >= 0 && e < t
        }
        setSelectedIndexOnAction_(e, t, i) {
            if (this.adapter.getDisabledStateForElementIndex(e)) return;
            let r = e;
            this.isMulti_ && (r = new Set([e])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(e, i, t) : t || i ? this.setSingleSelectionAtIndex_(e, t) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(on.UNSET_INDEX), t && this.adapter.notifyAction(e))
        }
        toggleMultiAtIndex(e, t, i = !0) {
            let r = !1;
            r = void 0 === t ? !this.adapter.getSelectedStateForElementIndex(e) : t;
            const o = cn(this.selectedIndex_);
            r ? o.add(e) : o.delete(e), this.setMultiSelectionAtIndex_(o, i)
        }
    }
    const ln = dn,
        pn = e => e.hasAttribute("mwc-list-item");

    function hn() {
        const e = this.itemsReadyResolver;
        this.itemsReady = new Promise((e => this.itemsReadyResolver = e)), e()
    }
    class un extends _t {
        constructor() {
            super(), this.mdcAdapter = null, this.mdcFoundationClass = ln, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {}, this.itemsReady = Promise.resolve([]), this.items_ = [];
            const e = function(e, t = 50) {
                let i;
                return function(r = !0) {
                    clearTimeout(i), i = setTimeout((() => {
                        e(r)
                    }), t)
                }
            }(this.layout.bind(this));
            this.debouncedLayout = (t = !0) => {
                hn.call(this), e(t)
            }
        }
        async _getUpdateComplete() {
            let e = !1;
            return super._getUpdateComplete ? await super._getUpdateComplete() : e = await super.getUpdateComplete(), await this.itemsReady, e
        }
        async getUpdateComplete() {
            return this._getUpdateComplete()
        }
        get assignedElements() {
            const e = this.slotElement;
            return e ? e.assignedNodes({
                flatten: !0
            }).filter(ct) : []
        }
        get items() {
            return this.items_
        }
        updateItems() {
            const e = this.assignedElements,
                t = [];
            for (const i of e) pn(i) && (t.push(i), i._managingList = this), i.hasAttribute("divider") && !i.hasAttribute("role") && i.setAttribute("role", "separator");
            this.items_ = t;
            const i = new Set;
            if (this.items_.forEach(((e, t) => {
                    this.itemRoles ? e.setAttribute("role", this.itemRoles) : e.removeAttribute("role"), e.selected && i.add(t)
                })), this.multi) this.select(i);
            else {
                const e = i.size ? i.entries().next().value[1] : -1;
                this.select(e)
            }
            const r = new Event("items-updated", {
                bubbles: !0,
                composed: !0
            });
            this.dispatchEvent(r)
        }
        get selected() {
            const e = this.index;
            if (!an(e)) return -1 === e ? null : this.items[e];
            const t = [];
            for (const i of e) t.push(this.items[i]);
            return t
        }
        get index() {
            return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1
        }
        render() {
            const e = null === this.innerRole ? void 0 : this.innerRole,
                t = null === this.innerAriaLabel ? void 0 : this.innerAriaLabel,
                i = this.rootTabbable ? "0" : "-1";
            return se `
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${Qt(e)}"
          aria-label="${Qt(t)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `
        }
        renderPlaceholder() {
            return void 0 !== this.emptyMessage && 0 === this.assignedElements.length ? se `
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      ` : null
        }
        firstUpdated() {
            super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout())
        }
        onFocusIn(e) {
            if (this.mdcFoundation && this.mdcRoot) {
                const t = this.getIndexOfTarget(e);
                this.mdcFoundation.handleFocusIn(e, t)
            }
        }
        onFocusOut(e) {
            if (this.mdcFoundation && this.mdcRoot) {
                const t = this.getIndexOfTarget(e);
                this.mdcFoundation.handleFocusOut(e, t)
            }
        }
        onKeydown(e) {
            if (this.mdcFoundation && this.mdcRoot) {
                const t = this.getIndexOfTarget(e),
                    i = e.target,
                    r = pn(i);
                this.mdcFoundation.handleKeydown(e, r, t)
            }
        }
        onRequestSelected(e) {
            if (this.mdcFoundation) {
                let t = this.getIndexOfTarget(e);
                if (-1 === t && (this.layout(), t = this.getIndexOfTarget(e), -1 === t)) return;
                if (this.items[t].disabled) return;
                const i = e.detail.selected,
                    r = e.detail.source;
                this.mdcFoundation.handleSingleSelection(t, "interaction" === r, i), e.stopPropagation()
            }
        }
        getIndexOfTarget(e) {
            const t = this.items,
                i = e.composedPath();
            for (const e of i) {
                let i = -1;
                if (ct(e) && pn(e) && (i = t.indexOf(e)), -1 !== i) return i
            }
            return -1
        }
        createAdapter() {
            return this.mdcAdapter = {
                getListItemCount: () => this.mdcRoot ? this.items.length : 0,
                getFocusedElementIndex: this.getFocusedItemIndex,
                getAttributeForElementIndex: (e, t) => {
                    if (!this.mdcRoot) return "";
                    const i = this.items[e];
                    return i ? i.getAttribute(t) : ""
                },
                setAttributeForElementIndex: (e, t, i) => {
                    if (!this.mdcRoot) return;
                    const r = this.items[e];
                    r && r.setAttribute(t, i)
                },
                focusItemAtIndex: e => {
                    const t = this.items[e];
                    t && t.focus()
                },
                setTabIndexForElementIndex: (e, t) => {
                    const i = this.items[e];
                    i && (i.tabindex = t)
                },
                notifyAction: e => {
                    const t = {
                        bubbles: !0,
                        composed: !0
                    };
                    t.detail = {
                        index: e
                    };
                    const i = new CustomEvent("action", t);
                    this.dispatchEvent(i)
                },
                notifySelected: (e, t) => {
                    const i = {
                        bubbles: !0,
                        composed: !0
                    };
                    i.detail = {
                        index: e,
                        diff: t
                    };
                    const r = new CustomEvent("selected", i);
                    this.dispatchEvent(r)
                },
                isFocusInsideList: () => ft(this),
                isRootFocused: () => {
                    const e = this.mdcRoot;
                    return e.getRootNode().activeElement === e
                },
                setDisabledStateForElementIndex: (e, t) => {
                    const i = this.items[e];
                    i && (i.disabled = t)
                },
                getDisabledStateForElementIndex: e => {
                    const t = this.items[e];
                    return !!t && t.disabled
                },
                setSelectedStateForElementIndex: (e, t) => {
                    const i = this.items[e];
                    i && (i.selected = t)
                },
                getSelectedStateForElementIndex: e => {
                    const t = this.items[e];
                    return !!t && t.selected
                },
                setActivatedStateForElementIndex: (e, t) => {
                    const i = this.items[e];
                    i && (i.activated = t)
                }
            }, this.mdcAdapter
        }
        selectUi(e, t = !1) {
            const i = this.items[e];
            i && (i.selected = !0, i.activated = t)
        }
        deselectUi(e) {
            const t = this.items[e];
            t && (t.selected = !1, t.activated = !1)
        }
        select(e) {
            this.mdcFoundation && this.mdcFoundation.setSelectedIndex(e)
        }
        toggle(e, t) {
            this.multi && this.mdcFoundation.toggleMultiAtIndex(e, t)
        }
        onListItemConnected(e) {
            const t = e.target;
            this.layout(-1 === this.items.indexOf(t))
        }
        layout(e = !0) {
            e && this.updateItems();
            const t = this.items[0];
            for (const e of this.items) e.tabindex = -1;
            t && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = t) : t.tabindex = 0), this.itemsReadyResolver()
        }
        getFocusedItemIndex() {
            if (!this.mdcRoot) return -1;
            if (!this.items.length) return -1;
            const e = mt();
            if (!e.length) return -1;
            for (let t = e.length - 1; t >= 0; t--) {
                const i = e[t];
                if (pn(i)) return this.items.indexOf(i)
            }
            return -1
        }
        focusItemAtIndex(e) {
            for (const e of this.items)
                if (0 === e.tabindex) {
                    e.tabindex = -1;
                    break
                }
            this.items[e].tabindex = 0, this.items[e].focus()
        }
        focus() {
            const e = this.mdcRoot;
            e && e.focus()
        }
        blur() {
            const e = this.mdcRoot;
            e && e.blur()
        }
    }
    v([ys({
        type: String
    })], un.prototype, "emptyMessage", void 0), v([Ss(".mdc-deprecated-list")], un.prototype, "mdcRoot", void 0), v([Ss("slot")], un.prototype, "slotElement", void 0), v([ys({
        type: Boolean
    }), er((function(e) {
        this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(e)
    }))], un.prototype, "activatable", void 0), v([ys({
        type: Boolean
    }), er((function(e, t) {
        this.mdcFoundation && this.mdcFoundation.setMulti(e), void 0 !== t && this.layout()
    }))], un.prototype, "multi", void 0), v([ys({
        type: Boolean
    }), er((function(e) {
        this.mdcFoundation && this.mdcFoundation.setWrapFocus(e)
    }))], un.prototype, "wrapFocus", void 0), v([ys({
        type: String
    }), er((function(e, t) {
        void 0 !== t && this.updateItems()
    }))], un.prototype, "itemRoles", void 0), v([ys({
        type: String
    })], un.prototype, "innerRole", void 0), v([ys({
        type: String
    })], un.prototype, "innerAriaLabel", void 0), v([ys({
        type: Boolean
    })], un.prototype, "rootTabbable", void 0), v([ys({
        type: Boolean,
        reflect: !0
    }), er((function(e) {
        const t = this.slotElement;
        if (e && t) {
            const e = dt(t, '[tabindex="0"]');
            this.previousTabindex = e, e && e.setAttribute("tabindex", "-1")
        } else !e && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null)
    }))], un.prototype, "noninteractive", void 0);
    const mn = Es `@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset])[dir=rtl]{margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
    let fn = class extends un {};
    fn.styles = mn, fn = v([bs("mwc-list")], fn);
    var _n, bn, gn = {
            ANCHOR: "mdc-menu-surface--anchor",
            ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
            ANIMATING_OPEN: "mdc-menu-surface--animating-open",
            FIXED: "mdc-menu-surface--fixed",
            IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
            OPEN: "mdc-menu-surface--open",
            ROOT: "mdc-menu-surface"
        },
        yn = {
            CLOSED_EVENT: "MDCMenuSurface:closed",
            CLOSING_EVENT: "MDCMenuSurface:closing",
            OPENED_EVENT: "MDCMenuSurface:opened",
            FOCUSABLE_ELEMENTS: ["button:not(:disabled)", '[href]:not([aria-disabled="true"])', "input:not(:disabled)", "select:not(:disabled)", "textarea:not(:disabled)", '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")
        },
        vn = {
            TRANSITION_OPEN_DURATION: 120,
            TRANSITION_CLOSE_DURATION: 75,
            MARGIN_TO_EDGE: 32,
            ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: .67
        };
    ! function(e) {
        e[e.BOTTOM = 1] = "BOTTOM", e[e.CENTER = 2] = "CENTER", e[e.RIGHT = 4] = "RIGHT", e[e.FLIP_RTL = 8] = "FLIP_RTL"
    }(_n || (_n = {})),
    function(e) {
        e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 4] = "TOP_RIGHT", e[e.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", e[e.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", e[e.TOP_START = 8] = "TOP_START", e[e.TOP_END = 12] = "TOP_END", e[e.BOTTOM_START = 9] = "BOTTOM_START", e[e.BOTTOM_END = 13] = "BOTTOM_END"
    }(bn || (bn = {}));
    var Sn = function(e) {
        function t(i) {
            var r = e.call(this, y(y({}, t.defaultAdapter), i)) || this;
            return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = bn.TOP_START, r.originCorner = bn.TOP_START, r.anchorMargin = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, r.position = {
                x: 0,
                y: 0
            }, r
        }
        return g(t, e), Object.defineProperty(t, "cssClasses", {
            get: function() {
                return gn
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "strings", {
            get: function() {
                return yn
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "numbers", {
            get: function() {
                return vn
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "Corner", {
            get: function() {
                return bn
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "defaultAdapter", {
            get: function() {
                return {
                    addClass: function() {},
                    removeClass: function() {},
                    hasClass: function() {
                        return !1
                    },
                    hasAnchor: function() {
                        return !1
                    },
                    isElementInContainer: function() {
                        return !1
                    },
                    isFocused: function() {
                        return !1
                    },
                    isRtl: function() {
                        return !1
                    },
                    getInnerDimensions: function() {
                        return {
                            height: 0,
                            width: 0
                        }
                    },
                    getAnchorDimensions: function() {
                        return null
                    },
                    getWindowDimensions: function() {
                        return {
                            height: 0,
                            width: 0
                        }
                    },
                    getBodyDimensions: function() {
                        return {
                            height: 0,
                            width: 0
                        }
                    },
                    getWindowScroll: function() {
                        return {
                            x: 0,
                            y: 0
                        }
                    },
                    setPosition: function() {},
                    setMaxHeight: function() {},
                    setTransformOrigin: function() {},
                    saveFocus: function() {},
                    restoreFocus: function() {},
                    notifyClose: function() {},
                    notifyOpen: function() {},
                    notifyClosing: function() {}
                }
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.init = function() {
            var e = t.cssClasses,
                i = e.ROOT,
                r = e.OPEN;
            if (!this.adapter.hasClass(i)) throw new Error(i + " class required in root element.");
            this.adapter.hasClass(r) && (this.isSurfaceOpen = !0)
        }, t.prototype.destroy = function() {
            clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId)
        }, t.prototype.setAnchorCorner = function(e) {
            this.anchorCorner = e
        }, t.prototype.flipCornerHorizontally = function() {
            this.originCorner = this.originCorner ^ _n.RIGHT
        }, t.prototype.setAnchorMargin = function(e) {
            this.anchorMargin.top = e.top || 0, this.anchorMargin.right = e.right || 0, this.anchorMargin.bottom = e.bottom || 0, this.anchorMargin.left = e.left || 0
        }, t.prototype.setIsHoisted = function(e) {
            this.isHoistedElement = e
        }, t.prototype.setFixedPosition = function(e) {
            this.isFixedPosition = e
        }, t.prototype.setAbsolutePosition = function(e, t) {
            this.position.x = this.isFinite(e) ? e : 0, this.position.y = this.isFinite(t) ? t : 0
        }, t.prototype.setIsHorizontallyCenteredOnViewport = function(e) {
            this.isHorizontallyCenteredOnViewport = e
        }, t.prototype.setQuickOpen = function(e) {
            this.isQuickOpen = e
        }, t.prototype.setMaxHeight = function(e) {
            this.maxHeight = e
        }, t.prototype.isOpen = function() {
            return this.isSurfaceOpen
        }, t.prototype.open = function() {
            var e = this;
            this.isSurfaceOpen || (this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(t.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(t.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame((function() {
                e.adapter.addClass(t.cssClasses.OPEN), e.dimensions = e.adapter.getInnerDimensions(), e.autoposition(), e.openAnimationEndTimerId = setTimeout((function() {
                    e.openAnimationEndTimerId = 0, e.adapter.removeClass(t.cssClasses.ANIMATING_OPEN), e.adapter.notifyOpen()
                }), vn.TRANSITION_OPEN_DURATION)
            })), this.isSurfaceOpen = !0))
        }, t.prototype.close = function(e) {
            var i = this;
            if (void 0 === e && (e = !1), this.isSurfaceOpen) {
                if (this.adapter.notifyClosing(), this.isQuickOpen) return this.isSurfaceOpen = !1, e || this.maybeRestoreFocus(), this.adapter.removeClass(t.cssClasses.OPEN), this.adapter.removeClass(t.cssClasses.IS_OPEN_BELOW), void this.adapter.notifyClose();
                this.adapter.addClass(t.cssClasses.ANIMATING_CLOSED), requestAnimationFrame((function() {
                    i.adapter.removeClass(t.cssClasses.OPEN), i.adapter.removeClass(t.cssClasses.IS_OPEN_BELOW), i.closeAnimationEndTimerId = setTimeout((function() {
                        i.closeAnimationEndTimerId = 0, i.adapter.removeClass(t.cssClasses.ANIMATING_CLOSED), i.adapter.notifyClose()
                    }), vn.TRANSITION_CLOSE_DURATION)
                })), this.isSurfaceOpen = !1, e || this.maybeRestoreFocus()
            }
        }, t.prototype.handleBodyClick = function(e) {
            var t = e.target;
            this.adapter.isElementInContainer(t) || this.close()
        }, t.prototype.handleKeydown = function(e) {
            var t = e.keyCode;
            ("Escape" === e.key || 27 === t) && this.close()
        }, t.prototype.autoposition = function() {
            var e;
            this.measurements = this.getAutoLayoutmeasurements();
            var i = this.getoriginCorner(),
                r = this.getMenuSurfaceMaxHeight(i),
                o = this.hasBit(i, _n.BOTTOM) ? "bottom" : "top",
                s = this.hasBit(i, _n.RIGHT) ? "right" : "left",
                n = this.getHorizontalOriginOffset(i),
                a = this.getVerticalOriginOffset(i),
                c = this.measurements,
                d = c.anchorSize,
                l = c.surfaceSize,
                p = ((e = {})[s] = n, e[o] = a, e);
            d.width / l.width > vn.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(p), this.adapter.setTransformOrigin(s + " " + o), this.adapter.setPosition(p), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, _n.BOTTOM) || this.adapter.addClass(t.cssClasses.IS_OPEN_BELOW)
        }, t.prototype.getAutoLayoutmeasurements = function() {
            var e = this.adapter.getAnchorDimensions(),
                t = this.adapter.getBodyDimensions(),
                i = this.adapter.getWindowDimensions(),
                r = this.adapter.getWindowScroll();
            return e || (e = {
                top: this.position.y,
                right: this.position.x,
                bottom: this.position.y,
                left: this.position.x,
                width: 0,
                height: 0
            }), {
                anchorSize: e,
                bodySize: t,
                surfaceSize: this.dimensions,
                viewportDistance: {
                    top: e.top,
                    right: i.width - e.right,
                    bottom: i.height - e.bottom,
                    left: e.left
                },
                viewportSize: i,
                windowScroll: r
            }
        }, t.prototype.getoriginCorner = function() {
            var e, i, r = this.originCorner,
                o = this.measurements,
                s = o.viewportDistance,
                n = o.anchorSize,
                a = o.surfaceSize,
                c = t.numbers.MARGIN_TO_EDGE;
            this.hasBit(this.anchorCorner, _n.BOTTOM) ? (e = s.top - c + this.anchorMargin.bottom, i = s.bottom - c - this.anchorMargin.bottom) : (e = s.top - c + this.anchorMargin.top, i = s.bottom - c + n.height - this.anchorMargin.top), !(i - a.height > 0) && e > i && (r = this.setBit(r, _n.BOTTOM));
            var d, l, p, h = this.adapter.isRtl(),
                u = this.hasBit(this.anchorCorner, _n.FLIP_RTL),
                m = this.hasBit(this.anchorCorner, _n.RIGHT) || this.hasBit(r, _n.RIGHT);
            (p = h && u ? !m : m) ? (d = s.left + n.width + this.anchorMargin.right, l = s.right - this.anchorMargin.right) : (d = s.left + this.anchorMargin.left, l = s.right + n.width - this.anchorMargin.left);
            var f = d - a.width > 0,
                _ = l - a.width > 0,
                b = this.hasBit(r, _n.FLIP_RTL) && this.hasBit(r, _n.RIGHT);
            return _ && b && h || !f && b ? r = this.unsetBit(r, _n.RIGHT) : (f && p && h || f && !p && m || !_ && d >= l) && (r = this.setBit(r, _n.RIGHT)), r
        }, t.prototype.getMenuSurfaceMaxHeight = function(e) {
            if (this.maxHeight > 0) return this.maxHeight;
            var i = this.measurements.viewportDistance,
                r = 0,
                o = this.hasBit(e, _n.BOTTOM),
                s = this.hasBit(this.anchorCorner, _n.BOTTOM),
                n = t.numbers.MARGIN_TO_EDGE;
            return o ? (r = i.top + this.anchorMargin.top - n, s || (r += this.measurements.anchorSize.height)) : (r = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - n, s && (r -= this.measurements.anchorSize.height)), r
        }, t.prototype.getHorizontalOriginOffset = function(e) {
            var t = this.measurements.anchorSize,
                i = this.hasBit(e, _n.RIGHT),
                r = this.hasBit(this.anchorCorner, _n.RIGHT);
            if (i) {
                var o = r ? t.width - this.anchorMargin.left : this.anchorMargin.right;
                return this.isHoistedElement || this.isFixedPosition ? o - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : o
            }
            return r ? t.width - this.anchorMargin.right : this.anchorMargin.left
        }, t.prototype.getVerticalOriginOffset = function(e) {
            var t = this.measurements.anchorSize,
                i = this.hasBit(e, _n.BOTTOM),
                r = this.hasBit(this.anchorCorner, _n.BOTTOM);
            return i ? r ? t.height - this.anchorMargin.top : -this.anchorMargin.bottom : r ? t.height + this.anchorMargin.bottom : this.anchorMargin.top
        }, t.prototype.adjustPositionForHoistedElement = function(e) {
            var t, i, r = this.measurements,
                o = r.windowScroll,
                s = r.viewportDistance,
                n = r.surfaceSize,
                a = r.viewportSize,
                c = Object.keys(e);
            try {
                for (var d = function(e) {
                        var t = "function" == typeof Symbol && Symbol.iterator,
                            i = t && e[t],
                            r = 0;
                        if (i) return i.call(e);
                        if (e && "number" == typeof e.length) return {
                            next: function() {
                                return e && r >= e.length && (e = void 0), {
                                    value: e && e[r++],
                                    done: !e
                                }
                            }
                        };
                        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    }(c), l = d.next(); !l.done; l = d.next()) {
                    var p = l.value,
                        h = e[p] || 0;
                    !this.isHorizontallyCenteredOnViewport || "left" !== p && "right" !== p ? (h += s[p], this.isFixedPosition || ("top" === p ? h += o.y : "bottom" === p ? h -= o.y : "left" === p ? h += o.x : h -= o.x), e[p] = h) : e[p] = (a.width - n.width) / 2
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    l && !l.done && (i = d.return) && i.call(d)
                } finally {
                    if (t) throw t.error
                }
            }
        }, t.prototype.maybeRestoreFocus = function() {
            var e = this.adapter.isFocused(),
                t = document.activeElement && this.adapter.isElementInContainer(document.activeElement);
            (e || t) && this.adapter.restoreFocus()
        }, t.prototype.hasBit = function(e, t) {
            return Boolean(e & t)
        }, t.prototype.setBit = function(e, t) {
            return e | t
        }, t.prototype.unsetBit = function(e, t) {
            return e ^ t
        }, t.prototype.isFinite = function(e) {
            return "number" == typeof e && isFinite(e)
        }, t
    }(function() {
        function e(e) {
            void 0 === e && (e = {}), this.adapter = e
        }
        return Object.defineProperty(e, "cssClasses", {
            get: function() {
                return {}
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e, "strings", {
            get: function() {
                return {}
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e, "numbers", {
            get: function() {
                return {}
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e, "defaultAdapter", {
            get: function() {
                return {}
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
    }());
    const xn = Sn,
        wn = {
            TOP_LEFT: bn.TOP_LEFT,
            TOP_RIGHT: bn.TOP_RIGHT,
            BOTTOM_LEFT: bn.BOTTOM_LEFT,
            BOTTOM_RIGHT: bn.BOTTOM_RIGHT,
            TOP_START: bn.TOP_START,
            TOP_END: bn.TOP_END,
            BOTTOM_START: bn.BOTTOM_START,
            BOTTOM_END: bn.BOTTOM_END
        };
    class Cn extends _t {
        constructor() {
            super(...arguments), this.mdcFoundationClass = xn, this.absolute = !1, this.fullwidth = !1, this.fixed = !1, this.x = null, this.y = null, this.quick = !1, this.open = !1, this.stayOpenOnBodyClick = !1, this.bitwiseCorner = bn.TOP_START, this.previousMenuCorner = null, this.menuCorner = "START", this.corner = "TOP_START", this.styleTop = "", this.styleLeft = "", this.styleRight = "", this.styleBottom = "", this.styleMaxHeight = "", this.styleTransformOrigin = "", this.anchor = null, this.previouslyFocused = null, this.previousAnchor = null, this.onBodyClickBound = () => {}
        }
        render() {
            const e = {
                    "mdc-menu-surface--fixed": this.fixed,
                    "mdc-menu-surface--fullwidth": this.fullwidth
                },
                t = {
                    top: this.styleTop,
                    left: this.styleLeft,
                    right: this.styleRight,
                    bottom: this.styleBottom,
                    "max-height": this.styleMaxHeight,
                    "transform-origin": this.styleTransformOrigin
                };
            return se `
      <div
          class="mdc-menu-surface ${At(e)}"
          style="${Tt(t)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`
        }
        createAdapter() {
            return Object.assign(Object.assign({}, lt(this.mdcRoot)), {
                hasAnchor: () => !!this.anchor,
                notifyClose: () => {
                    const e = new CustomEvent("closed", {
                        bubbles: !0,
                        composed: !0
                    });
                    this.open = !1, this.mdcRoot.dispatchEvent(e)
                },
                notifyClosing: () => {
                    const e = new CustomEvent("closing", {
                        bubbles: !0,
                        composed: !0
                    });
                    this.mdcRoot.dispatchEvent(e)
                },
                notifyOpen: () => {
                    const e = new CustomEvent("opened", {
                        bubbles: !0,
                        composed: !0
                    });
                    this.open = !0, this.mdcRoot.dispatchEvent(e)
                },
                isElementInContainer: () => !1,
                isRtl: () => !!this.mdcRoot && "rtl" === getComputedStyle(this.mdcRoot).direction,
                setTransformOrigin: e => {
                    this.mdcRoot && (this.styleTransformOrigin = e)
                },
                isFocused: () => ft(this),
                saveFocus: () => {
                    const e = mt(),
                        t = e.length;
                    t || (this.previouslyFocused = null), this.previouslyFocused = e[t - 1]
                },
                restoreFocus: () => {
                    this.previouslyFocused && "focus" in this.previouslyFocused && this.previouslyFocused.focus()
                },
                getInnerDimensions: () => {
                    const e = this.mdcRoot;
                    return e ? {
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    } : {
                        width: 0,
                        height: 0
                    }
                },
                getAnchorDimensions: () => {
                    const e = this.anchor;
                    return e ? e.getBoundingClientRect() : null
                },
                getBodyDimensions: () => ({
                    width: document.body.clientWidth,
                    height: document.body.clientHeight
                }),
                getWindowDimensions: () => ({
                    width: window.innerWidth,
                    height: window.innerHeight
                }),
                getWindowScroll: () => ({
                    x: window.pageXOffset,
                    y: window.pageYOffset
                }),
                setPosition: e => {
                    this.mdcRoot && (this.styleLeft = "left" in e ? `${e.left}px` : "", this.styleRight = "right" in e ? `${e.right}px` : "", this.styleTop = "top" in e ? `${e.top}px` : "", this.styleBottom = "bottom" in e ? `${e.bottom}px` : "")
                },
                setMaxHeight: async e => {
                    this.mdcRoot && (this.styleMaxHeight = e, await this.updateComplete, this.styleMaxHeight = `var(--mdc-menu-max-height, ${e})`)
                }
            })
        }
        onKeydown(e) {
            this.mdcFoundation && this.mdcFoundation.handleKeydown(e)
        }
        onBodyClick(e) {
            this.stayOpenOnBodyClick || -1 === e.composedPath().indexOf(this) && this.close()
        }
        registerBodyClick() {
            this.onBodyClickBound = this.onBodyClick.bind(this), document.body.addEventListener("click", this.onBodyClickBound, {
                passive: !0,
                capture: !0
            })
        }
        deregisterBodyClick() {
            document.body.removeEventListener("click", this.onBodyClickBound, {
                capture: !0
            })
        }
        close() {
            this.open = !1
        }
        show() {
            this.open = !0
        }
    }
    v([rs(".mdc-menu-surface")], Cn.prototype, "mdcRoot", void 0), v([rs("slot")], Cn.prototype, "slotElement", void 0), v([ts({
        type: Boolean
    }), er((function(e) {
        this.mdcFoundation && !this.fixed && this.mdcFoundation.setIsHoisted(e)
    }))], Cn.prototype, "absolute", void 0), v([ts({
        type: Boolean
    })], Cn.prototype, "fullwidth", void 0), v([ts({
        type: Boolean
    }), er((function(e) {
        this.mdcFoundation && !this.absolute && this.mdcFoundation.setFixedPosition(e)
    }))], Cn.prototype, "fixed", void 0), v([ts({
        type: Number
    }), er((function(e) {
        this.mdcFoundation && null !== this.y && null !== e && (this.mdcFoundation.setAbsolutePosition(e, this.y), this.mdcFoundation.setAnchorMargin({
            left: e,
            top: this.y,
            right: -e,
            bottom: this.y
        }))
    }))], Cn.prototype, "x", void 0), v([ts({
        type: Number
    }), er((function(e) {
        this.mdcFoundation && null !== this.x && null !== e && (this.mdcFoundation.setAbsolutePosition(this.x, e), this.mdcFoundation.setAnchorMargin({
            left: this.x,
            top: e,
            right: -this.x,
            bottom: e
        }))
    }))], Cn.prototype, "y", void 0), v([ts({
        type: Boolean
    }), er((function(e) {
        this.mdcFoundation && this.mdcFoundation.setQuickOpen(e)
    }))], Cn.prototype, "quick", void 0), v([ts({
        type: Boolean,
        reflect: !0
    }), er((function(e, t) {
        this.mdcFoundation && (e ? this.mdcFoundation.open() : void 0 !== t && this.mdcFoundation.close())
    }))], Cn.prototype, "open", void 0), v([ts({
        type: Boolean
    })], Cn.prototype, "stayOpenOnBodyClick", void 0), v([is(), er((function(e) {
        this.mdcFoundation && this.mdcFoundation.setAnchorCorner(e)
    }))], Cn.prototype, "bitwiseCorner", void 0), v([ts({
        type: String
    }), er((function(e) {
        if (this.mdcFoundation) {
            const t = "START" === e || "END" === e,
                i = null === this.previousMenuCorner,
                r = !i && e !== this.previousMenuCorner,
                o = i && "END" === e;
            t && (r || o) && (this.bitwiseCorner = this.bitwiseCorner ^ _n.RIGHT, this.mdcFoundation.flipCornerHorizontally(), this.previousMenuCorner = e)
        }
    }))], Cn.prototype, "menuCorner", void 0), v([ts({
        type: String
    }), er((function(e) {
        if (this.mdcFoundation && e) {
            let t = wn[e];
            "END" === this.menuCorner && (t ^= _n.RIGHT), this.bitwiseCorner = t
        }
    }))], Cn.prototype, "corner", void 0), v([is()], Cn.prototype, "styleTop", void 0), v([is()], Cn.prototype, "styleLeft", void 0), v([is()], Cn.prototype, "styleRight", void 0), v([is()], Cn.prototype, "styleBottom", void 0), v([is()], Cn.prototype, "styleMaxHeight", void 0), v([is()], Cn.prototype, "styleTransformOrigin", void 0);
    const Pn = ls `.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;
    let kn = class extends Cn {};
    kn.styles = Pn, kn = v([Zo("mwc-menu-surface")], kn);
    var An, En = {
            MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
            MENU_SELECTION_GROUP: "mdc-menu__selection-group",
            ROOT: "mdc-menu"
        },
        Tn = {
            ARIA_CHECKED_ATTR: "aria-checked",
            ARIA_DISABLED_ATTR: "aria-disabled",
            CHECKBOX_SELECTOR: 'input[type="checkbox"]',
            LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
            SELECTED_EVENT: "MDCMenu:selected"
        },
        On = {
            FOCUS_ROOT_INDEX: -1
        };
    ! function(e) {
        e[e.NONE = 0] = "NONE", e[e.LIST_ROOT = 1] = "LIST_ROOT", e[e.FIRST_ITEM = 2] = "FIRST_ITEM", e[e.LAST_ITEM = 3] = "LAST_ITEM"
    }(An || (An = {}));
    const Rn = function(e) {
        function t(i) {
            var r = e.call(this, y(y({}, t.defaultAdapter), i)) || this;
            return r.closeAnimationEndTimerId_ = 0, r.defaultFocusState_ = An.LIST_ROOT, r
        }
        return g(t, e), Object.defineProperty(t, "cssClasses", {
            get: function() {
                return En
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "strings", {
            get: function() {
                return Tn
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "numbers", {
            get: function() {
                return On
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "defaultAdapter", {
            get: function() {
                return {
                    addClassToElementAtIndex: function() {},
                    removeClassFromElementAtIndex: function() {},
                    addAttributeToElementAtIndex: function() {},
                    removeAttributeFromElementAtIndex: function() {},
                    elementContainsClass: function() {
                        return !1
                    },
                    closeSurface: function() {},
                    getElementIndex: function() {
                        return -1
                    },
                    notifySelected: function() {},
                    getMenuItemCount: function() {
                        return 0
                    },
                    focusItemAtIndex: function() {},
                    focusListRoot: function() {},
                    getSelectedSiblingOfItemAtIndex: function() {
                        return -1
                    },
                    isSelectableItemAtIndex: function() {
                        return !1
                    }
                }
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.destroy = function() {
            this.closeAnimationEndTimerId_ && clearTimeout(this.closeAnimationEndTimerId_), this.adapter.closeSurface()
        }, t.prototype.handleKeydown = function(e) {
            var t = e.key,
                i = e.keyCode;
            ("Tab" === t || 9 === i) && this.adapter.closeSurface(!0)
        }, t.prototype.handleItemAction = function(e) {
            var t = this,
                i = this.adapter.getElementIndex(e);
            i < 0 || (this.adapter.notifySelected({
                index: i
            }), this.adapter.closeSurface(), this.closeAnimationEndTimerId_ = setTimeout((function() {
                var i = t.adapter.getElementIndex(e);
                i >= 0 && t.adapter.isSelectableItemAtIndex(i) && t.setSelectedIndex(i)
            }), Sn.numbers.TRANSITION_CLOSE_DURATION))
        }, t.prototype.handleMenuSurfaceOpened = function() {
            switch (this.defaultFocusState_) {
                case An.FIRST_ITEM:
                    this.adapter.focusItemAtIndex(0);
                    break;
                case An.LAST_ITEM:
                    this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
                    break;
                case An.NONE:
                    break;
                default:
                    this.adapter.focusListRoot()
            }
        }, t.prototype.setDefaultFocusState = function(e) {
            this.defaultFocusState_ = e
        }, t.prototype.setSelectedIndex = function(e) {
            if (this.validatedIndex_(e), !this.adapter.isSelectableItemAtIndex(e)) throw new Error("MDCMenuFoundation: No selection group at specified index.");
            var t = this.adapter.getSelectedSiblingOfItemAtIndex(e);
            t >= 0 && (this.adapter.removeAttributeFromElementAtIndex(t, Tn.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(t, En.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(e, En.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(e, Tn.ARIA_CHECKED_ATTR, "true")
        }, t.prototype.setEnabled = function(e, t) {
            this.validatedIndex_(e), t ? (this.adapter.removeClassFromElementAtIndex(e, en), this.adapter.addAttributeToElementAtIndex(e, Tn.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(e, en), this.adapter.addAttributeToElementAtIndex(e, Tn.ARIA_DISABLED_ATTR, "true"))
        }, t.prototype.validatedIndex_ = function(e) {
            var t = this.adapter.getMenuItemCount();
            if (!(e >= 0 && e < t)) throw new Error("MDCMenuFoundation: No list item at specified index.")
        }, t
    }(function() {
        function e(e) {
            void 0 === e && (e = {}), this.adapter = e
        }
        return Object.defineProperty(e, "cssClasses", {
            get: function() {
                return {}
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e, "strings", {
            get: function() {
                return {}
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e, "numbers", {
            get: function() {
                return {}
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e, "defaultAdapter", {
            get: function() {
                return {}
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
    }());
    class In extends _t {
        constructor() {
            super(...arguments), this.mdcFoundationClass = Rn, this.listElement_ = null, this.anchor = null, this.open = !1, this.quick = !1, this.wrapFocus = !1, this.innerRole = "menu", this.corner = "TOP_START", this.x = null, this.y = null, this.absolute = !1, this.multi = !1, this.activatable = !1, this.fixed = !1, this.forceGroupSelection = !1, this.fullwidth = !1, this.menuCorner = "START", this.stayOpenOnBodyClick = !1, this.defaultFocus = "LIST_ROOT", this._listUpdateComplete = null
        }
        get listElement() {
            return this.listElement_ || (this.listElement_ = this.renderRoot.querySelector("mwc-list")), this.listElement_
        }
        get items() {
            const e = this.listElement;
            return e ? e.items : []
        }
        get index() {
            const e = this.listElement;
            return e ? e.index : -1
        }
        get selected() {
            const e = this.listElement;
            return e ? e.selected : null
        }
        render() {
            const e = "menu" === this.innerRole ? "menuitem" : "option";
            return se `
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          .menuCorner=${this.menuCorner}
          ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-deprecated-list"
          .itemRoles=${e}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`
        }
        createAdapter() {
            return {
                addClassToElementAtIndex: (e, t) => {
                    const i = this.listElement;
                    if (!i) return;
                    const r = i.items[e];
                    r && ("mdc-menu-item--selected" === t ? this.forceGroupSelection && !r.selected && i.toggle(e, !0) : r.classList.add(t))
                },
                removeClassFromElementAtIndex: (e, t) => {
                    const i = this.listElement;
                    if (!i) return;
                    const r = i.items[e];
                    r && ("mdc-menu-item--selected" === t ? r.selected && i.toggle(e, !1) : r.classList.remove(t))
                },
                addAttributeToElementAtIndex: (e, t, i) => {
                    const r = this.listElement;
                    if (!r) return;
                    const o = r.items[e];
                    o && o.setAttribute(t, i)
                },
                removeAttributeFromElementAtIndex: (e, t) => {
                    const i = this.listElement;
                    if (!i) return;
                    const r = i.items[e];
                    r && r.removeAttribute(t)
                },
                elementContainsClass: (e, t) => e.classList.contains(t),
                closeSurface: () => {
                    this.open = !1
                },
                getElementIndex: e => {
                    const t = this.listElement;
                    return t ? t.items.indexOf(e) : -1
                },
                notifySelected: () => {},
                getMenuItemCount: () => {
                    const e = this.listElement;
                    return e ? e.items.length : 0
                },
                focusItemAtIndex: e => {
                    const t = this.listElement;
                    if (!t) return;
                    const i = t.items[e];
                    i && i.focus()
                },
                focusListRoot: () => {
                    this.listElement && this.listElement.focus()
                },
                getSelectedSiblingOfItemAtIndex: e => {
                    const t = this.listElement;
                    if (!t) return -1;
                    const i = t.items[e];
                    if (!i || !i.group) return -1;
                    for (let r = 0; r < t.items.length; r++) {
                        if (r === e) continue;
                        const o = t.items[r];
                        if (o.selected && o.group === i.group) return r
                    }
                    return -1
                },
                isSelectableItemAtIndex: e => {
                    const t = this.listElement;
                    if (!t) return !1;
                    const i = t.items[e];
                    return !!i && i.hasAttribute("group")
                }
            }
        }
        onKeydown(e) {
            this.mdcFoundation && this.mdcFoundation.handleKeydown(e)
        }
        onAction(e) {
            const t = this.listElement;
            if (this.mdcFoundation && t) {
                const i = e.detail.index,
                    r = t.items[i];
                r && this.mdcFoundation.handleItemAction(r)
            }
        }
        onOpened() {
            this.open = !0, this.mdcFoundation && this.mdcFoundation.handleMenuSurfaceOpened()
        }
        onClosed() {
            this.open = !1
        }
        async _getUpdateComplete() {
            let e = !1;
            return await this._listUpdateComplete, super._getUpdateComplete ? await super._getUpdateComplete() : e = await super.getUpdateComplete(), e
        }
        getUpdateComplete() {
            return this._getUpdateComplete()
        }
        async firstUpdated() {
            super.firstUpdated();
            const e = this.listElement;
            e && (this._listUpdateComplete = e.updateComplete, await this._listUpdateComplete)
        }
        select(e) {
            const t = this.listElement;
            t && t.select(e)
        }
        close() {
            this.open = !1
        }
        show() {
            this.open = !0
        }
        getFocusedItemIndex() {
            const e = this.listElement;
            return e ? e.getFocusedItemIndex() : -1
        }
        focusItemAtIndex(e) {
            const t = this.listElement;
            t && t.focusItemAtIndex(e)
        }
        layout(e = !0) {
            const t = this.listElement;
            t && t.layout(e)
        }
    }
    v([rs(".mdc-menu")], In.prototype, "mdcRoot", void 0), v([rs("slot")], In.prototype, "slotElement", void 0), v([ts({
        type: Object
    })], In.prototype, "anchor", void 0), v([ts({
        type: Boolean,
        reflect: !0
    })], In.prototype, "open", void 0), v([ts({
        type: Boolean
    })], In.prototype, "quick", void 0), v([ts({
        type: Boolean
    })], In.prototype, "wrapFocus", void 0), v([ts({
        type: String
    })], In.prototype, "innerRole", void 0), v([ts({
        type: String
    })], In.prototype, "corner", void 0), v([ts({
        type: Number
    })], In.prototype, "x", void 0), v([ts({
        type: Number
    })], In.prototype, "y", void 0), v([ts({
        type: Boolean
    })], In.prototype, "absolute", void 0), v([ts({
        type: Boolean
    })], In.prototype, "multi", void 0), v([ts({
        type: Boolean
    })], In.prototype, "activatable", void 0), v([ts({
        type: Boolean
    })], In.prototype, "fixed", void 0), v([ts({
        type: Boolean
    })], In.prototype, "forceGroupSelection", void 0), v([ts({
        type: Boolean
    })], In.prototype, "fullwidth", void 0), v([ts({
        type: String
    })], In.prototype, "menuCorner", void 0), v([ts({
        type: Boolean
    })], In.prototype, "stayOpenOnBodyClick", void 0), v([ts({
        type: String
    }), er((function(e) {
        this.mdcFoundation && this.mdcFoundation.setDefaultFocusState(An[e])
    }))], In.prototype, "defaultFocus", void 0);
    const Un = ls `mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`;
    let zn = class extends In {};
    zn.styles = Un, zn = v([Zo("mwc-menu")], zn);
    var Nn = "Backspace",
        Fn = "Enter",
        Mn = "Spacebar",
        Ln = "PageUp",
        Dn = "PageDown",
        Vn = "End",
        Hn = "Home",
        jn = "ArrowLeft",
        Bn = "ArrowUp",
        qn = "ArrowRight",
        $n = "ArrowDown",
        Xn = "Delete",
        Gn = "Escape",
        Jn = new Set;
    Jn.add(Nn), Jn.add(Fn), Jn.add(Mn), Jn.add(Ln), Jn.add(Dn), Jn.add(Vn), Jn.add(Hn), Jn.add(jn), Jn.add(Bn), Jn.add(qn), Jn.add($n), Jn.add(Xn), Jn.add(Gn), Jn.add("Tab");
    var Wn = new Map;
    Wn.set(8, Nn), Wn.set(13, Fn), Wn.set(32, Mn), Wn.set(33, Ln), Wn.set(34, Dn), Wn.set(35, Vn), Wn.set(36, Hn), Wn.set(37, jn), Wn.set(38, Bn), Wn.set(39, qn), Wn.set(40, $n), Wn.set(46, Xn), Wn.set(27, Gn), Wn.set(9, "Tab");
    var Yn = new Set;

    function Kn(e) {
        var t = e.key;
        return Jn.has(t) ? t : Wn.get(e.keyCode) || "Unknown"
    }
    Yn.add(Ln), Yn.add(Dn), Yn.add(Vn), Yn.add(Hn), Yn.add(jn), Yn.add(Bn), Yn.add(qn), Yn.add($n);
    var Qn = "Backspace",
        Zn = "Enter",
        ea = "Spacebar",
        ta = "PageUp",
        ia = "PageDown",
        ra = "End",
        oa = "Home",
        sa = "ArrowLeft",
        na = "ArrowUp",
        aa = "ArrowRight",
        ca = "ArrowDown",
        da = "Delete",
        la = "Escape",
        pa = new Set;
    pa.add(Qn), pa.add(Zn), pa.add(ea), pa.add(ta), pa.add(ia), pa.add(ra), pa.add(oa), pa.add(sa), pa.add(na), pa.add(aa), pa.add(ca), pa.add(da), pa.add(la), pa.add("Tab");
    var ha = new Map;
    ha.set(8, Qn), ha.set(13, Zn), ha.set(32, ea), ha.set(33, ta), ha.set(34, ia), ha.set(35, ra), ha.set(36, oa), ha.set(37, sa), ha.set(38, na), ha.set(39, aa), ha.set(40, ca), ha.set(46, da), ha.set(27, la), ha.set(9, "Tab");
    var ua = new Set;

    function ma(e) {
        var t = e.key;
        return pa.has(t) ? t : ha.get(e.keyCode) || "Unknown"
    }
    ua.add(ta), ua.add(ia), ua.add(ra), ua.add(oa), ua.add(sa), ua.add(na), ua.add(aa), ua.add(ca);
    var fa = ["input", "button", "textarea", "select"],
        _a = function(e) {
            var t = e.target;
            if (t) {
                var i = ("" + t.tagName).toLowerCase(); - 1 === fa.indexOf(i) && e.preventDefault()
            }
        };

    function ba(e, t) {
        for (var i = new Map, r = 0; r < e; r++) {
            var o = t(r).trim();
            if (o) {
                var s = o[0].toLowerCase();
                i.has(s) || i.set(s, []), i.get(s).push({
                    text: o.toLowerCase(),
                    index: r
                })
            }
        }
        return i.forEach((function(e) {
            e.sort((function(e, t) {
                return e.index - t.index
            }))
        })), i
    }

    function ga(e, t) {
        var i, r = e.nextChar,
            o = e.focusItemAtIndex,
            s = e.sortedIndexByFirstChar,
            n = e.focusedItemIndex,
            a = e.skipFocus,
            c = e.isItemAtIndexDisabled;
        return clearTimeout(t.bufferClearTimeout), t.bufferClearTimeout = setTimeout((function() {
            ! function(e) {
                e.typeaheadBuffer = ""
            }(t)
        }), on.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), t.typeaheadBuffer = t.typeaheadBuffer + r, -1 === (i = 1 === t.typeaheadBuffer.length ? function(e, t, i, r) {
            var o = r.typeaheadBuffer[0],
                s = e.get(o);
            if (!s) return -1;
            if (o === r.currentFirstChar && s[r.sortedIndexCursor].index === t) {
                r.sortedIndexCursor = (r.sortedIndexCursor + 1) % s.length;
                var n = s[r.sortedIndexCursor].index;
                if (!i(n)) return n
            }
            r.currentFirstChar = o;
            var a, c = -1;
            for (a = 0; a < s.length; a++)
                if (!i(s[a].index)) {
                    c = a;
                    break
                }
            for (; a < s.length; a++)
                if (s[a].index > t && !i(s[a].index)) {
                    c = a;
                    break
                }
            return -1 !== c ? (r.sortedIndexCursor = c, s[r.sortedIndexCursor].index) : -1
        }(s, n, c, t) : function(e, t, i) {
            var r = i.typeaheadBuffer[0],
                o = e.get(r);
            if (!o) return -1;
            var s = o[i.sortedIndexCursor];
            if (0 === s.text.lastIndexOf(i.typeaheadBuffer, 0) && !t(s.index)) return s.index;
            for (var n = (i.sortedIndexCursor + 1) % o.length, a = -1; n !== i.sortedIndexCursor;) {
                var c = o[n],
                    d = 0 === c.text.lastIndexOf(i.typeaheadBuffer, 0),
                    l = !t(c.index);
                if (d && l) {
                    a = n;
                    break
                }
                n = (n + 1) % o.length
            }
            return -1 !== a ? (i.sortedIndexCursor = a, o[i.sortedIndexCursor].index) : -1
        }(s, c, t)) || a || o(i), i
    }

    function ya(e) {
        return e.typeaheadBuffer.length > 0
    }
    var va = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        Sa = {
            LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
            LABEL_REQUIRED: "mdc-floating-label--required",
            LABEL_SHAKE: "mdc-floating-label--shake",
            ROOT: "mdc-floating-label"
        },
        xa = function(e) {
            function t(i) {
                var r = e.call(this, y(y({}, t.defaultAdapter), i)) || this;
                return r.shakeAnimationEndHandler_ = function() {
                    return r.handleShakeAnimationEnd_()
                }, r
            }
            return g(t, e), Object.defineProperty(t, "cssClasses", {
                get: function() {
                    return Sa
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        getWidth: function() {
                            return 0
                        },
                        registerInteractionHandler: function() {},
                        deregisterInteractionHandler: function() {}
                    }
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.init = function() {
                this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler_)
            }, t.prototype.destroy = function() {
                this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler_)
            }, t.prototype.getWidth = function() {
                return this.adapter.getWidth()
            }, t.prototype.shake = function(e) {
                var i = t.cssClasses.LABEL_SHAKE;
                e ? this.adapter.addClass(i) : this.adapter.removeClass(i)
            }, t.prototype.float = function(e) {
                var i = t.cssClasses,
                    r = i.LABEL_FLOAT_ABOVE,
                    o = i.LABEL_SHAKE;
                e ? this.adapter.addClass(r) : (this.adapter.removeClass(r), this.adapter.removeClass(o))
            }, t.prototype.setRequired = function(e) {
                var i = t.cssClasses.LABEL_REQUIRED;
                e ? this.adapter.addClass(i) : this.adapter.removeClass(i)
            }, t.prototype.handleShakeAnimationEnd_ = function() {
                var e = t.cssClasses.LABEL_SHAKE;
                this.adapter.removeClass(e)
            }, t
        }(va);
    const wa = new WeakMap,
        Ca = F((e => t => {
            if (!wa.get(t)) {
                const i = t.committer.element;
                i.classList.add("mdc-floating-label");
                const r = (e => ({
                        addClass: t => e.classList.add(t),
                        removeClass: t => e.classList.remove(t),
                        getWidth: () => e.scrollWidth,
                        registerInteractionHandler: (t, i) => {
                            e.addEventListener(t, i)
                        },
                        deregisterInteractionHandler: (t, i) => {
                            e.removeEventListener(t, i)
                        }
                    }))(i),
                    o = new xa(r);
                o.init(), t.setValue(o), wa.set(t, {
                    label: e,
                    foundation: o
                })
            }
        }));
    var Pa = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        ka = {
            LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
            LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
        },
        Aa = function(e) {
            function t(i) {
                var r = e.call(this, y(y({}, t.defaultAdapter), i)) || this;
                return r.transitionEndHandler_ = function(e) {
                    return r.handleTransitionEnd(e)
                }, r
            }
            return g(t, e), Object.defineProperty(t, "cssClasses", {
                get: function() {
                    return ka
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        hasClass: function() {
                            return !1
                        },
                        setStyle: function() {},
                        registerEventHandler: function() {},
                        deregisterEventHandler: function() {}
                    }
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.init = function() {
                this.adapter.registerEventHandler("transitionend", this.transitionEndHandler_)
            }, t.prototype.destroy = function() {
                this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler_)
            }, t.prototype.activate = function() {
                this.adapter.removeClass(ka.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(ka.LINE_RIPPLE_ACTIVE)
            }, t.prototype.setRippleCenter = function(e) {
                this.adapter.setStyle("transform-origin", e + "px center")
            }, t.prototype.deactivate = function() {
                this.adapter.addClass(ka.LINE_RIPPLE_DEACTIVATING)
            }, t.prototype.handleTransitionEnd = function(e) {
                var t = this.adapter.hasClass(ka.LINE_RIPPLE_DEACTIVATING);
                "opacity" === e.propertyName && t && (this.adapter.removeClass(ka.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(ka.LINE_RIPPLE_DEACTIVATING))
            }, t
        }(Pa);
    const Ea = new WeakMap,
        Ta = F((() => e => {
            if (!Ea.get(e)) {
                const t = e.committer.element;
                t.classList.add("mdc-line-ripple");
                const i = (e => ({
                        addClass: t => e.classList.add(t),
                        removeClass: t => e.classList.remove(t),
                        hasClass: t => e.classList.contains(t),
                        setStyle: (t, i) => e.style.setProperty(t, i),
                        registerEventHandler: (t, i) => {
                            e.addEventListener(t, i)
                        },
                        deregisterEventHandler: (t, i) => {
                            e.removeEventListener(t, i)
                        }
                    }))(t),
                    r = new Aa(i);
                r.init(), e.setValue(r), Ea.set(e, r)
            }
        }));
    var Oa = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        Ra = "Backspace",
        Ia = "Enter",
        Ua = "Spacebar",
        za = "PageUp",
        Na = "PageDown",
        Fa = "End",
        Ma = "Home",
        La = "ArrowLeft",
        Da = "ArrowUp",
        Va = "ArrowRight",
        Ha = "ArrowDown",
        ja = "Delete",
        Ba = "Escape",
        qa = new Set;
    qa.add(Ra), qa.add(Ia), qa.add(Ua), qa.add(za), qa.add(Na), qa.add(Fa), qa.add(Ma), qa.add(La), qa.add(Da), qa.add(Va), qa.add(Ha), qa.add(ja), qa.add(Ba), qa.add("Tab");
    var $a = new Map;
    $a.set(8, Ra), $a.set(13, Ia), $a.set(32, Ua), $a.set(33, za), $a.set(34, Na), $a.set(35, Fa), $a.set(36, Ma), $a.set(37, La), $a.set(38, Da), $a.set(39, Va), $a.set(40, Ha), $a.set(46, ja), $a.set(27, Ba), $a.set(9, "Tab");
    var Xa = new Set;

    function Ga(e) {
        var t = e.key;
        return qa.has(t) ? t : $a.get(e.keyCode) || "Unknown"
    }
    Xa.add(za), Xa.add(Na), Xa.add(Fa), Xa.add(Ma), Xa.add(La), Xa.add(Da), Xa.add(Va), Xa.add(Ha);
    var Ja = {
            ACTIVATED: "mdc-select--activated",
            DISABLED: "mdc-select--disabled",
            FOCUSED: "mdc-select--focused",
            INVALID: "mdc-select--invalid",
            MENU_INVALID: "mdc-select__menu--invalid",
            OUTLINED: "mdc-select--outlined",
            REQUIRED: "mdc-select--required",
            ROOT: "mdc-select",
            WITH_LEADING_ICON: "mdc-select--with-leading-icon"
        },
        Wa = {
            ARIA_CONTROLS: "aria-controls",
            ARIA_DESCRIBEDBY: "aria-describedby",
            ARIA_SELECTED_ATTR: "aria-selected",
            CHANGE_EVENT: "MDCSelect:change",
            HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
            LABEL_SELECTOR: ".mdc-floating-label",
            LEADING_ICON_SELECTOR: ".mdc-select__icon",
            LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
            MENU_SELECTOR: ".mdc-select__menu",
            OUTLINE_SELECTOR: ".mdc-notched-outline",
            SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
            SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
            VALUE_ATTR: "data-value"
        },
        Ya = {
            LABEL_SCALE: .75,
            UNSET_INDEX: -1,
            CLICK_DEBOUNCE_TIMEOUT_MS: 330
        };
    const Ka = function(e) {
            function t(i, r) {
                void 0 === r && (r = {});
                var o = e.call(this, y(y({}, t.defaultAdapter), i)) || this;
                return o.disabled = !1, o.isMenuOpen = !1, o.useDefaultValidation = !0, o.customValidity = !0, o.lastSelectedIndex = Ya.UNSET_INDEX, o.clickDebounceTimeout = 0, o.recentlyClicked = !1, o.leadingIcon = r.leadingIcon, o.helperText = r.helperText, o
            }
            return g(t, e), Object.defineProperty(t, "cssClasses", {
                get: function() {
                    return Ja
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "numbers", {
                get: function() {
                    return Ya
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "strings", {
                get: function() {
                    return Wa
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        hasClass: function() {
                            return !1
                        },
                        activateBottomLine: function() {},
                        deactivateBottomLine: function() {},
                        getSelectedIndex: function() {
                            return -1
                        },
                        setSelectedIndex: function() {},
                        hasLabel: function() {
                            return !1
                        },
                        floatLabel: function() {},
                        getLabelWidth: function() {
                            return 0
                        },
                        setLabelRequired: function() {},
                        hasOutline: function() {
                            return !1
                        },
                        notchOutline: function() {},
                        closeOutline: function() {},
                        setRippleCenter: function() {},
                        notifyChange: function() {},
                        setSelectedText: function() {},
                        isSelectAnchorFocused: function() {
                            return !1
                        },
                        getSelectAnchorAttr: function() {
                            return ""
                        },
                        setSelectAnchorAttr: function() {},
                        removeSelectAnchorAttr: function() {},
                        addMenuClass: function() {},
                        removeMenuClass: function() {},
                        openMenu: function() {},
                        closeMenu: function() {},
                        getAnchorElement: function() {
                            return null
                        },
                        setMenuAnchorElement: function() {},
                        setMenuAnchorCorner: function() {},
                        setMenuWrapFocus: function() {},
                        focusMenuItemAtIndex: function() {},
                        getMenuItemCount: function() {
                            return 0
                        },
                        getMenuItemValues: function() {
                            return []
                        },
                        getMenuItemTextAtIndex: function() {
                            return ""
                        },
                        isTypeaheadInProgress: function() {
                            return !1
                        },
                        typeaheadMatchItem: function() {
                            return -1
                        }
                    }
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.getSelectedIndex = function() {
                return this.adapter.getSelectedIndex()
            }, t.prototype.setSelectedIndex = function(e, t, i) {
                void 0 === t && (t = !1), void 0 === i && (i = !1), e >= this.adapter.getMenuItemCount() || (e === Ya.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(e).trim()), this.adapter.setSelectedIndex(e), t && this.adapter.closeMenu(), i || this.lastSelectedIndex === e || this.handleChange(), this.lastSelectedIndex = e)
            }, t.prototype.setValue = function(e, t) {
                void 0 === t && (t = !1);
                var i = this.adapter.getMenuItemValues().indexOf(e);
                this.setSelectedIndex(i, !1, t)
            }, t.prototype.getValue = function() {
                var e = this.adapter.getSelectedIndex(),
                    t = this.adapter.getMenuItemValues();
                return e !== Ya.UNSET_INDEX ? t[e] : ""
            }, t.prototype.getDisabled = function() {
                return this.disabled
            }, t.prototype.setDisabled = function(e) {
                this.disabled = e, this.disabled ? (this.adapter.addClass(Ja.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(Ja.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString())
            }, t.prototype.openMenu = function() {
                this.adapter.addClass(Ja.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true")
            }, t.prototype.setHelperTextContent = function(e) {
                this.helperText && this.helperText.setContent(e)
            }, t.prototype.layout = function() {
                if (this.adapter.hasLabel()) {
                    var e = this.getValue().length > 0,
                        t = this.adapter.hasClass(Ja.FOCUSED),
                        i = e || t,
                        r = this.adapter.hasClass(Ja.REQUIRED);
                    this.notchOutline(i), this.adapter.floatLabel(i), this.adapter.setLabelRequired(r)
                }
            }, t.prototype.layoutOptions = function() {
                var e = this.adapter.getMenuItemValues().indexOf(this.getValue());
                this.setSelectedIndex(e, !1, !0)
            }, t.prototype.handleMenuOpened = function() {
                if (0 !== this.adapter.getMenuItemValues().length) {
                    var e = this.getSelectedIndex(),
                        t = e >= 0 ? e : 0;
                    this.adapter.focusMenuItemAtIndex(t)
                }
            }, t.prototype.handleMenuClosing = function() {
                this.adapter.setSelectAnchorAttr("aria-expanded", "false")
            }, t.prototype.handleMenuClosed = function() {
                this.adapter.removeClass(Ja.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur()
            }, t.prototype.handleChange = function() {
                this.layout(), this.adapter.notifyChange(this.getValue()), this.adapter.hasClass(Ja.REQUIRED) && this.useDefaultValidation && this.setValid(this.isValid())
            }, t.prototype.handleMenuItemAction = function(e) {
                this.setSelectedIndex(e, !0)
            }, t.prototype.handleFocus = function() {
                this.adapter.addClass(Ja.FOCUSED), this.layout(), this.adapter.activateBottomLine()
            }, t.prototype.handleBlur = function() {
                this.isMenuOpen || this.blur()
            }, t.prototype.handleClick = function(e) {
                this.disabled || this.recentlyClicked || (this.setClickDebounceTimeout(), this.isMenuOpen ? this.adapter.closeMenu() : (this.adapter.setRippleCenter(e), this.openMenu()))
            }, t.prototype.handleKeydown = function(e) {
                if (!this.isMenuOpen && this.adapter.hasClass(Ja.FOCUSED)) {
                    var t = Ga(e) === Ia,
                        i = Ga(e) === Ua,
                        r = Ga(e) === Da,
                        o = Ga(e) === Ha;
                    if (!e.ctrlKey && !e.metaKey && (!i && e.key && 1 === e.key.length || i && this.adapter.isTypeaheadInProgress())) {
                        var s = i ? " " : e.key,
                            n = this.adapter.typeaheadMatchItem(s, this.getSelectedIndex());
                        return n >= 0 && this.setSelectedIndex(n), void e.preventDefault()
                    }(t || i || r || o) && (r && this.getSelectedIndex() > 0 ? this.setSelectedIndex(this.getSelectedIndex() - 1) : o && this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1 && this.setSelectedIndex(this.getSelectedIndex() + 1), this.openMenu(), e.preventDefault())
                }
            }, t.prototype.notchOutline = function(e) {
                if (this.adapter.hasOutline()) {
                    var t = this.adapter.hasClass(Ja.FOCUSED);
                    if (e) {
                        var i = Ya.LABEL_SCALE,
                            r = this.adapter.getLabelWidth() * i;
                        this.adapter.notchOutline(r)
                    } else t || this.adapter.closeOutline()
                }
            }, t.prototype.setLeadingIconAriaLabel = function(e) {
                this.leadingIcon && this.leadingIcon.setAriaLabel(e)
            }, t.prototype.setLeadingIconContent = function(e) {
                this.leadingIcon && this.leadingIcon.setContent(e)
            }, t.prototype.setUseDefaultValidation = function(e) {
                this.useDefaultValidation = e
            }, t.prototype.setValid = function(e) {
                this.useDefaultValidation || (this.customValidity = e), this.adapter.setSelectAnchorAttr("aria-invalid", (!e).toString()), e ? (this.adapter.removeClass(Ja.INVALID), this.adapter.removeMenuClass(Ja.MENU_INVALID)) : (this.adapter.addClass(Ja.INVALID), this.adapter.addMenuClass(Ja.MENU_INVALID)), this.syncHelperTextValidity(e)
            }, t.prototype.isValid = function() {
                return this.useDefaultValidation && this.adapter.hasClass(Ja.REQUIRED) && !this.adapter.hasClass(Ja.DISABLED) ? this.getSelectedIndex() !== Ya.UNSET_INDEX && (0 !== this.getSelectedIndex() || Boolean(this.getValue())) : this.customValidity
            }, t.prototype.setRequired = function(e) {
                e ? this.adapter.addClass(Ja.REQUIRED) : this.adapter.removeClass(Ja.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", e.toString()), this.adapter.setLabelRequired(e)
            }, t.prototype.getRequired = function() {
                return "true" === this.adapter.getSelectAnchorAttr("aria-required")
            }, t.prototype.init = function() {
                var e = this.adapter.getAnchorElement();
                e && (this.adapter.setMenuAnchorElement(e), this.adapter.setMenuAnchorCorner(bn.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(Ja.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(Ja.INVALID)), this.layout(), this.layoutOptions()
            }, t.prototype.blur = function() {
                this.adapter.removeClass(Ja.FOCUSED), this.layout(), this.adapter.deactivateBottomLine(), this.adapter.hasClass(Ja.REQUIRED) && this.useDefaultValidation && this.setValid(this.isValid())
            }, t.prototype.syncHelperTextValidity = function(e) {
                if (this.helperText) {
                    this.helperText.setValidity(e);
                    var t = this.helperText.isVisible(),
                        i = this.helperText.getId();
                    t && i ? this.adapter.setSelectAnchorAttr(Wa.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(Wa.ARIA_DESCRIBEDBY)
                }
            }, t.prototype.setClickDebounceTimeout = function() {
                var e = this;
                clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout((function() {
                    e.recentlyClicked = !1
                }), Ya.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0
            }, t
        }(Oa),
        Qa = (e = {}) => {
            const t = {};
            for (const i in e) t[i] = e[i];
            return Object.assign({
                badInput: !1,
                customError: !1,
                patternMismatch: !1,
                rangeOverflow: !1,
                rangeUnderflow: !1,
                stepMismatch: !1,
                tooLong: !1,
                tooShort: !1,
                typeMismatch: !1,
                valid: !0,
                valueMissing: !1
            }, t)
        };
    class Za extends Ri {
        constructor() {
            super(...arguments), this.mdcFoundationClass = Ka, this.disabled = !1, this.outlined = !1, this.label = "", this.outlineOpen = !1, this.outlineWidth = 0, this.value = "", this.selectedText = "", this.icon = "", this.menuOpen = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.required = !1, this.naturalMenuWidth = !1, this.isUiValid = !0, this.fixedMenuPosition = !1, this.typeaheadState = {
                bufferClearTimeout: 0,
                currentFirstChar: "",
                sortedIndexCursor: 0,
                typeaheadBuffer: ""
            }, this.sortedIndexByFirstChar = new Map, this.menuElement_ = null, this.listeners = [], this.onBodyClickBound = () => {}, this._menuUpdateComplete = null, this.valueSetDirectly = !1, this.validityTransform = null, this._validity = Qa()
        }
        get items() {
            return this.menuElement_ || (this.menuElement_ = this.menuElement), this.menuElement_ ? this.menuElement_.items : []
        }
        get selected() {
            const e = this.menuElement;
            return e ? e.selected : null
        }
        get index() {
            const e = this.menuElement;
            return e ? e.index : -1
        }
        get shouldRenderHelperText() {
            return !!this.helper || !!this.validationMessage
        }
        get validity() {
            return this._checkValidity(this.value), this._validity
        }
        render() {
            const e = {
                    "mdc-select--disabled": this.disabled,
                    "mdc-select--no-label": !this.label,
                    "mdc-select--filled": !this.outlined,
                    "mdc-select--outlined": this.outlined,
                    "mdc-select--with-leading-icon": !!this.icon,
                    "mdc-select--required": this.required,
                    "mdc-select--invalid": !this.isUiValid
                },
                t = {
                    "mdc-select__menu--invalid": !this.isUiValid
                },
                i = this.shouldRenderHelperText ? "helper-text" : void 0;
            return se `
      <div
          class="mdc-select ${At(e)}">
        <input
            class="formElement"
            .value=${this.value}
            hidden
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby="label"
            aria-required=${this.required}
            aria-describedby=${Qt(i)}
            @click=${this.onClick}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            @keydown=${this.onKeydown}>
          ${this.renderRipple()}
          ${this.outlined?this.renderOutline():this.renderLabel()}
          ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text">${this.selectedText}</span>
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
                focusable="false">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${this.renderLineRipple()}
        </div>
        <mwc-menu
            innerRole="listbox"
            wrapFocus
            class="mdc-select__menu mdc-menu mdc-menu-surface ${At(t)}"
            activatable
            .fullwidth=${!this.fixedMenuPosition&&!this.naturalMenuWidth}
            .open=${this.menuOpen}
            .anchor=${this.anchorElement}
            .fixed=${this.fixedMenuPosition}
            @selected=${this.onSelected}
            @opened=${this.onOpened}
            @closed=${this.onClosed}
            @items-updated=${this.onItemsUpdated}
            @keydown=${this.handleTypeahead}>
          <slot></slot>
        </mwc-menu>
      </div>
      ${this.renderHelperText()}`
        }
        renderRipple() {
            return this.outlined ? D : se `
      <span class="mdc-select__ripple"></span>
    `
        }
        renderOutline() {
            return this.outlined ? se `
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>` : D
        }
        renderLabel() {
            return this.label ? se `
      <span
          .floatingLabelFoundation=${Ca(this.label)}
          id="label">${this.label}</span>
    ` : D
        }
        renderLeadingIcon() {
            return this.icon ? se `<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>` : D
        }
        renderLineRipple() {
            return this.outlined ? D : se `
      <span .lineRippleFoundation=${Ta()}></span>
    `
        }
        renderHelperText() {
            if (!this.shouldRenderHelperText) return D;
            const e = this.validationMessage && !this.isUiValid;
            return se `
        <p
          class="mdc-select-helper-text ${At({"mdc-select-helper-text--validation-msg":e})}"
          id="helper-text">${e?this.validationMessage:this.helper}</p>`
        }
        createAdapter() {
            return Object.assign(Object.assign({}, lt(this.mdcRoot)), {
                activateBottomLine: () => {
                    this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.activate()
                },
                deactivateBottomLine: () => {
                    this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.deactivate()
                },
                hasLabel: () => !!this.label,
                floatLabel: e => {
                    this.labelElement && this.labelElement.floatingLabelFoundation.float(e)
                },
                getLabelWidth: () => this.labelElement ? this.labelElement.floatingLabelFoundation.getWidth() : 0,
                setLabelRequired: e => {
                    this.labelElement && this.labelElement.floatingLabelFoundation.setRequired(e)
                },
                hasOutline: () => this.outlined,
                notchOutline: e => {
                    this.outlineElement && !this.outlineOpen && (this.outlineWidth = e, this.outlineOpen = !0)
                },
                closeOutline: () => {
                    this.outlineElement && (this.outlineOpen = !1)
                },
                setRippleCenter: e => {
                    this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.setRippleCenter(e)
                },
                notifyChange: async e => {
                    if (!this.valueSetDirectly && e === this.value) return;
                    this.valueSetDirectly = !1, this.value = e, await this.updateComplete;
                    const t = new Event("change", {
                        bubbles: !0
                    });
                    this.dispatchEvent(t)
                },
                setSelectedText: e => this.selectedText = e,
                isSelectAnchorFocused: () => {
                    const e = this.anchorElement;
                    return !!e && e.getRootNode().activeElement === e
                },
                getSelectAnchorAttr: e => {
                    const t = this.anchorElement;
                    return t ? t.getAttribute(e) : null
                },
                setSelectAnchorAttr: (e, t) => {
                    const i = this.anchorElement;
                    i && i.setAttribute(e, t)
                },
                removeSelectAnchorAttr: e => {
                    const t = this.anchorElement;
                    t && t.removeAttribute(e)
                },
                openMenu: () => {
                    this.menuOpen = !0
                },
                closeMenu: () => {
                    this.menuOpen = !1
                },
                addMenuClass: () => {},
                removeMenuClass: () => {},
                getAnchorElement: () => this.anchorElement,
                setMenuAnchorElement: () => {},
                setMenuAnchorCorner: () => {
                    const e = this.menuElement;
                    e && (e.corner = "BOTTOM_START")
                },
                setMenuWrapFocus: e => {
                    const t = this.menuElement;
                    t && (t.wrapFocus = e)
                },
                focusMenuItemAtIndex: e => {
                    const t = this.menuElement;
                    if (!t) return;
                    const i = t.items[e];
                    i && i.focus()
                },
                getMenuItemCount: () => {
                    const e = this.menuElement;
                    return e ? e.items.length : 0
                },
                getMenuItemValues: () => {
                    const e = this.menuElement;
                    return e ? e.items.map((e => e.value)) : []
                },
                getMenuItemTextAtIndex: e => {
                    const t = this.menuElement;
                    if (!t) return "";
                    const i = t.items[e];
                    return i ? i.text : ""
                },
                getSelectedIndex: () => this.index,
                setSelectedIndex: () => {},
                isTypeaheadInProgress: () => ya(this.typeaheadState),
                typeaheadMatchItem: (e, t) => {
                    if (!this.menuElement) return -1;
                    const i = ga({
                        focusItemAtIndex: e => {
                            this.menuElement.focusItemAtIndex(e)
                        },
                        focusedItemIndex: t || this.menuElement.getFocusedItemIndex(),
                        nextChar: e,
                        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                        skipFocus: !1,
                        isItemAtIndexDisabled: e => this.items[e].disabled
                    }, this.typeaheadState);
                    return -1 !== i && this.select(i), i
                }
            })
        }
        checkValidity() {
            const e = this._checkValidity(this.value);
            if (!e) {
                const e = new Event("invalid", {
                    bubbles: !1,
                    cancelable: !0
                });
                this.dispatchEvent(e)
            }
            return e
        }
        reportValidity() {
            const e = this.checkValidity();
            return this.isUiValid = e, e
        }
        _checkValidity(e) {
            const t = this.formElement.validity;
            let i = Qa(t);
            if (this.validityTransform) {
                const t = this.validityTransform(e, i);
                i = Object.assign(Object.assign({}, i), t)
            }
            return this._validity = i, this._validity.valid
        }
        setCustomValidity(e) {
            this.validationMessage = e, this.formElement.setCustomValidity(e)
        }
        async _getUpdateComplete() {
            let e = !1;
            return await this._menuUpdateComplete, super._getUpdateComplete ? await super._getUpdateComplete() : e = await super.getUpdateComplete(), e
        }
        getUpdateComplete() {
            return this._getUpdateComplete()
        }
        async firstUpdated() {
            const e = this.menuElement;
            if (e && (this._menuUpdateComplete = e.updateComplete, await this._menuUpdateComplete), super.firstUpdated(), this.mdcFoundation.isValid = () => !0, this.mdcFoundation.setValid = () => {}, this.mdcFoundation.setDisabled(this.disabled), this.validateOnInitialRender && this.reportValidity(), !this.selected) {
                !this.items.length && this.slotElement && this.slotElement.assignedNodes({
                    flatten: !0
                }).length && (await new Promise((e => requestAnimationFrame(e))), await this.layout());
                const e = this.items.length && "" === this.items[0].value;
                if (!this.value && e) return void this.select(0);
                this.selectByValue(this.value)
            }
            this.sortedIndexByFirstChar = ba(this.items.length, (e => this.items[e].text))
        }
        onItemsUpdated() {
            this.sortedIndexByFirstChar = ba(this.items.length, (e => this.items[e].text))
        }
        select(e) {
            const t = this.menuElement;
            t && t.select(e)
        }
        selectByValue(e) {
            let t = -1;
            for (let i = 0; i < this.items.length; i++)
                if (this.items[i].value === e) {
                    t = i;
                    break
                }
            this.valueSetDirectly = !0, this.select(t), this.mdcFoundation.handleChange()
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            for (const e of this.listeners) e.target.removeEventListener(e.name, e.cb)
        }
        focus() {
            const e = new CustomEvent("focus"),
                t = this.anchorElement;
            t && (t.dispatchEvent(e), t.focus())
        }
        blur() {
            const e = new CustomEvent("blur"),
                t = this.anchorElement;
            t && (t.dispatchEvent(e), t.blur())
        }
        onFocus() {
            this.mdcFoundation && this.mdcFoundation.handleFocus()
        }
        onBlur() {
            this.mdcFoundation && this.mdcFoundation.handleBlur();
            const e = this.menuElement;
            e && !e.open && this.reportValidity()
        }
        onClick(e) {
            if (this.mdcFoundation) {
                this.focus();
                const t = e.target.getBoundingClientRect();
                let i = 0;
                i = "touches" in e ? e.touches[0].clientX : e.clientX;
                const r = i - t.left;
                this.mdcFoundation.handleClick(r)
            }
        }
        onKeydown(e) {
            const t = Kn(e) === Bn,
                i = Kn(e) === $n;
            if (i || t) {
                const r = t && this.index > 0,
                    o = i && this.index < this.items.length - 1;
                return r ? this.select(this.index - 1) : o && this.select(this.index + 1), e.preventDefault(), void this.mdcFoundation.openMenu()
            }
            this.mdcFoundation.handleKeydown(e)
        }
        handleTypeahead(e) {
            if (!this.menuElement) return;
            const t = this.menuElement.getFocusedItemIndex(),
                i = ct(e.target) ? e.target : null;
            ! function(e, t) {
                var i = e.event,
                    r = e.isTargetListItem,
                    o = e.focusedItemIndex,
                    s = e.focusItemAtIndex,
                    n = e.sortedIndexByFirstChar,
                    a = e.isItemAtIndexDisabled,
                    c = "ArrowLeft" === ma(i),
                    d = "ArrowUp" === ma(i),
                    l = "ArrowRight" === ma(i),
                    p = "ArrowDown" === ma(i),
                    h = "Home" === ma(i),
                    u = "End" === ma(i),
                    m = "Enter" === ma(i),
                    f = "Spacebar" === ma(i);
                i.ctrlKey || i.metaKey || c || d || l || p || h || u || m || (f || 1 !== i.key.length ? f && (r && _a(i), r && ya(t) && ga({
                    focusItemAtIndex: s,
                    focusedItemIndex: o,
                    nextChar: " ",
                    sortedIndexByFirstChar: n,
                    skipFocus: !1,
                    isItemAtIndexDisabled: a
                }, t)) : (_a(i), ga({
                    focusItemAtIndex: s,
                    focusedItemIndex: o,
                    nextChar: i.key.toLowerCase(),
                    sortedIndexByFirstChar: n,
                    skipFocus: !1,
                    isItemAtIndexDisabled: a
                }, t)))
            }({
                event: e,
                focusItemAtIndex: e => {
                    this.menuElement.focusItemAtIndex(e)
                },
                focusedItemIndex: t,
                isTargetListItem: !!i && i.hasAttribute("mwc-list-item"),
                sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                isItemAtIndexDisabled: e => this.items[e].disabled
            }, this.typeaheadState)
        }
        async onSelected(e) {
            this.mdcFoundation || await this.updateComplete, this.mdcFoundation.handleMenuItemAction(e.detail.index);
            const t = this.items[e.detail.index];
            t && (this.value = t.value)
        }
        onOpened() {
            this.mdcFoundation && (this.menuOpen = !0, this.mdcFoundation.handleMenuOpened())
        }
        onClosed() {
            this.mdcFoundation && (this.menuOpen = !1, this.mdcFoundation.handleMenuClosed())
        }
        async layout(e = !0) {
            this.mdcFoundation && this.mdcFoundation.layout(), await this.updateComplete;
            const t = this.menuElement;
            t && t.layout(e);
            const i = this.labelElement;
            if (!i) return void(this.outlineOpen = !1);
            const r = !!this.label && !!this.value;
            if (i.floatingLabelFoundation.float(r), !this.outlined) return;
            this.outlineOpen = r, await this.updateComplete;
            const o = i.floatingLabelFoundation.getWidth();
            this.outlineOpen && (this.outlineWidth = o)
        }
        async layoutOptions() {
            this.mdcFoundation && this.mdcFoundation.layoutOptions()
        }
    }
    v([bo(".mdc-select")], Za.prototype, "mdcRoot", void 0), v([bo(".formElement")], Za.prototype, "formElement", void 0), v([bo("slot")], Za.prototype, "slotElement", void 0), v([bo("select")], Za.prototype, "nativeSelectElement", void 0), v([bo("input")], Za.prototype, "nativeInputElement", void 0), v([bo(".mdc-line-ripple")], Za.prototype, "lineRippleElement", void 0), v([bo(".mdc-floating-label")], Za.prototype, "labelElement", void 0), v([bo("mwc-notched-outline")], Za.prototype, "outlineElement", void 0), v([bo(".mdc-menu")], Za.prototype, "menuElement", void 0), v([bo(".mdc-select__anchor")], Za.prototype, "anchorElement", void 0), v([fo({
        type: Boolean,
        attribute: "disabled",
        reflect: !0
    }), er((function(e) {
        this.mdcFoundation && this.mdcFoundation.setDisabled(e)
    }))], Za.prototype, "disabled", void 0), v([fo({
        type: Boolean
    }), er((function(e, t) {
        void 0 !== t && this.outlined !== t && this.layout(!1)
    }))], Za.prototype, "outlined", void 0), v([fo({
        type: String
    }), er((function(e, t) {
        void 0 !== t && this.label !== t && this.layout(!1)
    }))], Za.prototype, "label", void 0), v([_o()], Za.prototype, "outlineOpen", void 0), v([_o()], Za.prototype, "outlineWidth", void 0), v([fo({
        type: String
    }), er((function(e) {
        if (this.mdcFoundation) {
            const t = null === this.selected && !!e,
                i = this.selected && this.selected.value !== e;
            (t || i) && this.selectByValue(e), this.reportValidity()
        }
    }))], Za.prototype, "value", void 0), v([_o()], Za.prototype, "selectedText", void 0), v([fo({
        type: String
    })], Za.prototype, "icon", void 0), v([_o()], Za.prototype, "menuOpen", void 0), v([fo({
        type: String
    })], Za.prototype, "helper", void 0), v([fo({
        type: Boolean
    })], Za.prototype, "validateOnInitialRender", void 0), v([fo({
        type: String
    })], Za.prototype, "validationMessage", void 0), v([fo({
        type: Boolean
    })], Za.prototype, "required", void 0), v([fo({
        type: Boolean
    })], Za.prototype, "naturalMenuWidth", void 0), v([_o()], Za.prototype, "isUiValid", void 0), v([fo({
        type: Boolean
    })], Za.prototype, "fixedMenuPosition", void 0), v([function(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            Object.assign(t[i], e)
        })(e, t, i) : ((e, t) => Object.assign(Object.assign({}, t), {
            finisher(i) {
                Object.assign(i.prototype[t.key], e)
            }
        }))(e, t)
    }({
        capture: !0
    })], Za.prototype, "handleTypeahead", null);
    const ec = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof wo) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new wo(i, xo)
    })
    `.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
    let tc = class extends Za {};
    tc.styles = ec, tc = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-select", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-select", e)
                }
            }
        })(0, e);
        var t
    }], tc), window.JSCompiler_renameProperty = (e, t) => e;
    const ic = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        rc = (e, t) => t !== e && (t == t || e == e),
        oc = {
            attribute: !0,
            type: String,
            converter: ic,
            reflect: !1,
            hasChanged: rc
        };
    class sc extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = oc) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || oc
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = rc) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || ic,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || ic.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = oc) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    sc.finalized = !0;
    const nc = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function ac(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : nc(e, t)
    }

    function cc(e) {
        return ac({
            attribute: !1,
            hasChanged: null == e ? void 0 : e.hasChanged
        })
    }

    function dc(e, t) {
        return (i, r) => {
            const o = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof r ? Symbol() : `__${r}`;
                o.get = function() {
                    return void 0 === this[t] && (this[t] = this.renderRoot.querySelector(e)), this[t]
                }
            }
            return void 0 !== r ? lc(o, i, r) : pc(o, i)
        }
    }
    const lc = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        pc = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        }),
        hc = Element.prototype;
    hc.msMatchesSelector || hc.webkitMatchesSelector;
    const uc = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        mc = Symbol();
    class fc {
        constructor(e, t) {
            if (t !== mc) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (uc ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const _c = {};
    class bc extends sc {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !uc) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new fc(String(t), mc)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? uc ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== _c && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return _c
        }
    }

    function gc(e) {
        return void 0 === e && (e = window), !! function(e) {
            void 0 === e && (e = window);
            var t = !1;
            try {
                var i = {
                        get passive() {
                            return t = !0, !1
                        }
                    },
                    r = function() {};
                e.document.addEventListener("test", r, i), e.document.removeEventListener("test", r, i)
            } catch (e) {
                t = !1
            }
            return t
        }(e) && {
            passive: !0
        }
    }
    bc.finalized = !0, bc.render = pe;
    var yc = function(e, t) {
            return (yc = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                })(e, t)
        },
        vc = function() {
            return (vc = Object.assign || function(e) {
                for (var t, i = 1, r = arguments.length; i < r; i++)
                    for (var o in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        },
        Sc = {
            animation: {
                prefixed: "-webkit-animation",
                standard: "animation"
            },
            transform: {
                prefixed: "-webkit-transform",
                standard: "transform"
            },
            transition: {
                prefixed: "-webkit-transition",
                standard: "transition"
            }
        },
        xc = {
            animationend: {
                cssProperty: "animation",
                prefixed: "webkitAnimationEnd",
                standard: "animationend"
            },
            animationiteration: {
                cssProperty: "animation",
                prefixed: "webkitAnimationIteration",
                standard: "animationiteration"
            },
            animationstart: {
                cssProperty: "animation",
                prefixed: "webkitAnimationStart",
                standard: "animationstart"
            },
            transitionend: {
                cssProperty: "transition",
                prefixed: "webkitTransitionEnd",
                standard: "transitionend"
            }
        };

    function wc(e) {
        return Boolean(e.document) && "function" == typeof e.document.createElement
    }
    var Cc = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        Pc = {
            ACTIVE: "mdc-slider--active",
            DISABLED: "mdc-slider--disabled",
            DISCRETE: "mdc-slider--discrete",
            FOCUS: "mdc-slider--focus",
            HAS_TRACK_MARKER: "mdc-slider--display-markers",
            IN_TRANSIT: "mdc-slider--in-transit",
            IS_DISCRETE: "mdc-slider--discrete",
            DISABLE_TOUCH_ACTION: "mdc-slider--disable-touch-action"
        },
        kc = {
            ARIA_DISABLED: "aria-disabled",
            ARIA_VALUEMAX: "aria-valuemax",
            ARIA_VALUEMIN: "aria-valuemin",
            ARIA_VALUENOW: "aria-valuenow",
            CHANGE_EVENT: "MDCSlider:change",
            INPUT_EVENT: "MDCSlider:input",
            PIN_VALUE_MARKER_SELECTOR: ".mdc-slider__pin-value-marker",
            STEP_DATA_ATTR: "data-step",
            THUMB_CONTAINER_SELECTOR: ".mdc-slider__thumb-container",
            TRACK_MARKER_CONTAINER_SELECTOR: ".mdc-slider__track-marker-container",
            TRACK_SELECTOR: ".mdc-slider__track"
        },
        Ac = {
            PAGE_FACTOR: 4
        },
        Ec = "undefined" != typeof window,
        Tc = Ec && !!window.PointerEvent,
        Oc = Tc ? ["pointerdown"] : ["mousedown", "touchstart"],
        Rc = Tc ? ["pointerup"] : ["mouseup", "touchend"],
        Ic = {
            mousedown: "mousemove",
            pointerdown: "pointermove",
            touchstart: "touchmove"
        },
        Uc = "ArrowDown",
        zc = "ArrowLeft",
        Nc = "ArrowRight",
        Fc = "ArrowUp",
        Mc = "End",
        Lc = "Home",
        Dc = "PageDown",
        Vc = "PageUp";
    const Hc = function(e) {
        function t(i) {
            var r = e.call(this, vc(vc({}, t.defaultAdapter), i)) || this;
            return r.savedTabIndex_ = NaN, r.active_ = !1, r.inTransit_ = !1, r.isDiscrete_ = !1, r.hasTrackMarker_ = !1, r.handlingThumbTargetEvt_ = !1, r.min_ = 0, r.max_ = 100, r.step_ = 0, r.value_ = 0, r.disabled_ = !1, r.preventFocusState_ = !1, r.thumbContainerPointerHandler_ = function() {
                return r.handlingThumbTargetEvt_ = !0
            }, r.interactionStartHandler_ = function(e) {
                return r.handleDown_(e)
            }, r.keydownHandler_ = function(e) {
                return r.handleKeydown_(e)
            }, r.focusHandler_ = function() {
                return r.handleFocus_()
            }, r.blurHandler_ = function() {
                return r.handleBlur_()
            }, r.resizeHandler_ = function() {
                return r.layout()
            }, r
        }
        return function(e, t) {
            function i() {
                this.constructor = e
            }
            yc(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        }(t, e), Object.defineProperty(t, "cssClasses", {
            get: function() {
                return Pc
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t, "strings", {
            get: function() {
                return kc
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t, "numbers", {
            get: function() {
                return Ac
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t, "defaultAdapter", {
            get: function() {
                return {
                    hasClass: function() {
                        return !1
                    },
                    addClass: function() {},
                    removeClass: function() {},
                    getAttribute: function() {
                        return null
                    },
                    setAttribute: function() {},
                    removeAttribute: function() {},
                    computeBoundingRect: function() {
                        return {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        }
                    },
                    getTabIndex: function() {
                        return 0
                    },
                    registerInteractionHandler: function() {},
                    deregisterInteractionHandler: function() {},
                    registerThumbContainerInteractionHandler: function() {},
                    deregisterThumbContainerInteractionHandler: function() {},
                    registerBodyInteractionHandler: function() {},
                    deregisterBodyInteractionHandler: function() {},
                    registerResizeHandler: function() {},
                    deregisterResizeHandler: function() {},
                    notifyInput: function() {},
                    notifyChange: function() {},
                    setThumbContainerStyleProperty: function() {},
                    setTrackStyleProperty: function() {},
                    setMarkerValue: function() {},
                    setTrackMarkers: function() {},
                    isRTL: function() {
                        return !1
                    }
                }
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.init = function() {
            var e = this;
            this.isDiscrete_ = this.adapter.hasClass(Pc.IS_DISCRETE), this.hasTrackMarker_ = this.adapter.hasClass(Pc.HAS_TRACK_MARKER), Oc.forEach((function(t) {
                e.adapter.registerInteractionHandler(t, e.interactionStartHandler_), e.adapter.registerThumbContainerInteractionHandler(t, e.thumbContainerPointerHandler_)
            })), Tc && this.adapter.addClass(Pc.DISABLE_TOUCH_ACTION), this.adapter.registerInteractionHandler("keydown", this.keydownHandler_), this.adapter.registerInteractionHandler("focus", this.focusHandler_), this.adapter.registerInteractionHandler("blur", this.blurHandler_), this.adapter.registerResizeHandler(this.resizeHandler_), this.layout(), this.isDiscrete_ && 0 === this.getStep() && (this.step_ = 1)
        }, t.prototype.destroy = function() {
            var e = this;
            Oc.forEach((function(t) {
                e.adapter.deregisterInteractionHandler(t, e.interactionStartHandler_), e.adapter.deregisterThumbContainerInteractionHandler(t, e.thumbContainerPointerHandler_)
            })), this.adapter.deregisterInteractionHandler("keydown", this.keydownHandler_), this.adapter.deregisterInteractionHandler("focus", this.focusHandler_), this.adapter.deregisterInteractionHandler("blur", this.blurHandler_), this.adapter.deregisterResizeHandler(this.resizeHandler_)
        }, t.prototype.setupTrackMarker = function() {
            this.isDiscrete_ && this.hasTrackMarker_ && 0 !== this.getStep() && this.adapter.setTrackMarkers(this.getStep(), this.getMax(), this.getMin())
        }, t.prototype.layout = function() {
            this.rect_ = this.adapter.computeBoundingRect(), this.updateUIForCurrentValue_()
        }, t.prototype.getValue = function() {
            return this.value_
        }, t.prototype.setValue = function(e) {
            this.setValue_(e, !1)
        }, t.prototype.getMax = function() {
            return this.max_
        }, t.prototype.setMax = function(e) {
            if (e < this.min_) throw new Error("Cannot set max to be less than the slider's minimum value");
            this.max_ = e, this.setValue_(this.value_, !1, !0), this.adapter.setAttribute(kc.ARIA_VALUEMAX, String(this.max_)), this.setupTrackMarker()
        }, t.prototype.getMin = function() {
            return this.min_
        }, t.prototype.setMin = function(e) {
            if (e > this.max_) throw new Error("Cannot set min to be greater than the slider's maximum value");
            this.min_ = e, this.setValue_(this.value_, !1, !0), this.adapter.setAttribute(kc.ARIA_VALUEMIN, String(this.min_)), this.setupTrackMarker()
        }, t.prototype.getStep = function() {
            return this.step_
        }, t.prototype.setStep = function(e) {
            if (e < 0) throw new Error("Step cannot be set to a negative number");
            this.isDiscrete_ && ("number" != typeof e || e < 1) && (e = 1), this.step_ = e, this.setValue_(this.value_, !1, !0), this.setupTrackMarker()
        }, t.prototype.isDisabled = function() {
            return this.disabled_
        }, t.prototype.setDisabled = function(e) {
            this.disabled_ = e, this.toggleClass_(Pc.DISABLED, this.disabled_), this.disabled_ ? (this.savedTabIndex_ = this.adapter.getTabIndex(), this.adapter.setAttribute(kc.ARIA_DISABLED, "true"), this.adapter.removeAttribute("tabindex")) : (this.adapter.removeAttribute(kc.ARIA_DISABLED), isNaN(this.savedTabIndex_) || this.adapter.setAttribute("tabindex", String(this.savedTabIndex_)))
        }, t.prototype.handleDown_ = function(e) {
            var t = this;
            if (!this.disabled_) {
                this.preventFocusState_ = !0, this.setInTransit_(!this.handlingThumbTargetEvt_), this.handlingThumbTargetEvt_ = !1, this.setActive_(!0);
                var i = function(e) {
                        t.handleMove_(e)
                    },
                    r = Ic[e.type],
                    o = function() {
                        t.handleUp_(), t.adapter.deregisterBodyInteractionHandler(r, i), Rc.forEach((function(e) {
                            return t.adapter.deregisterBodyInteractionHandler(e, o)
                        }))
                    };
                this.adapter.registerBodyInteractionHandler(r, i), Rc.forEach((function(e) {
                    return t.adapter.registerBodyInteractionHandler(e, o)
                })), this.setValueFromEvt_(e)
            }
        }, t.prototype.handleMove_ = function(e) {
            e.preventDefault(), this.setValueFromEvt_(e)
        }, t.prototype.handleUp_ = function() {
            this.setActive_(!1), this.adapter.notifyChange()
        }, t.prototype.getClientX_ = function(e) {
            return e.targetTouches && e.targetTouches.length > 0 ? e.targetTouches[0].clientX : e.clientX
        }, t.prototype.setValueFromEvt_ = function(e) {
            var t = this.getClientX_(e),
                i = this.computeValueFromClientX_(t);
            this.setValue_(i, !0)
        }, t.prototype.computeValueFromClientX_ = function(e) {
            var t = this.max_,
                i = this.min_,
                r = (e - this.rect_.left) / this.rect_.width;
            return this.adapter.isRTL() && (r = 1 - r), i + r * (t - i)
        }, t.prototype.handleKeydown_ = function(e) {
            var t = this.getKeyId_(e),
                i = this.getValueForKeyId_(t);
            isNaN(i) || (e.preventDefault(), this.adapter.addClass(Pc.FOCUS), this.setValue_(i, !0), this.adapter.notifyChange())
        }, t.prototype.getKeyId_ = function(e) {
            return e.key === zc || 37 === e.keyCode ? zc : e.key === Nc || 39 === e.keyCode ? Nc : e.key === Fc || 38 === e.keyCode ? Fc : e.key === Uc || 40 === e.keyCode ? Uc : e.key === Lc || 36 === e.keyCode ? Lc : e.key === Mc || 35 === e.keyCode ? Mc : e.key === Vc || 33 === e.keyCode ? Vc : e.key === Dc || 34 === e.keyCode ? Dc : ""
        }, t.prototype.getValueForKeyId_ = function(e) {
            var t = this,
                i = t.max_,
                r = t.min_,
                o = t.step_ || (i - r) / 100;
            switch (this.adapter.isRTL() && (e === zc || e === Nc) && (o = -o), e) {
                case zc:
                case Uc:
                    return this.value_ - o;
                case Nc:
                case Fc:
                    return this.value_ + o;
                case Lc:
                    return this.min_;
                case Mc:
                    return this.max_;
                case Vc:
                    return this.value_ + o * Ac.PAGE_FACTOR;
                case Dc:
                    return this.value_ - o * Ac.PAGE_FACTOR;
                default:
                    return NaN
            }
        }, t.prototype.handleFocus_ = function() {
            this.preventFocusState_ || this.adapter.addClass(Pc.FOCUS)
        }, t.prototype.handleBlur_ = function() {
            this.preventFocusState_ = !1, this.adapter.removeClass(Pc.FOCUS)
        }, t.prototype.setValue_ = function(e, t, i) {
            if (void 0 === i && (i = !1), e !== this.value_ || i) {
                var r = this.min_,
                    o = this.max_,
                    s = e === r || e === o;
                this.step_ && !s && (e = this.quantize_(e)), e < r ? e = r : e > o && (e = o), e = e || 0, this.value_ = e, this.adapter.setAttribute(kc.ARIA_VALUENOW, String(this.value_)), this.updateUIForCurrentValue_(), t && (this.adapter.notifyInput(), this.isDiscrete_ && this.adapter.setMarkerValue(e))
            }
        }, t.prototype.quantize_ = function(e) {
            return Math.round(e / this.step_) * this.step_
        }, t.prototype.updateUIForCurrentValue_ = function() {
            var e = this,
                t = this,
                i = t.max_,
                r = t.min_,
                o = (t.value_ - r) / (i - r),
                s = o * this.rect_.width;
            this.adapter.isRTL() && (s = this.rect_.width - s);
            var n = Ec ? function(e, t) {
                    if (wc(e) && t in Sc) {
                        var i = e.document.createElement("div"),
                            r = Sc.transform,
                            o = r.standard,
                            s = r.prefixed;
                        return o in i.style ? o : s
                    }
                    return t
                }(window, "transform") : "transform",
                a = Ec ? function(e, t) {
                    if (wc(e) && t in xc) {
                        var i = e.document.createElement("div"),
                            r = xc[t],
                            o = r.standard,
                            s = r.prefixed;
                        return r.cssProperty in i.style ? o : s
                    }
                    return t
                }(window, "transitionend") : "transitionend";
            if (this.inTransit_) {
                var c = function() {
                    e.setInTransit_(!1), e.adapter.deregisterThumbContainerInteractionHandler(a, c)
                };
                this.adapter.registerThumbContainerInteractionHandler(a, c)
            }
            requestAnimationFrame((function() {
                e.adapter.setThumbContainerStyleProperty(n, "translateX(" + s + "px) translateX(-50%)"), e.adapter.setTrackStyleProperty(n, "scaleX(" + o + ")")
            }))
        }, t.prototype.setActive_ = function(e) {
            this.active_ = e, this.toggleClass_(Pc.ACTIVE, this.active_)
        }, t.prototype.setInTransit_ = function(e) {
            this.inTransit_ = e, this.toggleClass_(Pc.IN_TRANSIT, this.inTransit_)
        }, t.prototype.toggleClass_ = function(e, t) {
            t ? this.adapter.addClass(e) : this.adapter.removeClass(e)
        }, t
    }(Cc);
    class jc extends Ri {
        constructor() {
            super(...arguments), this.mdcFoundationClass = Hc, this.min = 0, this.max = 100, this._value = 0, this.step = 0, this.disabled = !1, this.pin = !1, this.markers = !1, this.pinMarkerText = "", this.trackMarkerContainerStyles = {}, this.thumbContainerStyles = {}, this.trackStyles = {}, this.isFoundationDestroyed = !1
        }
        set value(e) {
            this.mdcFoundation && this.mdcFoundation.setValue(e), this._value = e, this.requestUpdate("value", e)
        }
        get value() {
            return this.mdcFoundation ? this.mdcFoundation.getValue() : this._value
        }
        render() {
            const e = 0 !== this.step,
                t = {
                    "mdc-slider--discrete": e,
                    "mdc-slider--display-markers": this.markers && e
                };
            let i = "";
            e && this.markers && (i = se `
        <div
            class="mdc-slider__track-marker-container"
            style="${Tt(this.trackMarkerContainerStyles)}">
        </div>`);
            let r = "";
            return this.pin && (r = se `
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker">${this.pinMarkerText}</span>
      </div>`), se `
      <div class="mdc-slider ${At(t)}"
           tabindex="0" role="slider"
           aria-label="${Qt(this.ariaLabel)}"
           aria-labelledby="${Qt(this.ariaLabelledBy)}"
           aria-valuemin="${this.min}" aria-valuemax="${this.max}"
           aria-valuenow="${this.value}"
           aria-disabled="${this.disabled.toString()}"
           data-step="${this.step}"
           @mousedown=${this.layout}
           @touchstart=${this.layout}>
        <div class="mdc-slider__track-container">
          <div
              class="mdc-slider__track"
              style="${Tt(this.trackStyles)}">
          </div>
          ${i}
        </div>
        <div
            class="mdc-slider__thumb-container"
            style="${Tt(this.thumbContainerStyles)}">
          <!-- TODO: use cache() directive -->
          ${r}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`
        }
        connectedCallback() {
            super.connectedCallback(), this.mdcRoot && this.isFoundationDestroyed && (this.isFoundationDestroyed = !1, this.mdcFoundation.init())
        }
        updated(e) {
            const t = e.has("min"),
                i = e.has("max");
            t && i ? this.max < this.mdcFoundation.getMin() ? (this.mdcFoundation.setMin(this.min), this.mdcFoundation.setMax(this.max)) : (this.mdcFoundation.setMax(this.max), this.mdcFoundation.setMin(this.min)) : t ? this.mdcFoundation.setMin(this.min) : i && this.mdcFoundation.setMax(this.max), super.updated(e)
        }
        disconnectedCallback() {
            super.disconnectedCallback(), this.isFoundationDestroyed = !0, this.mdcFoundation.destroy()
        }
        createAdapter() {
            return Object.assign(Object.assign({}, lt(this.mdcRoot)), {
                getAttribute: e => this.mdcRoot.getAttribute(e),
                setAttribute: (e, t) => this.mdcRoot.setAttribute(e, t),
                removeAttribute: e => this.mdcRoot.removeAttribute(e),
                computeBoundingRect: () => {
                    const e = this.mdcRoot.getBoundingClientRect();
                    return {
                        bottom: e.bottom,
                        height: e.height,
                        left: e.left + window.pageXOffset,
                        right: e.right,
                        top: e.top,
                        width: e.width
                    }
                },
                getTabIndex: () => this.mdcRoot.tabIndex,
                registerInteractionHandler: (e, t) => {
                    const i = "touchstart" === e ? gc() : void 0;
                    this.mdcRoot.addEventListener(e, t, i)
                },
                deregisterInteractionHandler: (e, t) => this.mdcRoot.removeEventListener(e, t),
                registerThumbContainerInteractionHandler: (e, t) => {
                    const i = "touchstart" === e ? gc() : void 0;
                    this.thumbContainer.addEventListener(e, t, i)
                },
                deregisterThumbContainerInteractionHandler: (e, t) => this.thumbContainer.removeEventListener(e, t),
                registerBodyInteractionHandler: (e, t) => document.body.addEventListener(e, t),
                deregisterBodyInteractionHandler: (e, t) => document.body.removeEventListener(e, t),
                registerResizeHandler: e => window.addEventListener("resize", e, gc()),
                deregisterResizeHandler: e => window.removeEventListener("resize", e),
                notifyInput: () => {
                    const e = this.mdcFoundation.getValue();
                    e !== this._value && (this.value = e, this.dispatchEvent(new CustomEvent("input", {
                        detail: this,
                        composed: !0,
                        bubbles: !0,
                        cancelable: !0
                    })))
                },
                notifyChange: () => {
                    this.dispatchEvent(new CustomEvent("change", {
                        detail: this,
                        composed: !0,
                        bubbles: !0,
                        cancelable: !0
                    }))
                },
                setThumbContainerStyleProperty: (e, t) => {
                    this.thumbContainerStyles[e] = t, this.requestUpdate()
                },
                setTrackStyleProperty: (e, t) => {
                    this.trackStyles[e] = t, this.requestUpdate()
                },
                setMarkerValue: e => this.pinMarkerText = e.toLocaleString(),
                setTrackMarkers: (e, t, i) => {
                    const r = e.toLocaleString(),
                        o = `linear-gradient(to right, currentColor 2px, transparent 0) 0 center / calc((100% - 2px) / ((${t.toLocaleString()} - ${i.toLocaleString()}) / ${r})) 100% repeat-x`;
                    this.trackMarkerContainerStyles.background = o, this.requestUpdate()
                },
                isRTL: () => "rtl" === getComputedStyle(this.mdcRoot).direction
            })
        }
        resetFoundation() {
            this.mdcFoundation && (this.mdcFoundation.destroy(), this.mdcFoundation.init())
        }
        async firstUpdated() {
            await super.firstUpdated(), this.mdcFoundation.setValue(this._value)
        }
        layout() {
            this.mdcFoundation.layout()
        }
    }
    v([dc(".mdc-slider")], jc.prototype, "mdcRoot", void 0), v([dc(".mdc-slider")], jc.prototype, "formElement", void 0), v([dc(".mdc-slider__thumb-container")], jc.prototype, "thumbContainer", void 0), v([dc(".mdc-slider__pin-value-marker")], jc.prototype, "pinMarker", void 0), v([ac({
        type: Number
    })], jc.prototype, "min", void 0), v([ac({
        type: Number
    })], jc.prototype, "max", void 0), v([ac({
        type: Number
    })], jc.prototype, "value", null), v([ac({
        type: Number
    }), er((function(e, t) {
        0 !== t != (0 !== e) && this.resetFoundation(), this.mdcFoundation.setStep(e)
    }))], jc.prototype, "step", void 0), v([ac({
        type: Boolean,
        reflect: !0
    }), er((function(e) {
        this.mdcFoundation.setDisabled(e)
    }))], jc.prototype, "disabled", void 0), v([ac({
        type: Boolean,
        reflect: !0
    })], jc.prototype, "pin", void 0), v([ac({
        type: Boolean,
        reflect: !0
    }), er((function() {
        this.mdcFoundation.setupTrackMarker()
    }))], jc.prototype, "markers", void 0), v([cc()], jc.prototype, "pinMarkerText", void 0), v([cc()], jc.prototype, "trackMarkerContainerStyles", void 0), v([cc()], jc.prototype, "thumbContainerStyles", void 0), v([cc()], jc.prototype, "trackStyles", void 0), v([Yt, ac({
        attribute: "aria-label"
    })], jc.prototype, "ariaLabel", void 0), v([Yt, ac({
        attribute: "aria-labelledby"
    })], jc.prototype, "ariaLabelledBy", void 0), v([function(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            Object.assign(t[i], e)
        })(e, t, i) : ((e, t) => Object.assign(Object.assign({}, t), {
            finisher(i) {
                Object.assign(i.prototype[t.key], e)
            }
        }))(e, t)
    }({
        capture: !0,
        passive: !0
    })], jc.prototype, "layout", null);
    const Bc = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof fc) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new fc(i, mc)
    })
    `@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);opacity:.26}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary, #018786);stroke:#018786;stroke:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disable-touch-action{touch-action:none}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container::after{background-color:#9a9a9a;opacity:.26}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track-container::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;content:""}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:none}`;
    let qc = class extends jc {};
    qc.styles = Bc, qc = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-slider", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-slider", e)
                }
            }
        })(0, e);
        var t
    }], qc), window.JSCompiler_renameProperty = (e, t) => e;
    const $c = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        Xc = (e, t) => t !== e && (t == t || e == e),
        Gc = {
            attribute: !0,
            type: String,
            converter: $c,
            reflect: !1,
            hasChanged: Xc
        };
    class Jc extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = Gc) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || Gc
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = Xc) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || $c,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || $c.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = Gc) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    Jc.finalized = !0;
    const Wc = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function Yc(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : Wc(e, t)
    }

    function Kc(e, t) {
        return (i, r) => {
            const o = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof r ? Symbol() : `__${r}`;
                o.get = function() {
                    return void 0 === this[t] && (this[t] = this.renderRoot.querySelector(e)), this[t]
                }
            }
            return void 0 !== r ? Qc(o, i, r) : Zc(o, i)
        }
    }
    const Qc = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        Zc = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        }),
        ed = Element.prototype;
    ed.msMatchesSelector || ed.webkitMatchesSelector;
    const td = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        id = Symbol();
    class rd {
        constructor(e, t) {
            if (t !== id) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (td ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const od = {};
    class sd extends Jc {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !td) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new rd(String(t), id)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? td ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== od && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return od
        }
    }
    sd.finalized = !0, sd.render = pe;
    var nd = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        ad = {
            CLOSING: "mdc-snackbar--closing",
            OPEN: "mdc-snackbar--open",
            OPENING: "mdc-snackbar--opening"
        },
        cd = {
            ACTION_SELECTOR: ".mdc-snackbar__action",
            ARIA_LIVE_LABEL_TEXT_ATTR: "data-mdc-snackbar-label-text",
            CLOSED_EVENT: "MDCSnackbar:closed",
            CLOSING_EVENT: "MDCSnackbar:closing",
            DISMISS_SELECTOR: ".mdc-snackbar__dismiss",
            LABEL_SELECTOR: ".mdc-snackbar__label",
            OPENED_EVENT: "MDCSnackbar:opened",
            OPENING_EVENT: "MDCSnackbar:opening",
            REASON_ACTION: "action",
            REASON_DISMISS: "dismiss",
            SURFACE_SELECTOR: ".mdc-snackbar__surface"
        },
        dd = {
            DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5e3,
            INDETERMINATE: -1,
            MAX_AUTO_DISMISS_TIMEOUT_MS: 1e4,
            MIN_AUTO_DISMISS_TIMEOUT_MS: 4e3,
            SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
            SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
            ARIA_LIVE_DELAY_MS: 1e3
        },
        ld = ad.OPENING,
        pd = ad.OPEN,
        hd = ad.CLOSING,
        ud = cd.REASON_ACTION,
        md = cd.REASON_DISMISS;
    const fd = function(e) {
            function t(i) {
                var r = e.call(this, y(y({}, t.defaultAdapter), i)) || this;
                return r.isOpen_ = !1, r.animationFrame_ = 0, r.animationTimer_ = 0, r.autoDismissTimer_ = 0, r.autoDismissTimeoutMs_ = dd.DEFAULT_AUTO_DISMISS_TIMEOUT_MS, r.closeOnEscape_ = !0, r
            }
            return g(t, e), Object.defineProperty(t, "cssClasses", {
                get: function() {
                    return ad
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "strings", {
                get: function() {
                    return cd
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "numbers", {
                get: function() {
                    return dd
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        announce: function() {},
                        notifyClosed: function() {},
                        notifyClosing: function() {},
                        notifyOpened: function() {},
                        notifyOpening: function() {},
                        removeClass: function() {}
                    }
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.destroy = function() {
                this.clearAutoDismissTimer_(), cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = 0, clearTimeout(this.animationTimer_), this.animationTimer_ = 0, this.adapter.removeClass(ld), this.adapter.removeClass(pd), this.adapter.removeClass(hd)
            }, t.prototype.open = function() {
                var e = this;
                this.clearAutoDismissTimer_(), this.isOpen_ = !0, this.adapter.notifyOpening(), this.adapter.removeClass(hd), this.adapter.addClass(ld), this.adapter.announce(), this.runNextAnimationFrame_((function() {
                    e.adapter.addClass(pd), e.animationTimer_ = setTimeout((function() {
                        var t = e.getTimeoutMs();
                        e.handleAnimationTimerEnd_(), e.adapter.notifyOpened(), t !== dd.INDETERMINATE && (e.autoDismissTimer_ = setTimeout((function() {
                            e.close(md)
                        }), t))
                    }), dd.SNACKBAR_ANIMATION_OPEN_TIME_MS)
                }))
            }, t.prototype.close = function(e) {
                var t = this;
                void 0 === e && (e = ""), this.isOpen_ && (cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = 0, this.clearAutoDismissTimer_(), this.isOpen_ = !1, this.adapter.notifyClosing(e), this.adapter.addClass(ad.CLOSING), this.adapter.removeClass(ad.OPEN), this.adapter.removeClass(ad.OPENING), clearTimeout(this.animationTimer_), this.animationTimer_ = setTimeout((function() {
                    t.handleAnimationTimerEnd_(), t.adapter.notifyClosed(e)
                }), dd.SNACKBAR_ANIMATION_CLOSE_TIME_MS))
            }, t.prototype.isOpen = function() {
                return this.isOpen_
            }, t.prototype.getTimeoutMs = function() {
                return this.autoDismissTimeoutMs_
            }, t.prototype.setTimeoutMs = function(e) {
                var t = dd.MIN_AUTO_DISMISS_TIMEOUT_MS,
                    i = dd.MAX_AUTO_DISMISS_TIMEOUT_MS;
                if (!(e === dd.INDETERMINATE || e <= i && e >= t)) throw new Error("\n        timeoutMs must be an integer in the range " + t + "–" + i + "\n        (or " + dd.INDETERMINATE + " to disable), but got '" + e + "'");
                this.autoDismissTimeoutMs_ = e
            }, t.prototype.getCloseOnEscape = function() {
                return this.closeOnEscape_
            }, t.prototype.setCloseOnEscape = function(e) {
                this.closeOnEscape_ = e
            }, t.prototype.handleKeyDown = function(e) {
                ("Escape" === e.key || 27 === e.keyCode) && this.getCloseOnEscape() && this.close(md)
            }, t.prototype.handleActionButtonClick = function(e) {
                this.close(ud)
            }, t.prototype.handleActionIconClick = function(e) {
                this.close(md)
            }, t.prototype.clearAutoDismissTimer_ = function() {
                clearTimeout(this.autoDismissTimer_), this.autoDismissTimer_ = 0
            }, t.prototype.handleAnimationTimerEnd_ = function() {
                this.animationTimer_ = 0, this.adapter.removeClass(ad.OPENING), this.adapter.removeClass(ad.CLOSING)
            }, t.prototype.runNextAnimationFrame_ = function(e) {
                var t = this;
                cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = requestAnimationFrame((function() {
                    t.animationFrame_ = 0, clearTimeout(t.animationTimer_), t.animationTimer_ = setTimeout(e, 0)
                }))
            }, t
        }(nd),
        {
            ARIA_LIVE_LABEL_TEXT_ATTR: _d
        } = fd.strings,
        {
            ARIA_LIVE_DELAY_MS: bd
        } = fd.numbers,
        gd = new WeakMap,
        yd = F(((e, t) => i => {
            if (!t) return;
            let r = gd.get(i);
            if (void 0 === r) {
                const t = document.createElement("div");
                return t.setAttribute("class", "mdc-snackbar__label"), t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.textContent = e, i.endNode.parentNode.insertBefore(t, i.endNode), r = {
                    labelEl: t,
                    timerId: null
                }, void gd.set(i, r)
            }
            const o = r,
                s = o.labelEl;
            s.setAttribute("aria-live", "off"), s.textContent = "", s.innerHTML = '<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>', s.setAttribute(_d, e), null !== o.timerId && clearTimeout(o.timerId), o.timerId = window.setTimeout((() => {
                o.timerId = null, s.setAttribute("aria-live", "polite"), s.removeAttribute(_d), s.textContent = e
            }), bd)
        })),
        {
            OPENING_EVENT: vd,
            OPENED_EVENT: Sd,
            CLOSING_EVENT: xd,
            CLOSED_EVENT: wd
        } = fd.strings;
    class Cd extends _t {
        constructor() {
            super(...arguments), this.mdcFoundationClass = fd, this.open = !1, this.timeoutMs = 5e3, this.closeOnEscape = !1, this.labelText = "", this.stacked = !1, this.leading = !1, this.reason = ""
        }
        render() {
            const e = {
                "mdc-snackbar--stacked": this.stacked,
                "mdc-snackbar--leading": this.leading
            };
            return se `
      <div class="mdc-snackbar ${At(e)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${yd(this.labelText,this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`
        }
        createAdapter() {
            return Object.assign(Object.assign({}, lt(this.mdcRoot)), {
                announce: () => {},
                notifyClosed: e => {
                    this.dispatchEvent(new CustomEvent(wd, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            reason: e
                        }
                    }))
                },
                notifyClosing: e => {
                    this.open = !1, this.dispatchEvent(new CustomEvent(xd, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            reason: e
                        }
                    }))
                },
                notifyOpened: () => {
                    this.dispatchEvent(new CustomEvent(Sd, {
                        bubbles: !0,
                        cancelable: !0
                    }))
                },
                notifyOpening: () => {
                    this.open = !0, this.dispatchEvent(new CustomEvent(vd, {
                        bubbles: !0,
                        cancelable: !0
                    }))
                }
            })
        }
        show() {
            this.open = !0
        }
        close(e = "") {
            this.reason = e, this.open = !1
        }
        firstUpdated() {
            super.firstUpdated(), this.open && this.mdcFoundation.open()
        }
        _handleKeydown(e) {
            this.mdcFoundation.handleKeyDown(e)
        }
        _handleActionClick(e) {
            this.mdcFoundation.handleActionButtonClick(e)
        }
        _handleDismissClick(e) {
            this.mdcFoundation.handleActionIconClick(e)
        }
    }
    v([Kc(".mdc-snackbar")], Cd.prototype, "mdcRoot", void 0), v([Kc(".mdc-snackbar__label")], Cd.prototype, "labelElement", void 0), v([Yc({
        type: Boolean,
        reflect: !0
    }), er((function(e) {
        this.mdcFoundation && (e ? this.mdcFoundation.open() : (this.mdcFoundation.close(this.reason), this.reason = ""))
    }))], Cd.prototype, "open", void 0), v([er((function(e) {
        this.mdcFoundation.setTimeoutMs(e)
    })), Yc({
        type: Number
    })], Cd.prototype, "timeoutMs", void 0), v([er((function(e) {
        this.mdcFoundation.setCloseOnEscape(e)
    })), Yc({
        type: Boolean
    })], Cd.prototype, "closeOnEscape", void 0), v([Yc({
        type: String
    })], Cd.prototype, "labelText", void 0), v([Yc({
        type: Boolean
    })], Cd.prototype, "stacked", void 0), v([Yc({
        type: Boolean
    })], Cd.prototype, "leading", void 0);
    const Pd = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof rd) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new rd(i, id)
    })
    `.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover::before,.mdc-snackbar__action.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss::before,.mdc-snackbar__dismiss::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:9px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg,.mdc-snackbar__dismiss.mdc-snackbar__dismiss img{width:18px;height:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var( --mdc-snackbar-action-color, #bb86fc )}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),slot[name=dismiss]::slotted(mwc-icon-button)[dir=rtl]{margin-left:0;margin-right:8px}`;
    let kd = class extends Cd {};
    kd.styles = Pd, kd = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-snackbar", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-snackbar", e)
                }
            }
        })(0, e);
        var t
    }], kd), window.JSCompiler_renameProperty = (e, t) => e;
    const Ad = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        Ed = (e, t) => t !== e && (t == t || e == e),
        Td = {
            attribute: !0,
            type: String,
            converter: Ad,
            reflect: !1,
            hasChanged: Ed
        };
    class Od extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = Td) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || Td
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = Ed) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || Ad,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || Ad.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = Td) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    Od.finalized = !0;
    const Rd = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function Id(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : Rd(e, t)
    }

    function Ud(e, t) {
        return (i, r) => {
            const o = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof r ? Symbol() : `__${r}`;
                o.get = function() {
                    return void 0 === this[t] && (this[t] = this.renderRoot.querySelector(e)), this[t]
                }
            }
            return void 0 !== r ? zd(o, i, r) : Nd(o, i)
        }
    }
    const zd = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        Nd = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        });

    function Fd(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            Object.assign(t[i], e)
        })(e, t, i) : ((e, t) => Object.assign(Object.assign({}, t), {
            finisher(i) {
                Object.assign(i.prototype[t.key], e)
            }
        }))(e, t)
    }
    const Md = Element.prototype;
    Md.msMatchesSelector || Md.webkitMatchesSelector;
    const Ld = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        Dd = Symbol();
    class Vd {
        constructor(e, t) {
            if (t !== Dd) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (Ld ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const Hd = {};
    class jd extends Od {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !Ld) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new Vd(String(t), Dd)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Ld ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== Hd && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return Hd
        }
    }
    jd.finalized = !0, jd.render = pe;
    var Bd = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        qd = {
            CHECKED: "mdc-switch--checked",
            DISABLED: "mdc-switch--disabled"
        },
        $d = {
            ARIA_CHECKED_ATTR: "aria-checked",
            NATIVE_CONTROL_SELECTOR: ".mdc-switch__native-control",
            RIPPLE_SURFACE_SELECTOR: ".mdc-switch__thumb-underlay"
        };
    const Xd = function(e) {
        function t(i) {
            return e.call(this, y(y({}, t.defaultAdapter), i)) || this
        }
        return g(t, e), Object.defineProperty(t, "strings", {
            get: function() {
                return $d
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "cssClasses", {
            get: function() {
                return qd
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "defaultAdapter", {
            get: function() {
                return {
                    addClass: function() {},
                    removeClass: function() {},
                    setNativeControlChecked: function() {},
                    setNativeControlDisabled: function() {},
                    setNativeControlAttr: function() {}
                }
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.setChecked = function(e) {
            this.adapter.setNativeControlChecked(e), this.updateAriaChecked_(e), this.updateCheckedStyling_(e)
        }, t.prototype.setDisabled = function(e) {
            this.adapter.setNativeControlDisabled(e), e ? this.adapter.addClass(qd.DISABLED) : this.adapter.removeClass(qd.DISABLED)
        }, t.prototype.handleChange = function(e) {
            var t = e.target;
            this.updateAriaChecked_(t.checked), this.updateCheckedStyling_(t.checked)
        }, t.prototype.updateCheckedStyling_ = function(e) {
            e ? this.adapter.addClass(qd.CHECKED) : this.adapter.removeClass(qd.CHECKED)
        }, t.prototype.updateAriaChecked_ = function(e) {
            this.adapter.setNativeControlAttr($d.ARIA_CHECKED_ATTR, "" + !!e)
        }, t
    }(Bd);
    class Gd extends Ri {
        constructor() {
            super(...arguments), this.checked = !1, this.disabled = !1, this.shouldRenderRipple = !1, this.mdcFoundationClass = Xd, this.rippleHandlers = new zt((() => (this.shouldRenderRipple = !0, this.ripple)))
        }
        changeHandler(e) {
            this.mdcFoundation.handleChange(e), this.checked = this.formElement.checked
        }
        createAdapter() {
            return Object.assign(Object.assign({}, lt(this.mdcRoot)), {
                setNativeControlChecked: e => {
                    this.formElement.checked = e
                },
                setNativeControlDisabled: e => {
                    this.formElement.disabled = e
                },
                setNativeControlAttr: (e, t) => {
                    this.formElement.setAttribute(e, t)
                }
            })
        }
        renderRipple() {
            return this.shouldRenderRipple ? se `
        <mwc-ripple
          .accent="${this.checked}"
          .disabled="${this.disabled}"
          unbounded>
        </mwc-ripple>` : ""
        }
        focus() {
            const e = this.formElement;
            e && (this.rippleHandlers.startFocus(), e.focus())
        }
        blur() {
            const e = this.formElement;
            e && (this.rippleHandlers.endFocus(), e.blur())
        }
        render() {
            return se `
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay">
          ${this.renderRipple()}
          <div class="mdc-switch__thumb">
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              aria-label="${Qt(this.ariaLabel)}"
              aria-labelledby="${Qt(this.ariaLabelledBy)}"
              @change="${this.changeHandler}"
              @focus="${this.handleRippleFocus}"
              @blur="${this.handleRippleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
          </div>
        </div>
      </div>`
        }
        handleRippleMouseDown(e) {
            const t = () => {
                window.removeEventListener("mouseup", t), this.handleRippleDeactivate()
            };
            window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e)
        }
        handleRippleTouchStart(e) {
            this.rippleHandlers.startPress(e)
        }
        handleRippleDeactivate() {
            this.rippleHandlers.endPress()
        }
        handleRippleMouseEnter() {
            this.rippleHandlers.startHover()
        }
        handleRippleMouseLeave() {
            this.rippleHandlers.endHover()
        }
        handleRippleFocus() {
            this.rippleHandlers.startFocus()
        }
        handleRippleBlur() {
            this.rippleHandlers.endFocus()
        }
    }
    v([Id({
        type: Boolean
    }), er((function(e) {
        this.mdcFoundation.setChecked(e)
    }))], Gd.prototype, "checked", void 0), v([Id({
        type: Boolean
    }), er((function(e) {
        this.mdcFoundation.setDisabled(e)
    }))], Gd.prototype, "disabled", void 0), v([Yt, Id({
        attribute: "aria-label"
    })], Gd.prototype, "ariaLabel", void 0), v([Yt, Id({
        attribute: "aria-labelledby"
    })], Gd.prototype, "ariaLabelledBy", void 0), v([Ud(".mdc-switch")], Gd.prototype, "mdcRoot", void 0), v([Ud("input")], Gd.prototype, "formElement", void 0), v([(e, t) => {
        const i = {
            async get() {
                return await this.updateComplete, this.renderRoot.querySelector("mwc-ripple")
            },
            enumerable: !0,
            configurable: !0
        };
        return void 0 !== t ? zd(i, e, t) : Nd(i, e)
    }], Gd.prototype, "ripple", void 0), v([Id({
        attribute: !1,
        hasChanged: void 0
    })], Gd.prototype, "shouldRenderRipple", void 0), v([Fd({
        passive: !0
    })], Gd.prototype, "handleRippleMouseDown", null), v([Fd({
        passive: !0
    })], Gd.prototype, "handleRippleTouchStart", null);
    const Jd = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof Vd) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new Vd(i, Dd)
    })
    `.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent}`;
    let Wd = class extends Gd {};
    Wd.styles = Jd, Wd = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-switch", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-switch", e)
                }
            }
        })(0, e);
        var t
    }], Wd), window.JSCompiler_renameProperty = (e, t) => e;
    const Yd = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        Kd = (e, t) => t !== e && (t == t || e == e),
        Qd = {
            attribute: !0,
            type: String,
            converter: Yd,
            reflect: !1,
            hasChanged: Kd
        };
    class Zd extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = Qd) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || Qd
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = Kd) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || Yd,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || Yd.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = Qd) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    Zd.finalized = !0;
    const el = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function tl(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : el(e, t)
    }

    function il(e, t) {
        return (i, r) => {
            const o = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof r ? Symbol() : `__${r}`;
                o.get = function() {
                    return void 0 === this[t] && (this[t] = this.renderRoot.querySelector(e)), this[t]
                }
            }
            return void 0 !== r ? rl(o, i, r) : ol(o, i)
        }
    }
    const rl = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        ol = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        }),
        sl = Element.prototype;
    sl.msMatchesSelector || sl.webkitMatchesSelector;
    const nl = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        al = Symbol();
    class cl {
        constructor(e, t) {
            if (t !== al) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (nl ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const dl = {};
    class ll extends Zd {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !nl) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new cl(String(t), al)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? nl ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== dl && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return dl
        }
    }
    ll.finalized = !0, ll.render = pe, window.JSCompiler_renameProperty = (e, t) => e;
    const pl = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        hl = (e, t) => t !== e && (t == t || e == e),
        ul = {
            attribute: !0,
            type: String,
            converter: pl,
            reflect: !1,
            hasChanged: hl
        };
    class ml extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = ul) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || ul
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = hl) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || pl,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || pl.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = ul) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    ml.finalized = !0;
    const fl = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function _l(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : fl(e, t)
    }

    function bl(e, t) {
        return (i, r) => {
            const o = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof r ? Symbol() : `__${r}`;
                o.get = function() {
                    return void 0 === this[t] && (this[t] = this.renderRoot.querySelector(e)), this[t]
                }
            }
            return void 0 !== r ? gl(o, i, r) : yl(o, i)
        }
    }
    const gl = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        yl = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        }),
        vl = Element.prototype;
    vl.msMatchesSelector || vl.webkitMatchesSelector;
    const Sl = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        xl = Symbol();
    class wl {
        constructor(e, t) {
            if (t !== xl) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (Sl ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const Cl = {};
    class Pl extends ml {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !Sl) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new wl(String(t), xl)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Sl ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== Cl && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return Cl
        }
    }
    Pl.finalized = !0, Pl.render = pe;
    var kl = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        Al = {
            ACTIVE: "mdc-tab-indicator--active",
            FADE: "mdc-tab-indicator--fade",
            NO_TRANSITION: "mdc-tab-indicator--no-transition"
        },
        El = {
            CONTENT_SELECTOR: ".mdc-tab-indicator__content"
        },
        Tl = function(e) {
            function t(i) {
                return e.call(this, y(y({}, t.defaultAdapter), i)) || this
            }
            return g(t, e), Object.defineProperty(t, "cssClasses", {
                get: function() {
                    return Al
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "strings", {
                get: function() {
                    return El
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        computeContentClientRect: function() {
                            return {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                width: 0,
                                height: 0
                            }
                        },
                        setContentStyleProperty: function() {}
                    }
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.computeContentClientRect = function() {
                return this.adapter.computeContentClientRect()
            }, t
        }(kl);
    const Ol = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return g(t, e), t.prototype.activate = function() {
                this.adapter.addClass(Tl.cssClasses.ACTIVE)
            }, t.prototype.deactivate = function() {
                this.adapter.removeClass(Tl.cssClasses.ACTIVE)
            }, t
        }(Tl),
        Rl = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return g(t, e), t.prototype.activate = function(e) {
                if (e) {
                    var t = this.computeContentClientRect(),
                        i = e.width / t.width,
                        r = e.left - t.left;
                    this.adapter.addClass(Tl.cssClasses.NO_TRANSITION), this.adapter.setContentStyleProperty("transform", "translateX(" + r + "px) scaleX(" + i + ")"), this.computeContentClientRect(), this.adapter.removeClass(Tl.cssClasses.NO_TRANSITION), this.adapter.addClass(Tl.cssClasses.ACTIVE), this.adapter.setContentStyleProperty("transform", "")
                } else this.adapter.addClass(Tl.cssClasses.ACTIVE)
            }, t.prototype.deactivate = function() {
                this.adapter.removeClass(Tl.cssClasses.ACTIVE)
            }, t
        }(Tl);
    class Il extends _t {
        constructor() {
            super(...arguments), this.icon = "", this.fade = !1
        }
        get mdcFoundationClass() {
            return this.fade ? Ol : Rl
        }
        render() {
            const e = {
                "mdc-tab-indicator__content--icon": this.icon,
                "material-icons": this.icon,
                "mdc-tab-indicator__content--underline": !this.icon
            };
            return se `
      <span class="mdc-tab-indicator ${At({"mdc-tab-indicator--fade":this.fade})}">
        <span class="mdc-tab-indicator__content ${At(e)}">${this.icon}</span>
      </span>
      `
        }
        updated(e) {
            e.has("fade") && this.createFoundation()
        }
        createAdapter() {
            return Object.assign(Object.assign({}, lt(this.mdcRoot)), {
                computeContentClientRect: () => this.contentElement.getBoundingClientRect(),
                setContentStyleProperty: (e, t) => this.contentElement.style.setProperty(e, t)
            })
        }
        computeContentClientRect() {
            return this.mdcFoundation.computeContentClientRect()
        }
        activate(e) {
            this.mdcFoundation.activate(e)
        }
        deactivate() {
            this.mdcFoundation.deactivate()
        }
    }
    v([bl(".mdc-tab-indicator")], Il.prototype, "mdcRoot", void 0), v([bl(".mdc-tab-indicator__content")], Il.prototype, "contentElement", void 0), v([_l()], Il.prototype, "icon", void 0), v([_l({
        type: Boolean
    })], Il.prototype, "fade", void 0);
    const Ul = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof wl) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new wl(i, xl)
    })
    `.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-tab-indicator .mdc-tab-indicator__content--icon{color:#018786;color:var(--mdc-theme-secondary, #018786)}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}`;
    let zl = class extends Il {};
    zl.styles = Ul, zl = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-tab-indicator", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-tab-indicator", e)
                }
            }
        })(0, e);
        var t
    }], zl);
    var Nl = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        Fl = {
            ACTIVE: "mdc-tab--active"
        },
        Ml = {
            ARIA_SELECTED: "aria-selected",
            CONTENT_SELECTOR: ".mdc-tab__content",
            INTERACTED_EVENT: "MDCTab:interacted",
            RIPPLE_SELECTOR: ".mdc-tab__ripple",
            TABINDEX: "tabIndex",
            TAB_INDICATOR_SELECTOR: ".mdc-tab-indicator"
        };
    const Ll = function(e) {
        function t(i) {
            var r = e.call(this, y(y({}, t.defaultAdapter), i)) || this;
            return r.focusOnActivate_ = !0, r
        }
        return g(t, e), Object.defineProperty(t, "cssClasses", {
            get: function() {
                return Fl
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "strings", {
            get: function() {
                return Ml
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "defaultAdapter", {
            get: function() {
                return {
                    addClass: function() {},
                    removeClass: function() {},
                    hasClass: function() {
                        return !1
                    },
                    setAttr: function() {},
                    activateIndicator: function() {},
                    deactivateIndicator: function() {},
                    notifyInteracted: function() {},
                    getOffsetLeft: function() {
                        return 0
                    },
                    getOffsetWidth: function() {
                        return 0
                    },
                    getContentOffsetLeft: function() {
                        return 0
                    },
                    getContentOffsetWidth: function() {
                        return 0
                    },
                    focus: function() {}
                }
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.handleClick = function() {
            this.adapter.notifyInteracted()
        }, t.prototype.isActive = function() {
            return this.adapter.hasClass(Fl.ACTIVE)
        }, t.prototype.setFocusOnActivate = function(e) {
            this.focusOnActivate_ = e
        }, t.prototype.activate = function(e) {
            this.adapter.addClass(Fl.ACTIVE), this.adapter.setAttr(Ml.ARIA_SELECTED, "true"), this.adapter.setAttr(Ml.TABINDEX, "0"), this.adapter.activateIndicator(e), this.focusOnActivate_ && this.adapter.focus()
        }, t.prototype.deactivate = function() {
            this.isActive() && (this.adapter.removeClass(Fl.ACTIVE), this.adapter.setAttr(Ml.ARIA_SELECTED, "false"), this.adapter.setAttr(Ml.TABINDEX, "-1"), this.adapter.deactivateIndicator())
        }, t.prototype.computeDimensions = function() {
            var e = this.adapter.getOffsetWidth(),
                t = this.adapter.getOffsetLeft(),
                i = this.adapter.getContentOffsetWidth(),
                r = this.adapter.getContentOffsetLeft();
            return {
                contentLeft: t + r,
                contentRight: t + r + i,
                rootLeft: t,
                rootRight: t + e
            }
        }, t
    }(Nl);
    let Dl = 0;
    class Vl extends _t {
        constructor() {
            super(...arguments), this.mdcFoundationClass = Ll, this.label = "", this.icon = "", this.hasImageIcon = !1, this.isFadingIndicator = !1, this.minWidth = !1, this.isMinWidthIndicator = !1, this.indicatorIcon = "", this.stacked = !1, this.focusOnActivate = !0, this._active = !1, this.initFocus = !1, this.shouldRenderRipple = !1, this.rippleElement = null, this.rippleHandlers = new zt((() => (this.shouldRenderRipple = !0, this.ripple.then((e => this.rippleElement = e)), this.ripple)))
        }
        get active() {
            return this._active
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open",
                delegatesFocus: !0
            })
        }
        connectedCallback() {
            this.dir = document.dir, super.connectedCallback()
        }
        firstUpdated() {
            super.firstUpdated(), this.id = this.id || "mdc-tab-" + ++Dl
        }
        render() {
            const e = {
                "mdc-tab--min-width": this.minWidth,
                "mdc-tab--stacked": this.stacked
            };
            let t = se ``;
            (this.hasImageIcon || this.icon) && (t = se `
        <span class="mdc-tab__icon material-icons"><slot name="icon">${this.icon}</slot></span>`);
            let i = se ``;
            return this.label && (i = se `
        <span class="mdc-tab__text-label">${this.label}</span>`), se `
      <button
        @click="${this.handleClick}"
        class="mdc-tab ${At(e)}"
        role="tab"
        aria-selected="false"
        tabindex="-1"
        @focus="${this.focus}"
        @blur="${this.handleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}">
        <span class="mdc-tab__content">
          ${t}
          ${i}
          ${this.isMinWidthIndicator?this.renderIndicator():""}
        </span>
        ${this.isMinWidthIndicator?"":this.renderIndicator()}
        ${this.renderRipple()}
      </button>`
        }
        renderIndicator() {
            return se `<mwc-tab-indicator
        .icon="${this.indicatorIcon}"
        .fade="${this.isFadingIndicator}"></mwc-tab-indicator>`
        }
        renderRipple() {
            return this.shouldRenderRipple ? se `
          <mwc-ripple primary></mwc-ripple>
        ` : ""
        }
        createAdapter() {
            return Object.assign(Object.assign({}, lt(this.mdcRoot)), {
                setAttr: (e, t) => this.mdcRoot.setAttribute(e, t),
                activateIndicator: async e => {
                    await this.tabIndicator.updateComplete, this.tabIndicator.activate(e)
                },
                deactivateIndicator: async () => {
                    await this.tabIndicator.updateComplete, this.tabIndicator.deactivate()
                },
                notifyInteracted: () => this.dispatchEvent(new CustomEvent(Ll.strings.INTERACTED_EVENT, {
                    detail: {
                        tabId: this.id
                    },
                    bubbles: !0,
                    composed: !0,
                    cancelable: !0
                })),
                getOffsetLeft: () => this.offsetLeft,
                getOffsetWidth: () => this.mdcRoot.offsetWidth,
                getContentOffsetLeft: () => this._contentElement.offsetLeft,
                getContentOffsetWidth: () => this._contentElement.offsetWidth,
                focus: () => {
                    this.initFocus ? this.initFocus = !1 : this.mdcRoot.focus()
                }
            })
        }
        activate(e) {
            e || (this.initFocus = !0), this.mdcFoundation ? (this.mdcFoundation.activate(e), this.setActive(this.mdcFoundation.isActive())) : this.updateComplete.then((() => {
                this.mdcFoundation.activate(e), this.setActive(this.mdcFoundation.isActive())
            }))
        }
        deactivate() {
            this.mdcFoundation.deactivate(), this.setActive(this.mdcFoundation.isActive())
        }
        setActive(e) {
            const t = this.active;
            t !== e && (this._active = e, this.requestUpdate("active", t))
        }
        computeDimensions() {
            return this.mdcFoundation.computeDimensions()
        }
        computeIndicatorClientRect() {
            return this.tabIndicator.computeContentClientRect()
        }
        focus() {
            this.mdcRoot.focus(), this.handleFocus()
        }
        handleClick() {
            this.handleFocus(), this.mdcFoundation.handleClick()
        }
        handleFocus() {
            this.handleRippleFocus()
        }
        handleBlur() {
            this.handleRippleBlur()
        }
        handleRippleMouseDown(e) {
            const t = () => {
                window.removeEventListener("mouseup", t), this.handleRippleDeactivate()
            };
            window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e)
        }
        handleRippleTouchStart(e) {
            this.rippleHandlers.startPress(e)
        }
        handleRippleDeactivate() {
            this.rippleHandlers.endPress()
        }
        handleRippleMouseEnter() {
            this.rippleHandlers.startHover()
        }
        handleRippleMouseLeave() {
            this.rippleHandlers.endHover()
        }
        handleRippleFocus() {
            this.rippleHandlers.startFocus()
        }
        handleRippleBlur() {
            this.rippleHandlers.endFocus()
        }
        get isRippleActive() {
            var e;
            return (null === (e = this.rippleElement) || void 0 === e ? void 0 : e.isActive) || !1
        }
    }
    v([il(".mdc-tab")], Vl.prototype, "mdcRoot", void 0), v([il("mwc-tab-indicator")], Vl.prototype, "tabIndicator", void 0), v([tl()], Vl.prototype, "label", void 0), v([tl()], Vl.prototype, "icon", void 0), v([tl({
        type: Boolean
    })], Vl.prototype, "hasImageIcon", void 0), v([tl({
        type: Boolean
    })], Vl.prototype, "isFadingIndicator", void 0), v([tl({
        type: Boolean
    })], Vl.prototype, "minWidth", void 0), v([tl({
        type: Boolean
    })], Vl.prototype, "isMinWidthIndicator", void 0), v([tl({
        type: Boolean,
        reflect: !0,
        attribute: "active"
    })], Vl.prototype, "active", null), v([tl()], Vl.prototype, "indicatorIcon", void 0), v([tl({
        type: Boolean
    })], Vl.prototype, "stacked", void 0), v([er((async function(e) {
        await this.updateComplete, this.mdcFoundation.setFocusOnActivate(e)
    })), tl({
        type: Boolean
    })], Vl.prototype, "focusOnActivate", void 0), v([il(".mdc-tab__content")], Vl.prototype, "_contentElement", void 0), v([tl({
        attribute: !1,
        hasChanged: void 0
    })], Vl.prototype, "shouldRenderRipple", void 0), v([(e, t) => {
        const i = {
            async get() {
                return await this.updateComplete, this.renderRoot.querySelector("mwc-ripple")
            },
            enumerable: !0,
            configurable: !0
        };
        return void 0 !== t ? rl(i, e, t) : ol(i, e)
    }], Vl.prototype, "ripple", void 0), v([function(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            Object.assign(t[i], e)
        })(e, t, i) : ((e, t) => Object.assign(Object.assign({}, t), {
            finisher(i) {
                Object.assign(i.prototype[t.key], e)
            }
        }))(e, t)
    }({
        passive: !0
    })], Vl.prototype, "handleRippleTouchStart", null);
    const Hl = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof cl) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new cl(i, al)
    })
    `.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-tab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding-right:24px;padding-left:24px;min-width:90px;position:relative;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;background:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab .mdc-tab__text-label{color:rgba(0, 0, 0, 0.6)}.mdc-tab .mdc-tab__icon{color:rgba(0, 0, 0, 0.54);fill:currentColor}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{position:relative;display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;width:24px;height:24px;font-size:24px;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-tab--active .mdc-tab__icon{color:#6200ee;color:var(--mdc-theme-primary, #6200ee);fill:currentColor}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-tab{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-tab .mdc-tab__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-tab .mdc-tab__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-tab.mdc-ripple-upgraded--unbounded .mdc-tab__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-tab.mdc-ripple-upgraded--foreground-activation .mdc-tab__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-tab.mdc-ripple-upgraded--foreground-deactivation .mdc-tab__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-tab:hover .mdc-tab__ripple::before,.mdc-tab.mdc-ripple-surface--hover .mdc-tab__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__ripple::before,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-tab:not(.mdc-ripple-upgraded) .mdc-tab__ripple::after{transition:opacity 150ms linear}.mdc-tab:not(.mdc-ripple-upgraded):active .mdc-tab__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-tab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-tab__ripple{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;will-change:transform,opacity}:host{outline:none;flex:1 0 auto;display:flex;justify-content:center;-webkit-tap-highlight-color:transparent}.mdc-tab{height:var(--mdc-tab-height, 48px);margin-left:0;margin-right:0;padding-right:var(--mdc-tab-horizontal-padding, 24px);padding-left:var(--mdc-tab-horizontal-padding, 24px)}.mdc-tab--stacked{height:var(--mdc-tab-stacked-height, 72px)}.mdc-tab::-moz-focus-inner{border:0}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mdc-tab-text-label-color-default, rgba(0, 0, 0, 0.6))}.mdc-tab:not(.mdc-tab--active) .mdc-tab__icon{color:var(--mdc-tab-color-default, rgba(0, 0, 0, 0.54))}`;
    let jl = class extends Vl {};
    jl.styles = Hl, jl = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-tab", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-tab", e)
                }
            }
        })(0, e);
        var t
    }], jl), window.JSCompiler_renameProperty = (e, t) => e;
    const Bl = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        ql = (e, t) => t !== e && (t == t || e == e),
        $l = {
            attribute: !0,
            type: String,
            converter: Bl,
            reflect: !1,
            hasChanged: ql
        };
    class Xl extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = $l) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || $l
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = ql) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || Bl,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || Bl.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = $l) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    Xl.finalized = !0;
    const Gl = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function Jl(e, t) {
        return (i, r) => {
            const o = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof r ? Symbol() : `__${r}`;
                o.get = function() {
                    return void 0 === this[t] && (this[t] = this.renderRoot.querySelector(e)), this[t]
                }
            }
            return void 0 !== r ? Wl(o, i, r) : Yl(o, i)
        }
    }
    const Wl = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        Yl = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        }),
        Kl = Element.prototype;
    Kl.msMatchesSelector || Kl.webkitMatchesSelector;
    const Ql = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        Zl = Symbol();
    class ep {
        constructor(e, t) {
            if (t !== Zl) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (Ql ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const tp = {};
    class ip extends Xl {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !Ql) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new ep(String(t), Zl)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Ql ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== tp && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return tp
        }
    }
    ip.finalized = !0, ip.render = pe, window.JSCompiler_renameProperty = (e, t) => e;
    const rp = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        op = (e, t) => t !== e && (t == t || e == e),
        sp = {
            attribute: !0,
            type: String,
            converter: rp,
            reflect: !1,
            hasChanged: op
        };
    class np extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = sp) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || sp
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = op) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || rp,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || rp.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = sp) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }

    function ap(e, t) {
        return (i, r) => {
            const o = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof r ? Symbol() : `__${r}`;
                o.get = function() {
                    return void 0 === this[t] && (this[t] = this.renderRoot.querySelector(e)), this[t]
                }
            }
            return void 0 !== r ? cp(o, i, r) : dp(o, i)
        }
    }
    np.finalized = !0;
    const cp = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        dp = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        }),
        lp = Element.prototype;
    lp.msMatchesSelector || lp.webkitMatchesSelector;
    const pp = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        hp = Symbol();
    class up {
        constructor(e, t) {
            if (t !== hp) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (pp ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const mp = {};
    class fp extends np {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !pp) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new up(String(t), hp)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? pp ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== mp && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return mp
        }
    }
    fp.finalized = !0, fp.render = pe;
    var _p = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        bp = {
            ANIMATING: "mdc-tab-scroller--animating",
            SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
            SCROLL_TEST: "mdc-tab-scroller__test"
        },
        gp = {
            AREA_SELECTOR: ".mdc-tab-scroller__scroll-area",
            CONTENT_SELECTOR: ".mdc-tab-scroller__scroll-content"
        },
        yp = function(e) {
            this.adapter = e
        },
        vp = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return g(t, e), t.prototype.getScrollPositionRTL = function() {
                var e = this.adapter.getScrollAreaScrollLeft(),
                    t = this.calculateScrollEdges_().right;
                return Math.round(t - e)
            }, t.prototype.scrollToRTL = function(e) {
                var t = this.calculateScrollEdges_(),
                    i = this.adapter.getScrollAreaScrollLeft(),
                    r = this.clampScrollValue_(t.right - e);
                return {
                    finalScrollPosition: r,
                    scrollDelta: r - i
                }
            }, t.prototype.incrementScrollRTL = function(e) {
                var t = this.adapter.getScrollAreaScrollLeft(),
                    i = this.clampScrollValue_(t - e);
                return {
                    finalScrollPosition: i,
                    scrollDelta: i - t
                }
            }, t.prototype.getAnimatingScrollPosition = function(e) {
                return e
            }, t.prototype.calculateScrollEdges_ = function() {
                return {
                    left: 0,
                    right: this.adapter.getScrollContentOffsetWidth() - this.adapter.getScrollAreaOffsetWidth()
                }
            }, t.prototype.clampScrollValue_ = function(e) {
                var t = this.calculateScrollEdges_();
                return Math.min(Math.max(t.left, e), t.right)
            }, t
        }(yp),
        Sp = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return g(t, e), t.prototype.getScrollPositionRTL = function(e) {
                var t = this.adapter.getScrollAreaScrollLeft();
                return Math.round(e - t)
            }, t.prototype.scrollToRTL = function(e) {
                var t = this.adapter.getScrollAreaScrollLeft(),
                    i = this.clampScrollValue_(-e);
                return {
                    finalScrollPosition: i,
                    scrollDelta: i - t
                }
            }, t.prototype.incrementScrollRTL = function(e) {
                var t = this.adapter.getScrollAreaScrollLeft(),
                    i = this.clampScrollValue_(t - e);
                return {
                    finalScrollPosition: i,
                    scrollDelta: i - t
                }
            }, t.prototype.getAnimatingScrollPosition = function(e, t) {
                return e - t
            }, t.prototype.calculateScrollEdges_ = function() {
                var e = this.adapter.getScrollContentOffsetWidth();
                return {
                    left: this.adapter.getScrollAreaOffsetWidth() - e,
                    right: 0
                }
            }, t.prototype.clampScrollValue_ = function(e) {
                var t = this.calculateScrollEdges_();
                return Math.max(Math.min(t.right, e), t.left)
            }, t
        }(yp),
        xp = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return g(t, e), t.prototype.getScrollPositionRTL = function(e) {
                var t = this.adapter.getScrollAreaScrollLeft();
                return Math.round(t - e)
            }, t.prototype.scrollToRTL = function(e) {
                var t = this.adapter.getScrollAreaScrollLeft(),
                    i = this.clampScrollValue_(e);
                return {
                    finalScrollPosition: i,
                    scrollDelta: t - i
                }
            }, t.prototype.incrementScrollRTL = function(e) {
                var t = this.adapter.getScrollAreaScrollLeft(),
                    i = this.clampScrollValue_(t + e);
                return {
                    finalScrollPosition: i,
                    scrollDelta: t - i
                }
            }, t.prototype.getAnimatingScrollPosition = function(e, t) {
                return e + t
            }, t.prototype.calculateScrollEdges_ = function() {
                return {
                    left: this.adapter.getScrollContentOffsetWidth() - this.adapter.getScrollAreaOffsetWidth(),
                    right: 0
                }
            }, t.prototype.clampScrollValue_ = function(e) {
                var t = this.calculateScrollEdges_();
                return Math.min(Math.max(t.right, e), t.left)
            }, t
        }(yp);
    const wp = function(e) {
        function t(i) {
            var r = e.call(this, y(y({}, t.defaultAdapter), i)) || this;
            return r.isAnimating_ = !1, r
        }
        return g(t, e), Object.defineProperty(t, "cssClasses", {
            get: function() {
                return bp
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "strings", {
            get: function() {
                return gp
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "defaultAdapter", {
            get: function() {
                return {
                    eventTargetMatchesSelector: function() {
                        return !1
                    },
                    addClass: function() {},
                    removeClass: function() {},
                    addScrollAreaClass: function() {},
                    setScrollAreaStyleProperty: function() {},
                    setScrollContentStyleProperty: function() {},
                    getScrollContentStyleValue: function() {
                        return ""
                    },
                    setScrollAreaScrollLeft: function() {},
                    getScrollAreaScrollLeft: function() {
                        return 0
                    },
                    getScrollContentOffsetWidth: function() {
                        return 0
                    },
                    getScrollAreaOffsetWidth: function() {
                        return 0
                    },
                    computeScrollAreaClientRect: function() {
                        return {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        }
                    },
                    computeScrollContentClientRect: function() {
                        return {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        }
                    },
                    computeHorizontalScrollbarHeight: function() {
                        return 0
                    }
                }
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.init = function() {
            var e = this.adapter.computeHorizontalScrollbarHeight();
            this.adapter.setScrollAreaStyleProperty("margin-bottom", -e + "px"), this.adapter.addScrollAreaClass(t.cssClasses.SCROLL_AREA_SCROLL)
        }, t.prototype.getScrollPosition = function() {
            if (this.isRTL_()) return this.computeCurrentScrollPositionRTL_();
            var e = this.calculateCurrentTranslateX_();
            return this.adapter.getScrollAreaScrollLeft() - e
        }, t.prototype.handleInteraction = function() {
            this.isAnimating_ && this.stopScrollAnimation_()
        }, t.prototype.handleTransitionEnd = function(e) {
            var i = e.target;
            this.isAnimating_ && this.adapter.eventTargetMatchesSelector(i, t.strings.CONTENT_SELECTOR) && (this.isAnimating_ = !1, this.adapter.removeClass(t.cssClasses.ANIMATING))
        }, t.prototype.incrementScroll = function(e) {
            0 !== e && this.animate_(this.getIncrementScrollOperation_(e))
        }, t.prototype.incrementScrollImmediate = function(e) {
            if (0 !== e) {
                var t = this.getIncrementScrollOperation_(e);
                0 !== t.scrollDelta && (this.stopScrollAnimation_(), this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition))
            }
        }, t.prototype.scrollTo = function(e) {
            if (this.isRTL_()) return this.scrollToRTL_(e);
            this.scrollTo_(e)
        }, t.prototype.getRTLScroller = function() {
            return this.rtlScrollerInstance_ || (this.rtlScrollerInstance_ = this.rtlScrollerFactory_()), this.rtlScrollerInstance_
        }, t.prototype.calculateCurrentTranslateX_ = function() {
            var e = this.adapter.getScrollContentStyleValue("transform");
            if ("none" === e) return 0;
            var t = /\((.+?)\)/.exec(e);
            if (!t) return 0;
            var i = function(e, t) {
                    var i = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!i) return e;
                    var r, o, s = i.call(e),
                        n = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(r = s.next()).done;) n.push(r.value)
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (i = s.return) && i.call(s)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return n
                }(t[1].split(","), 6),
                r = (i[0], i[1], i[2], i[3], i[4]);
            return i[5], parseFloat(r)
        }, t.prototype.clampScrollValue_ = function(e) {
            var t = this.calculateScrollEdges_();
            return Math.min(Math.max(t.left, e), t.right)
        }, t.prototype.computeCurrentScrollPositionRTL_ = function() {
            var e = this.calculateCurrentTranslateX_();
            return this.getRTLScroller().getScrollPositionRTL(e)
        }, t.prototype.calculateScrollEdges_ = function() {
            return {
                left: 0,
                right: this.adapter.getScrollContentOffsetWidth() - this.adapter.getScrollAreaOffsetWidth()
            }
        }, t.prototype.scrollTo_ = function(e) {
            var t = this.getScrollPosition(),
                i = this.clampScrollValue_(e),
                r = i - t;
            this.animate_({
                finalScrollPosition: i,
                scrollDelta: r
            })
        }, t.prototype.scrollToRTL_ = function(e) {
            var t = this.getRTLScroller().scrollToRTL(e);
            this.animate_(t)
        }, t.prototype.getIncrementScrollOperation_ = function(e) {
            if (this.isRTL_()) return this.getRTLScroller().incrementScrollRTL(e);
            var t = this.getScrollPosition(),
                i = e + t,
                r = this.clampScrollValue_(i);
            return {
                finalScrollPosition: r,
                scrollDelta: r - t
            }
        }, t.prototype.animate_ = function(e) {
            var i = this;
            0 !== e.scrollDelta && (this.stopScrollAnimation_(), this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition), this.adapter.setScrollContentStyleProperty("transform", "translateX(" + e.scrollDelta + "px)"), this.adapter.computeScrollAreaClientRect(), requestAnimationFrame((function() {
                i.adapter.addClass(t.cssClasses.ANIMATING), i.adapter.setScrollContentStyleProperty("transform", "none")
            })), this.isAnimating_ = !0)
        }, t.prototype.stopScrollAnimation_ = function() {
            this.isAnimating_ = !1;
            var e = this.getAnimatingScrollPosition_();
            this.adapter.removeClass(t.cssClasses.ANIMATING), this.adapter.setScrollContentStyleProperty("transform", "translateX(0px)"), this.adapter.setScrollAreaScrollLeft(e)
        }, t.prototype.getAnimatingScrollPosition_ = function() {
            var e = this.calculateCurrentTranslateX_(),
                t = this.adapter.getScrollAreaScrollLeft();
            return this.isRTL_() ? this.getRTLScroller().getAnimatingScrollPosition(t, e) : t - e
        }, t.prototype.rtlScrollerFactory_ = function() {
            var e = this.adapter.getScrollAreaScrollLeft();
            this.adapter.setScrollAreaScrollLeft(e - 1);
            var t = this.adapter.getScrollAreaScrollLeft();
            if (t < 0) return this.adapter.setScrollAreaScrollLeft(e), new Sp(this.adapter);
            var i = this.adapter.computeScrollAreaClientRect(),
                r = this.adapter.computeScrollContentClientRect(),
                o = Math.round(r.right - i.right);
            return this.adapter.setScrollAreaScrollLeft(e), o === t ? new xp(this.adapter) : new vp(this.adapter)
        }, t.prototype.isRTL_ = function() {
            return "rtl" === this.adapter.getScrollContentStyleValue("direction")
        }, t
    }(_p);
    class Cp extends _t {
        constructor() {
            super(...arguments), this.mdcFoundationClass = wp, this._scrollbarHeight = -1
        }
        _handleInteraction() {
            this.mdcFoundation.handleInteraction()
        }
        _handleTransitionEnd(e) {
            this.mdcFoundation.handleTransitionEnd(e)
        }
        render() {
            return se `
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area"
            @wheel="${this._handleInteraction}"
            @touchstart="${this._handleInteraction}"
            @pointerdown="${this._handleInteraction}"
            @mousedown="${this._handleInteraction}"
            @keydown="${this._handleInteraction}"
            @transitionend="${this._handleTransitionEnd}">
          <div class="mdc-tab-scroller__scroll-content"><slot></slot></div>
        </div>
      </div>
      `
        }
        createAdapter() {
            return Object.assign(Object.assign({}, lt(this.mdcRoot)), {
                eventTargetMatchesSelector: (e, t) => function(e, t) {
                    return (e.matches || e.webkitMatchesSelector || e.msMatchesSelector).call(e, t)
                }(e, t),
                addScrollAreaClass: e => this.scrollAreaElement.classList.add(e),
                setScrollAreaStyleProperty: (e, t) => this.scrollAreaElement.style.setProperty(e, t),
                setScrollContentStyleProperty: (e, t) => this.scrollContentElement.style.setProperty(e, t),
                getScrollContentStyleValue: e => window.getComputedStyle(this.scrollContentElement).getPropertyValue(e),
                setScrollAreaScrollLeft: e => this.scrollAreaElement.scrollLeft = e,
                getScrollAreaScrollLeft: () => this.scrollAreaElement.scrollLeft,
                getScrollContentOffsetWidth: () => this.scrollContentElement.offsetWidth,
                getScrollAreaOffsetWidth: () => this.scrollAreaElement.offsetWidth,
                computeScrollAreaClientRect: () => this.scrollAreaElement.getBoundingClientRect(),
                computeScrollContentClientRect: () => this.scrollContentElement.getBoundingClientRect(),
                computeHorizontalScrollbarHeight: () => (-1 === this._scrollbarHeight && (this.scrollAreaElement.style.overflowX = "scroll", this._scrollbarHeight = this.scrollAreaElement.offsetHeight - this.scrollAreaElement.clientHeight, this.scrollAreaElement.style.overflowX = ""), this._scrollbarHeight)
            })
        }
        getScrollPosition() {
            return this.mdcFoundation.getScrollPosition()
        }
        getScrollContentWidth() {
            return this.scrollContentElement.offsetWidth
        }
        incrementScrollPosition(e) {
            this.mdcFoundation.incrementScroll(e)
        }
        scrollToPosition(e) {
            this.mdcFoundation.scrollTo(e)
        }
    }
    v([ap(".mdc-tab-scroller")], Cp.prototype, "mdcRoot", void 0), v([ap(".mdc-tab-scroller__scroll-area")], Cp.prototype, "scrollAreaElement", void 0), v([ap(".mdc-tab-scroller__scroll-content")], Cp.prototype, "scrollContentElement", void 0), v([function(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            Object.assign(t[i], e)
        })(e, t, i) : ((e, t) => Object.assign(Object.assign({}, t), {
            finisher(i) {
                Object.assign(i.prototype[t.key], e)
            }
        }))(e, t)
    }({
        passive: !0
    })], Cp.prototype, "_handleInteraction", null);
    const Pp = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof up) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new up(i, hp)
    })
    `.mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:flex;flex:1 0 auto;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}:host{display:flex}.mdc-tab-scroller{flex:1}`;
    let kp = class extends Cp {};
    kp.styles = Pp, kp = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-tab-scroller", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-tab-scroller", e)
                }
            }
        })(0, e);
        var t
    }], kp);
    var Ap = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        Ep = {
            ARROW_LEFT_KEY: "ArrowLeft",
            ARROW_RIGHT_KEY: "ArrowRight",
            END_KEY: "End",
            ENTER_KEY: "Enter",
            HOME_KEY: "Home",
            SPACE_KEY: "Space",
            TAB_ACTIVATED_EVENT: "MDCTabBar:activated",
            TAB_SCROLLER_SELECTOR: ".mdc-tab-scroller",
            TAB_SELECTOR: ".mdc-tab"
        },
        Tp = {
            ARROW_LEFT_KEYCODE: 37,
            ARROW_RIGHT_KEYCODE: 39,
            END_KEYCODE: 35,
            ENTER_KEYCODE: 13,
            EXTRA_SCROLL_AMOUNT: 20,
            HOME_KEYCODE: 36,
            SPACE_KEYCODE: 32
        },
        Op = new Set;
    Op.add(Ep.ARROW_LEFT_KEY), Op.add(Ep.ARROW_RIGHT_KEY), Op.add(Ep.END_KEY), Op.add(Ep.HOME_KEY), Op.add(Ep.ENTER_KEY), Op.add(Ep.SPACE_KEY);
    var Rp = new Map;
    Rp.set(Tp.ARROW_LEFT_KEYCODE, Ep.ARROW_LEFT_KEY), Rp.set(Tp.ARROW_RIGHT_KEYCODE, Ep.ARROW_RIGHT_KEY), Rp.set(Tp.END_KEYCODE, Ep.END_KEY), Rp.set(Tp.HOME_KEYCODE, Ep.HOME_KEY), Rp.set(Tp.ENTER_KEYCODE, Ep.ENTER_KEY), Rp.set(Tp.SPACE_KEYCODE, Ep.SPACE_KEY);
    const Ip = function(e) {
        function t(i) {
            var r = e.call(this, y(y({}, t.defaultAdapter), i)) || this;
            return r.useAutomaticActivation_ = !1, r
        }
        return g(t, e), Object.defineProperty(t, "strings", {
            get: function() {
                return Ep
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "numbers", {
            get: function() {
                return Tp
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "defaultAdapter", {
            get: function() {
                return {
                    scrollTo: function() {},
                    incrementScroll: function() {},
                    getScrollPosition: function() {
                        return 0
                    },
                    getScrollContentWidth: function() {
                        return 0
                    },
                    getOffsetWidth: function() {
                        return 0
                    },
                    isRTL: function() {
                        return !1
                    },
                    setActiveTab: function() {},
                    activateTabAtIndex: function() {},
                    deactivateTabAtIndex: function() {},
                    focusTabAtIndex: function() {},
                    getTabIndicatorClientRectAtIndex: function() {
                        return {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        }
                    },
                    getTabDimensionsAtIndex: function() {
                        return {
                            rootLeft: 0,
                            rootRight: 0,
                            contentLeft: 0,
                            contentRight: 0
                        }
                    },
                    getPreviousActiveTabIndex: function() {
                        return -1
                    },
                    getFocusedTabIndex: function() {
                        return -1
                    },
                    getIndexOfTabById: function() {
                        return -1
                    },
                    getTabListLength: function() {
                        return 0
                    },
                    notifyTabActivated: function() {}
                }
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.setUseAutomaticActivation = function(e) {
            this.useAutomaticActivation_ = e
        }, t.prototype.activateTab = function(e) {
            var t, i = this.adapter.getPreviousActiveTabIndex();
            this.indexIsInRange_(e) && e !== i && (-1 !== i && (this.adapter.deactivateTabAtIndex(i), t = this.adapter.getTabIndicatorClientRectAtIndex(i)), this.adapter.activateTabAtIndex(e, t), this.scrollIntoView(e), this.adapter.notifyTabActivated(e))
        }, t.prototype.handleKeyDown = function(e) {
            var t = this.getKeyFromEvent_(e);
            if (void 0 !== t)
                if (this.isActivationKey_(t) || e.preventDefault(), this.useAutomaticActivation_) {
                    if (this.isActivationKey_(t)) return;
                    var i = this.determineTargetFromKey_(this.adapter.getPreviousActiveTabIndex(), t);
                    this.adapter.setActiveTab(i), this.scrollIntoView(i)
                } else {
                    var r = this.adapter.getFocusedTabIndex();
                    this.isActivationKey_(t) ? this.adapter.setActiveTab(r) : (i = this.determineTargetFromKey_(r, t), this.adapter.focusTabAtIndex(i), this.scrollIntoView(i))
                }
        }, t.prototype.handleTabInteraction = function(e) {
            this.adapter.setActiveTab(this.adapter.getIndexOfTabById(e.detail.tabId))
        }, t.prototype.scrollIntoView = function(e) {
            if (this.indexIsInRange_(e)) return 0 === e ? this.adapter.scrollTo(0) : e === this.adapter.getTabListLength() - 1 ? this.adapter.scrollTo(this.adapter.getScrollContentWidth()) : this.isRTL_() ? this.scrollIntoViewRTL_(e) : void this.scrollIntoView_(e)
        }, t.prototype.determineTargetFromKey_ = function(e, t) {
            var i = this.isRTL_(),
                r = this.adapter.getTabListLength() - 1,
                o = e;
            return t === Ep.END_KEY ? o = r : t === Ep.ARROW_LEFT_KEY && !i || t === Ep.ARROW_RIGHT_KEY && i ? o -= 1 : t === Ep.ARROW_RIGHT_KEY && !i || t === Ep.ARROW_LEFT_KEY && i ? o += 1 : o = 0, o < 0 ? o = r : o > r && (o = 0), o
        }, t.prototype.calculateScrollIncrement_ = function(e, t, i, r) {
            var o = this.adapter.getTabDimensionsAtIndex(t),
                s = o.contentLeft - i - r,
                n = o.contentRight - i - Tp.EXTRA_SCROLL_AMOUNT,
                a = s + Tp.EXTRA_SCROLL_AMOUNT;
            return t < e ? Math.min(n, 0) : Math.max(a, 0)
        }, t.prototype.calculateScrollIncrementRTL_ = function(e, t, i, r, o) {
            var s = this.adapter.getTabDimensionsAtIndex(t),
                n = o - s.contentLeft - i,
                a = o - s.contentRight - i - r + Tp.EXTRA_SCROLL_AMOUNT,
                c = n - Tp.EXTRA_SCROLL_AMOUNT;
            return t > e ? Math.max(a, 0) : Math.min(c, 0)
        }, t.prototype.findAdjacentTabIndexClosestToEdge_ = function(e, t, i, r) {
            var o = t.rootLeft - i,
                s = t.rootRight - i - r,
                n = o + s;
            return o < 0 || n < 0 ? e - 1 : s > 0 || n > 0 ? e + 1 : -1
        }, t.prototype.findAdjacentTabIndexClosestToEdgeRTL_ = function(e, t, i, r, o) {
            var s = o - t.rootLeft - r - i,
                n = o - t.rootRight - i,
                a = s + n;
            return s > 0 || a > 0 ? e + 1 : n < 0 || a < 0 ? e - 1 : -1
        }, t.prototype.getKeyFromEvent_ = function(e) {
            return Op.has(e.key) ? e.key : Rp.get(e.keyCode)
        }, t.prototype.isActivationKey_ = function(e) {
            return e === Ep.SPACE_KEY || e === Ep.ENTER_KEY
        }, t.prototype.indexIsInRange_ = function(e) {
            return e >= 0 && e < this.adapter.getTabListLength()
        }, t.prototype.isRTL_ = function() {
            return this.adapter.isRTL()
        }, t.prototype.scrollIntoView_ = function(e) {
            var t = this.adapter.getScrollPosition(),
                i = this.adapter.getOffsetWidth(),
                r = this.adapter.getTabDimensionsAtIndex(e),
                o = this.findAdjacentTabIndexClosestToEdge_(e, r, t, i);
            if (this.indexIsInRange_(o)) {
                var s = this.calculateScrollIncrement_(e, o, t, i);
                this.adapter.incrementScroll(s)
            }
        }, t.prototype.scrollIntoViewRTL_ = function(e) {
            var t = this.adapter.getScrollPosition(),
                i = this.adapter.getOffsetWidth(),
                r = this.adapter.getTabDimensionsAtIndex(e),
                o = this.adapter.getScrollContentWidth(),
                s = this.findAdjacentTabIndexClosestToEdgeRTL_(e, r, t, i, o);
            if (this.indexIsInRange_(s)) {
                var n = this.calculateScrollIncrementRTL_(e, s, t, i, o);
                this.adapter.incrementScroll(n)
            }
        }, t
    }(Ap);
    class Up extends _t {
        constructor() {
            super(...arguments), this.mdcFoundationClass = Ip, this.activeIndex = 0, this._previousActiveIndex = -1
        }
        _handleTabInteraction(e) {
            this.mdcFoundation.handleTabInteraction(e)
        }
        _handleKeydown(e) {
            this.mdcFoundation.handleKeyDown(e)
        }
        render() {
            return se `
      <div class="mdc-tab-bar" role="tablist"
          @MDCTab:interacted="${this._handleTabInteraction}"
          @keydown="${this._handleKeydown}">
        <mwc-tab-scroller><slot></slot></mwc-tab-scroller>
      </div>
      `
        }
        _getTabs() {
            return this.tabsSlot.assignedNodes({
                flatten: !0
            }).filter((e => e instanceof jl))
        }
        _getTab(e) {
            return this._getTabs()[e]
        }
        createAdapter() {
            return {
                scrollTo: e => this.scrollerElement.scrollToPosition(e),
                incrementScroll: e => this.scrollerElement.incrementScrollPosition(e),
                getScrollPosition: () => this.scrollerElement.getScrollPosition(),
                getScrollContentWidth: () => this.scrollerElement.getScrollContentWidth(),
                getOffsetWidth: () => this.mdcRoot.offsetWidth,
                isRTL: () => "rtl" === window.getComputedStyle(this.mdcRoot).getPropertyValue("direction"),
                setActiveTab: e => this.mdcFoundation.activateTab(e),
                activateTabAtIndex: (e, t) => {
                    const i = this._getTab(e);
                    void 0 !== i && i.activate(t), this._previousActiveIndex = e
                },
                deactivateTabAtIndex: e => {
                    const t = this._getTab(e);
                    void 0 !== t && t.deactivate()
                },
                focusTabAtIndex: e => {
                    const t = this._getTab(e);
                    void 0 !== t && t.focus()
                },
                getTabIndicatorClientRectAtIndex: e => {
                    const t = this._getTab(e);
                    return void 0 !== t ? t.computeIndicatorClientRect() : new DOMRect
                },
                getTabDimensionsAtIndex: e => {
                    const t = this._getTab(e);
                    return void 0 !== t ? t.computeDimensions() : {
                        rootLeft: 0,
                        rootRight: 0,
                        contentLeft: 0,
                        contentRight: 0
                    }
                },
                getPreviousActiveTabIndex: () => this._previousActiveIndex,
                getFocusedTabIndex: () => {
                    const e = this._getTabs(),
                        t = this.getRootNode().activeElement;
                    return e.indexOf(t)
                },
                getIndexOfTabById: e => {
                    const t = this._getTabs();
                    for (let i = 0; i < t.length; i++)
                        if (t[i].id === e) return i;
                    return -1
                },
                getTabListLength: () => this._getTabs().length,
                notifyTabActivated: e => {
                    this.activeIndex = e, this.dispatchEvent(new CustomEvent(Ip.strings.TAB_ACTIVATED_EVENT, {
                        detail: {
                            index: e
                        },
                        bubbles: !0,
                        cancelable: !0
                    }))
                }
            }
        }
        firstUpdated() {}
        _getUpdateComplete() {
            let e;
            return e = super._getUpdateComplete ? super._getUpdateComplete() : super.getUpdateComplete(), e.then((() => this.scrollerElement.updateComplete)).then((() => {
                void 0 === this.mdcFoundation && this.createFoundation()
            }))
        }
        getUpdateComplete() {
            return this._getUpdateComplete()
        }
        scrollIndexIntoView(e) {
            this.mdcFoundation.scrollIntoView(e)
        }
    }
    v([Jl(".mdc-tab-bar")], Up.prototype, "mdcRoot", void 0), v([Jl("mwc-tab-scroller")], Up.prototype, "scrollerElement", void 0), v([Jl("slot")], Up.prototype, "tabsSlot", void 0), v([er((async function() {
        await this.updateComplete, this.activeIndex !== this._previousActiveIndex && this.mdcFoundation.activateTab(this.activeIndex)
    })), function(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : Gl(e, t)
    }({
        type: Number
    })], Up.prototype, "activeIndex", void 0);
    const zp = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof ep) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new ep(i, Zl)
    })
    `.mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}:host{display:block}.mdc-tab-bar{flex:1}mwc-tab{--mdc-tab-height: 48px;--mdc-tab-stacked-height: 72px}`;
    let Np = class extends Up {};
    Np.styles = zp, Np = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-tab-bar", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-tab-bar", e)
                }
            }
        })(0, e);
        var t
    }], Np), window.JSCompiler_renameProperty = (e, t) => e;
    const Fp = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        Mp = (e, t) => t !== e && (t == t || e == e),
        Lp = {
            attribute: !0,
            type: String,
            converter: Fp,
            reflect: !1,
            hasChanged: Mp
        };
    class Dp extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = Lp) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || Lp
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = Mp) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || Fp,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || Fp.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = Lp) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    Dp.finalized = !0;
    const Vp = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function Hp(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : Vp(e, t)
    }

    function jp(e) {
        return Hp({
            attribute: !1,
            hasChanged: null == e ? void 0 : e.hasChanged
        })
    }

    function Bp(e, t) {
        return (i, r) => {
            const o = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof r ? Symbol() : `__${r}`;
                o.get = function() {
                    return void 0 === this[t] && (this[t] = this.renderRoot.querySelector(e)), this[t]
                }
            }
            return void 0 !== r ? qp(o, i, r) : $p(o, i)
        }
    }
    const qp = (e, t, i) => {
            Object.defineProperty(t, i, e)
        },
        $p = (e, t) => ({
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
        }),
        Xp = Element.prototype;
    Xp.msMatchesSelector || Xp.webkitMatchesSelector;
    const Gp = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        Jp = Symbol();
    class Wp {
        constructor(e, t) {
            if (t !== Jp) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (Gp ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const Yp = {};
    class Kp extends Dp {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !Gp) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new Wp(String(t), Jp)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Gp ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== Yp && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return Yp
        }
    }
    Kp.finalized = !0, Kp.render = pe;
    const Qp = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof Wp) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new Wp(i, Jp)
    })
    `.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
    window.JSCompiler_renameProperty = (e, t) => e;
    const Zp = {
            toAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return e ? "" : null;
                    case Object:
                    case Array:
                        return null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                switch (t) {
                    case Boolean:
                        return null !== e;
                    case Number:
                        return null === e ? null : Number(e);
                    case Object:
                    case Array:
                        return JSON.parse(e)
                }
                return e
            }
        },
        eh = (e, t) => t !== e && (t == t || e == e),
        th = {
            attribute: !0,
            type: String,
            converter: Zp,
            reflect: !1,
            hasChanged: eh
        };
    class ih extends HTMLElement {
        constructor() {
            super(), this.initialize()
        }
        static get observedAttributes() {
            this.finalize();
            const e = [];
            return this._classProperties.forEach(((t, i) => {
                const r = this._attributeNameForProperty(i, t);
                void 0 !== r && (this._attributeToPropertyMap.set(r, i), e.push(r))
            })), e
        }
        static _ensureClassProperties() {
            if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                this._classProperties = new Map;
                const e = Object.getPrototypeOf(this)._classProperties;
                void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e)))
            }
        }
        static createProperty(e, t = th) {
            if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
            const i = "symbol" == typeof e ? Symbol() : `__${e}`,
                r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r)
        }
        static getPropertyDescriptor(e, t, i) {
            return {
                get() {
                    return this[t]
                },
                set(r) {
                    const o = this[e];
                    this[t] = r, this.requestUpdateInternal(e, o, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this._classProperties && this._classProperties.get(e) || th
        }
        static finalize() {
            const e = Object.getPrototypeOf(this);
            if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                const e = this.properties,
                    t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
                for (const i of t) this.createProperty(i, e[i])
            }
        }
        static _attributeNameForProperty(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        static _valueHasChanged(e, t, i = eh) {
            return i(e, t)
        }
        static _propertyValueFromAttribute(e, t) {
            const i = t.type,
                r = t.converter || Zp,
                o = "function" == typeof r ? r : r.fromAttribute;
            return o ? o(e, i) : e
        }
        static _propertyValueToAttribute(e, t) {
            if (void 0 === t.reflect) return;
            const i = t.type,
                r = t.converter;
            return (r && r.toAttribute || Zp.toAttribute)(e, i)
        }
        initialize() {
            this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal()
        }
        _saveInstanceProperties() {
            this.constructor._classProperties.forEach(((e, t) => {
                if (this.hasOwnProperty(t)) {
                    const e = this[t];
                    delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e)
                }
            }))
        }
        _applyInstanceProperties() {
            this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0
        }
        connectedCallback() {
            this.enableUpdating()
        }
        enableUpdating() {
            void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0)
        }
        disconnectedCallback() {}
        attributeChangedCallback(e, t, i) {
            t !== i && this._attributeToProperty(e, i)
        }
        _propertyToAttribute(e, t, i = th) {
            const r = this.constructor,
                o = r._attributeNameForProperty(e, i);
            if (void 0 !== o) {
                const e = r._propertyValueToAttribute(t, i);
                if (void 0 === e) return;
                this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(o) : this.setAttribute(o, e), this._updateState = -9 & this._updateState
            }
        }
        _attributeToProperty(e, t) {
            if (8 & this._updateState) return;
            const i = this.constructor,
                r = i._attributeToPropertyMap.get(e);
            if (void 0 !== r) {
                const e = i.getPropertyOptions(r);
                this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState
            }
        }
        requestUpdateInternal(e, t, i) {
            let r = !0;
            if (void 0 !== e) {
                const o = this.constructor;
                i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, i))) : r = !1
            }!this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate())
        }
        requestUpdate(e, t) {
            return this.requestUpdateInternal(e, t), this.updateComplete
        }
        async _enqueueUpdate() {
            this._updateState = 4 | this._updateState;
            try {
                await this._updatePromise
            } catch (e) {}
            const e = this.performUpdate();
            return null != e && await e, !this._hasRequestedUpdate
        }
        get _hasRequestedUpdate() {
            return 4 & this._updateState
        }
        get hasUpdated() {
            return 1 & this._updateState
        }
        performUpdate() {
            if (!this._hasRequestedUpdate) return;
            this._instanceProperties && this._applyInstanceProperties();
            let e = !1;
            const t = this._changedProperties;
            try {
                e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated()
            } catch (t) {
                throw e = !1, this._markUpdated(), t
            }
            e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t))
        }
        _markUpdated() {
            this._changedProperties = new Map, this._updateState = -5 & this._updateState
        }
        get updateComplete() {
            return this._getUpdateComplete()
        }
        _getUpdateComplete() {
            return this._updatePromise
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    ih.finalized = !0;
    const rh = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
        finisher(i) {
            i.createProperty(t.key, e)
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(i) {
            i.createProperty(t.key, e)
        }
    };

    function oh(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            t.constructor.createProperty(i, e)
        })(e, t, i) : rh(e, t)
    }
    const sh = Element.prototype;
    sh.msMatchesSelector || sh.webkitMatchesSelector;
    const nh = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        ah = Symbol();
    class ch {
        constructor(e, t) {
            if (t !== ah) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e
        }
        get styleSheet() {
            return void 0 === this._styleSheet && (nh ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
        }
        toString() {
            return this.cssText
        }
    }(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
    const dh = {};
    class lh extends ih {
        static getStyles() {
            return this.styles
        }
        static _getUniqueStyles() {
            if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
            const e = this.getStyles();
            if (Array.isArray(e)) {
                const t = (e, i) => e.reduceRight(((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e)), i),
                    i = t(e, new Set),
                    r = [];
                i.forEach((e => r.unshift(e))), this._styles = r
            } else this._styles = void 0 === e ? [] : [e];
            this._styles = this._styles.map((e => {
                if (e instanceof CSSStyleSheet && !nh) {
                    const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), "");
                    return new ch(String(t), ah)
                }
                return e
            }))
        }
        initialize() {
            super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
        }
        createRenderRoot() {
            return this.attachShadow({
                mode: "open"
            })
        }
        adoptStyles() {
            const e = this.constructor._styles;
            0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? nh ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName))
        }
        connectedCallback() {
            super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
        }
        update(e) {
            const t = this.render();
            super.update(e), t !== dh && this.constructor.render(t, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
            }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => {
                const t = document.createElement("style");
                t.textContent = e.cssText, this.renderRoot.appendChild(t)
            })))
        }
        render() {
            return dh
        }
    }
    lh.finalized = !0, lh.render = pe;
    var ph = function() {
            function e(e) {
                void 0 === e && (e = {}), this.adapter = e
            }
            return Object.defineProperty(e, "cssClasses", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "strings", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "numbers", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "defaultAdapter", {
                get: function() {
                    return {}
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.init = function() {}, e.prototype.destroy = function() {}, e
        }(),
        hh = {
            ARIA_CONTROLS: "aria-controls",
            ARIA_DESCRIBEDBY: "aria-describedby",
            INPUT_SELECTOR: ".mdc-text-field__input",
            LABEL_SELECTOR: ".mdc-floating-label",
            LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
            LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
            OUTLINE_SELECTOR: ".mdc-notched-outline",
            PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
            SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
            TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
        },
        uh = {
            DISABLED: "mdc-text-field--disabled",
            FOCUSED: "mdc-text-field--focused",
            HELPER_LINE: "mdc-text-field-helper-line",
            INVALID: "mdc-text-field--invalid",
            LABEL_FLOATING: "mdc-text-field--label-floating",
            NO_LABEL: "mdc-text-field--no-label",
            OUTLINED: "mdc-text-field--outlined",
            ROOT: "mdc-text-field",
            TEXTAREA: "mdc-text-field--textarea",
            WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
            WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon"
        },
        mh = {
            LABEL_SCALE: .75
        },
        fh = ["pattern", "min", "max", "required", "step", "minlength", "maxlength"],
        _h = ["color", "date", "datetime-local", "month", "range", "time", "week"],
        bh = ["mousedown", "touchstart"],
        gh = ["click", "keydown"];
    const yh = function(e) {
            function t(i, r) {
                void 0 === r && (r = {});
                var o = e.call(this, y(y({}, t.defaultAdapter), i)) || this;
                return o.isFocused_ = !1, o.receivedUserInput_ = !1, o.isValid_ = !0, o.useNativeValidation_ = !0, o.validateOnValueChange_ = !0, o.helperText_ = r.helperText, o.characterCounter_ = r.characterCounter, o.leadingIcon_ = r.leadingIcon, o.trailingIcon_ = r.trailingIcon, o.inputFocusHandler_ = function() {
                    return o.activateFocus()
                }, o.inputBlurHandler_ = function() {
                    return o.deactivateFocus()
                }, o.inputInputHandler_ = function() {
                    return o.handleInput()
                }, o.setPointerXOffset_ = function(e) {
                    return o.setTransformOrigin(e)
                }, o.textFieldInteractionHandler_ = function() {
                    return o.handleTextFieldInteraction()
                }, o.validationAttributeChangeHandler_ = function(e) {
                    return o.handleValidationAttributeChange(e)
                }, o
            }
            return g(t, e), Object.defineProperty(t, "cssClasses", {
                get: function() {
                    return uh
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "strings", {
                get: function() {
                    return hh
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "numbers", {
                get: function() {
                    return mh
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "shouldAlwaysFloat_", {
                get: function() {
                    var e = this.getNativeInput_().type;
                    return _h.indexOf(e) >= 0
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "shouldFloat", {
                get: function() {
                    return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_()
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "shouldShake", {
                get: function() {
                    return !this.isFocused_ && !this.isValid() && !!this.getValue()
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        hasClass: function() {
                            return !0
                        },
                        setInputAttr: function() {},
                        removeInputAttr: function() {},
                        registerTextFieldInteractionHandler: function() {},
                        deregisterTextFieldInteractionHandler: function() {},
                        registerInputInteractionHandler: function() {},
                        deregisterInputInteractionHandler: function() {},
                        registerValidationAttributeChangeHandler: function() {
                            return new MutationObserver((function() {}))
                        },
                        deregisterValidationAttributeChangeHandler: function() {},
                        getNativeInput: function() {
                            return null
                        },
                        isFocused: function() {
                            return !1
                        },
                        activateLineRipple: function() {},
                        deactivateLineRipple: function() {},
                        setLineRippleTransformOrigin: function() {},
                        shakeLabel: function() {},
                        floatLabel: function() {},
                        setLabelRequired: function() {},
                        hasLabel: function() {
                            return !1
                        },
                        getLabelWidth: function() {
                            return 0
                        },
                        hasOutline: function() {
                            return !1
                        },
                        notchOutline: function() {},
                        closeOutline: function() {}
                    }
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.init = function() {
                var e = this;
                this.adapter.hasLabel() && this.getNativeInput_().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler_() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating_(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler_), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler_), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler_), bh.forEach((function(t) {
                    e.adapter.registerInputInteractionHandler(t, e.setPointerXOffset_)
                })), gh.forEach((function(t) {
                    e.adapter.registerTextFieldInteractionHandler(t, e.textFieldInteractionHandler_)
                })), this.validationObserver_ = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_), this.setCharacterCounter_(this.getValue().length)
            }, t.prototype.destroy = function() {
                var e = this;
                this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler_), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler_), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler_), bh.forEach((function(t) {
                    e.adapter.deregisterInputInteractionHandler(t, e.setPointerXOffset_)
                })), gh.forEach((function(t) {
                    e.adapter.deregisterTextFieldInteractionHandler(t, e.textFieldInteractionHandler_)
                })), this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver_)
            }, t.prototype.handleTextFieldInteraction = function() {
                var e = this.adapter.getNativeInput();
                e && e.disabled || (this.receivedUserInput_ = !0)
            }, t.prototype.handleValidationAttributeChange = function(e) {
                var t = this;
                e.some((function(e) {
                    return fh.indexOf(e) > -1 && (t.styleValidity_(!0), t.adapter.setLabelRequired(t.getNativeInput_().required), !0)
                })), e.indexOf("maxlength") > -1 && this.setCharacterCounter_(this.getValue().length)
            }, t.prototype.notchOutline = function(e) {
                if (this.adapter.hasOutline() && this.adapter.hasLabel())
                    if (e) {
                        var t = this.adapter.getLabelWidth() * mh.LABEL_SCALE;
                        this.adapter.notchOutline(t)
                    } else this.adapter.closeOutline()
            }, t.prototype.activateFocus = function() {
                this.isFocused_ = !0, this.styleFocused_(this.isFocused_), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating_(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), !this.helperText_ || !this.helperText_.isPersistent() && this.helperText_.isValidation() && this.isValid_ || this.helperText_.showToScreenReader()
            }, t.prototype.setTransformOrigin = function(e) {
                if (!this.isDisabled() && !this.adapter.hasOutline()) {
                    var t = e.touches,
                        i = t ? t[0] : e,
                        r = i.target.getBoundingClientRect(),
                        o = i.clientX - r.left;
                    this.adapter.setLineRippleTransformOrigin(o)
                }
            }, t.prototype.handleInput = function() {
                this.autoCompleteFocus(), this.setCharacterCounter_(this.getValue().length)
            }, t.prototype.autoCompleteFocus = function() {
                this.receivedUserInput_ || this.activateFocus()
            }, t.prototype.deactivateFocus = function() {
                this.isFocused_ = !1, this.adapter.deactivateLineRipple();
                var e = this.isValid();
                this.styleValidity_(e), this.styleFocused_(this.isFocused_), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating_(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput_ = !1)
            }, t.prototype.getValue = function() {
                return this.getNativeInput_().value
            }, t.prototype.setValue = function(e) {
                if (this.getValue() !== e && (this.getNativeInput_().value = e), this.setCharacterCounter_(e.length), this.validateOnValueChange_) {
                    var t = this.isValid();
                    this.styleValidity_(t)
                }
                this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating_(this.shouldFloat), this.validateOnValueChange_ && this.adapter.shakeLabel(this.shouldShake))
            }, t.prototype.isValid = function() {
                return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_
            }, t.prototype.setValid = function(e) {
                this.isValid_ = e, this.styleValidity_(e);
                var t = !e && !this.isFocused_ && !!this.getValue();
                this.adapter.hasLabel() && this.adapter.shakeLabel(t)
            }, t.prototype.setValidateOnValueChange = function(e) {
                this.validateOnValueChange_ = e
            }, t.prototype.getValidateOnValueChange = function() {
                return this.validateOnValueChange_
            }, t.prototype.setUseNativeValidation = function(e) {
                this.useNativeValidation_ = e
            }, t.prototype.isDisabled = function() {
                return this.getNativeInput_().disabled
            }, t.prototype.setDisabled = function(e) {
                this.getNativeInput_().disabled = e, this.styleDisabled_(e)
            }, t.prototype.setHelperTextContent = function(e) {
                this.helperText_ && this.helperText_.setContent(e)
            }, t.prototype.setLeadingIconAriaLabel = function(e) {
                this.leadingIcon_ && this.leadingIcon_.setAriaLabel(e)
            }, t.prototype.setLeadingIconContent = function(e) {
                this.leadingIcon_ && this.leadingIcon_.setContent(e)
            }, t.prototype.setTrailingIconAriaLabel = function(e) {
                this.trailingIcon_ && this.trailingIcon_.setAriaLabel(e)
            }, t.prototype.setTrailingIconContent = function(e) {
                this.trailingIcon_ && this.trailingIcon_.setContent(e)
            }, t.prototype.setCharacterCounter_ = function(e) {
                if (this.characterCounter_) {
                    var t = this.getNativeInput_().maxLength;
                    if (-1 === t) throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
                    this.characterCounter_.setCounterValue(e, t)
                }
            }, t.prototype.isBadInput_ = function() {
                return this.getNativeInput_().validity.badInput || !1
            }, t.prototype.isNativeInputValid_ = function() {
                return this.getNativeInput_().validity.valid
            }, t.prototype.styleValidity_ = function(e) {
                var i = t.cssClasses.INVALID;
                if (e ? this.adapter.removeClass(i) : this.adapter.addClass(i), this.helperText_) {
                    if (this.helperText_.setValidity(e), !this.helperText_.isValidation()) return;
                    var r = this.helperText_.isVisible(),
                        o = this.helperText_.getId();
                    r && o ? this.adapter.setInputAttr(hh.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(hh.ARIA_DESCRIBEDBY)
                }
            }, t.prototype.styleFocused_ = function(e) {
                var i = t.cssClasses.FOCUSED;
                e ? this.adapter.addClass(i) : this.adapter.removeClass(i)
            }, t.prototype.styleDisabled_ = function(e) {
                var i = t.cssClasses,
                    r = i.DISABLED,
                    o = i.INVALID;
                e ? (this.adapter.addClass(r), this.adapter.removeClass(o)) : this.adapter.removeClass(r), this.leadingIcon_ && this.leadingIcon_.setDisabled(e), this.trailingIcon_ && this.trailingIcon_.setDisabled(e)
            }, t.prototype.styleFloating_ = function(e) {
                var i = t.cssClasses.LABEL_FLOATING;
                e ? this.adapter.addClass(i) : this.adapter.removeClass(i)
            }, t.prototype.getNativeInput_ = function() {
                return (this.adapter ? this.adapter.getNativeInput() : null) || {
                    disabled: !1,
                    maxLength: -1,
                    required: !1,
                    type: "input",
                    validity: {
                        badInput: !1,
                        valid: !0
                    },
                    value: ""
                }
            }, t
        }(ph),
        vh = F((e => t => {
            let i;
            if (t instanceof Z || t instanceof J) throw new Error("The `live` directive is not allowed on text or event bindings");
            if (t instanceof W) Sh(t.strings), i = t.element.hasAttribute(t.name), t.value = i;
            else {
                const {
                    element: r,
                    name: o,
                    strings: s
                } = t.committer;
                if (Sh(s), t instanceof K) {
                    if (i = r[o], i === e) return
                } else t instanceof G && (i = r.getAttribute(o));
                if (i === String(e)) return
            }
            t.setValue(e)
        })),
        Sh = e => {
            if (2 !== e.length || "" !== e[0] || "" !== e[1]) throw new Error("`live` bindings can only contain a single expression")
        },
        xh = ["touchstart", "touchmove", "scroll", "mousewheel"],
        wh = (e = {}) => {
            const t = {};
            for (const i in e) t[i] = e[i];
            return Object.assign({
                badInput: !1,
                customError: !1,
                patternMismatch: !1,
                rangeOverflow: !1,
                rangeUnderflow: !1,
                stepMismatch: !1,
                tooLong: !1,
                tooShort: !1,
                typeMismatch: !1,
                valid: !0,
                valueMissing: !1
            }, t)
        };
    class Ch extends Ri {
        constructor() {
            super(...arguments), this.mdcFoundationClass = yh, this.value = "", this.type = "text", this.placeholder = "", this.label = "", this.icon = "", this.iconTrailing = "", this.disabled = !1, this.required = !1, this.minLength = -1, this.maxLength = -1, this.outlined = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.autoValidate = !1, this.pattern = "", this.min = "", this.max = "", this.step = null, this.size = null, this.helperPersistent = !1, this.charCounter = !1, this.endAligned = !1, this.prefix = "", this.suffix = "", this.name = "", this.readOnly = !1, this.autocapitalize = "", this.outlineOpen = !1, this.outlineWidth = 0, this.isUiValid = !0, this.focused = !1, this._validity = wh(), this._outlineUpdateComplete = null, this.validityTransform = null
        }
        get validity() {
            return this._checkValidity(this.value), this._validity
        }
        get willValidate() {
            return this.formElement.willValidate
        }
        get selectionStart() {
            return this.formElement.selectionStart
        }
        get selectionEnd() {
            return this.formElement.selectionEnd
        }
        focus() {
            const e = new CustomEvent("focus");
            this.formElement.dispatchEvent(e), this.formElement.focus()
        }
        blur() {
            const e = new CustomEvent("blur");
            this.formElement.dispatchEvent(e), this.formElement.blur()
        }
        select() {
            this.formElement.select()
        }
        setSelectionRange(e, t, i) {
            this.formElement.setSelectionRange(e, t, i)
        }
        update(e) {
            e.has("autoValidate") && this.mdcFoundation && this.mdcFoundation.setValidateOnValueChange(this.autoValidate), e.has("value") && "string" != typeof this.value && (this.value = `${this.value}`), super.update(e)
        }
        render() {
            const e = this.charCounter && -1 !== this.maxLength,
                t = !!this.helper || !!this.validationMessage || e,
                i = {
                    "mdc-text-field--disabled": this.disabled,
                    "mdc-text-field--no-label": !this.label,
                    "mdc-text-field--filled": !this.outlined,
                    "mdc-text-field--outlined": this.outlined,
                    "mdc-text-field--with-leading-icon": this.icon,
                    "mdc-text-field--with-trailing-icon": this.iconTrailing,
                    "mdc-text-field--end-aligned": this.endAligned
                };
            return se `
      <label class="mdc-text-field ${At(i)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(t)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(t,e)}
    `
        }
        updated(e) {
            e.has("value") && void 0 !== e.get("value") && (this.mdcFoundation.setValue(this.value), this.autoValidate && this.reportValidity())
        }
        renderRipple() {
            return this.outlined ? "" : se `
      <span class="mdc-text-field__ripple"></span>
    `
        }
        renderOutline() {
            return this.outlined ? se `
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>` : ""
        }
        renderLabel() {
            return this.label ? se `
      <span
          .floatingLabelFoundation=${Ca(this.label)}
          id="label">${this.label}</span>
    ` : ""
        }
        renderLeadingIcon() {
            return this.icon ? this.renderIcon(this.icon) : ""
        }
        renderTrailingIcon() {
            return this.iconTrailing ? this.renderIcon(this.iconTrailing, !0) : ""
        }
        renderIcon(e, t = !1) {
            return se `<i class="material-icons mdc-text-field__icon ${At({"mdc-text-field__icon--leading":!t,"mdc-text-field__icon--trailing":t})}">${e}</i>`
        }
        renderPrefix() {
            return this.prefix ? this.renderAffix(this.prefix) : ""
        }
        renderSuffix() {
            return this.suffix ? this.renderAffix(this.suffix, !0) : ""
        }
        renderAffix(e, t = !1) {
            return se `<span class="mdc-text-field__affix ${At({"mdc-text-field__affix--prefix":!t,"mdc-text-field__affix--suffix":t})}">
        ${e}</span>`
        }
        renderInput(e) {
            const t = -1 === this.minLength ? void 0 : this.minLength,
                i = -1 === this.maxLength ? void 0 : this.maxLength,
                r = this.autocapitalize ? this.autocapitalize : void 0,
                o = this.validationMessage && !this.isUiValid,
                s = e ? "helper-text" : void 0,
                n = this.focused || this.helperPersistent || o ? "helper-text" : void 0,
                a = o ? "helper-text" : void 0;
            return se `
      <input
          aria-labelledby="label"
          aria-controls="${Qt(s)}"
          aria-describedby="${Qt(n)}"
          aria-errortext="${Qt(a)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${vh(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${Qt(t)}"
          maxlength="${Qt(i)}"
          pattern="${Qt(this.pattern?this.pattern:void 0)}"
          min="${Qt(""===this.min?void 0:this.min)}"
          max="${Qt(""===this.max?void 0:this.max)}"
          step="${Qt(null===this.step?void 0:this.step)}"
          size="${Qt(null===this.size?void 0:this.size)}"
          name="${Qt(""===this.name?void 0:this.name)}"
          inputmode="${Qt(this.inputMode)}"
          autocapitalize="${Qt(r)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`
        }
        renderLineRipple() {
            return this.outlined ? "" : se `
      <span .lineRippleFoundation=${Ta()}></span>
    `
        }
        renderHelperText(e, t) {
            const i = this.validationMessage && !this.isUiValid,
                r = {
                    "mdc-text-field-helper-text--persistent": this.helperPersistent,
                    "mdc-text-field-helper-text--validation-msg": i
                },
                o = this.focused || this.helperPersistent || i ? void 0 : "true",
                s = i ? this.validationMessage : this.helper;
            return e ? se `
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${Qt(o)}"
             class="mdc-text-field-helper-text ${At(r)}"
             >${s}</div>
        ${this.renderCharCounter(t)}
      </div>` : ""
        }
        renderCharCounter(e) {
            const t = Math.min(this.value.length, this.maxLength);
            return e ? se `
      <span class="mdc-text-field-character-counter"
            >${t} / ${this.maxLength}</span>` : ""
        }
        onInputFocus() {
            this.focused = !0
        }
        onInputBlur() {
            this.focused = !1, this.reportValidity()
        }
        checkValidity() {
            const e = this._checkValidity(this.value);
            if (!e) {
                const e = new Event("invalid", {
                    bubbles: !1,
                    cancelable: !0
                });
                this.dispatchEvent(e)
            }
            return e
        }
        reportValidity() {
            const e = this.checkValidity();
            return this.mdcFoundation.setValid(e), this.isUiValid = e, e
        }
        _checkValidity(e) {
            const t = this.formElement.validity;
            let i = wh(t);
            if (this.validityTransform) {
                const t = this.validityTransform(e, i);
                i = Object.assign(Object.assign({}, i), t), this.mdcFoundation.setUseNativeValidation(!1)
            } else this.mdcFoundation.setUseNativeValidation(!0);
            return this._validity = i, this._validity.valid
        }
        setCustomValidity(e) {
            this.validationMessage = e, this.formElement.setCustomValidity(e)
        }
        handleInputChange() {
            this.value = this.formElement.value
        }
        createFoundation() {
            void 0 !== this.mdcFoundation && this.mdcFoundation.destroy(), this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter()), this.mdcFoundation.init()
        }
        createAdapter() {
            return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods())
        }
        getRootAdapterMethods() {
            return Object.assign({
                registerTextFieldInteractionHandler: (e, t) => this.addEventListener(e, t),
                deregisterTextFieldInteractionHandler: (e, t) => this.removeEventListener(e, t),
                registerValidationAttributeChangeHandler: e => {
                    const t = new MutationObserver((t => {
                        e((e => e.map((e => e.attributeName)).filter((e => e)))(t))
                    }));
                    return t.observe(this.formElement, {
                        attributes: !0
                    }), t
                },
                deregisterValidationAttributeChangeHandler: e => e.disconnect()
            }, lt(this.mdcRoot))
        }
        getInputAdapterMethods() {
            return {
                getNativeInput: () => this.formElement,
                setInputAttr: () => {},
                removeInputAttr: () => {},
                isFocused: () => !!this.shadowRoot && this.shadowRoot.activeElement === this.formElement,
                registerInputInteractionHandler: (e, t) => this.formElement.addEventListener(e, t, {
                    passive: e in xh
                }),
                deregisterInputInteractionHandler: (e, t) => this.formElement.removeEventListener(e, t)
            }
        }
        getLabelAdapterMethods() {
            return {
                floatLabel: e => this.labelElement && this.labelElement.floatingLabelFoundation.float(e),
                getLabelWidth: () => this.labelElement ? this.labelElement.floatingLabelFoundation.getWidth() : 0,
                hasLabel: () => Boolean(this.labelElement),
                shakeLabel: e => this.labelElement && this.labelElement.floatingLabelFoundation.shake(e),
                setLabelRequired: e => {
                    this.labelElement && this.labelElement.floatingLabelFoundation.setRequired(e)
                }
            }
        }
        getLineRippleAdapterMethods() {
            return {
                activateLineRipple: () => {
                    this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.activate()
                },
                deactivateLineRipple: () => {
                    this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.deactivate()
                },
                setLineRippleTransformOrigin: e => {
                    this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.setRippleCenter(e)
                }
            }
        }
        async _getUpdateComplete() {
            let e = !1;
            return super._getUpdateComplete ? await super._getUpdateComplete() : e = await super.getUpdateComplete(), await this._outlineUpdateComplete, e
        }
        async getUpdateComplete() {
            return this._getUpdateComplete()
        }
        async firstUpdated() {
            const e = this.outlineElement;
            e && (this._outlineUpdateComplete = e.updateComplete, await this._outlineUpdateComplete), super.firstUpdated(), this.mdcFoundation.setValidateOnValueChange(this.autoValidate), this.validateOnInitialRender && this.reportValidity()
        }
        getOutlineAdapterMethods() {
            return {
                closeOutline: () => this.outlineElement && (this.outlineOpen = !1),
                hasOutline: () => Boolean(this.outlineElement),
                notchOutline: e => {
                    this.outlineElement && !this.outlineOpen && (this.outlineWidth = e, this.outlineOpen = !0)
                }
            }
        }
        async layout() {
            await this.updateComplete;
            const e = this.labelElement;
            if (!e) return void(this.outlineOpen = !1);
            const t = !!this.label && !!this.value;
            if (e.floatingLabelFoundation.float(t), !this.outlined) return;
            this.outlineOpen = t, await this.updateComplete;
            const i = e.floatingLabelFoundation.getWidth();
            this.outlineOpen && (this.outlineWidth = i)
        }
    }
    v([Bp(".mdc-text-field")], Ch.prototype, "mdcRoot", void 0), v([Bp("input")], Ch.prototype, "formElement", void 0), v([Bp(".mdc-floating-label")], Ch.prototype, "labelElement", void 0), v([Bp(".mdc-line-ripple")], Ch.prototype, "lineRippleElement", void 0), v([Bp("mwc-notched-outline")], Ch.prototype, "outlineElement", void 0), v([Bp(".mdc-notched-outline__notch")], Ch.prototype, "notchElement", void 0), v([Hp({
        type: String
    })], Ch.prototype, "value", void 0), v([Hp({
        type: String
    })], Ch.prototype, "type", void 0), v([Hp({
        type: String
    })], Ch.prototype, "placeholder", void 0), v([Hp({
        type: String
    }), er((function(e, t) {
        void 0 !== t && this.label !== t && this.layout()
    }))], Ch.prototype, "label", void 0), v([Hp({
        type: String
    })], Ch.prototype, "icon", void 0), v([Hp({
        type: String
    })], Ch.prototype, "iconTrailing", void 0), v([Hp({
        type: Boolean,
        reflect: !0
    })], Ch.prototype, "disabled", void 0), v([Hp({
        type: Boolean
    })], Ch.prototype, "required", void 0), v([Hp({
        type: Number
    })], Ch.prototype, "minLength", void 0), v([Hp({
        type: Number
    })], Ch.prototype, "maxLength", void 0), v([Hp({
        type: Boolean,
        reflect: !0
    }), er((function(e, t) {
        void 0 !== t && this.outlined !== t && this.layout()
    }))], Ch.prototype, "outlined", void 0), v([Hp({
        type: String
    })], Ch.prototype, "helper", void 0), v([Hp({
        type: Boolean
    })], Ch.prototype, "validateOnInitialRender", void 0), v([Hp({
        type: String
    })], Ch.prototype, "validationMessage", void 0), v([Hp({
        type: Boolean
    })], Ch.prototype, "autoValidate", void 0), v([Hp({
        type: String
    })], Ch.prototype, "pattern", void 0), v([Hp({
        type: String
    })], Ch.prototype, "min", void 0), v([Hp({
        type: String
    })], Ch.prototype, "max", void 0), v([Hp({
        type: Number
    })], Ch.prototype, "step", void 0), v([Hp({
        type: Number
    })], Ch.prototype, "size", void 0), v([Hp({
        type: Boolean
    })], Ch.prototype, "helperPersistent", void 0), v([Hp({
        type: Boolean
    })], Ch.prototype, "charCounter", void 0), v([Hp({
        type: Boolean
    })], Ch.prototype, "endAligned", void 0), v([Hp({
        type: String
    })], Ch.prototype, "prefix", void 0), v([Hp({
        type: String
    })], Ch.prototype, "suffix", void 0), v([Hp({
        type: String
    })], Ch.prototype, "name", void 0), v([Hp({
        type: String
    })], Ch.prototype, "inputMode", void 0), v([Hp({
        type: Boolean
    })], Ch.prototype, "readOnly", void 0), v([Hp({
        type: String
    })], Ch.prototype, "autocapitalize", void 0), v([jp()], Ch.prototype, "outlineOpen", void 0), v([jp()], Ch.prototype, "outlineWidth", void 0), v([jp()], Ch.prototype, "isUiValid", void 0), v([jp()], Ch.prototype, "focused", void 0), v([function(e) {
        return (t, i) => void 0 !== i ? ((e, t, i) => {
            Object.assign(t[i], e)
        })(e, t, i) : ((e, t) => Object.assign(Object.assign({}, t), {
            finisher(i) {
                Object.assign(i.prototype[t.key], e)
            }
        }))(e, t)
    }({
        passive: !0
    })], Ch.prototype, "handleInputChange", null);
    class Ph extends Ch {
        constructor() {
            super(...arguments), this.rows = 2, this.cols = 20, this.charCounter = !1
        }
        render() {
            const e = this.charCounter && -1 !== this.maxLength,
                t = e && "internal" === this.charCounter,
                i = e && !t,
                r = !!this.helper || !!this.validationMessage || i,
                o = {
                    "mdc-text-field--disabled": this.disabled,
                    "mdc-text-field--no-label": !this.label,
                    "mdc-text-field--filled": !this.outlined,
                    "mdc-text-field--outlined": this.outlined,
                    "mdc-text-field--end-aligned": this.endAligned,
                    "mdc-text-field--with-internal-counter": t
                };
            return se `
      <label class="mdc-text-field mdc-text-field--textarea ${At(o)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(t)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(r,i)}
    `
        }
        renderInput() {
            const e = -1 === this.minLength ? void 0 : this.minLength,
                t = -1 === this.maxLength ? void 0 : this.maxLength,
                i = this.autocapitalize ? this.autocapitalize : void 0;
            return se `
      <textarea
          aria-labelledby="label"
          class="mdc-text-field__input"
          .value="${vh(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${Qt(e)}"
          maxlength="${Qt(t)}"
          name="${Qt(""===this.name?void 0:this.name)}"
          inputmode="${Qt(this.inputMode)}"
          autocapitalize="${Qt(i)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`
        }
    }
    v([function(e, t) {
        return (t, i) => {
            const r = {
                get() {
                    return this.renderRoot.querySelector(e)
                },
                enumerable: !0,
                configurable: !0
            };
            return void 0 !== i ? ((e, t, i) => {
                Object.defineProperty(t, i, e)
            })(r, t, i) : ((e, t) => ({
                kind: "method",
                placement: "prototype",
                key: t.key,
                descriptor: e
            }))(r, t)
        }
    }("textarea")], Ph.prototype, "formElement", void 0), v([oh({
        type: Number
    })], Ph.prototype, "rows", void 0), v([oh({
        type: Number
    })], Ph.prototype, "cols", void 0), v([oh({
        converter: {
            fromAttribute: e => null !== e && ("" === e || e),
            toAttribute: e => "boolean" == typeof e ? e ? "" : null : e
        }
    })], Ph.prototype, "charCounter", void 0);
    const kh = ((e, ...t) => {
        const i = t.reduce(((t, i, r) => t + (e => {
            if (e instanceof ch) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
        })(i) + e[r + 1]), e[0]);
        return new ch(i, ah)
    })
    `.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`;
    let Ah = class extends Ph {};
    Ah.styles = [Qp, kh], Ah = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-textarea", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-textarea", e)
                }
            }
        })(0, e);
        var t
    }], Ah);
    let Eh = class extends Ch {};
    Eh.styles = Qp, Eh = v([e => {
        return "function" == typeof e ? (t = e, window.customElements.define("mwc-textfield", t), t) : ((e, t) => {
            const {
                kind: i,
                elements: r
            } = t;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define("mwc-textfield", e)
                }
            }
        })(0, e);
        var t
    }], Eh), document.addEventListener("DOMContentLoaded", (e => {
        document.querySelectorAll(".btn").forEach((e => _.attachTo(e))), document.querySelectorAll(".card-collapsible .card-header").forEach((e => _.attachTo(e))), document.querySelectorAll(".chip").forEach((e => _.attachTo(e))), document.querySelectorAll(".dropdown-menu .dropdown-item").forEach((e => _.attachTo(e))), document.querySelectorAll(".drawer-menu .nav-link").forEach((e => _.attachTo(e))), document.querySelectorAll(".list-group .list-group-item-action").forEach((e => _.attachTo(e))), document.querySelectorAll(".nav .nav-link").forEach((e => _.attachTo(e))), document.querySelectorAll("[class*='ripple-']").forEach((e => _.attachTo(e)))
    }))
})();
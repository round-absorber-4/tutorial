!function(A, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e = t();
        for(var i in e)("object" == typeof exports ? exports : A)[i] = e[i];
    }
}(this, function() {
    return function(A) {
        function t(i) {
            if (e[i]) return e[i].exports;
            var n = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return A[i].call(n.exports, n, n.exports, t), n.l = !0, n.exports;
        }
        var e = {};
        return t.m = A, t.c = e, t.d = function(A, e, i) {
            t.o(A, e) || Object.defineProperty(A, e, {
                configurable: !1,
                enumerable: !0,
                get: i
            });
        }, t.n = function(A) {
            var e = A && A.__esModule ? function() {
                return A.default;
            } : function() {
                return A;
            };
            return t.d(e, "a", e), e;
        }, t.o = function(A, t) {
            return Object.prototype.hasOwnProperty.call(A, t);
        }, t.p = "", t(t.s = 10);
    }([
        function(A, t, e) {
            "use strict"; /**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
            function i() {}
            i.DEFAULT_SOURCE_GAIN = 1, i.LISTENER_MAX_OUTSIDE_ROOM_DISTANCE = 1, i.SOURCE_MAX_OUTSIDE_ROOM_DISTANCE = 1, i.DEFAULT_SOURCE_DISTANCE = 1, i.DEFAULT_POSITION = [
                0,
                0,
                0
            ], i.DEFAULT_FORWARD = [
                0,
                0,
                -1
            ], i.DEFAULT_UP = [
                0,
                1,
                0
            ], i.DEFAULT_RIGHT = [
                1,
                0,
                0
            ], i.DEFAULT_SPEED_OF_SOUND = 343, i.ATTENUATION_ROLLOFFS = [
                "logarithmic",
                "linear",
                "none"
            ], i.DEFAULT_ATTENUATION_ROLLOFF = "logarithmic", i.DEFAULT_MIN_DISTANCE = 1, i.DEFAULT_MAX_DISTANCE = 1e3, i.DEFAULT_DIRECTIVITY_ALPHA = 0, i.DEFAULT_DIRECTIVITY_SHARPNESS = 1, i.DEFAULT_AZIMUTH = 0, i.DEFAULT_ELEVATION = 0, i.DEFAULT_AMBISONIC_ORDER = 1, i.DEFAULT_SOURCE_WIDTH = 0, i.DEFAULT_REFLECTION_MAX_DURATION = .5, i.DEFAULT_REFLECTION_CUTOFF_FREQUENCY = 6400, i.DEFAULT_REFLECTION_COEFFICIENTS = {
                left: 0,
                right: 0,
                front: 0,
                back: 0,
                down: 0,
                up: 0
            }, i.DEFAULT_REFLECTION_MIN_DISTANCE = 1, i.DEFAULT_ROOM_DIMENSIONS = {
                width: 0,
                height: 0,
                depth: 0
            }, i.DEFAULT_REFLECTION_MULTIPLIER = 1, i.DEFAULT_REVERB_BANDWIDTH = 1, i.DEFAULT_REVERB_DURATION_MULTIPLIER = 1, i.DEFAULT_REVERB_PREDELAY = 1.5, i.DEFAULT_REVERB_TAIL_ONSET = 3.8, i.DEFAULT_REVERB_GAIN = .01, i.DEFAULT_REVERB_MAX_DURATION = 3, i.NUMBER_REVERB_FREQUENCY_BANDS = (i.DEFAULT_REVERB_FREQUENCY_BANDS = [
                31.25,
                62.5,
                125,
                250,
                500,
                1e3,
                2e3,
                4e3,
                8e3
            ]).length, i.DEFAULT_REVERB_DURATIONS = new Float32Array(i.NUMBER_REVERB_FREQUENCY_BANDS), i.ROOM_MATERIAL_COEFFICIENTS = {
                transparent: [
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1
                ],
                "acoustic-ceiling-tiles": [
                    .672,
                    .675,
                    .7,
                    .66,
                    .72,
                    .92,
                    .88,
                    .75,
                    1
                ],
                "brick-bare": [
                    .03,
                    .03,
                    .03,
                    .03,
                    .03,
                    .04,
                    .05,
                    .07,
                    .14
                ],
                "brick-painted": [
                    .006,
                    .007,
                    .01,
                    .01,
                    .02,
                    .02,
                    .02,
                    .03,
                    .06
                ],
                "concrete-block-coarse": [
                    .36,
                    .36,
                    .36,
                    .44,
                    .31,
                    .29,
                    .39,
                    .25,
                    .5
                ],
                "concrete-block-painted": [
                    .092,
                    .09,
                    .1,
                    .05,
                    .06,
                    .07,
                    .09,
                    .08,
                    .16
                ],
                "curtain-heavy": [
                    .073,
                    .106,
                    .14,
                    .35,
                    .55,
                    .72,
                    .7,
                    .65,
                    1
                ],
                "fiber-glass-insulation": [
                    .193,
                    .22,
                    .22,
                    .82,
                    .99,
                    .99,
                    .99,
                    .99,
                    1
                ],
                "glass-thin": [
                    .18,
                    .169,
                    .18,
                    .06,
                    .04,
                    .03,
                    .02,
                    .02,
                    .04
                ],
                "glass-thick": [
                    .35,
                    .35,
                    .35,
                    .25,
                    .18,
                    .12,
                    .07,
                    .04,
                    .08
                ],
                grass: [
                    .05,
                    .05,
                    .15,
                    .25,
                    .4,
                    .55,
                    .6,
                    .6,
                    .6
                ],
                "linoleum-on-concrete": [
                    .02,
                    .02,
                    .02,
                    .03,
                    .03,
                    .03,
                    .03,
                    .02,
                    .04
                ],
                marble: [
                    .01,
                    .01,
                    .01,
                    .01,
                    .01,
                    .01,
                    .02,
                    .02,
                    .04
                ],
                metal: [
                    .03,
                    .035,
                    .04,
                    .04,
                    .05,
                    .05,
                    .05,
                    .07,
                    .09
                ],
                "parquet-on-concrete": [
                    .028,
                    .03,
                    .04,
                    .04,
                    .07,
                    .06,
                    .06,
                    .07,
                    .14
                ],
                "plaster-rough": [
                    .017,
                    .018,
                    .02,
                    .03,
                    .04,
                    .05,
                    .04,
                    .03,
                    .06
                ],
                "plaster-smooth": [
                    .011,
                    .012,
                    .013,
                    .015,
                    .02,
                    .03,
                    .04,
                    .05,
                    .1
                ],
                "plywood-panel": [
                    .4,
                    .34,
                    .28,
                    .22,
                    .17,
                    .09,
                    .1,
                    .11,
                    .22
                ],
                "polished-concrete-or-tile": [
                    .008,
                    .008,
                    .01,
                    .01,
                    .015,
                    .02,
                    .02,
                    .02,
                    .04
                ],
                "sheet-rock": [
                    .29,
                    .279,
                    .29,
                    .1,
                    .05,
                    .04,
                    .07,
                    .09,
                    .18
                ],
                "water-or-ice-surface": [
                    .006,
                    .006,
                    .008,
                    .008,
                    .013,
                    .015,
                    .02,
                    .025,
                    .05
                ],
                "wood-ceiling": [
                    .15,
                    .147,
                    .15,
                    .11,
                    .1,
                    .07,
                    .06,
                    .07,
                    .14
                ],
                "wood-panel": [
                    .28,
                    .28,
                    .28,
                    .22,
                    .17,
                    .09,
                    .1,
                    .11,
                    .22
                ],
                uniform: [
                    .5,
                    .5,
                    .5,
                    .5,
                    .5,
                    .5,
                    .5,
                    .5,
                    .5
                ]
            }, i.DEFAULT_ROOM_MATERIALS = {
                left: "transparent",
                right: "transparent",
                front: "transparent",
                back: "transparent",
                down: "transparent",
                up: "transparent"
            }, i.NUMBER_REFLECTION_AVERAGING_BANDS = 3, i.ROOM_STARTING_AVERAGING_BAND = 4, i.ROOM_MIN_VOLUME = 1e-4, i.ROOM_AIR_ABSORPTION_COEFFICIENTS = [
                6e-4,
                6e-4,
                7e-4,
                8e-4,
                .001,
                .0015,
                .0026,
                .006,
                .0207
            ], i.ROOM_EYRING_CORRECTION_COEFFICIENT = 1.38, i.TWO_PI = 6.28318530717959, i.TWENTY_FOUR_LOG10 = 55.2620422318571, i.LOG1000 = 6.90775527898214, i.LOG2_DIV2 = .346573590279973, i.DEGREES_TO_RADIANS = .017453292519943, i.RADIANS_TO_DEGREES = 57.29577951308232, i.EPSILON_FLOAT = 1e-8, i.log = function() {
                window.console.log.apply(window.console, [
                    "%c[ResonanceAudio]%c " + Array.prototype.slice.call(arguments).join(" ") + " %c(@" + performance.now().toFixed(2) + "ms)",
                    "background: #BBDEFB; color: #FF5722; font-weight: 700",
                    "font-weight: 400",
                    "color: #AAA"
                ]);
            }, i.normalizeVector = function(A) {
                let e = Math.sqrt(A[0] * A[0] + A[1] * A[1] + A[2] * A[2]);
                return e > t.EPSILON_FLOAT && (e = 1 / e, A[0] *= e, A[1] *= e, A[2] *= e), A;
            }, i.crossProduct = function(A, t) {
                return [
                    A[1] * t[2] - A[2] * t[1],
                    A[2] * t[0] - A[0] * t[2],
                    A[0] * t[1] - A[1] * t[0]
                ];
            }, A.exports = i;
        },
        function(A, t, e) {
            "use strict";
            function i(A, t) {
                void 0 == t && (t = {}), void 0 == t.ambisonicOrder && (t.ambisonicOrder = s.DEFAULT_AMBISONIC_ORDER), void 0 == t.azimuth && (t.azimuth = s.DEFAULT_AZIMUTH), void 0 == t.elevation && (t.elevation = s.DEFAULT_ELEVATION), void 0 == t.sourceWidth && (t.sourceWidth = s.DEFAULT_SOURCE_WIDTH), this._context = A, this.input = A.createGain(), this._channelGain = [], this._merger = void 0, this.output = A.createGain(), this.setAmbisonicOrder(t.ambisonicOrder), this._azimuth = t.azimuth, this._elevation = t.elevation, this.setSourceWidth(t.sourceWidth);
            } /**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
            const n = e(3), s = e(0);
            i.prototype.setAmbisonicOrder = function(A) {
                this._ambisonicOrder = i.validateAmbisonicOrder(A), this.input.disconnect();
                for(let e = 0; e < this._channelGain.length; e++)this._channelGain[e].disconnect();
                void 0 != this._merger && this._merger.disconnect(), delete this._channelGain, delete this._merger;
                let t = (this._ambisonicOrder + 1) * (this._ambisonicOrder + 1);
                this._merger = this._context.createChannelMerger(t), this._channelGain = new Array(t);
                for(let e = 0; e < t; e++)this._channelGain[e] = this._context.createGain(), this.input.connect(this._channelGain[e]), this._channelGain[e].connect(this._merger, 0, e);
                this._merger.connect(this.output);
            }, i.prototype.setDirection = function(A, t) {
                (void 0 == A || isNaN(A)) && (A = s.DEFAULT_AZIMUTH), (void 0 == t || isNaN(t)) && (t = s.DEFAULT_ELEVATION), this._azimuth = A, this._elevation = t, (A = Math.round(A % 360)) < 0 && (A += 360), t = Math.round(Math.min(90, Math.max(-90, t))) + 90, this._channelGain[0].gain.value = n.MAX_RE_WEIGHTS[this._spreadIndex][0];
                for(let e = 1; e <= this._ambisonicOrder; e++){
                    let i = n.MAX_RE_WEIGHTS[this._spreadIndex][e];
                    for(let s = -e; s <= e; s++){
                        let o = e * e + e + s, r = e * (e + 1) / 2 + Math.abs(s) - 1, a = n.SPHERICAL_HARMONICS[1][t][r];
                        if (0 != s) {
                            let t = n.SPHERICAL_HARMONICS_MAX_ORDER + s - 1;
                            s < 0 && (t = n.SPHERICAL_HARMONICS_MAX_ORDER + s), a *= n.SPHERICAL_HARMONICS[0][A][t];
                        }
                        this._channelGain[o].gain.value = a * i;
                    }
                }
            }, i.prototype.setSourceWidth = function(A) {
                this._spreadIndex = Math.min(359, Math.max(0, Math.round(A))), this.setDirection(this._azimuth, this._elevation);
            }, i.validateAmbisonicOrder = function(A) {
                return isNaN(A) || void 0 == A ? (s.log("Error: Invalid ambisonic order", options.ambisonicOrder, "\nUsing ambisonicOrder=1 instead."), A = 1) : A < 1 ? (s.log("Error: Unable to render ambisonic order", options.ambisonicOrder, "(Min order is 1)", "\nUsing min order instead."), A = 1) : A > n.SPHERICAL_HARMONICS_MAX_ORDER && (s.log("Error: Unable to render ambisonic order", options.ambisonicOrder, "(Max order is", n.SPHERICAL_HARMONICS_MAX_ORDER, ")\nUsing max order instead."), options.ambisonicOrder = n.SPHERICAL_HARMONICS_MAX_ORDER), A;
            }, A.exports = i;
        },
        function(A, t, e) {
            "use strict";
            function i(A, t) {
                void 0 == t && (t = {}), void 0 == t.ambisonicOrder && (t.ambisonicOrder = o.DEFAULT_AMBISONIC_ORDER), void 0 == t.position && (t.position = o.DEFAULT_POSITION.slice()), void 0 == t.forward && (t.forward = o.DEFAULT_FORWARD.slice()), void 0 == t.up && (t.up = o.DEFAULT_UP.slice()), this.position = new Float32Array(3), this._tempMatrix3 = new Float32Array(9), this._ambisonicOrder = s.validateAmbisonicOrder(t.ambisonicOrder), this._context = A, 1 == this._ambisonicOrder ? this._renderer = n.Omnitone.createFOARenderer(A, {}) : this._ambisonicOrder > 1 && (this._renderer = n.Omnitone.createHOARenderer(A, {
                    ambisonicOrder: this._ambisonicOrder
                })), this.input = A.createGain(), this.output = A.createGain(), this.ambisonicOutput = A.createGain();
                let e = this;
                this._renderer.initialize().then(function() {
                    e.input.connect(e._renderer.input), e._ambisonicOrder > 1 ? e._renderer._hoaRotator.output.connect(e.ambisonicOutput) : e._renderer._foaRotator.output.connect(e.ambisonicOutput), e._renderer.output.connect(e.output);
                }), this.setOrientation(t.forward[0], t.forward[1], t.forward[2], t.up[0], t.up[1], t.up[2]);
            } /**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
            const n = e(12), s = e(1), o = e(0);
            i.prototype.setOrientation = function(A, t, e, i, n, s) {
                let r = o.crossProduct([
                    A,
                    t,
                    e
                ], [
                    i,
                    n,
                    s
                ]);
                this._tempMatrix3[0] = r[0], this._tempMatrix3[1] = r[1], this._tempMatrix3[2] = r[2], this._tempMatrix3[3] = i, this._tempMatrix3[4] = n, this._tempMatrix3[5] = s, this._tempMatrix3[6] = A, this._tempMatrix3[7] = t, this._tempMatrix3[8] = e, this._renderer.setRotationMatrix3(this._tempMatrix3);
            }, i.prototype.setFromMatrix = function(A) {
                this._renderer.setRotationMatrix4(A.elements), this.position[0] = A.elements[12], this.position[1] = A.elements[13], this.position[2] = A.elements[14];
            }, A.exports = i;
        },
        function(A, t, e) {
            "use strict";
            t.SPHERICAL_HARMONICS = [
                [
                    [
                        0,
                        0,
                        0,
                        1,
                        1,
                        1
                    ],
                    [
                        .052336,
                        .034899,
                        .017452,
                        .999848,
                        .999391,
                        .99863
                    ],
                    [
                        .104528,
                        .069756,
                        .034899,
                        .999391,
                        .997564,
                        .994522
                    ],
                    [
                        .156434,
                        .104528,
                        .052336,
                        .99863,
                        .994522,
                        .987688
                    ],
                    [
                        .207912,
                        .139173,
                        .069756,
                        .997564,
                        .990268,
                        .978148
                    ],
                    [
                        .258819,
                        .173648,
                        .087156,
                        .996195,
                        .984808,
                        .965926
                    ],
                    [
                        .309017,
                        .207912,
                        .104528,
                        .994522,
                        .978148,
                        .951057
                    ],
                    [
                        .358368,
                        .241922,
                        .121869,
                        .992546,
                        .970296,
                        .93358
                    ],
                    [
                        .406737,
                        .275637,
                        .139173,
                        .990268,
                        .961262,
                        .913545
                    ],
                    [
                        .45399,
                        .309017,
                        .156434,
                        .987688,
                        .951057,
                        .891007
                    ],
                    [
                        .5,
                        .34202,
                        .173648,
                        .984808,
                        .939693,
                        .866025
                    ],
                    [
                        .544639,
                        .374607,
                        .190809,
                        .981627,
                        .927184,
                        .838671
                    ],
                    [
                        .587785,
                        .406737,
                        .207912,
                        .978148,
                        .913545,
                        .809017
                    ],
                    [
                        .62932,
                        .438371,
                        .224951,
                        .97437,
                        .898794,
                        .777146
                    ],
                    [
                        .669131,
                        .469472,
                        .241922,
                        .970296,
                        .882948,
                        .743145
                    ],
                    [
                        .707107,
                        .5,
                        .258819,
                        .965926,
                        .866025,
                        .707107
                    ],
                    [
                        .743145,
                        .529919,
                        .275637,
                        .961262,
                        .848048,
                        .669131
                    ],
                    [
                        .777146,
                        .559193,
                        .292372,
                        .956305,
                        .829038,
                        .62932
                    ],
                    [
                        .809017,
                        .587785,
                        .309017,
                        .951057,
                        .809017,
                        .587785
                    ],
                    [
                        .838671,
                        .615661,
                        .325568,
                        .945519,
                        .788011,
                        .544639
                    ],
                    [
                        .866025,
                        .642788,
                        .34202,
                        .939693,
                        .766044,
                        .5
                    ],
                    [
                        .891007,
                        .669131,
                        .358368,
                        .93358,
                        .743145,
                        .45399
                    ],
                    [
                        .913545,
                        .694658,
                        .374607,
                        .927184,
                        .71934,
                        .406737
                    ],
                    [
                        .93358,
                        .71934,
                        .390731,
                        .920505,
                        .694658,
                        .358368
                    ],
                    [
                        .951057,
                        .743145,
                        .406737,
                        .913545,
                        .669131,
                        .309017
                    ],
                    [
                        .965926,
                        .766044,
                        .422618,
                        .906308,
                        .642788,
                        .258819
                    ],
                    [
                        .978148,
                        .788011,
                        .438371,
                        .898794,
                        .615661,
                        .207912
                    ],
                    [
                        .987688,
                        .809017,
                        .45399,
                        .891007,
                        .587785,
                        .156434
                    ],
                    [
                        .994522,
                        .829038,
                        .469472,
                        .882948,
                        .559193,
                        .104528
                    ],
                    [
                        .99863,
                        .848048,
                        .48481,
                        .87462,
                        .529919,
                        .052336
                    ],
                    [
                        1,
                        .866025,
                        .5,
                        .866025,
                        .5,
                        0
                    ],
                    [
                        .99863,
                        .882948,
                        .515038,
                        .857167,
                        .469472,
                        -0.052336
                    ],
                    [
                        .994522,
                        .898794,
                        .529919,
                        .848048,
                        .438371,
                        -0.104528
                    ],
                    [
                        .987688,
                        .913545,
                        .544639,
                        .838671,
                        .406737,
                        -0.156434
                    ],
                    [
                        .978148,
                        .927184,
                        .559193,
                        .829038,
                        .374607,
                        -0.207912
                    ],
                    [
                        .965926,
                        .939693,
                        .573576,
                        .819152,
                        .34202,
                        -0.258819
                    ],
                    [
                        .951057,
                        .951057,
                        .587785,
                        .809017,
                        .309017,
                        -0.309017
                    ],
                    [
                        .93358,
                        .961262,
                        .601815,
                        .798636,
                        .275637,
                        -0.358368
                    ],
                    [
                        .913545,
                        .970296,
                        .615661,
                        .788011,
                        .241922,
                        -0.406737
                    ],
                    [
                        .891007,
                        .978148,
                        .62932,
                        .777146,
                        .207912,
                        -0.45399
                    ],
                    [
                        .866025,
                        .984808,
                        .642788,
                        .766044,
                        .173648,
                        -0.5
                    ],
                    [
                        .838671,
                        .990268,
                        .656059,
                        .75471,
                        .139173,
                        -0.544639
                    ],
                    [
                        .809017,
                        .994522,
                        .669131,
                        .743145,
                        .104528,
                        -0.587785
                    ],
                    [
                        .777146,
                        .997564,
                        .681998,
                        .731354,
                        .069756,
                        -0.62932
                    ],
                    [
                        .743145,
                        .999391,
                        .694658,
                        .71934,
                        .034899,
                        -0.669131
                    ],
                    [
                        .707107,
                        1,
                        .707107,
                        .707107,
                        0,
                        -0.707107
                    ],
                    [
                        .669131,
                        .999391,
                        .71934,
                        .694658,
                        -0.034899,
                        -0.743145
                    ],
                    [
                        .62932,
                        .997564,
                        .731354,
                        .681998,
                        -0.069756,
                        -0.777146
                    ],
                    [
                        .587785,
                        .994522,
                        .743145,
                        .669131,
                        -0.104528,
                        -0.809017
                    ],
                    [
                        .544639,
                        .990268,
                        .75471,
                        .656059,
                        -0.139173,
                        -0.838671
                    ],
                    [
                        .5,
                        .984808,
                        .766044,
                        .642788,
                        -0.173648,
                        -0.866025
                    ],
                    [
                        .45399,
                        .978148,
                        .777146,
                        .62932,
                        -0.207912,
                        -0.891007
                    ],
                    [
                        .406737,
                        .970296,
                        .788011,
                        .615661,
                        -0.241922,
                        -0.913545
                    ],
                    [
                        .358368,
                        .961262,
                        .798636,
                        .601815,
                        -0.275637,
                        -0.93358
                    ],
                    [
                        .309017,
                        .951057,
                        .809017,
                        .587785,
                        -0.309017,
                        -0.951057
                    ],
                    [
                        .258819,
                        .939693,
                        .819152,
                        .573576,
                        -0.34202,
                        -0.965926
                    ],
                    [
                        .207912,
                        .927184,
                        .829038,
                        .559193,
                        -0.374607,
                        -0.978148
                    ],
                    [
                        .156434,
                        .913545,
                        .838671,
                        .544639,
                        -0.406737,
                        -0.987688
                    ],
                    [
                        .104528,
                        .898794,
                        .848048,
                        .529919,
                        -0.438371,
                        -0.994522
                    ],
                    [
                        .052336,
                        .882948,
                        .857167,
                        .515038,
                        -0.469472,
                        -0.99863
                    ],
                    [
                        0,
                        .866025,
                        .866025,
                        .5,
                        -0.5,
                        -1
                    ],
                    [
                        -0.052336,
                        .848048,
                        .87462,
                        .48481,
                        -0.529919,
                        -0.99863
                    ],
                    [
                        -0.104528,
                        .829038,
                        .882948,
                        .469472,
                        -0.559193,
                        -0.994522
                    ],
                    [
                        -0.156434,
                        .809017,
                        .891007,
                        .45399,
                        -0.587785,
                        -0.987688
                    ],
                    [
                        -0.207912,
                        .788011,
                        .898794,
                        .438371,
                        -0.615661,
                        -0.978148
                    ],
                    [
                        -0.258819,
                        .766044,
                        .906308,
                        .422618,
                        -0.642788,
                        -0.965926
                    ],
                    [
                        -0.309017,
                        .743145,
                        .913545,
                        .406737,
                        -0.669131,
                        -0.951057
                    ],
                    [
                        -0.358368,
                        .71934,
                        .920505,
                        .390731,
                        -0.694658,
                        -0.93358
                    ],
                    [
                        -0.406737,
                        .694658,
                        .927184,
                        .374607,
                        -0.71934,
                        -0.913545
                    ],
                    [
                        -0.45399,
                        .669131,
                        .93358,
                        .358368,
                        -0.743145,
                        -0.891007
                    ],
                    [
                        -0.5,
                        .642788,
                        .939693,
                        .34202,
                        -0.766044,
                        -0.866025
                    ],
                    [
                        -0.544639,
                        .615661,
                        .945519,
                        .325568,
                        -0.788011,
                        -0.838671
                    ],
                    [
                        -0.587785,
                        .587785,
                        .951057,
                        .309017,
                        -0.809017,
                        -0.809017
                    ],
                    [
                        -0.62932,
                        .559193,
                        .956305,
                        .292372,
                        -0.829038,
                        -0.777146
                    ],
                    [
                        -0.669131,
                        .529919,
                        .961262,
                        .275637,
                        -0.848048,
                        -0.743145
                    ],
                    [
                        -0.707107,
                        .5,
                        .965926,
                        .258819,
                        -0.866025,
                        -0.707107
                    ],
                    [
                        -0.743145,
                        .469472,
                        .970296,
                        .241922,
                        -0.882948,
                        -0.669131
                    ],
                    [
                        -0.777146,
                        .438371,
                        .97437,
                        .224951,
                        -0.898794,
                        -0.62932
                    ],
                    [
                        -0.809017,
                        .406737,
                        .978148,
                        .207912,
                        -0.913545,
                        -0.587785
                    ],
                    [
                        -0.838671,
                        .374607,
                        .981627,
                        .190809,
                        -0.927184,
                        -0.544639
                    ],
                    [
                        -0.866025,
                        .34202,
                        .984808,
                        .173648,
                        -0.939693,
                        -0.5
                    ],
                    [
                        -0.891007,
                        .309017,
                        .987688,
                        .156434,
                        -0.951057,
                        -0.45399
                    ],
                    [
                        -0.913545,
                        .275637,
                        .990268,
                        .139173,
                        -0.961262,
                        -0.406737
                    ],
                    [
                        -0.93358,
                        .241922,
                        .992546,
                        .121869,
                        -0.970296,
                        -0.358368
                    ],
                    [
                        -0.951057,
                        .207912,
                        .994522,
                        .104528,
                        -0.978148,
                        -0.309017
                    ],
                    [
                        -0.965926,
                        .173648,
                        .996195,
                        .087156,
                        -0.984808,
                        -0.258819
                    ],
                    [
                        -0.978148,
                        .139173,
                        .997564,
                        .069756,
                        -0.990268,
                        -0.207912
                    ],
                    [
                        -0.987688,
                        .104528,
                        .99863,
                        .052336,
                        -0.994522,
                        -0.156434
                    ],
                    [
                        -0.994522,
                        .069756,
                        .999391,
                        .034899,
                        -0.997564,
                        -0.104528
                    ],
                    [
                        -0.99863,
                        .034899,
                        .999848,
                        .017452,
                        -0.999391,
                        -0.052336
                    ],
                    [
                        -1,
                        0,
                        1,
                        0,
                        -1,
                        -0
                    ],
                    [
                        -0.99863,
                        -0.034899,
                        .999848,
                        -0.017452,
                        -0.999391,
                        .052336
                    ],
                    [
                        -0.994522,
                        -0.069756,
                        .999391,
                        -0.034899,
                        -0.997564,
                        .104528
                    ],
                    [
                        -0.987688,
                        -0.104528,
                        .99863,
                        -0.052336,
                        -0.994522,
                        .156434
                    ],
                    [
                        -0.978148,
                        -0.139173,
                        .997564,
                        -0.069756,
                        -0.990268,
                        .207912
                    ],
                    [
                        -0.965926,
                        -0.173648,
                        .996195,
                        -0.087156,
                        -0.984808,
                        .258819
                    ],
                    [
                        -0.951057,
                        -0.207912,
                        .994522,
                        -0.104528,
                        -0.978148,
                        .309017
                    ],
                    [
                        -0.93358,
                        -0.241922,
                        .992546,
                        -0.121869,
                        -0.970296,
                        .358368
                    ],
                    [
                        -0.913545,
                        -0.275637,
                        .990268,
                        -0.139173,
                        -0.961262,
                        .406737
                    ],
                    [
                        -0.891007,
                        -0.309017,
                        .987688,
                        -0.156434,
                        -0.951057,
                        .45399
                    ],
                    [
                        -0.866025,
                        -0.34202,
                        .984808,
                        -0.173648,
                        -0.939693,
                        .5
                    ],
                    [
                        -0.838671,
                        -0.374607,
                        .981627,
                        -0.190809,
                        -0.927184,
                        .544639
                    ],
                    [
                        -0.809017,
                        -0.406737,
                        .978148,
                        -0.207912,
                        -0.913545,
                        .587785
                    ],
                    [
                        -0.777146,
                        -0.438371,
                        .97437,
                        -0.224951,
                        -0.898794,
                        .62932
                    ],
                    [
                        -0.743145,
                        -0.469472,
                        .970296,
                        -0.241922,
                        -0.882948,
                        .669131
                    ],
                    [
                        -0.707107,
                        -0.5,
                        .965926,
                        -0.258819,
                        -0.866025,
                        .707107
                    ],
                    [
                        -0.669131,
                        -0.529919,
                        .961262,
                        -0.275637,
                        -0.848048,
                        .743145
                    ],
                    [
                        -0.62932,
                        -0.559193,
                        .956305,
                        -0.292372,
                        -0.829038,
                        .777146
                    ],
                    [
                        -0.587785,
                        -0.587785,
                        .951057,
                        -0.309017,
                        -0.809017,
                        .809017
                    ],
                    [
                        -0.544639,
                        -0.615661,
                        .945519,
                        -0.325568,
                        -0.788011,
                        .838671
                    ],
                    [
                        -0.5,
                        -0.642788,
                        .939693,
                        -0.34202,
                        -0.766044,
                        .866025
                    ],
                    [
                        -0.45399,
                        -0.669131,
                        .93358,
                        -0.358368,
                        -0.743145,
                        .891007
                    ],
                    [
                        -0.406737,
                        -0.694658,
                        .927184,
                        -0.374607,
                        -0.71934,
                        .913545
                    ],
                    [
                        -0.358368,
                        -0.71934,
                        .920505,
                        -0.390731,
                        -0.694658,
                        .93358
                    ],
                    [
                        -0.309017,
                        -0.743145,
                        .913545,
                        -0.406737,
                        -0.669131,
                        .951057
                    ],
                    [
                        -0.258819,
                        -0.766044,
                        .906308,
                        -0.422618,
                        -0.642788,
                        .965926
                    ],
                    [
                        -0.207912,
                        -0.788011,
                        .898794,
                        -0.438371,
                        -0.615661,
                        .978148
                    ],
                    [
                        -0.156434,
                        -0.809017,
                        .891007,
                        -0.45399,
                        -0.587785,
                        .987688
                    ],
                    [
                        -0.104528,
                        -0.829038,
                        .882948,
                        -0.469472,
                        -0.559193,
                        .994522
                    ],
                    [
                        -0.052336,
                        -0.848048,
                        .87462,
                        -0.48481,
                        -0.529919,
                        .99863
                    ],
                    [
                        -0,
                        -0.866025,
                        .866025,
                        -0.5,
                        -0.5,
                        1
                    ],
                    [
                        .052336,
                        -0.882948,
                        .857167,
                        -0.515038,
                        -0.469472,
                        .99863
                    ],
                    [
                        .104528,
                        -0.898794,
                        .848048,
                        -0.529919,
                        -0.438371,
                        .994522
                    ],
                    [
                        .156434,
                        -0.913545,
                        .838671,
                        -0.544639,
                        -0.406737,
                        .987688
                    ],
                    [
                        .207912,
                        -0.927184,
                        .829038,
                        -0.559193,
                        -0.374607,
                        .978148
                    ],
                    [
                        .258819,
                        -0.939693,
                        .819152,
                        -0.573576,
                        -0.34202,
                        .965926
                    ],
                    [
                        .309017,
                        -0.951057,
                        .809017,
                        -0.587785,
                        -0.309017,
                        .951057
                    ],
                    [
                        .358368,
                        -0.961262,
                        .798636,
                        -0.601815,
                        -0.275637,
                        .93358
                    ],
                    [
                        .406737,
                        -0.970296,
                        .788011,
                        -0.615661,
                        -0.241922,
                        .913545
                    ],
                    [
                        .45399,
                        -0.978148,
                        .777146,
                        -0.62932,
                        -0.207912,
                        .891007
                    ],
                    [
                        .5,
                        -0.984808,
                        .766044,
                        -0.642788,
                        -0.173648,
                        .866025
                    ],
                    [
                        .544639,
                        -0.990268,
                        .75471,
                        -0.656059,
                        -0.139173,
                        .838671
                    ],
                    [
                        .587785,
                        -0.994522,
                        .743145,
                        -0.669131,
                        -0.104528,
                        .809017
                    ],
                    [
                        .62932,
                        -0.997564,
                        .731354,
                        -0.681998,
                        -0.069756,
                        .777146
                    ],
                    [
                        .669131,
                        -0.999391,
                        .71934,
                        -0.694658,
                        -0.034899,
                        .743145
                    ],
                    [
                        .707107,
                        -1,
                        .707107,
                        -0.707107,
                        -0,
                        .707107
                    ],
                    [
                        .743145,
                        -0.999391,
                        .694658,
                        -0.71934,
                        .034899,
                        .669131
                    ],
                    [
                        .777146,
                        -0.997564,
                        .681998,
                        -0.731354,
                        .069756,
                        .62932
                    ],
                    [
                        .809017,
                        -0.994522,
                        .669131,
                        -0.743145,
                        .104528,
                        .587785
                    ],
                    [
                        .838671,
                        -0.990268,
                        .656059,
                        -0.75471,
                        .139173,
                        .544639
                    ],
                    [
                        .866025,
                        -0.984808,
                        .642788,
                        -0.766044,
                        .173648,
                        .5
                    ],
                    [
                        .891007,
                        -0.978148,
                        .62932,
                        -0.777146,
                        .207912,
                        .45399
                    ],
                    [
                        .913545,
                        -0.970296,
                        .615661,
                        -0.788011,
                        .241922,
                        .406737
                    ],
                    [
                        .93358,
                        -0.961262,
                        .601815,
                        -0.798636,
                        .275637,
                        .358368
                    ],
                    [
                        .951057,
                        -0.951057,
                        .587785,
                        -0.809017,
                        .309017,
                        .309017
                    ],
                    [
                        .965926,
                        -0.939693,
                        .573576,
                        -0.819152,
                        .34202,
                        .258819
                    ],
                    [
                        .978148,
                        -0.927184,
                        .559193,
                        -0.829038,
                        .374607,
                        .207912
                    ],
                    [
                        .987688,
                        -0.913545,
                        .544639,
                        -0.838671,
                        .406737,
                        .156434
                    ],
                    [
                        .994522,
                        -0.898794,
                        .529919,
                        -0.848048,
                        .438371,
                        .104528
                    ],
                    [
                        .99863,
                        -0.882948,
                        .515038,
                        -0.857167,
                        .469472,
                        .052336
                    ],
                    [
                        1,
                        -0.866025,
                        .5,
                        -0.866025,
                        .5,
                        0
                    ],
                    [
                        .99863,
                        -0.848048,
                        .48481,
                        -0.87462,
                        .529919,
                        -0.052336
                    ],
                    [
                        .994522,
                        -0.829038,
                        .469472,
                        -0.882948,
                        .559193,
                        -0.104528
                    ],
                    [
                        .987688,
                        -0.809017,
                        .45399,
                        -0.891007,
                        .587785,
                        -0.156434
                    ],
                    [
                        .978148,
                        -0.788011,
                        .438371,
                        -0.898794,
                        .615661,
                        -0.207912
                    ],
                    [
                        .965926,
                        -0.766044,
                        .422618,
                        -0.906308,
                        .642788,
                        -0.258819
                    ],
                    [
                        .951057,
                        -0.743145,
                        .406737,
                        -0.913545,
                        .669131,
                        -0.309017
                    ],
                    [
                        .93358,
                        -0.71934,
                        .390731,
                        -0.920505,
                        .694658,
                        -0.358368
                    ],
                    [
                        .913545,
                        -0.694658,
                        .374607,
                        -0.927184,
                        .71934,
                        -0.406737
                    ],
                    [
                        .891007,
                        -0.669131,
                        .358368,
                        -0.93358,
                        .743145,
                        -0.45399
                    ],
                    [
                        .866025,
                        -0.642788,
                        .34202,
                        -0.939693,
                        .766044,
                        -0.5
                    ],
                    [
                        .838671,
                        -0.615661,
                        .325568,
                        -0.945519,
                        .788011,
                        -0.544639
                    ],
                    [
                        .809017,
                        -0.587785,
                        .309017,
                        -0.951057,
                        .809017,
                        -0.587785
                    ],
                    [
                        .777146,
                        -0.559193,
                        .292372,
                        -0.956305,
                        .829038,
                        -0.62932
                    ],
                    [
                        .743145,
                        -0.529919,
                        .275637,
                        -0.961262,
                        .848048,
                        -0.669131
                    ],
                    [
                        .707107,
                        -0.5,
                        .258819,
                        -0.965926,
                        .866025,
                        -0.707107
                    ],
                    [
                        .669131,
                        -0.469472,
                        .241922,
                        -0.970296,
                        .882948,
                        -0.743145
                    ],
                    [
                        .62932,
                        -0.438371,
                        .224951,
                        -0.97437,
                        .898794,
                        -0.777146
                    ],
                    [
                        .587785,
                        -0.406737,
                        .207912,
                        -0.978148,
                        .913545,
                        -0.809017
                    ],
                    [
                        .544639,
                        -0.374607,
                        .190809,
                        -0.981627,
                        .927184,
                        -0.838671
                    ],
                    [
                        .5,
                        -0.34202,
                        .173648,
                        -0.984808,
                        .939693,
                        -0.866025
                    ],
                    [
                        .45399,
                        -0.309017,
                        .156434,
                        -0.987688,
                        .951057,
                        -0.891007
                    ],
                    [
                        .406737,
                        -0.275637,
                        .139173,
                        -0.990268,
                        .961262,
                        -0.913545
                    ],
                    [
                        .358368,
                        -0.241922,
                        .121869,
                        -0.992546,
                        .970296,
                        -0.93358
                    ],
                    [
                        .309017,
                        -0.207912,
                        .104528,
                        -0.994522,
                        .978148,
                        -0.951057
                    ],
                    [
                        .258819,
                        -0.173648,
                        .087156,
                        -0.996195,
                        .984808,
                        -0.965926
                    ],
                    [
                        .207912,
                        -0.139173,
                        .069756,
                        -0.997564,
                        .990268,
                        -0.978148
                    ],
                    [
                        .156434,
                        -0.104528,
                        .052336,
                        -0.99863,
                        .994522,
                        -0.987688
                    ],
                    [
                        .104528,
                        -0.069756,
                        .034899,
                        -0.999391,
                        .997564,
                        -0.994522
                    ],
                    [
                        .052336,
                        -0.034899,
                        .017452,
                        -0.999848,
                        .999391,
                        -0.99863
                    ],
                    [
                        0,
                        -0,
                        0,
                        -1,
                        1,
                        -1
                    ],
                    [
                        -0.052336,
                        .034899,
                        -0.017452,
                        -0.999848,
                        .999391,
                        -0.99863
                    ],
                    [
                        -0.104528,
                        .069756,
                        -0.034899,
                        -0.999391,
                        .997564,
                        -0.994522
                    ],
                    [
                        -0.156434,
                        .104528,
                        -0.052336,
                        -0.99863,
                        .994522,
                        -0.987688
                    ],
                    [
                        -0.207912,
                        .139173,
                        -0.069756,
                        -0.997564,
                        .990268,
                        -0.978148
                    ],
                    [
                        -0.258819,
                        .173648,
                        -0.087156,
                        -0.996195,
                        .984808,
                        -0.965926
                    ],
                    [
                        -0.309017,
                        .207912,
                        -0.104528,
                        -0.994522,
                        .978148,
                        -0.951057
                    ],
                    [
                        -0.358368,
                        .241922,
                        -0.121869,
                        -0.992546,
                        .970296,
                        -0.93358
                    ],
                    [
                        -0.406737,
                        .275637,
                        -0.139173,
                        -0.990268,
                        .961262,
                        -0.913545
                    ],
                    [
                        -0.45399,
                        .309017,
                        -0.156434,
                        -0.987688,
                        .951057,
                        -0.891007
                    ],
                    [
                        -0.5,
                        .34202,
                        -0.173648,
                        -0.984808,
                        .939693,
                        -0.866025
                    ],
                    [
                        -0.544639,
                        .374607,
                        -0.190809,
                        -0.981627,
                        .927184,
                        -0.838671
                    ],
                    [
                        -0.587785,
                        .406737,
                        -0.207912,
                        -0.978148,
                        .913545,
                        -0.809017
                    ],
                    [
                        -0.62932,
                        .438371,
                        -0.224951,
                        -0.97437,
                        .898794,
                        -0.777146
                    ],
                    [
                        -0.669131,
                        .469472,
                        -0.241922,
                        -0.970296,
                        .882948,
                        -0.743145
                    ],
                    [
                        -0.707107,
                        .5,
                        -0.258819,
                        -0.965926,
                        .866025,
                        -0.707107
                    ],
                    [
                        -0.743145,
                        .529919,
                        -0.275637,
                        -0.961262,
                        .848048,
                        -0.669131
                    ],
                    [
                        -0.777146,
                        .559193,
                        -0.292372,
                        -0.956305,
                        .829038,
                        -0.62932
                    ],
                    [
                        -0.809017,
                        .587785,
                        -0.309017,
                        -0.951057,
                        .809017,
                        -0.587785
                    ],
                    [
                        -0.838671,
                        .615661,
                        -0.325568,
                        -0.945519,
                        .788011,
                        -0.544639
                    ],
                    [
                        -0.866025,
                        .642788,
                        -0.34202,
                        -0.939693,
                        .766044,
                        -0.5
                    ],
                    [
                        -0.891007,
                        .669131,
                        -0.358368,
                        -0.93358,
                        .743145,
                        -0.45399
                    ],
                    [
                        -0.913545,
                        .694658,
                        -0.374607,
                        -0.927184,
                        .71934,
                        -0.406737
                    ],
                    [
                        -0.93358,
                        .71934,
                        -0.390731,
                        -0.920505,
                        .694658,
                        -0.358368
                    ],
                    [
                        -0.951057,
                        .743145,
                        -0.406737,
                        -0.913545,
                        .669131,
                        -0.309017
                    ],
                    [
                        -0.965926,
                        .766044,
                        -0.422618,
                        -0.906308,
                        .642788,
                        -0.258819
                    ],
                    [
                        -0.978148,
                        .788011,
                        -0.438371,
                        -0.898794,
                        .615661,
                        -0.207912
                    ],
                    [
                        -0.987688,
                        .809017,
                        -0.45399,
                        -0.891007,
                        .587785,
                        -0.156434
                    ],
                    [
                        -0.994522,
                        .829038,
                        -0.469472,
                        -0.882948,
                        .559193,
                        -0.104528
                    ],
                    [
                        -0.99863,
                        .848048,
                        -0.48481,
                        -0.87462,
                        .529919,
                        -0.052336
                    ],
                    [
                        -1,
                        .866025,
                        -0.5,
                        -0.866025,
                        .5,
                        0
                    ],
                    [
                        -0.99863,
                        .882948,
                        -0.515038,
                        -0.857167,
                        .469472,
                        .052336
                    ],
                    [
                        -0.994522,
                        .898794,
                        -0.529919,
                        -0.848048,
                        .438371,
                        .104528
                    ],
                    [
                        -0.987688,
                        .913545,
                        -0.544639,
                        -0.838671,
                        .406737,
                        .156434
                    ],
                    [
                        -0.978148,
                        .927184,
                        -0.559193,
                        -0.829038,
                        .374607,
                        .207912
                    ],
                    [
                        -0.965926,
                        .939693,
                        -0.573576,
                        -0.819152,
                        .34202,
                        .258819
                    ],
                    [
                        -0.951057,
                        .951057,
                        -0.587785,
                        -0.809017,
                        .309017,
                        .309017
                    ],
                    [
                        -0.93358,
                        .961262,
                        -0.601815,
                        -0.798636,
                        .275637,
                        .358368
                    ],
                    [
                        -0.913545,
                        .970296,
                        -0.615661,
                        -0.788011,
                        .241922,
                        .406737
                    ],
                    [
                        -0.891007,
                        .978148,
                        -0.62932,
                        -0.777146,
                        .207912,
                        .45399
                    ],
                    [
                        -0.866025,
                        .984808,
                        -0.642788,
                        -0.766044,
                        .173648,
                        .5
                    ],
                    [
                        -0.838671,
                        .990268,
                        -0.656059,
                        -0.75471,
                        .139173,
                        .544639
                    ],
                    [
                        -0.809017,
                        .994522,
                        -0.669131,
                        -0.743145,
                        .104528,
                        .587785
                    ],
                    [
                        -0.777146,
                        .997564,
                        -0.681998,
                        -0.731354,
                        .069756,
                        .62932
                    ],
                    [
                        -0.743145,
                        .999391,
                        -0.694658,
                        -0.71934,
                        .034899,
                        .669131
                    ],
                    [
                        -0.707107,
                        1,
                        -0.707107,
                        -0.707107,
                        0,
                        .707107
                    ],
                    [
                        -0.669131,
                        .999391,
                        -0.71934,
                        -0.694658,
                        -0.034899,
                        .743145
                    ],
                    [
                        -0.62932,
                        .997564,
                        -0.731354,
                        -0.681998,
                        -0.069756,
                        .777146
                    ],
                    [
                        -0.587785,
                        .994522,
                        -0.743145,
                        -0.669131,
                        -0.104528,
                        .809017
                    ],
                    [
                        -0.544639,
                        .990268,
                        -0.75471,
                        -0.656059,
                        -0.139173,
                        .838671
                    ],
                    [
                        -0.5,
                        .984808,
                        -0.766044,
                        -0.642788,
                        -0.173648,
                        .866025
                    ],
                    [
                        -0.45399,
                        .978148,
                        -0.777146,
                        -0.62932,
                        -0.207912,
                        .891007
                    ],
                    [
                        -0.406737,
                        .970296,
                        -0.788011,
                        -0.615661,
                        -0.241922,
                        .913545
                    ],
                    [
                        -0.358368,
                        .961262,
                        -0.798636,
                        -0.601815,
                        -0.275637,
                        .93358
                    ],
                    [
                        -0.309017,
                        .951057,
                        -0.809017,
                        -0.587785,
                        -0.309017,
                        .951057
                    ],
                    [
                        -0.258819,
                        .939693,
                        -0.819152,
                        -0.573576,
                        -0.34202,
                        .965926
                    ],
                    [
                        -0.207912,
                        .927184,
                        -0.829038,
                        -0.559193,
                        -0.374607,
                        .978148
                    ],
                    [
                        -0.156434,
                        .913545,
                        -0.838671,
                        -0.544639,
                        -0.406737,
                        .987688
                    ],
                    [
                        -0.104528,
                        .898794,
                        -0.848048,
                        -0.529919,
                        -0.438371,
                        .994522
                    ],
                    [
                        -0.052336,
                        .882948,
                        -0.857167,
                        -0.515038,
                        -0.469472,
                        .99863
                    ],
                    [
                        -0,
                        .866025,
                        -0.866025,
                        -0.5,
                        -0.5,
                        1
                    ],
                    [
                        .052336,
                        .848048,
                        -0.87462,
                        -0.48481,
                        -0.529919,
                        .99863
                    ],
                    [
                        .104528,
                        .829038,
                        -0.882948,
                        -0.469472,
                        -0.559193,
                        .994522
                    ],
                    [
                        .156434,
                        .809017,
                        -0.891007,
                        -0.45399,
                        -0.587785,
                        .987688
                    ],
                    [
                        .207912,
                        .788011,
                        -0.898794,
                        -0.438371,
                        -0.615661,
                        .978148
                    ],
                    [
                        .258819,
                        .766044,
                        -0.906308,
                        -0.422618,
                        -0.642788,
                        .965926
                    ],
                    [
                        .309017,
                        .743145,
                        -0.913545,
                        -0.406737,
                        -0.669131,
                        .951057
                    ],
                    [
                        .358368,
                        .71934,
                        -0.920505,
                        -0.390731,
                        -0.694658,
                        .93358
                    ],
                    [
                        .406737,
                        .694658,
                        -0.927184,
                        -0.374607,
                        -0.71934,
                        .913545
                    ],
                    [
                        .45399,
                        .669131,
                        -0.93358,
                        -0.358368,
                        -0.743145,
                        .891007
                    ],
                    [
                        .5,
                        .642788,
                        -0.939693,
                        -0.34202,
                        -0.766044,
                        .866025
                    ],
                    [
                        .544639,
                        .615661,
                        -0.945519,
                        -0.325568,
                        -0.788011,
                        .838671
                    ],
                    [
                        .587785,
                        .587785,
                        -0.951057,
                        -0.309017,
                        -0.809017,
                        .809017
                    ],
                    [
                        .62932,
                        .559193,
                        -0.956305,
                        -0.292372,
                        -0.829038,
                        .777146
                    ],
                    [
                        .669131,
                        .529919,
                        -0.961262,
                        -0.275637,
                        -0.848048,
                        .743145
                    ],
                    [
                        .707107,
                        .5,
                        -0.965926,
                        -0.258819,
                        -0.866025,
                        .707107
                    ],
                    [
                        .743145,
                        .469472,
                        -0.970296,
                        -0.241922,
                        -0.882948,
                        .669131
                    ],
                    [
                        .777146,
                        .438371,
                        -0.97437,
                        -0.224951,
                        -0.898794,
                        .62932
                    ],
                    [
                        .809017,
                        .406737,
                        -0.978148,
                        -0.207912,
                        -0.913545,
                        .587785
                    ],
                    [
                        .838671,
                        .374607,
                        -0.981627,
                        -0.190809,
                        -0.927184,
                        .544639
                    ],
                    [
                        .866025,
                        .34202,
                        -0.984808,
                        -0.173648,
                        -0.939693,
                        .5
                    ],
                    [
                        .891007,
                        .309017,
                        -0.987688,
                        -0.156434,
                        -0.951057,
                        .45399
                    ],
                    [
                        .913545,
                        .275637,
                        -0.990268,
                        -0.139173,
                        -0.961262,
                        .406737
                    ],
                    [
                        .93358,
                        .241922,
                        -0.992546,
                        -0.121869,
                        -0.970296,
                        .358368
                    ],
                    [
                        .951057,
                        .207912,
                        -0.994522,
                        -0.104528,
                        -0.978148,
                        .309017
                    ],
                    [
                        .965926,
                        .173648,
                        -0.996195,
                        -0.087156,
                        -0.984808,
                        .258819
                    ],
                    [
                        .978148,
                        .139173,
                        -0.997564,
                        -0.069756,
                        -0.990268,
                        .207912
                    ],
                    [
                        .987688,
                        .104528,
                        -0.99863,
                        -0.052336,
                        -0.994522,
                        .156434
                    ],
                    [
                        .994522,
                        .069756,
                        -0.999391,
                        -0.034899,
                        -0.997564,
                        .104528
                    ],
                    [
                        .99863,
                        .034899,
                        -0.999848,
                        -0.017452,
                        -0.999391,
                        .052336
                    ],
                    [
                        1,
                        0,
                        -1,
                        -0,
                        -1,
                        0
                    ],
                    [
                        .99863,
                        -0.034899,
                        -0.999848,
                        .017452,
                        -0.999391,
                        -0.052336
                    ],
                    [
                        .994522,
                        -0.069756,
                        -0.999391,
                        .034899,
                        -0.997564,
                        -0.104528
                    ],
                    [
                        .987688,
                        -0.104528,
                        -0.99863,
                        .052336,
                        -0.994522,
                        -0.156434
                    ],
                    [
                        .978148,
                        -0.139173,
                        -0.997564,
                        .069756,
                        -0.990268,
                        -0.207912
                    ],
                    [
                        .965926,
                        -0.173648,
                        -0.996195,
                        .087156,
                        -0.984808,
                        -0.258819
                    ],
                    [
                        .951057,
                        -0.207912,
                        -0.994522,
                        .104528,
                        -0.978148,
                        -0.309017
                    ],
                    [
                        .93358,
                        -0.241922,
                        -0.992546,
                        .121869,
                        -0.970296,
                        -0.358368
                    ],
                    [
                        .913545,
                        -0.275637,
                        -0.990268,
                        .139173,
                        -0.961262,
                        -0.406737
                    ],
                    [
                        .891007,
                        -0.309017,
                        -0.987688,
                        .156434,
                        -0.951057,
                        -0.45399
                    ],
                    [
                        .866025,
                        -0.34202,
                        -0.984808,
                        .173648,
                        -0.939693,
                        -0.5
                    ],
                    [
                        .838671,
                        -0.374607,
                        -0.981627,
                        .190809,
                        -0.927184,
                        -0.544639
                    ],
                    [
                        .809017,
                        -0.406737,
                        -0.978148,
                        .207912,
                        -0.913545,
                        -0.587785
                    ],
                    [
                        .777146,
                        -0.438371,
                        -0.97437,
                        .224951,
                        -0.898794,
                        -0.62932
                    ],
                    [
                        .743145,
                        -0.469472,
                        -0.970296,
                        .241922,
                        -0.882948,
                        -0.669131
                    ],
                    [
                        .707107,
                        -0.5,
                        -0.965926,
                        .258819,
                        -0.866025,
                        -0.707107
                    ],
                    [
                        .669131,
                        -0.529919,
                        -0.961262,
                        .275637,
                        -0.848048,
                        -0.743145
                    ],
                    [
                        .62932,
                        -0.559193,
                        -0.956305,
                        .292372,
                        -0.829038,
                        -0.777146
                    ],
                    [
                        .587785,
                        -0.587785,
                        -0.951057,
                        .309017,
                        -0.809017,
                        -0.809017
                    ],
                    [
                        .544639,
                        -0.615661,
                        -0.945519,
                        .325568,
                        -0.788011,
                        -0.838671
                    ],
                    [
                        .5,
                        -0.642788,
                        -0.939693,
                        .34202,
                        -0.766044,
                        -0.866025
                    ],
                    [
                        .45399,
                        -0.669131,
                        -0.93358,
                        .358368,
                        -0.743145,
                        -0.891007
                    ],
                    [
                        .406737,
                        -0.694658,
                        -0.927184,
                        .374607,
                        -0.71934,
                        -0.913545
                    ],
                    [
                        .358368,
                        -0.71934,
                        -0.920505,
                        .390731,
                        -0.694658,
                        -0.93358
                    ],
                    [
                        .309017,
                        -0.743145,
                        -0.913545,
                        .406737,
                        -0.669131,
                        -0.951057
                    ],
                    [
                        .258819,
                        -0.766044,
                        -0.906308,
                        .422618,
                        -0.642788,
                        -0.965926
                    ],
                    [
                        .207912,
                        -0.788011,
                        -0.898794,
                        .438371,
                        -0.615661,
                        -0.978148
                    ],
                    [
                        .156434,
                        -0.809017,
                        -0.891007,
                        .45399,
                        -0.587785,
                        -0.987688
                    ],
                    [
                        .104528,
                        -0.829038,
                        -0.882948,
                        .469472,
                        -0.559193,
                        -0.994522
                    ],
                    [
                        .052336,
                        -0.848048,
                        -0.87462,
                        .48481,
                        -0.529919,
                        -0.99863
                    ],
                    [
                        0,
                        -0.866025,
                        -0.866025,
                        .5,
                        -0.5,
                        -1
                    ],
                    [
                        -0.052336,
                        -0.882948,
                        -0.857167,
                        .515038,
                        -0.469472,
                        -0.99863
                    ],
                    [
                        -0.104528,
                        -0.898794,
                        -0.848048,
                        .529919,
                        -0.438371,
                        -0.994522
                    ],
                    [
                        -0.156434,
                        -0.913545,
                        -0.838671,
                        .544639,
                        -0.406737,
                        -0.987688
                    ],
                    [
                        -0.207912,
                        -0.927184,
                        -0.829038,
                        .559193,
                        -0.374607,
                        -0.978148
                    ],
                    [
                        -0.258819,
                        -0.939693,
                        -0.819152,
                        .573576,
                        -0.34202,
                        -0.965926
                    ],
                    [
                        -0.309017,
                        -0.951057,
                        -0.809017,
                        .587785,
                        -0.309017,
                        -0.951057
                    ],
                    [
                        -0.358368,
                        -0.961262,
                        -0.798636,
                        .601815,
                        -0.275637,
                        -0.93358
                    ],
                    [
                        -0.406737,
                        -0.970296,
                        -0.788011,
                        .615661,
                        -0.241922,
                        -0.913545
                    ],
                    [
                        -0.45399,
                        -0.978148,
                        -0.777146,
                        .62932,
                        -0.207912,
                        -0.891007
                    ],
                    [
                        -0.5,
                        -0.984808,
                        -0.766044,
                        .642788,
                        -0.173648,
                        -0.866025
                    ],
                    [
                        -0.544639,
                        -0.990268,
                        -0.75471,
                        .656059,
                        -0.139173,
                        -0.838671
                    ],
                    [
                        -0.587785,
                        -0.994522,
                        -0.743145,
                        .669131,
                        -0.104528,
                        -0.809017
                    ],
                    [
                        -0.62932,
                        -0.997564,
                        -0.731354,
                        .681998,
                        -0.069756,
                        -0.777146
                    ],
                    [
                        -0.669131,
                        -0.999391,
                        -0.71934,
                        .694658,
                        -0.034899,
                        -0.743145
                    ],
                    [
                        -0.707107,
                        -1,
                        -0.707107,
                        .707107,
                        -0,
                        -0.707107
                    ],
                    [
                        -0.743145,
                        -0.999391,
                        -0.694658,
                        .71934,
                        .034899,
                        -0.669131
                    ],
                    [
                        -0.777146,
                        -0.997564,
                        -0.681998,
                        .731354,
                        .069756,
                        -0.62932
                    ],
                    [
                        -0.809017,
                        -0.994522,
                        -0.669131,
                        .743145,
                        .104528,
                        -0.587785
                    ],
                    [
                        -0.838671,
                        -0.990268,
                        -0.656059,
                        .75471,
                        .139173,
                        -0.544639
                    ],
                    [
                        -0.866025,
                        -0.984808,
                        -0.642788,
                        .766044,
                        .173648,
                        -0.5
                    ],
                    [
                        -0.891007,
                        -0.978148,
                        -0.62932,
                        .777146,
                        .207912,
                        -0.45399
                    ],
                    [
                        -0.913545,
                        -0.970296,
                        -0.615661,
                        .788011,
                        .241922,
                        -0.406737
                    ],
                    [
                        -0.93358,
                        -0.961262,
                        -0.601815,
                        .798636,
                        .275637,
                        -0.358368
                    ],
                    [
                        -0.951057,
                        -0.951057,
                        -0.587785,
                        .809017,
                        .309017,
                        -0.309017
                    ],
                    [
                        -0.965926,
                        -0.939693,
                        -0.573576,
                        .819152,
                        .34202,
                        -0.258819
                    ],
                    [
                        -0.978148,
                        -0.927184,
                        -0.559193,
                        .829038,
                        .374607,
                        -0.207912
                    ],
                    [
                        -0.987688,
                        -0.913545,
                        -0.544639,
                        .838671,
                        .406737,
                        -0.156434
                    ],
                    [
                        -0.994522,
                        -0.898794,
                        -0.529919,
                        .848048,
                        .438371,
                        -0.104528
                    ],
                    [
                        -0.99863,
                        -0.882948,
                        -0.515038,
                        .857167,
                        .469472,
                        -0.052336
                    ],
                    [
                        -1,
                        -0.866025,
                        -0.5,
                        .866025,
                        .5,
                        -0
                    ],
                    [
                        -0.99863,
                        -0.848048,
                        -0.48481,
                        .87462,
                        .529919,
                        .052336
                    ],
                    [
                        -0.994522,
                        -0.829038,
                        -0.469472,
                        .882948,
                        .559193,
                        .104528
                    ],
                    [
                        -0.987688,
                        -0.809017,
                        -0.45399,
                        .891007,
                        .587785,
                        .156434
                    ],
                    [
                        -0.978148,
                        -0.788011,
                        -0.438371,
                        .898794,
                        .615661,
                        .207912
                    ],
                    [
                        -0.965926,
                        -0.766044,
                        -0.422618,
                        .906308,
                        .642788,
                        .258819
                    ],
                    [
                        -0.951057,
                        -0.743145,
                        -0.406737,
                        .913545,
                        .669131,
                        .309017
                    ],
                    [
                        -0.93358,
                        -0.71934,
                        -0.390731,
                        .920505,
                        .694658,
                        .358368
                    ],
                    [
                        -0.913545,
                        -0.694658,
                        -0.374607,
                        .927184,
                        .71934,
                        .406737
                    ],
                    [
                        -0.891007,
                        -0.669131,
                        -0.358368,
                        .93358,
                        .743145,
                        .45399
                    ],
                    [
                        -0.866025,
                        -0.642788,
                        -0.34202,
                        .939693,
                        .766044,
                        .5
                    ],
                    [
                        -0.838671,
                        -0.615661,
                        -0.325568,
                        .945519,
                        .788011,
                        .544639
                    ],
                    [
                        -0.809017,
                        -0.587785,
                        -0.309017,
                        .951057,
                        .809017,
                        .587785
                    ],
                    [
                        -0.777146,
                        -0.559193,
                        -0.292372,
                        .956305,
                        .829038,
                        .62932
                    ],
                    [
                        -0.743145,
                        -0.529919,
                        -0.275637,
                        .961262,
                        .848048,
                        .669131
                    ],
                    [
                        -0.707107,
                        -0.5,
                        -0.258819,
                        .965926,
                        .866025,
                        .707107
                    ],
                    [
                        -0.669131,
                        -0.469472,
                        -0.241922,
                        .970296,
                        .882948,
                        .743145
                    ],
                    [
                        -0.62932,
                        -0.438371,
                        -0.224951,
                        .97437,
                        .898794,
                        .777146
                    ],
                    [
                        -0.587785,
                        -0.406737,
                        -0.207912,
                        .978148,
                        .913545,
                        .809017
                    ],
                    [
                        -0.544639,
                        -0.374607,
                        -0.190809,
                        .981627,
                        .927184,
                        .838671
                    ],
                    [
                        -0.5,
                        -0.34202,
                        -0.173648,
                        .984808,
                        .939693,
                        .866025
                    ],
                    [
                        -0.45399,
                        -0.309017,
                        -0.156434,
                        .987688,
                        .951057,
                        .891007
                    ],
                    [
                        -0.406737,
                        -0.275637,
                        -0.139173,
                        .990268,
                        .961262,
                        .913545
                    ],
                    [
                        -0.358368,
                        -0.241922,
                        -0.121869,
                        .992546,
                        .970296,
                        .93358
                    ],
                    [
                        -0.309017,
                        -0.207912,
                        -0.104528,
                        .994522,
                        .978148,
                        .951057
                    ],
                    [
                        -0.258819,
                        -0.173648,
                        -0.087156,
                        .996195,
                        .984808,
                        .965926
                    ],
                    [
                        -0.207912,
                        -0.139173,
                        -0.069756,
                        .997564,
                        .990268,
                        .978148
                    ],
                    [
                        -0.156434,
                        -0.104528,
                        -0.052336,
                        .99863,
                        .994522,
                        .987688
                    ],
                    [
                        -0.104528,
                        -0.069756,
                        -0.034899,
                        .999391,
                        .997564,
                        .994522
                    ],
                    [
                        -0.052336,
                        -0.034899,
                        -0.017452,
                        .999848,
                        .999391,
                        .99863
                    ]
                ],
                [
                    [
                        -1,
                        -0,
                        1,
                        -0,
                        0,
                        -1,
                        -0,
                        0,
                        -0
                    ],
                    [
                        -0.999848,
                        .017452,
                        .999543,
                        -0.030224,
                        264e-6,
                        -0.999086,
                        .042733,
                        -0.00059,
                        4e-6
                    ],
                    [
                        -0.999391,
                        .034899,
                        .998173,
                        -0.060411,
                        .001055,
                        -0.996348,
                        .085356,
                        -0.002357,
                        34e-6
                    ],
                    [
                        -0.99863,
                        .052336,
                        .995891,
                        -0.090524,
                        .002372,
                        -0.991791,
                        .127757,
                        -0.005297,
                        113e-6
                    ],
                    [
                        -0.997564,
                        .069756,
                        .992701,
                        -0.120527,
                        .004214,
                        -0.985429,
                        .169828,
                        -0.0094,
                        268e-6
                    ],
                    [
                        -0.996195,
                        .087156,
                        .988606,
                        -0.150384,
                        .006578,
                        -0.977277,
                        .21146,
                        -0.014654,
                        523e-6
                    ],
                    [
                        -0.994522,
                        .104528,
                        .983611,
                        -0.180057,
                        .009462,
                        -0.967356,
                        .252544,
                        -0.021043,
                        903e-6
                    ],
                    [
                        -0.992546,
                        .121869,
                        .977722,
                        -0.209511,
                        .012862,
                        -0.955693,
                        .292976,
                        -0.028547,
                        .001431
                    ],
                    [
                        -0.990268,
                        .139173,
                        .970946,
                        -0.238709,
                        .016774,
                        -0.942316,
                        .332649,
                        -0.037143,
                        .002131
                    ],
                    [
                        -0.987688,
                        .156434,
                        .963292,
                        -0.267617,
                        .021193,
                        -0.927262,
                        .371463,
                        -0.046806,
                        .003026
                    ],
                    [
                        -0.984808,
                        .173648,
                        .954769,
                        -0.296198,
                        .026114,
                        -0.910569,
                        .409317,
                        -0.057505,
                        .00414
                    ],
                    [
                        -0.981627,
                        .190809,
                        .945388,
                        -0.324419,
                        .03153,
                        -0.892279,
                        .446114,
                        -0.069209,
                        .005492
                    ],
                    [
                        -0.978148,
                        .207912,
                        .935159,
                        -0.352244,
                        .037436,
                        -0.872441,
                        .481759,
                        -0.08188,
                        .007105
                    ],
                    [
                        -0.97437,
                        .224951,
                        .924096,
                        -0.379641,
                        .043823,
                        -0.851105,
                        .516162,
                        -0.095481,
                        .008999
                    ],
                    [
                        -0.970296,
                        .241922,
                        .912211,
                        -0.406574,
                        .050685,
                        -0.828326,
                        .549233,
                        -0.109969,
                        .011193
                    ],
                    [
                        -0.965926,
                        .258819,
                        .899519,
                        -0.433013,
                        .058013,
                        -0.804164,
                        .580889,
                        -0.1253,
                        .013707
                    ],
                    [
                        -0.961262,
                        .275637,
                        .886036,
                        -0.458924,
                        .065797,
                        -0.77868,
                        .61105,
                        -0.141427,
                        .016556
                    ],
                    [
                        -0.956305,
                        .292372,
                        .871778,
                        -0.484275,
                        .074029,
                        -0.75194,
                        .639639,
                        -0.158301,
                        .019758
                    ],
                    [
                        -0.951057,
                        .309017,
                        .856763,
                        -0.509037,
                        .082698,
                        -0.724012,
                        .666583,
                        -0.175868,
                        .023329
                    ],
                    [
                        -0.945519,
                        .325568,
                        .841008,
                        -0.533178,
                        .091794,
                        -0.694969,
                        .691816,
                        -0.194075,
                        .027281
                    ],
                    [
                        -0.939693,
                        .34202,
                        .824533,
                        -0.55667,
                        .101306,
                        -0.664885,
                        .715274,
                        -0.212865,
                        .03163
                    ],
                    [
                        -0.93358,
                        .358368,
                        .807359,
                        -0.579484,
                        .111222,
                        -0.633837,
                        .736898,
                        -0.23218,
                        .036385
                    ],
                    [
                        -0.927184,
                        .374607,
                        .789505,
                        -0.601592,
                        .121529,
                        -0.601904,
                        .756637,
                        -0.25196,
                        .041559
                    ],
                    [
                        -0.920505,
                        .390731,
                        .770994,
                        -0.622967,
                        .132217,
                        -0.569169,
                        .774442,
                        -0.272143,
                        .04716
                    ],
                    [
                        -0.913545,
                        .406737,
                        .751848,
                        -0.643582,
                        .143271,
                        -0.535715,
                        .79027,
                        -0.292666,
                        .053196
                    ],
                    [
                        -0.906308,
                        .422618,
                        .732091,
                        -0.663414,
                        .154678,
                        -0.501627,
                        .804083,
                        -0.313464,
                        .059674
                    ],
                    [
                        -0.898794,
                        .438371,
                        .711746,
                        -0.682437,
                        .166423,
                        -0.466993,
                        .81585,
                        -0.334472,
                        .066599
                    ],
                    [
                        -0.891007,
                        .45399,
                        .690839,
                        -0.700629,
                        .178494,
                        -0.431899,
                        .825544,
                        -0.355623,
                        .073974
                    ],
                    [
                        -0.882948,
                        .469472,
                        .669395,
                        -0.717968,
                        .190875,
                        -0.396436,
                        .833145,
                        -0.376851,
                        .081803
                    ],
                    [
                        -0.87462,
                        .48481,
                        .647439,
                        -0.734431,
                        .203551,
                        -0.360692,
                        .838638,
                        -0.398086,
                        .090085
                    ],
                    [
                        -0.866025,
                        .5,
                        .625,
                        -0.75,
                        .216506,
                        -0.32476,
                        .842012,
                        -0.419263,
                        .098821
                    ],
                    [
                        -0.857167,
                        .515038,
                        .602104,
                        -0.764655,
                        .229726,
                        -0.288728,
                        .843265,
                        -0.440311,
                        .108009
                    ],
                    [
                        -0.848048,
                        .529919,
                        .578778,
                        -0.778378,
                        .243192,
                        -0.252688,
                        .842399,
                        -0.461164,
                        .117644
                    ],
                    [
                        -0.838671,
                        .544639,
                        .555052,
                        -0.791154,
                        .256891,
                        -0.21673,
                        .839422,
                        -0.481753,
                        .127722
                    ],
                    [
                        -0.829038,
                        .559193,
                        .530955,
                        -0.802965,
                        .270803,
                        -0.180944,
                        .834347,
                        -0.502011,
                        .138237
                    ],
                    [
                        -0.819152,
                        .573576,
                        .506515,
                        -0.813798,
                        .284914,
                        -0.14542,
                        .827194,
                        -0.521871,
                        .149181
                    ],
                    [
                        -0.809017,
                        .587785,
                        .481763,
                        -0.823639,
                        .299204,
                        -0.110246,
                        .817987,
                        -0.541266,
                        .160545
                    ],
                    [
                        -0.798636,
                        .601815,
                        .456728,
                        -0.832477,
                        .313658,
                        -0.075508,
                        .806757,
                        -0.560132,
                        .172317
                    ],
                    [
                        -0.788011,
                        .615661,
                        .431441,
                        -0.840301,
                        .328257,
                        -0.041294,
                        .793541,
                        -0.578405,
                        .184487
                    ],
                    [
                        -0.777146,
                        .62932,
                        .405934,
                        -0.847101,
                        .342984,
                        -0.007686,
                        .778379,
                        -0.596021,
                        .19704
                    ],
                    [
                        -0.766044,
                        .642788,
                        .380236,
                        -0.852869,
                        .357821,
                        .025233,
                        .761319,
                        -0.612921,
                        .209963
                    ],
                    [
                        -0.75471,
                        .656059,
                        .35438,
                        -0.857597,
                        .372749,
                        .057383,
                        .742412,
                        -0.629044,
                        .223238
                    ],
                    [
                        -0.743145,
                        .669131,
                        .328396,
                        -0.861281,
                        .387751,
                        .088686,
                        .721714,
                        -0.644334,
                        .23685
                    ],
                    [
                        -0.731354,
                        .681998,
                        .302317,
                        -0.863916,
                        .402807,
                        .119068,
                        .699288,
                        -0.658734,
                        .250778
                    ],
                    [
                        -0.71934,
                        .694658,
                        .276175,
                        -0.865498,
                        .417901,
                        .148454,
                        .675199,
                        -0.67219,
                        .265005
                    ],
                    [
                        -0.707107,
                        .707107,
                        .25,
                        -0.866025,
                        .433013,
                        .176777,
                        .649519,
                        -0.684653,
                        .279508
                    ],
                    [
                        -0.694658,
                        .71934,
                        .223825,
                        -0.865498,
                        .448125,
                        .203969,
                        .622322,
                        -0.696073,
                        .294267
                    ],
                    [
                        -0.681998,
                        .731354,
                        .197683,
                        -0.863916,
                        .463218,
                        .229967,
                        .593688,
                        -0.706405,
                        .309259
                    ],
                    [
                        -0.669131,
                        .743145,
                        .171604,
                        -0.861281,
                        .478275,
                        .254712,
                        .5637,
                        -0.715605,
                        .324459
                    ],
                    [
                        -0.656059,
                        .75471,
                        .14562,
                        -0.857597,
                        .493276,
                        .278147,
                        .532443,
                        -0.723633,
                        .339844
                    ],
                    [
                        -0.642788,
                        .766044,
                        .119764,
                        -0.852869,
                        .508205,
                        .300221,
                        .500009,
                        -0.730451,
                        .355387
                    ],
                    [
                        -0.62932,
                        .777146,
                        .094066,
                        -0.847101,
                        .523041,
                        .320884,
                        .46649,
                        -0.736025,
                        .371063
                    ],
                    [
                        -0.615661,
                        .788011,
                        .068559,
                        -0.840301,
                        .537768,
                        .340093,
                        .431982,
                        -0.740324,
                        .386845
                    ],
                    [
                        -0.601815,
                        .798636,
                        .043272,
                        -0.832477,
                        .552367,
                        .357807,
                        .396584,
                        -0.74332,
                        .402704
                    ],
                    [
                        -0.587785,
                        .809017,
                        .018237,
                        -0.823639,
                        .566821,
                        .373991,
                        .360397,
                        -0.744989,
                        .418613
                    ],
                    [
                        -0.573576,
                        .819152,
                        -0.006515,
                        -0.813798,
                        .581112,
                        .388612,
                        .323524,
                        -0.745308,
                        .434544
                    ],
                    [
                        -0.559193,
                        .829038,
                        -0.030955,
                        -0.802965,
                        .595222,
                        .401645,
                        .286069,
                        -0.744262,
                        .450467
                    ],
                    [
                        -0.544639,
                        .838671,
                        -0.055052,
                        -0.791154,
                        .609135,
                        .413066,
                        .24814,
                        -0.741835,
                        .466352
                    ],
                    [
                        -0.529919,
                        .848048,
                        -0.078778,
                        -0.778378,
                        .622833,
                        .422856,
                        .209843,
                        -0.738017,
                        .482171
                    ],
                    [
                        -0.515038,
                        .857167,
                        -0.102104,
                        -0.764655,
                        .6363,
                        .431004,
                        .171288,
                        -0.732801,
                        .497894
                    ],
                    [
                        -0.5,
                        .866025,
                        -0.125,
                        -0.75,
                        .649519,
                        .4375,
                        .132583,
                        -0.726184,
                        .51349
                    ],
                    [
                        -0.48481,
                        .87462,
                        -0.147439,
                        -0.734431,
                        .662474,
                        .44234,
                        .093837,
                        -0.718167,
                        .528929
                    ],
                    [
                        -0.469472,
                        .882948,
                        -0.169395,
                        -0.717968,
                        .67515,
                        .445524,
                        .05516,
                        -0.708753,
                        .544183
                    ],
                    [
                        -0.45399,
                        .891007,
                        -0.190839,
                        -0.700629,
                        .687531,
                        .447059,
                        .016662,
                        -0.69795,
                        .55922
                    ],
                    [
                        -0.438371,
                        .898794,
                        -0.211746,
                        -0.682437,
                        .699602,
                        .446953,
                        -0.02155,
                        -0.685769,
                        .574011
                    ],
                    [
                        -0.422618,
                        .906308,
                        -0.232091,
                        -0.663414,
                        .711348,
                        .445222,
                        -0.059368,
                        -0.672226,
                        .588528
                    ],
                    [
                        -0.406737,
                        .913545,
                        -0.251848,
                        -0.643582,
                        .722755,
                        .441884,
                        -0.096684,
                        -0.657339,
                        .602741
                    ],
                    [
                        -0.390731,
                        .920505,
                        -0.270994,
                        -0.622967,
                        .733809,
                        .436964,
                        -0.133395,
                        -0.64113,
                        .616621
                    ],
                    [
                        -0.374607,
                        .927184,
                        -0.289505,
                        -0.601592,
                        .744496,
                        .430488,
                        -0.169397,
                        -0.623624,
                        .630141
                    ],
                    [
                        -0.358368,
                        .93358,
                        -0.307359,
                        -0.579484,
                        .754804,
                        .422491,
                        -0.204589,
                        -0.604851,
                        .643273
                    ],
                    [
                        -0.34202,
                        .939693,
                        -0.324533,
                        -0.55667,
                        .76472,
                        .413008,
                        -0.238872,
                        -0.584843,
                        .65599
                    ],
                    [
                        -0.325568,
                        .945519,
                        -0.341008,
                        -0.533178,
                        .774231,
                        .402081,
                        -0.27215,
                        -0.563635,
                        .668267
                    ],
                    [
                        -0.309017,
                        .951057,
                        -0.356763,
                        -0.509037,
                        .783327,
                        .389754,
                        -0.304329,
                        -0.541266,
                        .680078
                    ],
                    [
                        -0.292372,
                        .956305,
                        -0.371778,
                        -0.484275,
                        .791997,
                        .376077,
                        -0.335319,
                        -0.517778,
                        .691399
                    ],
                    [
                        -0.275637,
                        .961262,
                        -0.386036,
                        -0.458924,
                        .800228,
                        .361102,
                        -0.365034,
                        -0.493216,
                        .702207
                    ],
                    [
                        -0.258819,
                        .965926,
                        -0.399519,
                        -0.433013,
                        .808013,
                        .344885,
                        -0.393389,
                        -0.467627,
                        .712478
                    ],
                    [
                        -0.241922,
                        .970296,
                        -0.412211,
                        -0.406574,
                        .81534,
                        .327486,
                        -0.420306,
                        -0.441061,
                        .722191
                    ],
                    [
                        -0.224951,
                        .97437,
                        -0.424096,
                        -0.379641,
                        .822202,
                        .308969,
                        -0.445709,
                        -0.413572,
                        .731327
                    ],
                    [
                        -0.207912,
                        .978148,
                        -0.435159,
                        -0.352244,
                        .828589,
                        .289399,
                        -0.469527,
                        -0.385215,
                        .739866
                    ],
                    [
                        -0.190809,
                        .981627,
                        -0.445388,
                        -0.324419,
                        .834495,
                        .268846,
                        -0.491693,
                        -0.356047,
                        .74779
                    ],
                    [
                        -0.173648,
                        .984808,
                        -0.454769,
                        -0.296198,
                        .839912,
                        .247382,
                        -0.512145,
                        -0.326129,
                        .755082
                    ],
                    [
                        -0.156434,
                        .987688,
                        -0.463292,
                        -0.267617,
                        .844832,
                        .225081,
                        -0.530827,
                        -0.295521,
                        .761728
                    ],
                    [
                        -0.139173,
                        .990268,
                        -0.470946,
                        -0.238709,
                        .849251,
                        .20202,
                        -0.547684,
                        -0.264287,
                        .767712
                    ],
                    [
                        -0.121869,
                        .992546,
                        -0.477722,
                        -0.209511,
                        .853163,
                        .178279,
                        -0.562672,
                        -0.232494,
                        .773023
                    ],
                    [
                        -0.104528,
                        .994522,
                        -0.483611,
                        -0.180057,
                        .856563,
                        .153937,
                        -0.575747,
                        -0.200207,
                        .777648
                    ],
                    [
                        -0.087156,
                        .996195,
                        -0.488606,
                        -0.150384,
                        .859447,
                        .129078,
                        -0.586872,
                        -0.167494,
                        .781579
                    ],
                    [
                        -0.069756,
                        .997564,
                        -0.492701,
                        -0.120527,
                        .861811,
                        .103786,
                        -0.596018,
                        -0.134426,
                        .784806
                    ],
                    [
                        -0.052336,
                        .99863,
                        -0.495891,
                        -0.090524,
                        .863653,
                        .078146,
                        -0.603158,
                        -0.101071,
                        .787324
                    ],
                    [
                        -0.034899,
                        .999391,
                        -0.498173,
                        -0.060411,
                        .864971,
                        .052243,
                        -0.608272,
                        -0.0675,
                        .789126
                    ],
                    [
                        -0.017452,
                        .999848,
                        -0.499543,
                        -0.030224,
                        .865762,
                        .026165,
                        -0.611347,
                        -0.033786,
                        .790208
                    ],
                    [
                        0,
                        1,
                        -0.5,
                        0,
                        .866025,
                        -0,
                        -0.612372,
                        0,
                        .790569
                    ],
                    [
                        .017452,
                        .999848,
                        -0.499543,
                        .030224,
                        .865762,
                        -0.026165,
                        -0.611347,
                        .033786,
                        .790208
                    ],
                    [
                        .034899,
                        .999391,
                        -0.498173,
                        .060411,
                        .864971,
                        -0.052243,
                        -0.608272,
                        .0675,
                        .789126
                    ],
                    [
                        .052336,
                        .99863,
                        -0.495891,
                        .090524,
                        .863653,
                        -0.078146,
                        -0.603158,
                        .101071,
                        .787324
                    ],
                    [
                        .069756,
                        .997564,
                        -0.492701,
                        .120527,
                        .861811,
                        -0.103786,
                        -0.596018,
                        .134426,
                        .784806
                    ],
                    [
                        .087156,
                        .996195,
                        -0.488606,
                        .150384,
                        .859447,
                        -0.129078,
                        -0.586872,
                        .167494,
                        .781579
                    ],
                    [
                        .104528,
                        .994522,
                        -0.483611,
                        .180057,
                        .856563,
                        -0.153937,
                        -0.575747,
                        .200207,
                        .777648
                    ],
                    [
                        .121869,
                        .992546,
                        -0.477722,
                        .209511,
                        .853163,
                        -0.178279,
                        -0.562672,
                        .232494,
                        .773023
                    ],
                    [
                        .139173,
                        .990268,
                        -0.470946,
                        .238709,
                        .849251,
                        -0.20202,
                        -0.547684,
                        .264287,
                        .767712
                    ],
                    [
                        .156434,
                        .987688,
                        -0.463292,
                        .267617,
                        .844832,
                        -0.225081,
                        -0.530827,
                        .295521,
                        .761728
                    ],
                    [
                        .173648,
                        .984808,
                        -0.454769,
                        .296198,
                        .839912,
                        -0.247382,
                        -0.512145,
                        .326129,
                        .755082
                    ],
                    [
                        .190809,
                        .981627,
                        -0.445388,
                        .324419,
                        .834495,
                        -0.268846,
                        -0.491693,
                        .356047,
                        .74779
                    ],
                    [
                        .207912,
                        .978148,
                        -0.435159,
                        .352244,
                        .828589,
                        -0.289399,
                        -0.469527,
                        .385215,
                        .739866
                    ],
                    [
                        .224951,
                        .97437,
                        -0.424096,
                        .379641,
                        .822202,
                        -0.308969,
                        -0.445709,
                        .413572,
                        .731327
                    ],
                    [
                        .241922,
                        .970296,
                        -0.412211,
                        .406574,
                        .81534,
                        -0.327486,
                        -0.420306,
                        .441061,
                        .722191
                    ],
                    [
                        .258819,
                        .965926,
                        -0.399519,
                        .433013,
                        .808013,
                        -0.344885,
                        -0.393389,
                        .467627,
                        .712478
                    ],
                    [
                        .275637,
                        .961262,
                        -0.386036,
                        .458924,
                        .800228,
                        -0.361102,
                        -0.365034,
                        .493216,
                        .702207
                    ],
                    [
                        .292372,
                        .956305,
                        -0.371778,
                        .484275,
                        .791997,
                        -0.376077,
                        -0.335319,
                        .517778,
                        .691399
                    ],
                    [
                        .309017,
                        .951057,
                        -0.356763,
                        .509037,
                        .783327,
                        -0.389754,
                        -0.304329,
                        .541266,
                        .680078
                    ],
                    [
                        .325568,
                        .945519,
                        -0.341008,
                        .533178,
                        .774231,
                        -0.402081,
                        -0.27215,
                        .563635,
                        .668267
                    ],
                    [
                        .34202,
                        .939693,
                        -0.324533,
                        .55667,
                        .76472,
                        -0.413008,
                        -0.238872,
                        .584843,
                        .65599
                    ],
                    [
                        .358368,
                        .93358,
                        -0.307359,
                        .579484,
                        .754804,
                        -0.422491,
                        -0.204589,
                        .604851,
                        .643273
                    ],
                    [
                        .374607,
                        .927184,
                        -0.289505,
                        .601592,
                        .744496,
                        -0.430488,
                        -0.169397,
                        .623624,
                        .630141
                    ],
                    [
                        .390731,
                        .920505,
                        -0.270994,
                        .622967,
                        .733809,
                        -0.436964,
                        -0.133395,
                        .64113,
                        .616621
                    ],
                    [
                        .406737,
                        .913545,
                        -0.251848,
                        .643582,
                        .722755,
                        -0.441884,
                        -0.096684,
                        .657339,
                        .602741
                    ],
                    [
                        .422618,
                        .906308,
                        -0.232091,
                        .663414,
                        .711348,
                        -0.445222,
                        -0.059368,
                        .672226,
                        .588528
                    ],
                    [
                        .438371,
                        .898794,
                        -0.211746,
                        .682437,
                        .699602,
                        -0.446953,
                        -0.02155,
                        .685769,
                        .574011
                    ],
                    [
                        .45399,
                        .891007,
                        -0.190839,
                        .700629,
                        .687531,
                        -0.447059,
                        .016662,
                        .69795,
                        .55922
                    ],
                    [
                        .469472,
                        .882948,
                        -0.169395,
                        .717968,
                        .67515,
                        -0.445524,
                        .05516,
                        .708753,
                        .544183
                    ],
                    [
                        .48481,
                        .87462,
                        -0.147439,
                        .734431,
                        .662474,
                        -0.44234,
                        .093837,
                        .718167,
                        .528929
                    ],
                    [
                        .5,
                        .866025,
                        -0.125,
                        .75,
                        .649519,
                        -0.4375,
                        .132583,
                        .726184,
                        .51349
                    ],
                    [
                        .515038,
                        .857167,
                        -0.102104,
                        .764655,
                        .6363,
                        -0.431004,
                        .171288,
                        .732801,
                        .497894
                    ],
                    [
                        .529919,
                        .848048,
                        -0.078778,
                        .778378,
                        .622833,
                        -0.422856,
                        .209843,
                        .738017,
                        .482171
                    ],
                    [
                        .544639,
                        .838671,
                        -0.055052,
                        .791154,
                        .609135,
                        -0.413066,
                        .24814,
                        .741835,
                        .466352
                    ],
                    [
                        .559193,
                        .829038,
                        -0.030955,
                        .802965,
                        .595222,
                        -0.401645,
                        .286069,
                        .744262,
                        .450467
                    ],
                    [
                        .573576,
                        .819152,
                        -0.006515,
                        .813798,
                        .581112,
                        -0.388612,
                        .323524,
                        .745308,
                        .434544
                    ],
                    [
                        .587785,
                        .809017,
                        .018237,
                        .823639,
                        .566821,
                        -0.373991,
                        .360397,
                        .744989,
                        .418613
                    ],
                    [
                        .601815,
                        .798636,
                        .043272,
                        .832477,
                        .552367,
                        -0.357807,
                        .396584,
                        .74332,
                        .402704
                    ],
                    [
                        .615661,
                        .788011,
                        .068559,
                        .840301,
                        .537768,
                        -0.340093,
                        .431982,
                        .740324,
                        .386845
                    ],
                    [
                        .62932,
                        .777146,
                        .094066,
                        .847101,
                        .523041,
                        -0.320884,
                        .46649,
                        .736025,
                        .371063
                    ],
                    [
                        .642788,
                        .766044,
                        .119764,
                        .852869,
                        .508205,
                        -0.300221,
                        .500009,
                        .730451,
                        .355387
                    ],
                    [
                        .656059,
                        .75471,
                        .14562,
                        .857597,
                        .493276,
                        -0.278147,
                        .532443,
                        .723633,
                        .339844
                    ],
                    [
                        .669131,
                        .743145,
                        .171604,
                        .861281,
                        .478275,
                        -0.254712,
                        .5637,
                        .715605,
                        .324459
                    ],
                    [
                        .681998,
                        .731354,
                        .197683,
                        .863916,
                        .463218,
                        -0.229967,
                        .593688,
                        .706405,
                        .309259
                    ],
                    [
                        .694658,
                        .71934,
                        .223825,
                        .865498,
                        .448125,
                        -0.203969,
                        .622322,
                        .696073,
                        .294267
                    ],
                    [
                        .707107,
                        .707107,
                        .25,
                        .866025,
                        .433013,
                        -0.176777,
                        .649519,
                        .684653,
                        .279508
                    ],
                    [
                        .71934,
                        .694658,
                        .276175,
                        .865498,
                        .417901,
                        -0.148454,
                        .675199,
                        .67219,
                        .265005
                    ],
                    [
                        .731354,
                        .681998,
                        .302317,
                        .863916,
                        .402807,
                        -0.119068,
                        .699288,
                        .658734,
                        .250778
                    ],
                    [
                        .743145,
                        .669131,
                        .328396,
                        .861281,
                        .387751,
                        -0.088686,
                        .721714,
                        .644334,
                        .23685
                    ],
                    [
                        .75471,
                        .656059,
                        .35438,
                        .857597,
                        .372749,
                        -0.057383,
                        .742412,
                        .629044,
                        .223238
                    ],
                    [
                        .766044,
                        .642788,
                        .380236,
                        .852869,
                        .357821,
                        -0.025233,
                        .761319,
                        .612921,
                        .209963
                    ],
                    [
                        .777146,
                        .62932,
                        .405934,
                        .847101,
                        .342984,
                        .007686,
                        .778379,
                        .596021,
                        .19704
                    ],
                    [
                        .788011,
                        .615661,
                        .431441,
                        .840301,
                        .328257,
                        .041294,
                        .793541,
                        .578405,
                        .184487
                    ],
                    [
                        .798636,
                        .601815,
                        .456728,
                        .832477,
                        .313658,
                        .075508,
                        .806757,
                        .560132,
                        .172317
                    ],
                    [
                        .809017,
                        .587785,
                        .481763,
                        .823639,
                        .299204,
                        .110246,
                        .817987,
                        .541266,
                        .160545
                    ],
                    [
                        .819152,
                        .573576,
                        .506515,
                        .813798,
                        .284914,
                        .14542,
                        .827194,
                        .521871,
                        .149181
                    ],
                    [
                        .829038,
                        .559193,
                        .530955,
                        .802965,
                        .270803,
                        .180944,
                        .834347,
                        .502011,
                        .138237
                    ],
                    [
                        .838671,
                        .544639,
                        .555052,
                        .791154,
                        .256891,
                        .21673,
                        .839422,
                        .481753,
                        .127722
                    ],
                    [
                        .848048,
                        .529919,
                        .578778,
                        .778378,
                        .243192,
                        .252688,
                        .842399,
                        .461164,
                        .117644
                    ],
                    [
                        .857167,
                        .515038,
                        .602104,
                        .764655,
                        .229726,
                        .288728,
                        .843265,
                        .440311,
                        .108009
                    ],
                    [
                        .866025,
                        .5,
                        .625,
                        .75,
                        .216506,
                        .32476,
                        .842012,
                        .419263,
                        .098821
                    ],
                    [
                        .87462,
                        .48481,
                        .647439,
                        .734431,
                        .203551,
                        .360692,
                        .838638,
                        .398086,
                        .090085
                    ],
                    [
                        .882948,
                        .469472,
                        .669395,
                        .717968,
                        .190875,
                        .396436,
                        .833145,
                        .376851,
                        .081803
                    ],
                    [
                        .891007,
                        .45399,
                        .690839,
                        .700629,
                        .178494,
                        .431899,
                        .825544,
                        .355623,
                        .073974
                    ],
                    [
                        .898794,
                        .438371,
                        .711746,
                        .682437,
                        .166423,
                        .466993,
                        .81585,
                        .334472,
                        .066599
                    ],
                    [
                        .906308,
                        .422618,
                        .732091,
                        .663414,
                        .154678,
                        .501627,
                        .804083,
                        .313464,
                        .059674
                    ],
                    [
                        .913545,
                        .406737,
                        .751848,
                        .643582,
                        .143271,
                        .535715,
                        .79027,
                        .292666,
                        .053196
                    ],
                    [
                        .920505,
                        .390731,
                        .770994,
                        .622967,
                        .132217,
                        .569169,
                        .774442,
                        .272143,
                        .04716
                    ],
                    [
                        .927184,
                        .374607,
                        .789505,
                        .601592,
                        .121529,
                        .601904,
                        .756637,
                        .25196,
                        .041559
                    ],
                    [
                        .93358,
                        .358368,
                        .807359,
                        .579484,
                        .111222,
                        .633837,
                        .736898,
                        .23218,
                        .036385
                    ],
                    [
                        .939693,
                        .34202,
                        .824533,
                        .55667,
                        .101306,
                        .664885,
                        .715274,
                        .212865,
                        .03163
                    ],
                    [
                        .945519,
                        .325568,
                        .841008,
                        .533178,
                        .091794,
                        .694969,
                        .691816,
                        .194075,
                        .027281
                    ],
                    [
                        .951057,
                        .309017,
                        .856763,
                        .509037,
                        .082698,
                        .724012,
                        .666583,
                        .175868,
                        .023329
                    ],
                    [
                        .956305,
                        .292372,
                        .871778,
                        .484275,
                        .074029,
                        .75194,
                        .639639,
                        .158301,
                        .019758
                    ],
                    [
                        .961262,
                        .275637,
                        .886036,
                        .458924,
                        .065797,
                        .77868,
                        .61105,
                        .141427,
                        .016556
                    ],
                    [
                        .965926,
                        .258819,
                        .899519,
                        .433013,
                        .058013,
                        .804164,
                        .580889,
                        .1253,
                        .013707
                    ],
                    [
                        .970296,
                        .241922,
                        .912211,
                        .406574,
                        .050685,
                        .828326,
                        .549233,
                        .109969,
                        .011193
                    ],
                    [
                        .97437,
                        .224951,
                        .924096,
                        .379641,
                        .043823,
                        .851105,
                        .516162,
                        .095481,
                        .008999
                    ],
                    [
                        .978148,
                        .207912,
                        .935159,
                        .352244,
                        .037436,
                        .872441,
                        .481759,
                        .08188,
                        .007105
                    ],
                    [
                        .981627,
                        .190809,
                        .945388,
                        .324419,
                        .03153,
                        .892279,
                        .446114,
                        .069209,
                        .005492
                    ],
                    [
                        .984808,
                        .173648,
                        .954769,
                        .296198,
                        .026114,
                        .910569,
                        .409317,
                        .057505,
                        .00414
                    ],
                    [
                        .987688,
                        .156434,
                        .963292,
                        .267617,
                        .021193,
                        .927262,
                        .371463,
                        .046806,
                        .003026
                    ],
                    [
                        .990268,
                        .139173,
                        .970946,
                        .238709,
                        .016774,
                        .942316,
                        .332649,
                        .037143,
                        .002131
                    ],
                    [
                        .992546,
                        .121869,
                        .977722,
                        .209511,
                        .012862,
                        .955693,
                        .292976,
                        .028547,
                        .001431
                    ],
                    [
                        .994522,
                        .104528,
                        .983611,
                        .180057,
                        .009462,
                        .967356,
                        .252544,
                        .021043,
                        903e-6
                    ],
                    [
                        .996195,
                        .087156,
                        .988606,
                        .150384,
                        .006578,
                        .977277,
                        .21146,
                        .014654,
                        523e-6
                    ],
                    [
                        .997564,
                        .069756,
                        .992701,
                        .120527,
                        .004214,
                        .985429,
                        .169828,
                        .0094,
                        268e-6
                    ],
                    [
                        .99863,
                        .052336,
                        .995891,
                        .090524,
                        .002372,
                        .991791,
                        .127757,
                        .005297,
                        113e-6
                    ],
                    [
                        .999391,
                        .034899,
                        .998173,
                        .060411,
                        .001055,
                        .996348,
                        .085356,
                        .002357,
                        34e-6
                    ],
                    [
                        .999848,
                        .017452,
                        .999543,
                        .030224,
                        264e-6,
                        .999086,
                        .042733,
                        59e-5,
                        4e-6
                    ],
                    [
                        1,
                        -0,
                        1,
                        -0,
                        0,
                        1,
                        -0,
                        0,
                        -0
                    ]
                ]
            ], t.SPHERICAL_HARMONICS_AZIMUTH_RESOLUTION = t.SPHERICAL_HARMONICS[0].length, t.SPHERICAL_HARMONICS_ELEVATION_RESOLUTION = t.SPHERICAL_HARMONICS[1].length, t.SPHERICAL_HARMONICS_MAX_ORDER = t.SPHERICAL_HARMONICS[0][0].length / 2, t.MAX_RE_WEIGHTS = [
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    1.003236,
                    1.002156,
                    .999152,
                    .990038
                ],
                [
                    1.03237,
                    1.021194,
                    .990433,
                    .898572
                ],
                [
                    1.062694,
                    1.040231,
                    .979161,
                    .799806
                ],
                [
                    1.093999,
                    1.058954,
                    .964976,
                    .693603
                ],
                [
                    1.126003,
                    1.077006,
                    .947526,
                    .57989
                ],
                [
                    1.158345,
                    1.093982,
                    .926474,
                    .45869
                ],
                [
                    1.19059,
                    1.109437,
                    .901512,
                    .330158
                ],
                [
                    1.222228,
                    1.12289,
                    .87237,
                    .194621
                ],
                [
                    1.252684,
                    1.133837,
                    .838839,
                    .052614
                ],
                [
                    1.281987,
                    1.142358,
                    .801199,
                    0
                ],
                [
                    1.312073,
                    1.150207,
                    .760839,
                    0
                ],
                [
                    1.343011,
                    1.157424,
                    .717799,
                    0
                ],
                [
                    1.374649,
                    1.163859,
                    .671999,
                    0
                ],
                [
                    1.406809,
                    1.169354,
                    .623371,
                    0
                ],
                [
                    1.439286,
                    1.173739,
                    .571868,
                    0
                ],
                [
                    1.471846,
                    1.176837,
                    .517465,
                    0
                ],
                [
                    1.504226,
                    1.178465,
                    .460174,
                    0
                ],
                [
                    1.536133,
                    1.178438,
                    .400043,
                    0
                ],
                [
                    1.567253,
                    1.176573,
                    .337165,
                    0
                ],
                [
                    1.597247,
                    1.172695,
                    .271688,
                    0
                ],
                [
                    1.625766,
                    1.166645,
                    .203815,
                    0
                ],
                [
                    1.652455,
                    1.158285,
                    .133806,
                    0
                ],
                [
                    1.676966,
                    1.147506,
                    .061983,
                    0
                ],
                [
                    1.699006,
                    1.134261,
                    0,
                    0
                ],
                [
                    1.720224,
                    1.119789,
                    0,
                    0
                ],
                [
                    1.741631,
                    1.10481,
                    0,
                    0
                ],
                [
                    1.763183,
                    1.08933,
                    0,
                    0
                ],
                [
                    1.784837,
                    1.073356,
                    0,
                    0
                ],
                [
                    1.806548,
                    1.056898,
                    0,
                    0
                ],
                [
                    1.828269,
                    1.039968,
                    0,
                    0
                ],
                [
                    1.849952,
                    1.02258,
                    0,
                    0
                ],
                [
                    1.871552,
                    1.004752,
                    0,
                    0
                ],
                [
                    1.893018,
                    .986504,
                    0,
                    0
                ],
                [
                    1.914305,
                    .967857,
                    0,
                    0
                ],
                [
                    1.935366,
                    .948837,
                    0,
                    0
                ],
                [
                    1.956154,
                    .929471,
                    0,
                    0
                ],
                [
                    1.976625,
                    .90979,
                    0,
                    0
                ],
                [
                    1.996736,
                    .889823,
                    0,
                    0
                ],
                [
                    2.016448,
                    .869607,
                    0,
                    0
                ],
                [
                    2.035721,
                    .849175,
                    0,
                    0
                ],
                [
                    2.054522,
                    .828565,
                    0,
                    0
                ],
                [
                    2.072818,
                    .807816,
                    0,
                    0
                ],
                [
                    2.090581,
                    .786964,
                    0,
                    0
                ],
                [
                    2.107785,
                    .766051,
                    0,
                    0
                ],
                [
                    2.124411,
                    .745115,
                    0,
                    0
                ],
                [
                    2.140439,
                    .724196,
                    0,
                    0
                ],
                [
                    2.155856,
                    .703332,
                    0,
                    0
                ],
                [
                    2.170653,
                    .682561,
                    0,
                    0
                ],
                [
                    2.184823,
                    .661921,
                    0,
                    0
                ],
                [
                    2.198364,
                    .641445,
                    0,
                    0
                ],
                [
                    2.211275,
                    .621169,
                    0,
                    0
                ],
                [
                    2.223562,
                    .601125,
                    0,
                    0
                ],
                [
                    2.23523,
                    .581341,
                    0,
                    0
                ],
                [
                    2.246289,
                    .561847,
                    0,
                    0
                ],
                [
                    2.256751,
                    .542667,
                    0,
                    0
                ],
                [
                    2.266631,
                    .523826,
                    0,
                    0
                ],
                [
                    2.275943,
                    .505344,
                    0,
                    0
                ],
                [
                    2.284707,
                    .487239,
                    0,
                    0
                ],
                [
                    2.292939,
                    .469528,
                    0,
                    0
                ],
                [
                    2.300661,
                    .452225,
                    0,
                    0
                ],
                [
                    2.307892,
                    .435342,
                    0,
                    0
                ],
                [
                    2.314654,
                    .418888,
                    0,
                    0
                ],
                [
                    2.320969,
                    .40287,
                    0,
                    0
                ],
                [
                    2.326858,
                    .387294,
                    0,
                    0
                ],
                [
                    2.332343,
                    .372164,
                    0,
                    0
                ],
                [
                    2.337445,
                    .357481,
                    0,
                    0
                ],
                [
                    2.342186,
                    .343246,
                    0,
                    0
                ],
                [
                    2.346585,
                    .329458,
                    0,
                    0
                ],
                [
                    2.350664,
                    .316113,
                    0,
                    0
                ],
                [
                    2.354442,
                    .303208,
                    0,
                    0
                ],
                [
                    2.357937,
                    .290738,
                    0,
                    0
                ],
                [
                    2.361168,
                    .278698,
                    0,
                    0
                ],
                [
                    2.364152,
                    .26708,
                    0,
                    0
                ],
                [
                    2.366906,
                    .255878,
                    0,
                    0
                ],
                [
                    2.369446,
                    .245082,
                    0,
                    0
                ],
                [
                    2.371786,
                    .234685,
                    0,
                    0
                ],
                [
                    2.37394,
                    .224677,
                    0,
                    0
                ],
                [
                    2.375923,
                    .215048,
                    0,
                    0
                ],
                [
                    2.377745,
                    .20579,
                    0,
                    0
                ],
                [
                    2.379421,
                    .196891,
                    0,
                    0
                ],
                [
                    2.380959,
                    .188342,
                    0,
                    0
                ],
                [
                    2.382372,
                    .180132,
                    0,
                    0
                ],
                [
                    2.383667,
                    .172251,
                    0,
                    0
                ],
                [
                    2.384856,
                    .164689,
                    0,
                    0
                ],
                [
                    2.385945,
                    .157435,
                    0,
                    0
                ],
                [
                    2.386943,
                    .150479,
                    0,
                    0
                ],
                [
                    2.387857,
                    .143811,
                    0,
                    0
                ],
                [
                    2.388694,
                    .137421,
                    0,
                    0
                ],
                [
                    2.38946,
                    .131299,
                    0,
                    0
                ],
                [
                    2.39016,
                    .125435,
                    0,
                    0
                ],
                [
                    2.390801,
                    .11982,
                    0,
                    0
                ],
                [
                    2.391386,
                    .114445,
                    0,
                    0
                ],
                [
                    2.391921,
                    .1093,
                    0,
                    0
                ],
                [
                    2.39241,
                    .104376,
                    0,
                    0
                ],
                [
                    2.392857,
                    .099666,
                    0,
                    0
                ],
                [
                    2.393265,
                    .09516,
                    0,
                    0
                ],
                [
                    2.393637,
                    .090851,
                    0,
                    0
                ],
                [
                    2.393977,
                    .086731,
                    0,
                    0
                ],
                [
                    2.394288,
                    .082791,
                    0,
                    0
                ],
                [
                    2.394571,
                    .079025,
                    0,
                    0
                ],
                [
                    2.394829,
                    .075426,
                    0,
                    0
                ],
                [
                    2.395064,
                    .071986,
                    0,
                    0
                ],
                [
                    2.395279,
                    .068699,
                    0,
                    0
                ],
                [
                    2.395475,
                    .065558,
                    0,
                    0
                ],
                [
                    2.395653,
                    .062558,
                    0,
                    0
                ],
                [
                    2.395816,
                    .059693,
                    0,
                    0
                ],
                [
                    2.395964,
                    .056955,
                    0,
                    0
                ],
                [
                    2.396099,
                    .054341,
                    0,
                    0
                ],
                [
                    2.396222,
                    .051845,
                    0,
                    0
                ],
                [
                    2.396334,
                    .049462,
                    0,
                    0
                ],
                [
                    2.396436,
                    .047186,
                    0,
                    0
                ],
                [
                    2.396529,
                    .045013,
                    0,
                    0
                ],
                [
                    2.396613,
                    .042939,
                    0,
                    0
                ],
                [
                    2.396691,
                    .040959,
                    0,
                    0
                ],
                [
                    2.396761,
                    .039069,
                    0,
                    0
                ],
                [
                    2.396825,
                    .037266,
                    0,
                    0
                ],
                [
                    2.396883,
                    .035544,
                    0,
                    0
                ],
                [
                    2.396936,
                    .033901,
                    0,
                    0
                ],
                [
                    2.396984,
                    .032334,
                    0,
                    0
                ],
                [
                    2.397028,
                    .030838,
                    0,
                    0
                ],
                [
                    2.397068,
                    .02941,
                    0,
                    0
                ],
                [
                    2.397104,
                    .028048,
                    0,
                    0
                ],
                [
                    2.397137,
                    .026749,
                    0,
                    0
                ],
                [
                    2.397167,
                    .025509,
                    0,
                    0
                ],
                [
                    2.397194,
                    .024326,
                    0,
                    0
                ],
                [
                    2.397219,
                    .023198,
                    0,
                    0
                ],
                [
                    2.397242,
                    .022122,
                    0,
                    0
                ],
                [
                    2.397262,
                    .021095,
                    0,
                    0
                ],
                [
                    2.397281,
                    .020116,
                    0,
                    0
                ],
                [
                    2.397298,
                    .019181,
                    0,
                    0
                ],
                [
                    2.397314,
                    .01829,
                    0,
                    0
                ],
                [
                    2.397328,
                    .017441,
                    0,
                    0
                ],
                [
                    2.397341,
                    .01663,
                    0,
                    0
                ],
                [
                    2.397352,
                    .015857,
                    0,
                    0
                ],
                [
                    2.397363,
                    .015119,
                    0,
                    0
                ],
                [
                    2.397372,
                    .014416,
                    0,
                    0
                ],
                [
                    2.397381,
                    .013745,
                    0,
                    0
                ],
                [
                    2.397389,
                    .013106,
                    0,
                    0
                ],
                [
                    2.397396,
                    .012496,
                    0,
                    0
                ],
                [
                    2.397403,
                    .011914,
                    0,
                    0
                ],
                [
                    2.397409,
                    .01136,
                    0,
                    0
                ],
                [
                    2.397414,
                    .010831,
                    0,
                    0
                ],
                [
                    2.397419,
                    .010326,
                    0,
                    0
                ],
                [
                    2.397424,
                    .009845,
                    0,
                    0
                ],
                [
                    2.397428,
                    .009387,
                    0,
                    0
                ],
                [
                    2.397432,
                    .008949,
                    0,
                    0
                ],
                [
                    2.397435,
                    .008532,
                    0,
                    0
                ],
                [
                    2.397438,
                    .008135,
                    0,
                    0
                ],
                [
                    2.397441,
                    .007755,
                    0,
                    0
                ],
                [
                    2.397443,
                    .007394,
                    0,
                    0
                ],
                [
                    2.397446,
                    .007049,
                    0,
                    0
                ],
                [
                    2.397448,
                    .006721,
                    0,
                    0
                ],
                [
                    2.39745,
                    .006407,
                    0,
                    0
                ],
                [
                    2.397451,
                    .006108,
                    0,
                    0
                ],
                [
                    2.397453,
                    .005824,
                    0,
                    0
                ],
                [
                    2.397454,
                    .005552,
                    0,
                    0
                ],
                [
                    2.397456,
                    .005293,
                    0,
                    0
                ],
                [
                    2.397457,
                    .005046,
                    0,
                    0
                ],
                [
                    2.397458,
                    .004811,
                    0,
                    0
                ],
                [
                    2.397459,
                    .004586,
                    0,
                    0
                ],
                [
                    2.39746,
                    .004372,
                    0,
                    0
                ],
                [
                    2.397461,
                    .004168,
                    0,
                    0
                ],
                [
                    2.397461,
                    .003974,
                    0,
                    0
                ],
                [
                    2.397462,
                    .003788,
                    0,
                    0
                ],
                [
                    2.397463,
                    .003611,
                    0,
                    0
                ],
                [
                    2.397463,
                    .003443,
                    0,
                    0
                ],
                [
                    2.397464,
                    .003282,
                    0,
                    0
                ],
                [
                    2.397464,
                    .003129,
                    0,
                    0
                ],
                [
                    2.397465,
                    .002983,
                    0,
                    0
                ],
                [
                    2.397465,
                    .002844,
                    0,
                    0
                ],
                [
                    2.397465,
                    .002711,
                    0,
                    0
                ],
                [
                    2.397466,
                    .002584,
                    0,
                    0
                ],
                [
                    2.397466,
                    .002464,
                    0,
                    0
                ],
                [
                    2.397466,
                    .002349,
                    0,
                    0
                ],
                [
                    2.397466,
                    .002239,
                    0,
                    0
                ],
                [
                    2.397467,
                    .002135,
                    0,
                    0
                ],
                [
                    2.397467,
                    .002035,
                    0,
                    0
                ],
                [
                    2.397467,
                    .00194,
                    0,
                    0
                ],
                [
                    2.397467,
                    .001849,
                    0,
                    0
                ],
                [
                    2.397467,
                    .001763,
                    0,
                    0
                ],
                [
                    2.397467,
                    .001681,
                    0,
                    0
                ],
                [
                    2.397468,
                    .001602,
                    0,
                    0
                ],
                [
                    2.397468,
                    .001527,
                    0,
                    0
                ],
                [
                    2.397468,
                    .001456,
                    0,
                    0
                ],
                [
                    2.397468,
                    .001388,
                    0,
                    0
                ],
                [
                    2.397468,
                    .001323,
                    0,
                    0
                ],
                [
                    2.397468,
                    .001261,
                    0,
                    0
                ],
                [
                    2.397468,
                    .001202,
                    0,
                    0
                ],
                [
                    2.397468,
                    .001146,
                    0,
                    0
                ],
                [
                    2.397468,
                    .001093,
                    0,
                    0
                ],
                [
                    2.397468,
                    .001042,
                    0,
                    0
                ],
                [
                    2.397468,
                    993e-6,
                    0,
                    0
                ],
                [
                    2.397468,
                    947e-6,
                    0,
                    0
                ],
                [
                    2.397468,
                    902e-6,
                    0,
                    0
                ],
                [
                    2.397468,
                    86e-5,
                    0,
                    0
                ],
                [
                    2.397468,
                    82e-5,
                    0,
                    0
                ],
                [
                    2.397469,
                    782e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    745e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    71e-5,
                    0,
                    0
                ],
                [
                    2.397469,
                    677e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    646e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    616e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    587e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    559e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    533e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    508e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    485e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    462e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    44e-5,
                    0,
                    0
                ],
                [
                    2.397469,
                    42e-5,
                    0,
                    0
                ],
                [
                    2.397469,
                    4e-4,
                    0,
                    0
                ],
                [
                    2.397469,
                    381e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    364e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    347e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    33e-5,
                    0,
                    0
                ],
                [
                    2.397469,
                    315e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    3e-4,
                    0,
                    0
                ],
                [
                    2.397469,
                    286e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    273e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    26e-5,
                    0,
                    0
                ],
                [
                    2.397469,
                    248e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    236e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    225e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    215e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    205e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    195e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    186e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    177e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    169e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    161e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    154e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    147e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    14e-5,
                    0,
                    0
                ],
                [
                    2.397469,
                    133e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    127e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    121e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    115e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    11e-5,
                    0,
                    0
                ],
                [
                    2.397469,
                    105e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    1e-4,
                    0,
                    0
                ],
                [
                    2.397469,
                    95e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    91e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    87e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    83e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    79e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    75e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    71e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    68e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    65e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    62e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    59e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    56e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    54e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    51e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    49e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    46e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    44e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    42e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    4e-5,
                    0,
                    0
                ],
                [
                    2.397469,
                    38e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    37e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    35e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    33e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    32e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    3e-5,
                    0,
                    0
                ],
                [
                    2.397469,
                    29e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    27e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    26e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    25e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    24e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    23e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    22e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    21e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    2e-5,
                    0,
                    0
                ],
                [
                    2.397469,
                    19e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    18e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    17e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    16e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    15e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    15e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    14e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    13e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    13e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    12e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    12e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    11e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    11e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    1e-5,
                    0,
                    0
                ],
                [
                    2.397469,
                    1e-5,
                    0,
                    0
                ],
                [
                    2.397469,
                    9e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    9e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    8e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    8e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    8e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    7e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    7e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    7e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    6e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    6e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    6e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    5e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    5e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    5e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    5e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    4e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    4e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    4e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    4e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    4e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    4e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    3e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    3e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    3e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    3e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    3e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    3e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    3e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    2e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    2e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    2e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    2e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    2e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    2e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    2e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    2e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    2e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    2e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    1e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    1e-6,
                    0,
                    0
                ],
                [
                    2.397469,
                    1e-6,
                    0,
                    0
                ]
            ], t.MAX_RE_WEIGHTS_RESOLUTION = t.MAX_RE_WEIGHTS.length;
        },
        function(A, t, e) {
            "use strict";
            function i(A, t) {
                void 0 == t && (t = {}), void 0 == t.position && (t.position = a.DEFAULT_POSITION.slice()), void 0 == t.forward && (t.forward = a.DEFAULT_FORWARD.slice()), void 0 == t.up && (t.up = a.DEFAULT_UP.slice()), void 0 == t.minDistance && (t.minDistance = a.DEFAULT_MIN_DISTANCE), void 0 == t.maxDistance && (t.maxDistance = a.DEFAULT_MAX_DISTANCE), void 0 == t.rolloff && (t.rolloff = a.DEFAULT_ROLLOFF), void 0 == t.gain && (t.gain = a.DEFAULT_SOURCE_GAIN), void 0 == t.alpha && (t.alpha = a.DEFAULT_DIRECTIVITY_ALPHA), void 0 == t.sharpness && (t.sharpness = a.DEFAULT_DIRECTIVITY_SHARPNESS), void 0 == t.sourceWidth && (t.sourceWidth = a.DEFAULT_SOURCE_WIDTH), this._scene = A, this._position = t.position, this._forward = t.forward, this._up = t.up, this._dx = new Float32Array(3), this._right = a.crossProduct(this._forward, this._up);
                let e = A._context;
                this.input = e.createGain(), this._directivity = new s(e, {
                    alpha: t.alpha,
                    sharpness: t.sharpness
                }), this._toEarly = e.createGain(), this._toLate = e.createGain(), this._attenuation = new o(e, {
                    minDistance: t.minDistance,
                    maxDistance: t.maxDistance,
                    rolloff: t.rolloff
                }), this._encoder = new r(e, {
                    ambisonicOrder: A._ambisonicOrder,
                    sourceWidth: t.sourceWidth
                }), this.input.connect(this._toLate), this._toLate.connect(A._room.late.input), this.input.connect(this._attenuation.input), this._attenuation.output.connect(this._toEarly), this._toEarly.connect(A._room.early.input), this._attenuation.output.connect(this._directivity.input), this._directivity.output.connect(this._encoder.input), this._encoder.output.connect(A._listener.input), this.setPosition(t.position[0], t.position[1], t.position[2]), this.input.gain.value = t.gain;
            }
            function n(A) {
                let t = 1;
                return A > a.EPSILON_FLOAT && (t = 1 - A / a.SOURCE_MAX_OUTSIDE_ROOM_DISTANCE, t = Math.max(0, Math.min(1, t))), t;
            } /**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
            const s = e(5), o = e(6), r = e(1), a = e(0);
            i.prototype.setPosition = function(A, t, e) {
                this._position[0] = A, this._position[1] = t, this._position[2] = e;
                let i = n(this._scene._room.getDistanceOutsideRoom(this._position[0], this._position[1], this._position[2]));
                this._toLate.gain.value = i, this._toEarly.gain.value = i, this._update();
            }, i.prototype._update = function() {
                for(let i = 0; i < 3; i++)this._dx[i] = this._position[i] - this._scene._listener.position[i];
                let A = Math.sqrt(this._dx[0] * this._dx[0] + this._dx[1] * this._dx[1] + this._dx[2] * this._dx[2]);
                A > 0 && (this._dx[0] /= A, this._dx[1] /= A, this._dx[2] /= A);
                let t = Math.atan2(-this._dx[0], this._dx[2]) * a.RADIANS_TO_DEGREES, e = Math.atan2(this._dx[1], Math.sqrt(this._dx[0] * this._dx[0] + this._dx[2] * this._dx[2])) * a.RADIANS_TO_DEGREES;
                this._attenuation.setDistance(A), this._directivity.computeAngle(this._forward, this._dx), this._encoder.setDirection(t, e);
            }, i.prototype.setRolloff = function(A) {
                this._attenuation.setRolloff(A);
            }, i.prototype.setMinDistance = function(A) {
                this._attenuation.minDistance = A;
            }, i.prototype.setMaxDistance = function(A) {
                this._attenuation.maxDistance = A;
            }, i.prototype.setGain = function(A) {
                this.input.gain.value = A;
            }, i.prototype.setOrientation = function(A, t, e, i, n, s) {
                this._forward[0] = A, this._forward[1] = t, this._forward[2] = e, this._up[0] = i, this._up[1] = n, this._up[2] = s, this._right = a.crossProduct(this._forward, this._up);
            }, i.prototype.setFromMatrix = function(A) {
                this._right[0] = A.elements[0], this._right[1] = A.elements[1], this._right[2] = A.elements[2], this._up[0] = A.elements[4], this._up[1] = A.elements[5], this._up[2] = A.elements[6], this._forward[0] = A.elements[8], this._forward[1] = A.elements[9], this._forward[2] = A.elements[10], this._right = a.normalizeVector(this._right), this._up = a.normalizeVector(this._up), this._forward = a.normalizeVector(this._forward), this.setPosition(A.elements[12], A.elements[13], A.elements[14]);
            }, i.prototype.setSourceWidth = function(A) {
                this._encoder.setSourceWidth(A), this.setPosition(this._position[0], this._position[1], this._position[2]);
            }, i.prototype.setDirectivityPattern = function(A, t) {
                this._directivity.setPattern(A, t), this.setPosition(this._position[0], this._position[1], this._position[2]);
            }, A.exports = i;
        },
        function(A, t, e) {
            "use strict";
            function i(A, t) {
                void 0 == t && (t = {}), void 0 == t.alpha && (t.alpha = n.DEFAULT_DIRECTIVITY_ALPHA), void 0 == t.sharpness && (t.sharpness = n.DEFAULT_DIRECTIVITY_SHARPNESS), this._context = A, this._lowpass = A.createBiquadFilter(), this._lowpass.type = "lowpass", this._lowpass.Q.value = 0, this._lowpass.frequency.value = .5 * A.sampleRate, this._cosTheta = 0, this.setPattern(t.alpha, t.sharpness), this.input = this._lowpass, this.output = this._lowpass;
            } /**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
            const n = e(0);
            i.prototype.computeAngle = function(A, t) {
                let e = n.normalizeVector(A), i = n.normalizeVector(t), s = 1;
                if (this._alpha > n.EPSILON_FLOAT) {
                    let A = e[0] * i[0] + e[1] * i[1] + e[2] * i[2];
                    s = 1 - this._alpha + this._alpha * A, s = Math.pow(Math.abs(s), this._sharpness);
                }
                this._lowpass.frequency.value = .5 * this._context.sampleRate * s;
            }, i.prototype.setPattern = function(A, t) {
                this._alpha = Math.min(1, Math.max(0, A)), this._sharpness = Math.max(1, t), this.computeAngle([
                    this._cosTheta * this._cosTheta,
                    0,
                    0
                ], [
                    1,
                    0,
                    0
                ]);
            }, A.exports = i;
        },
        function(A, t, e) {
            "use strict";
            function i(A, t) {
                void 0 == t && (t = {}), void 0 == t.minDistance && (t.minDistance = n.DEFAULT_MIN_DISTANCE), void 0 == t.maxDistance && (t.maxDistance = n.DEFAULT_MAX_DISTANCE), void 0 == t.rolloff && (t.rolloff = n.DEFAULT_ATTENUATION_ROLLOFF), this.minDistance = t.minDistance, this.maxDistance = t.maxDistance, this.setRolloff(t.rolloff), this._gainNode = A.createGain(), this.setDistance(t.maxDistance), this.input = this._gainNode, this.output = this._gainNode;
            } /**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
            const n = e(0);
            i.prototype.setDistance = function(A) {
                let t = 1;
                if ("logarithmic" == this._rolloff) {
                    if (A > this.maxDistance) t = 0;
                    else if (A > this.minDistance) {
                        let e = this.maxDistance - this.minDistance;
                        if (e > n.EPSILON_FLOAT) {
                            let i = 1 / (e + 1);
                            t = (1 / (A - this.minDistance + 1) - i) / (1 - i);
                        }
                    }
                } else if ("linear" == this._rolloff) {
                    if (A > this.maxDistance) t = 0;
                    else if (A > this.minDistance) {
                        let e = this.maxDistance - this.minDistance;
                        e > n.EPSILON_FLOAT && (t = (this.maxDistance - A) / e);
                    }
                }
                this._gainNode.gain.value = t;
            }, i.prototype.setRolloff = function(A) {
                let t = ~n.ATTENUATION_ROLLOFFS.indexOf(A);
                void 0 != A && t ? A = A.toString().toLowerCase() : (t || n.log('Invalid rolloff model ("' + A + '"). Using default: "' + n.DEFAULT_ATTENUATION_ROLLOFF + '".'), A = n.DEFAULT_ATTENUATION_ROLLOFF), this._rolloff = A;
            }, A.exports = i;
        },
        function(A, t, e) {
            "use strict";
            function i(A) {
                let t = {};
                for(let e in _.DEFAULT_ROOM_MATERIALS)_.DEFAULT_ROOM_MATERIALS.hasOwnProperty(e) && (t[e] = _.ROOM_MATERIAL_COEFFICIENTS[_.DEFAULT_ROOM_MATERIALS[e]]);
                void 0 == A && (A = {}, Object.assign(A, _.DEFAULT_ROOM_MATERIALS));
                for(let e in _.DEFAULT_ROOM_MATERIALS)_.DEFAULT_ROOM_MATERIALS.hasOwnProperty(e) && A.hasOwnProperty(e) ? A[e] in _.ROOM_MATERIAL_COEFFICIENTS ? t[e] = _.ROOM_MATERIAL_COEFFICIENTS[A[e]] : _.log('Material "' + A[e] + '" on wall "' + e + '" not found. Using "' + _.DEFAULT_ROOM_MATERIALS[e] + '".') : _.log('Wall "' + e + '" is not defined. Default used.');
                return t;
            }
            function n(A) {
                void 0 == A && (A = {});
                for(let t in _.DEFAULT_ROOM_MATERIALS)A.hasOwnProperty(t) || (A[t] = _.ROOM_MATERIAL_COEFFICIENTS[_.DEFAULT_ROOM_MATERIALS[t]]);
                return A;
            }
            function s(A) {
                void 0 == A && (A = {});
                for(let t in _.DEFAULT_ROOM_DIMENSIONS)A.hasOwnProperty(t) || (A[t] = _.DEFAULT_ROOM_DIMENSIONS[t]);
                return A;
            }
            function o(A, t, e) {
                let i = new Float32Array(_.NUMBER_REVERB_FREQUENCY_BANDS);
                A = s(A), t = n(t), void 0 == e && (e = _.DEFAULT_SPEED_OF_SOUND);
                let o = _.TWENTY_FOUR_LOG10 / e, r = A.width * A.height * A.depth;
                if (r < _.ROOM_MIN_VOLUME) return i;
                let a = A.width * A.height, h = A.width * A.depth, c = A.depth * A.height, f = 2 * (a + h + c);
                for(let n = 0; n < _.NUMBER_REVERB_FREQUENCY_BANDS; n++){
                    let A = ((t.left[n] + t.right[n]) * a + (t.down[n] + t.up[n]) * h + (t.front[n] + t.back[n]) * c) / f;
                    i[n] = _.ROOM_EYRING_CORRECTION_COEFFICIENT * o * r / (-f * Math.log(1 - A) + 4 * _.ROOM_AIR_ABSORPTION_COEFFICIENTS[n] * r);
                }
                return i;
            }
            function r(A) {
                let t = [];
                for(let e in _.DEFAULT_REFLECTION_COEFFICIENTS)if (_.DEFAULT_REFLECTION_COEFFICIENTS.hasOwnProperty(e)) {
                    t[e] = 0;
                    for(let i = 0; i < _.NUMBER_REFLECTION_AVERAGING_BANDS; i++){
                        let n = i + _.ROOM_STARTING_AVERAGING_BAND;
                        t[e] += A[e][n];
                    }
                    t[e] /= _.NUMBER_REFLECTION_AVERAGING_BANDS, t[e] = Math.sqrt(1 - t[e]);
                }
                return t;
            }
            function a(A, t) {
                void 0 == t && (t = {}), void 0 == t.listenerPosition && (t.listenerPosition = _.DEFAULT_POSITION.slice()), void 0 == t.dimensions && (t.dimensions = {}, Object.assign(t.dimensions, _.DEFAULT_ROOM_DIMENSIONS)), void 0 == t.materials && (t.materials = {}, Object.assign(t.materials, _.DEFAULT_ROOM_MATERIALS)), void 0 == t.speedOfSound && (t.speedOfSound = _.DEFAULT_SPEED_OF_SOUND), t.dimensions = s(t.dimensions);
                let e = i(t.materials), n = r(e), a = o(t.dimensions, e, t.speedOfSound);
                this.early = new c(A, {
                    dimensions: t.dimensions,
                    coefficients: n,
                    speedOfSound: t.speedOfSound,
                    listenerPosition: t.listenerPosition
                }), this.late = new h(A, {
                    durations: a
                }), this.speedOfSound = t.speedOfSound, this.output = A.createGain(), this.early.output.connect(this.output), this._merger = A.createChannelMerger(4), this.late.output.connect(this._merger, 0, 0), this._merger.connect(this.output);
            } /**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
            const h = e(8), c = e(9), _ = e(0);
            a.prototype.setProperties = function(A, t) {
                let e = i(t), n = o(A, e, this.speedOfSound);
                this.late.setDurations(n), this.early.speedOfSound = this.speedOfSound;
                let s = r(e);
                this.early.setRoomProperties(A, s);
            }, a.prototype.setListenerPosition = function(A, t, e) {
                this.early.speedOfSound = this.speedOfSound, this.early.setListenerPosition(A, t, e);
                let i = this.getDistanceOutsideRoom(A, t, e), n = 1;
                i > _.EPSILON_FLOAT && (n = 1 - i / _.LISTENER_MAX_OUTSIDE_ROOM_DISTANCE, n = Math.max(0, Math.min(1, n))), this.output.gain.value = n;
            }, a.prototype.getDistanceOutsideRoom = function(A, t, e) {
                let i = Math.max(0, -this.early._halfDimensions.width - A, A - this.early._halfDimensions.width), n = Math.max(0, -this.early._halfDimensions.height - t, t - this.early._halfDimensions.height), s = Math.max(0, -this.early._halfDimensions.depth - e, e - this.early._halfDimensions.depth);
                return Math.sqrt(i * i + n * n + s * s);
            }, A.exports = a;
        },
        function(A, t, e) {
            "use strict";
            function i(A, t) {
                void 0 == t && (t = {}), void 0 == t.durations && (t.durations = n.DEFAULT_REVERB_DURATIONS.slice()), void 0 == t.predelay && (t.predelay = n.DEFAULT_REVERB_PREDELAY), void 0 == t.gain && (t.gain = n.DEFAULT_REVERB_GAIN), void 0 == t.bandwidth && (t.bandwidth = n.DEFAULT_REVERB_BANDWIDTH), void 0 == t.tailonset && (t.tailonset = n.DEFAULT_REVERB_TAIL_ONSET);
                let e = t.predelay / 1e3;
                this._bandwidthCoeff = t.bandwidth * n.LOG2_DIV2, this._tailonsetSamples = t.tailonset / 1e3, this._context = A, this.input = A.createGain(), this._predelay = A.createDelay(e), this._convolver = A.createConvolver(), this.output = A.createGain(), this.output.gain.value = t.gain, this._convolver.normalize = !1, this.input.connect(this._predelay), this._predelay.connect(this._convolver), this._convolver.connect(this.output), this.setDurations(t.durations);
            } /**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
            const n = e(0);
            i.prototype.setDurations = function(A) {
                if (A.length !== n.NUMBER_REVERB_FREQUENCY_BANDS) return void n.log("Warning: invalid number of RT60 values provided to reverb.");
                let t = new Float32Array(n.NUMBER_REVERB_FREQUENCY_BANDS), e = this._context.sampleRate;
                for(let h = 0; h < A.length; h++)A[h] = Math.max(0, Math.min(n.DEFAULT_REVERB_MAX_DURATION, A[h])), t[h] = Math.round(A[h] * e * n.DEFAULT_REVERB_DURATION_MULTIPLIER);
                let i = 0;
                for(let n = 0; n < t.length; n++)t[n] > i && (i = t[n]);
                i < 1 && (i = 1);
                let s = this._context.createBuffer(1, i, e), o = s.getChannelData(0), r = new Float32Array(i);
                for(let n = 0; n < i; n++)r[n] = 2 * Math.random() - 1;
                for(let h = 0; h < n.NUMBER_REVERB_FREQUENCY_BANDS; h++){
                    let A = -n.LOG1000 / t[h], i = n.TWO_PI * n.DEFAULT_REVERB_FREQUENCY_BANDS[h] / e, s = Math.sin(i), a = s * Math.sinh(this._bandwidthCoeff * i / s), c = 1 / (1 + a), _ = a * c, f = -2 * Math.cos(i) * c, l = (1 - a) * c, u = 0, D = 0;
                    for(let e = 0; e < t[h]; e++){
                        let t = r[e] * Math.exp(A * e) - f * u - l * D;
                        o[e] += _ * (t - D), D = u, u = t;
                    }
                }
                let a = Math.round(this._tailonsetSamples);
                for(let h = 0; h < Math.min(o.length, a); h++){
                    let A = .5 * (1 - Math.cos(n.TWO_PI * h / (2 * a - 1)));
                    o[h] *= A;
                }
                this._convolver.buffer = s;
            }, A.exports = i;
        },
        function(A, t, e) {
            "use strict";
            function i(A, t) {
                void 0 == t && (t = {}), void 0 == t.speedOfSound && (t.speedOfSound = n.DEFAULT_SPEED_OF_SOUND), void 0 == t.listenerPosition && (t.listenerPosition = n.DEFAULT_POSITION.slice()), void 0 == t.coefficients && (t.coefficients = {}, Object.assign(t.coefficients, n.DEFAULT_REFLECTION_COEFFICIENTS)), this.speedOfSound = t.speedOfSound, this.input = A.createGain(), this.output = A.createGain(), this._lowpass = A.createBiquadFilter(), this._delays = {}, this._gains = {}, this._inverters = {}, this._merger = A.createChannelMerger(4);
                for(let e in n.DEFAULT_REFLECTION_COEFFICIENTS)n.DEFAULT_REFLECTION_COEFFICIENTS.hasOwnProperty(e) && (this._delays[e] = A.createDelay(n.MAX_DURATION), this._gains[e] = A.createGain());
                this._inverters.right = A.createGain(), this._inverters.down = A.createGain(), this._inverters.back = A.createGain(), this._lowpass.type = "lowpass", this._lowpass.frequency.value = n.DEFAULT_REFLECTION_CUTOFF_FREQUENCY, this._lowpass.Q.value = 0;
                for(let e in n.DEFAULT_REFLECTION_COEFFICIENTS)n.DEFAULT_REFLECTION_COEFFICIENTS.hasOwnProperty(e) && (this._delays[e].delayTime.value = 0, this._gains[e].gain.value = 0);
                this._inverters.right.gain.value = -1, this._inverters.down.gain.value = -1, this._inverters.back.gain.value = -1, this.input.connect(this._lowpass);
                for(let e in n.DEFAULT_REFLECTION_COEFFICIENTS)n.DEFAULT_REFLECTION_COEFFICIENTS.hasOwnProperty(e) && (this._lowpass.connect(this._delays[e]), this._delays[e].connect(this._gains[e]), this._gains[e].connect(this._merger, 0, 0));
                this._gains.left.connect(this._merger, 0, 1), this._gains.right.connect(this._inverters.right), this._inverters.right.connect(this._merger, 0, 1), this._gains.up.connect(this._merger, 0, 2), this._gains.down.connect(this._inverters.down), this._inverters.down.connect(this._merger, 0, 2), this._gains.front.connect(this._merger, 0, 3), this._gains.back.connect(this._inverters.back), this._inverters.back.connect(this._merger, 0, 3), this._merger.connect(this.output), this._listenerPosition = t.listenerPosition, this.setRoomProperties(t.dimensions, t.coefficients);
            } /**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
            const n = e(0);
            i.prototype.setListenerPosition = function(A, t, e) {
                this._listenerPosition = [
                    A,
                    t,
                    e
                ];
                let i = {
                    left: n.DEFAULT_REFLECTION_MULTIPLIER * Math.max(0, this._halfDimensions.width + A) + n.DEFAULT_REFLECTION_MIN_DISTANCE,
                    right: n.DEFAULT_REFLECTION_MULTIPLIER * Math.max(0, this._halfDimensions.width - A) + n.DEFAULT_REFLECTION_MIN_DISTANCE,
                    front: n.DEFAULT_REFLECTION_MULTIPLIER * Math.max(0, this._halfDimensions.depth + e) + n.DEFAULT_REFLECTION_MIN_DISTANCE,
                    back: n.DEFAULT_REFLECTION_MULTIPLIER * Math.max(0, this._halfDimensions.depth - e) + n.DEFAULT_REFLECTION_MIN_DISTANCE,
                    down: n.DEFAULT_REFLECTION_MULTIPLIER * Math.max(0, this._halfDimensions.height + t) + n.DEFAULT_REFLECTION_MIN_DISTANCE,
                    up: n.DEFAULT_REFLECTION_MULTIPLIER * Math.max(0, this._halfDimensions.height - t) + n.DEFAULT_REFLECTION_MIN_DISTANCE
                };
                for(let s in n.DEFAULT_REFLECTION_COEFFICIENTS)if (n.DEFAULT_REFLECTION_COEFFICIENTS.hasOwnProperty(s)) {
                    let A = i[s] / this.speedOfSound;
                    this._delays[s].delayTime.value = A;
                    let t = this._coefficients[s] / i[s];
                    this._gains[s].gain.value = t;
                }
            }, i.prototype.setRoomProperties = function(A, t) {
                void 0 == A && (A = {}, Object.assign(A, n.DEFAULT_ROOM_DIMENSIONS)), void 0 == t && (t = {}, Object.assign(t, n.DEFAULT_REFLECTION_COEFFICIENTS)), this._coefficients = t, this._halfDimensions = {}, this._halfDimensions.width = .5 * A.width, this._halfDimensions.height = .5 * A.height, this._halfDimensions.depth = .5 * A.depth, this.setListenerPosition(this._listenerPosition[0], this._listenerPosition[1], this._listenerPosition[2]);
            }, A.exports = i;
        },
        function(A, t, e) {
            "use strict"; /**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
            t.ResonanceAudio = e(11), t.ResonanceAudio.Attenuation = e(6), t.ResonanceAudio.Directivity = e(5), t.ResonanceAudio.EarlyReflections = e(9), t.ResonanceAudio.Encoder = e(1), t.ResonanceAudio.LateReflections = e(8), t.ResonanceAudio.Listener = e(2), t.ResonanceAudio.Room = e(7), t.ResonanceAudio.Source = e(4), t.ResonanceAudio.Tables = e(3), t.ResonanceAudio.Utils = e(0), t.ResonanceAudio.Version = e(13);
        },
        function(A, t, e) {
            "use strict";
            function i(A, t) {
                void 0 == t && (t = {}), void 0 == t.ambisonicOrder && (t.ambisonicOrder = a.DEFAULT_AMBISONIC_ORDER), void 0 == t.listenerPosition && (t.listenerPosition = a.DEFAULT_POSITION.slice()), void 0 == t.listenerForward && (t.listenerForward = a.DEFAULT_FORWARD.slice()), void 0 == t.listenerUp && (t.listenerUp = a.DEFAULT_UP.slice()), void 0 == t.dimensions && (t.dimensions = {}, Object.assign(t.dimensions, a.DEFAULT_ROOM_DIMENSIONS)), void 0 == t.materials && (t.materials = {}, Object.assign(t.materials, a.DEFAULT_ROOM_MATERIALS)), void 0 == t.speedOfSound && (t.speedOfSound = a.DEFAULT_SPEED_OF_SOUND), this._ambisonicOrder = r.validateAmbisonicOrder(t.ambisonicOrder), this._sources = [], this._room = new o(A, {
                    listenerPosition: t.listenerPosition,
                    dimensions: t.dimensions,
                    materials: t.materials,
                    speedOfSound: t.speedOfSound
                }), this._listener = new n(A, {
                    ambisonicOrder: t.ambisonicOrder,
                    position: t.listenerPosition,
                    forward: t.listenerForward,
                    up: t.listenerUp
                }), this._context = A, this.output = A.createGain(), this.ambisonicOutput = A.createGain(), this.ambisonicInput = this._listener.input, this._room.output.connect(this._listener.input), this._listener.output.connect(this.output), this._listener.ambisonicOutput.connect(this.ambisonicOutput);
            } /**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
            const n = e(2), s = e(4), o = e(7), r = e(1), a = e(0);
            i.prototype.createSource = function(A) {
                let t = new s(this, A);
                return this._sources[this._sources.length] = t, t;
            }, i.prototype.setAmbisonicOrder = function(A) {
                this._ambisonicOrder = r.validateAmbisonicOrder(A);
            }, i.prototype.setRoomProperties = function(A, t) {
                this._room.setProperties(A, t);
            }, i.prototype.setListenerPosition = function(A, t, e) {
                this._listener.position[0] = A, this._listener.position[1] = t, this._listener.position[2] = e, this._room.setListenerPosition(A, t, e), this._sources.forEach(function(A) {
                    A._update();
                });
            }, i.prototype.setListenerOrientation = function(A, t, e, i, n, s) {
                this._listener.setOrientation(A, t, e, i, n, s);
            }, i.prototype.setListenerFromMatrix = function(A) {
                this._listener.setFromMatrix(A), this.setListenerPosition(this._listener.position[0], this._listener.position[1], this._listener.position[2]);
            }, i.prototype.setSpeedOfSound = function(A) {
                this._room.speedOfSound = A;
            }, A.exports = i;
        },
        function(A, t, e) {
            !function(t, e) {
                A.exports = e();
            }(0, function() {
                return function(A) {
                    function t(i) {
                        if (e[i]) return e[i].exports;
                        var n = e[i] = {
                            i: i,
                            l: !1,
                            exports: {}
                        };
                        return A[i].call(n.exports, n, n.exports, t), n.l = !0, n.exports;
                    }
                    var e = {};
                    return t.m = A, t.c = e, t.d = function(A, e, i) {
                        t.o(A, e) || Object.defineProperty(A, e, {
                            configurable: !1,
                            enumerable: !0,
                            get: i
                        });
                    }, t.n = function(A) {
                        var e = A && A.__esModule ? function() {
                            return A.default;
                        } : function() {
                            return A;
                        };
                        return t.d(e, "a", e), e;
                    }, t.o = function(A, t) {
                        return Object.prototype.hasOwnProperty.call(A, t);
                    }, t.p = "", t(t.s = 10);
                }([
                    function(A, t) {
                        t.log = function() {
                            window.console.log.apply(window.console, [
                                "%c[Omnitone]%c " + Array.prototype.slice.call(arguments).join(" ") + " %c(@" + performance.now().toFixed(2) + "ms)",
                                "background: #BBDEFB; color: #FF5722; font-weight: 500",
                                "font-weight: 300",
                                "color: #AAA"
                            ]);
                        }, t.throw = function() {
                            throw window.console.error.apply(window.console, [
                                "%c[Omnitone]%c " + Array.prototype.slice.call(arguments).join(" ") + " %c(@" + performance.now().toFixed(2) + "ms)",
                                "background: #C62828; color: #FFEBEE; font-weight: 800",
                                "font-weight: 400",
                                "color: #AAA"
                            ]), new Error(!1);
                        };
                        let e, i, n, s, o, r, a, h, c, _, f, l, u, D, g, w, d, E, p, v, P, B, C, I, O, m, M, R, Q;
                        t.invertMatrix4 = function(A, t) {
                            return e = t[0], i = t[1], n = t[2], s = t[3], o = t[4], r = t[5], a = t[6], h = t[7], c = t[8], _ = t[9], f = t[10], l = t[11], u = t[12], D = t[13], g = t[14], w = t[15], d = e * r - i * o, E = e * a - n * o, p = e * h - s * o, v = i * a - n * r, P = i * h - s * r, B = n * h - s * a, C = c * D - _ * u, I = c * g - f * u, O = c * w - l * u, m = _ * g - f * D, M = _ * w - l * D, R = f * w - l * g, (Q = d * R - E * M + p * m + v * O - P * I + B * C) ? (Q = 1 / Q, A[0] = (r * R - a * M + h * m) * Q, A[1] = (n * M - i * R - s * m) * Q, A[2] = (D * B - g * P + w * v) * Q, A[3] = (f * P - _ * B - l * v) * Q, A[4] = (a * O - o * R - h * I) * Q, A[5] = (e * R - n * O + s * I) * Q, A[6] = (g * p - u * B - w * E) * Q, A[7] = (c * B - f * p + l * E) * Q, A[8] = (o * M - r * O + h * C) * Q, A[9] = (i * O - e * M - s * C) * Q, A[10] = (u * P - D * p + w * d) * Q, A[11] = (_ * p - c * P - l * d) * Q, A[12] = (r * I - o * m - a * C) * Q, A[13] = (e * m - i * I + n * C) * Q, A[14] = (D * E - u * v - g * d) * Q, A[15] = (c * v - _ * E + f * d) * Q, A) : null;
                        }, t.isDefinedENUMEntry = function(A, t) {
                            for(let e in A)if (t === A[e]) return !0;
                            return !1;
                        }, t.isAudioContext = function(A) {
                            return A instanceof AudioContext || A instanceof OfflineAudioContext;
                        }, t.isAudioBuffer = function(A) {
                            return A instanceof AudioBuffer;
                        }, t.mergeBufferListByChannel = function(A, e) {
                            const i = e[0].length, n = e[0].sampleRate;
                            let s = 0;
                            for(let a = 0; a < e.length; ++a)s > 32 && t.throw("Utils.mergeBuffer: Number of channels cannot exceed 32.(got " + s + ")"), i !== e[a].length && t.throw("Utils.mergeBuffer: AudioBuffer lengths are inconsistent. (expected " + i + " but got " + e[a].length + ")"), n !== e[a].sampleRate && t.throw("Utils.mergeBuffer: AudioBuffer sample rates are inconsistent. (expected " + n + " but got " + e[a].sampleRate + ")"), s += e[a].numberOfChannels;
                            const o = A.createBuffer(s, i, n);
                            let r = 0;
                            for(let t = 0; t < e.length; ++t)for(let A = 0; A < e[t].numberOfChannels; ++A)o.getChannelData(r++).set(e[t].getChannelData(A));
                            return o;
                        }, t.splitBufferbyChannel = function(A, e, i) {
                            e.numberOfChannels <= i && t.throw("Utils.splitBuffer: Insufficient number of channels. (" + e.numberOfChannels + " splitted by " + i + ")");
                            let n = [], s = 0;
                            const o = Math.ceil(e.numberOfChannels / i);
                            for(let t = 0; t < o; ++t){
                                let t = A.createBuffer(i, e.length, e.sampleRate);
                                for(let A = 0; A < i; ++A)s < e.numberOfChannels && t.getChannelData(A).set(e.getChannelData(s++));
                                n.push(t);
                            }
                            return bufferList;
                        }, t.getArrayBufferFromBase64String = function(A) {
                            let t = window.atob(A), e = new Uint8Array(t.length);
                            return e.forEach((A, i)=>e[i] = t.charCodeAt(i)), e.buffer;
                        };
                    },
                    function(A, t, e) {
                        "use strict";
                        function i(A, t, e) {
                            this._context = n.isAudioContext(A) ? A : n.throw("BufferList: Invalid BaseAudioContext."), this._options = {
                                dataType: s.BASE64,
                                verbose: !1
                            }, e && (e.dataType && n.isDefinedENUMEntry(s, e.dataType) && (this._options.dataType = e.dataType), e.verbose && (this._options.verbose = Boolean(e.verbose))), this._bufferList = [], this._bufferData = this._options.dataType === s.BASE64 ? t : t.slice(0), this._numberOfTasks = this._bufferData.length, this._resolveHandler = null, this._rejectHandler = new Function;
                        }
                        const n = e(0), s = {
                            BASE64: "base64",
                            URL: "url"
                        };
                        i.prototype.load = function() {
                            return new Promise(this._promiseGenerator.bind(this));
                        }, i.prototype._promiseGenerator = function(A, t) {
                            "function" != typeof A ? n.throw("BufferList: Invalid Promise resolver.") : this._resolveHandler = A, "function" == typeof t && (this._rejectHandler = t);
                            for(let e = 0; e < this._bufferData.length; ++e)this._options.dataType === s.BASE64 ? this._launchAsyncLoadTask(e) : this._launchAsyncLoadTaskXHR(e);
                        }, i.prototype._launchAsyncLoadTask = function(A) {
                            const t = this;
                            this._context.decodeAudioData(n.getArrayBufferFromBase64String(this._bufferData[A]), function(e) {
                                t._updateProgress(A, e);
                            }, function(e) {
                                t._updateProgress(A, null);
                                const i = 'BufferList: decoding ArrayByffer("' + A + '" from Base64-encoded data failed. (' + e + ")";
                                n.throw(i), t._rejectHandler(i);
                            });
                        }, i.prototype._launchAsyncLoadTaskXHR = function(A) {
                            const t = new XMLHttpRequest;
                            t.open("GET", this._bufferData[A]), t.responseType = "arraybuffer";
                            const e = this;
                            t.onload = function() {
                                if (200 === t.status) e._context.decodeAudioData(t.response, function(t) {
                                    e._updateProgress(A, t);
                                }, function(t) {
                                    e._updateProgress(A, null);
                                    const i = 'BufferList: decoding "' + e._bufferData[A] + '" failed. (' + t + ")";
                                    n.throw(i), e._rejectHandler(i);
                                });
                                else {
                                    const i = 'BufferList: XHR error while loading "' + e._bufferData[A] + "(" + t.statusText + ")";
                                    n.throw(i), e._rejectHandler(i);
                                }
                            }, t.onerror = function(t) {
                                n.throw('BufferList: XHR network failed on loading "' + e._bufferData[A] + '".'), e._updateProgress(A, null), e._rejectHandler();
                            }, t.send();
                        }, i.prototype._updateProgress = function(A, t) {
                            if (this._bufferList[A] = t, this._options.verbose) {
                                let t = this._options.dataType === s.BASE64 ? "ArrayBuffer(" + A + ") from Base64-encoded HRIR" : '"' + this._bufferData[A] + '"';
                                n.log("BufferList: " + t + " successfully loaded.");
                            }
                            if (0 == --this._numberOfTasks) {
                                let A = this._options.dataType === s.BASE64 ? this._bufferData.length + " AudioBuffers from Base64-encoded HRIRs" : this._bufferData.length + " files via XHR";
                                n.log("BufferList: " + A + " loaded successfully."), this._resolveHandler(this._bufferList);
                            }
                        }, A.exports = i;
                    },
                    function(A, t, e) {
                        "use strict";
                        function i(A, t) {
                            this._context = A, this._splitter = this._context.createChannelSplitter(4), this._merger = this._context.createChannelMerger(4), this.input = this._splitter, this.output = this._merger, this.setChannelMap(t || n.DEFAULT);
                        }
                        const n = {
                            DEFAULT: [
                                0,
                                1,
                                2,
                                3
                            ],
                            SAFARI: [
                                2,
                                0,
                                1,
                                3
                            ],
                            FUMA: [
                                0,
                                3,
                                1,
                                2
                            ]
                        };
                        i.prototype.setChannelMap = function(A) {
                            Array.isArray(A) && (this._channelMap = A, this._splitter.disconnect(), this._splitter.connect(this._merger, 0, this._channelMap[0]), this._splitter.connect(this._merger, 1, this._channelMap[1]), this._splitter.connect(this._merger, 2, this._channelMap[2]), this._splitter.connect(this._merger, 3, this._channelMap[3]));
                        }, i.ChannelMap = n, A.exports = i;
                    },
                    function(A, t, e) {
                        "use strict";
                        function i(A) {
                            this._context = A, this._splitter = this._context.createChannelSplitter(4), this._inY = this._context.createGain(), this._inZ = this._context.createGain(), this._inX = this._context.createGain(), this._m0 = this._context.createGain(), this._m1 = this._context.createGain(), this._m2 = this._context.createGain(), this._m3 = this._context.createGain(), this._m4 = this._context.createGain(), this._m5 = this._context.createGain(), this._m6 = this._context.createGain(), this._m7 = this._context.createGain(), this._m8 = this._context.createGain(), this._outY = this._context.createGain(), this._outZ = this._context.createGain(), this._outX = this._context.createGain(), this._merger = this._context.createChannelMerger(4), this._splitter.connect(this._inY, 1), this._splitter.connect(this._inZ, 2), this._splitter.connect(this._inX, 3), this._inY.gain.value = -1, this._inX.gain.value = -1, this._inY.connect(this._m0), this._inY.connect(this._m1), this._inY.connect(this._m2), this._inZ.connect(this._m3), this._inZ.connect(this._m4), this._inZ.connect(this._m5), this._inX.connect(this._m6), this._inX.connect(this._m7), this._inX.connect(this._m8), this._m0.connect(this._outY), this._m1.connect(this._outZ), this._m2.connect(this._outX), this._m3.connect(this._outY), this._m4.connect(this._outZ), this._m5.connect(this._outX), this._m6.connect(this._outY), this._m7.connect(this._outZ), this._m8.connect(this._outX), this._splitter.connect(this._merger, 0, 0), this._outY.connect(this._merger, 0, 1), this._outZ.connect(this._merger, 0, 2), this._outX.connect(this._merger, 0, 3), this._outY.gain.value = -1, this._outX.gain.value = -1, this.setRotationMatrix3(new Float32Array([
                                1,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                1
                            ])), this.input = this._splitter, this.output = this._merger;
                        }
                        i.prototype.setRotationMatrix3 = function(A) {
                            this._m0.gain.value = A[0], this._m1.gain.value = A[1], this._m2.gain.value = A[2], this._m3.gain.value = A[3], this._m4.gain.value = A[4], this._m5.gain.value = A[5], this._m6.gain.value = A[6], this._m7.gain.value = A[7], this._m8.gain.value = A[8];
                        }, i.prototype.setRotationMatrix4 = function(A) {
                            this._m0.gain.value = A[0], this._m1.gain.value = A[1], this._m2.gain.value = A[2], this._m3.gain.value = A[4], this._m4.gain.value = A[5], this._m5.gain.value = A[6], this._m6.gain.value = A[8], this._m7.gain.value = A[9], this._m8.gain.value = A[10];
                        }, i.prototype.getRotationMatrix3 = function() {
                            return [
                                this._m0.gain.value,
                                this._m1.gain.value,
                                this._m2.gain.value,
                                this._m3.gain.value,
                                this._m4.gain.value,
                                this._m5.gain.value,
                                this._m6.gain.value,
                                this._m7.gain.value,
                                this._m8.gain.value
                            ];
                        }, i.prototype.getRotationMatrix4 = function() {
                            let A = new Float32Array(16);
                            return A[0] = this._m0.gain.value, A[1] = this._m1.gain.value, A[2] = this._m2.gain.value, A[4] = this._m3.gain.value, A[5] = this._m4.gain.value, A[6] = this._m5.gain.value, A[8] = this._m6.gain.value, A[9] = this._m7.gain.value, A[10] = this._m8.gain.value, A;
                        }, A.exports = i;
                    },
                    function(A, t, e) {
                        "use strict";
                        function i(A, t) {
                            this._context = A, this._active = !1, this._isBufferLoaded = !1, this._buildAudioGraph(), t && this.setHRIRBufferList(t), this.enable();
                        }
                        i.prototype._buildAudioGraph = function() {
                            this._splitterWYZX = this._context.createChannelSplitter(4), this._mergerWY = this._context.createChannelMerger(2), this._mergerZX = this._context.createChannelMerger(2), this._convolverWY = this._context.createConvolver(), this._convolverZX = this._context.createConvolver(), this._splitterWY = this._context.createChannelSplitter(2), this._splitterZX = this._context.createChannelSplitter(2), this._inverter = this._context.createGain(), this._mergerBinaural = this._context.createChannelMerger(2), this._summingBus = this._context.createGain(), this._splitterWYZX.connect(this._mergerWY, 0, 0), this._splitterWYZX.connect(this._mergerWY, 1, 1), this._splitterWYZX.connect(this._mergerZX, 2, 0), this._splitterWYZX.connect(this._mergerZX, 3, 1), this._mergerWY.connect(this._convolverWY), this._mergerZX.connect(this._convolverZX), this._convolverWY.connect(this._splitterWY), this._convolverZX.connect(this._splitterZX), this._splitterWY.connect(this._mergerBinaural, 0, 0), this._splitterWY.connect(this._mergerBinaural, 0, 1), this._splitterWY.connect(this._mergerBinaural, 1, 0), this._splitterWY.connect(this._inverter, 1, 0), this._inverter.connect(this._mergerBinaural, 0, 1), this._splitterZX.connect(this._mergerBinaural, 0, 0), this._splitterZX.connect(this._mergerBinaural, 0, 1), this._splitterZX.connect(this._mergerBinaural, 1, 0), this._splitterZX.connect(this._mergerBinaural, 1, 1), this._convolverWY.normalize = !1, this._convolverZX.normalize = !1, this._inverter.gain.value = -1, this.input = this._splitterWYZX, this.output = this._summingBus;
                        }, i.prototype.setHRIRBufferList = function(A) {
                            this._isBufferLoaded || (this._convolverWY.buffer = A[0], this._convolverZX.buffer = A[1], this._isBufferLoaded = !0);
                        }, i.prototype.enable = function() {
                            this._mergerBinaural.connect(this._summingBus), this._active = !0;
                        }, i.prototype.disable = function() {
                            this._mergerBinaural.disconnect(), this._active = !1;
                        }, A.exports = i;
                    },
                    function(A, t, e) {
                        "use strict";
                        function i(A, t, e, i, s) {
                            this._context = A, this._buffers = new Map, this._loadingTasks = {}, this._resolve = e, this._reject = i, this._progress = s;
                            for(let o = 0; o < t.length; o++){
                                const A = t[o];
                                if (this._loadingTasks.hasOwnProperty(A.name)) return void n.log("Duplicated filename when loading: " + A.name);
                                this._loadingTasks[A.name] = 0, this._loadAudioFile(A);
                            }
                        }
                        const n = e(0);
                        i.prototype._loadAudioFile = function(A) {
                            const t = new XMLHttpRequest;
                            t.open("GET", A.url), t.responseType = "arraybuffer";
                            const e = this;
                            t.onload = function() {
                                200 === t.status ? e._context.decodeAudioData(t.response, function(t) {
                                    e._done(A.name, t);
                                }, function(t) {
                                    n.log("Decoding failure: " + A.url + " (" + t + ")"), e._done(A.name, null);
                                }) : (n.log("XHR Error: " + A.url + " (" + t.statusText + ")"), e._done(A.name, null));
                            }, t.onerror = function(t) {
                                n.log("XHR Network failure: " + A.url), e._done(A.name, null);
                            }, t.send();
                        }, i.prototype._done = function(A, t) {
                            this._loadingTasks[A] = null !== t ? "loaded" : "failed", this._buffers.set(A, t), this._updateProgress(A);
                        }, i.prototype._updateProgress = function(A) {
                            let t = 0, e = 0, i = 0;
                            for(const n in this._loadingTasks)Object.prototype.hasOwnProperty.call(this._loadingTasks, n) && (i++, "loaded" === this._loadingTasks[n] ? t++ : "failed" === this._loadingTasks[n] && e++);
                            "function" != typeof this._progress ? t !== i ? t + e !== i || this._reject(this._buffers) : this._resolve(this._buffers) : this._progress(A, t, i);
                        }, A.exports = i;
                    },
                    function(A, t, e) {
                        "use strict";
                        function i(A, t) {
                            const e = Math.tan(Math.PI * A / t), i = e * e, n = i + 2 * e + 1;
                            return {
                                lowpassA: [
                                    1,
                                    2 * (i - 1) / n,
                                    (i - 2 * e + 1) / n
                                ],
                                lowpassB: [
                                    i / n,
                                    2 * i / n,
                                    i / n
                                ],
                                hipassA: [
                                    1,
                                    2 * (i - 1) / n,
                                    (i - 2 * e + 1) / n
                                ],
                                hipassB: [
                                    1 / n,
                                    -2 / n,
                                    1 / n
                                ]
                            };
                        }
                        const n = e(0), s = 690, o = [
                            1.4142,
                            .8166,
                            .8166,
                            .8166
                        ];
                        A.exports = function(A) {
                            if (this._context = A, this._input = this._context.createGain(), this._context.createIIRFilter) {
                                const A = i(s, this._context.sampleRate);
                                this._lpf = this._context.createIIRFilter(A.lowpassB, A.lowpassA), this._hpf = this._context.createIIRFilter(A.hipassB, A.hipassA);
                            } else n.log("IIR filter is missing. Using Biquad filter instead."), this._lpf = this._context.createBiquadFilter(), this._hpf = this._context.createBiquadFilter(), this._lpf.frequency.value = s, this._hpf.frequency.value = s, this._hpf.type = "highpass";
                            this._splitterLow = this._context.createChannelSplitter(4), this._splitterHigh = this._context.createChannelSplitter(4), this._gainHighW = this._context.createGain(), this._gainHighY = this._context.createGain(), this._gainHighZ = this._context.createGain(), this._gainHighX = this._context.createGain(), this._merger = this._context.createChannelMerger(4), this._input.connect(this._hpf), this._hpf.connect(this._splitterHigh), this._splitterHigh.connect(this._gainHighW, 0), this._splitterHigh.connect(this._gainHighY, 1), this._splitterHigh.connect(this._gainHighZ, 2), this._splitterHigh.connect(this._gainHighX, 3), this._gainHighW.connect(this._merger, 0, 0), this._gainHighY.connect(this._merger, 0, 1), this._gainHighZ.connect(this._merger, 0, 2), this._gainHighX.connect(this._merger, 0, 3), this._input.connect(this._lpf), this._lpf.connect(this._splitterLow), this._splitterLow.connect(this._merger, 0, 0), this._splitterLow.connect(this._merger, 1, 1), this._splitterLow.connect(this._merger, 2, 2), this._splitterLow.connect(this._merger, 3, 3);
                            const t = this._context.currentTime;
                            this._gainHighW.gain.setValueAtTime(-1 * o[0], t), this._gainHighY.gain.setValueAtTime(-1 * o[1], t), this._gainHighZ.gain.setValueAtTime(-1 * o[2], t), this._gainHighX.gain.setValueAtTime(-1 * o[3], t), this.input = this._input, this.output = this._merger;
                        };
                    },
                    function(A, t, e) {
                        "use strict";
                        function i(A, t) {
                            if (2 !== t.IR.numberOfChannels) throw new Error("IR does not have 2 channels. cannot proceed.");
                            this._active = !1, this._context = A, this._input = this._context.createChannelSplitter(4), this._cW = this._context.createGain(), this._cY = this._context.createGain(), this._cZ = this._context.createGain(), this._cX = this._context.createGain(), this._convolver = this._context.createConvolver(), this._gain = this._context.createGain(), this._input.connect(this._cW, 0), this._input.connect(this._cY, 1), this._input.connect(this._cZ, 2), this._input.connect(this._cX, 3), this._cW.connect(this._convolver), this._cY.connect(this._convolver), this._cZ.connect(this._convolver), this._cX.connect(this._convolver), this._convolver.connect(this._gain), this._gain.connect(this._context.destination), this.enable(), this._convolver.normalize = !1, this._convolver.buffer = t.IR, this._gain.gain.value = t.gain, this._cW.gain.value = t.coefficients[0], this._cY.gain.value = t.coefficients[1], this._cZ.gain.value = t.coefficients[2], this._cX.gain.value = t.coefficients[3], this.input = this._input;
                        }
                        i.prototype.enable = function() {
                            this._gain.connect(this._context.destination), this._active = !0;
                        }, i.prototype.disable = function() {
                            this._gain.disconnect(), this._active = !1;
                        }, A.exports = i;
                    },
                    function(A, t, e) {
                        "use strict";
                        function i(A, t, e) {
                            this._context = A, this._active = !1, this._isBufferLoaded = !1, this._ambisonicOrder = t, this._numberOfChannels = (this._ambisonicOrder + 1) * (this._ambisonicOrder + 1), this._buildAudioGraph(), e && this.setHRIRBufferList(e), this.enable();
                        }
                        i.prototype._buildAudioGraph = function() {
                            const A = Math.ceil(this._numberOfChannels / 2);
                            this._inputSplitter = this._context.createChannelSplitter(this._numberOfChannels), this._stereoMergers = [], this._convolvers = [], this._stereoSplitters = [], this._positiveIndexSphericalHarmonics = this._context.createGain(), this._negativeIndexSphericalHarmonics = this._context.createGain(), this._inverter = this._context.createGain(), this._binauralMerger = this._context.createChannelMerger(2), this._outputGain = this._context.createGain();
                            for(let t = 0; t < A; ++t)this._stereoMergers[t] = this._context.createChannelMerger(2), this._convolvers[t] = this._context.createConvolver(), this._stereoSplitters[t] = this._context.createChannelSplitter(2), this._convolvers[t].normalize = !1;
                            for(let t = 0; t <= this._ambisonicOrder; ++t)for(let A = -t; A <= t; A++){
                                const e = t * t + t + A, i = Math.floor(e / 2);
                                this._inputSplitter.connect(this._stereoMergers[i], e, e % 2), this._stereoMergers[i].connect(this._convolvers[i]), this._convolvers[i].connect(this._stereoSplitters[i]), A >= 0 ? this._stereoSplitters[i].connect(this._positiveIndexSphericalHarmonics, e % 2) : this._stereoSplitters[i].connect(this._negativeIndexSphericalHarmonics, e % 2);
                            }
                            this._positiveIndexSphericalHarmonics.connect(this._binauralMerger, 0, 0), this._positiveIndexSphericalHarmonics.connect(this._binauralMerger, 0, 1), this._negativeIndexSphericalHarmonics.connect(this._binauralMerger, 0, 0), this._negativeIndexSphericalHarmonics.connect(this._inverter), this._inverter.connect(this._binauralMerger, 0, 1), this._inverter.gain.value = -1, this.input = this._inputSplitter, this.output = this._outputGain;
                        }, i.prototype.setHRIRBufferList = function(A) {
                            if (!this._isBufferLoaded) {
                                for(let t = 0; t < A.length; ++t)this._convolvers[t].buffer = A[t];
                                this._isBufferLoaded = !0;
                            }
                        }, i.prototype.enable = function() {
                            this._binauralMerger.connect(this._outputGain), this._active = !0;
                        }, i.prototype.disable = function() {
                            this._binauralMerger.disconnect(), this._active = !1;
                        }, A.exports = i;
                    },
                    function(A, t, e) {
                        "use strict";
                        function i(A, t) {
                            return A === t ? 1 : 0;
                        }
                        function n(A, t, e, i, n) {
                            const s = (i + t) * (2 * t + 1) + (e + t);
                            A[t - 1][s].gain.value = n;
                        }
                        function s(A, t, e, i) {
                            const n = (i + t) * (2 * t + 1) + (e + t);
                            return A[t - 1][n].gain.value;
                        }
                        function o(A, t, e, i, n) {
                            return i === n ? s(A, 1, t, 1) * s(A, n - 1, e, n - 1) - s(A, 1, t, -1) * s(A, n - 1, e, 1 - n) : i === -n ? s(A, 1, t, 1) * s(A, n - 1, e, 1 - n) + s(A, 1, t, -1) * s(A, n - 1, e, n - 1) : s(A, 1, t, 0) * s(A, n - 1, e, i);
                        }
                        function r(A, t, e, i) {
                            return o(A, 0, t, e, i);
                        }
                        function a(A, t, e, n) {
                            if (0 === t) return o(A, 1, 1, e, n) + o(A, -1, -1, e, n);
                            if (t > 0) {
                                const s = i(t, 1);
                                return o(A, 1, t - 1, e, n) * Math.sqrt(1 + s) - o(A, -1, 1 - t, e, n) * (1 - s);
                            }
                            {
                                const s = i(t, -1);
                                return o(A, 1, t + 1, e, n) * (1 - s) + o(A, -1, -t - 1, e, n) * Math.sqrt(1 + s);
                            }
                        }
                        function h(A, t, e, i) {
                            return 0 === t ? 0 : t > 0 ? o(A, 1, t + 1, e, i) + o(A, -1, -t - 1, e, i) : o(A, 1, t - 1, e, i) - o(A, -1, 1 - t, e, i);
                        }
                        function c(A, t, e) {
                            const n = i(A, 0), s = Math.abs(t) === e ? 1 / (2 * e * (2 * e - 1)) : 1 / ((e + t) * (e - t));
                            return [
                                Math.sqrt((e + A) * (e - A) * s),
                                .5 * (1 - 2 * n) * Math.sqrt((1 + n) * (e + Math.abs(A) - 1) * (e + Math.abs(A)) * s),
                                -0.5 * (1 - n) * Math.sqrt((e - Math.abs(A) - 1) * (e - Math.abs(A))) * s
                            ];
                        }
                        function _(A, t) {
                            for(let e = -t; e <= t; e++)for(let i = -t; i <= t; i++){
                                const s = c(e, i, t);
                                Math.abs(s[0]) > 0 && (s[0] *= r(A, e, i, t)), Math.abs(s[1]) > 0 && (s[1] *= a(A, e, i, t)), Math.abs(s[2]) > 0 && (s[2] *= h(A, e, i, t)), n(A, t, e, i, s[0] + s[1] + s[2]);
                            }
                        }
                        function f(A) {
                            for(let t = 2; t <= A.length; t++)_(A, t);
                        }
                        function l(A, t) {
                            this._context = A, this._ambisonicOrder = t;
                            const e = (t + 1) * (t + 1);
                            this._splitter = this._context.createChannelSplitter(e), this._merger = this._context.createChannelMerger(e), this._gainNodeMatrix = [];
                            let i, n, s, o, r;
                            for(let a = 1; a <= t; a++){
                                i = a * a, n = 2 * a + 1, this._gainNodeMatrix[a - 1] = [];
                                for(let A = 0; A < n; A++){
                                    s = i + A;
                                    for(let t = 0; t < n; t++)o = i + t, r = A * n + t, this._gainNodeMatrix[a - 1][r] = this._context.createGain(), this._splitter.connect(this._gainNodeMatrix[a - 1][r], s), this._gainNodeMatrix[a - 1][r].connect(this._merger, 0, o);
                                }
                            }
                            this._splitter.connect(this._merger, 0, 0), this.setRotationMatrix3(new Float32Array([
                                1,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                1
                            ])), this.input = this._splitter, this.output = this._merger;
                        }
                        l.prototype.setRotationMatrix3 = function(A) {
                            for(let t = 0; t < 9; ++t)this._gainNodeMatrix[0][t].gain.value = A[t];
                            f(this._gainNodeMatrix);
                        }, l.prototype.setRotationMatrix4 = function(A) {
                            this._gainNodeMatrix[0][0].gain.value = A[0], this._gainNodeMatrix[0][1].gain.value = A[1], this._gainNodeMatrix[0][2].gain.value = A[2], this._gainNodeMatrix[0][3].gain.value = A[4], this._gainNodeMatrix[0][4].gain.value = A[5], this._gainNodeMatrix[0][5].gain.value = A[6], this._gainNodeMatrix[0][6].gain.value = A[8], this._gainNodeMatrix[0][7].gain.value = A[9], this._gainNodeMatrix[0][8].gain.value = A[10], f(this._gainNodeMatrix);
                        }, l.prototype.getRotationMatrix3 = function() {
                            let A = new Float32Array(9);
                            for(let t = 0; t < 9; ++t)A[t] = this._gainNodeMatrix[0][t].gain.value;
                            return A;
                        }, l.prototype.getRotationMatrix4 = function() {
                            let A = new Float32Array(16);
                            return A[0] = this._gainNodeMatrix[0][0].gain.value, A[1] = this._gainNodeMatrix[0][1].gain.value, A[2] = this._gainNodeMatrix[0][2].gain.value, A[4] = this._gainNodeMatrix[0][3].gain.value, A[5] = this._gainNodeMatrix[0][4].gain.value, A[6] = this._gainNodeMatrix[0][5].gain.value, A[8] = this._gainNodeMatrix[0][6].gain.value, A[9] = this._gainNodeMatrix[0][7].gain.value, A[10] = this._gainNodeMatrix[0][8].gain.value, A;
                        }, l.prototype.getAmbisonicOrder = function() {
                            return this._ambisonicOrder;
                        }, A.exports = l;
                    },
                    function(A, t, e) {
                        "use strict"; /**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
                        t.Omnitone = e(11);
                    },
                    function(A, t, e) {
                        "use strict";
                        const i = e(1), n = e(4), s = e(12), o = e(6), r = e(14), a = e(3), h = e(2), c = e(7), _ = e(8), f = e(16), l = e(9), u = e(19), D = e(0), g = e(20), w = e(5);
                        let d = {};
                        d.browserInfo = u.getBrowserInfo(), d.loadAudioBuffers = function(A, t) {
                            return new Promise(function(e, i) {
                                new w(A, t, function(A) {
                                    e(A);
                                }, i);
                            });
                        }, d.createBufferList = function(A, t, e) {
                            return new i(A, t, e || {
                                dataType: "url"
                            }).load();
                        }, d.mergeBufferListByChannel = D.mergeBufferListByChannel, d.splitBufferbyChannel = D.splitBufferbyChannel, d.createFOAConvolver = function(A, t) {
                            return new n(A, t);
                        }, d.createFOARouter = function(A, t) {
                            return new h(A, t);
                        }, d.createFOARotator = function(A) {
                            return new a(A);
                        }, d.createFOAPhaseMatchedFilter = function(A) {
                            return new o(A);
                        }, d.createFOAVirtualSpeaker = function(A, t) {
                            return new c(A, t);
                        }, d.createFOADecoder = function(A, t, e) {
                            return D.log("WARNING: FOADecoder is deprecated in favor of FOARenderer."), new s(A, t, e);
                        }, d.createFOARenderer = function(A, t) {
                            return new r(A, t);
                        }, d.createHOARotator = function(A, t) {
                            return new l(A, t);
                        }, d.createHOAConvolver = function(A, t, e) {
                            return new _(A, t, e);
                        }, d.createHOARenderer = function(A, t) {
                            return new f(A, t);
                        }, D.log("Version " + g + " (running " + d.browserInfo.name + " " + d.browserInfo.version + " on " + d.browserInfo.platform + ")"), "safari" === d.browserInfo.name.toLowerCase() && (u.patchSafari(), D.log(d.browserInfo.name + " detected. Appliying polyfill...")), A.exports = d;
                    },
                    function(A, t, e) {
                        "use strict";
                        function i(A, t, e) {
                            this._isDecoderReady = !1, this._context = A, this._videoElement = t, this._decodingMode = "ambisonic", this._postGainDB = f, this._HRTFSetUrl = _, this._channelMap = s.ChannelMap.DEFAULT, e && (e.postGainDB && (this._postGainDB = e.postGainDB), e.HRTFSetUrl && (this._HRTFSetUrl = e.HRTFSetUrl), e.channelMap && (this._channelMap = e.channelMap)), this._speakerData = [];
                            for(let i = 0; i < h.length; ++i)this._speakerData.push({
                                name: h[i].name,
                                url: this._HRTFSetUrl + "/" + h[i].url,
                                coef: h[i].coef
                            });
                            this._tempMatrix4 = new Float32Array(16);
                        }
                        const n = e(5), s = e(2), o = e(3), r = e(6), a = e(7), h = e(13), c = e(0), _ = "https://raw.githubusercontent.com/GoogleChrome/omnitone/master/build/resources/";
                        let f = 0;
                        i.prototype.initialize = function() {
                            c.log("Initializing... (mode: " + this._decodingMode + ")");
                            let A = this._channelMap.toString(), t = s.ChannelMap.DEFAULT.toString();
                            A !== t && c.log("Remapping channels ([" + t + "] -> [" + A + "])"), this._audioElementSource = this._context.createMediaElementSource(this._videoElement), this._foaRouter = new s(this._context, this._channelMap), this._foaRotator = new o(this._context), this._foaPhaseMatchedFilter = new r(this._context), this._audioElementSource.connect(this._foaRouter.input), this._foaRouter.output.connect(this._foaRotator.input), this._foaRotator.output.connect(this._foaPhaseMatchedFilter.input), this._foaVirtualSpeakers = [], this._bypass = this._context.createGain(), this._audioElementSource.connect(this._bypass);
                            const e = Math.pow(10, this._postGainDB / 20);
                            c.log("Gain compensation: " + e + " (" + this._postGainDB + "dB)");
                            const i = this;
                            return new Promise(function(A, t) {
                                new n(i._context, i._speakerData, function(t) {
                                    for(let A = 0; A < i._speakerData.length; ++A)i._foaVirtualSpeakers[A] = new a(i._context, {
                                        coefficients: i._speakerData[A].coef,
                                        IR: t.get(i._speakerData[A].name),
                                        gain: e
                                    }), i._foaPhaseMatchedFilter.output.connect(i._foaVirtualSpeakers[A].input);
                                    i.setMode(i._decodingMode), i._isDecoderReady = !0, c.log("HRTF IRs are loaded successfully. The decoder is ready."), A();
                                }, t);
                            });
                        }, i.prototype.setRotationMatrix = function(A) {
                            this._foaRotator.setRotationMatrix(A);
                        }, i.prototype.setRotationMatrixFromCamera = function(A) {
                            c.invertMatrix4(this._tempMatrix4, A.elements), this._foaRotator.setRotationMatrix4(this._tempMatrix4);
                        }, i.prototype.setMode = function(A) {
                            if (A !== this._decodingMode) {
                                switch(A){
                                    case "bypass":
                                        this._decodingMode = "bypass";
                                        for(let A = 0; A < this._foaVirtualSpeakers.length; ++A)this._foaVirtualSpeakers[A].disable();
                                        this._bypass.connect(this._context.destination);
                                        break;
                                    case "ambisonic":
                                        this._decodingMode = "ambisonic";
                                        for(let A = 0; A < this._foaVirtualSpeakers.length; ++A)this._foaVirtualSpeakers[A].enable();
                                        this._bypass.disconnect();
                                        break;
                                    case "off":
                                        this._decodingMode = "off";
                                        for(let A = 0; A < this._foaVirtualSpeakers.length; ++A)this._foaVirtualSpeakers[A].disable();
                                        this._bypass.disconnect();
                                }
                                c.log("Decoding mode changed. (" + A + ")");
                            }
                        }, A.exports = i;
                    },
                    function(A, t) {
                        A.exports = [
                            {
                                name: "E35_A135",
                                url: "E35_A135.wav",
                                gainFactor: 1,
                                coef: [
                                    .125,
                                    .216495,
                                    .21653,
                                    -0.216495
                                ]
                            },
                            {
                                name: "E35_A-135",
                                url: "E35_A-135.wav",
                                gainFactor: 1,
                                coef: [
                                    .125,
                                    -0.216495,
                                    .21653,
                                    -0.216495
                                ]
                            },
                            {
                                name: "E-35_A135",
                                url: "E-35_A135.wav",
                                gainFactor: 1,
                                coef: [
                                    .125,
                                    .216495,
                                    -0.21653,
                                    -0.216495
                                ]
                            },
                            {
                                name: "E-35_A-135",
                                url: "E-35_A-135.wav",
                                gainFactor: 1,
                                coef: [
                                    .125,
                                    -0.216495,
                                    -0.21653,
                                    -0.216495
                                ]
                            },
                            {
                                name: "E35_A45",
                                url: "E35_A45.wav",
                                gainFactor: 1,
                                coef: [
                                    .125,
                                    .216495,
                                    .21653,
                                    .216495
                                ]
                            },
                            {
                                name: "E35_A-45",
                                url: "E35_A-45.wav",
                                gainFactor: 1,
                                coef: [
                                    .125,
                                    -0.216495,
                                    .21653,
                                    .216495
                                ]
                            },
                            {
                                name: "E-35_A45",
                                url: "E-35_A45.wav",
                                gainFactor: 1,
                                coef: [
                                    .125,
                                    .216495,
                                    -0.21653,
                                    .216495
                                ]
                            },
                            {
                                name: "E-35_A-45",
                                url: "E-35_A-45.wav",
                                gainFactor: 1,
                                coef: [
                                    .125,
                                    -0.216495,
                                    -0.21653,
                                    .216495
                                ]
                            }
                        ];
                    },
                    function(A, t, e) {
                        "use strict";
                        function i(A, t) {
                            this._context = h.isAudioContext(A) ? A : h.throw("FOARenderer: Invalid BaseAudioContext."), this._config = {
                                channelMap: a.ChannelMap.DEFAULT,
                                renderingMode: c.AMBISONIC
                            }, t && (t.channelMap && (Array.isArray(t.channelMap) && 4 === t.channelMap.length ? this._config.channelMap = t.channelMap : h.throw("FOARenderer: Invalid channel map. (got " + t.channelMap + ")")), t.hrirPathList && (Array.isArray(t.hrirPathList) && 2 === t.hrirPathList.length ? this._config.pathList = t.hrirPathList : h.throw("FOARenderer: Invalid HRIR URLs. It must be an array with 2 URLs to HRIR files. (got " + t.hrirPathList + ")")), t.renderingMode && (Object.values(c).includes(t.renderingMode) ? this._config.renderingMode = t.renderingMode : h.log("FOARenderer: Invalid rendering mode order. (got" + t.renderingMode + ') Fallbacks to the mode "ambisonic".'))), this._buildAudioGraph(), this._tempMatrix4 = new Float32Array(16), this._isRendererReady = !1;
                        }
                        const n = e(1), s = e(4), o = e(15), r = e(3), a = e(2), h = e(0), c = {
                            AMBISONIC: "ambisonic",
                            BYPASS: "bypass",
                            OFF: "off"
                        };
                        i.prototype._buildAudioGraph = function() {
                            this.input = this._context.createGain(), this.output = this._context.createGain(), this._bypass = this._context.createGain(), this._foaRouter = new a(this._context, this._config.channelMap), this._foaRotator = new r(this._context), this._foaConvolver = new s(this._context), this.input.connect(this._foaRouter.input), this.input.connect(this._bypass), this._foaRouter.output.connect(this._foaRotator.input), this._foaRotator.output.connect(this._foaConvolver.input), this._foaConvolver.output.connect(this.output), this.input.channelCount = 4, this.input.channelCountMode = "explicit", this.input.channelInterpretation = "discrete";
                        }, i.prototype._initializeCallback = function(A, t) {
                            (this._config.pathList ? new n(this._context, this._config.pathList, {
                                dataType: "url"
                            }) : new n(this._context, o)).load().then((function(t) {
                                this._foaConvolver.setHRIRBufferList(t), this.setRenderingMode(this._config.renderingMode), this._isRendererReady = !0, h.log("FOARenderer: HRIRs loaded successfully. Ready."), A();
                            }).bind(this), function() {
                                const A = "FOARenderer: HRIR loading/decoding failed.";
                                h.throw(A), t(A);
                            });
                        }, i.prototype.initialize = function() {
                            return h.log("FOARenderer: Initializing... (mode: " + this._config.renderingMode + ")"), new Promise(this._initializeCallback.bind(this), function(A) {
                                h.throw("FOARenderer: Initialization failed. (" + A + ")");
                            });
                        }, i.prototype.setChannelMap = function(A) {
                            this._isRendererReady && A.toString() !== this._config.channelMap.toString() && (h.log("Remapping channels ([" + this._config.channelMap.toString() + "] -> [" + A.toString() + "])."), this._config.channelMap = A.slice(), this._foaRouter.setChannelMap(this._config.channelMap));
                        }, i.prototype.setRotationMatrix3 = function(A) {
                            this._isRendererReady && this._foaRotator.setRotationMatrix3(A);
                        }, i.prototype.setRotationMatrix4 = function(A) {
                            this._isRendererReady && this._foaRotator.setRotationMatrix4(A);
                        }, i.prototype.setRotationMatrixFromCamera = function(A) {
                            this._isRendererReady && (h.invertMatrix4(this._tempMatrix4, A.elements), this._foaRotator.setRotationMatrix4(this._tempMatrix4));
                        }, i.prototype.setRenderingMode = function(A) {
                            if (A !== this._config.renderingMode) {
                                switch(A){
                                    case c.AMBISONIC:
                                        this._foaConvolver.enable(), this._bypass.disconnect();
                                        break;
                                    case c.BYPASS:
                                        this._foaConvolver.disable(), this._bypass.connect(this.output);
                                        break;
                                    case c.OFF:
                                        this._foaConvolver.disable(), this._bypass.disconnect();
                                        break;
                                    default:
                                        return void h.log('FOARenderer: Rendering mode "' + A + '" is not supported.');
                                }
                                this._config.renderingMode = A, h.log("FOARenderer: Rendering mode changed. (" + A + ")");
                            }
                        }, A.exports = i;
                    },
                    function(A, t) {
                        A.exports = [
                            "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAD+/wIA9v8QAPv/CwD+/wcA/v8MAP//AQD7/wEACAAEAPj/+v8YABAA7v/n//v/9P/M/8D//f34/R38EvzxAfEBtA2lDTcBJQFJ9T71FP0D/cD1tfVo/Wv9uPTO9PPmOufc/U/+agL3Aisc/RxuGKEZBv3j/iYMzQ2gAzsEQQUABiQFrASzA5cB2QmyCy0AtgR4AeYGtfgAA2j5OQHP+scArPsMBJgEggIEBtz6+QVq/pj/aPg8BPP3gQEi+jEAof0fA1v9+/7S+8IBjvwd/xD4IADL/Pf9zvs+/l3+wgB7/+L+7fzFADH9kf6A+n3+DP6+/TP9xP68/pn+w/26/i39YgA0/u790Pt9/kD+7v1s/Wb+8f4C/1P+pf/x/cT+6/3p/Xz9ff5F/0f9G/4r/6v/4P5L/sL+ff7c/pj+Ov7X/UT+9P5G/oz+6v6A/2D+9/6P/8r/bP7m/ij+C//e/tj/Gf4e/9v+FwDP/lz/sP7F/2H+rv/G/s7/Hf7y/4P+NAD9/k0AK/6w/zP/hACh/sX/gf44AOP+dgCm/iUAk/5qAOD+PwC+/jEAWP4CAAr/bQBw/vv/zf5iACD/OgCS/uD/Cv9oAAb/CgDK/kwA//5tACH/TgCg/h4AHP9aABP/JADP/hEAYv9gAAj/3f8m/ysAYv8gACX/8/8k/ysAXv8bABH//v8j/ygAa/8qAAD/9f9g/1YAWf8JACH/AgB2/z4AXP/w/z3/FgB2/ykAX//9/z//EwCV/zUAS//n/1T/GACK/x4ATv/0/4P/QQB4//v/WP/2/3X/HAB8//P/V//3/2f/AQBh/9v/Tf/x/5P/IwCI/wMAf/8hAKP/JACZ/xUAiv8nAK//HgCr/yMAm/8uAMz/OACi/yQAqf87AMT/MwCY/yUAtP9FAMH/KgCu/ycAyP85AMv/IwCz/xoA1f8qAMn/FgC8/xQA4/8nAMX/CwDJ/xQA4f8ZAMH/BgDO/xQA4f8WAMP/BwDU/xQA4P8QAMH/AQDb/xQA3P8JAMP/AgDh/xIA2v8EAMj/AgDk/w0A1f/+/8v/AwDm/wwA0v/+/9H/BgDl/wkAzv/8/9T/BwDk/wcAzv/8/9r/CQDi/wQAzf/8/9//CADf////0P/9/+L/BwDd//7/0////+T/BgDb//z/1f8AAOf/BQDZ//v/2v8CAOb/AwDY//v/3v8EAOb/AgDY//3/4f8FAOX/AQDZ//7/5P8GAOP/AADb/wAA5/8GAOH////d/wIA5/8FAOD////f/wMA6P8FAOD////h/wQA6P8EAN7////h/wUA4v8DANv/AQDd/wQA3P8CANn/AgDb/wMA2/8CANv/AgDd/wIA3v8CAOH/AQDj/wEA",
                            "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAAAAAAA/f8CAP//AQD//wEA//8BAP3/AAACAP7/+f8AAAIA/P8FAAQA8/8AABoA+f/V/wQAHQDO/xoAQQBO/ocA0Px1/ucHW/4UCm8HLO6kAjv8/fCRDdAAYfPiBIgFXveUCM0GBvh6/nz7rf0J/QcQSRVdBgoBSgFR62r9NP8m+LoEAvriBVAAiAPmABEGMf2l+SwBjva6/G4A//8P/CYDMgXm/R0CKAE6/fcBBwAtAND+kQA0A5UDhwFs/8IB8fydAEP/A/8v/e7/mP8j/2YBIwE3Av0AYv+uAOD8lgAg/wwAIf/L/n0Ae//OAJMB3P/XAF//XwCM/08AB/8NAEf/rf4jAT3/lgAJAP4AHgDpAO8AUf9L/07/Qf8KAOD/x/+D/3sATQCDAMoA0f79/+L/EQDt/7EAqv+S/7IAuv/o/wgAc//X//H/SwCm/+3/Yf/B/yoAAADI/7X/AwBg/5EATgCX/xYA/P+q/00AVACY/6v/BADD/zwALQCN/8z/KQDu/ygAEgCZ/6f/VQDC//T/KQCs/7P/UgAfAO7/NgC8/57/awAZAPP/+P/V/8z/bQBBAL//DgD0/+T/TABBAMz/CwAxAPz/SQBqALn/BgALAPz/EAA7AIz/3/8iAAUA//8kALf/y/9VABQA+v81AOj/0P9cAB4A+f8WAOr/vv83ABgAw/8JAOj/4f8nACIAsf/y/w4A3v8gACQAxP/n/ycA7P8WAC0Ayf/U/ycA9v/7/yUA0P/P/zUABADc/xUA5P/J/zcACwDS/xUA9P/m/zAACQDX/+3/9v/2/yQACgDZ/+P/AwAKABYA///b/9j/EQALABkADgD6/+7/GwD4/w4A8P/w//j/EgAEAAUA9f/1/wQAGgD4/wAA5////wAAGQD1////7f8FAAUAFQDv/wAA6v8LAAcAFQDs/wEA9P8SAAYACwDr//7/AQASAAYABQDv/wIAAwAWAAIAAgDv/wAABgATAAEA/f/u/wQABgAQAPr/+P/z/wUACQALAPj/9//4/wgABwAKAPT/+f/5/w4ABwAIAPT/+//9/w4AAwADAPH//f///w8A//8BAPP///8BAA0A/f/+//X/AgACAA0A+//8//b/BAADAAoA+f/7//n/BgADAAcA+P/7//v/BwABAAQA+P/8//3/CQABAAIA9//9////CQD/////+P///wAACAD9//7/+f8AAAAABwD8//3/+v8CAAAABgD7//z//P8EAAAABAD6//3//P8FAP//AgD6//7//v8FAP7/AQD7//////8GAP7/AAD7/wEA//8EAP3/AAD9/wEA/v8DAP3/AAD9/wIA/v8CAP3/AQD9/wIA/v8CAP7/AQD+/wEA"
                        ];
                    },
                    function(A, t, e) {
                        "use strict";
                        function i(A, t) {
                            this._context = h.isAudioContext(A) ? A : h.throw("HOARenderer: Invalid BaseAudioContext."), this._config = {
                                ambisonicOrder: 3,
                                renderingMode: c.AMBISONIC
                            }, t && t.ambisonicOrder && (_.includes(t.ambisonicOrder) ? this._config.ambisonicOrder = t.ambisonicOrder : h.log("HOARenderer: Invalid ambisonic order. (got " + t.ambisonicOrder + ") Fallbacks to 3rd-order ambisonic.")), this._config.numberOfChannels = (this._config.ambisonicOrder + 1) * (this._config.ambisonicOrder + 1), this._config.numberOfStereoChannels = Math.ceil(this._config.numberOfChannels / 2), t && t.hrirPathList && (Array.isArray(t.hrirPathList) && t.hrirPathList.length === this._config.numberOfStereoChannels ? this._config.pathList = t.hrirPathList : h.throw("HOARenderer: Invalid HRIR URLs. It must be an array with " + this._config.numberOfStereoChannels + " URLs to HRIR files. (got " + t.hrirPathList + ")")), t && t.renderingMode && (Object.values(c).includes(t.renderingMode) ? this._config.renderingMode = t.renderingMode : h.log("HOARenderer: Invalid rendering mode. (got " + t.renderingMode + ') Fallbacks to "ambisonic".')), this._buildAudioGraph(), this._isRendererReady = !1;
                        }
                        const n = e(1), s = e(8), o = e(9), r = e(17), a = e(18), h = e(0), c = {
                            AMBISONIC: "ambisonic",
                            BYPASS: "bypass",
                            OFF: "off"
                        }, _ = [
                            2,
                            3
                        ];
                        i.prototype._buildAudioGraph = function() {
                            this.input = this._context.createGain(), this.output = this._context.createGain(), this._bypass = this._context.createGain(), this._hoaRotator = new o(this._context, this._config.ambisonicOrder), this._hoaConvolver = new s(this._context, this._config.ambisonicOrder), this.input.connect(this._hoaRotator.input), this.input.connect(this._bypass), this._hoaRotator.output.connect(this._hoaConvolver.input), this._hoaConvolver.output.connect(this.output), this.input.channelCount = this._config.numberOfChannels, this.input.channelCountMode = "explicit", this.input.channelInterpretation = "discrete";
                        }, i.prototype._initializeCallback = function(A, t) {
                            let e;
                            (e = this._config.pathList ? new n(this._context, this._config.pathList, {
                                dataType: "url"
                            }) : 2 === this._config.ambisonicOrder ? new n(this._context, a) : new n(this._context, r)).load().then((function(t) {
                                this._hoaConvolver.setHRIRBufferList(t), this.setRenderingMode(this._config.renderingMode), this._isRendererReady = !0, h.log("HOARenderer: HRIRs loaded successfully. Ready."), A();
                            }).bind(this), function() {
                                const A = "HOARenderer: HRIR loading/decoding failed.";
                                h.throw(A), t(A);
                            });
                        }, i.prototype.initialize = function() {
                            return h.log("HOARenderer: Initializing... (mode: " + this._config.renderingMode + ", ambisonic order: " + this._config.ambisonicOrder + ")"), new Promise(this._initializeCallback.bind(this), function(A) {
                                h.throw("HOARenderer: Initialization failed. (" + A + ")");
                            });
                        }, i.prototype.setRotationMatrix3 = function(A) {
                            this._isRendererReady && this._hoaRotator.setRotationMatrix3(A);
                        }, i.prototype.setRotationMatrix4 = function(A) {
                            this._isRendererReady && this._hoaRotator.setRotationMatrix4(A);
                        }, i.prototype.setRenderingMode = function(A) {
                            if (A !== this._config.renderingMode) {
                                switch(A){
                                    case c.AMBISONIC:
                                        this._hoaConvolver.enable(), this._bypass.disconnect();
                                        break;
                                    case c.BYPASS:
                                        this._hoaConvolver.disable(), this._bypass.connect(this.output);
                                        break;
                                    case c.OFF:
                                        this._hoaConvolver.disable(), this._bypass.disconnect();
                                        break;
                                    default:
                                        return void h.log('HOARenderer: Rendering mode "' + A + '" is not supported.');
                                }
                                this._config.renderingMode = A, h.log("HOARenderer: Rendering mode changed. (" + A + ")");
                            }
                        }, A.exports = i;
                    },
                    function(A, t) {
                        A.exports = [
                            "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAD+/wQA8/8YAP3/CgACAAAA//8CAAYA8/8AAPH/CgDv/97/e/+y/9P+UQDwAHUBEwV7/pP8P/y09bsDwAfNBGYIFf/Y+736+fP890Hv8AGcC3T/vwYy+S70AAICA3AD4AagBw0R4w3ZEAcN8RVYAV8Q8P2z+kECHwdK/jIG0QNKAYUElf8IClj7BgjX+/f8j/l3/5f/6fkK+xz8FP0v/nj/Mf/n/FcBPfvH/1H3+gBP/Hf8cfiCAR/54QBh+UQAcvkzAWL8TP13+iD/V/73+wv9Kv+Y/hv+xPz7/UL83//a/z/9AP6R/5L+jf26/P3+rP26/tD8nP7B/Pv+WP1V/sP9gv91/3P9xP3J/nv/GP5S/sb+IP8v/9j/dv7U/pr+6v+u/Z3/sv5cAOr9Q/83/+n/zP5x/57+2//k/nwA/v01//L+SACB/sD/Ff81AJT+TgDp/ocAm/5dAFT+MgD+/pMAW/7o/yH/xQDA/kkA9P6LAL3+pAC0/iQAz/5UALD+UwAt/3UAhf4UAA//pwC+/joAz/5aAAv/fwDY/iMAIf+uAPP+ZAAc/0QAy/4xAB7/TgDs/goADP8wAEL/NwDo/ub/Uf9BAC3/+v9F/y4ARP9HAFP/EQA3/xMATP81AG3/HQAu/wgAaP9FACb/9f9B/y0AUP8rAED/CwBV/z4AW/8TAGH/BQBK/xsAfv8eAFn/AgB3/zwAff8RAGj//v+E/yAAb//0/3n/FwBz/xcAiv8PAHn/FQCJ/xgAg//x/3j/EQCa/ycAff/w/47/HwCI//X/iv/7/43/JQCM/+n/kP8AAJb/JACj//7/oP8ZAML/SwCo/w4Atv8tAMb/PACr/xcAwP9HAMP/OADF/y4A0f9IANL/NwC//zEA0f9LAMb/MAC8/y4A3f9GAMH/FQDQ/yYA2/8sAMT/AwDX/xkA3v8SAM3/9v/c/w8A4f8LAMj/8f/h/xQA2P8CAMn/8//j/xQA0v/7/9H//P/i/xEA0v/1/9L//f/j/w0A0f/x/9f//v/k/wgAz//u/9z/AwDg/wMA0P/v/9//BQDf////0v/y/+D/CADc//3/0v/2/+L/CgDa//r/1v/5/+T/CgDY//j/2f/9/+T/CADY//f/3P8AAOT/BwDY//f/4P8EAOP/BADZ//j/4v8GAOL/AwDa//r/5f8IAOH/AQDc//3/5v8JAOD//v/f////5v8IAOD//v/h/wIA5/8HAOD//f/j/wMA5/8GAOD//f/l/wYA5v8EAOD//v/m/wYA5f8CAOL////n/wYA5P8BAOH/AADl/wUA4f///+H/AQDk/wMA4f///+T/AQDm/wEA5////+r/AADt/wAA7/////P/AAD1////",
                            "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAD//////v///wAAAAAAAAAAAQAAAAAA///9/wAABAD+//n/AgAJAAAA+v/+//f/DAAdAPv/+v+l/8L+jf/4/vgAdwVPAQACLQBo+Qj/Ev7o/N3/VgCbA08Bxf+L+yn9J/2HCU8FmgBvDe30Rv5h/LT09gi5CxkA5gOi8/30kwEM+4YJMf2nBmkJJAQQBLoFtvvv+m4A7PF6/R0Bif3qAuf8WARAAf4GyABG/BIAwvr4Acv8U//c/yIC8AEn/B8Daf2CAgMBAf3MAN38vgLK/UT/QwCyAPYClPyvAW/+pQAoASD+zP+R/IYC1f7C/nEBQP96AZb+1QAIAM//yQE7/tkAZ/7TAXL/w/8+AIsAtwB7/24A4v9a/z4A7v4iADb/dwCj/23/kgBOANUAIv8lAKEAxP9gAK7/BwCP/5kA7/9v/0wAzv9DAGT/3/9vAHv/6P+q/xUA7P8XAO//uv/g/2UAEgCV/wEATADM/+7/+//j/+D/9v/i//j/IgD+/xoAxf/6/z4A5/+8/9D/QwDq/+3/OQDT/zUAIgA/APP/PgAjAPD/BwAGACAADAC3//b/HAA3AN//RgDN/w8AIAACAN//GQBDACEAIwA+ACoAJQAeAPz/KgAYAPr/DgAEABYAIgAcAMT/7f8OAOL/5P/2//L/9P8GAPT/7v/8/+7/6v/t//z/AgAUAOL//P8VAAMA4/8IAPb/+P8MAAoA5v8NAAsA9v///wEAAAD9//n/9/8JAAYA7v/6/wMA+f8GAAEA7f/7/xgACAD4/w8A///3/w0A+f8BAAIA/P/5/xIA///9//r/7v/+/xYACQD///H/CwDz/wEADgAHAPP/FADn/+3/AQD5//f/AgD7/wEABwAMAAEADQD8//n/8f8OAPX/BAD+//X/+v8WAAQA+f8CAAEA7/8QAAEA/P8DAAUA9f8KAAwA9v8DAAUA+f8OAAoA9f/7/w0A+v8EAAgA8P/6/woA+//8/wkA+P/3/woA+//8/wcA9//1/woAAwD5/wcA/P/3/w0AAwD3/wEABAD2/wkABgD3/wEABQD3/wUABQD3//v/BwD3/wMABQD3//r/CQD7////BQD6//n/CQD9//3/BAD9//j/BwAAAPv/AwD///j/BwABAPn/AQABAPn/BQACAPn///8DAPr/AwADAPr//v8EAPv/AQADAPv//P8FAP3///8DAPz/+/8FAP7//f8CAP7/+/8EAP///P8BAP//+/8DAAEA+/8AAAEA+/8CAAIA+////wIA/f8AAAIA/P/+/wIA/f8AAAIA/f/9/wMA/////wEA///+/wIA/////wAAAAD+/wAAAAD/////AAD//wAA//8AAP//AAD//wAA",
                            "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAD////////+//////8AAP////8AAP//AAAAAPz//f8IAAMA9////w4AAQD6/wwA8//+/y8Afv/0/2H/UP5gAbH+2QG1B2cAVAIh/l32FPyM/nACPQDV/+UEo/Q6AQwCu/oLD9kF8QJA/Uz+Wf2KCOcC+wUKBsL5aQBQ97rwOPiPAvn5CAl8AHEDkQPcAA8Bn/lIAdz7HQF1+xz9cAM4/94E4gDKAun+cgPYAYr9JgJr/bf+ivxz/MoBgv5UA8EBSgAQAJ7/UgEk/cQB7f63/sD/vf4XAhT/BQFCADYAnQGI/9EBtv3hALD/vP+c/3H/TgIN/1sBpf8yAP3/4f8qABr+1f8OAJ3/dwAGADEBnv9JAPz/IQBwAIH/jgAS/4wAsACTAOn/DQDCALn/ZQCSAAIAAwD1/9//jv9aADQA/v9EAB0AfgA8AAQACgB9APr/IAARAPT/5v9xACAABAAHAGUAt/89AC4ACgAjAMP/+v/9/xYA7f/1/+D/7P87AC0Auv8RAAcA9/8FAC8A2//y/xIAEwAaADQAJADp/zoAAgAfABIA2f/e/zUA+P/6/w4A9//A/zcA4//P//T/5f/R////EwDb/w4A8/8BABkANADh/xEA+f/0/wIAHADc//j/GwD1//f/GADs/+v/EAAAAPz/EgD3/+r/FgAMAAkAGAD9/+z/IQAQAPH/GQD3//z/CgAfAOX/AgD8//H/BAATAOv/+v///wIABAAdAOj/BQAPAAcAAQATAOz/8/8JAAkA6f8VAOv/+f8QABUA/v8OAO3/+P8KABUA9f8FAPv/5/8TAA0A7f8XAAkAAQAJABYA4/8WAAcACgANABEA7v8EAP7/AAD+/wMA9//7/xAAAQD8/wQA+f/7/wMABgDq/wAA+v/3/wYACQD1//3/BAD9/wgADgDw//r/AgD6/wEACADv//j/BQD///X/BwDu//j/AgACAPP/BAD2//n/BAAGAPb/BAD8//3/BQAJAPL/AwD+//3/BAAIAPP//f8DAPz/AAAGAPP/+/8CAP7//f8FAPX/+f8DAAAA/P8EAPf/+v8GAAMA+/8EAPv/+/8GAAQA+v8CAP///P8EAAUA+f8AAP///f8CAAUA+P///wEA/v8BAAUA+f/+/wIAAAD//wUA+v/9/wMAAQD9/wQA+//9/wMAAgD8/wMA/P/9/wMAAwD7/wEA/v/+/wIAAwD6/wEA///+/wAABAD6/wAAAQD//wAAAwD7////AQAAAP//AwD8//7/AgABAP3/AgD9//7/AQABAP3/AQD+//7/AAACAPz/AAD+//////8BAP3/AAD//wAA//8BAP7/AAD//wAA/v8AAP7/AAD//wAA//8AAP//",
                            "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAD//////P/9//3//////wAAAAAAAAIAAgACAP//CAAEAEEA//+cAAUAb/8HAAH9+P9eARkAogQUAJn8BwCd/gX/+QQNAKoC9gFdAtb/b/vd/936TP/6AsD/nfqn/un1W/0dA8IEsQLvAJv2bP72+WMAkP8dAcX+nQO2AIr6bP/EABX+NgK/Bdj2IQv2AE4EUAiD/xQAnwIm/B0B/wGNAoH7sQaP/b8CiQakAqD+R/9xA477KQL//6r75v/O/pcCgQCtAiMCBQAkANAARwHf//39hgBl/kUAJgEtAUEATgA/AgoASADK/zUAJv29/vL+l/9c/0cAUwBBAE8A6QE5/87/Wv9NAOf+5v7P/5P/4/9BAKYAQwDD/zYB5v+r/zYATwAp/1v/WQAEAB0AhwA0AA0AIAA3AAEAzv/u/+//5v9m/zwAIADQ/8T/SABiANb/SwAbAFf/MQDX/7L/hP8TAPr/AgAMAAsAHwAZAI3/VgDC/9v/5//x/6P/AwBlAMv/yf82AB4A+P9WAPj/NwDi/1EA0v9JANj/JwAcAAEADABYANj/4f8MAEwAmP82AN//3P8UADYA7//6/wIACADU/ygAyv82AN7/9v/2/ygAxv/9/+3/5//n/zUA6//g/y4ADgD5/wsABwDv/xIADwAGACoAJQD3/zIA+/8FABsAFgDO/zAAHAAIABQALADp/xcACAAAAPH/GADs/wkACQAFAAgAFQDp/wIAHAD1//P/EQDw/+3/GAD9/+f/HAD8//T/DAAQAPH/HwD4//r/DwAPAOj/EQACAOn/DAAXAOX/BAAOANH/9/8MAO//9f8LANT/9f8EAO//6f8NANb/+P8KAOz/5v8MAOD/7f8UAO//7//+//7/9v8YAPj/9f/z/wsA+v8SAPD/+v/x/xYA+f8SAPb/9//3/xEABQACAPn/9//y/xQACQD///b//v/7/xIACQD9//H/AAD7/xEAAgD5//P/AwD9/w8AAgD3//D/BAD//wUA/v/0//D/BgADAAMA/P/2//f/BwAGAP7/+//2//j/CAAFAPv/+f/5//v/BwAHAPn/9//7//7/BQAFAPf/9//+/wEABAACAPf/+P8BAAIAAgAAAPj/9/8CAAMAAAD+//n/+f8EAAQA/v/8//r/+/8EAAMA/P/7//z//P8EAAIA/P/5//7//v8DAAEA+//5//////8CAAAA+//5/wEAAAABAP//+//6/wIAAQD///3//P/7/wMAAQD///3//f/9/wIAAQD9//3//v/9/wMAAQD9//z/AAD//wEAAAD9//z/AAAAAAAA///9//3/AAD//wAA/v////7/AAD//wAA////////AAD//wAA//8AAP//",
                            "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAD+////+f////v//v///wAA/////wUAAQAIAAIABwACAHkATAAOAaMAAf9C/9X6QvwhArAAtghABW37nv/y+0wAWQNcAE8JRwSOC6AEJe8P8S/zrPWaBI/+LQA/+0L+P/4K8AgAb/8uCh78BQtC614GaQWfAin5UfzN8Tf+GQizAZ4MCQMbGJ4BoRS7AvcHyQARA6n9ZwHZ/z4DvwAZAlAB6gbNAS4GFADFATL7E/2K+j37C/xp/SD9Uv0VAOsDs//WAd3+bv7F/f79mP2X/KH+FwC0/1n+VgFcATABHQGaAET+nf8Y/hoAovpqAXj9CQKW/lsCl/4RApj+bAHk/RcAlv4BAG/+DgDi//3/GwAOAEIAq/+y/3z/8v8+/7T/Tv8//27/mgDZ/1sA+P+cAAAA/P/i/yMAi/85AMP/KgDM/9MA9P+QABoA4QAiACwACwBdAP7/TQDb/y0Ayf+SAA0AZwDg/4wA+/8/AAMAgQDp/w0ADAAQAAoANgAgAA4AKABIAB4A4v/3/+f/+v/c/+n/EADn/wgAFAAqAOz/IwDc/9//3f8XAND/2v/a/w0A5v8BANb/9P/m/wAA8P8ZAN3/RwAGAEsABgB/AP7/NAASAEgABAA3AP3/KgD9/1sA8P8lAOr/FgD1/xAA4/8kAOv/AwD4/xEA5f8NAPT/+v/3/x8A7f8PAPj/IwD5/yAA9/8ZAAEAGgD4/xoA9f8HAAMACAD0/xgA+P8AAPr/IQDp/w4A8v8HAPX/IgD1/wYA+P8GAPX/GgD3/woABQASAAcAGQDw/+v/9P8bAP3/HADs/+f/7/8LAPr//v/0//T/AgD2/wsA6P///+P/CADY//7/5v/3/wQA/v8LAPD/GgD1/yMA/P8QAOv/LADw/yQA+P8XAO7/MQD9/yEAAQAcAPD/IgD9/xMA+/8OAO//FQABAAoA+/8PAPP/FQABAAQA9/8PAPX/CAADAAEA+P8NAPv/CAAGAAUA9/8JAP//AAAFAPz/+f8HAAQA/f8FAP3//P8FAAYA+P8DAP7/+/8AAAcA9/8BAP///f///wgA9//+/wAA/v/8/wUA9//8/wIA///7/wUA+v/7/wIAAAD6/wMA/P/6/wEAAQD6/wEA/v/7/wIAAgD6////AAD7/wEAAgD7//7/AQD8/wAAAwD8//3/AwD9/wAAAgD9//z/AwD/////AgD+//z/AwAAAP7/AQD///3/AgABAP3/AAAAAP3/AgACAPz///8BAP3/AQACAP3//v8BAP7/AAABAP3//v8CAP7///8BAP7//f8CAP////8AAAAA/v8CAAAAAAAAAAAA/v8BAAAAAAD//wAA//8AAP//AAD//wAA//8AAP//",
                            "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAAAAP//AAD//wAA//8AAAAA/////wAAAQD+////AAAGAP3/OAABAIIAAwBv//f/E/0QAK0ADQCzA/7/8P4u/0cBDQCJA6ABbQDg/w7/z/9o+Vn/SPnL/1//Ef+2+jr9RfZgA5QFZwILDFj+PAb2/nEFKgKk/R0Dlv6b/FUDsP6YAoj9SgAT/iL/tAPwAv8A0P6zAr7/dwAnAf39uP22/skA2v///2YCoP4UAUsAZgF2AJH+4P70/rz9+f+U/Xv/8v7CAcb+TACS/kwAv/+x/tX9oP71/oL/1f8nAEUAZwGtAAgAIgC/AD4BaP8GAGH/dQDF/64Arf8nAakAhAH9/+kAQQD3AFb/q/8p/yIAR/8FAPD/ZAA/AIYA3v8tADQADQBp/3f/CwABAP3/Wf8OANj/WwDH/xoAe/8DAKz/zv96/z8A3f/J/5X/IAD5//j/q//c/+//RADq//D/vv8pADUAFQDI/y8ACAAbANb/OwD3/+3/9f/e/wcAIAAeAMH/8/8xAC0AEADW/+3/HAADAPv/8P8DAOL/OwD3/xcACQAHAM//5f8XAAcAz//T/9D/HgD9////yf/e//v/AgD//9H/6/////H/+/8hAAIA9//7/w0AFgAQAPL/2v/8/xsAGQABANz/9P8YAAQA/v/y/wMA5v8YAAkAAAAAAAMA7/8KABgADwDs//j/BwATABsA8P/1//z/BAAMAAAA9P/s/xAA/v8GAAkA/v/p/wMACwALAP7/9P/p/wcADQAFAPb/7//4/w0ACAD8//b//v/1/wMACwD1//T/8P/8/wAACQDz/+f/5P8GAAkABQD5//D/+v8FAA0AAwD///T/AgACABAA/v8CAPD/+/8FAAoA9f/3//f//v8GAP7/9v/t//z/+f8AAPj/+v/3/wEA+v8HAPr//P/5/wQA//8DAPr/+P/3/wYA///+//X/+//5/wQA/f/7//X/+//4/wMA/f/8//j//v/9/wYA///8//f/AgAAAAUA/f/6//n/AwACAAIA/f/7//z/AwACAAAA/f/6//3/AgADAP7//f/7/wAAAwAFAPz////8/wMAAgAEAPv//v/+/wMAAgADAPv//v///wMAAQABAPv//f8AAAIAAAD///v//f8BAAIA///+//z//v8CAAIA/v/9//3///8CAAEA/v/9//7/AAACAAAA/v/9////AAABAAAA/f/9/wAAAQABAP///f/+/wEAAQAAAP///v/+/wEAAQD///7//v///wEAAQD///7//v///wEAAAD+//7///8AAAAAAAD+//7///8AAAAA///+//7///8AAAAA////////AAAAAP////////////8AAP//////////",
                            "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAAAAAAAAAABAAAAAAD//////////////v////3/////////+//8////AQD9//z/9f8BAAIA+f8dACgAWQBxAJX/qv+Y/uz9aP9k/7UDUQQBAiQA4Pgi/AkB0gKaBsD/+fxp/vz9CQSp/I/+ywDO+vMD0fzK/PABcgBeBfoBv/+uAuH9Sf5gAy39awMmBWUBuP9fA9/9fgDj/2/+EACaACcCSv9Z/2j/rv7hAA0AWf55/7L84P7E/SIAT/67AMv/tf+FAA7/1v+7/gv/IP+E/sQA+P5aAXz/tP9XAFX/tP8o/4r/j//e/yQAMv9mAJT/rgCr/9X/EwCb//H/9f7F/6D/EAAoAK3//v+e/zsAh/+B/7r/if/C/2r/4P/z/6//HwCy/0IA7/9ZALT/y/80ACgA9v/J/9//DgA5ADUALQARADIACwAfAOf/NgArACMACQBBAEcAGAAjAC4AWQBUAHcAAAAfACEAIAAcAPj/CADk/yQA7v89AEEAFwD5/xYA6f8aAOX/AADF/zQADwAUAOT/BQDr/yUA6P8XAOf/HADR/0AA8P8nAAgACQDt/ycAKAAHAPH/IQDz/xsACADn//n/DgADAA4A8P///8z/GgDN/yMA/f8QANj/MwACAC0ACwAOAO3/JgAZAAUACgAAAA4AIgAaAAkADwACAAAAHQATAAUABQACAAgACwAjAO////8AAA8ABQAPAPL//f8GAAsABgAGAPD/8v8GAPz/CAD6//H/6v8PAAgABgD4//3/9v8aAAgABwD1//7//v8QAAoACAD//wUA9v8QAAoABAAFAAgAAgAJAAoAAwD//w0AAgD//wcA/v8DAAoABQAFABUABAAKAAYABwAHAA8ACgAGAAwADwAMAAkAEAAJAAgADwAMAAgADgAJAAUACQAPAAUACwAHAAEABgAIAAEABAAGAP//AgAJAAAAAgAEAP7///8IAAIA//8GAAEAAQAJAAIA/v8EAAMA//8JAAEA/v8DAAMA/v8HAAMA/f8BAAUA/v8FAAMA/v8BAAcA//8DAAMA/v8BAAYA//8CAAMA/////wcAAAAAAAMAAAD//wYAAQD+/wMAAQD//wUAAQD+/wIAAgD//wQAAgD+/wEAAwD//wMAAwD+/wEAAwD//wIAAwD//wEABAAAAAEABAD//wAABAABAAAAAwAAAAAABAABAP//AwABAAAAAwACAP//AgACAAAAAwACAP//AgACAAAAAgACAAAAAQADAAAAAQACAAAAAQADAAAAAQACAAAAAAACAAEAAAACAAEAAAACAAEAAAABAAEAAAABAAEAAAABAAEAAAABAAEAAAABAAEAAAABAAEAAAAAAAAAAAAAAAAA",
                            "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAAAAP//AAD//wAA//8AAAAA//8AAP//AAACAAAA+f8BAAYA///4/wIA//8AAA8A/v/V/wEAEwA9AAEBRwA2AF7/kfog/3gBwv99CDYBU/qtAUX/AP7OAfkAX/o9B38FSfwaAuT14/60BAr8CQAI/tfyIQTzAXP+egdUBBwBof7TBMT8bAWi/5EEWwBRAAAKyfxE/8b88vp6ACP+PAF4/qD8MQNM/ygCJ/2XAPD9kP5gAVT/iP9I/lEB4P8qAD0BFAGa/+7/DgB2AOP98gFm/u/+Vv5/AG8ASP9gAM//qv9w//oAcv+2/jIBHgA7/6D/oAAGAKH/lADT/wAAggC8AAYAkP9yAEcAkf8BAOD/RAAr/zUANwDt/xQAJQAkAMT/zwA/AOH/xv9zAGsANQBTAIcALAAvACIATACy/xMADADg/xcAWABvAJL/7f9VAPb/EgDt/wcA4f8kAPP/5P+h/wgACQDy//r/LgAQAMn/8/9CAOX/5v/S/9//3P8pABYAuP/s/w8AFgDt/+3/7v/w/9j/5/8GAOf/2P/2//P//v8kABMAuf/m/xoADADZ/+r/3P8KAAUAKwDe/wsA3P8VAAAADgAfAB0ACAAMAF4AGgAhAPL/MwDz/0kABAAKAPX/LwAbAAkA9v/s/+3/8/8CABAAAADm//n/BQALAAUAAQDj//n/JQAVAPX/9v/+/wIAEQABAPP/8P/1/wAABgD6/+3/7//o//j/DAD8/+b/8P8IAAkABgD4//D/8P8UAAoAAwD4/wAA+f8OAAcAAAAFAPX/9v8TAAkA8v8EAPb/9/8dAA0A7/8CAPn/+f8SAAQA8/8CAOf/+v8DAAgA9P////H//P8IAAUA8//0/wIAAQAGAAgA9//7/wAA+/8EAP//+P/+////AgACAAsA8v/+/wIABQD7/wgA9v/7/wMABAD5/wAA/P/3/wEAAQD7//7//P/1/wQA///3//r////3/wMAAwD1//r/AwD6////AgD4//n/AwD8//7/AgD4//n/AwD+//3/AQD4//n/BQD///n/AAD6//j/BAABAPj/AAD9//v/AwADAPj//v/+//z/AwAEAPj//v8BAP7/AQADAPj//f8CAP////8EAPr//P8DAAAA/v8CAPv//P8DAAEA/f8BAP3//f8DAAIA/P8AAP7//f8DAAIA/P///wAA/f8BAAIA+//+/wEA//8AAAEA+//+/wEA/////wEA/P/+/wEA///+/wAA/f/9/wEAAAD9/wAA/f/+/wEAAQD8/////v/+/wAAAQD8////////////AQD9////AAD/////AAD+////AAAAAP//AAD///////8AAP//AAD//wAA//8AAP//"
                        ];
                    },
                    function(A, t) {
                        A.exports = [
                            "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAD+/wQA8/8ZAPr/DAD+/wMA/v8KAAQA/f8DAAMABADs//z/8v/z/8f/R/90/ob+//zAAWsDAwY3DKn9//tu93DvkwI6An4CuwJ0/BH7VPux92X0Gu7N/EX9mgfqCkkIiRMgBd4NQQGL/c0G/xBxAKELZATUA/sIHRSx+fkCyAUmBNEJIARlAdHz2AjNACcIsAW4AlECsvtJ/P/7K/tf++n8aP4W+g0FXAElAMn8nQHn/sT+Zv7N+9X2xvzM/O3+EvpqBBD7SQLd+vb/sPlw/JD72/3n+Rr+L/wS/vz6UQGg/Nf+Av5L/5X9Gv2//SP+mf3j/lf+v/2B/ZH/5P05/iL9MP9F/uf9UP4v/qv9mv7o/Xn+wP2k/8L+uP5J/tD+Dv/Y/bL+mP72/n3+pP+7/hAA+/5zAGH+Z/+u/g8Azv2y/6L+//9o/iIADP8VACz/CwCN/pb/1v4yAFP+wf+4/jsAcf5VAP3+bADa/nMA6f4sAOT+IQBd/v7/7v6aAIL+QADe/nEA0P4yAKz+CQCo/moAuf5xAN7+mAC8/jcANf9eAPX+IAA1/1kAAP9hAMz+PQD5/m0A2/4gAPr+UQDh/jQAEv9BAPH+FABN/zkASv9DADP/BABe/1IAGf8oAE3/RQAw/zIAQf8mADn/GgBE/xIAR/8hAD7/BABy/zEAKP/0/07/GwBX/z4ARf8mAFr/QQBV/zUAVP8eAFz/JABt/0EAUP8MAHz/KgBr/ycAYv8EAH3/MABl/x8Agv8bAIj/GgBv//z/ff8AAJX/IABu/+T/jv/r/4z/9/9n/77/pP8JAJD/EQCJ//r/q/8WAJ//GQCU/xYAtv8qAKr/PQCW/ysAwf8+ALb/OgC3/ygAz/8uAM7/OgDH/ygAz/8kAMz/OgC//xsA1f8qAMn/LwDN/xcA1f8oAMv/JQDR/xMAzf8bAM//HgDU/wUA2v8ZANL/EwDW/wEA1f8ZAMz/BwDX/wIA0v8SANT/BQDW/wMA0/8PANT/AADY/wIA1f8MANX/+f/a/wUA0v8IANf/+//Y/wUA0/8DANr/+f/Y/wQA1v8BANr/+f/Z/wUA1//8/9z/+v/Y/wYA2f/8/93//v/Y/wUA2v/9/93////Z/wUA3P/8/97/AgDa/wMA3v/8/97/AwDb/wIA3//9/97/BADd/wEA4f///9//BQDf/wAA4v8AAN//BQDf/wAA4/8CAN//BADh/wAA4/8DAOD/BADi////4/8DAOH/AwDk/wAA5P8FAOL/AgDl/wEA5P8FAOL/AQDl/wEA4/8EAOL/AQDj/wIA4P8DAN//AADg/wIA3v8CAOD/AADh/wEA4v8AAOP/AADm/wAA6P8AAOz/AADu/wAA",
                            "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAD//////f/+//7///8AAP////8BAAEA/f8AAAEAAQAFAAUA9//6/x0A2f/9/xMA3P+jAE//of9HAKP//gCj/77/Z/vi/28D9/ywDJAJIvr6AsX0Xec4BhcGzf23DZP7yfZ6C1//nwBDBIHyYgob/Tf3sQ41ANoKRA/A+E7yffAa9gD5EQUBDMwMygiqAHMAqPqhAGUB2/gE+a78H/+4APT6DwIUAA0HNwMhBfL8E/90A5n7dP9cALIC+v5C/q0AOv9kAogBHv01/+3/qAQD/ub8T/4vAOUA5P6KATv+ywEYAeT+KP6i/3gCFP6h/hr/+P83ACL/VADn/8UARQJI/4MAu/8qAlj+wf4iAPb/LgFJ/8QAUABAAI4ABf+k/3X/YgFK/ij/j/9HADoAi/+WAA0BVwC/ACL/LACe//cARv9i/xgAUgA0ACj/FgBgAIj/5P9M/7z/zv8/AKz/gv8sAEQA6/+I/yYAawDL/7T/xf8qAOv/FQCu/5n/EgAyAO3/i/9LAE4A+//R//P/FgDe/8z/u/8DADIALAAZALL/TAA8ABwAo//1/xwA/P/L/z0A6P8jAN7/7v+a/zAAwf/7/3//KQAuACwA9v8RAGYAIwBNADgAKgASAF0ADgANACEAMQDH//H/LQACAB0Ay////x0APAABAAQA2v8iAAcAEgDE/+v/FQD+/+P/DAD1/97/6v/4//X/EwD4/+7/5P8cAA0ACQDH//7/CQAXAAEA/P/5//j/CwAWAAEABQD9//n/AQAWAB0A7v/k/wAACQAmAP//9/8AAPn/8/8aAO//6/8fAOv/5v8hAP//5/8PAOf/AAAGAPn/6v8JAAYABgABAOv/1//1//L/+P8DABcA6f/8/wMACgD7/xAA3v/2//z/DADu//z/5v/5/wEA/P/6//7/7v/x/wQABgD5/wAA8v/w/wkAEQD2//j/+v8EAAcAEAD3//v/+v8CAAAACQD3//v//v/9/wUADAD2//X/AgAHAAAABwD2//T/BgAKAP7/AQD4//r/BAAIAPn/AAD3//f/BQAHAPv//v/7//n/BQAJAPj/+v/9//7/AgAGAPj/+f8BAAEAAgAFAPn/+v8BAAIAAAAEAPn/+f8CAAQA/v8BAPr/+v8CAAQA/P////v//P8CAAQA+//+//3//f8CAAUA+v/9//////8AAAQA+v/8////AAD//wIA+//8/wAAAQD+/wEA+//8/wAAAgD9/////P/9/wEAAgD8//7//f/9/wAAAgD8//3//v/+////AQD8//z/////////AAD8//3///8AAP7/AAD9//7///8AAP7////+//////8AAP7////+////////////////////",
                            "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAD//////v8AAP///////wAAAAAAAP7/AQABAAAABwD///X/BQAjAPL/CQDb/9D/GAAb/7sAYwCW/z0BcP/X/7T/2QDW+wH8yANCCCUJ5QT++UXmhPwhA78FuAxH+p78ifudBlAG9vmu/lAK2fdlB///cfjoCa0E7Akn9Yb/zvba+AkAHPywBGEBFwUNAL8AXAAGA20DFvmR/kz+F/06Ag/+GwHl/5EEKgJd/q0AP/ym/9n6EfxY/2H+/QFtAC4C6QBDAaMCo/20/+3/3f/p/fL9rv9V/6cBhQHuAX4AcwJYAaH/IP/P/gsApP0LAe7/sQBuAI0AAgGDAE4BzACe/5X//v+v/+f+Zf+gAOv/5QBhAOIApAANASYAuP+h/8b/HQBr/9//bACWAGEAFAB5AD0AWQDU/+D/Yf/p//D/s/+R/4QAMQBvABEAkQBfABQAJgDW/wwA8/8XALz/vf8zAFAAKwD1/zEAPwDJ/x0A7/8LAOX/FwDR//H/EQAdAO//6P8QAFEA2f8WABEAMgDy/xIA+f/s/xAALgDv////HQAvAPT/+f8iAAYAEgAFABoAGgD//w0A+f/0/xsAHgDx/9f/GAACAPH/8f8JAPf/GwALABEA7/8cAPT/CgD2//j/BQD8/+3/OgAgAAYA9f8PAN7/DgD9/9r/1//3/+3/9//1//b/8//5//f/AgAJAOf/+v8OAAMACwD9/+7/5f8eAAEA9//q//7/8P8WAP7/+//4/wIA+f8TAAIA9f/5/wcA+P8iAAgA9v/n/xoA//8gAAUABwDj/wAA9v8BAAUAFQDn/wMA7v8QABAAEQDm/wwA8f8aAAAABwDu/wcACgASAAEA7//w//f/BgARAAkA6P/3/wcADgAKAAYA4f/4/wYADgAAAPr/8P/9/xQACgAHAPn/7//9/xEAAgD+//L/8v/8/xUAAwDw//H/9f8CAAsA/v/q//L/+f8FAAYA/P/r//j///8GAAkA+//o//j/AQAIAP//+v/o//v/CAAIAPv/+P/w/wEACQAHAPj/+f/0/wIACwAFAPb/+f/4/wQACwACAPP/+f/+/wYACAD///L/+/8BAAYABQD9//P//P8FAAUAAgD7//T//f8HAAQA///7//f///8IAAMA/P/6//r/AQAIAAEA+v/6//3/AgAHAAAA+f/7/wAAAwAFAP7/+P/8/wIAAgACAP3/+f/9/wMAAwAAAPz/+v/+/wQAAgD+//z/+/8AAAQAAQD8//z//f8BAAQAAAD7//3///8BAAMA///7//3/AAACAAEA/v/7//7/AQABAAAA/v/9////AQAAAP///v/+////AAD/////////////////////////////",
                            "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAD////////+//////8AAAAA/v/+/wAAAQD8//3/CQAJAP3/+v8PAAcApABlABkBkwCO/i//lfqa/HQAcf/3BdkCzwJcBCMC0wMN/9/9wgI7AaECYfxV/Tf83vhn/xrt8Owx/8n7cgHABYb43QcZDh4WugNrA7P74gHu/9z/zv0t/acCiQHY/iv4qQOl/ysCE/0//XT9Sf4O//j9xfupAn394gHO+rsCXAFIAxQC9wIXBgcD2AQuAnb/9gJh/6wAVfxEAI4Bvf7oAFv/bALsAMQBe/88/joAT/4dAH39/v9LAXn/gwDI//QBdABcAA0A7f4lAMn///+9/tv/iABp/13/pP/dALv/w/8MAHv//f+y/6////7U/5AAZP+Z/8r/nQDR/5r/DwDr/xAA4v+s/3z/+P9uAOv/t/82AGcAHgCb/yQAFQBGAM7/CgD3/xoAegAaAOz/CgBHAA8Adv8/AAAABQC2/xIAAAA7ABQAKgCj/z4AAQAXAJz/JAADAAcA8f/1/2AAAQAlAPD/NgDx/1wA7v/4/wMAZADv//3/HQAkAFoA8P9FAPv/FgBIAPf/WQAHAEUACQD0/xIAQwDu/wMAwP9VALn/XwCw/yEA5f8sAPj/FgDD/1YAyv8rAOX/HQDo//j/IQAQACAAHwD9/yQAHQBAABgABQAiAAUAKAD3/wkACwAKAAMABwAJAPb/+f8GAOr/JQAHABMA6P8TAA4AGgD//woA8/8ZAP//GADu/w0A9v8SAAMABwD4/wQA5P8XAAQACgDq/wUA+/8VAAcACADs/xIAAAATAPH/+v/1//T/7f///+z/+v/y/+//9/8KAAcACgAJAPT/BAAKAAAABgAIAPL/9v8KAAMABAACAPr/9v8OAAIA+P/x//v/+f8MAPb/+P/w/wQA9f8MAPn////7/woA/v8PAAEAAgD1/xAAAQAPAP//AwD//xQABwALAAAABgADABAAAgAHAAAACAABAA8ABQAFAAMABwAEAA4ABwADAAEACQAFAAoAAwD//wAACQADAAUAAQD/////CAABAAMAAAD/////BwACAAEAAAD/////BwACAP7///8BAAAABgABAP7///8CAAAABAAAAP7///8DAAAAAwAAAP3///8DAAAAAQAAAP3//v8EAAAAAAD+//////8EAP/////+/wAA/v8EAP/////+/wEA/v8EAP///v/+/wIA//8DAP///v/+/wIA//8BAP///v/+/wMA//8BAP/////+/wMA//8AAP//AAD+/wQA//8AAP7/AQD//wIA////////AQD//wIA////////AQAAAAEAAAAAAP//AQD//wEAAAAAAP//AQAAAAEAAAAAAAAA",
                            "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAD+/wAA+v8AAPz/AAD//wAA/f8AAAEAAAD+/wAACQAAAAQAAAAZAAAAtgAAAFsBAABW/gAAH/oAAGcBAABoBwAAlAAAAO3/AAARAQAA+wIAAEoEAACe/gAAiv4AALD0AADJ8wAAkQQAAF34AABi8QAAPQAAAAH2AAD19AAADAMAAJwGAACTEAAA0AwAAJkHAACOBwAAuQEAANcDAAC6AgAAHwUAAHEFAAB0AwAAbgEAADz+AADYAQAAGAAAAJwCAADgAAAA//0AAMn+AAAT/AAAwP8AAOn9AAAJAAAAewEAAOn+AACN/wAAOv0AAO3+AADN/gAAcP8AACj/AACq/gAA+f4AAML9AACa/wAA/f4AAN7/AABo/wAA6/4AAE//AAAC/wAAEQAAAHX/AAB0AAAA5f8AAEwAAAB3AAAA5/8AAMIAAABCAAAAzgAAAE8AAAB3AAAAKAAAADMAAACqAAAALwAAAK4AAAASAAAAVgAAACgAAAAtAAAATAAAAP3/AAA7AAAA2/8AACQAAADw/wAALQAAADEAAAAlAAAAbAAAADMAAABUAAAAEAAAACgAAAD1/wAA9v8AAPr/AADu/wAALgAAABIAAABUAAAARAAAAGUAAABGAAAAOAAAAGAAAAAuAAAARQAAACEAAAAfAAAAAAAAAAkAAAAQAAAAAwAAABIAAADs/wAAEAAAAAYAAAASAAAAIgAAABEAAAADAAAABAAAAA8AAAD4/wAAHQAAAAsAAAAIAAAADgAAAP//AAAcAAAADwAAAAYAAAASAAAAFwAAAAMAAAAYAAAAEgAAAPr/AAAQAAAADQAAAAoAAAD3/wAABgAAAPb/AADf/wAA/v8AAPL/AAD6/wAAFAAAAAQAAAAEAAAAGwAAAAEAAAAMAAAAIAAAAAIAAAAdAAAAGAAAAAIAAAAcAAAAEgAAAAcAAAAeAAAADwAAAAQAAAAeAAAABAAAAAYAAAAZAAAAAQAAAA4AAAATAAAA/v8AAAoAAAAOAAAA+/8AAAsAAAAJAAAA+f8AAAsAAAABAAAA+f8AAAoAAAD9/wAA+v8AAAcAAAD5/wAA+v8AAAUAAAD3/wAA/f8AAAQAAAD2/wAAAAAAAAEAAAD3/wAAAgAAAAAAAAD4/wAAAwAAAP7/AAD6/wAABAAAAP3/AAD8/wAABAAAAPv/AAD+/wAAAwAAAPv/AAD//wAAAQAAAPv/AAAAAAAAAAAAAPv/AAACAAAA//8AAPz/AAACAAAA/v8AAP3/AAACAAAA/f8AAP7/AAABAAAA/f8AAP//AAABAAAA/f8AAAAAAAAAAAAA/v8AAAEAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
                        ];
                    },
                    function(A, t, e) {
                        "use strict";
                        t.getBrowserInfo = function() {
                            const A = navigator.userAgent;
                            let t, e = A.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
                            if (/trident/i.test(e[1])) return t = /\brv[ :]+(\d+)/g.exec(A) || [], {
                                name: "IE",
                                version: t[1] || ""
                            };
                            if ("Chrome" === e[1] && null != (t = A.match(/\bOPR|Edge\/(\d+)/))) return {
                                name: "Opera",
                                version: t[1]
                            };
                            e = e[2] ? [
                                e[1],
                                e[2]
                            ] : [
                                navigator.appName,
                                navigator.appVersion,
                                "-?"
                            ], null != (t = A.match(/version\/([\d.]+)/i)) && e.splice(1, 1, t[1]);
                            let i = A.match(/android|ipad|iphone/i);
                            return i || (i = A.match(/cros|linux|mac os x|windows/i)), {
                                name: e[0],
                                version: e[1],
                                platform: i ? i[0] : "unknown"
                            };
                        }, t.patchSafari = function() {
                            window.webkitAudioContext && window.webkitOfflineAudioContext && (window.AudioContext = window.webkitAudioContext, window.OfflineAudioContext = window.webkitOfflineAudioContext);
                        };
                    },
                    function(A, t, e) {
                        "use strict";
                        A.exports = "1.0.6";
                    }
                ]);
            });
        },
        function(A, t, e) {
            "use strict";
            A.exports = "0.0.4";
        }
    ]);
});

//# sourceMappingURL=index.c351186f.js.map

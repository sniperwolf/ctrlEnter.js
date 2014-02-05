// ctrlEnter.js
//    2014-02-05

// Copyright (c) 2013 Fabrizio Fallico

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

(function ($, window, document) {
    // ctrlEnter plugin
    $.fn.ctrlEnter = function (css_sel, fn) {
        // Create var
        var that  = $(this);

        // jQueryfy CSS Selector
        css_sel   = $(css_sel);

        // Generic userCallback
        function userCallback(e) {
            fn.call(that, e);
        }

        // CTRL+Enter handler
        that.on('keydown', function (e) {
            // CTRL && Enter
            if (e.ctrlKey && e.keyCode === 13) {
                e.preventDefault();
                userCallback(e);
            }
        });

        // Maintain classic userCallback for submit form
        css_sel.on("click", userCallback);

        // For chaining
        return this;
    };
})(window.jQuery, window, document);


// jQuery ready
// (function ($, window, document) {
//     // Call ctrlEnter with "#msg"
//     $("#msg").ctrlEnter("button", function () {
//         $("<p></p>").append(this.val().replace(/\n/g, "<br />")).appendTo(document.body);
//         this.val('');
//     });
// })(window.jQuery, window, document);

// ctrlEnter.js
//    2013-04-29

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

// ctrlEnter plugin
$.fn.ctrlEnter = function (btn, fn) {
  // Create var
  var that  = $(this);
      btn   = $(btn);

  // Generic performAction
  function performAction(e) {
    fn.call(that, e);
  }

  // CTRL+Enter handler
  that.bind("keydown", function (e) {
    // CTRL && Enter
    if(e.ctrlKey && e.keyCode === 13) {
      e.preventDefault();
      performAction(e);
    }
  });

  // Maintain classic performAction for submit form
  btn.bind("click", performAction);
};

// jQuery ready
jQuery(document).on("ready", function () {
  // Call ctrlEnter with "#msg"
  $("#msg").ctrlEnter("button", function () {
    $("<p></p>").append(this.val().replace(/\n/g, "<br />")).appendTo(document.body);
    this.val("");
  });
});

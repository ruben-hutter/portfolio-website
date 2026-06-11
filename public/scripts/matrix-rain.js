(function () {
  var canvas = document.getElementById('matrix-rain');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var columns = [];
  var w, h;
  var fontSize = 14;

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()\uFF8A\uFF90\uFF8B\uFF30\uFF73\uFF7C\uFF85\uFF86\uFF93\uFF89\uFF76\uFF9B\uFF82\uFF75\uFF98\uFF71\uFF8E\uFF83\uFF8F\uFF79\uFF92\uFF74\uFF80\uFF7A\uFF64\uFF95\uFF8C\uFF7E\uFF9D';
  var charArr = chars.split('');

  function resize() {
    var parent = canvas.parentElement;
    w = canvas.width = parent.offsetWidth;
    h = canvas.height = parent.offsetHeight;
    var colCount = Math.floor(w / fontSize);
    columns = new Array(colCount).fill(0).map(function () {
      return Math.random() * h / fontSize;
    });
  }

  function getColor(alpha) {
    var dark = document.documentElement.classList.contains('dark');
    if (dark) {
      return 'rgba(74, 222, 128, ' + alpha + ')';
    }
    return 'rgba(22, 101, 52, ' + alpha + ')';
  }

  function draw() {
    var dark = document.documentElement.classList.contains('dark');

    if (dark) {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.05)';
    } else {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    }
    ctx.fillRect(0, 0, w, h);

    ctx.font = fontSize + 'px monospace';

    for (var i = 0; i < columns.length; i++) {
      var char = charArr[Math.floor(Math.random() * charArr.length)];
      var x = i * fontSize;
      var y = columns[i] * fontSize;

      ctx.fillStyle = getColor(0.6 + Math.random() * 0.4);
      ctx.fillText(char, x, y);

      if (y > h && Math.random() > 0.975) {
        columns[i] = 0;
      }
      columns[i]++;
    }
  }

  resize();
  window.addEventListener('resize', resize);

  var interval = setInterval(draw, 50);

  var observer = new MutationObserver(function () {
    ctx.clearRect(0, 0, w, h);
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });

  var mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mql.matches) {
    clearInterval(interval);
    canvas.style.display = 'none';
  }
})();

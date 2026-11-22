/*
 * 标签云着色（原生 JS，替代旧版 jquery.tagcloud.js）
 * 算法与原插件一致：按 rel 权重在区间内线性映射到 #f8e0e6 -> #ff3333。
 * 原插件字号 start=end=1em，实际不改变字号，故此处只设置颜色。
 */
(function () {
  var links = document.querySelectorAll('#tag_cloud a');
  if (!links.length) { return; }

  var weights = Array.prototype.map.call(links, function (a) {
    return parseInt(a.getAttribute('rel'), 10) || 0;
  });
  var lowest = Math.min.apply(null, weights);
  var highest = Math.max.apply(null, weights);
  var range = highest - lowest || 1;

  var start = [0xf8, 0xe0, 0xe6];
  var end = [0xff, 0x33, 0x33];

  Array.prototype.forEach.call(links, function (a, i) {
    var weighting = weights[i] - lowest;
    var rgb = start.map(function (n, k) {
      var v = Math.round(n + ((end[k] - n) / range) * weighting);
      return ('0' + Math.max(0, Math.min(255, v)).toString(16)).slice(-2);
    });
    a.style.color = '#' + rgb.join('');
  });
})();

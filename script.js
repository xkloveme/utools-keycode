const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
const body = document.getElementById('body')

toggle.addEventListener('click', () => nav.classList.toggle('active'))
function Random () {
  var randum = function (max) { //随机数
    return Math.round(Math.random() * max);
  }
  var hexify = function (x) { //转换16进制
    return ('0' + parseInt(x).toString(16)).slice(-2);
  }
  var randex = function () { //随机16进制色彩值
    return '#' + hexify(randum(255)) + hexify(randum(255)) + hexify(randum(255));
  };
  var blender = function () { //随机渐变
    if (!!Math.round(Math.random())) {
      return 'radial-gradient(circle at ' + randum(100) + '% ' + randum(100) + '%, ' + randex() + ', ' + randex() + ')';
    } else {
      return 'linear-gradient(' + randum(360) + 'deg, ' + randex() + ', ' + randex() + ')';
    }
  };
  body.style.background = blender()
}
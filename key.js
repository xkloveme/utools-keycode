const insert = document.getElementById('insert')
const outsert = document.getElementById('outsert')

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>按键</small>
</div>

  `
  outsert.innerHTML=`
<div class="key">
${event.keyCode}
<small>键码</small>
</div>
  `
})
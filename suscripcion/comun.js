var VIACSA={ENDPOINT:'https://script.google.com/macros/s/AKfycbwjhzVZniQd0zSlstRPBy6Y6L5dINIIbeKv4eNJPFVxFXFJUAFieXl-PA4PNNjvOLA/exec',
 prueba:new URLSearchParams(location.search).get('modo')==='prueba',
 enviar:function(d){d.entorno=VIACSA.prueba?'prueba':'produccion';d.ua=navigator.userAgent.slice(0,200);
  return fetch(VIACSA.ENDPOINT,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(d)}).then(function(r){return r.json()})},
 banner:function(){if(VIACSA.prueba){var b=document.getElementById('test');if(b)b.style.display='block'}}};

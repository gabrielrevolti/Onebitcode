document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('sessionLerBtn').addEventListener('click', function(){
    alert('O dado salvo é: ' + sessionStorage.getItem('info'))
})

document.getElementById('localBtn').addEventListener('click', function(){
   const input = document.getElementById('local')
   localStorage.setItem('text', input.value)
   input.value = ''
})

document.getElementById('localLerBtn').addEventListener('click', function(){
  const ler = localStorage.getItem('text')
  alert('O valor do localStorage é:' + ler)
})

document.getElementById('cookieBtn').addEventListener('click', function(){
    const input = document.getElementById('cookie')
    //cookieName=value; expires=UTCStringDate; path=/;
    const cookie = `info=${input.value};`
    const expiration = `expires=${new Date(2023,10,20)};`
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})
document.getElementById('cookie2Btn').addEventListener('click', function(){
    const input = document.getElementById('cookie2')
    //cookieName=value; expires=UTCStringDate; path=/;
    const cookie = `text=${input.value};`
    const expiration = `expires=${new Date(2023,9,20)};`
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})
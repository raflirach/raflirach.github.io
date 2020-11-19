let hewan = document.getElementById('hewan')
let kota = document.getElementById('kota')
let modal = document.getElementById('myModal')

hewan.addEventListener('click', function(){
    modal.style.display = 'none'
    const kata = [
      "badak", 'kuda', 'ayam', 'gajah', 'buaya', 'Semut', 'Lebah', 'Nyamuk',
      'lalat', 'landak', 'siput', 'Ular', 'katak', 'cacing'
    ]

    let jawaban = document.getElementById('jawaban')
    let dash = document.getElementById('dash')
    let btnHint = document.getElementById('hint')
    let hasil = document.getElementById('hasil')
    let score = document.getElementById('score')
    let darah = document.getElementById('darah')
    let wrong = document.getElementById("wrong"); 
    let correct = document.getElementById("correct")
    
    score.innerHTML = 0
    darah.innerHTML = 3
    
    let number = Math.floor(Math.random() * kata.length)
    jawaban.innerHTML = kata[number]
    
    for (let i = 0; i < jawaban.innerHTML.length; i++) {
      dash.innerHTML += '_'
      if (i !== jawaban.innerHTML.length) {
        dash.innerHTML += ' '
      }
    }

    let indexHint = Math.floor(Math.random() * jawaban.innerHTML.length)
    btnHint.addEventListener('click', function(){
      dash.innerHTML = ''
      for (let i = 0; i < jawaban.innerHTML.length; i++) {
        if (i === indexHint) dash.innerHTML += jawaban.innerHTML[i]
        else dash.innerHTML += '_'

        if (i !== jawaban.innerHTML.length) dash.innerHTML += ' '

        }
    })
    
    let input = document.getElementById('input')
    input.addEventListener("keyup" , function(event) {
      if(event.keyCode === 13){
        event.preventDefault();
        let input = document.getElementById('input').value
        if (input.toLowerCase() === jawaban.innerHTML.toLowerCase()) {
          correct.play()
                
          number = Math.floor(Math.random() * kata.length)
          jawaban.innerHTML = kata[number]
          dash.innerHTML = ''
          for (let i = 0; i < jawaban.innerHTML.length; i++) {
            dash.innerHTML += '_'
            if (i !== jawaban.innerHTML.length) {
              dash.innerHTML += ' '
            }
          }
          hasil.innerHTML = "benar"
          setTimeout(function(){ hasil.innerHTML = "" }, 3000);
          score.innerHTML++
        } else {
          wrong.play()
          hasil.innerHTML = "salah"
          setTimeout(function(){ hasil.innerHTML = "" }, 3000);
          darah.innerHTML--
          if (darah.innerHTML === '0') {
            alert(`Game Over
                        Score anda : ${score.innerHTML}`)
            location.reload()
          }
        }
        document.getElementById('input').value = ''
      }
    })
})

kota.addEventListener('click', function(){
    modal.style.display = 'none'
    const kata = [
        'Bandung', 'Semarang', 'Jakarta'
    ]

    let jawaban = document.getElementById('jawaban')
    let dash = document.getElementById('dash')
    let btnHint = document.getElementById('hint')
    let hasil = document.getElementById('hasil')
    let score = document.getElementById('score')
    let darah = document.getElementById('darah')
    let wrong = document.getElementById("wrong"); 
    let correct = document.getElementById("correct")
    
    score.innerHTML = 0
    darah.innerHTML = 3
    
    let number = Math.floor(Math.random() * kata.length)
    jawaban.innerHTML = kata[number]
    
    for (let i = 0; i < jawaban.innerHTML.length; i++) {
      dash.innerHTML += '_'
      if (i !== jawaban.innerHTML.length) {
        dash.innerHTML += ' '
      }
    }

    let indexHint = Math.floor(Math.random() * jawaban.innerHTML.length)
    btnHint.addEventListener('click', function(){
      dash.innerHTML = ''
      for (let i = 0; i < jawaban.innerHTML.length; i++) {
        if (i === indexHint) dash.innerHTML += jawaban.innerHTML[i]
        else dash.innerHTML += '_'

        if (i !== jawaban.innerHTML.length) dash.innerHTML += ' '

        }
    })
    
    let input = document.getElementById('input')
    input.addEventListener("keyup" , function(event) {
      if(event.keyCode === 13){
        event.preventDefault();
        let input = document.getElementById('input').value
        if (input.toLowerCase() === jawaban.innerHTML.toLowerCase()) {
          correct.play()
                
          number = Math.floor(Math.random() * kata.length)
          jawaban.innerHTML = kata[number]
          dash.innerHTML = ''
          for (let i = 0; i < jawaban.innerHTML.length; i++) {
            dash.innerHTML += '_'
            if (i !== jawaban.innerHTML.length) {
              dash.innerHTML += ' '
            }
          }
          hasil.innerHTML = "benar"
          setTimeout(function(){ hasil.innerHTML = "" }, 3000);
          score.innerHTML++
        } else {
          wrong.play()
          hasil.innerHTML = "salah"
          setTimeout(function(){ hasil.innerHTML = "" }, 3000);
          darah.innerHTML--
          if (darah.innerHTML === '0') {
            alert(`Game Over
                        Score anda : ${score.innerHTML}`)
            location.reload()
          }
        }
        document.getElementById('input').value = ''
      }
    })
})




let hewan = document.getElementById('hewan')
let kota = document.getElementById('kota')
let modal = document.getElementById('myModal')

let endModal = document.getElementById('endModal')
let endTitle = document.getElementById('endTitle')
let endDesc = document.getElementById('endDesc')
let playAgain = document.getElementById('playAgain')

let wrong = document.getElementById("wrong"); 
let correct = document.getElementById("correct")
let up = document.getElementById("up")
let start = document.getElementById("start")
let select = document.getElementById("select")

let score = document.getElementById('score')
let darah = document.getElementById('darah')

let plus = document.getElementById('plus')
let minus = document.getElementById('minus')

up.play()
endModal.style.display = 'none'

hewan.addEventListener('mouseover', function(){
  select.play()
})
kota.addEventListener('mouseover', function(){
  select.play()
})
hewan.addEventListener('click', function(){
    start.play()

    function reloadSoal(num) {
      jawaban.innerHTML = kata[number]
      dash.innerHTML = ''
      for (let i = 0; i < jawaban.innerHTML.length; i++) {
        if (i===0) dash.innerHTML += jawaban.innerHTML[i] + ' '
        else if (jawaban.innerHTML[i] === ' ') dash.innerHTML += `&nbsp;`
        else if (jawaban.innerHTML[i] === '-') dash.innerHTML += `-`
        else dash.innerHTML += '_'
        if (i !== jawaban.innerHTML.length) {
          dash.innerHTML += ' '
        }
      }
    }

    modal.style.display = 'none'
    const kata = [
      'Anjing Laut', 'laba-laba','Anoa','Armadillo','Arwana','Babi','Babon','Badak Jawa','Bajing','Bangau',
      'Banteng','Bebek','Bekantan','Bekicot','Belalang','belatung','Belibis','Belut','beo','Berang-Berang',
      'Beruang','Beruang Kutub','biawak','bintang laut','biri-biri','bison','bulubabi','camar','capung',
      'Cendrawasih','Cheetah','cumi-cumi','domba','elang','gorila','hamster','hiena','ikan','hiu','paus',
      'pari','jaguar','kadal','kalkun','kelelawar','kijang','kuda laut','kura-kura','lumba-lumba','musang',
      "badak", 'kuda', 'ayam', 'gajah', 'buaya', 'Semut', 'Lebah', 'Nyamuk','kangguru','kelabang','kucing',
      'lalat', 'landak', 'siput', 'Ular', 'katak', 'cacing','gurita','harimau','iguana','jerapah','kecoa',
      'kepiting','kerang','koala','zebra','penguin','platipus','rubah','singa','tupai'
    ]

    let jawaban = document.getElementById('jawaban')
    let dash = document.getElementById('dash')
    let btnHint = document.getElementById('hint')
    let hasil = document.getElementById('hasil')
    
    score.innerHTML = 0
    darah.innerHTML = 3
    
    let number = Math.floor(Math.random() * kata.length)
    reloadSoal(number)

    let indexHint = Math.ceil(Math.random() * (jawaban.innerHTML.length-1))
    btnHint.addEventListener('click', function(){
      btnHint.style.display = 'none'
      plus.innerHTML = '-50'
      plus.style.color = 'red'
      score.innerHTML = +score.innerHTML - 50
      setTimeout(function(){ 
        plus.innerHTML = ""
        plus.style.color = 'greenyellow'
      }, 3000);

      dash.innerHTML = ''
      for (let i = 0; i < jawaban.innerHTML.length; i++) {
        while(jawaban.innerHTML[indexHint] === '-' || jawaban.innerHTML[indexHint] === ' '){
          indexHint = Math.floor(Math.random() * jawaban.innerHTML.length)
        }
        if (i === 0) dash.innerHTML += jawaban.innerHTML[i] + ' '
        else if (i === indexHint) dash.innerHTML += jawaban.innerHTML[i]
        else if (jawaban.innerHTML[i] === ' ') dash.innerHTML += `&nbsp;`
        else if (jawaban.innerHTML[i] === '-') dash.innerHTML += `-`
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
          reloadSoal(number)
          indexHint = Math.ceil(Math.random() * (jawaban.innerHTML.length-1))
          btnHint.style.display = 'block'
          hasil.innerHTML = "benar"
          plus.innerHTML = "+100"
          setTimeout(function(){ 
            hasil.innerHTML = "" 
            plus.innerHTML = ""
          }, 3000);
          score.innerHTML = +score.innerHTML + 100
        } else {
          wrong.play()
          hasil.innerHTML = "salah"
          minus.innerHTML = "-1"
          setTimeout(function(){ 
            hasil.innerHTML = "" 
            minus.innerHTML = ""
          }, 3000);
          darah.innerHTML--
          if (darah.innerHTML === '0') {
            endModal.style.display = 'block'
            endDesc.innerHTML = `score anda : ${score.innerHTML}`

            playAgain.addEventListener('mouseover', function(){
              select.play()
            })
            playAgain.addEventListener('click', function(){
              location.reload()
            }) 
          }
        }
        document.getElementById('input').value = ''
      }
    })
})

kota.addEventListener('click', function(){
    start.play()

    function reloadSoal(num) {
      jawaban.innerHTML = kata[number]
      dash.innerHTML = ''
      for (let i = 0; i < jawaban.innerHTML.length; i++) {
        if (i===0) dash.innerHTML += jawaban.innerHTML[i] + ' '
        else if (jawaban.innerHTML[i] === ' ') dash.innerHTML += `&nbsp;`
        else if (jawaban.innerHTML[i] === '-') dash.innerHTML += `-`
        else dash.innerHTML += '_'
        if (i !== jawaban.innerHTML.length) {
          dash.innerHTML += ' '
        }
      }
    }

    modal.style.display = 'none'
    const kata = [
        'Banda Aceh','Sabang','Denpasar','Pangkalpinang','Cilegon','Serang','Tangerang','Bengkulu','Gorontalo',
        'Jambi','Bandung','Jakarta','Bekasi','Bogor','Cimahi','Cirebon','Depok','Sukabumi','Tasikmalaya',
        'Banjar','Magelang','Pekalongan','Purwokerto','Salatiga','Semarang','Surakarta','Tegal','Batu',
        'Blitar','kediri','madiun','malang','mojokerto','pasuruan','probolinggo','surabaya','pontianak',
        'singkawang','banjarmasin','palangkaraya','balikpapan','botang','samarinda','tarakan','batam',
        'tanjungpinang','bandar lampung','ternate','ambon','mataram','kupang','sorong','jayapura','bau-bau',
        'palu','manado','palembang','yogyakarta'
    ]

    let jawaban = document.getElementById('jawaban')
    let dash = document.getElementById('dash')
    let btnHint = document.getElementById('hint')
    let hasil = document.getElementById('hasil')
    
    score.innerHTML = 0
    darah.innerHTML = 3
    
    let number = Math.floor(Math.random() * kata.length)
    reloadSoal(number)

    let indexHint = Math.ceil(Math.random() * (jawaban.innerHTML.length - 1))
    btnHint.addEventListener('click', function(){
      btnHint.style.display = 'none'
      plus.innerHTML = '-50'
      plus.style.color = 'red'
      score.innerHTML = +score.innerHTML - 50
      setTimeout(function(){ 
        plus.innerHTML = ""
        plus.style.color = 'greenyellow'
      }, 3000);

      dash.innerHTML = ''
      for (let i = 0; i < jawaban.innerHTML.length; i++) {
        while(jawaban.innerHTML[indexHint] === '-' || jawaban.innerHTML[indexHint] === ' '){
          indexHint = Math.floor(Math.random() * jawaban.innerHTML.length)
        }
        if (i === 0) dash.innerHTML += jawaban.innerHTML[i] + ' '
        else if (i === indexHint) dash.innerHTML += jawaban.innerHTML[i]
        else if (jawaban.innerHTML[i] === ' ') dash.innerHTML += `&nbsp;`
        else if (jawaban.innerHTML[i] === '-') dash.innerHTML += `-`
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
          reloadSoal(number)
          indexHint = Math.ceil(Math.random() * (jawaban.innerHTML.length - 1))
          btnHint.style.display = 'block'
          hasil.innerHTML = "benar"
          plus.innerHTML = "+100"
          setTimeout(function(){ 
            hasil.innerHTML = "" 
            plus.innerHTML = ""
          }, 3000);
          score.innerHTML = +score.innerHTML + 100
        } else {
          wrong.play()
          hasil.innerHTML = "salah"
          minus.innerHTML = "-1"
          setTimeout(function(){ 
            hasil.innerHTML = "" 
            minus.innerHTML = ""
          }, 3000);
          darah.innerHTML--
          if (darah.innerHTML === '0') {
            endModal.style.display = 'block'
            endDesc.innerHTML = `score anda : ${score.innerHTML}`

            playAgain.addEventListener('mouseover', function(){
              select.play()
            })
            playAgain.addEventListener('click', function(){
              location.reload()
            }) 
          }
        }
        document.getElementById('input').value = ''
      }
    })
})




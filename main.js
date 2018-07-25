var allButtons = $('.buttons > button')
for(let i=0;i<allButtons.length;i++){
  allButtons.eq(i).on('click', function(){
    let index = allButtons.eq(i).index()
    let px = -300 * index
    $(images).css({
      transform: 'translate('+ px +'px)'
    })
    n = index
    allButtons.eq(i).addClass('red').siblings('.red').removeClass('red')
  })
}


var n = 0
var size = allButtons.length
var timer = setInterval(()=>{
  n += 1
  allButtons.eq(n%size).trigger('click')
}, 2000)

$('.window').on('mouseenter', function(){
  window.clearInterval(timer)
})

$('.window').on('mouseleave', function(){
  timer = setInterval(()=>{
    n += 1
    allButtons.eq(n%size).trigger('click')
  }, 2000)
})
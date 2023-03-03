$('img').attr('draggable', false);
$('a').attr('draggable', false);

document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

$('#home').click( function() {
  $('.page-home').addClass('onview')
  $('#home').addClass('active')
  $('.page-mei').removeClass('onview')
  $('#mei').removeClass('active')
  $('.page-irpf').removeClass('onview')
  $('#irpf').removeClass('active')
  $('.page-cd').removeClass('onview')
  $('#cd').removeClass('active')
})

$('#mei').click( function() {
  $('.page-home').removeClass('onview')
  $('#home').removeClass('active')
  $('.page-mei').addClass('onview')
  $('#mei').addClass('active')
  $('.page-irpf').removeClass('onview')
  $('#irpf').removeClass('active')
  $('.page-cd').removeClass('onview')
  $('#cd').removeClass('active')
})

$('#irpf').click( function() {
  $('.page-home').removeClass('onview')
  $('#home').removeClass('active')
  $('.page-mei').removeClass('onview')
  $('#mei').removeClass('active')
  $('.page-irpf').addClass('onview')
  $('#irpf').addClass('active')
  $('.page-cd').removeClass('onview')
  $('#cd').removeClass('active')
})

$('#cd').click( function() {
  $('.page-home').removeClass('onview')
  $('#home').removeClass('active')
  $('.page-mei').removeClass('onview')
  $('#mei').removeClass('active')
  $('.page-irpf').removeClass('onview')
  $('#irpf').removeClass('active')
  $('.page-cd').addClass('onview')
  $('#cd').addClass('active')
})

function enviar() {
  let cliente = {
    nome: $("#nome").val(),
    email: $("#email").val(),
    celular: $("#celular").val(),
    mensagem: $("#mensagem").val(),
  }

  $.post("https://formspree.io/f/xnqrqzqv", {
    cliente
  })

  alert("Mensagem enviada com sucesso!")

  setTimeout(function(){
    location.reload() 
  }, 1000)

  // location.reload()

}

document.getElementById('celular').addEventListener('blur', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{2})(\d{5})(\d{4})/);
  e.target.value = '(' + x[1] + ') ' + x[2] + '-' + x[3];
});





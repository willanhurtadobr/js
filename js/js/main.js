

function toggleMenu(){
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    let main = document.querySelector('.main');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
    main.classList.toggle('active');
}
let delivery = document.getElementById('delivery');
let retirada  = document.getElementById('retirada');
let tarjeta = document.getElementById('tarjeta');
let efectivo = document.getElementById('efectivo');
let pagamento = document.getElementById('pagamento');
let envioo = document.getElementById('envioo');
retirada.addEventListener('click', function (f) {
    envioo.value = retirada.value;
})
efectivo.addEventListener('click', function (f) {
    pagamento.value= efectivo.value;
    
  })
  delivery.addEventListener('click', function (f) {
    envioo.value = delivery.value;
    
  })
  tarjeta.addEventListener('click', function (f) {
    pagamento.value= tarjeta.value;
    
  })
let socket = io();
let form = document.getElementById('form');
let nombreCliente = document.getElementById('nombreCliente');
let telefono = document.getElementById('telefono');
let ses = document.getElementById('ses');
let pedido = document.getElementById('pedido');

form.addEventListener('submit', function(e) {
    

    socket.emit('chat message', {
        nombreCliente:  nombreCliente.value,
        telefono : telefono.value,
        ses : ses.value,
        pedido : pedido.value,
        pagamento : pagamento.value,
        envioo : envioo.value,
       
    });
    
  
});

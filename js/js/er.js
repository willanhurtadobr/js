const socket = io();
let lista = document.getElementById('lista');
const music = new Audio('notificacion.mp3');
socket.on('chat message', data => {
    
    music.play();
    music.playbackRate = 2;
    music.pause();
   
    lista.innerHTML += `
    
    <table>
    <thead>
        <tr>
            <td>NOMBRE</td>
            <td>TELEFONO</td>
            <td>TIPO </td>
            <td>PAGO</td>
            
        </tr>
    </thead>
    <tbody>
    <tr>
									<td id="nombre" >${data.nombreCliente}</td>
									<td id="telefono">${data.telefono}</td>
                                    <td id="envio">${data.pagamento}</td>
									<td id="tipo">${data.envioo}</td>
                                    <td></td>
									<td><span class="status delivered">
										<a href="/dashboard/infoPedidos/${data.ses}" >ver informacion</a>
										</span></td>
								   </tr>
                                   </tbody>
                                   </table>
    `
   
    });

module.exports =  (io) => {
    
     io.on('connection', (socket) => {
        console.log('funciona');
        socket.on('chat message',  (data) => {
         io.sockets.emit('chat message',data);

        });
       
      });
}
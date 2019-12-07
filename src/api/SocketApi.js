import socket from 'socket.io-client';

export class SocketApi {
  socket = null;

  init(token) {
    this.socket = socket('http://localhost:3000', {
      query: {
        token,
      },
      transports: ['websocket'],
    });
    this.socket.on('connect', () => {
      console.log('Connected');
      console.log({ socket });
    });
  }

  handleMessage(handler) {
    this.socket.on('message', (message) => {
      handler(JSON.parse(message));
    });
  }
}

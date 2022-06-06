import { Server } from "socket.io"
import { IWebSocket } from "../interface/IWebSocket";

export const enum WebSocketEvents {
    Notification = 'Notification',
    ActivityLog = 'ActivityLog'
}

export class WebSocket extends Server implements IWebSocket {
    private static instance: WebSocket;
    private constructor(httpServer: any) {
        super(httpServer)
    }

    static getInstance(httpServer?: any) {
        if (!this.instance) {
            this.instance = new WebSocket(httpServer);
        }
        return this.instance;
    }

    sendEventByUserId(userId: string, event: WebSocketEvents, data: any) {
        this.sockets.emit(event, data)
    }

    getEventByUserId() {

    }

}
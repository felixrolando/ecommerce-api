import { WebSocketEvents } from "../webSocket/WebSocket";

export interface IWebSocket {
    sendEventByUserId(userId: string, event: WebSocketEvents, data: any): void
}
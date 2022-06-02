import { WebSocketEvents } from "../helpers/WebSocket";

export interface IWebSocket {
    sendEventByUserId(userId: string, event: WebSocketEvents, data: any): void
}
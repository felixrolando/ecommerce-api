export interface INotification {
    id?: string,
    title: string,
    msg: string,
    date: string,
    status: 'done' | 'warning' | 'cancel',
    icon: 'check' | 'heart' | 'payment',
}
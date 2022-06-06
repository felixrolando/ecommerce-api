export interface IEvent<T> {
    execute(data: T): void
}
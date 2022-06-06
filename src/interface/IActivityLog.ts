export interface IActivityLog {
    context: string;
    data: any;
    function: string;
    date: Date;
    action: 'search' | 'add' | 'edit' | 'delete';
    from: 'server' | 'client'
    serverResponse?: any;
}
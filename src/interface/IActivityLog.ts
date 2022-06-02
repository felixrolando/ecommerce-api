export interface IActivityLog {
    context: string;
    data: any;
    function: string;
    date: Date;
    action: 'search' | 'add' | 'edit' | 'delete';
    serverResponse: any;
}
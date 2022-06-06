import events from '../events/Events'

export class ActivityLogHelper {
    static logServerEmit(context: string, fn: string, action: string, data: any) {
        events.emit('activityLog', {
            context: context,
            data: data,
            function: fn,
            date: new Date,
            action: action,
            from: 'server'
        })
    }
} 
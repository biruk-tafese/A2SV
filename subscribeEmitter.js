class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */

     constructor() {
        this.subscriptions = new Map();
     }

    subscribe(eventName, callback) {
        if(!this.subscriptions.has(eventName)) {
            this.subscriptions.set(eventName, []);
        }

        const eventSubscriptions = this.subscriptions.get(eventName);

        const subscription = {
            callback,
            unsubscribe: () => {
                const index = eventSubscriptions.indexOf(subscription);
                if(index !== -1 ) {
                    eventSubscriptions.splice(index, 1);

                }
            }
        };

        eventSubscriptions.push(subscription);
        return subscription;

    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        
        if(!this.subscriptions.has(eventName)) {
            return [];
        }

        const eventSubscriptions = this.subscriptions.get(eventName);
        const results = [];

        for (const {callback } of eventSubscriptions) {
            results.push(callback(...args));
        }
        return results;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

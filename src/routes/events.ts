class QuestsEvent<T>{

    private callbacks : ((args : T) => void )[]

    constructor() {
        this.callbacks = []
    }

    subscribe(func : (args : T) => void ) : void {
        this.callbacks.push(func)
    }
    unsubscribe(func : (args : T) => void ) : void {
        const index : number = this.callbacks.indexOf(func)
        if(index < 0)
            return

     
        this.callbacks.splice(index,1)
    }

    emit(args : T){
        this.callbacks.forEach(cb => {
            cb(args)
        });
    }
}

export {QuestsEvent}
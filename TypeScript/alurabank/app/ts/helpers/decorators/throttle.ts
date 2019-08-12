export function throttle(milissegundos = 500) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){

        const metodoOriginal = descriptor.value;
        let timer = 0;

        descriptor.value = (...args: any[]) => {
            
            if(event)
                event.preventDefault();
            clearInterval(timer);
            console.log('teste');
            timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
            
        }
        
    }

}
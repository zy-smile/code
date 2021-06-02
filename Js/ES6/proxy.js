let person = {
    a: 1,
    b: 2
}
Object.defineProperty(person, 'a',{
    value: 83,
    writable: false
})
let proxy = new Proxy(person,{
    get: function(target,key,proxy) {
          if(key in target) {
                return target[key]
            // return 0
          }else {
              throw new Error('key is not exist')
          }

    },
    set: function(obj,prop,val) {
        return obj[prop] = val
    }
})
console.log(proxy.a);
console.log(proxy.b);
// console.log(proxy.c);
// proxy.a = 12
console.log(proxy.a);
console.log(proxy);
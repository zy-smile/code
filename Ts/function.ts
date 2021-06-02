interface obj {
    color?: string,
    username?: string, // ?可选参数
    age?: number
}
function mySquare(config:obj) {
    console.log(config.color);
    
}
mySquare({color: 'red'})
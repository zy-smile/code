function animate(obj, target, callback) {
	clearInterval(obj.timer)
	obj.timer = setInterval(function() {
			// 计算步长值
		var step = (target - obj.offsetLeft) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step)
		if (target === obj.offsetLeft) {
			clearInterval(obj.timer)
			callback &&  callback()
		}
		obj.style.left = obj.offsetLeft + step + 'px'

	}, 15)
}
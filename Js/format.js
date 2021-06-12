 function FormDate(date) {
            var y = date.getFullYear()
            var m = date.getMonth() + 1
            m = m < 10 ? '0'+ m : m
            var d = date.getDate()
            d = d < 10 ? '0'+ d : d
            var hh = date.getHours()
            hh = hh < 10 ? '0'+ hh : hh
            var mm = date.getMinutes()
            mm = mm < 10 ? '0'+ mm : mm
            var ss = date.getSeconds()
            ss = ss < 10 ? '0'+ ss : ss
            var day =  date.getDay()
            var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            return  y + "/" + m + "/" + d + "   " + hh + ':' + mm + ':' + ss + "   " + arr[day]
        }
    console.log(FormDate(new Date()))
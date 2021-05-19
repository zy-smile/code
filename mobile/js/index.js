window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var ul = focus.querySelector('ul');
    var ol = focus.children[1];
    var nav = document.querySelector('.nav');
    var goback = document.querySelector('.goback');
    var index = 0;
    //定时器图片自动播放
    var timer = setInterval(function() {
            index++;
            ul.style.transition = 'all,.5s';
            style();
        }, 2000)
        //封装一个函数
    function style() {
        var translatex = -index * focus.offsetWidth;
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }
    //图片无缝滚动,当过渡完成再监听事件
    ul.addEventListener('transitionend', function() {
            if (index >= 3) {
                index = 0;
                ul.style.transition = 'none';

                style();

            } else if (index < 0) {
                index = 2;
                ul.style.transition = 'none';

                style();
            }
            ol.querySelector('.current').classList.remove('current');
            ol.children[index].classList.add('current');
        })
        //手指滑动轮播图
        // 初始化手指坐标
    var startX = 0;
    var moveX = 0;
    var flag = false;
    focus.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
    })
    focus.addEventListener('touchmove', function(e) {
            //手指移动距离
            moveX = e.targetTouches[0].pageX - startX;
            // 盒子移动距离
            var translatex = -index * focus.offsetWidth + moveX;
            ul.style.transition = 'none';
            ul.style.transform = 'translateX(' + translatex + 'px)';
            flag = true;
            e.preventDefault(); //阻止屏幕滚动行为

        })
        //手指离开图片回弹或播放下一张
    focus.addEventListener('touchend', function(e) {
            if (flag) {
                if (Math.abs(moveX) > 100) {
                    if (moveX > 0) {
                        index--;
                    } else {
                        index++;
                    }
                    ul.style.transition = 'all,.3s';
                    style();
                } else {
                    ul.style.transition = 'all,.1s';
                    style();
                }
            }
            //手指离开定时器开启,清除前面定时器只开启一个
            clearInterval(timer);
            timer = setInterval(function() {
                index++;
                ul.style.transition = 'all,.5s';
                style();
            }, 2000)
        })
        // 返回顶部
    document.addEventListener('scroll', function() {
        var navTop = nav.offsetTop;
        if (window.pageYOffset > navTop) {
            goback.style.display = 'block';
        } else {
            goback.style.display = 'none';
        }
        goback.addEventListener('click', function() {
            animate(window, 0);
        })
    })

    function animate(window, target) {
        //步长计算
        var step = (target - window.pageYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 清除定时器
        clearInterval(window.timer);
        //定时器
        window.timer = setInterval(function() {
            if (window.pageYOffset == target) {
                clearInterval(window.timer);
            }
            window.scroll(0, window.pageYOffset + step);
        }, 30)
    }
})
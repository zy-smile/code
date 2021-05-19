window.addEventListener('load', function() {
    // 顶部导航栏模块
    var menus = document.querySelectorAll('#dropdown-menu');
    var lists = document.querySelectorAll('.shortcut-list');
    var moble_item = document.querySelector('#moble-item');
    var qrcode_list = document.querySelector('.qrcode-list');
    var qrcode = document.querySelector('.qrcode');
    for (var i = 0; i < menus.length; i++) {
        menus[i].setAttribute('index', i)
        menus[i].addEventListener('mouseover', function() {

            for (var i = 0; i < menus.length; i++) {
                lists[i].style.display = 'none';
                menus[i].className = '';

            }
            var index = this.getAttribute('index');
            lists[index].style.display = 'block';
            this.className = 'list-current';
            this.addEventListener('mouseout', function() {
                lists[index].style.display = 'none';
                this.className = '';
            })

        })
    }
    moble_item.addEventListener('mouseover', function() {
        qrcode_list.style.display = 'block';
        qrcode_list.style.zIndex = '99';
    })
    moble_item.addEventListener('mouseout', function() {
            qrcode_list.style.display = 'none';
        })
        // 主体模块轮播图
    var focus = document.querySelector('.focus');
    var ul = focus.querySelector('ul');
    var arrow_l = focus.querySelector('.arrow-l');
    var arrow_r = focus.querySelector('.arrow-r');
    var ol = document.querySelector('.circle');
    var w = focus.offsetWidth;
    focus.addEventListener('mouseover', function() {
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseout', function() {
        timer = setInterval(function() {
            arrow_r.click();
        }, 2000)
    })
    for (i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        ol.children[0].className = 'circle-current';
        li.addEventListener('mouseover', function() {
            for (i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'circle-current';
            var index = this.getAttribute('index');


            // animate(ul, -index * w)
            ul.style.left = -index * w + 'px';
            num = index;
            circle = index;
        })
    }

    var num = 0;
    var circle = 0;

    arrow_r.addEventListener('click', function() {

        num++;
        if (num == ul.children.length) {
            ul.style.left = 0;
            num = 0;
        } else {
            ul.style.left = -num * w + 'px';
        }
        circle++;
        if (circle == ol.children.length) {
            circle = 0
        }
        circleChange();
    })
    arrow_l.addEventListener('click', function() {

        num--;
        if (num < 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * w + 'px';

        } else {
            ul.style.left = -num * w + 'px';
        }
        circle--;
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        circleChange();

    })

    function circleChange() {
        for (i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'circle-current';
    }
    var timer = setInterval(function() {
            arrow_r.click();
        }, 2000)
        // 推荐模块点击切图
    var recommend = document.querySelector('.recommend');
    var arrowl = recommend.querySelector('.arrow-l');
    var arrowr = recommend.querySelector('.arrow-r');
    var recommend_content = recommend.querySelector('.recommend-content');


    recommend.addEventListener('mouseover', function() {
        arrowl.style.display = 'block';
        arrowr.style.display = 'block';
    })
    recommend.addEventListener('mouseout', function() {
        arrowl.style.display = 'none';
        arrowr.style.display = 'none';
    })



    var j = 0;
    arrowr.addEventListener('click', function() {

        j++;
        console.log(j);

        if (j == recommend_content.children.length) {
            recommend_content.style.left = 0;
            j = 0;
        } else {
            recommend_content.style.left = -j * recommend.offsetWidth + 'px';
        }

    })
    arrowl.addEventListener('click', function() {

            j--;
            console.log(j);

            if (j < 0) {
                j = recommend_content.children.length - 1;
                recommend_content.style.left = -j * recommend.offsetWidth + 'px';

            } else {
                recommend_content.style.left = -j * recommend.offsetWidth + 'px';
            }

        })
        // 秒杀倒计时
    var timer_hour = document.querySelector('.timer-hour');
    var timer_minute = document.querySelector('.timer-minute');
    var timer_second = document.querySelector('.timer-second');


    function countDown() {
        var nowDate = +new Date();
        var inputTime = +new Date('2020-4-16 21:00:00');
        var times = (inputTime - nowDate) / 1000;
        var hour = parseInt(times / 60 / 60 % 24);
        hour = hour < 10 ? '0' + hour : hour;
        var minute = parseInt(times / 60 % 60);
        minute = minute < 10 ? '0' + minute : minute;

        var second = parseInt(times % 60);
        second = second < 10 ? '0' + second : second;
        timer_hour.innerHTML = hour;

        timer_minute.innerHTML = minute;
        timer_second.innerHTML = second;
    }
    setInterval(function() {
            countDown();
        }, 1000)
        //     // 侧边栏
        // var sidebar = document.querySelector('.sidebar');
        // var jd_seckill = document.querySelector('.jd-seckill');
        // var h = jd_seckill.offsetTop;
        // document.addEventListener('scroll', function() {
        //     if (window.pageYOffset > h) {
        //         sidebar.style.position = 'fixed';
        //         sidebar.style.top = 100 + 'px';
        //         sidebar.style.right = 0 + 'px';
        //     } else {
        //         sidebar.style.position = 'absolute';
        //         sidebar.style.top = 0 + 'px';
        //         sidebar.style.right = -70 + 'px';
        //     }
        // })

})
$(function() {
    // 顶部固定导航栏
    var jd_seckill = document.querySelector('.jd-seckill');
    var h = jd_seckill.offsetTop;
    $(document).scroll(function() {
        if (window.pageYOffset > h) {
            $('.shortcut-fixed').slideDown(800);
            $('.sidebar').css({ "position": "fixed", "top": "100px", "right": "0px" });
            $('.sidebar li:last').css('display', 'block')
        } else {
            $('.shortcut-fixed').slideUp();
            $('.sidebar').css({ "position": "absolute", "top": "0px", "right": "-60px" })
            $('.sidebar li:last').css('display', 'none')
        }
    })
    $('.sidebar ul li').click(function() {
        $(this).addClass('style-red').sibling().removeClass('style-red');
    })
})
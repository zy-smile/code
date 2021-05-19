// 创建类
var that;
class Tab {
    constructor(id) {
            that = this;
            this.main = document.querySelector(id);
            this.ul = this.main.querySelector('.fisrstnav ul');
            this.add = this.main.querySelector('.tabadd span');
            this.ftabscon = this.main.querySelector('.tabscon');
            this.init();

        }
        //获取元素
    updateNode() {
            this.icon = this.main.querySelectorAll('.icon-guanbi');
            this.lis = this.main.querySelectorAll('li');
            this.sections = this.main.querySelectorAll('section');
        }
        //初始化绑定事件
    init() {
            this.updateNode();
            this.add.onclick = this.addClass;
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.toggleTab;
                this.icons[i].onclick = this.removeTab;

            }
        }
        //点击切换
    toggleTab() {
            that.clearClass();
            this.className = 'liactive';
            that.sections[this.index].className = 'conactive';
        }
        //删除类名
    clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                that.sections[i].className = '';
            }
        }
        //增加
    addClass() {
            that.clearClass();
            var li = ' <li class="liactive"><span>新增</span><span class="iconfont icon-guanbi"></span></li>';
            var section = '<section class="conactive">新增内容</section>';
            that.ul.insertAdjacentHTML('beforeend', li);
            that.ftabscon.insertAdjacentHTML('beforeend', section);
            that.init();
        }
        //删除
    removeTab() {
            var index = this.parentNode.index;
            lis[index].remove();
            sections[index].remove();
            that.init();
            if (document.querySelector('.liactive')) return;
            index--;
            that.lis[index] && that.lis[index].click();
        }
        //修改
    editTab() {
        var str = this.innerHtml;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        innput.select();
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        };
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                this.blur();
            }
        }
    }

}
new Tab('#tab');
$(function() {
    load();
    $("#title").on("keydown", function(e) {
            if (e.keyCode === 13) {
                if ($("#title").val() === "") {
                    alert("请输入内容");
                } else {
                    //获取本地数据
                    var local = getDate();
                    local.push({ title: $("#title").val(), done: false })
                        // 把val值存储到本地
                    saveDate(local);
                    $(this).val("");
                    load();
                }
            }
        })
        //正在进行和已完成
    $("ol,ul").on("click", "input", function() {
            data = getDate();
            index = $(this).siblings("a").attr("id");
            data[index].done = $(this).prop("checked");
            saveDate(data);
            load();
        })
        //删除数据
    $("ol,ul").on("click", "a", function() {
            data = getDate();
            index = $(this).attr("id");
            data.splice(index, 1);
            saveDate(data);
            load();

        })
        //获取本地数据
    function getDate() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    //保存数据
    function saveDate(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }
    //渲染加载数据
    function load() {
        //读取本地数据
        var data = getDate();
        $("ul,ol").empty();
        var todoCount = 0;
        var doneCount = 0;
        //遍历这个数据
        $.each(data, function(i, ele) {
            if (ele.done) {
                $("ul").prepend($("<li><input type='checkbox' checked ='checked'></input><p>" + ele.title + "</p><a href='javescript:;' id = " + i + "></a></li>"))
                doneCount++;
            } else {
                $("ol").prepend($("<li><input type='checkbox'></input><p>" + ele.title + "</p><a href='javescript:;' id = " + i + "></a></li>"))
                todoCount++;
            }
        })
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }

})
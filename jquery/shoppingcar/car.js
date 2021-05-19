$(function() {
    //点击全选按钮，复选框全部选中
    $(".checkall").change(function() {
            $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
            if ($(this).prop("checked")) {
                $(".cart-item").addClass("check-cart-item");
            } else {
                $(".cart-item").removeClass("check-cart-item");
            }
        })
        //如果复选框一个不选中，全选取消
    $(".j-checkbox").change(function() {
            if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
                $(".checkall").prop("checked", true);

            } else {
                $(".checkall").prop("checked", false);
            }
            if ($(this).prop("checked")) {
                $(this).parents(".cart-item").addClass("check-cart-item");
            } else {
                $(this).parents(".cart-item").removeClass("check-cart-item");
            }

        })
        //点击加号，数量增加
    $(".increment").click(function() {


        var num = $(this).siblings(".itxt").val();
        num++;
        $(this).siblings(".itxt").val(num);

        //小计模块
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        var price = (p * num).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getsum();
    })


    //点击减号数量减少
    $(".decrement").click(function() {
            var num = $(this).siblings(".itxt").val();
            if (num == 1) {
                return false;
            }
            num--;
            $(this).siblings(".itxt").val(num);

            // $(this).siblings(".itxt").prop("value", num)

            // 小计
            var p = $(this).parents(".p-num").siblings(".p-price").html();
            p = p.substr(1);
            var price = (p * num).toFixed(2);
            $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
            getsum();

        })
        //用户修改值
    $(".itxt").change(function() {
            var num = $(this).val();
            var p = $(this).parents(".p-num").siblings(".p-price").html();
            p = p.substr(1);
            var price = (p * num).toFixed(2);
            $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
            getsum();
        })
        // 结算模块,遍历
    getsum();

    function getsum() {
        var n = 0;
        var m = 0;
        $(".itxt").each(function(i, ele) {
            n += parseInt($(ele).val());
            $(".amount-sum em").text(n);
        })
        $(".p-sum").each(function(i, ele) {
            m += parseFloat($(ele).text().substr(1));
            $(".price-sum em").text("￥" + m.toFixed(2));
        })
    }
    //点击删除
    $(".p-action a").click(function() {
        $(this).parents(".cart-item").remove();
        getsum();
    })
    $(".remove-batch").click(function() {
        // if ($(".j-checkbox").prop("checked")) {
        //     $(".j-checkbox").parents(".cart-item").remove();
        // }
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getsum();
    })
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getsum();
    })
})
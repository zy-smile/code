$(function() {
    var timer
    $('.select-city').on('mouseenter',showBox)
    $('.select-city').on('mouseleave', hideBox)
    $('.menu-list-one').on('mouseenter', showBox)
    $('.menu-list-one').on('mouseleave', hideBox)
    $('.menu-list-three').on('mouseenter', showBox)
    $('.menu-list-three').on('mouseleave', hideBox)
    function showBox() {

        $(this).addClass('current-bg')
        let item = $(this).children()[1]
        $(item).show()

    }
    function hideBox() {
        
        $(this).removeClass('current-bg')
        let item = $(this).children()[1]
        $(item).hide()
    }

})
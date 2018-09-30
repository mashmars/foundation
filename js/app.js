$(document).foundation()
/*菜单下行线 使用方式 div增加.hover-underline-menu 以及属性 data-menu-underline-from-center*/
$("[data-menu-underline-from-center] a").addClass("underline-from-center");
/**查询切换 */
$('.search').click(function () {
    $('#search').toggle();
})


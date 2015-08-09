(function ($) {
    $.fn.xxmenu = function (ops) {
        var defaults = {
            'location': 'top',
            'background-color': 'blue',
            'url': '',
            'data': {}
        };
        ops = $.extend({}, defaults, ops || {});
        if (ops.url != '') {
            $.ajax({
                url: ops.url,
                type: "get",
                async: false,
                success: function (data) {
                    ops.data = data;
                }
            })

        }
        var html = "";
        var x = {
            create: function (options, menu) {
                html += "<ul class='page-sidebar-menu' data-keep-expanded='false' data-auto-scroll='true' data-slide-speed='200'>"
                $(options.data).each(function (i, item) {
                    x.addItems(item);
                });
                html += "</ul>"
            },
            addItems: function (item, menu) {
                if (item.items == null) {
                    html += "<li><a abc='"+item.url+"' href='javascript:;'>" +
                    "<i class='" + item.icon + "'></i>" + item.name + "</a></li>"
                } else {
                    html += "<li><a href='javascript:;'>"
                    + "<i class='icon-folder'></i>"
                    + "<span class='title'>" + item.name + "</span>"
                    + "<span class='arrow'></span></a>"
                    + "<ul class='sub-menu'>"
                    $(item.items).each(function (i, child) {
                        x.addItems(child);
                    });
                    html += "</ul></li>"
                }
            },
            onClick:function(item) {

            },
            setEvent:function(menu) {
                menu.delegate("a","click",function(e){
                   if(!String($(this).attr("abc")).endWith("html")) return ;
                    var html = $(this).ajaxGetHtml($(this).attr("abc"));
                    $(this).parseHtmlEvent(html);
                })
            }
        }
        x.create(ops);
        this.html(html)
        x.setEvent(this);
    };
})(jQuery);
$(document).ready(function () {
    //$("#menssssu").xxmenu({"url": "menuData.json"});
    $("#menssssu").xxmenu({"url": "/menuTree.json"});
})
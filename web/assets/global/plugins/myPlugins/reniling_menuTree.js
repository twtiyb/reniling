/**
 * Created by xuchun on 15/1/24.
 */

(function($){
    $.xmenu = {};
    $.fn.menu = function(ops){
        var defaults = {
            url: null
        };
        var x = {
            show: function (options,menu)
            {
                if(menu==undefined) menu = x.menu;
                if (options && options.left != undefined)
                {
                    menu.css({ left: options.left });
                }
                if (options && options.top != undefined)
                {
                    menu.css({ top: options.top });
                }
                menu.show();
                x.updateShadow(menu);
            },
            hide: function (menu)
            {
                if (menu == undefined) menu = x.menu;
                x.hideAllSubMenu(menu);
                menu.hide();
                x.updateShadow(menu);
            },
            updateShadow: function (menu)
            {
                if (!ops.shadow) return;
                menu.shadow.css({
                    left: menu.css('left'),
                    top: menu.css('top'),
                    width: menu.outerWidth(),
                    height: menu.outerHeight()
                });
                if (menu.is(":visible"))
                    menu.shadow.show();
                else
                    menu.shadow.hide();
            },
            addItem: function (item, menu)
            {
                if(!item) return ;
                if(menu== undefined) menu = x.menu;

                if (item.line)
                {
                    menu.items.append('<div class="menu_item_line"></div>');
                    return;
                }
                var ditem = $('<div class="menu_item"><div class="menu_item_text"></div> </div>');
                var itemcount = $("> .menu_item", menu.items).length;
                menu.items.append(ditem);
                item.id && ditem.attr("menuitemid", item.id);
                item.text && $(">.menu_item_text:first", ditem).html(item.text);
                item.icon && ditem.prepend('<div class="menu_item_icon icon_' + item.icon + '"></div>');
                item.disable && ditem.addClass("menu_item_disable");
                if (item.children)
                {
                    ditem.attr("xid", $(this).createNewID());
                    ditem.append('<div class="menu_item_arrow"></div>');
                    var newmenu = x.createMenu(ditem.attr("xid"));
                    $.xmenu[ditem.attr("xid")] = newmenu;
                    newmenu.width(ops.width);
                    newmenu.hover(null,function(){
                        if(!newmenu.showedSubMenu)
                            x.hide(newmenu);
                    });
                    $(item.children).each(function ()
                    {
                        x.addItem(this, newmenu);
                    });
                }
                item.click && ditem.click(function ()
                {
                    if ($(this).hasClass("menu_item_disable")) return;
                    item.click(item, itemcount);
                });
                item.dblclick && ditem.dblclick(function ()
                {
                    if ($(this).hasClass("menu_item_disable")) return;
                    item.dblclick(item, itemcount);
                });

                var menuover = $("> .menu_over:first", menu);
                ditem.hover(function ()
                {
                    if ($(this).hasClass("menu_item_disable")) return;
                    var itemtop = $(this).offset().top;
                    var top = itemtop - menu.offset().top;
                    menuover.css({ top: top });
                    x.hideAllSubMenu(menu);
                    if (item.children)
                    {
                        var xid = $(this).attr("xid");
                        if (!xid) return;
                        if($.xmenu[xid])
                        {
                            x.show({top:itemtop,left:$(this).offset().left+$(this).width()-5},$.xmenu[xid]);
                            menu.showedSubMenu = true;
                        }
                    }
                }, function ()
                {
                    if ($(this).hasClass("menu_item_disable")) return;
                    if (item.children)
                    {
                        var xid = $(this).attr("xid");
                        if (!xid) return;
                        //   ???????????????????????????????????????????????
                    };
                });
            },
            setEnable: function (itemid, enable)
            {
                if (enable)
                    $("> .menu_item[menuitemid=" + itemid + "]", x.menu.items).removeClass("menu_item_disable");
                else
                    $("> .menu_item[menuitemid=" + itemid + "]", x.menu.items).addClass("menu_item_disable");
            },
            createMenu: function (parentxid)
            {
                var menu = $('<div class="menu" style="display:none"><div class="menu_yline"></div><div class="menu_over"><div class="menu_over_l"></div> <div class="menu_over_r"></div></div><div class="menu_inner"></div></div>');
                parentxid && menu.attr("parentxid", parentxid);
                menu.items = $("> .menu_inner:first", menu);
                menu.appendTo('body');
                if (ops.shadow)
                {
                    menu.shadow = $('<div class="menu_shadow"></div>').insertAfter(menu);
                    x.updateShadow(menu);
                }
                menu.hover(null,function(){
                    if(!menu.showedSubMenu)
                        $("> .menu_over:first", menu).css({ top: -24 });
                });
                return menu;
            },
            hideAllSubMenu:function(menu){
                if (menu == undefined) menu = x.menu;
                $("> .menu-item", menu.items).each(function ()
                {
                    if ($("> .menu-item-arrow", this).length > 0)
                    {
                        var menuitemid = $(this).attr("menuitemid");
                        if (!menuitemid) return;
                        x.menus[menuitemid] && g.hide(g.menus[menuitemid]);
                    }
                });
                menu.showedSubMenu = false;
            },
            destroyMenu: function()
            {
                x.menu.remove();
            }
        };
        x.menu = x.createMenu();
        x.menu.css({ top: ops.top, left: ops.left, width: ops.width });
        ops.items && $(ops.items).each(function (i, item)
        {
            x.addItem(item);
        });
        return x;
    };
})(jQuery);
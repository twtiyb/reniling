/**
 * Created by Administrator on 2015/1/27 0027.
 */
(function ($) {
    $.fn.ajaxGetHtml = function (url, parameter, global) {
        var html;
        url += url.indexOf("?") == -1 ? "?" : "&";
        url += "v_timestamp=" + new Date().getTime();
        if (global === undefined) {
            global = true;
        }
        $.ajax({
            type: "get",
            url: url,
            dataType: "html",
            data: parameter,
            async: false,
            global: global,
            success: function (data, textStatus) {
                html = data;
            },
            error: function (HttpRequest, textStatus, errorThrown) {
                if (global == true) {
                    $(this).ajaxError(HttpRequest, textStatus, errorThrown);
                }
            }
        });
        return html;
    };

    $.fn.parseHtmlEvent = function(html){
        $(".page-content").html(html);
        var action = $(".page-content").find("[action]");
        $("div[type=grid]").each(function (i,item) {
            $(this).xxgrid({});
        });
    }

    $.fn.ajaxGetJson = function (url, parameter, global) {
        var times = new Date().getTime();
        var json;
        url += url.indexOf("?") == -1 ? "?" : "&";
        url += "v_timestamp=" + times;
        if (global === undefined) {
            global = true;
        }
        $.ajax({
            type: "post",
            url: url,
            dataType: "json",
            data: parameter,
            async: false,
            global: global,
            success: function (data, textStatus) {
                json = data;
                if (data && data.reqLogGuid && data.reqLogGuid != "" && data.reqLogGuid != "0") {
                    var ts = new Date().getTime() - times;
                    $.lastClientTimes[data.reqLogGuid] = ts;
                }
            },
            error: function (HttpRequest, textStatus, errorThrown) {
                if (global === true) {
                    $(this).ajaxError(HttpRequest, textStatus, errorThrown);
                }
            }
        });
        return json;
    };

    $.fn.ajaxError = function (HttpRequest, textStatus, errorThrown) {
        $.windows.show({title: '系统发生错误，请联系系统管理员！', content: HttpRequest.responseText, height: 300});
    };

    $.fn.ajaxLoading = function () {
        $(".window_mask_wait, .loading").remove();
        $("<div class='window_mask_wait' style='display: block;'></div><div class='loading'></div>").appendTo("body");
    };

    $.fn.ajaxLoadEnd = function () {
        $(".window_mask_wait, .loading").remove();
    };

    String.prototype.endWith = function (s) {
        if (s == null || s == "" || this.length == 0 || s.length > this.length)
            return false;
        if (this.substring(this.length - s.length) == s)
            return true;
        else
            return false;
        return true;
    }

    String.prototype.startWith = function (s) {
        if (s == null || s == "" || this.length == 0 || s.length > this.length)
            return false;
        if (this.substr(0, s.length) == s)
            return true;
        else
            return false;
        return true;
    }

})(jQuery);
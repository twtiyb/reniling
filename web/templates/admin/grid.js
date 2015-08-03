(function ($) {
    $.fn.xxgrid = function (ops) {
        var defaults = {
            title: null,
            columns: [],
            columnWidth: 120,
            checkbox: true,
            radio: false,
            width: 'auto',
            height: 'auto',
            usePager: true,  //分页
            pageSizeOptions: [10, 50, 100, 200],
            dateFilterOptions: [{key: "15", value: '15天内'}, {key: "30", value: '一个月内'}, {
                key: "90",
                value: '三个月内'
            }, {key: "", value: '所有'}],
            pageSize: 10,    //每页默认行数
            delayLoad: false,      //初始化不加载数据
            allowHideColumn: true,
            allowAdjustColWidth: true,
            allowSort: true,
            isScroll: true,
            alternatingRow: true,  //隔行不同颜色
            fixedCellHeight: true,  //单元格固定高度
            enabledEdit: false,      //是否允许编辑
            enabledQuery: true,    //是否允许查询,编辑时不允许查询
            addable: true,
            statusName: '__status',  //行状态
            checkStatusName: '__checked',    //行选择状态
            rowNumberName: "__rowid",
            rowReadonlyName: "__readonly",
            rowDeletableName: "__deletable",
            rowEditColumns: "__editcolumns",
            fontColorName: "__fontcolor",
            backgroundColorName: "__backgroundcolor",
            method: 'post',
            compareword: {
                'equal': '等于',
                'unequal': '不等于',
                'greater': '大于',
                'less': '小于',
                'start': '开头是',
                'end': '结尾是',
                'like': '包含',
                'notlike': '不包含',
                'in': '多选',
                'between': '值之间',
                'relative': '范围'
            },
            comparesymbol: {
                'equal': '=',
                'unequal': '!=',
                'greater': '>',
                'less': '<',
                'start': '|=',
                'end': '=|',
                'like': '*',
                'notlike': '!*'
            },
            onReload: null,                    //刷新return false阻止
            onToFirst: null,                   //第一页return false阻止
            onToPrev: null,                    //上一页return false阻止
            onToNext: null,                    //下一页return false阻止
            onToLast: null,                    //最后页return false阻止
            onLoading: null,                   //加载时函数
            onLoaded: null,
            onSuccess: null,
            onError: null,
            onContextmenu: null,           //右击事件
            tree: null,

            //dataTables的属性
            processing: true,   //处理的标识。等待时会出现
            serverSide: true    //服务端处理
        };
        ops = $.extend({}, defaults, ops || {});
        //设置grid要显示的值
        $(this).find("table thead th").each(function () {
                if ($(this).text().trim() == "") {
                    ops.columns.push({"data": "tableIndex"});
                } else {
                    ops.columns.push({"data": $(this).text().trim()});
                }
            }
        )

        //在grid上设置属性...
        if ($(this).attr("query") == "false") {
            ops.enabledQuery = false;
        }
        ops.url = "../../showShopJson"
        //ops.url = "gridData.json"
        var x = {
            initPickers : function () {
                //init date pickers
                $('.date-picker').datepicker({
                    rtl: Metronic.isRTL(),
                    autoclose: true
                });
            },
            loadData: function () {
                if (ops.url == null) return;
                var grid = new Datatable(ops);
                grid.init({
                    src: $("#datatable_ajax"),
                    onSuccess: function (grid) {
                        // execute some code after table records loaded
                    },
                    onError: function (grid) {
                        // execute some code on network or other general error
                    },
                    onDataLoad: function (grid) {
                        // execute some code on ajax data load
                    },
                    loadingMessage: 'Loading...',
                    dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options

                        // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
                        // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/scripts/datatable.js).
                        // So when dropdowns used the scrollable div should be removed.
                        //"dom": "<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'<'table-group-actions pull-right'>>r>t<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'>>",

                        "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

                        "lengthMenu": [
                            [10, 20, 50, 100, 150, -1],
                            [10, 20, 50, 100, 150, "All"] // change per page values here
                        ],
                        "pageLength": 10, // default record count per page
                        "ajax": {
                            "url": ops.url // ajax source
                        },
                        "columns": ops.columns, //要显示的值
                        "order": [
                            [1, "asc"]
                        ]// set first column as a default sort by asc
                    }
                })

                // handle group actionsubmit button click
                grid.getTableWrapper().on('click', '.table-group-action-submit', function (e) {
                    e.preventDefault();
                    var action = $(".table-group-action-input", grid.getTableWrapper());
                    if (action.val() != "" && grid.getSelectedRowsCount() > 0) {
                        grid.setAjaxParam("customActionType", "group_action");
                        grid.setAjaxParam("customActionName", action.val());
                        grid.setAjaxParam("id", grid.getSelectedRows());
                        grid.getDataTable().ajax.reload();
                        grid.clearAjaxParams();
                    } else if (action.val() == "") {
                        Metronic.alert({
                            type: 'danger',
                            icon: 'warning',
                            message: 'Please select an action',
                            container: grid.getTableWrapper(),
                            place: 'prepend'
                        });
                    } else if (grid.getSelectedRowsCount() === 0) {
                        Metronic.alert({
                            type: 'danger',
                            icon: 'warning',
                            message: 'No record selected',
                            container: grid.getTableWrapper(),
                            place: 'prepend'
                        });
                    }
                });
            }
        }
        x.initPickers();
        x.loadData();
    }
})(jQuery);

package com.reniling.action;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by xuchun on 15/2/10.
 */
@Controller
public class MyController {

    @RequestMapping ( "/showView" )
    public ModelAndView showView() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName( "viewName" );
        modelAndView.addObject( " 需要放到 model 中的属性名称 " , " 对应的属性值，它是一个对象 " );
        return modelAndView;
    }

    @RequestMapping("/showShopJson*")

    @ResponseBody
    public   Object showShopJson(HttpServletRequest request) {
        Map mapParam = request.getParameterMap();


        List<Object> list = new ArrayList<Object>();
        List<String> rowData = new ArrayList<String>();
                rowData.add("222");
                rowData.add("33");
                rowData.add("334");
                list.add(rowData);
                list.add("dsfdsaf");
                list.add("dsfdsaf");
                list.add("dsfdsaf");
                list.add("dsfdsaf");
                list.add("dsfdsaf");
                list.add("dsfdsaf");
                list.add("dsfdsaf");
                list.add("dsfdsaf");
                list.add("dsfdsaf");
                list.add("dsfdsaf");
                list.add("dsfdsaf");
                list.add("dsfdsaf");
        Map map = new HashMap();
        map.put("data", list);
        map.put("recordsTotal", list.size());
        map.put("recordsFiltered", list.size());
        return map;
    }

}
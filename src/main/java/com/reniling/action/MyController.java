package com.reniling.action;

import com.reniling.entity.Shop;
import com.reniling.entity.SyMenu;
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
    @RequestMapping("/menuTree*")
    @ResponseBody
    public Object menuTree(HttpServletRequest request) {
        Map mapParam = request.getParameterMap();

        SyMenu menu1 = new SyMenu();
        menu1.setIcon("click");
        menu1.setUrl("content_test.html");
        menu1.setName("主菜单1");
        List<SyMenu> menuPage1 = new ArrayList<SyMenu>();
        menuPage1.add(new SyMenu(null, "click", "content_test.html", "二级菜单1"));
        menuPage1.add(new SyMenu(null, "click", "content_test.html", "二级菜单2"));
        menuPage1.add(new SyMenu(null, "click", "content_test.html", "二级菜单3"));
        menu1.setItems(menuPage1);

        SyMenu menu2 = new SyMenu();
        menu2.setIcon("click");
        menu2.setUrl("content_test.html");
        menu2.setName("主菜单1");
        List<SyMenu> menuPage2 = new ArrayList<SyMenu>();
        menuPage2.add(new SyMenu(null, "click", "content_test.html", "二级菜单1"));
        menuPage2.add(new SyMenu(null, "click", "content_test.html", "二级菜单2"));
        menuPage2.add(new SyMenu(null, "click", "content_test.html", "二级菜单3"));
        menu2.setItems(menuPage2);


        List<Object> list = new ArrayList<Object>();
        list.add(menu1);
        list.add(menu2);
        return list;
    }


    @RequestMapping("/showView")
    public ModelAndView showView() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("viewName");
        modelAndView.addObject(" 需要放到 model 中的属性名称 ", " 对应的属性值，它是一个对象 ");
        return modelAndView;
    }

    @RequestMapping("/showShopJson*")
    @ResponseBody
    public Object showShopJson(HttpServletRequest request) {
        Map mapParam = request.getParameterMap();


        Shop shop1 = new Shop();
        shop1.setShopName("店铺A");
        shop1.setShopId("1");

        Shop shop2 = new Shop();
        shop2.setShopName("店铺B");
        shop2.setShopId("2");

        List<Object> list = new ArrayList<Object>();
        list.add(shop1);
        list.add(shop2);

        Map map = new HashMap();
        map.put("data", list);
        map.put("recordsTotal", list.size());
        map.put("recordsFiltered", list.size());
        return map;
    }

}
package com.reniling.util;

import com.reniling.util.front.PageParameter;

import java.util.Iterator;
import java.util.Map;

/**
 * Created by xuchun on 15/9/8.
 */
public class MapUtil {
    public static PageParameter getPageParameter(Map<String, String[]> map) {
        if (map == null) {
            return null;
        }
        PageParameter pageParameter = new PageParameter();

        //设置cloumns
        Iterator it = map.keySet().iterator();
        while (it.hasNext()) {
            String next = (String) it.next();
            if (next.indexOf("columns") >= 0) {
                break;
            }
        }

        //基础属性
        pageParameter.setStart(Integer.parseInt(String.valueOf((map.get("start")[0]))));
        pageParameter.setLength(Integer.parseInt(String.valueOf(map.get("length")[0])));
        pageParameter.setEnd(pageParameter.getStart() + pageParameter.getLength());
        return pageParameter;
    }
}

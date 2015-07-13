package com.reniling.util;

import javax.servlet.http.*;
import java.util.HashMap;

/**
 * Created by xuchun on 15/1/22.
 */
public class SessionListener implements HttpSessionListener {
    public static HashMap<String, String> sessionMap = new HashMap<String, String>();
    @Override
    public void sessionDestroyed(HttpSessionEvent httpSessionEvent) {
        sessionMap.remove(httpSessionEvent.getSession().getId());
    }

    @Override
    public void sessionCreated(HttpSessionEvent httpSessionEvent) {
        sessionMap.put(httpSessionEvent.getSession().getId(),"");
    }
}


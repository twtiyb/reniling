package com.reniling.util;

import javax.servlet.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Created by xuchun on 15/1/23.
 */
public class LoginFilter implements javax.servlet.Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest request = (HttpServletRequest)req;
        HttpSession session = request.getSession(false);
        if (session != null && !session.getId().equals(getSessionId(request))) {
        }

        chain.doFilter(req, resp);
    }

    public void init(FilterConfig config) throws ServletException {

    }

    private String getSessionId(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        String sid = "";
        if (cookies != null) {
            for (int i = 0; i < cookies.length; i++) {
                Cookie c = cookies[i];
                if ("JSESSIONID".equals(c.getName().toUpperCase())) {
                    sid = c.getValue();
                    break;
                }
            }
        }
        return sid;
    }
}

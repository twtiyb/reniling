package com.reniling.util;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by xuchun on 15/1/20.
 */
public class Servlet extends HttpServlet {

    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/htxsl;charset=utf-8");
        PrintWriter pw = resp.getWriter();
        String context = "";
        context = "欢迎，这是第1个servlet";
        pw.write(context);
        pw.flush();
        pw.close();
    }

    public void doPost(HttpServletRequest req,HttpServletResponse resp) throws  ServletException,IOException {
        doGet(req,resp);
    }
}

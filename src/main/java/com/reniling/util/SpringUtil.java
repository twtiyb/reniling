package com.reniling.util;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletContext;

public class SpringUtil implements ApplicationContextAware {
	private static ApplicationContext ctx = null;
	
	public static Object getBean(String name) {
		if (ctx == null) {
//			ctx = WebApplicationContextUtils.getRequiredWebApplicationContext(.getServletContext());
		}
		return ctx.getBean(name);
	}
	
	public static Object getBean(String name,ServletContext context) {
		ApplicationContext ctx = WebApplicationContextUtils.getRequiredWebApplicationContext(context);
		return ctx.getBean(name);
	}
	
	public void setApplicationContext(ApplicationContext arg0) throws BeansException {
		this.ctx = arg0;
	}
}

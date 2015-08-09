package com.reniling.entity;

import java.util.List;

/**
 * Created by xuchun on 15/8/4.
 */
public class SyMenu {
    List<SyMenu> items;
    String icon;
    String url;
    String name;

    public SyMenu(List<SyMenu> items, String icon, String url, String name) {
        this.items = items;
        this.icon = icon;
        this.url = url;
        this.name = name;
    }

    public SyMenu() {

    }

    public List<SyMenu> getItems() {
        return items;
    }

    public void setItems(List<SyMenu> items) {
        this.items = items;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

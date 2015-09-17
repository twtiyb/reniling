package com.reniling.util.front;

import java.util.Map;

/**
 * Created by xuchun on 15/9/8.
 */
public class PageParameter extends Search {
    int start = 1;
    int length = 10;
    int end = 1;
    Map<String, Column> columns;


    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public int getLength() {
        return length;
    }

    public int getEnd() {
        return end;
    }

    public void setEnd(int end) {
        this.end = end;
    }

    public void setLength(int length) {
        this.length = length;

    }

    public Map<String, Column> getColumns() {
        return columns;
    }

    public void setColumns(Map<String, Column> columns) {
        this.columns = columns;
    }
}

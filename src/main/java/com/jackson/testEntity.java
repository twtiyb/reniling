package com.jackson;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

/**
 * Created by xuchun on 15/7/2.
 */
public class testEntity {
    @JsonProperty("returnOrder")
    public String returnOrder;

    public  String purchseOrder;


//    @JsonProperty("testList")
    public List<testList> testList;

    public List<testList> getTestList() {
        return testList;
    }

    public void setTestList(List<testList> testList) {
        this.testList = testList;
    }

    public String getReturnOrder() {
        return returnOrder;
    }

    public void setReturnOrder(String returnOrder) {
        this.returnOrder = returnOrder;
    }

    public String getPurchseOrder() {
        return purchseOrder;
    }

    public void setPurchseOrder(String purchseOrder) {
        this.purchseOrder = purchseOrder;
    }
}

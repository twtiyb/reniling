package com.jackson;


import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by xuchun on 15/7/2.
 */
public class jacksonTest {
    public static void main(String[] args) {
//        ObjectMapper mapper = new ObjectMapper();
//        mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
//        mapper.setPropertyNamingStrategy(PropertyNamingStrategy.CAMEL_CASE_TO_LOWER_CASE_WITH_UNDERSCORES);
//        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
//        String str = "{\"returnOrder\":\"123\",\"purchse_order\":\"abc\"}";
//        try {
//            testEntity test = mapper.readValue(str, testEntity.class);
//            System.out.println(test.getPurchseOrder());
//            System.out.println(test.getReturnOrder());
//            test.setPurchseOrder(null);
//            System.out.println(mapper.writeValueAsString(test));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }

        String strSrc
        String strSrc = "\\servicedfd";
        String ng = "\\"+"\\" + "servicedfd";
        System.out.println(ng);
        Pattern pattern = Pattern.compile(ng);
        Matcher matcher = pattern.matcher(strSrc);
        System.out.println(matcher.matches());
    }
}

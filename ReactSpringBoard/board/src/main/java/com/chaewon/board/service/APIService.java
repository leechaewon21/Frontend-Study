package com.chaewon.board.service;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.*;

public class APIService {

    //REST Template 이용
    RestTemplate restTemplate = new RestTemplate();

    public void requestBookNameYongin(String bookname) {

        //BASE URL & SECRET KEY
        String url = "http://apis.data.go.kr/4050000/libnewbk/getLibnewbk";
        String secretKey_decode = "hnV18uyNXjw7iZfE8/2Cqs7bfmZJW2rAnT78Q2MxXFWM0MRLCqU54vgDDlspO1MUvmktXkFVlWhgEE/8XyhZ1Q==";

        //REQUEST URL
        UriComponents builder = UriComponentsBuilder.fromHttpUrl(url)
                .queryParam("serviceKey",secretKey_decode) //필수
                .queryParam("pageNo",1) //필수
                .queryParam("numOfRows",10) //필수
                .queryParam("bk_nm", bookname) //도서명
                .build();

        //RESPONSE
        ResponseEntity<String> response = restTemplate.getForEntity(builder.toString(),String.class);

        System.out.println("요청 : "+url);
        System.out.println("응답 : "+response);
    }

    public void requestBookNameSeoul(String bookname) {

        //BASE URL & SECRET KEY
        String url = "http://openapi-lib.sen.go.kr/openapi/service/lib/openApi";
        String secretKey_decode = "hnV18uyNXjw7iZfE8/2Cqs7bfmZJW2rAnT78Q2MxXFWM0MRLCqU54vgDDlspO1MUvmktXkFVlWhgEE/8XyhZ1Q==";


        //REQUEST URL
        UriComponents builder = UriComponentsBuilder.fromHttpUrl(url)
                .queryParam("serviceKey",secretKey_decode) //필수
                .queryParam("title",bookname) //필수
                .queryParam("manageCd","MB") //필수
                .build();

        //RESPONSE
        ResponseEntity<String> response = restTemplate.getForEntity(builder.toString(),String.class);

        System.out.println("요청 : "+url);
        System.out.println("응답 : "+response);
    }

    public void requestBookNameNational(String bookname) {

        //BASE URL & SECRET KEY
        String url = "https://www.nl.go.kr/NL/search/openApi/search.do";
        String secretKey_decode = "2c114ed64bd3fcaa770a9490e3f6d09d51aa0aa4a2dc9727847318b6da0184f4";

        //REQUEST URL
        UriComponents builder = UriComponentsBuilder.fromHttpUrl(url)
                .queryParam("key",secretKey_decode) //필수
                .queryParam("pageNum",1) //필수
                .queryParam("pageSize",10) //필수
                .queryParam("kwd",bookname) // 책이름
                .build();

        //RESPONSE
        ResponseEntity<String> response = restTemplate.getForEntity(builder.toString(),String.class);

        System.out.println("요청 : "+url);
        System.out.println("응답 : "+response.toString());
    }

    public void requestBookNameNaru(String bookname) {
        //BASE URL & SECRET KEY
        String url = "http://data4library.kr/api/libSrchByBook";
        String secretKey_decode = "d1add6230140fdcad9b12b5f202c550411ed3b4e7419b28fba2264654938c5ef";

        //REQUEST URL
        UriComponents builder = UriComponentsBuilder.fromHttpUrl(url)
                .queryParam("authKey",secretKey_decode) //필수
                .queryParam("isbn","9788983710277") //필수 - 개미
                .queryParam("region","21") //필수 - 부산
                .build();

        //RESPONSE
        ResponseEntity<String> response = restTemplate.getForEntity(builder.toString(),String.class);

        System.out.println("요청 : "+url);
        System.out.println("응답 : "+response);
    }
}

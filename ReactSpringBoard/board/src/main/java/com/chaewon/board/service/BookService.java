package com.chaewon.board.service;

public class BookService {

    private final APIService apiService;

    //@Autowired
    public BookService(APIService apiService) {
        this.apiService = apiService;
    }

    public void searchByBookName(String bookname) {
        apiService.requestBookNameYongin(bookname); //SUCCESS
        apiService.requestBookNameSeoul(bookname); //KEY ERROR
        apiService.requestBookNameNational(bookname); //SUCCESS
        apiService.requestBookNameNaru(bookname); //SUCCESS
    }
}

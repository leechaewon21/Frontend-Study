package com.chaewon.board.controller;

import com.chaewon.board.service.BookService;
import com.chaewon.board.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@Controller
public class BookController {

    private final BookService bookService;

    //@Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/api/search_bookname")
    @ResponseBody
    public String searchByBookName(@RequestParam String bookname) {
        if(bookname == "") return "No Input...";
        else {
            bookService.searchByBookName(bookname);
            return bookname;
        }
    }

}
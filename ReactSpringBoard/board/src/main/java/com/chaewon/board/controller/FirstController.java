package com.chaewon.board.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class FirstController {

    static class Hello {
        private String name;
        public String getName() {return this.name;}
        public void setName(String n) {this.name = n;}
    }

    @GetMapping("first-api")
    @ResponseBody
    public Hello firstApi(@RequestParam("name") String name) {
        Hello h = new Hello();
        h.setName(name);
        return h;
    }

    @GetMapping("first-mvc")
    public String firstMvc(@RequestParam("name") String name, Model model) {
        model.addAttribute("name", name);
        return "first-mvc";
    }

}

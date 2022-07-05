package com.chaewon.board.controller;

import com.chaewon.board.domain.JwtToken;
import com.chaewon.board.domain.Member;
import com.chaewon.board.service.MemberService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Controller
public class MemberController {

    private final MemberService memberService;

    //@Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("/api/enroll_member")
    @ResponseBody
    public Member enrollMember(@RequestBody HashMap<String,Object> param) {
        Member member = new Member();
        member.setName(param.get("name").toString());
        member.setId(param.get("id").toString());
        member.setPassword(param.get("password").toString());

        long enrolledIndex = memberService.join(member);
        member.setIndex(enrolledIndex);

        return member;
    }

    @GetMapping("/api/list_member")
    @ResponseBody
    public List<Member> listMember(Model model) {
        List<Member> members = memberService.findAllMembers();
        model.addAttribute("members",members);

        return members;
    }

    @GetMapping("/api/search_member_name")
    @ResponseBody
    public List<Member> searchMemberName(@RequestParam String searchname) {
        List<Member> members = memberService.findMemberByName(searchname);
        return members;
    }

    @GetMapping("/api/search_member_id")
    @ResponseBody
    public Optional<Member> searchMemberId(@RequestParam String searchid) {
        Optional<Member> member = memberService.findOneMemberById(searchid);
        return member;
    }

//
//    @PostMapping("/api/login")
//    public String login(@RequestParam(value="id")String id, @RequestParam(value="password")String password) {
//        String createdJWT = "";
//        if(id == "1234" && password == "1234") {
//            JwtToken jwtToken = new JwtToken();
//            createdJWT = jwtToken.createJWT(id, password);
//        }
//        return createdJWT;
//    }

}

package com.chaewon.board.controller;

import com.chaewon.board.domain.Member;
import com.chaewon.board.service.MemberService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MemberController {

    private final MemberService memberService;

    //@Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("/api/enroll_member")
    @ResponseBody
    public Member enrollMember(@RequestBody String memberName) {

        Member member = new Member();
        member.setName(memberName);

        int enrollId = memberService.join(member);
        return member;
    }


}

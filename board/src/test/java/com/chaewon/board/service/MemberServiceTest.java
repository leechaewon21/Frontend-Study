package com.chaewon.board.service;

import com.chaewon.board.domain.Member;
import com.chaewon.board.repository.MemberRepository;
import com.chaewon.board.repository.MemoryMemberRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MemberServiceTest {

//    MemoryMemberRepository memberRepository = new MemoryMemberRepository();
//    MemberService memberSerivce = new MemberService();

    MemberService memberService;
    MemoryMemberRepository memberRepository;

    @BeforeEach
    void beforeEach() {
        memberRepository = new MemoryMemberRepository();
        memberService = new MemberService(memberRepository);
    }

    @AfterEach
    void afterEach() {
        memberRepository.clearStore();
    }

    @Test
    void join() {
        //given
        Member member = new Member();
        member.setName("kimsujin");

        //when
        int joinId = memberService.join(member);

        //then
        Member findMember = memberService.findOneMember(joinId).get();
        Assertions.assertEquals(member.getName(),findMember.getName());
    }

    @Test
    void joinDuplicate() {
        //given
        Member member1 = new Member();
        member1.setName("kimsujin");

        Member member2 = new Member();
        member2.setName("kimsujin");

        //when
        memberService.join(member1);
        IllegalStateException e = assertThrows(IllegalStateException.class, () -> memberService.join(member2));

        //then
        assertEquals(e.getMessage(),"이미 존재하는 회원");
    }

    @Test
    void findAllMembers() {
        //given
        Member member1 = new Member();
        member1.setName("kimsujin");

        Member member2 = new Member();
        member2.setName("leechaewon");

        //when
        memberService.join(member1);
        memberService.join(member2);
        int membersNum = memberService.findAllMembers().size();

        //then
        assertEquals(2,membersNum);
    }

    @Test
    void findOneMember() {
        //given
        Member member = new Member();
        member.setName("kimsujin");

        //when
        int joinId = memberService.join(member);
        Member findMember = memberService.findOneMember(joinId).get();

        //then
        assertEquals(member.getName(),findMember.getName());
    }
}
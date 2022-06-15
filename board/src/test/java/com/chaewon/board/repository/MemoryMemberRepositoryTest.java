package com.chaewon.board.repository;

import com.chaewon.board.domain.Member;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

public class MemoryMemberRepositoryTest {
    MemoryMemberRepository memberRepository = new MemoryMemberRepository();

    @Test
    public void save() {
        //임의의 Member 하나 생성
        Member member = new Member();
        member.setName("kimsujin");

        //Member 저장
        memberRepository.save(member);

        //원래 객체의 id로 찾은 객체 == 원래 객체 ?
        Member result = memberRepository.findById(member.getId()).get();
        Assertions.assertEquals(result,member);
    }

    @Test
    public void findByName() {
        // Member1 생성 및 저장
        Member member1 = new Member();
        member1.setName("kimsujin");
        memberRepository.save(member1);

        // Member2 생성 및 저장
        Member member2 = new Member();
        member2.setName("leechaewon");
        memberRepository.save(member2);

        //원래 객체의 이름으로 찾은 객체 == 원래 객체 ?
        Member result = memberRepository.findByName("kimsujin").get();
        Assertions.assertEquals(result, member1);
    }

    @Test
    public void findAll() {
        // Member1 생성 및 저장
        Member member1 = new Member();
        member1.setName("kimsujin");
        memberRepository.save(member1);

        // Member2 생성 및 저장
        Member member2 = new Member();
        member2.setName("leechaewon");
        memberRepository.save(member2);

        //2개를 저장한뒤 findAll 반환하는 객체들이 2개인지 체크
        List<Member> result = memberRepository.findAll();
        Assertions.assertEquals(result.size(), 2);
    }

    @AfterEach
    public void afterEach() {
        memberRepository.clearStore();
    }
}

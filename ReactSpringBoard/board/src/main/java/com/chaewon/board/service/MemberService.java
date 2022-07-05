package com.chaewon.board.service;

import com.chaewon.board.domain.Member;
import com.chaewon.board.repository.MemberRepository;
import com.chaewon.board.repository.MemoryMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

//@Service
public class MemberService {


//    private final MemberRepository memberRepository = new MemoryMemberRepository();

    private final MemberRepository memberRepository;
    //@Autowired
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public long join(Member member) { //회원가입
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getIndex();
    }

    public List<Member> findAllMembers() {
        return memberRepository.findAll();
    }

    public List<Member> findMemberByName(String name) {return memberRepository.findByName(name);}

    public Optional<Member> findOneMemberById(String id) {
        return memberRepository.findById(id);
    }

    private void validateDuplicateMember(Member member) { //아이디가 같은지 체크
        memberRepository.findById(member.getId())
                .ifPresent( m -> {
                    throw new IllegalStateException("이미 존재하는 회원");
                });
    }
}

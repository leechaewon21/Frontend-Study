package com.chaewon.board.service;

import com.chaewon.board.domain.Member;
import com.chaewon.board.repository.MemberRepository;
import com.chaewon.board.repository.MemoryMemberRepository;

import java.util.List;
import java.util.Optional;

public class MemberService {

//    private final MemberRepository memberRepository = new MemoryMemberRepository();

    private final MemberRepository memberRepository;
    MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public int join(Member member) {
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getId();
    }

    public List<Member> findAllMembers() {
        return memberRepository.findAll();
    }

    public Optional<Member> findOneMember(int memberID) {
        return memberRepository.findById(memberID);
    }

    private void validateDuplicateMember(Member member) { //이름이 같은지 체크
        memberRepository.findByName(member.getName())
                .ifPresent( m -> {
                    throw new IllegalStateException("이미 존재하는 회원");
                });
    }
}

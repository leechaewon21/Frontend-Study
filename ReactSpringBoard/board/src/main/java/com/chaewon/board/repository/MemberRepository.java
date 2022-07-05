package com.chaewon.board.repository;

import com.chaewon.board.domain.Member;
import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    Member save(Member member);
    public List<Member> findByName(String name);
    Optional<Member> findById(String id);
    List<Member> findAll();
}

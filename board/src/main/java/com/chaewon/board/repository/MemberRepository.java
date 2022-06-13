package com.chaewon.board.repository;

import com.chaewon.board.domain.Member;
import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    Member save(Member member);
    Optional<Member> findByID(int id);
    Optional<Member> findByName(String name);
    List<Member> findAll();
}

package com.chaewon.board.repository;

import com.chaewon.board.domain.Member;
import org.springframework.stereotype.Repository;

import java.util.*;

//@Repository
public class MemoryMemberRepository implements MemberRepository{
    private static Map<Long, Member> store = new HashMap<>();
    private static long sequence = 0;

    @Override
    public Member save(Member member) {
        member.setIndex(++sequence);
        store.put(member.getIndex(), member);
        return member;
    }

    @Override
    public List<Member> findByName(String name) {
        List<Member> members = new ArrayList<Member>();
        store.values().stream()
                .filter(member -> member.getName().equals(name))
                .forEach((member)->members.add(member));
        return members;
    }

    @Override
    public Optional<Member> findById(String id) {
        return store.values().stream()
                .filter(member -> member.getId().equals(id))
                .findAny();
    }


    @Override
    public List<Member> findAll() {
        return new ArrayList<>(store.values());
    }


    public void clearStore() {
        store.clear();
    }
}

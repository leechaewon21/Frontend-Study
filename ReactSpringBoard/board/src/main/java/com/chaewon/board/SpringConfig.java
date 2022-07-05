package com.chaewon.board;

import com.chaewon.board.repository.JDBCMemberRepository;
import com.chaewon.board.repository.MemberRepository;
import com.chaewon.board.repository.MemoryMemberRepository;
import com.chaewon.board.service.APIService;
import com.chaewon.board.service.BookService;
import com.chaewon.board.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class SpringConfig {

    private DataSource dataSource;

    @Autowired
    public SpringConfig(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Bean
    public MemberService memberService() {
        return new MemberService(memberRepository());
    }

    @Bean
    public MemberRepository memberRepository() { return new MemoryMemberRepository(); }
//    public MemberRepository memberRepository() { return new JDBCMemberRepository(dataSource); }


    @Bean
    public BookService bookService() { return new BookService(apiService());}

    @Bean
    public APIService apiService() {
        return new APIService();
    }

}

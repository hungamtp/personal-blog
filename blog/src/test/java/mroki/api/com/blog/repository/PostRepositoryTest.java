package mroki.api.com.blog.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PostRepositoryTest {

    @Autowired
    private PostRepository postRepository;

    @Test
    public void findPostsTest(){
        System.out.println(postRepository.findPostsCustomForTest(1,0,"id",true , "first" , true).get(0).getRate());

    }


}

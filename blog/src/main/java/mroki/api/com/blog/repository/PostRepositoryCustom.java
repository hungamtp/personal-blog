package mroki.api.com.blog.repository;

import mroki.api.com.blog.model.Post;
import mroki.api.com.blog.repository.projection.PostHomePageProjection;

import java.util.List;

public interface PostRepositoryCustom {
    List<PostHomePageProjection> findPostsCustom(int size , int page , String sort ,Boolean isAscending, String title , Boolean publish);
    List<PostHomePageProjection> findPostsCustomForTest(int size, int page, String sort, Boolean isAscending, String title, Boolean publish);
}

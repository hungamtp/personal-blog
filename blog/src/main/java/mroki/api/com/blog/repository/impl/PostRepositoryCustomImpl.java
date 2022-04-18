package mroki.api.com.blog.repository.impl;

import mroki.api.com.blog.model.Comment;
import mroki.api.com.blog.model.Comment_;
import mroki.api.com.blog.model.Post;
import mroki.api.com.blog.model.Post_;
import mroki.api.com.blog.repository.PostRepositoryCustom;
import mroki.api.com.blog.repository.projection.PostHomePageProjection;
import org.apache.commons.lang3.StringUtils;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

public class PostRepositoryCustomImpl implements PostRepositoryCustom {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<PostHomePageProjection> findPostsCustom(int size, int page, String sort, Boolean isAscending, String title, Boolean publish) {
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<PostHomePageProjection> criteriaQuery = criteriaBuilder.createQuery(PostHomePageProjection.class);
        Root<Post> root = criteriaQuery.from(Post.class);
        Join<Post, Comment> joinComment = root.join(Post_.COMMENTS);

        criteriaQuery.multiselect(
            root.get(Post_.ID),
            root.get(Post_.TITLE),
            root.get(Post_.CREATED_AT),
            criteriaBuilder.avg(joinComment.get(Comment_.RATE))
        );
        criteriaQuery.groupBy(root.get(Post_.ID));
        Predicate titleEqual = criteriaBuilder.like(
            criteriaBuilder.function("unaccent", String.class,
                criteriaBuilder.lower(root.get(Post_.TITLE))), "%" + StringUtils.stripAccents(title) + "%");

        List<Order> orderList = new ArrayList();

        if (isAscending) {
            orderList.add(criteriaBuilder.asc(root.get(sort)));
        }
        else {
            orderList.add(criteriaBuilder.desc(root.get(sort)));
        }

        criteriaQuery.where(titleEqual).orderBy(orderList);
        return entityManager.createQuery(criteriaQuery)
            .setMaxResults(size)
            .setFirstResult(page == 0 ? 0 : (page - 1) * size)
            .getResultList();

    }
}

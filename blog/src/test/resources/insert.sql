INSERT INTO post(id, title, content, createdAt, editedAt , publish)
VALUES(1, 'first post', 'the first post content', '2010-07-22 13:05:58.0', '2010-07-22 13:05:58.0',1);

INSERT INTO comment(id, content, rate , post_id)
VALUES(1, 'first post', 5, 1);

INSERT INTO comment(id, content, rate , post_id)
VALUES(2, 'first post', 5, 1);

INSERT INTO comment(id, content, rate , post_id)
VALUES(3, 'first post', 5, 1);

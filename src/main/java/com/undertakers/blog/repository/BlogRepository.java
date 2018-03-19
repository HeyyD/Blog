package com.undertakers.blog.repository;

public interface BlogRepository<T, ID> {
    public T saveEntity(T entity);
    public void delete(ID id);
    public Iterable<T> findAll();
    public T findOne(ID id);
}

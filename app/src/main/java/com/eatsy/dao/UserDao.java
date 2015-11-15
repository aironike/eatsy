package com.eatsy.dao;

import com.eatsy.domain.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by hemantkumar on 14/11/15.
 */
public interface UserDao extends CrudRepository<User, Integer>{
	public User findById(int id);
}

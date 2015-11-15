package com.eatsy.dao;

import com.eatsy.domain.UserRestaurantLog;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by hemantkumar on 14/11/15.
 */
@Transactional
public interface UserRestaurantLogDao extends CrudRepository<UserRestaurantLog, Integer>{

	public List<UserRestaurantLog> findByUserId(int userId);
	public List<UserRestaurantLog> findByRestaurantId(int restaurantId);

}

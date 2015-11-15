package com.eatsy.dao;

import com.eatsy.domain.MenuItem;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by hemantkumar on 14/11/15.
 */
@Transactional
public interface MenuItemDao extends CrudRepository<MenuItem, Integer>{
	public List<MenuItem> findByRestaurantId(int restaurantId);
}

package com.eatsy.dao;

import com.eatsy.domain.Restaurant;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by hemantkumar on 14/11/15.
 */
@Transactional
public interface RestaurantDAO extends CrudRepository<Restaurant, Integer> {

	public List<Restaurant> findByCityId(int cityId);
	public Restaurant findById(int id);

}

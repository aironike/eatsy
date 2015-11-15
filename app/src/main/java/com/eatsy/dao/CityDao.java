package com.eatsy.dao;

import com.eatsy.domain.City;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by hemantkumar on 14/11/15.
 */
public interface CityDao extends CrudRepository<City, Integer>{
	public City findByName(String name);
}

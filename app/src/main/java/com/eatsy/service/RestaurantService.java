package com.eatsy.service;

import com.eatsy.dao.*;
import com.eatsy.domain.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

/**
 * Created by hemantkumar on 14/11/15.
 */
@Component

@Slf4j
public class RestaurantService {

	@Autowired
	private RestaurantDAO restaurantDAO;

	@Autowired
	private UserRestaurantLogDao userRestaurantLogDao;

	@Autowired
	private UserDao userDao;

	@Autowired
	private CityDao cityDao;

	@Autowired
	private MenuItemDao menuItemDao;

	public City getCity(String name) {
		return cityDao.findByName(name);
	}

	public List<Restaurant> prepareRestaurants(int cityId) {

		List<Restaurant> restaurants = restaurantDAO.findByCityId(cityId);
		log.info("restaurants: " + restaurants.size());
		for (Restaurant restaurant : restaurants) {
			List<UserRestaurantLog> userlogList = userRestaurantLogDao.findByRestaurantId(restaurant.getId());
			log.info("User log for restaurant " + restaurant.getId() + ", " + userlogList.size());
			List<User> users = new LinkedList<>();
			double rating = 0;
			for(UserRestaurantLog userRestaurantLog: userlogList) {
				User user = userDao.findById(userRestaurantLog.getUserId());
				users.add(user);
				rating = rating + userRestaurantLog.getRating();
			}
			double averageRating = rating / userlogList.size();
			restaurant.setRating(Math.round(averageRating));
			restaurant.setUsers(users);

		}
		return restaurants;

	}

	public List<MenuItem> getMenuItems(int restaurantId) {
		return menuItemDao.findByRestaurantId(restaurantId);
	}
}

package com.eatsy.controllers;

import com.eatsy.domain.*;
import com.eatsy.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

/**
 * Created by hemantkumar on 14/11/15.
 */
@RestController
@RequestMapping("/eatsy")
public class RestaurantController {

	@Autowired
	private RestaurantService restaurantService;

	@RequestMapping("/city/{name}")
	public FeedPage getFeedPage(@PathVariable String name) {

		int cityId;
		City city = restaurantService.getCity(name);
		if (city != null) {
			cityId = city.getId();
		} else {
			cityId = 1;
		}

	    FeedPage feedPage = new FeedPage();
		feedPage.setCityId(1);
		List<Restaurant> restaurants = restaurantService.prepareRestaurants(cityId);
		feedPage.setRestaurantWithFriendsInfo(restaurants);
		Set<User> usersForCity = new HashSet<>();
		for(Restaurant restaurant: restaurants) {
			usersForCity.addAll(restaurant.getUsers());
		}
		List<User> friends = new LinkedList<>();
		friends.addAll(usersForCity);
		feedPage.setFriends(friends);
		return feedPage;
	}

	@RequestMapping("/menu/{restaurantId}")
	public List<MenuItem> getMenuItems(@PathVariable int restaurantId) {
		return restaurantService.getMenuItems(restaurantId);
	}


}

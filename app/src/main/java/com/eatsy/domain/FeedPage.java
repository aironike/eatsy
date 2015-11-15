package com.eatsy.domain;

import java.util.List;
import java.util.Map;

/**
 * Created by hemantkumar on 14/11/15.
 */
public class FeedPage {

	private int cityId;
	private List<User> friends;
	private List<Restaurant> restaurantWithFriendsInfo;
	private List<Restaurant> otherRestaurants;

	public int getCityId() {
		return cityId;
	}

	public void setCityId(int cityId) {
		this.cityId = cityId;
	}

	public List<User> getFriends() {
		return friends;
	}

	public void setFriends(List<User> friends) {
		this.friends = friends;
	}

	public List<Restaurant> getRestaurantWithFriendsInfo() {
		return restaurantWithFriendsInfo;
	}

	public void setRestaurantWithFriendsInfo(List<Restaurant> restaurantWithFriendsInfo) {
		this.restaurantWithFriendsInfo = restaurantWithFriendsInfo;
	}

	public List<Restaurant> getOtherRestaurants() {
		return otherRestaurants;
	}

	public void setOtherRestaurants(List<Restaurant> otherRestaurants) {
		this.otherRestaurants = otherRestaurants;
	}
}

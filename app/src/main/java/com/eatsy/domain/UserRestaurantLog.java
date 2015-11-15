package com.eatsy.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by hemantkumar on 14/11/15.
 */
@Entity
public class UserRestaurantLog {

	@Id
	private int id;

	@Column(name="user_id")
	private int userId;

	@Column(name="restaurant_id")
	private int restaurantId;

	private double rating;

	private String review;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(int restaurantId) {
		this.restaurantId = restaurantId;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public String getReview() {
		return review;
	}
}

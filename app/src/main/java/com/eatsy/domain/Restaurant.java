package com.eatsy.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;
import java.util.List;

/**
 * Created by hemantkumar on 14/11/15.
 */

@Entity
public class Restaurant {

	@Id
	private int id;

	private String name;

	private boolean suggested;
	private String description;
	private double rating;
	private String logo;
	private String menuItem;
	@Transient
	private List<User> users;

	@Column(name="city_id")
	private int cityId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getCityId() {
		return cityId;
	}

	public void setCityId(int cityId) {
		this.cityId = cityId;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public String getLogo() {
			return logo;
	}

	public boolean isSuggested() {
		return suggested;
	}

	public void setSuggested(boolean suggested) {
		this.suggested = suggested;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;

		Restaurant that = (Restaurant) o;

		return id == that.id;

	}

	@Override
	public int hashCode() {
		return id;
	}
}

package com.eatsy.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by hemantkumar on 14/11/15.
 */
@Entity
public class City {
	@Id
	private int id;
	private String name;
	@Column(name="country_id")
	private int countryId;

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getCountryId() {
		return countryId;
	}

	public void setCountryId(int countryId) {
		this.countryId = countryId;
	}
}

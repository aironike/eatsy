package com.eatsy.domain;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by hemantkumar on 14/11/15.
 */
@Entity

public class Friend {
	@Id
	int id;

	String name;

	public Friend(String name) {
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}

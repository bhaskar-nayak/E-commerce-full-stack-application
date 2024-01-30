package com.fullstack.dao;

import com.fullstack.model.User;
import com.fullstack.utils.Response;

public interface UsersDAO {

	public Response registerUser(User user);
	public Response loginUser(User user);
}

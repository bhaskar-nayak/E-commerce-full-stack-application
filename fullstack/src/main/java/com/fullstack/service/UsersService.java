package com.fullstack.service;

import com.fullstack.model.User;
import com.fullstack.utils.Response;

public interface UsersService {
public Response registerUser(User user);
public Response loginUser(User user);
}

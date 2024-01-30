package com.fullstack.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fullstack.dao.UsersDAO;
import com.fullstack.model.User;
import com.fullstack.utils.Response;

@Service
public class UsersServiceImpl implements UsersService{

	@Autowired
	UsersDAO usersDAO;

	@Override
	public Response registerUser(User user) {
		// TODO Auto-generated method stub
		return usersDAO.registerUser(user);
	}

	@Override
	public Response loginUser(User user) {
		// TODO Auto-generated method stub
		return usersDAO.loginUser(user);
	}

}

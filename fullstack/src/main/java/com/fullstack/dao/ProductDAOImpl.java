package com.fullstack.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fullstack.model.Product;
import com.fullstack.utils.Response;

@Repository
public class ProductDAOImpl implements ProductDAO {
	@Autowired
	SessionFactory sessionFactory;
	@Override
	public Response addProduct(Product product) {
		// TODO Auto-generated method stub
		Response response=new Response();
		Session session=sessionFactory.openSession();
		Transaction tx=session.beginTransaction();
		int i=(int)session.save(product);
		if(i!=0) {
			response.setMessage("product added successfullly");
			response.setOperation(true);
			response.setStatusCode(201);
		}else {
			response.setMessage("product add failed");
			response.setOperation(false);
			response.setStatusCode(500);
		}
		tx.commit();
		return response;	
}
	//this api for listing all the products
	@Override
	public List<Product> list() {
		// TODO Auto-generated method stub
		Session session=sessionFactory.openSession();
		Transaction tx=session.beginTransaction();
		Query<Product> query=session.createQuery("from Product");
		return query.getResultList();	
}
	//this api for get products by id
	@Override
	public Product getProduct(int id) {
		// TODO Auto-generated method stub
		Session session=sessionFactory.openSession();
		Transaction tx=session.beginTransaction();
		Product product=session.get(Product.class, id);
		return product;
		}
	//this api for deleting products based on id
	@Override
	public Response deleteProduct(int id) {
		// TODO Auto-generated method stub
		Session session=sessionFactory.openSession();
		Transaction tx=session.beginTransaction();
		Product product=session.get(Product.class,id);
		Response response= new Response();
		try {
			session.remove(product);
			tx.commit();
			response.setMessage("delete successfully");
			response.setOperation(true);
			response.setStatusCode(200);	
		}catch(Exception error) {
			System.out.println("error:"+ error.getMessage());
			response.setMessage(error.getMessage());
			response.setOperation(false);
			response.setStatusCode(200);
			
		}
		return response;
	}
	@Override
	public Response updateProduct(Product product) {
		// TODO Auto-generated method stub
		Session session= sessionFactory.openSession();
		Transaction tx= session.beginTransaction();
		Response response=new Response();
		try {
			session.update(product);
			tx.commit();
			response.setMessage("updation successfully");
			response.setOperation(false);
			response.setStatusCode(200);		
		}catch(Exception error) {
			System.out.println("error:"+ error.getMessage());
			response.setMessage("update failed");
			response.setStatusCode(200);
		}
		return response;
	}
	}
	
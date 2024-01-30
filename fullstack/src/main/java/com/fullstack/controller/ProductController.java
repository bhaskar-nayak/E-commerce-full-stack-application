package com.fullstack.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fullstack.model.Product;
import com.fullstack.service.ProductService;
import com.fullstack.utils.Response;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {
@Autowired
ProductService productService;
public static String uploadDirectory = System.getProperty("user.dir")+"/src/main/webapp/";
//public static String thumbnailsDirectory = uploadDirectory + "thumbnails/";
ResponseEntity responseObject=null;
@SuppressWarnings({ "rawtype, unchecked"})
@PostMapping("/addsproduct")
public ResponseEntity addProduct(@ModelAttribute Product product, 
		@RequestParam("image") MultipartFile file,  @RequestParam("thumbnail") MultipartFile[] thumbnailFiles,  @RequestParam("sizes") List<String> sizes) throws IOException {
	String originalFilename = file.getOriginalFilename();
//	Path fileNameAndPath=Paths.get(uploadDirectory,originalFilename);
//	 Path fileNameAndPath = Paths.get(uploadDirectory + "/images/", originalFilename);
	Path fileNameAndPath = Paths.get(uploadDirectory + "/images/", originalFilename);
	Files.write(fileNameAndPath, file.getBytes());
	product.setImgSrc("/images/" + originalFilename);
	if (thumbnailFiles != null) {
        List<String> thumbnails = new ArrayList<>();

        for (MultipartFile thumbnailFile : thumbnailFiles) {
            String thumbnailFilename = thumbnailFile.getOriginalFilename();
//            Path thumbnailFileNameAndPath = Paths.get(thumbnailsDirectory, thumbnailFilename);
//            Path thumbnailFileNameAndPath = Paths.get(uploadDirectory + "thumbnails/", thumbnailFilename);
            Path thumbnailFileNameAndPath = Paths.get(uploadDirectory + "thumbnails/", thumbnailFilename);
            Files.write(thumbnailFileNameAndPath, thumbnailFile.getBytes());
//            thumbnails.add(thumbnailFilename);
            thumbnails.add("thumbnails/" + thumbnailFilename); // Set the path for each thumbnail
        }

        product.setThumbnailImgs(thumbnails);
    }
//	// Log paths for debugging
    System.out.println("Image Path: " + fileNameAndPath.toString());
    for (String thumbnail : product.getThumbnailImgs()) {
        System.out.println("Thumbnail Path: " + uploadDirectory + thumbnail);
    }
 // Set sizes to the product
    product.setSize(sizes);
try {
	Response response=productService.addProduct(product);
	responseObject=new ResponseEntity(response, response.getOperation()? HttpStatus.CREATED: HttpStatus.BAD_REQUEST);
}catch(Exception error) {
	System.out.println(error);
	Response response=new Response();
	response.setMessage(error.getMessage());
	response.setOperation(false);
	response.setStatusCode(500);
	responseObject=new ResponseEntity(response, response.getOperation()? HttpStatus.CREATED: HttpStatus.BAD_REQUEST);
}
return responseObject;
}
//list of products
@SuppressWarnings({ "rawtype, unchecked"})
@GetMapping("/list")
public ResponseEntity getProduct() {
	try {
	responseObject=new ResponseEntity<List<Product>>(productService.list(), HttpStatus.OK);	
	}catch(Exception exception) {
		Response response=new Response();
		response.setMessage(exception.getMessage());
		response.setOperation(false);
		response.setStatusCode(500);
		System.out.println(exception);
		responseObject=new ResponseEntity(response, HttpStatus.OK);
	}
	return responseObject;
}
//getting products based on id
@SuppressWarnings({ "rawtype, unchecked"})
@GetMapping("/products/{id}")
public ResponseEntity getProduct(@PathVariable int id) {
	try {
		Product product=productService.getProduct(id);
		responseObject=new ResponseEntity(product, HttpStatus.OK);
	}catch(Exception exception) {
		Response response=new Response();
		response.setMessage(exception.getMessage());
		response.setOperation(false);
		response.setStatusCode(500);
		System.out.println(exception);
		responseObject=new ResponseEntity(response,HttpStatus.OK);
	}
	return responseObject;
}
//this API for deleting products based on id
@SuppressWarnings({ "rawtype, unchecked"})
@DeleteMapping("/product/{id}")
public ResponseEntity deleteProduct(int id) {
	try {
		System.out.println("id:"+id);
		Response response=productService.deleteProduct(id);
		responseObject=new ResponseEntity(response, response.getOperation()? HttpStatus.OK: HttpStatus.BAD_REQUEST);
	}catch(Exception exception) {
		Response response= new Response();
		response.setMessage(exception.getMessage());
		response.setOperation(false);
		response.setStatusCode(500);
		System.out.println(exception);
		responseObject=new ResponseEntity(response, HttpStatus.OK);
	}
	return responseObject;
}
//this API for updating products
@SuppressWarnings({ "rawtype, unchecked"})
@PutMapping("/update")
public ResponseEntity updateProduct(@RequestBody Product product) {
	try {
		Response response=productService.updateProduct(product);
		responseObject=new ResponseEntity(response, response.getOperation()? HttpStatus.OK: HttpStatus.BAD_REQUEST);
	}catch(Exception exception) {
		System.out.println(exception);
		Response response= new Response();
		response.setMessage(exception.getMessage());
		response.setOperation(false);
		response.setStatusCode(500);
		System.out.println(exception);
		responseObject=new ResponseEntity(response, HttpStatus.OK);
	}
	return responseObject;
}
}

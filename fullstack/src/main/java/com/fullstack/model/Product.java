package com.fullstack.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.CollectionTable;
import javax.persistence.JoinColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
@Entity
@Table (name="products")
public class Product {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
@Column
private String name;
@Column
private int price;
@Column
private double rating;
@Column
private String description;
@Lob
@Column(name = "image_data")
private String imgSrc; // For the main image
@ElementCollection
@CollectionTable(name = "thumbnails", joinColumns = @JoinColumn(name = "product_id"))
@Column(name = "thumbnail")
private List<String> thumbnailImgs;

@ElementCollection
@CollectionTable(name = "sizes", joinColumns = @JoinColumn(name = "product_id"))
@Column(name = "size")
private List<String> size;
public Product() {
}
public Product(int id, String name, int price, double rating, String description, String imgSrc,
		List<String> thumbnailImgs, List<String> size) {
	super();
	this.id = id;
	this.name = name;
	this.price = price;
	this.rating = rating;
	this.description = description;
	this.imgSrc = imgSrc;
	this.thumbnailImgs = thumbnailImgs;
	this.size = size;
}
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
public int getPrice() {
	return price;
}
public void setPrice(int price) {
	this.price = price;
}
public double getRating() {
	return rating;
}
public void setRating(double rating) {
	this.rating = rating;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public String getImgSrc() {
	return imgSrc;
}
public void setImgSrc(String imgSrc) {
	this.imgSrc = imgSrc;
}
public List<String> getThumbnailImgs() {
	return thumbnailImgs;
}
public void setThumbnailImgs(List<String> thumbnailImgs) {
	this.thumbnailImgs = thumbnailImgs;
}
public List<String> getSize() {
	return size;
}
public void setSize(List<String> size) {
	this.size = size;
}

}
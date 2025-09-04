package com.inventory.management.system.service;

import java.util.List;

import com.inventory.management.system.entiry.Product;

public interface ProductService {
	
	
	Product addProduct(Product product);
	List<Product> getAllProduct();
	Product updateProductQuantity(Long id,int quantity);
	void deleteProductById(Long id);
	
	

}

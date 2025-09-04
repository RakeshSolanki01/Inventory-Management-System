package com.inventory.management.system.controller;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.inventory.management.system.entiry.Product;
import com.inventory.management.system.service.ProductService;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RestController
@RequestMapping("/products")
public class Controller {
	
	private final ProductService services;
	
	//Add product 
	@PostMapping
	public Product addProduct(@RequestBody Product product) {
		services.addProduct(product);
		return product;
		
	}
	
	
	// Get All product
	@GetMapping
	public List<Product> getAllProduct(){
		List<Product> list=services.getAllProduct();
		
		return list;
}
	
	@DeleteMapping("/{id}")
	public void deleteProductById(@PathVariable Long id) {
		services.deleteProductById(id);
	}
	
	@PutMapping("/{id}")
	public Product updateQuantity(@PathVariable Long id, @RequestParam int quantity) {
		Product product = services.updateProductQuantity(id, quantity);
		
		return product;
		
	}
	

}

package com.week2hw2.movieAPI.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.week2hw2.movieAPI.model.Movie;

@RestController
public class Controller {

	@GetMapping("/movie")
	public Movie[] getAllMaps() {
		String url = "https://my.api.mockaroo.com/movie.json?key=bb299fd0";

	      RestTemplate restTemplate = new RestTemplate();

	      Movie[] response  = null;

	      response = restTemplate.getForObject(url, Movie[].class);
	      
	      for(Movie movie: response) {
	    	  System.out.println(movie);
	      }
	      return response;
	}
}


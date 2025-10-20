package com.concessionnaire.AutoCar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.concessionnaire.controller", "com.concessionnaire.AutoCar"})
public class AutoCarAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(AutoCarAppApplication.class, args);
	}

}

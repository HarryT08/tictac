package com.art.ufps.tictac;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = "com.art.ufps")
public class TictacApplication {
	public static void main(String[] args) {
		SpringApplication.run(TictacApplication.class, args);
	}
}
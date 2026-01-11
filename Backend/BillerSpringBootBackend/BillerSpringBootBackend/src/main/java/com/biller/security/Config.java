package com.biller.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class Config {
	
	@Bean
	public SecurityFilterChain mySecurityFilterChain(HttpSecurity http) throws Exception {
		
		http
		.cors().and()
		.authorizeHttpRequests((request)-> request.requestMatchers("/admin/**").hasAuthority("Admin")
				//.requestMatchers("/accountsholder/**").hasRole("Admin")
				.anyRequest().permitAll());
		
		http.httpBasic(Customizer.withDefaults());
		
		return http.build();
		
	}
	
	@Bean
	public InMemoryUserDetailsManager userDetailsService() {
		UserDetails u1 = User.withUsername("gautam").password("{noop}root").roles("Admin").build();
		UserDetails u2 =User.withUsername("ajay").password("{noop}root").roles("user").build();
		
		return new InMemoryUserDetailsManager(u1,u2);
	}
	 

}

package com.fullstack;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    public static String uploadDirectory = System.getProperty("user.dir") + "/src/main/webapp/";
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Configuration for main images
        registry.addResourceHandler("/images/**")
                .addResourceLocations("file:" + uploadDirectory + "images/");

        // Configuration for thumbnail images
        registry.addResourceHandler("/thumbnails/**")
                .addResourceLocations("file:" + uploadDirectory);
    }
}
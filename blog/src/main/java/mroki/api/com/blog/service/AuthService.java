package mroki.api.com.blog.service;


import mroki.api.com.blog.dto.request.JwtResponse;
import mroki.api.com.blog.dto.request.LoginRequest;

public interface AuthService {

    public JwtResponse signIn(LoginRequest loginRequest);
}

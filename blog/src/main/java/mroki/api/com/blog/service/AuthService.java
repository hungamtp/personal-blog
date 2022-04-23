package mroki.api.com.blog.service;


import mroki.api.com.blog.dto.auth.JwtResponse;
import mroki.api.com.blog.dto.auth.LoginRequest;
import mroki.api.com.blog.dto.auth.SignUpRequest;

public interface AuthService {

    public JwtResponse signIn(LoginRequest loginRequest);
}

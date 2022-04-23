package mroki.api.com.blog.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private Long id;
	private String username;
	private String role;

	public JwtResponse(String token,
					Long id,
					String username,
					String role) {
		this.token = token;
		this.id = id;
		this.username = username;
		this.role = role;
	}
}

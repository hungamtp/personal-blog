package mroki.api.com.blog.model;

import lombok.*;
import mroki.api.com.blog.enums.ERole;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "roles",
		indexes ={
				@Index(name = "role_idx" , columnList = "rolename")
		}
)
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Role {
	@Id
	@GeneratedValue
	@Column(name = "roleid")
	private Long id;

	@Enumerated(EnumType.STRING)
	@Column(name = "rolename", nullable = false)
	private ERole roleName;

	@OneToMany(mappedBy = "role")
	private Collection<User> users;
}

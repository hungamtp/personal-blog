package mroki.api.com.blog.dto.request.request;

import java.time.LocalDateTime;
import java.util.List;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SearchFilterSortRequestDTO {
    private List<Short> states;

    private LocalDateTime localDateTime;

    private String sortField;

    private String sortType;

    private String searchKeyWord;
}

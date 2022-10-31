package com.b308.letscamp.dto.reservation;

import com.b308.letscamp.entity.Camping;
import com.b308.letscamp.entity.Reservation;
import com.b308.letscamp.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReservationSaveRequest {
    private User user;
    private Camping camping;
    private String startDate;
    private String endDate;
    private String category;
    private Long count;
    private Long level;

    public Reservation toEntity() {
        return Reservation.builder()
                .user(user)
                .camping(camping)
                .startDate(startDate)
                .endDate(endDate)
                .category(category)
                .count(count)
                .level(0L)
                .build();
    }
}

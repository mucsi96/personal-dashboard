package com.mucsi96.personalDashboard.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "task")
public class Task {

    @Id
    @GeneratedValue
    private Long id;
    @NonNull
    private String name;
    @NonNull
    @Enumerated(EnumType.STRING)
    private TaskStatus status;
}


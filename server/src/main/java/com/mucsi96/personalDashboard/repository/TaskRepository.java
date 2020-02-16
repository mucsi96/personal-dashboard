package com.mucsi96.personalDashboard.repository;

import com.mucsi96.personalDashboard.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}

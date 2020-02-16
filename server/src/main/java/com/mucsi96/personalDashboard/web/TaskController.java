package com.mucsi96.personalDashboard.web;

import com.mucsi96.personalDashboard.model.Task;
import com.mucsi96.personalDashboard.model.TaskRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;


@RestController
public class TaskController {

    private final Logger log = LoggerFactory.getLogger(TaskController.class);
    private TaskRepository taskRepository;

    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @GetMapping("/tasks")
    Collection<Task> tasks() {
        return taskRepository.findAll();
    }
}

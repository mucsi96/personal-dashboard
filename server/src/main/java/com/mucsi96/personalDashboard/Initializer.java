package com.mucsi96.personalDashboard;

import com.mucsi96.personalDashboard.model.Task;
import com.mucsi96.personalDashboard.repository.TaskRepository;
import com.mucsi96.personalDashboard.model.TaskStatus;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Stream;

@Component
class Initializer implements CommandLineRunner {

    private final TaskRepository taskRepository;

    public Initializer(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Stream.of("Task1", "Task2", "Task3").forEach(name -> taskRepository.save(new Task(name, TaskStatus.NEW)));

        taskRepository.findAll().forEach(System.out::println);
    }
}

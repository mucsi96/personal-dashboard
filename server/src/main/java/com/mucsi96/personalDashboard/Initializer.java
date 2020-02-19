package com.mucsi96.personalDashboard;

import com.mucsi96.personalDashboard.model.Task;
import com.mucsi96.personalDashboard.repository.TaskRepository;
import com.mucsi96.personalDashboard.model.TaskStatus;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.stream.Stream;

@Component
class Initializer implements CommandLineRunner {

    private final TaskRepository taskRepository;

    public Initializer(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    Date addDays(Date date, int days) {
        LocalDateTime localDateTime = date.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime().plusDays(days);
        return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
    }

    @Override
    public void run(String... args) throws Exception {
        Task task1 = new Task("Make a wireframe", TaskStatus.PROGRESS);
        task1.setProgress(0.75f);
        taskRepository.save(task1);

        Task task2 = new Task("Video apps design", TaskStatus.PROGRESS);
        task2.setProgress(0.25f);
        taskRepository.save(task2);

        Task task3 = new Task("Prepare for CEO meeting", TaskStatus.PROGRESS);
        task3.setProgress(0.6f);
        taskRepository.save(task3);

        Task task4 = new Task(("Make an HTML5 template"), TaskStatus.PENDING);
        task4.setDueDate(addDays(new Date(), 1));
        taskRepository.save(task4);

        Task task5 = new Task("Dashboard design", TaskStatus.PENDING);
        taskRepository.save(task5);

        taskRepository.findAll().forEach(System.out::println);
    }
}

import { Component } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
students: any[] = [];
  loading = false;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents() {
    this.loading = true;
    this.studentService.getAllStudents().subscribe({
      next: (res: any[]) => {
        this.students = res;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}

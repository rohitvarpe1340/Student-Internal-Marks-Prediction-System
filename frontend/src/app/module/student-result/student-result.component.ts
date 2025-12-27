import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class ResultComponent implements OnInit {

  predictedMarks: number | null = null;
result: any;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.result$.subscribe((value: number | null) => {
      this.predictedMarks = value;
    });

  }
}


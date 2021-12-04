import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents() {
    return 'Get all Students for Teacher by Id';
  }

  @Put('/:studentId')
  updateStudentTeacher() {
    return 'Update student teacher';
  }
}

import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents(): string {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentById(): string {
    return 'Get Student by Id';
  }

  @Post()
  createStudent() {
    return 'Create Student';
  }

  @Put('/:studentId')
  updateStudent() {
    return 'Update Student By Id';
  }
}
 
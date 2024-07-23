import { Injectable } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable()// por padrao e um singleton
export class CoursesService {
 private courses:Course[] = [];
}

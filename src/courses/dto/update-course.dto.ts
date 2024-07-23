import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator"
import { CreateCourseDTO } from "./create-course.dto";

export class UpdateCourseDTO extends PartialType(CreateCourseDTO){}
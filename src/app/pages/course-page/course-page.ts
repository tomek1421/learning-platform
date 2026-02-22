import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ExerciseIcon } from "../../icons/exercise-icon/exercise-icon";
import { NoteIcon } from "../../icons/note-icon/note-icon";
import { ChapterIcon } from "../../icons/chapter-icon/chapter-icon";
import { GymIcon } from "../../icons/gym-icon/gym-icon";
import { ArrowIcon } from "../../icons/arrow-icon/arrow-icon";
import { CourseDto } from '../../types/Course';
import { csharpCourse, levelColors } from '../../data/courses';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-course-page',
  imports: [ExerciseIcon, NoteIcon, ChapterIcon, GymIcon, ArrowIcon, RouterLink],
  templateUrl: './course-page.html',
  styleUrl: './course-page.scss',
})
export class CoursePage implements OnChanges {
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['courseData'] && this.courseData) {
       this.expandChapter = Array(this.courseData.chapters.length).fill(false);
    }
  }
  
  courseData: CourseDto = csharpCourse;

  expandChapter: boolean[] = [];
  
  onChapterClick(id: string) {
    const index =this.courseData.chapters.findIndex(c => c.id === id);
    this.expandChapter[index] = !this.expandChapter[index];
  }

  isExpanded(id: string) {
    const index =this.courseData.chapters.findIndex(c => c.id === id);
    return this.expandChapter[index];
  }

  getLevelColor(index: number): string {
    const i = index % levelColors.length;
    return "#" + levelColors[i];
  }

  getAllLessons() {
    const chapters = csharpCourse.chapters;
    return chapters.reduce((acc, curr) => acc + curr.lessonReferences.length, 0);
  }
}

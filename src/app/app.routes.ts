import { Routes } from '@angular/router';
import { LessonPage } from './pages/lesson-page/lesson-page';
import { HomePage } from './pages/home-page/home-page';
import { CoursePage } from './pages/course-page/course-page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'course', component: CoursePage },
    { path: 'course/:id', component: LessonPage }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {
    path: 'students',
    loadChildren: () =>
      import('./modules/student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'programs',
    loadChildren: () =>
      import('./modules/program/program.module').then((m) => m.ProgramModule),
  },
  {
    path: 'student-enrollments',
    loadChildren: () =>
      import('./modules/student-enrollment/student-enrollment.module').then(
        (m) => m.StudentEnrollmentModule
      ),
  },

  {
    path: '',
    component: LandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLawComponent } from './admin-law/admin-law.component';

import { LawReviewListComponent } from '../law/law-review-list';
import { LawComponent } from '../law/law.component';
import { LawListComponent } from '../law/law-list';
import { LawReviewComponent } from '../law/law-review/law-review.component';
import { LawReviewDetailComponent } from '../law/law-review-detail/law-review-detail.component';
import { LawTreeComponent } from '../law/law-tree/law-tree.component';
import { LawUploadComponent } from '../law/law-upload/law-upload.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { ListUserComponent } from './admin-user/list-user/list-user.component';
import { EditUserComponent } from './admin-user/edit-user/edit-user.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      {
        path: 'law',
        component: AdminLawComponent,
        children: [
          {
            path: 'list',
            component: LawReviewListComponent,
          },
          {
            path: 'review',
            component: LawReviewComponent,
            children: [
              {
                path: ':file',
                component: LawReviewDetailComponent
              },
              {
                path: 'tree',
                component: LawTreeComponent
              },
              {
                path: '',
                component: LawReviewListComponent
              }
            ]
          },
          {
            path: 'upload',
            component: LawUploadComponent
          },
        ]
      },
      {
        path: 'users',
        component: AdminUserComponent,
        children: [
          {
            path: 'list',
            component: ListUserComponent,
          },
          {
            path: 'add',
            component: EditUserComponent,
          }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }


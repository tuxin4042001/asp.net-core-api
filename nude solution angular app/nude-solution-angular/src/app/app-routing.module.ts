import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsModule } from './items/items.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'item', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    ItemsModule,
    LoginModule
  ],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

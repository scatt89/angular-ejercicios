import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './bookList.component';
import { BookEditComponent } from './bookEdit.component';
import { BookDetailComponent } from './bookDetail.component';

const appRoutes = [
    {path:'books', component: BookListComponent},
    {path:'books/new', component: BookEditComponent},
    {path:'books/edit/:id', component: BookEditComponent},
    {path:'books/:id', component: BookDetailComponent},
    {path:'', redirectTo:'books', pathMatch: 'full'}
]

export const routing = RouterModule.forRoot(appRoutes);
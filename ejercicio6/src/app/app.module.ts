import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { BookListComponent } from './bookList.component';
import { BookEditComponent } from './bookEdit.component';
import { BookDetailComponent } from './bookDetail.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    AppComponent, BookListComponent, BookEditComponent, BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }

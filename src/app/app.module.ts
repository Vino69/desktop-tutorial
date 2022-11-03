import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLibModule } from 'dist/my-lib';
import { ComponentComponent } from './component/component.component';
import { PipeConceptsComponent } from './pipe-concepts/pipe-concepts.component';


@NgModule({
  declarations: [
    AppComponent,
   
    ComponentComponent,
        PipeConceptsComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MyLibModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

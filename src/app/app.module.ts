import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiDialogModule, TuiNotificationsModule, TuiButtonModule, TUI_SANITIZER, TuiSvgModule } from "@taiga-ui/core";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {TuiTabsModule, TuiInputModule} from '@taiga-ui/kit';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      TuiRootModule,
      BrowserAnimationsModule,
      TuiDialogModule,
      TuiNotificationsModule,
      TuiTabsModule,
      FormsModule,
      ReactiveFormsModule,
      TuiInputModule,
      TuiButtonModule,
      TuiSvgModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceService} from './service.service';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ServiceService], 
  bootstrap: [AppComponent]
})
export class AppModule { }

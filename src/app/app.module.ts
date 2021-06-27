import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeNodeComponent } from './layouts/tree-node/tree-node.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
import { TopHeaderComponent } from './layouts/top-header/top-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeNodeComponent,
    LoginComponent,
    SignUpComponent,
    UserComponent,
    SideBarComponent,
    TopHeaderComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

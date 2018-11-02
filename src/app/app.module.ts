import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {NgxPaginationModule} from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ShowAdvisorsComponent } from './show-advisors/show-advisors.component';
import { ShowQuoteComponent } from './header/show-quote/show-quote.component';
import { MenuComponent } from './menu/menu.component';
import { SearchBranchComponent } from './search-branch/search-branch.component';
import { ShowBranchComponent } from './show-branch/show-branch.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HighlightDirective } from './highlight.directive';
import { AddElementDirective } from './add-element.directive';
import { ShowLocatoinComponent } from './show-locatoin/show-locatoin.component';
import { ShowpolicydetailsComponent } from './showpolicydetails/showpolicydetails.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ShowAdvisorsComponent,
    ShowQuoteComponent,
    MenuComponent,
    SearchBranchComponent,
    ShowBranchComponent,
    TestimonyComponent,
    LoginComponent,
    LogoutComponent,
    HighlightDirective,
    AddElementDirective,
    ShowLocatoinComponent,
    ShowpolicydetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // NgxPaginationModule,
    FormsModule
  ],
  providers: [HttpClient],
  entryComponents: [ShowLocatoinComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {AuthService} from './shared/services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {ReactiveFormsModule} from '@angular/forms';
import {CategoriesFilterComponent} from './home/categories-filter/categories-filter.component';
import {ItemComponent} from './home/item/item.component';
import { ItemPipe } from './shared/pipes/item.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesFilterComponent,
    ItemComponent,
    ItemPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: ['localhost:3000'],
        disallowedRoutes: ['localhost:3000/api/auth']
      },
    }),
    ReactiveFormsModule,
  ],
  providers: [AuthService, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

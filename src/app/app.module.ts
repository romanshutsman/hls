import * as Rx from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {PremiumsComponent} from './premiums/premiums.component';
import {BlogsComponent} from './blogs/blogs.component';
import {AboutServicesComponent} from './about-services/about-services.component';
import {ServicesComponent} from './services/services.component';
import {SlickModule} from 'ngx-slick';
import {AgmCoreModule} from '@agm/core';
import {AmChartsModule} from '@amcharts/amcharts3-angular';
import {ChartComponent} from './home/chart/chart.component';
import {ForBusinessComponent} from './for-business/for-business.component';
import { BlogArticleComponent } from './blogs/blog-article/blog-article.component';
import { BlogerComponent } from './blogs/bloger/bloger.component';
import {EllipsisModule} from '@thisissoon/angular-ellipsis';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MatDialog, MatDialogModule} from '@angular/material';
import {ServicesDialogComponent} from './_shared/dialogs/services-dialog/services-dialog.component';
import { GetAppComponent } from './_shared/dialogs/get-app/get-app.component';
import { EllipsisPipe } from './_shared/pipes/ellipsis.pipe';
import { AuthComponent } from './auth/auth.component';
import { FaqComponent } from './additional-pages/faq/faq.component';
import { PrivacyPolicyComponent } from './additional-pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './additional-pages/terms-conditions/terms-conditions.component';
import { ServiceService } from './_shared/service.service';
// import {WindowService} from './_shared/services/window.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PremiumsComponent,
    BlogsComponent,
    AboutServicesComponent,
    ForBusinessComponent,
    ServicesComponent,
    ChartComponent,
    BlogArticleComponent,
    BlogerComponent,
    ServicesDialogComponent,
    GetAppComponent,
    EllipsisPipe,
    AuthComponent,
    FaqComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    SlickModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbVypnb55PqKsA0UXmF1-V9LQA5INoC2I'
    }),
    AmChartsModule,
    EllipsisModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
  entryComponents: [ServicesDialogComponent, GetAppComponent, AuthComponent]
})
export class AppModule { }

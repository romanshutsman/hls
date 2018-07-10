import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PremiumsComponent} from './premiums/premiums.component';
import {BlogsComponent} from './blogs/blogs.component';
import {AboutServicesComponent} from './about-services/about-services.component';
import {ServicesComponent} from './services/services.component';
import {ForBusinessComponent} from './for-business/for-business.component';
import {BlogArticleComponent} from './blogs/blog-article/blog-article.component';
import {BlogerComponent} from './blogs/bloger/bloger.component';
import {FaqComponent} from './additional-pages/faq/faq.component';
import {PrivacyPolicyComponent} from './additional-pages/privacy-policy/privacy-policy.component';
import {TermsConditionsComponent} from './additional-pages/terms-conditions/terms-conditions.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'premium', component: PremiumsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'about-services', component: AboutServicesComponent },
  { path: 'for-business', component: ForBusinessComponent },
  { path: 'services/:id', component: ServicesComponent },
  { path: 'bloger/:id', component: BlogerComponent },
  { path: 'blog/:id', component: BlogArticleComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TermsConditionsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


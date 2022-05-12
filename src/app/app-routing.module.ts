import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateHomepageComponent } from './pages/template-homepage/template-homepage.component';
import { TemplateSingleCategoryComponent } from './pages/template-single-category/template-single-category.component';
import { TemplateSingleItemComponent } from './pages/template-single-item/template-single-item.component';
import { TemplateAboutComponent } from './pages/template-about/template-about.component';
import { TemplateTermsComponent } from './pages/template-terms/template-terms.component';
import { TemplatePrivacyPolicyComponent } from './pages/template-privacy-policy/template-privacy-policy.component';
import { TemplateContactComponent } from './pages/template-contact/template-contact.component';
import { TemplateFaqComponent } from './pages/template-faq/template-faq.component';

const routes: Routes = [
  { path: '', component: TemplateHomepageComponent },
  { path: 'category', component: TemplateSingleCategoryComponent },
  { path: 'single', component: TemplateSingleItemComponent },
  { path: 'about', component: TemplateAboutComponent },
  { path: 'warunki-korzystania-z-serwisu', component: TemplateTermsComponent },
  { path: 'polityka-prywatnosci', component: TemplatePrivacyPolicyComponent },
  { path: 'kontakt', component: TemplateContactComponent },
  { path: 'faq', component: TemplateFaqComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

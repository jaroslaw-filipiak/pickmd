import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RecommendedItemsComponent } from './components/recommended-items/recommended-items.component';
import { LocalizationBoxComponent } from './components/localization-box/localization-box.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ArticlesBoxComponent } from './components/articles-box/articles-box.component';
import { SeoContentComponent } from './components/seo-content/seo-content.component';
import { ItemComponent } from './components/item/item.component';
import { TemplateSingleCategoryComponent } from './pages/template-single-category/template-single-category.component';
import { TemplateHomepageComponent } from './pages/template-homepage/template-homepage.component';
import { TemplateCategoriesComponent } from './pages/template-categories/template-categories.component';
import { ItemsLoopComponent } from './components/items-loop/items-loop.component';
import { ItemsExtendedViewComponent } from './components/items-extended-view/items-extended-view.component';
import { PopularServicesComponent } from './components/popular-services/popular-services.component';
import { HeaderComponent } from './components/header/header.component';
import { TemplateSingleItemComponent } from './pages/template-single-item/template-single-item.component';
import { SingleItemHeaderComponent } from './components/single-item/single-item-header/single-item-header.component';
import { SingleItemContentComponent } from './components/single-item/single-item-content/single-item-content.component';
import { SingleItemOpinionsComponent } from './components/single-item/single-item-opinions/single-item-opinions.component';
import { TemplateAboutComponent } from './pages/template-about/template-about.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TemplateTermsComponent } from './pages/template-terms/template-terms.component';
import { TemplatePrivacyPolicyComponent } from './pages/template-privacy-policy/template-privacy-policy.component';
import { TemplateContactComponent } from './pages/template-contact/template-contact.component';
import { TemplateFaqComponent } from './pages/template-faq/template-faq.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FooterComponent,
    TopBarComponent,
    RecommendedItemsComponent,
    LocalizationBoxComponent,
    CategoriesComponent,
    ArticlesBoxComponent,
    SeoContentComponent,
    ItemComponent,
    TemplateSingleCategoryComponent,
    TemplateHomepageComponent,
    TemplateCategoriesComponent,
    ItemsLoopComponent,
    ItemsExtendedViewComponent,
    PopularServicesComponent,
    HeaderComponent,
    TemplateSingleItemComponent,
    SingleItemHeaderComponent,
    SingleItemContentComponent,
    SingleItemOpinionsComponent,
    TemplateAboutComponent,
    SidebarComponent,
    TemplateTermsComponent,
    TemplatePrivacyPolicyComponent,
    TemplateContactComponent,
    TemplateFaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

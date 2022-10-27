import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './header.component';
import { ProductsComponent } from './pages/products.component';
import { HomeComponent } from './pages/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainingComponent } from './pages/training.component';
import { ContactComponent } from './pages/contact.component';
import { FooterComponent } from './footer.component';
import { ProductComponent } from './structures/product-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './structures/card.component';
import { ServiceComponent } from './pages/service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    HomeComponent,
    TrainingComponent,
    ContactComponent,
    FooterComponent,
    ProductComponent,
    CardComponent,
    ServiceComponent,
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

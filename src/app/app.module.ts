import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { DataComponent } from './data/data.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    DataComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"angular-project-4b1fa","appId":"1:247635521079:web:e34fddbdf416f5e0b019b2","storageBucket":"angular-project-4b1fa.appspot.com","apiKey":"AIzaSyBaIgQLP8JKG1lx0mHZfQsNfhi-kM8icGI","authDomain":"angular-project-4b1fa.firebaseapp.com","messagingSenderId":"247635521079","measurementId":"G-KTWCM5X16G"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

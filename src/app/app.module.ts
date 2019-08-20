import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModuleModule } from './material/material.module';
import { TodoComponent } from './todo/todo.component';
import { AngularFireModule } from '@angular/fire';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EditorComponent } from './editor/editor.component';
import { QuillModule } from 'ngx-quill';
import { CanvasComponent } from './canvas/canvas.component';
import { ColorPickerModule } from 'ngx-color-picker';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { DrawComponent } from './draw/draw.component';

const socketConfig: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

const config = {
  apiKey: 'AIzaSyCFSbkQGmZUuQ7T_UvNiHGd82_xPKUSsqE',
  authDomain: 'livepad-app.firebaseapp.com',
  databaseURL: 'https://livepad-app.firebaseio.com',
  projectId: 'livepad-app',
  storageBucket: 'livepad-app.appspot.com',
  messagingSenderId: '501213804796'
};
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
    EditorComponent,
    CanvasComponent,
    DrawComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    ColorPickerModule,
    SocketIoModule.forRoot(socketConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

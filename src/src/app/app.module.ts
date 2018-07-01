import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContainerComponent } from './container/container.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { WavesComponent } from './waves/waves.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ContainerComponent, SafeHtmlPipe, WavesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

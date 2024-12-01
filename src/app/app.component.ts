
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FooterComponent } from './footer/footer.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RsvpFormComponent } from './rsvp-form/rsvp-form.component';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { IcsService } from './services/ics.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    RouterModule, 
    GalleryComponent, 
    LocationComponent, 
    ScheduleComponent, 
    FooterComponent, 
    HomeComponent, 
    RsvpFormComponent, 
    HotelsComponent,
    FaqComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    IcsService
  ]
})
export class AppComponent {
  title = 'Wedding Website';
  isMenuOpen = false;

}

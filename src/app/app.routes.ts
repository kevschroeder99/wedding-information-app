import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ScheduleComponent } from './schedule/schedule.component';
import { LocationComponent } from './location/location.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RsvpFormComponent } from './rsvp-form/rsvp-form.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'location', component: LocationComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'hotels', component: HotelsComponent},
    { path: 'rsvp-form', component: RsvpFormComponent}
];
import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";
import {MenuComponent} from './menu/menu.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {DishdetailComponent} from "./dishdetail/dishdetail.component";
import {ContactComponent} from './contact/contact.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {ReservationComponent} from './reservation/reservation.component';
import {UserAuthComponent} from './userauth/userauth.component';

const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "auth", component: UserAuthComponent},
    {path: "home", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "menu", component: MenuComponent},
    {path: "dishdetail/:id", component: DishdetailComponent},
    {path: "contact", component: ContactComponent},
    {path: "favorites", component: FavoritesComponent},
    {path: "reservation", component: ReservationComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
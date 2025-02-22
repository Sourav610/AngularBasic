import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { serverComponent } from "./server/server.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[AppComponent,serverComponent],
    imports:[BrowserModule],
    bootstrap:[AppComponent]
})
export class AppModule{}
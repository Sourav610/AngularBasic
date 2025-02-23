import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { serverComponent } from "./server/server.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { PractiseBindingComponent } from "./practise-binding/practise-binding.component";

@NgModule({
    declarations:[AppComponent,serverComponent,PractiseBindingComponent],
    imports:[BrowserModule,FormsModule],
    bootstrap:[AppComponent]
})
export class AppModule{}
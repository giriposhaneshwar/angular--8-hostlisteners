import { Component, VERSION, HostListener } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @HostListener("window:beforeunload", ["$event"])
  onBeforeUnload(event): void {
    /**
     * Post a single object to the server
     * Send Beacon API to keep request after browser windowunload event
     */
    console.log("Event", event);
    event.isTrusted = false;
  }
  name = "Angular " + VERSION.major;
}

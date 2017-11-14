import { Component, OnInit } from "@angular/core";
import { SharedService } from "../../layouts/shared-service";

@Component({
  selector: "page-dashboard-3",
  templateUrl: "./dashboard-3.component.html",
  styleUrls: ["./dashboard-3.component.scss"]
})
export class PageDashboard3Component implements OnInit {
  pageTitle = "Minimal dashboard";

  constructor(private _sharedService: SharedService) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}

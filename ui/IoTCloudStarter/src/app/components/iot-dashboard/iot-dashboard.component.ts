import { Component, OnInit } from '@angular/core';
import { SpotfireCustomization } from '@tibco/spotfire-wrapper';

import { SpotfireDashboardComponent } from '../spotfire-dashboard/spotfire-dashboard.component';

@Component({
  selector: 'app-iot-dashboard',
  templateUrl: './iot-dashboard.component.html',
  styleUrls: ['./iot-dashboard.component.css']
})
export class IotDashboardComponent implements OnInit {

  // Spotfire configuration
  public spotfireServer: string;
  public analysisPath: string;
  public allowedPages: string[];
  public activePage: string;
  public markingOn = {};
  public markingName: string;
  public parameters: string;
  public configuration: SpotfireCustomization;

  constructor() { }

  ngOnInit() {
    // this.spotfireServer = 'https://spotfire-next.cloud.tibco.com';
    // this.analysisPath = '/Samples/Introduction to Spotfire';
    // this.activePage = '0';
    // this.parameters = "Test";
    // this.configuration = {
    //   showAbout: false,
    //   showAnalysisInformationTool: false,
    //   showAuthor: false,
    //   showClose: false,
    //   showCustomizableHeader: false,
    //   showDodPanel: false,
    //   showExportFile: false,
    //   showFilterPanel: true,
    //   showHelp: false,
    //   showLogout: false,
    //   showPageNavigation: true,
    //   showReloadAnalysis: false,
    //   showStatusBar: false,
    //   showToolBar: false,
    //   showUndoRedo: false
    // };


    this.spotfireServer = 'https://ec2-100-26-8-102.compute-1.amazonaws.com';
    this.analysisPath = '/Anonymous/tibcolabs_air_v1.6';
    this.activePage = '0';
    this.parameters = "Test";
    this.configuration = {
      showAbout: false,
      showAnalysisInformationTool: false,
      showAuthor: false,
      showClose: false,
      showCustomizableHeader: false,
      showDodPanel: false,
      showExportFile: false,
      showFilterPanel: true,
      showHelp: false,
      showLogout: false,
      showPageNavigation: true,
      showReloadAnalysis: false,
      showStatusBar: false,
      showToolBar: false,
      showUndoRedo: false
    };

  }

  public marking(data) {
    console.log("marking: ", data)
  }

}

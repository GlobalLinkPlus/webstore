import { Component, OnInit } from '@angular/core';


interface Alert {
  message: string;
  type: 'success' | 'error' | 'warning';
  id: number;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  alerts: Alert[] = [];
  private alertId = 0;

  constructor() {}

  ngOnInit(): void {}

  showAlert(message: string, type: 'success' | 'error' | 'warning') {
    const id = this.alertId++;
    const newAlert: Alert = { message, type, id };
    this.alerts.push(newAlert);

    // Automatically remove the alert after 3 seconds
    setTimeout(() => {
      this.removeAlert(id);
    }, 3000);
  }

  removeAlert(id: number) {
    this.alerts = this.alerts.filter(alert => alert.id !== id);
  }

}

import { Component, OnInit } from '@angular/core';
import { Warning } from '../warning';
import { Router, ActivatedRoute } from '@angular/router';
import { WarningService } from '../warning.service';

@Component({
  selector: 'app-warning-details',
  templateUrl: './warning-details.component.html',
  styleUrls: ['./warning-details.component.css']
})
export class WarningDetailsComponent implements OnInit {

  id: number;
  warning: Warning;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private warningService: WarningService) { }

  ngOnInit(): void {

    this.warning = new Warning();

    this.id = this.route.snapshot.params['id'];

    this.warningService.getDetails(this.id)
      .subscribe(data => {
        console.log(data)
        this.warning = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['warnings']);
  }

}

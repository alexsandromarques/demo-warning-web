import { Component, OnInit } from '@angular/core';
import { Warning } from '../warning';
import { ActivatedRoute, Router } from '@angular/router';
import { WarningService } from '../warning.service';

@Component({
  selector: 'app-update-warning',
  templateUrl: './update-warning.component.html',
  styleUrls: ['./update-warning.component.css']
})
export class UpdateWarningComponent implements OnInit {

  id: number;
  warning: Warning;
  submitted = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private warningService: WarningService) { }

  ngOnInit(): void {

    this.warning = new Warning();

    this.id = this.route.snapshot.params['id'];

    this.warningService.getWarning(this.id)
      .subscribe(data => {
        console.log(data)
        this.warning = data;
      }, error => console.log(error));

  }

  updateWarning() {
    this.warningService.updatewarning(this.warning)
      .subscribe(data => console.log(data), error => console.log(error));
    this.warning = new Warning();
    this.submitted = true;

  }

  onSubmit() {
    this.updateWarning();
  }

  list() {
    this.router.navigate(['warnings']);
  }

  newWarning(): void {
    this.submitted = false;
    this.warning = new Warning();
  }


}

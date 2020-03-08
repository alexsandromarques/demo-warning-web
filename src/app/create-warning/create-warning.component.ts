import { Component, OnInit } from '@angular/core';
import { WarningService } from '../warning.service';
import { Warning } from '../warning';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-warning',
  templateUrl: './create-warning.component.html',
  styleUrls: ['./create-warning.component.css']
})
export class CreateWarningComponent implements OnInit {

  warning: Warning = new Warning();
  submitted = false;

  constructor(private warningService: WarningService, private router: Router) { }

  ngOnInit(): void {
  }

  newWarning(): void {
    this.submitted = false;
    this.warning = new Warning();
  }

  list() {
    this.router.navigate(['warnings']);
  }

  save() {
    this.warningService.createWarning(this.warning)
      .subscribe(data => console.log(data), error => console.log(error));
    this.warning = new Warning();
    this.submitted = true;
  }

  onSubmit() {
    this.save();  
  }
  
}

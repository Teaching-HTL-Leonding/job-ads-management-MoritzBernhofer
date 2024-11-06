import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  id: number = -1;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent {

  mesa: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const mesa = this.route.snapshot.paramMap.get('mesa');
    // Faça o que desejar com o valor do ID
    if(mesa!=null){
      this.mesa = parseInt(mesa)
    }
  }
}

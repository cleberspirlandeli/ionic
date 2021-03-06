import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaginaBase } from './../../infraestrutura/PaginaBase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelloIonicValidadores } from './../../validadores/HelloIonicValidadores';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage extends PaginaBase{

  loginFrmGroup : FormGroup;
  foiSubmetido : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    super({ formBuilder : formBuilder });
    this.foiSubmetido = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(): void{
    this.foiSubmetido = true;
    if(this.loginFrmGroup.valid){
      alert("Login OK!");
    }else{
      alert("Login Erro");
    }
  }

  protected doCarregarValidadores(): void{
    this.loginFrmGroup = this._formBuilder.group({
      email: ['', Validators.compose([Validators.required, HelloIonicValidadores.email ])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

}

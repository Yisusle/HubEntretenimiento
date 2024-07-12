import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should alert if sign in credentials are missing', () => {
    spyOn(window, 'alert');
    component.signinEmail = '';
    component.signinPassword = '';
    component.onSignIn();
    expect(window.alert).toHaveBeenCalledWith('Correo o contraseña incorrectos');
  });

  it('should set isSignIn to true when showSignIn is called', () => {
    component.showSignUp();
    component.showSignIn();
    expect(component.isSignIn).toBe(true);
  });
});

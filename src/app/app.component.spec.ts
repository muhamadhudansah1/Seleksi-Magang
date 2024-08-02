import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';

describe('AppComponent', () => {
  let router: Router;

  beforeEach(async () => {
    router = { navigate: jasmine.createSpy('navigate') } as any;
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{ provide: Router, useValue: router }]
    }).compileComponents();
  });

  it('should navigate to dashboard on button click', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    component.goToDashboard();
    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
  });
});
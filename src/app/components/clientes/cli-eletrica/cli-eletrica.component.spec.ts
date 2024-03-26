import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliEletricaComponent } from './cli-eletrica.component';

describe('CliEletricaComponent', () => {
  let component: CliEletricaComponent;
  let fixture: ComponentFixture<CliEletricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CliEletricaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CliEletricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliAutomacaoComponent } from './cli-automacao.component';

describe('CliAutomacaoComponent', () => {
  let component: CliAutomacaoComponent;
  let fixture: ComponentFixture<CliAutomacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CliAutomacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CliAutomacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliArcordComponent } from './cli-arcord.component';

describe('CliArcordComponent', () => {
  let component: CliArcordComponent;
  let fixture: ComponentFixture<CliArcordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CliArcordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CliArcordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

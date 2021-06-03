import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSTsComponent } from './msts.component';

describe('ContractsComponent', () => {
  let component: MSTsComponent;
  let fixture: ComponentFixture<MSTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSTsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MSTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

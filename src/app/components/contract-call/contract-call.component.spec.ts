import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ContractCallComponent } from './contract-call.component'

describe('ContractCallComponent', () => {
  let component: ContractCallComponent
  let fixture: ComponentFixture<ContractCallComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractCallComponent ],
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractCallComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

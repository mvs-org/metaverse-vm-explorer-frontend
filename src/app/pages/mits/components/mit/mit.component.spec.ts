import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MitComponent } from './mit.component'

describe('MitComponent', () => {
  let component: MitComponent
  let fixture: ComponentFixture<MitComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitComponent ],
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MitComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

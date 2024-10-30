import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctordataComponent } from './add-doctordata.component';

describe('AddDoctordataComponent', () => {
  let component: AddDoctordataComponent;
  let fixture: ComponentFixture<AddDoctordataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDoctordataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDoctordataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

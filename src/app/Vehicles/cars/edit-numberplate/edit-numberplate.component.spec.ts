import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNumberplateComponent } from './edit-numberplate.component';

describe('EditNumberplateComponent', () => {
  let component: EditNumberplateComponent;
  let fixture: ComponentFixture<EditNumberplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNumberplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNumberplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNumberplateComponent } from './delete-numberplate.component';

describe('DeleteNumberplateComponent', () => {
  let component: DeleteNumberplateComponent;
  let fixture: ComponentFixture<DeleteNumberplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNumberplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteNumberplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

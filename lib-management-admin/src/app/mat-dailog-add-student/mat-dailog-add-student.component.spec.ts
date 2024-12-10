import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDailogAddStudentComponent } from './mat-dailog-add-student.component';

describe('MatDailogAddStudentComponent', () => {
  let component: MatDailogAddStudentComponent;
  let fixture: ComponentFixture<MatDailogAddStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatDailogAddStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDailogAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

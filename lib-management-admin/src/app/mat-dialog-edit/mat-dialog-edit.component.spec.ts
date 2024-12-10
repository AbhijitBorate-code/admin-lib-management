import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogEditComponent } from './mat-dialog-edit.component';

describe('MatDialogEditComponent', () => {
  let component: MatDialogEditComponent;
  let fixture: ComponentFixture<MatDialogEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatDialogEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

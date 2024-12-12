import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddBookComponent } from './dialog-add-book.component';

describe('DialogAddBookComponent', () => {
  let component: DialogAddBookComponent;
  let fixture: ComponentFixture<DialogAddBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAddBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

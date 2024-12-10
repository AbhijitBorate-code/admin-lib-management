import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAssgineBooksComponent } from './dialog-assgine-books.component';

describe('DialogAssgineBooksComponent', () => {
  let component: DialogAssgineBooksComponent;
  let fixture: ComponentFixture<DialogAssgineBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAssgineBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAssgineBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

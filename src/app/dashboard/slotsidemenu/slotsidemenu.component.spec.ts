import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsidemenuComponent } from './slotsidemenu.component';

describe('SlotsidemenuComponent', () => {
  let component: SlotsidemenuComponent;
  let fixture: ComponentFixture<SlotsidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsidemenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

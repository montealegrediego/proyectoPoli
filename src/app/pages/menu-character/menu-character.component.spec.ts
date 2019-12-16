import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCharacterComponent } from './menu-character.component';

describe('MenuCharacterComponent', () => {
  let component: MenuCharacterComponent;
  let fixture: ComponentFixture<MenuCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLoreComponent } from './menu-lore.component';

describe('MenuLoreComponent', () => {
  let component: MenuLoreComponent;
  let fixture: ComponentFixture<MenuLoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

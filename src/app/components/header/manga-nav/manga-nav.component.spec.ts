import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaNavigationComponent } from './manga-nav.component';

describe('MangaNavigationComponent', () => {
  let component: MangaNavigationComponent;
  let fixture: ComponentFixture<MangaNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

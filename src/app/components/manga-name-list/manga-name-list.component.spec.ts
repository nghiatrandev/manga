import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopularMangaComponent } from '../popular-manga/popular-manga.component';

describe('PopularMangaComponent', () => {
  let component: PopularMangaComponent;
  let fixture: ComponentFixture<PopularMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

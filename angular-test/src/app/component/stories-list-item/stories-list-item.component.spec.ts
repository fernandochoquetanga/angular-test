import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesListItemComponent } from './stories-list-item.component';

describe('StoriesListItemComponent', () => {
  let component: StoriesListItemComponent;
  let fixture: ComponentFixture<StoriesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

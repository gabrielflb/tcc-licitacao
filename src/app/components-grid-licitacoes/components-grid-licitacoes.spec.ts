import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsGridLicitacoes } from './components-grid-licitacoes';

describe('ComponentsGridLicitacoes', () => {
  let component: ComponentsGridLicitacoes;
  let fixture: ComponentFixture<ComponentsGridLicitacoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsGridLicitacoes],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentsGridLicitacoes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

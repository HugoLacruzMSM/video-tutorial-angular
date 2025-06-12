import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgfotVsFotComponent } from './structural-directive-ngfot-vs-fot.component';

describe('StructuralDirectiveNgfotVsFotComponent', () => {
  let component: StructuralDirectiveNgfotVsFotComponent;
  let fixture: ComponentFixture<StructuralDirectiveNgfotVsFotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveNgfotVsFotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgfotVsFotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MetricCard, KeyVariable } from '../models';

@Component({
  selector: 'app-results',
  standalone: true,
  templateUrl: './results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent {
  
  metrics = signal<MetricCard[]>([
    {
      label: 'Recall (召回率)',
      value: '0.79',
      description: '成功識別出近 8 成的潛在高風險患者。在醫療篩檢中，高召回率至關重要，能大幅降低偽陰性 (False Negative)，避免患者錯失早期干預的黃金窗口。',
      highlight: true
    },
    {
      label: 'Accuracy (準確率)',
      value: '0.85',
      description: '整體分類正確率達 85%。顯示模型在正確區分失智症與非失智症患者方面具有高度可靠性。',
      highlight: false
    },
    {
      label: 'AUROC',
      value: '0.91',
      description: 'Area Under ROC Curve 達 0.91，表明模型在不同閾值下均具有優異的區辨能力。',
      highlight: false
    },
    {
      label: 'Specificity (特異性)',
      value: '0.86',
      description: '在追求高召回率的同時，仍維持了 0.86 的特異性，有效控制了偽陽性 (False Positive)，避免造成不必要的醫療資源浪費與患者恐慌。',
      highlight: false
    }
  ]);

  keyVariables = signal<KeyVariable[]>([
    { name: 'CDRSUM', description: '標準 CDR（臨床失智評分）總分' },
    { name: 'CDRGLOB', description: 'CDR整體評估' },
    { name: 'MEMORY', description: 'CDR量表記憶力分數' },
    { name: 'NACCMMSE', description: 'MMSE（簡短智能測驗）總分' },
    { name: 'COGMEM', description: '指出受試者的記憶力是否相較於先前的能力有顯著損傷' },
    { name: 'ANIMALS', description: '動物 — 在 60 秒內命名的動物總數' },
    { name: 'VEG', description: '蔬菜 — 在 60 秒內命名的蔬菜總數' },
    { name: 'TRAILB', description: '連線測驗（Trail Making Test）Part B — 完成所需的總秒數' },
    { name: 'TRAILA', description: '連線測驗（Trail Making Test）Part A — 完成所需的總秒數' }
  ]);
}
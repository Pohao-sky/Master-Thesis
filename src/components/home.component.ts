import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CoreValue } from '../models';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  // Simulating availability state for buttons
  hasResources = signal<boolean>(true);

  coreValues = signal<CoreValue[]>([
    {
      title: '精準醫療 (Precision Medicine)',
      description: '運用 Boruta 演算法從 153 項特徵中篩選出 9 項關鍵因子，實現個人化風險預測。',
      icon: 'target'
    },
    {
      title: '高敏感度 (High Sensitivity)',
      description: '針對類別不平衡問題進行權重優化，達到 0.79 的高召回率，有效降低漏診風險。',
      icon: 'pulse'
    },
    {
      title: '數據完整性 (Data Integrity)',
      description: '導入 MICE (Multiple Imputation by Chained Equations) 技術，解決臨床資料缺失問題。',
      icon: 'database'
    },
    {
      title: '系統互通性 (Interoperability)',
      description: '基於 RESTful API 架構，實現跨機構 EMR 系統的即時串接與模型調用。',
      icon: 'link'
    },
    {
      title: '早期預防 (Early Prevention)',
      description: '提供未來兩年內失智症發病風險評估，輔助臨床決策與早期介入治療。',
      icon: 'shield'
    }
  ]);

  openLink(type: 'thesis' | 'github') {
    // In a real app, this would navigate to the actual URL
    console.log(`Navigating to ${type}...`);
    alert(`即將前往: ${type === 'thesis' ? '碩士論文全文' : 'GitHub 原始碼倉庫'}`);
  }
}
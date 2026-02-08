import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MethodStep } from '../models';

@Component({
  selector: 'app-methodology',
  standalone: true,
  templateUrl: './methodology.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MethodologyComponent {
  steps = signal<MethodStep[]>([
    {
      phase: 'Phase 01',
      title: '資料前處理 (Data Preprocessing)',
      description: '使用 NACC 資料集進行初步清洗與篩選。',
      details: [
        '資料來源：美國國家阿茲海默症協調中心 (NACC) UDS 資料集。',
        '樣本數：總計 23,795 名參與者（包含正常認知、MCI 與失智症患者）。',
        '排除標準：移除缺失值超過 90% 的變數，以及包含自由文本的非結構化數據。',
        '目標定義：初診後 29 個月內是否罹患失智症。'
      ]
    },
    {
      phase: 'Phase 02',
      title: '缺失值插補 (MICE Imputation)',
      description: '解決醫療數據常見的缺失問題，保持資料完整性。',
      details: [
        '技術：鏈式方程多重插補 (Multiple Imputation by Chained Equations, MICE)。',
        '原理：利用變數間的相關性，為每個缺失值生成多個估計值，減少單一插補的偏差。',
        '優勢：相較於直接刪除或平均值填補，更能保留數據的統計特性與分布。'
      ]
    },
    {
      phase: 'Phase 03',
      title: '特徵篩選 (Feature Selection)',
      description: '運用 Boruta 演算法從高維數據中提取關鍵因子。',
      details: [
        '初始變數：從 153 個候選特徵開始。',
        '演算法：Boruta (基於 Random Forest 的全特徵選取方法)。',
        '過程：引入「影子變數」進行重要性比對，迭代篩選出具顯著性的特徵。',
        '最終結果：精煉出 9 項關鍵特徵，包含 CDR 相關指標、MMSE 分數等。'
      ]
    },
    {
      phase: 'Phase 04',
      title: '模型訓練與優化 (Model Training)',
      description: '解決類別不平衡問題，建構高敏感度預測模型。',
      details: [
        '模型比較：Random Forest (RF), XGBoost, Logistic Regression (LR)，並各分成準確率為主和準確率&召回率均衡的版本。',
        '類別不平衡處理：調整 class_weight (RF/LR) 與 scale_pos_weight (XGBoost)。',
        '策略：賦予少數類別（失智症患者）較高權重，迫使模型關注陽性樣本。',
        '驗證：採用五折交叉驗證 (5-Fold Cross-Validation) 確保模型泛化能力。'
      ]
    },
    {
      phase: 'Phase 05',
      title: '臨床別徵優化 (Clinical Optimization)',
      description: '結合專家建議與實務需求，微調變數以提升篩檢適用性。',
      details: [
        '召回率提升：納入 CDRGLOB 變數，雖稍微降低準確率，但將召回率從 76.5% 提升至 80.75%，降低偽陰性風險。',
        '場域驗證：與桃園榮民總醫院醫師諮詢，確保篩選變數在臨床收集的可行性。',
        '排除限制變數：移除高度依賴照護者的 DECCLIN 變數，解決單獨就診患者資料收集困難的問題。',
        '最終定案：確立 9 個兼顧數據效能與臨床操作便利性的關鍵別徵。'
      ]
    }
  ]);
}
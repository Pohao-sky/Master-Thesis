import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { ReferenceSection } from '../models';

@Component({
  selector: 'app-references',
  standalone: true,
  templateUrl: './references.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferencesComponent {
  referenceSections = signal<ReferenceSection[]>([
    {
      title: '(一) 中文文獻',
      items: [
        {
          id: 1,
          authors: 'deephub',
          year: '2024',
          title: '使用mice进行缺失值的填充处理',
          source: '2025年01月07日，取自CSDN博客',
          url: 'https://blog.csdn.net/deephub/article/details/136111704'
        },
        {
          id: 2,
          authors: '亨少德小迷弟',
          year: '2021',
          title: '特徵選擇之共通資訊（mutual information）算法思想及其python代碼實現',
          source: '2025年01月27日，取自CSDN博客',
          url: 'https://blog.csdn.net/qq_39923466/article/details/118809611'
        },
        {
          id: 3,
          authors: '佐藤昌基、平田哲也、寺田學',
          year: '2022',
          title: '實戰python flask開發: 基礎知識x物件偵測x機器學習應用',
          source: '台北:碁峰資訊股份有限公司'
        },
        {
          id: 4,
          authors: '林克能、劉秀枝',
          year: '2003',
          title: '臨床失智評量表',
          source: '臺灣神經學雜誌, 12(3), 154-165'
        },
        {
          id: 5,
          authors: '長期照顧司',
          year: '2024',
          title: '衛生福利部公布最新臺灣社區失智症流行病學調查結果',
          source: '2024年11月17日，取自衛生福利部',
          url: 'https://www.mohw.gov.tw/cp-16-78102-1.html'
        },
        {
          id: 6,
          authors: '黃俊壹',
          year: '2022',
          title: '圖像 Angular 開發入門：打造高靈活度的網頁應用程式',
          source: '新北:博碩文化股份有限公司'
        },
        {
          id: 7,
          authors: '臺北市政府衛生局',
          year: '2023',
          title: '什麼是失智症（認識失智、與正常老化的區別）',
          source: '2024年11月18日，取自臺北市政府衛生局失智症服務資源網',
          url: 'https://dementia.gov.taipei/cp.aspx?n=C86E6AD547396B12&s=79F5B0372DEF0855'
        },
        {
          id: 8,
          authors: '臺北榮民總醫院蘇澳分院',
          year: '2022',
          title: '認知功能檢查',
          source: '2025年12月4日，取自臺北榮民總醫院醫療體系全球資訊網',
          url: 'https://org.vghtpe.gov.tw/savh/files/files/%E5%85%A7%E7%A7%91-%E8%AA%8D%E7%9F%A5%E5%8A%9F%E8%83%BD%E6%AA%A2%E6%9F%A5.pdf'
        },
        {
          id: 9,
          authors: '劉秀枝',
          year: '2023',
          title: '輕度認知障礙也能回復到正常名醫授簡單易行且不花費的方法',
          source: '2024年11月17日，取自聯合新聞網',
          url: 'https://health.udn.com/health/story/7392/7145144'
        },
        {
          id: 10,
          authors: '蔡月林',
          year: '2021',
          title: '機器學習中的特徵篩選：boruta',
          source: '2025年02月03日，取自Medium',
          url: 'https://reurl.cc/26OozO'
        },
        {
          id: 11,
          authors: '蔡易霖',
          year: '2024',
          title: '全民瘋ai系列 [經典機器學習]',
          source: '2025年02月10日，取自github',
          url: 'https://github.com/andy6804tw/crazyai-ml/releases/download/v2.0/crazyai-ml_v2.1.pdf'
        },
        {
          id: 12,
          authors: '點點簽小編',
          year: '2024',
          title: 'Api是什麼？快速搞懂api串接意思＆5大應用環境實例！',
          source: '2025年03月09日，取自DottedSign',
          url: 'https://www.dottedsign.com/zh-tw/blog/product/api'
        }
      ]
    },
    {
      title: '(二) 英文文獻',
      items: [
        {
          id: 13,
          authors: 'Alatrany, A. S., Khan, W., Hussain, A., Kolivand, H., & Al-Jumeily, D.',
          year: '2024',
          title: 'An explainable machine learning approach for Alzheimer’s disease classification',
          source: 'Scientific Reports, 14(1), 2637'
        },
        {
          id: 14,
          authors: 'Azur, M. J., Stuart, E. A., Frangakis, C., & Leaf, P. J.',
          year: '2011',
          title: 'Multiple imputation by chained equations: what is it and how does it work?',
          source: 'International journal of methods in psychiatric research, 20(1), 40–49'
        },
        {
          id: 15,
          authors: 'Balch, J. A., Ruppert, M. M., Loftus, T. J., Guan, Z., Ren, Y., Upchurch, G. R., Ozrazgat-Baslanti, T., Rashidi, P., & Bihorac, A.',
          year: '2023',
          title: 'Machine learning–enabled clinical information systems using fast healthcare interoperability resources data standards: scoping review',
          source: 'JMIR Medical Informatics, 11, e48297'
        },
        {
          id: 16,
          authors: 'Biau, G., & Scornet, E.',
          year: '2016',
          title: 'A random forest guided tour',
          source: 'Test, 25, 197–227'
        },
        {
          id: 17,
          authors: 'Binder, J., Ursu, O., Bologa, C., Jiang, S., Maphis, N., Dadras, S., Chisholm, D., Weick, J., Myers, O., & Kumar, P.',
          year: '2022',
          title: 'Machine learning prediction and tau-based screening identifies potential Alzheimer’s disease genes relevant to immunity',
          source: 'Communications Biology, 5(1), 125'
        },
        {
          id: 18,
          authors: 'Bogner, J., and Merkel, M.',
          year: '2022',
          title: 'To Type or Not to Type? A Systematic Comparison of the Software Quality of JavaScript and TypeScript Applications on GitHub',
          source: 'Proceedings of the 19th International Conference on Mining Software Repositories, 658-669'
        },
        {
          id: 19,
          authors: 'Brownlee, J.',
          year: '2020',
          title: 'Information Gain and Mutual Information for Machine Learning',
          source: 'Machine Learning Mastery, retrieved January 9, 2026',
          url: 'https://machinelearningmastery.com/information-gain-and-mutual-information/'
        },
        {
          id: 20,
          authors: 'Chen, T., and Guestrin, C.',
          year: '2016',
          title: 'XGBoost: A Scalable Tree Boosting System',
          source: 'Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, 785-794'
        },
        {
          id: 21,
          authors: 'Dahmen, J., Cook, D., Fellows, R., & Schmitter-Edgecombe, M.',
          year: '2017',
          title: 'An analysis of a digital variant of the Trail Making Test using machine learning techniques',
          source: 'Technology and Health Care, 25(2), 251–264'
        },
        {
          id: 22,
          authors: 'Dwyer, G.',
          year: '2016',
          title: 'Flask By Example',
          source: 'Packt Publishing Ltd'
        },
        {
          id: 23,
          authors: 'Dziechciaz, M., & Filip, R.',
          year: '2014',
          title: 'Biological psychological and social determinants of old age: Bio-psycho-social aspects of human aging',
          source: 'Annals of agricultural and environmental medicine, 21(4)'
        },
        {
          id: 24,
          authors: 'Gowda, P., & Gowda, A.',
          year: '2024',
          title: 'Best Practices in REST API Design for Enhanced Scalability and Security',
          source: 'Journal of Artificial Intelligence, Machine Learning and Data Science, 2(1), 827–830'
        },
        {
          id: 25,
          authors: 'Hcini, G., Jdey, I., & Dhahri, H.',
          year: '2024',
          title: 'Investigating Deep Learning for Early Detection and Decision-Making in Alzheimer’s Disease: A Comprehensive Review',
          source: 'Neural Processing Letters, 56(3), 1–38'
        },
        {
          id: 26,
          authors: 'James, C., Ranson, J. M., Everson, R., & Llewellyn, D. J.',
          year: '2021',
          title: 'Performance of machine learning algorithms for predicting progression to dementia in memory clinic patients',
          source: 'JAMA network open, 4(12), e2136553–e2136553'
        },
        {
          id: 27,
          authors: 'JD, H.',
          year: '2004',
          title: 'A meta-analytic review of verbal fluency performance following focal cortical lesions',
          source: 'Neuropsychology, 18, 284–295'
        },
        {
          id: 28,
          authors: 'Kornienko, D. V., Mishina, S. V., Shcherbatykh, S. V., and Melnikov, M. O.',
          year: '2021',
          title: 'Principles of Securing RESTful API Web Services Developed With Python Frameworks',
          source: 'Journal of Physics: Conference Series, 2094(3), 032016'
        },
        {
          id: 29,
          authors: 'Kursa, M. B., Jankowski, A., & Rudnicki, W. R.',
          year: '2010',
          title: 'Boruta–a system for feature selection',
          source: 'Fundamenta Informaticae, 101(4), 271–285'
        },
        {
          id: 30,
          authors: 'Kursa, M. B., & Rudnicki, W. R.',
          year: '2010',
          title: 'Feature selection with the Boruta package',
          source: 'Journal of statistical software, 36, 1–13'
        },
        {
          id: 31,
          authors: 'Marin, A., DeCaro, R., Schiloski, K., Elshaar, A. a., Dwyer, B., Vives-Rodriguez, A., Palumbo, R., Turk, K., & Budson, A.',
          year: '2022',
          title: 'Home-based electronic cognitive therapy in patients with alzheimer disease: Feasibility randomized controlled trial',
          source: 'JMIR Formative Research, 6(9), e34450'
        },
        {
          id: 32,
          authors: 'Monsch, A. U., Bondi, M. W., Butters, N., Salmon, D. P., Katzman, R., & Thal, L. J.',
          year: '1992',
          title: 'Comparisons of verbal fluency tasks in the detection of dementia of the Alzheimer type',
          source: 'Archives of neurology, 49(12), 1253–1258'
        },
        {
          id: 33,
          authors: 'Pang, Y., Kukull, W., Sano, M., Albin, R., Shen, C., Zhou, J., & Dodge, H. H.',
          year: '2023',
          title: 'Predicting progression from normal to MCI and from MCI to AD using clinical variables in the national Alzheimer’s coordinating center uniform data set version 3: Application of machine learning models and a probability calculator',
          source: 'The journal of prevention of Alzheimer\'s disease, 10(2), 301–313'
        },
        {
          id: 34,
          authors: 'Radford, A., Kim, J. W., Xu, T., Brockman, G., McLeavey, C., and Sutskever, I.',
          year: '2023',
          title: 'Robust Speech Recognition Via Large-Scale Weak Supervision',
          source: 'International Conference on Machine Learning, 28492-28518'
        },
        {
          id: 35,
          authors: 'SYSTRAN',
          year: '2025',
          title: 'Faster-Whisper',
          source: 'GitHub, retrieved January 9, 2026',
          url: 'https://github.com/SYSTRAN/faster-whisper'
        },
        {
          id: 36,
          authors: 'ÚFAL',
          year: '2025',
          title: 'Whisper-Streaming',
          source: 'GitHub, retrieved January 9, 2026',
          url: 'https://github.com/ufal/whisper_streaming'
        },
        {
          id: 37,
          authors: 'Vajrobol, V., Gupta, B. B., & Gaurav, A.',
          year: '2024',
          title: 'Mutual information based logistic regression for phishing URL detection',
          source: 'Cyber Security and Applications, 2, 100044'
        },
        {
          id: 38,
          authors: 'Vallesi, A.',
          year: '2020',
          title: 'On the utility of the trail making test in migraine with and without aura: a meta-analysis',
          source: 'The Journal of Headache and Pain, 21(1), 63'
        },
        {
          id: 39,
          authors: 'Vayadande, K., Purohit, S., Rathod, C., Rathod, M., Rathi, P., & Rathi, P.',
          year: '2024',
          title: 'Web Development and Performance Comparison of Web Development Frameworks: A Review Paper',
          source: 'Grenze International Journal of Engineering & Technology (GIJET), 10'
        },
        {
          id: 40,
          authors: 'Wang, R.-Y., Zhou, J.-H., Huang, Y.-C., & Yang, Y.-R.',
          year: '2018',
          title: 'Reliability of the Chinese version of the Trail Making Test and Stroop Color and Word Test among older adults',
          source: 'International Journal of Gerontology, 12(4), 336–339'
        },
        {
          id: 41,
          authors: 'Zhang, J., Song, L., Miller, Z., Chan, K. C., & Huang, K.-l.',
          year: '2024',
          title: 'Machine learning models identify predictive features of patient mortality across dementia types',
          source: 'Communications medicine, 4(1), 23'
        }
      ]
    }
  ]);
}
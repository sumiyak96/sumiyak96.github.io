import React from 'react';
import styles from './Experience.module.scss';

const experiences = [
    {
        year: '〜2015',
        title: '子ども時代',
        description:
            '幼稚園の頃にサッカーを始めてから、気づけば高校卒業まで10年以上ずっとサッカー漬けの毎日。\n朝から晩までボールを蹴って、週末は試合。\n中学も高校も部活中心の生活で、いつも日焼けしていた。',
    },
    {
        year: '2015 - 2019',
        title: '大学時代',
        description:
            '高校時代に授業をサボりすぎて痛い目を見た反動で、真面目に授業に出席する大学生活を送る。\n大学1年の春にアメリカのサンフランシスコを訪れてから、海外への魅力に惹かれ、もっと世界を見てみたいと思うようになる。\n大学3年終了後、休学し1年間アメリカのシアトルへ留学。\n留学中は長期休みを利用し、アメリカ西海岸縦断ロードトリップ、グランドサークルロードトリップ、中米3カ国（メキシコ、キューバ、ベリーズ）バックパッカーなどたくさん旅をして、旅の虜となった。',
    },
    {
        year: '2019 - 2024',
        title: '会社員時代',
        description:
            '文系出身ながらITに興味を持ち、金融系のシステム開発に強いシンプレクスにエンジニアとして入社。\nハードワークを歓迎する社風だったので、1年目からテッペンを超えてタクシーで帰る日々を送った。\n金融系の業務や取引のシステムに関わりながら、要件定義から保守運用まで幅広く経験。\nどちらかというと職人的な技術より、幅広くなんでも器用にこなすジェネラリストタイプのエンジニアだったと思う。',
    },
    {
        year: '2024 - 2025',
        title: '世界一周バックパッカーひとり旅',
        description:
          '2024年8月、新卒から勤めた会社を退職。\nそしてついに念願の世界一周の旅へ。バックパックひとつでアジア、中東、ヨーロッパ、アフリカを約7ヶ月かけて巡った。\nもともとは1年以内で南米、ヨーロッパ、オセアニアを含めて全部回りきる予定だったが、旅に出てすぐに世界の広さを実感し、とても1年では回りきれないと気づく。',
      },
      {
        year: '2025 - 現在',
        title: '世界を旅する、フリーランスエンジニアへ',
        description:
          '「旅をしながら働く」ことができれば、「半永久的に旅を続けることができるのでは？」と思いつき、「世界を旅する、フリーランスエンジニア」を目指して活動スタート。\n場所に縛られず、好きな場所から好きな時に働くスタイルを目指し絶賛奮闘中。',
      }
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className={styles.experience}>
            <h2 className={styles.heading}>Experience</h2>
            <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.year}>{exp.year}</div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{exp.title}</h3>
                            <p className={styles.description}>
                                {exp.description.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
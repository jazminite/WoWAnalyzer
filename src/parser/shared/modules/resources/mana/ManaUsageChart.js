import React from 'react';

import Panel from 'interface/report/Results/statistics/Panel';
import Analyzer from 'parser/core/Analyzer';
import ManaValues from 'parser/shared/modules/ManaValues';
import HealingDone from 'parser/shared/modules/HealingDone';

import ManaUsageChartComponent from './ManaUsageChartComponent';

class ManaUsageChart extends Analyzer {
  static dependencies = {
    manaValues: ManaValues,
    healingDone: HealingDone,
  };

  statistic() {
    const reportCode = this.owner.report.code;
    const actorId = this.owner.playerId;
    const start = this.owner.fight.start_time;
    const end = this.owner.fight.end_time;

    return (
      <Panel
        title="Mana usage"
        explanation="This shows you your mana usage in correlation with your throughput. Big spikes in mana usage without increases in throughput may indicate poor mana usage. The scale for both mana lines is 0-100% where 100% is aligned with the max HPS throughput."
        position={110}
      >
        <ManaUsageChartComponent
          reportCode={reportCode}
          actorId={actorId}
          start={start}
          end={end}
          manaUpdates={this.manaValues.manaUpdates}
          healingBySecond={this.healingDone.bySecond}
        />
      </Panel>
    );
  }
}

export default ManaUsageChart;

import SPELLS from 'common/SPELLS';
import Analyzer, { Options } from 'parser/core/Analyzer';
import Abilities from 'parser/core/modules/Abilities';
import Buffs from 'parser/core/modules/Auras';
import CastEfficiency from 'parser/shared/modules/CastEfficiency';
import StatTracker from 'parser/shared/modules/StatTracker';

class Fated extends Analyzer {
  static dependencies = {
    abilities: Abilities,
    buffs: Buffs,
    castEfficiency: CastEfficiency,
    statTracker: StatTracker,
  };

  protected abilities!: Abilities;
  protected buffs!: Buffs;
  protected castEfficiency!: CastEfficiency;
  protected statTracker!: StatTracker;

  constructor(
    options: Options & {
      abilities: Abilities;
      buffs: Buffs;
      castEfficiency: CastEfficiency;
      statTracker: StatTracker;
    },
  ) {
    super(options);
    if (!this.selectedCombatant.hasBuff(SPELLS.FATED_RAID.id)) {
      this.active = false;
      return;
    }
    options.buffs.add({
      spellId: SPELLS.FATED_INFUSION_RECONFIGURATION_EMITTER.id,
      timelineHighlight: true,
    });
    options.buffs.add({
      spellId: SPELLS.FATED_INFUSION_CHAOTIC_ESSENCE.id,
      timelineHighlight: true,
    });
    options.buffs.add({
      spellId: SPELLS.FATED_INFUSION_CREATION_SPARK.id,
      timelineHighlight: true,
    });
    options.buffs.add({
      spellId: SPELLS.FATED_INFUSION_PROTOFORM_BARRIER.id,
      timelineHighlight: true,
    });
  }
}

export default Fated;

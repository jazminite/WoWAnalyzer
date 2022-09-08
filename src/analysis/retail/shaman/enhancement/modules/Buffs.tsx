import SPELLS from 'common/SPELLS';
import BLOODLUST_BUFFS from 'game/BLOODLUST_BUFFS';
import CoreAuras from 'parser/core/modules/Auras';

class Buffs extends CoreAuras {
  auras() {
    const combatant = this.selectedCombatant;

    return [
      {
        spellId: SPELLS.ASCENDANCE_TALENT_ENHANCEMENT.id,
        timelineHighlight: true,
      },
      {
        spellId: SPELLS.STORMBRINGER_BUFF.id,
        timelineHighlight: true,
      },
      {
        spellId: SPELLS.BERSERKING.id,
        timelineHighlight: true,
      },
      {
        spellId: SPELLS.BLOOD_FURY_SPELL_AND_PHYSICAL.id,
        timelineHighlight: true,
      },
      {
        spellId: Object.keys(BLOODLUST_BUFFS).map((item) => Number(item)),
        timelineHighlight: true,
      },
      {
        spellId: SPELLS.HOT_HAND_BUFF.id,
        enabled: combatant.hasTalent(SPELLS.HOT_HAND_TALENT.id),
        timelineHighlight: true,
      },
      {
        spellId: SPELLS.HAILSTORM_BUFF.id,
        enabled: combatant.hasTalent(SPELLS.HAILSTORM_TALENT.id),
        timelineHighlight: true,
      },
      {
        spellId: SPELLS.STORMKEEPER_TALENT_ENHANCEMENT.id,
        triggeredBySpellId: SPELLS.STORMKEEPER_TALENT_ENHANCEMENT.id,
        timelineHighlight: true,
      },
      {
        spellId: SPELLS.WINDFURY_TOTEM_BUFF.id,
        triggeredBySpellId: SPELLS.WINDFURY_TOTEM.id,
        timelineHighlight: true,
      },
    ];
  }
}

export default Buffs;
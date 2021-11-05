module.exports = `
{{!-- D&D Beyond Character updater --}}
<h2 class="module-header">Character Updater (Beta)</h2>
<div class="form-group">
    <label>Enable character updater (global)</label>
    <div class="form-fields">        
        <input type="checkbox" name="ddb-game-log.enable_character_updater" {{#if coreSettings/integrations/characterUpdater/enabled}}checked{{/if}}/>
    </div>
    <p class="notes">It will synchronize the character attributes from D&D Beyond in real-time.</p>
</div>
{{#if coreSettings/integrations/characterUpdater/enabled}}
<div class="form-group">
    <hr>
</div>
  <div class="form-group">
      <label>Enable hit point updates</label>
      <div class="form-fields">        
          <input type="checkbox" name="ddb-game-log.enable_hp_updates" {{#if coreSettings/integrations/characterUpdater/hpsync}}checked{{/if}}/>
      </div>
      <p class="notes">It will synchronize the hit point changes of the characters.</p>
  </div>
  <div class="form-group">
      <label>Enable exhaustion level updates</label>
      <div class="form-fields">        
          <input type="checkbox" name="ddb-game-log.enable_exhaustion_updates" {{#if coreSettings/integrations/characterUpdater/exhaustion}}checked{{/if}}/>
      </div>
      <p class="notes">It will synchronize the exhaustion level changes of the characters.</p>
  </div>
  <div class="form-group">
      <label>Enable inspiration point update</label>
      <div class="form-fields">        
          <input type="checkbox" name="ddb-game-log.enable_inspiration_updates" {{#if coreSettings/integrations/characterUpdater/inspiration}}checked{{/if}}/>
      </div>
      <p class="notes">It will synchronize the inspiration point changes of the characters.</p>
  </div>
  <div class="form-group">
      <label>Enable death save updates</label>
      <div class="form-fields">        
          <input type="checkbox" name="ddb-game-log.enable_death_save_updates" {{#if coreSettings/integrations/characterUpdater/deathsave}}checked{{/if}}/>
      </div>
      <p class="notes">It will synchronize the death save status changes of the characters.</p>
  </div>
  <div class="form-group">
      <label>Enable XP updates</label>
      <div class="form-fields">        
          <input type="checkbox" name="ddb-game-log.enable_character_xp_updates" {{#if coreSettings/integrations/characterUpdater/xp}}checked{{/if}}/>
      </div>
      <p class="notes">It will synchronize the experience point changes of the characters.</p>
  </div>
  <div class="form-group">
      <label>Enable level updates</label>
      <div class="form-fields">        
          <input type="checkbox" name="ddb-game-log.enable_character_level_updates" {{#if coreSettings/integrations/characterUpdater/level}}checked{{/if}}/>
      </div>
      <p class="notes">It will synchronize the character level changes.</p>
  </div>
  <h2 class="module-header">Defenses Updater (Beta)</h2>
  <div class="form-group">
      <label>Enable damage resistances updates</label>
      <div class="form-fields">        
          <input type="checkbox" name="ddb-game-log.enable_damage_resistances_updates" {{#if coreSettings/integrations/characterUpdater/damageResistances}}checked{{/if}}/>
      </div>
      <p class="notes">It will synchronize the damage resistances changes of the character.</p>
  </div>
  <div class="form-group">
      <label>Enable damage immunities updates</label>
      <div class="form-fields">        
          <input type="checkbox" name="ddb-game-log.enable_damage_immunities_updates" {{#if coreSettings/integrations/characterUpdater/damageImmunities}}checked{{/if}}/>
      </div>
      <p class="notes">It will synchronize the damage immunities changes of the character.</p>
  </div>
  <div class="form-group">
      <label>Enable damage vulnerabilities updates</label>
      <div class="form-fields">        
          <input type="checkbox" name="ddb-game-log.enable_damage_vulnerabilities_updates" {{#if coreSettings/integrations/characterUpdater/damageVulnerabilities}}checked{{/if}}/>
      </div>
      <p class="notes">It will synchronize the damage vulnerabilities changes of the character.</p>
  </div>
  <div class="form-group">
      <label>Enable condition immunities updates</label>
      <div class="form-fields">        
          <input type="checkbox" name="ddb-game-log.enable_condition_immunities_updates" {{#if coreSettings/integrations/characterUpdater/conditionImmunities}}checked{{/if}}/>
      </div>
      <p class="notes">It will synchronize the condition immunities changes of the character.</p>
  </div>
  <h2 class="module-header">Condition Updater (Beta)</h2>
  <div class="form-group">
    {{#unless coreSettings/integrations/cub/installedAndEnabled}}
        {{#unless coreSettings/integrations/cub/enabled}}
          <p class="notification error">Combat Utility Belt module is not installed or enabled. Please install and enable it to be able to use this feature. <a href="https://foundryvtt.com/packages/combat-utility-belt" target="_blank" style="color: #ffcc00; text-decoration: none;"><i class="fas fa-download"></i> Download the Combat Utility Belt module</a></p>
        {{else}}
          <p class="notification warning">You have to enable Enhanced Conditions in Combat Utility Belt settings to be able to use this feature.</p>
        {{/unless}}
      {{/unless}}
  </div>
  <div class="form-group">
      <label>Enable condition updates</label>
      <div class="form-fields">        
          <input type="checkbox" name="ddb-game-log.enable_conditions_updates" {{#unless coreSettings/integrations/cub/installedAndEnabled}}disabled{{/unless}} {{#if coreSettings/integrations/characterUpdater/conditions}}checked{{/if}}/>
      </div>
      <p class="notes">It will synchronize the conditions changes of the character.</p>
  </div>
  <div class="form-group">
      <label>Respect custom conditions</label>
      <div class="form-fields">        
          <input type="checkbox" name="ddb-game-log.enable_respect_custom_conditions" {{#unless coreSettings/integrations/cub/installedAndEnabled}}disabled{{/unless}} {{#if coreSettings/integrations/characterUpdater/respectCustomConditions}}checked{{/if}}/>
      </div>
      <p class="notes">It will not remove custom conditions from the entity when updating his/her conditions from D&D Beyond.</p>
  </div>
{{/if}}
`;

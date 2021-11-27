module.exports = `
{{!-- Pending rolls --}}
<h2 class="module-header">Roll settings</h2>
<div class="form-group">
    <label>Display pending rolls</label>
    <div class="form-fields">        
        <input type="checkbox" name="ddb-game-log.enable_pending_rolls" {{#if coreSettings/integrations/rolls/pendingRolls/enabled}}checked{{/if}}/>
    </div>
    <p class="notes">It will display pending rolls before roll results</p>
</div>
<div class="form-group">
    <label>Auto-hide pending rolls</label>
    <div class="form-fields">        
        <input type="checkbox" name="ddb-game-log.auto_remove_pending_rolls" {{#if coreSettings/integrations/rolls/pendingRolls/autoRemove}}checked{{/if}}/>
    </div>
    <p class="notes">It will remove the pending roll message automatically</p>
</div>

<div class="form-group">
    <label>Exclude unmapped rolls</label>
    <div class="form-fields">        
        <input type="checkbox" name="ddb-game-log.exclude_unmapped_rolls" {{#if coreSettings/integrations/rolls/excludeUnmapped}}checked{{/if}}/>
    </div>
    <p class="notes">It will exclude rolls from D&D Beyond characters who does not exist in the mapping</p>
</div>

<div class="form-group">
    <label>Character name click behaviour</label>
    <div class="form-fields">
        <select name="ddb-game-log.character_name_click_behaviour_gm">
            <option value="nothing" {{isSelected coreSettings/integrations/rolls/characterNameClickBehaviourGM "nothing"}}>Do nothing</option>
            <option value="ptt" {{isSelected coreSettings/integrations/rolls/characterNameClickBehaviourGM "ptt"}}>Pan to token</option>
            <option value="openSheet" {{isSelected coreSettings/integrations/rolls/characterNameClickBehaviourGM "openSheet"}}>Open character sheet (Foundry)</option>
            <option value="openDDBSheet" {{isSelected coreSettings/integrations/rolls/characterNameClickBehaviourGM "openDDBSheet"}}>Open character sheet (D&D Beyond)</option>
        </select>
    </div>
    <p class="notes">You can select what should happen if someone clicks on the character name on the chatcard.</p>
</div>

{{#if (checkMembershipLevel coreSettings/membership 1)}}
    <div class="form-group">
        <label>Respect D&D Beyond roll targets</label>
        <div class="form-fields">        
            <input type="checkbox" name="ddb-game-log.roll_visibility_targeted_rolls" {{#if coreSettings/integrations/rolls/respectTargetedRolls}}checked{{/if}}/>
        </div>
        <p class="notes">It will affect the visibility of <strong>your users</strong> rolls from DND Beyond</p>
    </div>
{{/if}}

{{#if (checkMembershipLevel coreSettings/membership 2)}}
    <div class="form-group">
        <label>Default Monster Roll Visibility</label>
        <div class="form-fields">        
            <select name="ddb-game-log.roll_visibility_monster">
            {{#each coreSettings/integrations/rolls/opts}}
                <option value="{{@this}}" {{isSelected ../coreSettings/integrations/rolls/visibilityMonster this}}>{{@key}}</option>
            {{/each}}
            </select>
        </div>
        <p class="notes">It will affect the visibility of <strong>monster rolls</strong> from DND Beyond</p>
    </div>
{{/if}}

{{!-- <div class="form-group">
    <label>Default Roll Visibility</label>
    <div class="form-fields">        
        <select name="ddb-game-log.roll_visibility_pc">
        {{#each coreSettings/integrations/rolls/opts}}
            <option value="{{@this}}" {{isSelected ../coreSettings/integrations/rolls/visibilityPC this}}>{{@key}}</option>
        {{/each}}
        </select>
    </div>
    <p class="notes">It will affect the visibility of your player's rolls from DND Beyond</p>
</div> --}}
`;

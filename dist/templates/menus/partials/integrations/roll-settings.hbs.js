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
module.exports = `
{{!-- Pending rolls --}}
<h2 class="module-header">Avatar settings</h2>
<div class="form-group">
    <label>Display avatar images</label>
    <div class="form-fields">        
        <input type="checkbox" name="ddb-game-log.enable_avatars" {{#if coreSettings/integrations/rolls/avatars/enabled}}checked{{/if}}/>
    </div>
    <p class="notes">It will display avatar images in the roll messages</p>
</div>
<div class="form-group">
    <label>Avatar image source</label>
    <div class="form-fields">        
        <select name="ddb-game-log.avatar_source">
            <option value="ddb" {{isSelected coreSettings/integrations/rolls/avatars/source "ddb"}}>D&D Beyond Character Sheet</option>
            <option value="actor" {{isSelected coreSettings/integrations/rolls/avatars/source "actor"}}>Actor</option>
            <option value="token" {{isSelected coreSettings/integrations/rolls/avatars/source "token"}}>Token</option>
        </select>
    </div>
    <p class="notes">You can choose which player avatar image to display in the roll messages</p>
</div>
<div class="form-group">
    <label>Avatar click behaviour (as a GM)</label>
    <div class="form-fields">
        <select name="ddb-game-log.avatar_click_behaviour_gm">
            <option value="nothing" {{isSelected coreSettings/integrations/rolls/avatars/avatarClickBehaviourGM "nothing"}}>Do nothing</option>
            <option value="ptt" {{isSelected coreSettings/integrations/rolls/avatars/avatarClickBehaviourGM "ptt"}}>Pan to token</option>
            <option value="openSheet" {{isSelected coreSettings/integrations/rolls/avatars/avatarClickBehaviourGM "openSheet"}}>Open character sheet (Foundry)</option>
            <option value="openDDBSheet" {{isSelected coreSettings/integrations/rolls/avatars/avatarClickBehaviourGM "openDDBSheet"}}>Open character sheet (D&D Beyond)</option>
        </select>
    </div>
    <p class="notes">You can select what should happen if the GM clicks on the character avatar on the chatcard.</p>
</div>
`;

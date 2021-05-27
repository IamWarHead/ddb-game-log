module.exports = `
{{!-- Pending rolls --}}
<h2 class="module-header">Profile image settings</h2>
<div class="form-group">
    <label>Display profile images</label>
    <div class="form-fields">        
        <input type="checkbox" name="ddb-game-log.enable_avatars" {{#if coreSettings/integrations/rolls/avatars/enabled}}checked{{/if}}/>
    </div>
    <p class="notes">It will display profile images in the roll messages</p>
</div>
<div class="form-group">
    <label>Profile image source</label>
    <div class="form-fields">        
        <select name="ddb-game-log.avatar_source">
            <option value="ddb" {{isSelected coreSettings/integrations/rolls/avatars/source "ddb"}}>D&D Beyond Character Sheet</option>
            <option value="actor" {{isSelected coreSettings/integrations/rolls/avatars/source "actor"}}>Actor</option>
            <option value="token" {{isSelected coreSettings/integrations/rolls/avatars/source "token"}}>Token</option>
        </select>
    </div>
    <p class="notes">You can choose which player avatar image to display in the roll messages</p>
</div>
`;
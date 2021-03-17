module.exports = `
{{!-- Pending rolls --}}
<h2 class="module-header">Pending rolls</h2>
<div class="form-group">
    <label>Display pending rolls</label>
    <div class="form-fields">        
        <input type="checkbox" name="ddb-game-log.enable_pending_rolls" {{#if coreSettings/integrations/pendingRolls/enabled}}checked{{/if}}/>
    </div>
    <p class="notes">It will display pending rolls before roll results</p>
</div>
<div class="form-group">
    <label>Auto-hide pending rolls</label>
    <div class="form-fields">        
        <input type="checkbox" name="ddb-game-log.auto_remove_pending_rolls" {{#if coreSettings/integrations/pendingRolls/autoRemove}}checked{{/if}}/>
    </div>
    <p class="notes">It will remove the pending roll message automatically</p>
</div>
`;
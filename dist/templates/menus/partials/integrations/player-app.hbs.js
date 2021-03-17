module.exports = `
{{!-- Player App Integration --}}
<h2 class="module-header">D&D Beyond Player App Integration</h2>
<div class="form-group">
    <label>Enable Player App Integration</label>
    <div class="form-fields">        
        <input type="checkbox" name="ddb-game-log.enable_player_app" {{#if coreSettings/integrations/playerApp}}checked{{/if}}/>
    </div>
    <p class="notes">It will enable roll parsing from D&D Beyond Player app</p>
</div>
`;
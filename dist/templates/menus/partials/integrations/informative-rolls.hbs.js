module.exports = `
{{!-- Informative rolls --}}
<h2 class="module-header">Roll result breakdown</h2>
<div class="form-group">
    <label>Enable roll result breakdown</label>
    <div class="form-fields">        
        <input type="checkbox" name="ddb-game-log.enable_informative_rolls" {{#if coreSettings/integrations/informativeRolls}}checked{{/if}}/>
    </div>
    <p class="notes">It will generate verbose roll results.</p>
</div>
`;
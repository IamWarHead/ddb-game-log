module.exports = `
{{!-- Basic automatism --}}
    <h2 class="module-header">Basic Automation</h2>
    <div class="form-group">
        <label>Enable initiative tracking</label>
        <div class="form-fields">        
            <input type="checkbox" name="ddb-game-log.enable_initiative_tracking" {{#if coreSettings/integrations/automatism/basic/initiative/enabled}}checked{{/if}}/>
        </div>
        <p class="notes">It will enable to update the initiative values of your combatants if they roll for initiative.</p>
    </div>
    <div class="form-group">
        <label>Confirm value override</label>
        <div class="form-fields">        
            <input type="checkbox" name="ddb-game-log.initiative_tracking_confirm_override" {{#if coreSettings/integrations/automatism/basic/initiative/confirmOverride}}checked{{/if}}/>
        </div>
        <p class="notes">It will display a confirmation dialog to the gm if the player has an initiative value already (to override it or not). <strong>If it is unchecked it will override the current initiative value of your player</strong> without a question if multiple initiative roll happens.</p>
    </div>
`;
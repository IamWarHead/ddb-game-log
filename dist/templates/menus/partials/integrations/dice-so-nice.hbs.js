module.exports = `
{{!-- Dice So Nice integration --}}
<h2 class="module-header">Dice So Nice! Integration</h2>
{{#unless coreSettings/integrations/dice3d/moduleEnabled}}
    <p class="notification warning">Dice So Nice module is not installed or enabled. Please install and enable it to be able to use this integration.</p>
{{/unless}}
<div class="form-group">
    <label>Enable Dice So Nice! Integration</label>
    <div class="form-fields">        
        <input type="checkbox" name="ddb-game-log.enable_dice3d" {{#if coreSettings/integrations/dice3d/enabled}}checked{{/if}} {{#unless coreSettings/integrations/dice3d/moduleEnabled}}disabled{{/unless}} />
    </div>
    <p class="notes">Turn on to visualise rolls [External module needed!]</p>
</div>
<div class="form-group">
        <label>Message timing</label>
    <div class="form-fields">
        <select disabled name="ddb-game-log.dice3d_timing" {{#unless coreSettings/integrations/dice3d/moduleEnabled}}disabled{{/unless}}>
            <option value="before" {{isSelected coreSettings/integrations/dice3d/timing "before"}}>Before the roll animation</option>
            <option value="after" {{isSelected coreSettings/integrations/dice3d/timing "after"}}>After the roll animation</option>
        </select>
    </div>
    <p class="notes"><i class="fas fa-exclamation-triangle"></i> In the future you can set this in the official dice so nice settings.</p>
</div>
`;
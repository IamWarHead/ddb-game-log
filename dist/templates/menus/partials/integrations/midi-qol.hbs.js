module.exports = `
    <h2 class="module-header">MidiQOL Integration (Experimental)</h2>
    {{#unless coreSettings/integrations/midiqol/moduleEnabled}}
        <p class="notification error">MidiQOL module is not installed or enabled. Please install and enable it to be able to use this feature. <a href="https://foundryvtt.com/packages/midi-qol" target="_blank" style="color: #ffcc00; text-decoration: none;"><i class="fas fa-download"></i> Download the MidiQOL module</a></p>
    {{/unless}}
    <div class="form-group">
        <label>Enable MidiQOL integration</label>
        <div class="form-fields">        
            <input type="checkbox" name="ddb-game-log.enable_mq" {{#if coreSettings/integrations/midiqol/enabled}}checked{{/if}} {{#unless coreSettings/integrations/midiqol/moduleEnabled}}disabled{{/unless}} />
        </div>
        <p class="notes">Turn on to enable MidiQOL integration [External modules needed!]</p>
    </div>
`;

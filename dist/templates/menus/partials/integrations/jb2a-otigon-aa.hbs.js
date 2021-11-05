module.exports = `
    <h2 class="module-header">JB2A/Otigon AA Integration</h2>
    {{#unless coreSettings/integrations/jb2a/moduleEnabled}}
        <p class="notification error">JB2A and/or Otigon's Automated Animations module is not installed or enabled. Please install and enable them to be able to use this integration.</p>
    {{/unless}}
    <div class="form-group">
        <label>Enable automated animations</label>
        <div class="form-fields">        
            <input type="checkbox" name="ddb-game-log.enable_jb2a_aa" {{#if coreSettings/integrations/jb2a/enabled}}checked{{/if}} {{#unless coreSettings/integrations/jb2a/moduleEnabled}}disabled{{/unless}} />
        </div>
        <p class="notes">Turn on to enable automated animations [External modules needed!]</p>
    </div>
`;

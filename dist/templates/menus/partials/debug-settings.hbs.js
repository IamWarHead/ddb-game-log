module.exports = `
    <div class="tab" data-tab="debug" data-group="sections">
        <h2 class="module-header">Debug settings</h2>
        {{#if coreSettings/debug}}
        <!-- Build -->
        <div class="form-group">
            <label>Build</label>
            <div class="form-fields">        
                <input type="text" value="{{cap coreSettings/buildEnv}}_{{coreSettings/buildVer}}" readonly disabled/>
            </div>
        </div>
        <!-- UUID -->
        <div class="form-group">
            <label>Your unique id</label>
            <div class="form-fields">        
                <input type="text" value="{{coreSettings/_uuid}}" readonly disabled/>
            </div>
            <p class="notes">If you found an issue please include this in support requests.<br/>Please <strong>do not share your UUID</strong> with anyone.</p>
        </div>
        <div class="form-group">
            <hr>
        </div>
        {{/if}}
        <div class="form-group">
            <label>Debug mode</label>
            <div class="form-fields">        
                <input type="checkbox" name="ddb-game-log.debug" {{#if coreSettings/debug}}checked{{/if}}/>
            </div>
        </div>
    </div>
`;
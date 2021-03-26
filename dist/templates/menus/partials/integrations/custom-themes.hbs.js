module.exports = `
{{!-- Custom Themes --}}
<h2 class="module-header">Custom themes</h2>
<div class="form-group">
    <label>Chat messages theme</label>
    <div class="form-fields">
        <select name="ddb-game-log.custom_css">
            <option value="dark" {{isSelected coreSettings/integrations/customCSS "dark"}}>Dark theme</option>
            <option value="light" {{isSelected coreSettings/integrations/customCSS "light"}}>Light theme</option>
            <option value="default" {{isSelected coreSettings/integrations/customCSS "default"}}>Default</option>
        </select>
    </div>
    <p class="notes">It will style chat messages like on D&D Beyond</p>
</div>
<div class="form-group">
    <label>Border color override</label>
    <div class="form-fields">        
        <input type="checkbox" name="ddb-game-log.override_message_borders" {{#if coreSettings/integrations/overrideBorderColor}}checked{{/if}}/>
    </div>
    <p class="notes">Message borders will have the color of the player who rolled.</p>
</div>
`;
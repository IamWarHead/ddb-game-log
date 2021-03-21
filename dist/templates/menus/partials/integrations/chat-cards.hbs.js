module.exports = `
{{!-- Chat Cards --}}
    <h2 class="module-header">Items and Spells description</h2>
    <div class="form-group">
        <label>Enable description cards</label>
        <div class="form-fields">        
            <input type="checkbox" name="ddb-game-log.enable_chatcards" {{#if coreSettings/integrations/chatcards/enabled}}checked{{/if}}/>
        </div>
        <p class="notes">It will display item and spell descriptions in roll messages</p>
    </div>
    <div class="form-group">
        <label>Enable links to D&D Beyond</label>
        <div class="form-fields">        
            <input type="checkbox" name="ddb-game-log.enable_chatcards_ddb_link" {{#if coreSettings/integrations/chatcards/links/ddb/enabled}}checked{{/if}}/>
        </div>
        <p class="notes">It will display a link to the item or spell compendium page on D&D Beyond</p>
    </div>
    <div class="form-group">
        <label>Enable links to item/spell sheet</label>
        <div class="form-fields">        
            <input type="checkbox" name="ddb-game-log.enable_chatcards_sheet_link" {{#if coreSettings/integrations/chatcards/links/sheet/enabled}}checked{{/if}}/>
        </div>
        <p class="notes">It will display a link which will open the compendium sheet of the item or spell.</p>
    </div>
    <div class="form-group">
        <label>Source of item descriptions</label>
        <div class="form-fields">
            <select name="ddb-game-log.chatcards_item_source_compendium">
                {{#each coreSettings/integrations/chatcards/compendiums/items}}
                    <option value="{{this/key}}" {{isSelected ../coreSettings/integrations/chatcards/sources/items this/key}}>{{this/label}}</option>
                {{/each}}
            </select>
        </div>
        <p class="notes">It will search for the description of items in this compendium db</p>
    </div>

    <div class="form-group">
        <label>Source of spells descriptions</label>
        <div class="form-fields">
            <select name="ddb-game-log.chatcards_spells_source_compendium">
                {{#each coreSettings/integrations/chatcards/compendiums/spells}}
                    <option value="{{this/key}}" {{isSelected ../coreSettings/integrations/chatcards/sources/spells this/key}}>{{this/label}}</option>
                {{/each}}
            </select>
        </div>
        <p class="notes">It will search for the description of spells in this compendium db</p>
    </div>
`;
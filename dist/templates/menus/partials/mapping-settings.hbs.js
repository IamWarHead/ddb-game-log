module.exports = `
    <div class="tab" data-tab="mapping" data-group="sections">
        <h2 class="module-header">D&D Beyond / FVTT Character Mapping</h2>
        <p>If you would like to display the name of the character in the roll message you have to connect your player's D&D Beyond CharacterID with their ingame actor.</p>
        <div>
            <hr>
        </div>

        <h2 class="module-header">Mapping settings</h2>
        <div class="form-group">
            <label>Display Actors without an owner</label>
            <div class="form-fields">
                <input type="checkbox" name="ddb-game-log.mapping_enable_actors_without_owner" {{#unless coreSettings/mapping/enabled}}disabled{{/unless}} {{#if coreSettings/mapping/enableActorsWithoutOwner}}checked{{/if}}>
            </div>
        </div>
        
        <div class="form-group">
            <label>Display Non-Player Character Actors</label>
            <div class="form-fields">
                <input type="checkbox" name="ddb-game-log.mapping_enable_npc_actors" {{#unless coreSettings/mapping/enabled}}disabled{{/unless}} {{#if coreSettings/mapping/enableNPCActors}}checked{{/if}}>
            </div>
        </div>

        {{#if coreSettings/integrations/ddbimporter/autoImportEnabled}}
        <div class="form-group">
            <label>Try to autofill the mapping</label>
            <div class="form-fields">
                <input type="checkbox" name="ddb-game-log.mapping_enable_ddb_importer" {{#if coreSettings/mapping/disableDDBImporterInput}}disabled{{/if}} {{#if coreSettings/mapping/enableDDBImporter}}checked{{/if}}>
            </div>
            <p class="notes">
                <i class="fas fa-box-open"></i> <strong>EXTERNAL MODULE DEPENDENCY</strong><br>
                You have to install and enable DDB Importer, and you have to import your characters with DDB Importer to use this feature.
            </p>
        </div>
        {{/if}}

        <div><hr></div>
        <div class="form-group submenu">
            {{!-- <label class="type">Actor type</label> --}}
            <label class="right_m_10">D&amp;D Beyond Character ID</label>
            <label>Foundry Player Character</label>
        </div>
        <div class="ddb-game-log-data-container">
            {{#if (objlen coreSettings/entities)}}
                {{#each coreSettings/entities}}
                <div class="form-group submenu ddb-game-log-form-group ddb-game-log-form-group-entities" data-entity-key="{{@key}}">
                    {{!-- <span class="entityType {{getActorType @key}}"></span> --}}
                    <input type="number" value="{{this}}" placeholder="Enter a D&D Beyond CharacterID here...">
                    <select>
                    {{#if ../coreSettings/actors/length}}
                        {{#each ../coreSettings/actors}}
                            <option value="{{this/id}}" {{isSelected @../key this/id}}>{{this/name}}</option>
                        {{/each}}
                    {{/if}}
                    </select>
                </div>
                {{/each}}
            {{else}}
                <p class="notification error">Please add some Player Character Actor and assign it to User with Owner permission.</p>
            {{/if}}
        </div>
        <div><hr></div>
        <div class="form-group">
            <p>If you have created a new player character actor (or removed), or you assigned it to an owner (or deassigned it) please rebuild your mapping db.</p>
        </div>
        <div class="form-group">
            <button class="ddb-game-log-sync-item-icon" type="button" {{#unless coreSettings/mapping/enabled}}disabled{{/unless}}><i class="fas fa-sync-alt"></i> Rebuild mapping database</button>
        </div>
        <div><hr></div>
    </div>
`;

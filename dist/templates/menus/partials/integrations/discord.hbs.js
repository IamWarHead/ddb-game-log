module.exports = `
    <h2 class="module-header">Discord Integration</h2>
    <div class="form-group">
        <label>Enable Discord Integration</label>
        <div class="form-fields">        
            <input type="checkbox" name="ddb-game-log.enable_discord" {{#if coreSettings/integrations/discord/enabled}}checked{{/if}} />
        </div>
        <p class="notes">Turn on to send your rolls to a dedicated channel on your Discord server</p>
    </div>
    <div class="form-group">
        <label>Display source</label>
        <div class="form-fields">        
            <input type="checkbox" name="ddb-game-log.discord_show_roll_source" {{#if coreSettings/integrations/discord/showRollSource}}checked{{/if}} />
        </div>
        <p class="notes">Turn on to indicate that it's a roll from Desktop or the Player App</p>
    </div>
    <div class="form-group">
        <label>Display dice set image</label>
        <div class="form-fields">        
            <input type="checkbox" name="ddb-game-log.discord_show_dice_set" {{#if coreSettings/integrations/discord/showDiceSet}}checked{{/if}} />
        </div>
        <p class="notes">Turn on to display the image of the dice set of your player</p>
    </div>
    <div class="form-group">
        <label>Discord WebHook URL</label>
        <div class="form-fields">        
            <input type="text" name="ddb-game-log.discord_webhook_url" value="{{coreSettings/integrations/discord/webhookUrl}}" />
        </div>
        <p class="notes">Enter the generated webhook url</p>
    </div>
`;
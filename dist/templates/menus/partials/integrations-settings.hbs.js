module.exports = `
    <div class="tab" data-tab="integrations" data-group="sections">
        {{#if (checkMembershipLevel coreSettings/membership 0)}}
            {{> partials/settings/integrations/rollsettings}}
            {{> partials/settings/integrations/automatism/basic}}
        {{/if}}
        {{#if (checkMembershipLevel coreSettings/membership 1)}}
            {{> partials/settings/integrations/customthemes}}
            {{> partials/settings/integrations/informativerolls}}
            {{> partials/settings/integrations/avatarsettings}}
        {{/if}}
        {{#if (checkMembershipLevel coreSettings/membership 2)}}
            {{> partials/settings/integrations/playerapp}}
            {{> partials/settings/integrations/characterupdater}}
            {{> partials/settings/integrations/dicesonice}}
            {{> partials/settings/integrations/midiqol}}
            {{> partials/settings/integrations/jb2a}}
            {{> partials/settings/integrations/discord}}
            {{> partials/settings/integrations/chatcards}}
        {{/if}}
        {{#if (checkMembershipLevel coreSettings/membership 3)}}
            {{!-- coming soon --}}
        {{/if}}
    </div>
`;

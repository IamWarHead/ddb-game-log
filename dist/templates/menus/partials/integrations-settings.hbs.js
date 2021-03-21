module.exports = `
    <div class="tab" data-tab="integrations" data-group="sections">
        {{#if (checkMembershipLevel coreSettings/membership 0)}}
            {{> partials/settings/integrations/pendingrolls}}
            {{> partials/settings/integrations/automatism/basic}}
        {{/if}}
        {{#if (checkMembershipLevel coreSettings/membership 1)}}
            {{> partials/settings/integrations/customthemes}}
            {{> partials/settings/integrations/informativerolls}}
        {{/if}}
        {{#if (checkMembershipLevel coreSettings/membership 2)}}
            {{> partials/settings/integrations/playerapp}}
            {{> partials/settings/integrations/dicesonice}}
            {{> partials/settings/integrations/discord}}
            {{> partials/settings/integrations/chatcards}}
        {{/if}}
        {{#if (checkMembershipLevel coreSettings/membership 3)}}
            {{!-- coming soon --}}
        {{/if}}
    </div>
`;
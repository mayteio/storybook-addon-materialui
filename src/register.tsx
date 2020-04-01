import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { ADDON_ID, PANEL_ID } from './constants';
import { Panel } from './Panel';

export function register() {
  addons.register(ADDON_ID, () => {
    addons.add(PANEL_ID, {
      title: 'Material UI',
      type: types.PANEL,
      render: ({ active, key }) => (
        <AddonPanel active={active} key={key}>
          <Panel />
        </AddonPanel>
      ),
    });
  });
}

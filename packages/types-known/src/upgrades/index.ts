// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ChainUpgrades } from '@polkadot/types/types';

import kusama from './kusama';
import polkadot from './polkadot';
import westend from './westend';

// Type overrides for specific spec types & versions as given in runtimeVersion
const upgrades: ChainUpgrades[] = [
  kusama,
  polkadot,
  westend
];

export default upgrades;

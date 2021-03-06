// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ChainUpgrades } from '@polkadot/types/types';

import BN from 'bn.js';
import { hexToU8a } from '@polkadot/util';

const upgrades: ChainUpgrades = {
  genesisHash: hexToU8a('0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e'),
  versions: [
    [214356, 4], [392764, 7], [409740, 8], [809976, 20], [877581, 24],
    [879238, 25], [889472, 26], [902937, 27], [932751, 28], [991142, 29],
    [1030162, 31], [1119657, 32], [1199282, 33], [1342534, 34], [1392263, 35],
    [1431703, 36], [1433369, 37], [1490972, 41]
  ].map(([blockNumber, specVersion]) => ({
    blockNumber: new BN(blockNumber),
    specVersion: new BN(specVersion)
  }))
};

export default upgrades;

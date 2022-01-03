import React from 'react';

import Button from '../Button';
import TileSelector from '../TileSelector';

const OptionsPanel = (props) => (
  <div>
    <TileSelector
      numTiles={this.props.numTiles}
    />
    <Button
      playing={this.props.playing}
    />
  </div>
);



export default OptionsPanel;

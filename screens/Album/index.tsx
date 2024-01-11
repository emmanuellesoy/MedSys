import React from 'react';

import Grid from '../../components/Grid';

import {Props} from '../../types/album';

export default function Album({route}: Props) {
  return <>{route?.params?.id ? <Grid id={route.params.id} /> : null}</>;
}

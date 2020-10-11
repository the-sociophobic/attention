import React from 'react'
import { Helmet } from 'react-helmet'

import faviconBlack from 'styles/img/favicon-black.ico'


export default props =>
  <Helmet>
    <title>
      ВНИМАНИЕ
    </title>
    <link rel="icon" type="image/png" href={faviconBlack} sizes="64x64" />
  </Helmet>
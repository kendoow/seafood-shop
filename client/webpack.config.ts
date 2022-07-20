import merge from 'webpack-merge'

import {isProd} from './webpack/utils/env'
import { webpackConfigBase, webpackConfigDev, webpackConfigProd } from './webpack';

export default () => isProd ? merge(webpackConfigProd, webpackConfigBase) : merge(webpackConfigDev, webpackConfigBase) 

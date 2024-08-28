import { ConfigurableModuleBuilder } from '@nestjs/common';
import { CommonModuleOptions } from '@app/common/common-module-options.interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<CommonModuleOptions>().build();
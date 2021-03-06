// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ApiTwoToneSvg from 'icon-base/es/asn/ApiTwoTone';

export interface ApiTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconApiTwoTone: ApiTwoToneIconType = (props, context) => <Icon name='ApiTwoTone' {...{ ...props, ...context.attrs }} icon={ApiTwoToneSvg} />;

IconApiTwoTone.displayName = 'IconApiTwoTone';
IconApiTwoTone.theme = 'twotone';
IconApiTwoTone.originName = 'api';

export default IconApiTwoTone;

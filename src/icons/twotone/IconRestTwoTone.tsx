// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RestTwoToneSvg from 'icon-base/es/asn/RestTwoTone';

export interface RestTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRestTwoTone: RestTwoToneIconType = (props, context) => <Icon name='RestTwoTone' {...{ ...props, ...context.attrs }} icon={RestTwoToneSvg} />;

IconRestTwoTone.displayName = 'IconRestTwoTone';
IconRestTwoTone.theme = 'twotone';
IconRestTwoTone.originName = 'rest';

export default IconRestTwoTone;

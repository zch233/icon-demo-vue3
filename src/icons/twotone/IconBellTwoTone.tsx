// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BellTwoToneSvg from 'icon-base/es/asn/BellTwoTone';

export interface BellTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBellTwoTone: BellTwoToneIconType = (props, context) => <Icon name='BellTwoTone' {...{ ...props, ...context.attrs }} icon={BellTwoToneSvg} />;

IconBellTwoTone.displayName = 'IconBellTwoTone';
IconBellTwoTone.theme = 'twotone';
IconBellTwoTone.originName = 'bell';

export default IconBellTwoTone;

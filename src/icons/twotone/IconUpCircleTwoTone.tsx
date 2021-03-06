// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UpCircleTwoToneSvg from 'icon-base/es/asn/UpCircleTwoTone';

export interface UpCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUpCircleTwoTone: UpCircleTwoToneIconType = (props, context) => (
    <Icon name='UpCircleTwoTone' {...{ ...props, ...context.attrs }} icon={UpCircleTwoToneSvg} />
);

IconUpCircleTwoTone.displayName = 'IconUpCircleTwoTone';
IconUpCircleTwoTone.theme = 'twotone';
IconUpCircleTwoTone.originName = 'up-circle';

export default IconUpCircleTwoTone;

// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DownCircleTwoToneSvg from 'icon-base/es/asn/DownCircleTwoTone';

export interface DownCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDownCircleTwoTone: DownCircleTwoToneIconType = (props, context) => (
    <Icon name='DownCircleTwoTone' {...{ ...props, ...context.attrs }} icon={DownCircleTwoToneSvg} />
);

IconDownCircleTwoTone.displayName = 'IconDownCircleTwoTone';
IconDownCircleTwoTone.theme = 'twotone';
IconDownCircleTwoTone.originName = 'down-circle';

export default IconDownCircleTwoTone;

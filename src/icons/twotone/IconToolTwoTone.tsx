// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ToolTwoToneSvg from 'icon-base/es/asn/ToolTwoTone';

export interface ToolTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconToolTwoTone: ToolTwoToneIconType = (props, context) => <Icon name='ToolTwoTone' {...{ ...props, ...context.attrs }} icon={ToolTwoToneSvg} />;

IconToolTwoTone.displayName = 'IconToolTwoTone';
IconToolTwoTone.theme = 'twotone';
IconToolTwoTone.originName = 'tool';

export default IconToolTwoTone;

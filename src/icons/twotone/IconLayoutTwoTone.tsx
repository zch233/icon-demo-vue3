// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LayoutTwoToneSvg from 'icon-base/es/asn/LayoutTwoTone';

export interface LayoutTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLayoutTwoTone: LayoutTwoToneIconType = (props, context) => <Icon name='LayoutTwoTone' {...{ ...props, ...context.attrs }} icon={LayoutTwoToneSvg} />;

IconLayoutTwoTone.displayName = 'IconLayoutTwoTone';
IconLayoutTwoTone.theme = 'twotone';
IconLayoutTwoTone.originName = 'layout';

export default IconLayoutTwoTone;

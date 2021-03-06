// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EuroTwoToneSvg from 'icon-base/es/asn/EuroTwoTone';

export interface EuroTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconEuroTwoTone: EuroTwoToneIconType = (props, context) => <Icon name='EuroTwoTone' {...{ ...props, ...context.attrs }} icon={EuroTwoToneSvg} />;

IconEuroTwoTone.displayName = 'IconEuroTwoTone';
IconEuroTwoTone.theme = 'twotone';
IconEuroTwoTone.originName = 'euro';

export default IconEuroTwoTone;

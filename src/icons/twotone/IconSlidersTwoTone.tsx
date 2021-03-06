// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SlidersTwoToneSvg from 'icon-base/es/asn/SlidersTwoTone';

export interface SlidersTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSlidersTwoTone: SlidersTwoToneIconType = (props, context) => (
    <Icon name='SlidersTwoTone' {...{ ...props, ...context.attrs }} icon={SlidersTwoToneSvg} />
);

IconSlidersTwoTone.displayName = 'IconSlidersTwoTone';
IconSlidersTwoTone.theme = 'twotone';
IconSlidersTwoTone.originName = 'sliders';

export default IconSlidersTwoTone;

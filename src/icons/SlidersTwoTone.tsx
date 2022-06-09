// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SlidersTwoToneSvg from '@ant-design/icons-svg/lib/asn/SlidersTwoTone';

export interface SlidersTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SlidersTwoTone: SlidersTwoToneIconType = (props, context) => <Icon name='SlidersTwoTone' {...{ ...props, ...context.attrs }} icon={SlidersTwoToneSvg} />;

SlidersTwoTone.displayName = 'SlidersTwoTone';

export default SlidersTwoTone;
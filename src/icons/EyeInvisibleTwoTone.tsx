// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import EyeInvisibleTwoToneSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleTwoTone';

export interface EyeInvisibleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const EyeInvisibleTwoTone: EyeInvisibleTwoToneIconType = (props, context) => <Icon name='EyeInvisibleTwoTone' {...{ ...props, ...context.attrs }} icon={EyeInvisibleTwoToneSvg} />;

EyeInvisibleTwoTone.displayName = 'EyeInvisibleTwoTone';

export default EyeInvisibleTwoTone;
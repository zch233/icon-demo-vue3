// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import HeartTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeartTwoTone';

export interface HeartTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const HeartTwoTone: HeartTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={HeartTwoToneSvg} />;

HeartTwoTone.displayName = 'HeartTwoTone';

export default FunctionalComponent;
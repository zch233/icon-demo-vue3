// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import LeftSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/LeftSquareTwoTone';

export interface LeftSquareTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const LeftSquareTwoTone: LeftSquareTwoToneIconType = (props, context) => <Icon name='LeftSquareTwoTone' {...{ ...props, ...context.attrs }} icon={LeftSquareTwoToneSvg} />;

LeftSquareTwoTone.displayName = 'LeftSquareTwoTone';

export default LeftSquareTwoTone;
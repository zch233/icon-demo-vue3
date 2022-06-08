// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UpSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/UpSquareTwoTone';

export interface UpSquareTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UpSquareTwoTone: UpSquareTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={UpSquareTwoToneSvg} />;

UpSquareTwoTone.displayName = 'UpSquareTwoTone';

export default UpSquareTwoTone;
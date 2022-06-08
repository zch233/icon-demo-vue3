// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CheckSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/CheckSquareTwoTone';

export interface CheckSquareTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CheckSquareTwoTone: CheckSquareTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CheckSquareTwoToneSvg} />;

CheckSquareTwoTone.displayName = 'CheckSquareTwoTone';

export default CheckSquareTwoTone;
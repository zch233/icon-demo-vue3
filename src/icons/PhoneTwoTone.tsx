// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PhoneTwoToneSvg from '@ant-design/icons-svg/lib/asn/PhoneTwoTone';

export interface PhoneTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PhoneTwoTone: PhoneTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PhoneTwoToneSvg} />;

PhoneTwoTone.displayName = 'PhoneTwoTone';

export default FunctionalComponent;
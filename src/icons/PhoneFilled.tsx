// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PhoneFilledSvg from '@ant-design/icons-svg/lib/asn/PhoneFilled';

export interface PhoneFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PhoneFilled: PhoneFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PhoneFilledSvg} />;

PhoneFilled.displayName = 'PhoneFilled';

export default PhoneFilled;
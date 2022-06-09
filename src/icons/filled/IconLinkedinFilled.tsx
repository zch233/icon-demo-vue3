// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LinkedinFilledSvg from '@ant-design/icons-svg/es/asn/LinkedinFilled';

export interface LinkedinFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLinkedinFilled: LinkedinFilledIconType = (props, context) => (
    <Icon name='LinkedinFilled' {...{ ...props, ...context.attrs }} icon={LinkedinFilledSvg} />
);

IconLinkedinFilled.displayName = 'IconLinkedinFilled';

export default IconLinkedinFilled;
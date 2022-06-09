// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MobileFilledSvg from '@ant-design/icons-svg/es/asn/MobileFilled';

export interface MobileFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMobileFilled: MobileFilledIconType = (props, context) => (
    <Icon name='MobileFilled' {...{ ...props, ...context.attrs }} icon={MobileFilledSvg} />
);

IconMobileFilled.displayName = 'IconMobileFilled';

export default IconMobileFilled;
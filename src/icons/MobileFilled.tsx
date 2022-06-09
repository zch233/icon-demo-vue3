// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import MobileFilledSvg from '@ant-design/icons-svg/lib/asn/MobileFilled';

export interface MobileFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const MobileFilled: MobileFilledIconType = (props, context) => <Icon name='MobileFilled' {...{ ...props, ...context.attrs }} icon={MobileFilledSvg} />;

MobileFilled.displayName = 'MobileFilled';

export default MobileFilled;
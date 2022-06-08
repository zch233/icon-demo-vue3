// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BehanceCircleFilledSvg from '@ant-design/icons-svg/lib/asn/BehanceCircleFilled';

export interface BehanceCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BehanceCircleFilled: BehanceCircleFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={BehanceCircleFilledSvg} />;

BehanceCircleFilled.displayName = 'BehanceCircleFilled';

export default BehanceCircleFilled;
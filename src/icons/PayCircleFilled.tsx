// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PayCircleFilled';

export interface PayCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PayCircleFilled: PayCircleFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PayCircleFilledSvg} />;

PayCircleFilled.displayName = 'PayCircleFilled';

export default PayCircleFilled;
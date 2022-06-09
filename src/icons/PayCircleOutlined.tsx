// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PayCircleOutlined';

export interface PayCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PayCircleOutlined: PayCircleOutlinedIconType = (props, context) => <Icon name='PayCircleOutlined' {...{ ...props, ...context.attrs }} icon={PayCircleOutlinedSvg} />;

PayCircleOutlined.displayName = 'PayCircleOutlined';

export default PayCircleOutlined;
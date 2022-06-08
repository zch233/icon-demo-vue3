// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SendOutlinedSvg from '@ant-design/icons-svg/lib/asn/SendOutlined';

export interface SendOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SendOutlined: SendOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={SendOutlinedSvg} />;

SendOutlined.displayName = 'SendOutlined';

export default FunctionalComponent;
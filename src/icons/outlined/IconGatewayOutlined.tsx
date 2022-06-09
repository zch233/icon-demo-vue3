// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GatewayOutlinedSvg from '@ant-design/icons-svg/es/asn/GatewayOutlined';

export interface GatewayOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGatewayOutlined: GatewayOutlinedIconType = (props, context) => (
    <Icon name='GatewayOutlined' {...{ ...props, ...context.attrs }} icon={GatewayOutlinedSvg} />
);

IconGatewayOutlined.displayName = 'IconGatewayOutlined';

export default IconGatewayOutlined;
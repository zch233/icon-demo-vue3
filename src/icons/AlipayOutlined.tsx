// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AlipayOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlipayOutlined';

export interface AlipayOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AlipayOutlined: AlipayOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={AlipayOutlinedSvg} />;

AlipayOutlined.displayName = 'AlipayOutlined';

export default FunctionalComponent;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AlipayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlipayCircleOutlined';

export interface AlipayCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AlipayCircleOutlined: AlipayCircleOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={AlipayCircleOutlinedSvg} />;

AlipayCircleOutlined.displayName = 'AlipayCircleOutlined';

export default FunctionalComponent;
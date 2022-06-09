// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import VerticalAlignMiddleOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignMiddleOutlined';

export interface VerticalAlignMiddleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const VerticalAlignMiddleOutlined: VerticalAlignMiddleOutlinedIconType = (props, context) => <Icon name='VerticalAlignMiddleOutlined' {...{ ...props, ...context.attrs }} icon={VerticalAlignMiddleOutlinedSvg} />;

VerticalAlignMiddleOutlined.displayName = 'VerticalAlignMiddleOutlined';

export default VerticalAlignMiddleOutlined;
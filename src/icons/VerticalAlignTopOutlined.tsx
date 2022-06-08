// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import VerticalAlignTopOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignTopOutlined';

export interface VerticalAlignTopOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const VerticalAlignTopOutlined: VerticalAlignTopOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={VerticalAlignTopOutlinedSvg} />;

VerticalAlignTopOutlined.displayName = 'VerticalAlignTopOutlined';

export default VerticalAlignTopOutlined;
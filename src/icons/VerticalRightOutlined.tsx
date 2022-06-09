// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import VerticalRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalRightOutlined';

export interface VerticalRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const VerticalRightOutlined: VerticalRightOutlinedIconType = (props, context) => <Icon name='VerticalRightOutlined' {...{ ...props, ...context.attrs }} icon={VerticalRightOutlinedSvg} />;

VerticalRightOutlined.displayName = 'VerticalRightOutlined';

export default VerticalRightOutlined;
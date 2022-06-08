// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import VerticalLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalLeftOutlined';

export interface VerticalLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const VerticalLeftOutlined: VerticalLeftOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={VerticalLeftOutlinedSvg} />;

VerticalLeftOutlined.displayName = 'VerticalLeftOutlined';

export default FunctionalComponent;